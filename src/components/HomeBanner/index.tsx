import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import {BannerStyles} from './HomeBanner.styles';

import vinho from '../../assets/img/5.png';
import Redball from '../../assets/img/1.png';
import barreiro from '../../assets/img/6.png';

const HomeBanner = () => {

    return (
        <BannerStyles>
        <div className="swiper-container" id="home" />
        <Swiper
            centeredSlides={true}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide>
                {/* <!-- HOME SLIDER 1 --> */}
                <section className="swiper-slide">
                    <div className="home__content grid">
                        <div className="home__group">
                            <img src={vinho} alt="" className="home__img" />
                            <div className="home__indicator"></div>

                            <div className="home__details-img">
                                <h4 className="home__details-title">Caipirinha de vinho</h4>
                                <span className="home__details-subtitle">Vinho com limão e Gelo</span>
                            </div>
                        </div>

                        <div className="home__data container">
                            <h3 className="home__subtitle">#1 Top Caipirinha</h3>
                            <p className="home__description"> Em média, 500Ml de vinho com 1 limão e 1 colher de açúcar.
                            </p>
                        </div>
                    </div>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                {/* <!-- HOME SLIDER 2 --> */}
                <section className="swiper-slide">
                            <div className="home__content grid">
                                <div className="home__group">
                                    <img src={Redball} alt="" className="home__img"/>
                                    <div className="home__indicator"></div>

                                    <div className="home__details-img">
                                        <h4 className="home__details-title">RED HIGHBALL SWEET</h4>
                                        <span className="home__details-subtitle">Red Label, Morango e guaraná</span>
                                    </div>
                                </div>

                                <div className="home__data container">
                                    <h3 className="home__subtitle">#2 Top Whisky</h3>
                                    <p className="home__description"> 50Ml de Red Label, 4 morangos macerados e o restante de guaraná.
                                    </p>
                                </div>
                            </div>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                {/* <!-- HOME SLIDER 3 --> */}
                <section className="swiper-slide">
                            <div className="home__content grid">
                                <div className="home__group">
                                    <img src={barreiro} alt="" className="home__img" />
                                    <div className="home__indicator"></div>

                                    <div className="home__details-img">
                                        <h4 className="home__details-title">Caipirinha do vadinho</h4>
                                        <span className="home__details-subtitle">Velho barreiro, limão e açucar</span>
                                    </div>
                                </div>

                                <div className="home__data container">
                                    <h3 className="home__subtitle">#3 Top cachaça</h3>
                                    <p className="home__description"> Em média, 2 limões com 1 dose de cachaça e 1 colher de açúcar.
                                    </p>
                                </div>
                            </div>
                </section>
            </SwiperSlide>
        </Swiper>
    </BannerStyles>
    );
};

export default HomeBanner;