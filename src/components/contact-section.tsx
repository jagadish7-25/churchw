'use client'
import { motion } from 'motion/react'
import { Phone, MapPin, Mail, Clock, Share2, Image as ImageIcon, Video, Send } from 'lucide-react'
import { useState } from 'react'

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setSubmitStatus('success')
                setFormData({ name: '', email: '', subject: '', message: '' })
                setTimeout(() => setSubmitStatus('idle'), 3000)
            } else {
                setSubmitStatus('error')
                setTimeout(() => setSubmitStatus('idle'), 3000)
            }
        } catch (error) {
            setSubmitStatus('error')
            setTimeout(() => setSubmitStatus('idle'), 3000)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 glass rounded-full">
                        <Mail className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-medium text-amber-400">Get in Touch</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        <span className="gradient-text">Contact</span> Us
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        We'd love to hear from you. Reach out with any questions or to learn more about our parish.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <ContactInfo />
                    <ContactForm
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        isSubmitting={isSubmitting}
                        submitStatus={submitStatus}
                    />
                </div>
            </div>
        </section>
    )
}

function ContactInfo() {
    const contactDetails = [
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Address",
            content: "95V5+749, SH 21, Nagarjuna Nagar, Sattenapalle, Andhra Pradesh 522403",
            link: "https://maps.google.com/?q=95V5+749,+SH+21,+Nagarjuna+Nagar,+Sattenapalle,+Andhra+Pradesh+522403"
        },
        {
            icon: <Phone className="h-6 w-6" />,
            title: "Phone",
            content: "08641-232260",
            link: "tel:08641232260"
        },
        {
            icon: <Mail className="h-6 w-6" />,
            title: "Email",
            content: "stanns.rcm@gmail.com",
            link: "mailto:stanns.rcm@gmail.com"
        },
        {
            icon: <Clock className="h-6 w-6" />,
            title: "Office Hours",
            content: "Monday - Saturday: 9:00 AM - 5:00 PM",
            link: null
        },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h3 className="text-2xl font-display font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        {detail.link ? (
                            <a
                                href={detail.link}
                                target={detail.link.startsWith('http') ? '_blank' : undefined}
                                rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="flex items-start gap-4 p-4 glass rounded-xl border border-gray-800 hover:border-amber-500/50 transition-colors group card-3d"
                            >
                                <div className="p-3 bg-amber-500/10 rounded-lg text-amber-500 group-hover:bg-amber-500/20 transition-colors">
                                    {detail.icon}
                                </div>
                                <div>
                                    <p className="font-semibold text-white mb-1">{detail.title}</p>
                                    <p className="text-gray-400">{detail.content}</p>
                                </div>
                            </a>
                        ) : (
                            <div className="flex items-start gap-4 p-4 glass rounded-xl border border-gray-800">
                                <div className="p-3 bg-amber-500/10 rounded-lg text-amber-500">
                                    {detail.icon}
                                </div>
                                <div>
                                    <p className="font-semibold text-white mb-1">{detail.title}</p>
                                    <p className="text-gray-400">{detail.content}</p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            <div className="mt-8">
                <h4 className="font-display font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex gap-4">
                    <SocialLink icon={<Share2 className="h-5 w-5" />} href="#" label="Facebook" />
                    <SocialLink icon={<ImageIcon className="h-5 w-5" />} href="#" label="Instagram" />
                    <SocialLink icon={<Video className="h-5 w-5" />} href="#" label="YouTube" />
                </div>
            </div>
        </motion.div>
    )
}

function SocialLink({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="p-3 glass rounded-full border border-gray-800 text-gray-400 hover:text-amber-500 hover:border-amber-500/50 transition-colors"
        >
            {icon}
        </a>
    )
}

function ContactForm({
    formData,
    setFormData,
    handleSubmit,
    isSubmitting,
    submitStatus
}: {
    formData: { name: string; email: string; subject: string; message: string }
    setFormData: (data: any) => void
    handleSubmit: (e: React.FormEvent) => void
    isSubmitting: boolean
    submitStatus: 'idle' | 'success' | 'error'
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h3 className="text-2xl font-display font-bold text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white transition-colors placeholder-gray-500"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white transition-colors placeholder-gray-500"
                            placeholder="your@email.com"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white transition-colors placeholder-gray-500"
                        placeholder="How can we help?"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white transition-colors resize-none placeholder-gray-500"
                        placeholder="Your message..."
                    />
                </div>

                {submitStatus === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400"
                    >
                        Message sent successfully!
                    </motion.div>
                )}

                {submitStatus === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400"
                    >
                        Failed to send message. Please try again.
                    </motion.div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-semibold rounded-xl transition-all focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shine"
                >
                    {isSubmitting ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending...</span>
                        </>
                    ) : (
                        <>
                            <Send className="h-5 w-5" />
                            <span>Send Message</span>
                        </>
                    )}
                </button>
            </form>
        </motion.div>
    )
}
