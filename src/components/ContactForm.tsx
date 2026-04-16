import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'copied'>('idle');

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration\
      const serviceId = 'service_9hpartu';
      const templateId = 'template_j84nhvn';
      const publicKey = 'hHQXeKwzZpabjqSuN';

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'quipit.ma@gmail.com',
        },
        publicKey
      );

      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
      }, 2000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyMessage = async () => {
    const emailContent = `To: quipit.ma@gmail.com
Subject: Contact from ${formData.name}

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

    const copied = await copyToClipboard(emailContent);
    if (copied) {
      setSubmitStatus('copied');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-w-[90vw] bg-gray-900 border border-cyan-500/40 text-white z-[9999] p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-base sm:text-lg md:text-xl font-bold text-cyan-300 mb-2">
            Get in Touch
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-gray-300 mb-4">
            Fill out the form below and I'll get back to you soon.
          </DialogDescription>
        </DialogHeader>
        
        {submitStatus === 'success' ? (
          <div className="text-center py-6 sm:py-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-5 rounded-full bg-gradient-to-br from-green-500/30 to-cyan-500/30 flex items-center justify-center animate-[pulse_2s_ease-in-out]">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-2">Message Sent! 🎉</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-1">Thanks for reaching out!</p>
            <p className="text-xs sm:text-sm text-gray-400 mb-6">I'll get back to you within 24-48 hours.</p>
            
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3 sm:p-4 mb-6">
              <p className="text-xs sm:text-sm text-cyan-300 mb-2">
                <span className="font-semibold">What's next?</span>
              </p>
              <ul className="text-xs sm:text-sm text-gray-300 space-y-1 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">✓</span>
                  <span>Check your email for a confirmation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">✓</span>
                  <span>I'll review your message carefully</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">✓</span>
                  <span>Expect a reply soon!</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => {
                onClose();
                setSubmitStatus('idle');
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-medium rounded-md transition-all duration-200 shadow-lg hover:shadow-cyan-500/50"
            >
              Close
            </button>
          </div>
        ) : submitStatus === 'copied' ? (
          <div className="text-center py-6 sm:py-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm sm:text-base text-blue-400 font-medium">Message copied!</p>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">Now paste it into your email client and send to:</p>
            <p className="text-cyan-300 font-mono text-xs sm:text-sm mt-1 break-all px-2">quipit.ma@gmail.com</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-cyan-300 mb-1 sm:mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-2.5 sm:px-3 py-2 text-sm sm:text-base bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-cyan-300 mb-1 sm:mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-2.5 sm:px-3 py-2 text-sm sm:text-base bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-cyan-300 mb-1 sm:mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-2.5 sm:px-3 py-2 text-sm sm:text-base bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            {submitStatus === 'error' && (
              <div className="text-red-400 text-xs sm:text-sm bg-red-500/10 border border-red-500/20 rounded-md p-2 sm:p-3">
                <p className="font-medium mb-2">Oops! Something went wrong</p>
                <p className="mb-2 sm:mb-3">Don't worry, you can still reach me. Copy your message:</p>
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="w-full px-2.5 sm:px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="truncate">Copy message & email</span>
                </button>
              </div>
            )}

            <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-3 sm:px-4 py-2 text-sm sm:text-base bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-800 disabled:cursor-not-allowed text-white rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span className="hidden sm:inline">Opening...</span>
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;