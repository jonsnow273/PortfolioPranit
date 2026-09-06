'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Shield, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', email: '', message: '' })
      setSubmitStatus('idle')
      setIsSubmitting(false)
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Add a brief delay for the "verifying human" effect
      await new Promise(resolve => setTimeout(resolve, 1500))

      // EmailJS configuration - replace with actual service ID, template ID, and public key
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID_HERE', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID_HERE', // Replace with your EmailJS template ID
        formRef.current!,
        'YOUR_PUBLIC_KEY_HERE' // Replace with your EmailJS public key
      )

      console.log('Email sent successfully:', result.text)
      setSubmitStatus('success')
    } catch (error) {
      console.error('Failed to send email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleClose = () => {
    if (!isSubmitting) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-custom"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-dark-card border border-dark-border rounded-2xl p-8 w-full max-w-md shadow-2xl"
            style={{
              boxShadow: `0 0 40px rgba(107, 140, 184, 0.2), 
                         0 20px 40px rgba(0, 0, 0, 0.4)`
            }}
          >
            {/* Accent glow effect */}
            <div className="absolute -inset-px bg-gradient-to-r from-accent/20 via-transparent to-accent/20 rounded-2xl -z-10" />
            
            {/* Close button */}
            {!isSubmitting && (
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-text-secondary hover:text-text-primary transition-colors"
              >
                <X size={20} />
              </button>
            )}

            {/* Header */}
            <div className="mb-8">
              <h2 className="font-heading font-black text-3xl leading-tight">
                <span className="text-text-primary block">INITIATE</span>
                <span className="text-accent block">CONTACT</span>
              </h2>
            </div>

            {submitStatus === 'success' ? (
              /* Success state */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-accent" size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-text-primary mb-2">
                  Message Sent
                </h3>
                <p className="text-text-secondary">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-6 bg-accent hover:bg-accent-hover text-white font-medium px-6 py-2 rounded-lg transition-colors"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              /* Form */
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-text-secondary mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="CLASSIFIED"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:border-accent focus:outline-none transition-colors disabled:opacity-50"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-text-secondary mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="AGENT@DOMAIN.COM"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:border-accent focus:outline-none transition-colors disabled:opacity-50"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-text-secondary mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="TRANSMIT YOUR DIRECTIVES..."
                    required
                    disabled={isSubmitting}
                    rows={4}
                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:border-accent focus:outline-none transition-colors resize-none disabled:opacity-50"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent-hover text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      <span>VERIFYING HUMAN...</span>
                    </>
                  ) : (
                    <>
                      <Shield size={18} />
                      <span>VERIFYING HUMAN...</span>
                    </>
                  )}
                </button>

                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm text-center">
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}