import React from 'react';
import PhotoCategory from './PhotoCategory';
import { photographyCategories } from './photographyData';

export default function PhotographyGrid() {
  return (
    <div className="space-y-16">
      {photographyCategories.map((category, index) => (
        <PhotoCategory
          key={category.title}
          {...category}
          index={index}
        />
      ))}
    </div>
  );
}