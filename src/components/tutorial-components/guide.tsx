import React from 'react';
import GuideCards from './GuideCards';
import { assets } from '@/assets/assets';
import { BookOpen, Video } from 'lucide-react';

const Guidance = () => {
  return (
    <div className="bg-background text-foreground min-h-screen py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-6 text-primary">
          Guides
        </h1>
        <p className="text-center text-muted mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          Explore our guides to enhance your trading skills and knowledge.
        </p>
        <div className="bg-card p-6 sm:p-8 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <BookOpen className="text-primary w-6 h-6" />
            <h2 className="text-xl sm:text-2xl font-semibold text-primary">
              Step-by-Step Guides
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <GuideCards image={assets.thumbnail} title={`Get Started with SpiceDeriv Bot`} />
            <GuideCards image={assets.thumbnail} title={`Let's Build a bot together.`} />
          </div>
        </div>
        <div className="bg-card p-6 sm:p-8 rounded-lg shadow-lg mt-8 sm:mt-12">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Video className="text-primary w-6 h-6" />
            <h2 className="text-xl sm:text-2xl font-semibold text-primary">
              Video Tutorials
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <GuideCards image={assets.thumbnail} title={`An introduction to SpiceDeriv's Bot`}/>
            <GuideCards image={assets.thumbnail} title={`How to build a basic trading bot with SpiceDeriv Bot`}/>
            <GuideCards image={assets.thumbnail} title={`How to use Martingale strategy on SpiceDeriv Bot`}/>
            <GuideCards image={assets.thumbnail} title={`Introducing Accumulator Options on SpiceDeriv Bot: Available for automated trading`}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidance;