'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
  logo: string;
  company: string;
  text: string;
  name: string;
  role: string;
  photo: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    logo: '/logo1.jpg',
    company: 'Serene Living Products',
    text: 'Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth.',
    name: 'Ethan Morgan',
    role: 'Founder & CEO',
    photo: '/photo1.jpg',
    rating: 5,
  },
  {
    logo: '/logo2.jpg',
    company: 'Starlight Creations',
    text: 'Sales Fortuna has made sales so much easier. It saves time and helps us land more deals without extra hassle.',
    name: 'Olivia Hayes',
    role: 'Owner',
    photo: '/photo2.jpg',
    rating: 4.5,
  },
  {
    logo: '/logo3.jpg',
    company: 'Opulent Living Group',
    text: 'Sales Fortuna simplified our lead generation and helped us grow consistently.',
    name: 'Alexander Reed',
    role: 'Co-Founder',
    photo: '/photo3.jpg',
    rating: 5,
  },
  {
    logo: '/logo3.jpg',
    company: 'Opulent Living Group',
    text: 'Sales Fortuna simplified our lead generation and helped us grow consistently.',
    name: 'Alexander Reed',
    role: 'Co-Founder',
    photo: '/photo3.jpg',
    rating: 5,
  },
  {
    logo: '/logo2.jpg',
    company: 'Starlight Creations',
    text: 'Sales Fortuna has made sales so much easier. It saves time and helps us land more deals without extra hassle.',
    name: 'Olivia Hayes',
    role: 'Owner',
    photo: '/photo2.jpg',
    rating: 4.5,
  },
  {
    logo: '/logo1.jpg',
    company: 'Serene Living Products',
    text: 'Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth.',
    name: 'Ethan Morgan',
    role: 'Founder & CEO',
    photo: '/photo1.jpg',
    rating: 5,
  },
];

const renderStars = (rating: number) => {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  const stars = [];
  for (let i = 0; i < full; i++) {
    stars.push(
      <svg
        key={`full-${i}`}
        className='w-5 h-5 text-yellow-400'
        fill='currentColor'
        viewBox='0 0 20 20'
      >
        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.463a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.39 2.463c-.785.57-1.84-.197-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L3.603 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z' />
      </svg>
    );
  }
  if (half) {
    stars.push(
      <svg
        key='half'
        className='w-5 h-5 text-yellow-400'
        fill='currentColor'
        viewBox='0 0 20 20'
      >
        <defs>
          <linearGradient id='halfGrad'>
            <stop offset='50%' stopColor='currentColor' />
            <stop offset='50%' stopColor='transparent' />
          </linearGradient>
        </defs>
        <path
          fill='url(#halfGrad)'
          d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.463a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.39 2.463c-.785.57-1.84-.197-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L3.603 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z'
        />
      </svg>
    );
  }
  return <div className='flex justify-center gap-1 mt-2'>{stars}</div>;
};

const TestimonialsSwiper: React.FC = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div
      className='max-w-4xl mx-auto px-4 relative'
      style={{ backgroundImage: 'url(/back.jpg)' }}
    >
      <h2 className='text-3xl text-gray-700 font-extrabold text-center mb-12'>
        Voices of Success with Sales Fortuna
      </h2>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        a11y={{ enabled: true }}
        loop={false}
        onBeforeInit={swiper => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== 'boolean'
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        style={{ paddingBottom: 60 }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='bg-white h-[360px] md:h-[400px] lg:h-[460px] overflow-hidden rounded-xl shadow-lg p-6 flex flex-col items-center max-h-[480px] mx-4'>
              <img
                src={item.logo}
                alt={`${item.company} logo`}
                className='h-10 object-contain mb-4'
              />
              <p
                className='text-gray-700 italic mb-4 flex-grow text-center overflow-hidden'
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: 'vertical',
                  textOverflow: 'ellipsis',
                }}
              >
                {item.text}
              </p>
              {renderStars(item.rating)}
              <img
                src={item.photo}
                alt={item.name}
                className='w-16 h-16 rounded-full mt-5 border-2 border-white shadow'
              />
              <h3 className='font-bold mt-3'>{item.name}</h3>
              <p className='text-gray-500 text-sm'>
                {item.role}, {item.company}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Рабочие кастомные кнопки */}
      <button
        ref={prevRef}
        className='custom-swiper-button-prev absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded-full bg-white border shadow p-3 hover:bg-gray-100 transition hidden md:block'
        aria-label='Previous slide'
      >
        <svg
          className='w-6 h-6 text-gray-700'
          fill='none'
          stroke='currentColor'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
          viewBox='0 0 24 24'
        >
          <path d='M15 18l-6-6 6-6' />
        </svg>
      </button>
      <button
        ref={nextRef}
        className='custom-swiper-button-next border-1 absolute top-1/2 right-0 z-10 -translate-y-1/2 rounded-full bg-white shadow p-3 hover:bg-gray-100 transition hidden md:block'
        aria-label='Next slide'
      >
        <svg
          className='w-6 h-6 text-gray-700'
          fill='none'
          stroke='currentColor'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
          viewBox='0 0 24 24'
        >
          <path d='M9 18l6-6-6-6' />
        </svg>
      </button>
    </div>
  );
};

export default TestimonialsSwiper;
