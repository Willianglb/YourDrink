import React, {useEffect} from 'react';
import {Swiper, Pagination, Navigation} from 'swiper';

Swiper.use([Pagination, Navigation]);

const HomeBanner = () => {
    const createSwiper = () => {
        const sw = new Swiper('.swiper-container', {
            preloadImages: false,
            lazy: true,
            slidesPerView: 'auto',
            loopAdditionalSlides: 0,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                1025: {
                    loop: true,
                    autoplay: true,
                    autoHeight: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        renderBullet(index, className) {
                            return ` <div className="${className}"> <div className="number">${[index]}</div></div>`;
                        },
                    },
                    slidesPerView: 1,
                },
                768: {
                    spaceBetween: 10,
                    loop: true,
                    autoplay: true,
                    autoHeight: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        renderBullet(index, className) {
                            return ` <div className="${className}"> <div className="number">${[index]}</div></div>`;
                        },
                    },
                    slidesPerView: 2,
                },
                320: {
                    spaceBetween: 10,
                    loop: true,
                    autoplay: true,
                    autoHeight: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        renderBullet(index, className) {
                            return ` <div className="${className}"> <div className="number">${[index]}</div></div>`;
                        },
                    },
                    slidesPerView: 2,
                },
            },
        });
        return sw;
    };

    useEffect(() => {
        createSwiper();
    }, []);

    return (
        <section className="home container" id="home">
            <div className="swiper home-swiper">
                <div className="swiper-wrapper">
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
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
};

export default HomeBanner;