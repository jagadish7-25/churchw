'use client'

'use client'

import { HeroSection, HeroHeader } from '@/components/hero-section'
import { motion } from 'motion/react'
import { Church, Heart, Users, BookOpen, Music, Baby, Utensils, HandHeart, Calendar } from 'lucide-react'

export default function MinistriesPage() {
    const ministries = [
        {
            icon: <Church className="h-8 w-8" />,
            title: "Liturgy & Worship",
            description: "Join us in celebrating the Holy Mass and participating in the sacraments that nourish our faith.",
            schedule: "Daily Mass: 6:30 AM & 6:30 PM",
            color: "from-amber-500 to-amber-600"
        },
        {
            icon: <Heart className="h-8 w-8" />,
            title: "Charity & Outreach",
            description: "Serving those in need through food drives, clothing donations, and community support programs.",
            schedule: "Every Saturday: 9:00 AM",
            color: "from-red-500 to-red-600"
        },
        {
            icon: <Users className="h-8 w-8" />,
            title: "Youth Ministry",
            description: "Empowering young people to grow in faith through fellowship, service, and spiritual formation.",
            schedule: "Sundays: 4:00 PM",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <BookOpen className="h-8 w-8" />,
            title: "Bible Study",
            description: "Deepening our understanding of Scripture through weekly study groups and discussions.",
            schedule: "Wednesdays: 7:00 PM",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: <Music className="h-8 w-8" />,
            title: "Music Ministry",
            description: "Enhancing our worship through sacred music, choir, and instrumental performances.",
            schedule: "Practice: Thursdays 6:00 PM",
            color: "from-pink-500 to-pink-600"
        },
        {
            icon: <Baby className="h-8 w-8" />,
            title: "Sunday School",
            description: "Teaching children the foundations of our faith in a fun and engaging environment.",
            schedule: "Sundays: 9:00 AM",
            color: "from-green-500 to-green-600"
        },
        {
            icon: <Utensils className="h-8 w-8" />,
            title: "Kitchen Ministry",
            description: "Preparing meals for parish events and supporting families in times of need.",
            schedule: "As needed for events",
            color: "from-orange-500 to-orange-600"
        },
        {
            icon: <HandHeart className="h-8 w-8" />,
            title: "Prayer Groups",
            description: "Coming together in prayer to support one another and intercede for our community.",
            schedule: "Tuesdays: 6:00 PM",
            color: "from-cyan-500 to-cyan-600"
        }
    ]

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
                                <Heart className="h-4 w-4 text-amber-500" />
                                <span className="text-sm font-medium text-amber-400">Serve with Love</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
                                <span className="gradient-text">Our Ministries</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                                Discover ways to get involved and serve our community through faith, love, and action.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Ministries Grid */}
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
                                <span className="gradient-text">Ways to Serve</span>
                            </h2>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                Each ministry offers unique opportunities to grow in faith and serve others.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {ministries.map((ministry, index) => (
                                <MinistryCard key={index} {...ministry} index={index} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Get Involved */}
                <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass rounded-3xl p-8 md:p-12 glow text-center"
                        >
                            <Calendar className="h-16 w-16 text-amber-500 mx-auto mb-6" />
                            <h2 className="text-3xl font-display font-bold mb-4">
                                <span className="gradient-text">Ready to Get Involved?</span>
                            </h2>
                            <p className="text-lg text-gray-400 mb-8">
                                We welcome everyone who wants to serve. Contact us to learn more about joining any of our ministries.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-semibold rounded-xl transition-all shine"
                            >
                                <span>Contact Us</span>
                            </a>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    )
}

function MinistryCard({ icon, title, description, schedule, color, index }: {
    icon: React.ReactNode
    title: string
    description: string
    schedule: string
    color: string
    index: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass rounded-2xl p-6 border border-gray-800 hover:border-amber-500/50 transition-all card-3d group"
        >
            <div className={`p-4 bg-gradient-to-br ${color} rounded-xl mb-6 text-white group-hover:scale-110 transition-transform`}>
                {icon}
            </div>
            <h3 className="text-xl font-display font-semibold text-white mb-3">{title}</h3>
            <p className="text-gray-400 text-sm mb-4">{description}</p>
            <div className="pt-4 border-t border-gray-800">
                <p className="text-xs text-amber-400 font-medium">{schedule}</p>
            </div>
        </motion.div>
    )
}
