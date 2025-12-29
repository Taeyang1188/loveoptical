
import React from 'react';
import { StatItemProps } from '../types';

const StatItem: React.FC<StatItemProps> = ({ label, value, suffix }) => (
  <div className="flex flex-col items-center p-8 border-b md:border-b-0 border-gray-200 md:border-r border-gray-200 last:border-0">
    <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-serif">
      {value}<span className="text-[#A53837] ml-1">{suffix}</span>
    </div>
    <div className="text-xs tracking-widest uppercase text-gray-500 font-medium text-center">
      {label}
    </div>
  </div>
);

const Stats: React.FC = () => {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <StatItem label="Years in Service" value="50" suffix="+" />
          <StatItem label="Frames Collection" value="1" suffix="k" />
          <StatItem label="Happy Customers" value="1" suffix="M" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
