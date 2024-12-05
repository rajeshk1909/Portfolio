import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import toast, { Toaster } from "react-hot-toast"

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setIsSubmitting(true)
    try {
      await emailjs.sendForm(
        "service_your_service_id", // Replace with your EmailJS service ID
        "template_your_template_id", // Replace with your EmailJS template ID
        formRef.current,
        "your_public_key" // Replace with your EmailJS public key
      )
      toast.success("Message sent successfully!")
      formRef.current.reset()
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id='contact' className='py-24 bg-black'>
      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-2xl mx-auto bg-gray-900 p-10 rounded-2xl shadow-2xl'>
          <h2 className='text-4xl font-semibold text-center text-white mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500'>
              Get In Touch
            </span>
          </h2>
          <div className='text-center mb-8'>
            <p className='text-gray-400 text-lg'>
              Reach out to us at{" "}
              <a
                href='mailto:rajeshkumarcontactdev@gmail.com'
                className='text-blue-400 hover:text-blue-300 font-semibold'>
                rajeshkumarcontactdev@gmail.com
              </a>
            </p>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className='space-y-8'>
            <div className='group'>
              <input
                type='text'
                name='user_name'
                required
                className='w-full px-6 py-4 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-300'
                placeholder='Your Name'
              />
            </div>
            <div className='group'>
              <input
                type='email'
                name='user_email'
                required
                className='w-full px-6 py-4 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-300'
                placeholder='Your Email'
              />
            </div>
            <div className='group'>
              <textarea
                name='message'
                rows={5}
                required
                className='w-full px-6 py-4 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-300 resize-none'
                placeholder='Your Message'></textarea>
            </div>
            <motion.button
              type='submit'
              disabled={isSubmitting}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 rounded-lg font-semibold transition-all duration-300 ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:opacity-90"
              }`}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
      <Toaster position='bottom-right' />
    </section>
  )
}

export default Contact
