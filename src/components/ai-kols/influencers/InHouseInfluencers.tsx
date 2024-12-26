import React from 'react';
import { Users } from 'lucide-react';
import InfluencerGrid from './InfluencerGrid';

export default function InHouseInfluencers() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-[#FF0000]/10 rounded-xl">
            <Users className="w-6 h-6 text-[#FF0000]" />
          </div>
        </div>
        <h2 className="text-4xl font-display font-medium mb-6">
          <span className="text-white">Our </span>
          <span className="gradient-text">In-house Influencers</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          Meet our talented content creators who bring brands to life ✨
        </p>
      </div>
      <InfluencerGrid />
    </section>
  );
}