import React from 'react';
import InfluencerCard from './InfluencerCard';
import { influencers } from './influencerData';

export default function InfluencerGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {influencers.map((influencer, index) => (
        <InfluencerCard
          key={influencer.name}
          {...influencer}
          index={index}
        />
      ))}
    </div>
  );
}