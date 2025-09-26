import React from 'react';
import head2 from '../assets/cat1.png.png'; 
import head3 from '../assets/cat1.png.png';
import head4 from '../assets/cat1.png.png';
import head5 from '../assets/cat1.png.png';
import head6 from '../assets/cat1.png.png';
import head7 from '../assets/cat1.png.png';
import head8 from '../assets/cat1.png.png';
import head9 from '../assets/cat1.png.png';
import head02 from '../assets/cat1.png.png';
import head002 from '../assets/cat1.png.png';
const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Gaming',
      image: head2,
      bgColor: 'bg-gray-200'
    },
    {
      id: 2,
      name: 'Sport Equip',
      image: head3, 
      bgColor: 'bg-purple-100'
    },
    {
      id: 3,
      name: 'Kitchen',
      image: head4,
      bgColor: 'bg-gray-200'
    },
    {
      id: 4,
      name: 'Robot ',
      image: head5,
      bgColor: 'bg-gray-200'
    },
    {
      id: 5,
      name: 'Mobiles',
      image: head6,
      bgColor: 'bg-blue-100'
    },
    {
      id: 6,
      name: 'Office',
      image: head7,
      bgColor: 'bg-gray-200'
    },
    {
      id: 7,
      name: 'Cameras',
      image: head8,
      bgColor: 'bg-gray-200'
    },
    {
      id: 8,
      name: 'Computers',
      image: head9,
      bgColor: 'bg-blue-100'
    },
    {
      id: 9,
      name: 'Televisions',
      image: head002,
      bgColor: 'bg-gray-200'
    },
    {
      id: 10,
      name: 'Audios',
      image: head02,
      bgColor: 'bg-gray-200'
    }
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl  font-bold text-gray-900">Popular Categories</h2>
        <a 
          href="#" 
          className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
        >
          View All
        </a>
      </div>

    
      <div className="grid grid-cols-3  md:grid-cols-5 lg:grid-cols-10  ">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center group cursor-pointer w-20"
          >
            
            <div className={`w-12 h-12 ${category.bgColor} rounded-full flex items-center justify-center mb-3 overflow-hidden group-hover:shadow-md transition-shadow duration-200`}>
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-8 h-8 object-cover rounded-full"
              />
            </div>
            
          
            <span className="text-sm font-medium text-gray-700 text-center group-hover:text-gray-900 transition-colors duration-200">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
