import React from 'react';
import UseAnimations from 'react-useanimations';
// EVERY ANIMATION NEEDS TO BE IMPORTED FIRST -> YOUR BUNDLE WILL INCLUDE ONLY WHAT IT NEEDS
import loading2 from 'react-useanimations/lib/loading2'
import loading from 'react-useanimations/lib/loading'

export const Loading = () => {
  return (
    <UseAnimations animation={loading2} size={56} />
  )
};


export const Loading_circle = () => {
    return (
      <UseAnimations animation={loading} size={56} />
    )
  };
  