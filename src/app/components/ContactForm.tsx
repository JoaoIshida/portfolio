'use client';

import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  submit?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear errors when user starts typing
    if (errors[name as keyof FormErrors] || errors.submit) {
      setErrors(prev => ({ ...prev, [name]: undefined, submit: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submit initiated');
    
    if (!validateForm()) {
      console.log('Form validation failed');
      return;
    }
    
    setIsSubmitting(true);
    console.log('Starting form submission...');
    
    try {
      // Use FormSubmit service with FormData
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_subject', `Portfolio Contact: ${formData.subject}`);
      formDataToSend.append('_replyto', formData.email);
      formDataToSend.append('_template', 'table');
      formDataToSend.append('_captcha', 'false');
      // Note: We don't include _autoresponse field - this ensures only you receive emails, not the submitter
      
      const formSubmitResponse = await fetch('https://formsubmit.co/joaoishida@gmail.com', {
        method: 'POST',
        body: formDataToSend,
      });
      
      console.log('FormSubmit response status:', formSubmitResponse.status, 'ok:', formSubmitResponse.ok);
      
      // FormSubmit returns 200 on success (after redirect handling)
      // Accept 200-299 status codes as success
      if (formSubmitResponse.ok || (formSubmitResponse.status >= 200 && formSubmitResponse.status < 300)) {
        console.log('Form submission successful');
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const responseText = await formSubmitResponse.text().catch(() => '');
        console.error('FormSubmit error - status:', formSubmitResponse.status, 'response:', responseText);
        throw new Error(`Submission failed with status ${formSubmitResponse.status}`);
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ 
        submit: 'Failed to send message. Please try again later or contact me directly via email.' 
      });
    } finally {
      setIsSubmitting(false);
      console.log('Form submission process completed');
    }
  };

  const createMailtoLink = () => {
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Hi Joao,

My name is ${formData.name || '[Your Name]'}.

${formData.message || '[Your Message]'}

Best regards,
${formData.name || '[Your Name]'}
${formData.email || '[Your Email]'}`
    );
    
    return `mailto:jvi2@sfu.ca?subject=${subject}&body=${body}`;
  };

  return (
    <div ref={ref} className="max-w-2xl mx-auto">
      <div className={`card p-8 bg-white dark:bg-darkLight border border-gray-200 dark:border-gray-700 shadow-soft ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
        {isSuccess ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-2">
              Thank you for your message!
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-2">
              I'll get back to you as soon as possible.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Note: If this is your first submission, please check your email (including spam) for a confirmation link from FormSubmit.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="btn-primary"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Let's Connect!
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                Feel free to reach out for opportunities, collaborations, or just to say hello.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  label="Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Your full name"
                />
                
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="your.email@example.com"
                />
              </div>
              
              <FormField
                label="Subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                placeholder="What's this about?"
              />
              
              <FormField
                label="Message"
                name="message"
                type="textarea"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                placeholder="Tell me about your project, idea, or just say hi!"
                rows={5}
              />
                             
               {errors.submit && (
                 <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                   <p className="text-red-700 dark:text-red-300 text-sm flex items-center gap-2">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                     {errors.submit}
                   </p>
                 </div>
               )}
               
               <div className="flex flex-col sm:flex-row gap-4">
                 <button
                   type="submit"
                   disabled={isSubmitting}
                   className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                 >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-4 h-4 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
  rows?: number;
}

function FormField({ label, name, type, value, onChange, error, placeholder, rows }: FormFieldProps) {
  const isTextarea = type === 'textarea';
  
  return (
    <div className="space-y-2">
      <label 
        htmlFor={name}
        className="block text-sm font-medium text-gray-900 dark:text-gray-200"
      >
        {label}
      </label>
      
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none ${
            error 
              ? 'border-red-500 focus:ring-red-500 bg-red-50 dark:bg-red-900/20' 
              : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400'
          }`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
            error 
              ? 'border-red-500 focus:ring-red-500 bg-red-50 dark:bg-red-900/20' 
              : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400'
          }`}
        />
      )}
      
      {error && (
        <p className="text-sm text-red-700 dark:text-red-300 flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
} 