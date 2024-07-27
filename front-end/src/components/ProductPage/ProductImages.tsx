'use client'
import React, { useState, useEffect, useRef } from 'react';
import Swiper from 'react-id-swiper';
const ProductImages = () => {
  const ProductImagesSwiperRef = useRef(null);
  const thumbnailSwiper = useRef(null);
  const gallerySwiperParams = {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  };
  const thumbnailSwiperParams = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true
  };
  useEffect(() => {
    const gallerySwiper = gallerySwiperRef.current.swiper;
    const thumbnailSwiper = thumbnailSwiperRef.current.swiper;
    if (gallerySwiper.controller && thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, []);
  return (
    <div>
      <Swiper {...gallerySwiperParams} ref={gallerySwiperRef}>
        <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/1)' }} />
        <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/2)' }} />
        <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/3)' }} />
        <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/4)' }} />
        <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/5)' }} />
      </Swiper>
      <Swiper {...thumbnailSwiperParams} ref={thumbnailSwiper}>
        <div style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/1)' }} />
        <div style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/2)' }} />
        <div style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/3)' }} />
        <div style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/4)' }} />
        <div style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/5)' }} />
      </Swiper>
    </div>
  );
};
export default ProductImages;