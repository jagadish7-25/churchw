import { HeroSection } from '@/components/hero-section'
import { motion } from 'motion/react'
import { Calendar, Clock, MapPin, Users, Cross, Sparkles } from 'lucide-react'

export default function EventsPage() {
    const events = [
        {
            id: 1,
            title: "Sunday Mass",
            date: "Every Sunday",
            time: "6:00 AM, 8:00 AM, 10:00 AM, 5:00 PM",
            location: "Main Church",
            description: "Join us for our regular Sunday Mass celebrations.",
            type: "mass"
        },
        {
            id: 2,
            title: "First Friday Devotion",
            date: "First Friday of Month",
            time: "9:00 AM - 6:00 PM",
            location: "Main Church",
            description: "All-day Eucharistic Adoration with confession available.",
            type: "devotion"
        },
        {
            id: 3,
            title: "Youth Fellowship",
            date: "Every Sunday",
            time: "4:00 PM - 6:00 PM",
            location: "Parish Hall",
            description: "Youth gathering with music, discussion, and fellowship.",
            type: "youth"
        },
        {
            id: 4,
            title: "Bible Study",
            date: "Every Wednesday",
            time: "7:00 PM - 8:30 PM",
            location: "Meeting Room",
            description: "Weekly Scripture study and group discussion.",
            type: "study"
        },
        {
            id: 5,
            title: "Novena to Our Lady",
            date: "Every Wednesday",
            time: "6:00 PM",
            location: "Main Church",
            description: "Evening novena prayers to the Blessed Virgin Mary.",
            type: "prayer"
        },
        {
            id: 6,
            title: "Choir Practice",
            date: "Every Thursday",
            time: "6:00 PM - 7:30 PM",
            location: "Church Hall",
            description: "Music ministry practice for Sunday Mass.",
            type: "music"
        }
    ]

    const upcomingEvents = [
        {
            id: 7,
            title: "Christmas Eve Mass",
            date: "December 24, 2026",
            time: "11:00 PM",
            location: "Main Church",
            description: "Midnight Mass celebrating the birth of Christ.",
            type: "special"
        },
        {
            id: 8,
            title: "Christmas Day Mass",
            date: "December 25, 2026",
            time: "8:00 AM & 10:00 AM",
            location: "Main Church",
            description: "Christmas Day Mass celebrations.",
            type: "special"
        },
        {
            id: 9,
            title: "New Year's Eve Mass",
            date: "December 31, 2026",
            time: "11:00 PM",
            location: "Main Church",
            description: "Thanksgiving Mass for the past year.",
            type: "special"
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
                                <Calendar className="h-4 w-4 text-amber-500" />
                                <span className="text-sm font-medium text-amber-400">Join Us</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
                                <span className="gradient-text">Events</span> & Schedule
                            </h1>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                                Stay connected with our parish events and join us in worship, fellowship, and celebration.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Regular Events */}
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
                                <span className="gradient-text">Regular Events</span>
                            </h2>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                Weekly and monthly events that happen regularly at our parish.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {events.map((event, index) => (
                                <EventCard key={event.id} {...event} index={index} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Upcoming Special Events */}
                <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
                                <Sparkles className="h-4 w-4 text-amber-500" />
                                <span className="text-sm font-medium text-amber-400">Special Events</span>
                            </div>
                            <h2 className="text-4xl font-display font-bold mb-4">
                                <span className="gradient-text">Upcoming Celebrations</span>
                            </h2>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                Mark your calendars for these special occasions.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {upcomingEvents.map((event, index) => (
                                <SpecialEventCard key={event.id} {...event} index={index} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Calendar CTA */}
                <section className="py-24 bg-gray-900">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass rounded-3xl p-8 md:p-12 glow text-center"
                        >
                            <Cross className="h-16 w-16 text-amber-500 mx-auto mb-6" />
                            <h2 className="text-3xl font-display font-bold mb-4">
                                <span className="gradient-text">Stay Updated</span>
                            </h2>
                            <p className="text-lg text-gray-400 mb-8">
                                Subscribe to our newsletter or follow us on social media to stay informed about all upcoming events.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-semibold rounded-xl transition-all shine"
                                >
                                    <span>Subscribe to Newsletter</span>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    )
}

function EventCard({ title, date, time, location, description, type, index }: {
    title: string
    date: string
    time: string
    location: string
    description: string
    type: string
    index: number
}) {
    const typeColors = {
        mass: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        devotion: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        youth: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        study: 'bg-green-500/10 text-green-400 border-green-500/20',
        prayer: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
        music: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass rounded-2xl p-6 border border-gray-800 hover:border-amber-500/50 transition-all card-3d"
        >
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border mb-4 ${typeColors[type as keyof typeof typeColors]}`}>
                <Calendar className="h-3 w-3" />
                <span className="capitalize">{type}</span>
            </div>
            <h3 className="text-xl font-display font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm mb-4">{description}</p>
            <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="h-4 w-4 text-amber-500" />
                    <span>{date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="h-4 w-4 text-amber-500" />
                    <span>{time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="h-4 w-4 text-amber-500" />
                    <span>{location}</span>
                </div>
            </div>
        </motion.div>
    )
}

function SpecialEventCard({ title, date, time, location, description, index }: {
    title: string
    date: string
    time: string
    location: string
    description: string
    index: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative glass rounded-2xl p-6 border border-amber-500/30 glow overflow-hidden group"
        >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-500/20 to-transparent rounded-bl-full" />
            <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">
                    <Sparkles className="h-3 w-3" />
                    <span>Special Event</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm mb-4">{description}</p>
                <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                        <Calendar className="h-4 w-4 text-amber-500" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                        <Clock className="h-4 w-4 text-amber-500" />
                        <span>{time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="h-4 w-4 text-amber-500" />
                        <span>{location}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

function HeroHeader() {
    const { HeroHeader } = require('@/components/hero-section')
    return <HeroHeader />
}
