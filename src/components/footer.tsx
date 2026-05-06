'use client'
import { motion } from 'motion/react'
import { Church, Heart, Mail, Phone, MapPin, Cross, Sparkles } from 'lucide-react'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-950 border-t border-gray-800 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <FooterColumn
                        title="About Us"
                        icon={<Church className="h-6 w-6" />}
                        content={
                            <>
                                <p className="text-gray-400 mb-4">
                                    St. Ann's RCM Church is a welcoming Catholic community dedicated to faith, service, and spiritual growth.
                                </p>
                                <p className="text-gray-400">
                                    Led by Fr. Rajesh Kumar Nettam, we strive to live out the Gospel through worship, education, and charity.
                                </p>
                            </>
                        }
                    />

                    <FooterColumn
                        title="Quick Links"
                        links={[
                            { label: "Home", href: "/" },
                            { label: "About", href: "/about" },
                            { label: "Mass Times", href: "#mass-times" },
                            { label: "Ministries", href: "/ministries" },
                            { label: "Events", href: "/events" },
                            { label: "Contact", href: "#contact" },
                        ]}
                    />

                    <FooterColumn
                        title="Contact Info"
                        content={
                            <div className="space-y-3">
                                <ContactItem
                                    icon={<MapPin className="h-4 w-4" />}
                                    text="95V5+749, SH 21, Nagarjuna Nagar, Sattenapalle, Andhra Pradesh 522403"
                                />
                                <ContactItem
                                    icon={<Phone className="h-4 w-4" />}
                                    text="08641-232260"
                                />
                                <ContactItem
                                    icon={<Mail className="h-4 w-4" />}
                                    text="stanns.rcm@gmail.com"
                                />
                            </div>
                        }
                    />

                    <FooterColumn
                        title="Office Hours"
                        content={
                            <div className="space-y-2">
                                <p className="text-gray-400">
                                    <span className="font-medium text-white">Monday - Saturday:</span><br />
                                    9:00 AM - 5:00 PM
                                </p>
                                <p className="text-gray-400">
                                    <span className="font-medium text-white">Sunday:</span><br />
                                    Before and after Mass
                                </p>
                            </div>
                        }
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 pt-8 border-t border-gray-800"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} St. Ann's RCM Church. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> for the community
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

function FooterColumn({ title, icon, content, links }: {
    title: string
    icon?: React.ReactNode
    content?: React.ReactNode
    links?: Array<{ label: string; href: string }>
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex items-center gap-2 mb-4">
                {icon && <div className="text-amber-500">{icon}</div>}
                <h3 className="text-lg font-display font-semibold text-white">{title}</h3>
            </div>
            {content && <div className="text-gray-400">{content}</div>}
            {links && (
                <ul className="space-y-2">
                    {links.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.href}
                                className="text-gray-400 hover:text-amber-500 transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </motion.div>
    )
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="flex items-start gap-3">
            <div className="text-amber-500 mt-0.5">{icon}</div>
            <p className="text-gray-400 text-sm">{text}</p>
        </div>
    )
}
