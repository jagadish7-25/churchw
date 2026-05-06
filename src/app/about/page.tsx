'use client'

import { HeroSection } from '@/components/hero-section'
import { motion } from 'motion/react'
import { Church, Heart, Users, BookOpen, Cross, Sparkles, Calendar } from 'lucide-react'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-950">
            <HeroHeader />
            <main>
                {/* Hero Section */}
                <section className="relative py-24 lg:py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950" />
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass rounded-full">
                                <Cross className="h-4 w-4 text-amber-500" />
                                <span className="text-sm font-medium text-amber-400">Our Story</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
                                <span className="gradient-text">About</span> Our Parish
                            </h1>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                                A beacon of faith and community in Sattenapalle, serving God's people with love and devotion.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Our Mission */}
                <section className="py-24 bg-gray-950">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl font-display font-bold mb-4">
                                <span className="gradient-text">Our Mission</span>
                            </h2>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                Guided by faith, we strive to build a community rooted in love, service, and spiritual growth.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <MissionCard
                                icon={<Church className="h-8 w-8" />}
                                title="Worship"
                                description="Celebrating the sacraments and fostering a deep relationship with God through prayer and liturgy."
                            />
                            <MissionCard
                                icon={<Heart className="h-8 w-8" />}
                                title="Service"
                                description="Serving our community through charity, outreach, and acts of love that reflect Christ's teachings."
                            />
                            <MissionCard
                                icon={<Users className="h-8 w-8" />}
                                title="Community"
                                description="Building a welcoming community where everyone feels valued and supported in their faith journey."
                            />
                        </div>
                    </div>
                </section>

                {/* Our History */}
                <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-4xl font-display font-bold mb-6">
                                    <span className="gradient-text">Our History</span>
                                </h2>
                                <div className="space-y-4 text-gray-400">
                                    <p>
                                        St. Ann's RCM Church has been a spiritual home for the Catholic community in Sattenapalle for many years. Founded with a vision to bring Christ's love to all, our parish has grown into a vibrant community of faith.
                                    </p>
                                    <p>
                                        Under the guidance of our parish priest, Fr. Rajesh Kumar Nettam, we continue to serve the spiritual needs of our community while reaching out to those in need through various ministries and charitable works.
                                    </p>
                                    <p>
                                        Our church stands as a testament to the enduring faith of our parishioners and the grace of God that continues to guide us forward.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative"
                            >
                                <div className="glass rounded-3xl p-2 glow">
                                    <img
                                        src="/church-image.png"
                                        alt="St. Ann's RCM Church"
                                        className="w-full rounded-2xl"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="py-24 bg-gray-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl font-display font-bold mb-4">
                                <span className="gradient-text">Our Values</span>
                            </h2>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                The principles that guide our community and shape our ministry.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <ValueCard
                                icon={<BookOpen className="h-6 w-6" />}
                                title="Faith"
                                description="Rooted in Catholic tradition and Scripture"
                            />
                            <ValueCard
                                icon={<Heart className="h-6 w-6" />}
                                title="Love"
                                description="Compassion and care for all people"
                            />
                            <ValueCard
                                icon={<Sparkles className="h-6 w-6" />}
                                title="Hope"
                                description="Trusting in God's promises and grace"
                            />
                            <ValueCard
                                icon={<Calendar className="h-6 w-6" />}
                                title="Service"
                                description="Giving back to our community"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

function MissionCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 glow card-3d"
        >
            <div className="p-4 bg-amber-500/10 rounded-xl mb-6 text-amber-500">
                {icon}
            </div>
            <h3 className="text-xl font-display font-semibold text-white mb-3">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </motion.div>
    )
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-6 border border-gray-800 hover:border-amber-500/50 transition-colors"
        >
            <div className="p-3 bg-amber-500/10 rounded-lg mb-4 text-amber-500">
                {icon}
            </div>
            <h3 className="text-lg font-display font-semibold text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
        </motion.div>
    )
}

function HeroHeader() {
    const { HeroHeader } = require('@/components/hero-section')
    return <HeroHeader />
}
