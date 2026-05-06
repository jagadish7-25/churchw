'use client'
import { motion } from 'motion/react'
import { Clock, Calendar, MapPin, Users, Heart, Church } from 'lucide-react'

export function ChurchListings() {
    return (
        <section id="mass-times" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Mass Times & Services
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
                    className="mt-16"
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
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
            className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-3xl p-8 border border-amber-200 dark:border-amber-800"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-700 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Mass Schedule</h3>
            </div>
            <div className="space-y-4">
                {massTimes.map((schedule, index) => (
                    <div key={index} className="border-b border-amber-200 dark:border-amber-800 pb-4 last:border-0 last:pb-0">
                        <p className="font-semibold text-gray-900 dark:text-white mb-2">{schedule.day}</p>
                        <div className="flex flex-wrap gap-2">
                            {schedule.times.map((time, timeIndex) => (
                                <span
                                    key={timeIndex}
                                    className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm text-amber-700 dark:text-amber-400"
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
            className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-purple-200 dark:border-purple-800"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-700 rounded-full">
                    <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Confession</h3>
            </div>
            <div className="space-y-4">
                <div className="border-b border-purple-200 dark:border-purple-800 pb-4">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">Saturday</p>
                    <p className="text-gray-600 dark:text-gray-400">4:00 PM - 5:00 PM</p>
                </div>
                <div className="border-b border-purple-200 dark:border-purple-800 pb-4">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">Before Mass</p>
                    <p className="text-gray-600 dark:text-gray-400">30 minutes before all Masses</p>
                </div>
                <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">By Appointment</p>
                    <p className="text-gray-600 dark:text-gray-400">Contact the parish office</p>
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
            className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-800"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-700 rounded-full">
                    <Church className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Eucharistic Adoration</h3>
            </div>
            <div className="space-y-4">
                <div className="border-b border-blue-200 dark:border-blue-800 pb-4">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">First Friday</p>
                    <p className="text-gray-600 dark:text-gray-400">After 9:00 AM Mass until 6:00 PM</p>
                </div>
                <div className="border-b border-blue-200 dark:border-blue-800 pb-4">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">Every Thursday</p>
                    <p className="text-gray-600 dark:text-gray-400">5:00 PM - 6:00 PM</p>
                </div>
                <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">Holy Hours</p>
                    <p className="text-gray-600 dark:text-gray-400">Special holy hours announced</p>
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
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-700 transition-colors"
        >
            <div className="flex items-start gap-4">
                <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-700 dark:text-amber-400">
                    {icon}
                </div>
                <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{description}</p>
                    <p className="text-sm font-medium text-amber-700 dark:text-amber-400">{time}</p>
                </div>
            </div>
        </motion.div>
    )
}
