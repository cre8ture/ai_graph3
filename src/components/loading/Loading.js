import React from 'react';
import UseAnimations from 'react-useanimations';
// EVERY ANIMATION NEEDS TO BE IMPORTED FIRST -> YOUR BUNDLE WILL INCLUDE ONLY WHAT IT NEEDS
import loading2 from 'react-useanimations/lib/loading2'
import loading from 'react-useanimations/lib/loading'

export const Loading = () => {
  return (
    <div>
    <UseAnimations animation={loading2} size={25} />
    </div>
  )
};

export const Simple_loading = () => {
  return (
    <div>
<p>Loading ... </p>    
</div>
  )}


export const Loading_circle = () => {
    return (
      <div>
      <UseAnimations animation={loading} size={56} />
      
</div>
    )
  };
  