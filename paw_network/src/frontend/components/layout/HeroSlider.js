import React, { useState } from 'react';
import Slider from 'react-slick';
import classes from './HeroSlider.module.css'; // Importing CSS Module

const categoryServices = [
  { id: 1, name: 'Dogs', key: 'DogServices' },
  { id: 2, name: 'Cats', key: 'CatServices' },
  { id: 3, name: 'Medical', key: 'MedicalServices' },
  { id: 4, name: 'Shop', key: 'ShopServices' },
  { id: 5, name: 'Others', key: 'OtherServices' }
];

const pawServices = {
  DogServices: [
    { id: 1, title: 'Walking', description: 'We walk your dog' },
    { id: 2, title: 'Washing', description: 'We wash your dog' }
  ],
  CatServices: [
    { id: 3, title: 'Hair Cut', description: 'We change your cat look' },
    { id: 4, title: 'Clean Up', description: 'We change your cat sand' }
  ],
  MedicalServices: [
    { id: 5, title: 'Medical Urgence', description: 'We instantly call a doctor' },
    { id: 6, title: 'Health Check', description: 'We provide health checkups' }
  ],
  ShopServices: [
    { id: 7, title: 'Foods', description: 'We provide dog food' },
    { id: 8, title: 'Accessories', description: 'We provide accessories and utility' }
  ],
  OtherServices: [
    { id: 9, title: 'Requests', description: 'We accept custom requests' },
    { id: 10, title: 'Finder GPS', description: 'We provide real-time pet tracking' }
  ],
};

function HeroSlider() {
  const [selectedCategory, setSelectedCategory] = useState('DogServices');

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500, 
    slidesToShow: 2, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000, 
  };
  

  return (
    <div>
     
      <div className={classes.selectionBar}>
        {categoryServices.map((category) => (
          <button
            key={category.id}
            className={`${classes.categoryButton} ${
              selectedCategory === category.key ? classes.activeButton : ''
            }`}
            onClick={() => setSelectedCategory(category.key)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <Slider {...sliderSettings}>
        {pawServices[selectedCategory] &&
          pawServices[selectedCategory].map((service) => (
            <div key={service.id} className={classes.sliderItem}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default HeroSlider;
