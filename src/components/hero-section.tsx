'use client'
import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Meteors } from '@/components/ui/meteors'
import { Church3D } from '@/components/ui/church-3d'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight, Church, Phone, MapPin, Calendar, Heart, Cross, Sparkles, Star } from 'lucide-react'
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'motion/react'

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll()
    const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360])
    const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15])
    const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 1.2]), { stiffness: 100, damping: 30 })
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6])
    const prefersReducedMotion = useReducedMotion()

    const transitionDuration = prefersReducedMotion ? 0 : 0.8
    const animationDelay = prefersReducedMotion ? 0 : 0.2

    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden" aria-label="Main content">
                <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" aria-labelledby="hero-heading">
                    {/* Background Effects */}
                    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-500/5 to-amber-600/5 rounded-full blur-3xl" />
                        {/* Stars */}
                        {[...Array(50)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-amber-500/30 rounded-full animate-pulse"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                }}
                            />
                        ))}
                    </div>

                    {/* Meteors */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                        <Meteors number={30} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: transitionDuration }}
                                className="text-center lg:text-left"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: animationDelay }}
                                    className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full"
                                >
                                    <Cross className="h-4 w-4 text-amber-500" aria-hidden="true" />
                                    <span className="text-sm font-medium text-amber-400">Welcome to Our Parish</span>
                                </motion.div>

                                <motion.h1
                                    id="hero-heading"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: prefersReducedMotion ? 0 : 0.4 }}
                                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                                >
                                    <span className="font-display gradient-text glow-text">St. Ann's</span>
                                    <br />
                                    <span className="font-serif text-amber-400">RCM Church</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: prefersReducedMotion ? 0 : 0.6 }}
                                    className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
                                >
                                    A sacred space where faith comes alive. Join us in worship, prayer, and community as we grow together in God's love.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: prefersReducedMotion ? 0 : 0.8 }}
                                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                >
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-14 px-8 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-semibold text-base shadow-lg shadow-amber-500/25 shine focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-950"
                                    >
                                        <Link href="#mass-times">
                                            <span className="text-nowrap">View Mass Times</span>
                                            <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="h-14 px-8 rounded-full border-amber-500/50 text-amber-400 hover:bg-amber-500/10 font-semibold text-base focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-950"
                                    >
                                        <Link href="#contact">
                                            <span className="text-nowrap">Contact Us</span>
                                        </Link>
                                    </Button>
                                </motion.div>

                                {/* Quick Info */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: prefersReducedMotion ? 0 : 1 }}
                                    className="mt-12 grid grid-cols-3 gap-4"
                                >
                                    <QuickInfo icon={<Church className="h-5 w-5" />} label="Sunday Mass" value="10:00 AM" />
                                    <QuickInfo icon={<MapPin className="h-5 w-5" />} label="Location" value="Sattenapalle" />
                                    <QuickInfo icon={<Phone className="h-5 w-5" />} label="Contact" value="08641-232260" />
                                </motion.div>
                            </motion.div>

                            {/* 3D Church Model */}
                            <motion.div
                                ref={containerRef}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: prefersReducedMotion ? 0 : 1, delay: prefersReducedMotion ? 0 : 0.3 }}
                                className="relative"
                                aria-label="3D model of St. Ann's RCM Church"
                            >
                                <motion.div
                                    style={{
                                        rotateY: prefersReducedMotion ? 0 : rotateY,
                                        rotateX: prefersReducedMotion ? 0 : rotateX,
                                        scale: prefersReducedMotion ? 1 : scale,
                                        opacity,
                                    }}
                                    className="relative w-full aspect-square max-w-lg mx-auto perspective-1000"
                                >
                                    <Church3D />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    {!prefersReducedMotion && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="absolute bottom-8 left-1/2 -translate-x-1/2"
                            aria-hidden="true"
                        >
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-6 h-10 border-2 border-amber-500/50 rounded-full flex items-start justify-center p-2"
                            >
                                <motion.div
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-1.5 h-1.5 bg-amber-500 rounded-full"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </section>

                {/* Ministries Slider */}
                <section className="py-16 bg-gray-950 border-t border-gray-800" aria-labelledby="ministries-heading">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="md:w-48 text-right">
                                <p className="text-sm text-gray-400">Our Ministries</p>
                                <h2 id="ministries-heading" className="text-2xl font-display gradient-text">Serving God</h2>
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <MinistriesSlider prefersReducedMotion={prefersReducedMotion} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

function QuickInfo({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="text-center p-4 glass rounded-xl min-w-[100px]" role="article">
            <div className="flex justify-center mb-2 text-amber-500" aria-hidden="true">{icon}</div>
            <p className="text-xs text-gray-400 mb-1">{label}</p>
            <p className="text-sm font-semibold text-white">{value}</p>
        </div>
    )
}

function MinistriesSlider({ prefersReducedMotion = false }: { prefersReducedMotion?: boolean }) {
    const ministries = [
        { icon: <Church className="h-5 w-5" />, name: "Sunday School" },
        { icon: <Heart className="h-5 w-5" />, name: "Charity Works" },
        { icon: <Calendar className="h-5 w-5" />, name: "Youth Ministry" },
        { icon: <Phone className="h-5 w-5" />, name: "Prayer Groups" },
        { icon: <MapPin className="h-5 w-5" />, name: "Outreach" },
        { icon: <Cross className="h-5 w-5" />, name: "Bible Study" },
        { icon: <Sparkles className="h-5 w-5" />, name: "Music Ministry" },
    ]

    return (
        <motion.div
            className="flex gap-8"
            animate={prefersReducedMotion ? {} : { x: [0, -500, 0] }}
            transition={prefersReducedMotion ? {} : { duration: 20, repeat: Infinity, ease: "linear" }}
            aria-label="Our ministries"
        >
            {[...ministries, ...ministries].map((ministry, index) => (
                <div
                    key={index}
                    className="flex items-center gap-3 px-6 py-3 glass rounded-full whitespace-nowrap min-h-[44px]"
                >
                    <span className="text-amber-500" aria-hidden="true">{ministry.icon}</span>
                    <span className="text-sm text-gray-300">{ministry.name}</span>
                </div>
            ))}
        </motion.div>
    )
}

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Mass Times', href: '#mass-times' },
    { name: 'Ministries', href: '/ministries' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '#contact' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    // Close menu on escape key
    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && menuState) {
                setMenuState(false)
            }
        }
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [menuState])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="group fixed z-50 w-full pt-2"
                aria-label="Main navigation"
            >
                <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'glass')}>
                    <motion.div
                        key={1}
                        className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="St. Ann's RCM Church - Home"
                                className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded-lg">
                                <ChurchLogo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-expanded={menuState}
                                aria-controls="mobile-menu"
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-amber-500" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-amber-500" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm" role="menubar">
                                    {menuItems.map((item, index) => (
                                        <li key={index} role="none">
                                            <Link
                                                href={item.href}
                                                className="text-gray-400 hover:text-amber-400 block duration-150 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded-lg px-2 py-1">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div
                            id="mobile-menu"
                            className="bg-gray-900 group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-gray-800 p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none"
                            role="menu"
                        >
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base" role="menu">
                                    {menuItems.map((item, index) => (
                                        <li key={index} role="none">
                                            <Link
                                                href={item.href}
                                                className="text-gray-400 hover:text-amber-400 block duration-150 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg px-2 py-1"
                                                role="menuitem"
                                                onClick={() => setMenuState(false)}
                                            >
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 rounded-full focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                                    <Link href="#contact" onClick={() => setMenuState(false)}>
                                        <span>Visit Us</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white rounded-full focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                                    <Link href="#mass-times" onClick={() => setMenuState(false)}>
                                        <span>Mass Schedule</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}

const ChurchLogo = ({ className }: { className?: string }) => {
    return (
        <Link href="/" className={cn('flex items-center gap-2', className)} aria-label="St. Ann's RCM Church - Home">
            <div className="p-2 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl" aria-hidden="true">
                <Church className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white">St. Ann's</span>
                <span className="text-xs text-amber-400">RCM Church</span>
            </div>
        </Link>
    )
}

// Export HeroHeader for use in other pages
export { HeroHeader }
