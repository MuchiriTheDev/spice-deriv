import { assets } from '@/assets/assets'
import { AlertOctagon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const StartTrading = () => {
    return (
        <div className='max-w-3xl p-5 bg-white w-full flex flex-col md:flex-row justify-center items-center gap-5 rounded-lg shadow-md'>
            {/* Left side */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative rounded-lg overflow-hidden">
                <Image
                    src={assets.trading}
                    alt='trading'
                    width={600}
                    height={600}
                    className='w-full h-full object-cover'
                />
            </div>
            {/* Right side */}
            <div className="w-full md:w-1/2 flex flex-col items-start">
                <h1 className='text-2xl font-bold text-primary-foreground text-center md:text-left'>Start Trading</h1>
                <p className='text-sm font-medium mt-4 text-left'>
                    By becoming a trader you will allow others to copy your strategy
                </p>
                <div className="flex justify-start mt-5 w-full">
                    <button className='bg-primary text-white py-2 px-4 rounded-md'>Start Trading</button>
                </div>
                <div className='text-xs font-medium mt-5 p-3 rounded-xl bg-accent/40 flex items-start gap-2 justify-start text-left'>
                    <AlertOctagon />
                    <p>By becoming a trader you will <strong>not</strong> be able to copy others</p>
                </div>

            </div>
        </div>
    )
}

export default StartTrading