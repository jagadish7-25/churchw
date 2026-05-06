'use client'
import { motion } from 'motion/react'
import { Clock, Calendar, MapPin, Users, Heart, Church, Cross, Sparkles } from 'lucide-react'

export function ChurchListings() {
    return (
        <section id="mass-times" className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />
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
                        <Cross className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-medium text-amber-400">Worship Schedule</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        <span className="gradient-text">Mass Times</span> & Services
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Join us for worship and spiritual growth
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <MassScheduleCard />
                    <ConfessionCard />
                    <AdorationCard />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-20"
                >
                    <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
                        Special Services
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <SpecialServiceCard
                            icon={<Calendar className="h-6 w-6" />}
                            title="First Friday Devotion"
                            description="Adoration and confession all day"
                            time="First Friday of every month"
                        />
                        <SpecialServiceCard
                            icon={<Heart className="h-6 w-6" />}
                            title="Novena to Our Lady"
                            description="Wednesday evening novena prayers"
                            time="Wednesdays at 6:00 PM"
                        />
                        <SpecialServiceCard
                            icon={<Users className="h-6 w-6" />}
                            title="Baptism Preparation"
                            description="Classes for parents and godparents"
                            time="First Saturday of month at 10:00 AM"
                        />
                        <SpecialServiceCard
                            icon={<Church className="h-6 w-6" />}
                            title="Wedding Preparation"
                            description="Pre-marriage counseling and preparation"
                            time="By appointment only"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

function MassScheduleCard() {
    const massTimes = [
        { day: "Sunday", times: ["6:00 AM", "8:00 AM", "10:00 AM", "5:00 PM"] },
        { day: "Monday - Saturday", times: ["6:30 AM", "6:30 PM"] },
        { day: "First Friday", times: ["6:30 AM", "9:00 AM", "6:30 PM"] },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 glow card-3d"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl">
                    <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">Mass Schedule</h3>
            </div>
            <div className="space-y-4">
                {massTimes.map((schedule, index) => (
                    <div key={index} className="border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                        <p className="font-semibold text-white mb-2">{schedule.day}</p>
                        <div className="flex flex-wrap gap-2">
                            {schedule.times.map((time, timeIndex) => (
                                <span
                                    key={timeIndex}
                                    className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-sm text-amber-400"
                                >
                                    {time}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

function ConfessionCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-3xl p-8 glow card-3d"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                    <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">Confession</h3>
            </div>
            <div className="space-y-4">
                <div className="border-b border-gray-800 pb-4">
                    <p className="font-semibold text-white mb-2">Saturday</p>
                    <p className="text-gray-400">4:00 PM - 5:00 PM</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                    <p className="font-semibold text-white mb-2">Before Mass</p>
                    <p className="text-gray-400">30 minutes before all Masses</p>
                </div>
                <div>
                    <p className="font-semibold text-white mb-2">By Appointment</p>
                    <p className="text-gray-400">Contact the parish office</p>
                </div>
            </div>
        </motion.div>
    )
}

function AdorationCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8 glow card-3d"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                    <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">Eucharistic Adoration</h3>
            </div>
            <div className="space-y-4">
                <div className="border-b border-gray-800 pb-4">
                    <p className="font-semibold text-white mb-2">First Friday</p>
                    <p className="text-gray-400">After 9:00 AM Mass until 6:00 PM</p>
                </div>
                <div className="border-b border-gray-800 pb-4">
                    <p className="font-semibold text-white mb-2">Every Thursday</p>
                    <p className="text-gray-400">5:00 PM - 6:00 PM</p>
                </div>
                <div>
                    <p className="font-semibold text-white mb-2">Holy Hours</p>
                    <p className="text-gray-400">Special holy hours announced</p>
                </div>
            </div>
        </motion.div>
    )
}

function SpecialServiceCard({ icon, title, description, time }: {
    icon: React.ReactNode
    title: string
    description: string
    time: string
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 border border-gray-800 hover:border-amber-500/50 transition-colors card-3d"
        >
            <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500">
                    {icon}
                </div>
                <div className="flex-1">
                    <h4 className="font-display font-semibold text-white mb-1">{title}</h4>
                    <p className="text-sm text-gray-400 mb-2">{description}</p>
                    <p className="text-sm font-medium text-amber-400">{time}</p>
                </div>
            </div>
        </motion.div>
    )
}
