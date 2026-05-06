'use client'
import { motion } from 'motion/react'
import { Phone, MapPin, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react'

export function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-white to-amber-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Contact Us
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        We'd love to hear from you. Reach out with any questions or to learn more about our parish.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <ContactInfo />
                    <ContactForm />
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
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
                                className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-700 transition-colors group"
                            >
                                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-700 dark:text-amber-400 group-hover:bg-amber-200 dark:group-hover:bg-amber-900/50 transition-colors">
                                    {detail.icon}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white mb-1">{detail.title}</p>
                                    <p className="text-gray-600 dark:text-gray-400">{detail.content}</p>
                                </div>
                            </a>
                        ) : (
                            <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-700 dark:text-amber-400">
                                    {detail.icon}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white mb-1">{detail.title}</p>
                                    <p className="text-gray-600 dark:text-gray-400">{detail.content}</p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            <div className="mt-8">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h4>
                <div className="flex gap-4">
                    <SocialLink icon={<Facebook className="h-5 w-5" />} href="#" label="Facebook" />
                    <SocialLink icon={<Instagram className="h-5 w-5" />} href="#" label="Instagram" />
                    <SocialLink icon={<Youtube className="h-5 w-5" />} href="#" label="YouTube" />
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
            className="p-3 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-amber-700 dark:hover:text-amber-400 hover:border-amber-300 dark:hover:border-amber-700 transition-colors"
        >
            {icon}
        </a>
    )
}

function ContactForm() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h3>
            <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:text-white transition-colors"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:text-white transition-colors"
                            placeholder="your@email.com"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:text-white transition-colors"
                        placeholder="How can we help?"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:text-white transition-colors resize-none"
                        placeholder="Your message..."
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-lg transition-colors focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                    Send Message
                </button>
            </form>
        </motion.div>
    )
}
