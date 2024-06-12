import React from 'react';

const Category = ({name}) => {
  return (
    <div>
      <img src={name} alt="Image_3" className="w-full h-auto rounded-lg shadow-lg hover:scale-110 transition" />
      <p>Helmets</p>
    </div>
  )
}

export default Category