import React, {useEffect} from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import {BannerStyles} from './HomeBanner.styles';

const HomeBanner = () => {

    // useEffect(() => {
    //     createSwiper();
    // }, []);

    // Falta estilizar

    return (
        <BannerStyles>
        <div className="swiper-container" id="home" />
        <Swiper
            autoplay={{delay: 5000}}
            loop={true}
            spaceBetween={60}
            slidesPerView={3}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide>
                {/* <!-- HOME SLIDER 1 --> */}
                <section className="swiper-slide">
                    <div className="home__content grid">
                        <div className="home__group">
                            <img src="assets/img/home1-img.png" alt="" className="home__img" />
                            <div className="home__indicator"></div>

                            <div className="home__details-img">
                                <h4 className="home__details-title">Caipirinha de vinho</h4>
                                <span className="home__details-subtitle">Vinho com limão e Gelo</span>
                            </div>
                        </div>

                        <div className="home__data">
                            <h3 className="home__subtitle">#1 Top Caipirinha</h3>
                            <p className="home__description"> Em média, 500Ml de vinho com 1 limão e 1 colher de açúcar.
                            </p>

                            <div className="home__buttons">
                                <a href="#" className="button">Pedir Agora</a>
                                <a href="#" className="button--link button--flex">Menu de caipirinhas <i className='bx bx-right-arrow-alt button__icon'></i></a>
                            </div>
                        </div>
                    </div>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                {/* <!-- HOME SLIDER 2 --> */}
                <section className="swiper-slide">
                            <div className="home__content grid">
                                <div className="home__group">
                                    <img src="assets/img/home2-img.png" alt="" className="home__img"/>
                                    <div className="home__indicator"></div>

                                    <div className="home__details-img">
                                        <h4 className="home__details-title">RED HIGHBALL SWEET</h4>
                                        <span className="home__details-subtitle">Red Label, Morango e guaraná</span>
                                    </div>
                                </div>

                                <div className="home__data">
                                    <h3 className="home__subtitle">#2 Top Whisky</h3>
                                    <p className="home__description"> 50Ml de Red Label, 4 morangos macerados e o restante de guaraná.
                                    </p>

                                    <div className="home__buttons">
                                        <a href="#" className="button">Pedir Agora</a>
                                        <a href="#" className="button--link button--flex">Menu de whiskies <i className='bx bx-right-arrow-alt button__icon'></i></a>
                                    </div>
                                </div>
                            </div>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                {/* <!-- HOME SLIDER 3 --> */}
                <section className="swiper-slide">
                            <div className="home__content grid">
                                <div className="home__group">
                                    <img src="assets/img/home3-img.png" alt="" className="home__img" />
                                    <div className="home__indicator"></div>

                                    <div className="home__details-img">
                                        <h4 className="home__details-title">SMIRNOFF TÔNICA</h4>
                                        <span className="home__details-subtitle">Famosa Beats GT</span>
                                    </div>
                                </div>

                                <div className="home__data">
                                    <h3 className="home__subtitle">#3 Top Vodka</h3>
                                    <p className="home__description"> 50Ml de Vodka, água tônica, 1/2 limão e Hortelâ.
                                    </p>

                                    <div className="home__buttons">
                                        <a href="#" className="button">Pedir Agora</a>
                                        <a href="#" className="button--link button--flex">Menu de vodkas <i className='bx bx-right-arrow-alt button__icon'></i></a>
                                    </div>
                                </div>
                            </div>
                </section>
            </SwiperSlide>
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
        </Swiper>
    </BannerStyles>
    );
};

export default HomeBanner;