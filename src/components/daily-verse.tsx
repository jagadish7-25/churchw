'use client'
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { BookOpen, RefreshCw } from 'lucide-react'

const catholicBibleVerses = [
    { verse: "For God so loved the world that he gave his only Son, so that everyone who believes in him might not perish but might have eternal life.", reference: "John 3:16" },
    { verse: "I am the way and the truth and the life. No one comes to the Father except through me.", reference: "John 14:6" },
    { verse: "Come to me, all you who are weary and burdened, and I will give you rest.", reference: "Matthew 11:28" },
    { verse: "Be still and know that I am God.", reference: "Psalm 46:10" },
    { verse: "The Lord is my shepherd; there is nothing I lack.", reference: "Psalm 23:1" },
    { verse: "Trust in the Lord with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" },
    { verse: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", reference: "Jeremiah 29:11" },
    { verse: "Love is patient, love is kind. It is not jealous, it is not pompous, it is not inflated.", reference: "1 Corinthians 13:4" },
    { verse: "Do not be afraid, for I am with you; do not be dismayed, for I am your God.", reference: "Isaiah 41:10" },
    { verse: "I can do all things through him who strengthens me.", reference: "Philippians 4:13" },
    { verse: "The fruit of the Spirit is love, joy, peace, patience, kindness, generosity, faithfulness, gentleness, self-control.", reference: "Galatians 5:22-23" },
    { verse: "Let all that you do be done in love.", reference: "1 Corinthians 16:14" },
    { verse: "Rejoice in the Lord always. I shall say it again: rejoice!", reference: "Philippians 4:4" },
    { verse: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.", reference: "Galatians 5:22-23" },
    { verse: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", reference: "Romans 8:28" },
    { verse: "Let us not grow tired of doing good, for in due time we shall reap our harvest, if we do not give up.", reference: "Galatians 6:9" },
    { verse: "Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you.", reference: "Deuteronomy 31:6" },
    { verse: "Cast all your worries upon him because he cares for you.", reference: "1 Peter 5:7" },
    { verse: "This is the day the Lord has made; let us rejoice and be glad in it.", reference: "Psalm 118:24" },
    { verse: "The Lord is my light and my salvation; whom should I fear?", reference: "Psalm 27:1" },
    { verse: "Seek first the kingdom of God and his righteousness, and all these things will be given you besides.", reference: "Matthew 6:33" },
    { verse: "Where two or three are gathered together in my name, there am I in the midst of them.", reference: "Matthew 18:20" },
    { verse: "Give thanks to the Lord, for he is good, for his mercy endures forever.", reference: "Psalm 136:1" },
    { verse: "Blessed are the pure in heart, for they will see God.", reference: "Matthew 5:8" },
    { verse: "For where your treasure is, there also will your heart be.", reference: "Matthew 6:21" },
    { verse: "Let the word of Christ dwell in you richly.", reference: "Colossians 3:16" },
    { verse: "Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things.", reference: "Philippians 4:8" },
    { verse: "We love because he first loved us.", reference: "1 John 4:19" },
    { verse: "The Lord is near to all who call upon him, to all who call upon him in truth.", reference: "Psalm 145:18" },
    { verse: "Do not conform yourselves to this age but be transformed by the renewal of your mind.", reference: "Romans 12:2" },
    { verse: "May the God of hope fill you with all joy and peace in believing, so that you may abound in hope by the power of the holy Spirit.", reference: "Romans 15:13" },
]

export function DailyVerse() {
    const [verse, setVerse] = useState(catholicBibleVerses[0])
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        const today = new Date()
        const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)
        const verseIndex = dayOfYear % catholicBibleVerses.length
        setVerse(catholicBibleVerses[verseIndex])
    }, [])

    const handleRefresh = () => {
        setIsAnimating(true)
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * catholicBibleVerses.length)
            setVerse(catholicBibleVerses[randomIndex])
            setIsAnimating(false)
        }, 300)
    }

    return (
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white dark:from-amber-950/20 dark:to-background">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                        <BookOpen className="h-4 w-4 text-amber-700" />
                        <span className="text-sm font-medium text-amber-900 dark:text-amber-100">Daily Verse</span>
                    </div>

                    <motion.div
                        key={verse.reference}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-amber-200 dark:border-amber-800"
                    >
                        <blockquote className="text-2xl md:text-3xl font-serif text-gray-800 dark:text-gray-100 leading-relaxed mb-6">
                            "{verse.verse}"
                        </blockquote>
                        <cite className="text-amber-700 dark:text-amber-400 font-medium not-italic">
                            — {verse.reference}
                        </cite>
                    </motion.div>

                    <button
                        onClick={handleRefresh}
                        disabled={isAnimating}
                        className="mt-6 inline-flex items-center gap-2 px-4 py-2 text-sm text-amber-700 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300 transition-colors disabled:opacity-50"
                    >
                        <RefreshCw className={`h-4 w-4 ${isAnimating ? 'animate-spin' : ''}`} />
                        <span>Another Verse</span>
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
