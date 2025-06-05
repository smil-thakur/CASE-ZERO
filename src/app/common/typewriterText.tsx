'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const TypewriterText = ({ text, speed = 50, onComplete }: { text: string; speed?: number; onComplete: () => void }) => {
    const [displayedText, setDisplayedText] = useState('')
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index == text.length - 1) {
            onComplete()
        }
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index])
                setIndex(index + 1)
            }, speed)
            return () => clearTimeout(timeout)
        }
    }, [index, text, speed])

    return (
        <div>
            {displayedText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-[10px] ml-1 bg-white"
            >
                &nbsp;
            </motion.span>
        </div>
    )
}

export default TypewriterText