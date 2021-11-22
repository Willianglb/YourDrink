import './App.css';
import HomeBanner from './components/HomeBanner/index'

function App() {
  return (
    <div className="App">
      <header class="header" id="header">
            <nav class="nav container">
                <a href="#" class="nav__logo">
                    <img src="assets/img/logo.png" alt="" class="nav__logo-img" />
                    Bebidas
                </a>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a href="#home" class="nav__link active-link">Home</a>
                        </li>

                        <li class="nav__item">
                            <a href="#bebidas" class="nav__link">Bebidas</a>
                        </li>

                        <li class="nav__item">
                            <a href="#new" class="nav__link">New</a>
                        </li>

                        <li class="nav__item">
                            <a href="#about" class="nav__link">Sobre</a>
                        </li>

                        {/* Me chama */}
                        {/* <a href="#" class="button button--ghost">Support</a> */}
                    </ul>

                    <div class="nav__close" id="nav-close">
                        <i class='bx bx-x'></i>
                    </div>

                    <img src="assets/img/nav-img.png" alt="" class="nav__img" />
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-grid-alt'></i>
                </div>

            </nav>
        </header>

        <main class="main">
            <HomeBanner />

            {/* <!--==================== Bebidas ====================--> */}
            <section class="section trick" id="bebidas">
                <h2 class="section__title">Bebidas</h2>

                <div class="trick__container container grid">
                    <div class="trick__content">
                        <img src="assets/img/trick-treat1-img.png" alt="" class="trick__img" />
                        <h3 class="trick__title">Toffee</h3>
                        <span class="trick__subtitle">Candy</span>
                        <span class="trick__price">$11.99</span>
                        <button class="button trick__button">
                            <i class='bx bx-cart-alt trick__icon'></i>
                        </button>
                    </div>

                    <div class="trick__content">
                        <img src="assets/img/trick-treat2-img.png" alt="" class="trick__img" />
                        <h3 class="trick__title">Bone</h3>
                        <span class="trick__subtitle">Accessory</span>
                        <span class="trick__price">$8.99</span>
                        <button class="button trick__button">
                            <i class='bx bx-cart-alt trick__icon'></i>
                        </button>
                    </div>

                    <div class="trick__content">
                        <img src="assets/img/trick-treat3-img.png" alt="" class="trick__img" />
                        <h3 class="trick__title">Scarecrow</h3>
                        <span class="trick__subtitle">Accessory</span>
                        <span class="trick__price">$15.99</span>
                        <button class="button trick__button">
                            <i class='bx bx-cart-alt trick__icon'></i>
                        </button>
                    </div>

                    <div class="trick__content">
                        <img src="assets/img/trick-treat4-img.png" alt="" class="trick__img" />
                        <h3 class="trick__title">Candy Cane</h3>
                        <span class="trick__subtitle">Candy</span>
                        <span class="trick__price">$7.99</span>
                        <button class="button trick__button">
                            <i class='bx bx-cart-alt trick__icon'></i>
                        </button>
                    </div>

                    <div class="trick__content">
                        <img src="assets/img/trick-treat5-img.png" alt="" class="trick__img" />
                        <h3 class="trick__title">Pumpkin</h3>
                        <span class="trick__subtitle">Candy</span>
                        <span class="trick__price">$19.99</span>
                        <button class="button trick__button">
                            <i class='bx bx-cart-alt trick__icon'></i>
                        </button>
                    </div>

                    <div class="trick__content">
                        <img src="assets/img/trick-treat6-img.png" alt="" class="trick__img" />
                        <h3 class="trick__title">Ghost</h3>
                        <span class="trick__subtitle">Accessory</span>
                        <span class="trick__price">$17.99</span>
                        <button class="button trick__button">
                            <i class='bx bx-cart-alt trick__icon'></i>
                        </button>
                    </div>
                </div>
            </section>

            {/* <!--==================== Swipper Bonito (Não sabemos) ====================--> */}
            <section class="section new" id="new">
                <h2 class="section__title">Swipper Bonito</h2>

                <div class="new__container container">
                    <div class="swiper new-swiper">
                        <div class="swiper-wrapper">
                            <div class="new__content swiper-slide">
                                <div class="new__tag">New</div>
                                <img src="assets/img/new1-img.png" alt="" class="new__img" />
                                <h3 class="new__title">Haunted House</h3>
                                <span class="new__subtitle">Accessory</span>
                                
                                <div class="new__prices">
                                    <span class="new__price">$14.99</span>
                                    <span class="new__discount">$29.99</span>
                                </div>

                                <button class="button new__button">
                                    <i class='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>
        
                            <div class="new__content swiper-slide">
                                <div class="new__tag">New</div>
                                <img src="assets/img/new2-img.png" alt="" class="new__img" />
                                <h3 class="new__title">Halloween Candle</h3>
                                <span class="new__subtitle">Accessory</span>
        
                                <div class="new__prices">
                                    <span class="new__price">$11.99</span>
                                    <span class="new__discount">$21.99</span>
                                </div>

                                <button class="button new__button">
                                    <i class='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>
        
                            <div class="new__content swiper-slide">
                                <div class="new__tag">New</div>
                                <img src="assets/img/new3-img.png" alt="" class="new__img" />
                                <h3 class="new__title">Witch Hat</h3>
                                <span class="new__subtitle">Accessory</span>
        
                                <div class="new__prices">
                                    <span class="new__price">$4.99</span>
                                    <span class="new__discount">$9.99</span>
                                </div>

                                <button class="button new__button">
                                    <i class='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>
        
                            <div class="new__content swiper-slide">
                                <div class="new__tag">New</div>
                                <img src="assets/img/new4-img.png" alt="" class="new__img" />
                                <h3 class="new__title">Rip</h3>
                                <span class="new__subtitle">Accessory</span>
        
                                <div class="new__prices">
                                    <span class="new__price">$24.99</span>
                                    <span class="new__discount">$44.99</span>
                                </div>

                                <button class="button new__button">
                                    <i class='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>
        
                            <div class="new__content swiper-slide">
                                <div class="new__tag">New</div>
                                <img src="assets/img/new5-img.png" alt="" class="new__img" />
                                <h3 class="new__title">Terrifying Crystal Ball</h3>
                                <span class="new__subtitle">Accessory</span>
        
                                <div class="new__prices">
                                    <span class="new__price">$5.99</span>
                                    <span class="new__discount">$12.99</span>
                                </div>

                                <button class="button new__button">
                                    <i class='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>
        
                            <div class="new__content swiper-slide">
                                <div class="new__tag">New</div>
                                <img src="assets/img/new6-img.png" alt="" class="new__img" />
                                <h3 class="new__title">Witch Broom</h3>
                                <span class="new__subtitle">Accessory</span>
        
                                <div class="new__prices">
                                    <span class="new__price">$7.99</span>
                                    <span class="new__discount">$14.99</span>
                                </div>

                                <button class="button new__button">
                                    <i class='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--==================== ABOUT ====================--> */}
            <section class="section about" id="about">
                <div class="about__container container grid">
                    <div class="about__data">
                        <h2 class="section__title about__title">Seja Bem-vindo!</h2>
                        <p class="about__description">Obrigado por vim, aproveite e beba com moderação!</p>
                    </div>

                    {/* Eu mandando um joinha abaixo */}
                    <img src="assets/img/about-img.png" alt="" class="about__img" />
                </div>
            </section>

            {/* <!--==================== Mensagens ====================--> */}
            <section class="section newsletter">
                <div class="newsletter__container container">
                    <h2 class="section__title">Correio</h2>
                    <p class="newsletter__description">
                        Fique a vontade para falar o que quiser comigo
                    </p>

                    <form action="" class="newsletter__form">
                        <input type="text" placeholder="Enter your email" class="newsletter__input" />
                        <button class="button">
                            Enviar
                        </button>
                    </form>
                </div>
            </section>
        </main>

        {/* <!--==================== FOOTER ====================--> */}
            <footer class="footer section">
                <div class="footer__container container grid">
                    <div class="footer__content">
                        <a href="#" class="footer__logo">
                            <img src="assets/img/logo.png" alt="" class="footer__logo-img" />
                            Birthday
                        </a>

                        <p class="footer__description">Aproveite a festa.</p>
                        
                        <div class="footer__social">
                            <a href="https://www.linkedin.com/in/willianglb/" target="_blank" class="footer__social-link">
                                <i class='bx bxl-facebook'></i>
                            </a>
                            <a href="https://www.instagram.com/willianglb/" target="_blank" class="footer__social-link">
                                <i class='bx bxl-instagram-alt' ></i>
                            </a>
                            <a href="https://twitter.com/willglb" target="_blank" class="footer__social-link">
                                <i class='bx bxl-twitter' ></i>
                            </a>
                        </div>
                    </div>

                    <div class="footer__content">
                        <h3 class="footer__title">Sobre:</h3>
                        
                        <ul class="footer__links">
                            <li>
                                <a href="#" class="footer__link">Willian Botelho</a>
                            </li>
                            <li>
                                <a href="#" class="footer__link">Gabriel Wedig</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <span class="footer__copy">&#169; Willianglb</span>

                <img src="assets/img/footer1-img.png" alt="" class="footer__img-one" />
                <img src="assets/img/footer2-img.png" alt="" class="footer__img-two" />
            </footer>

            {/* <!--=============== SCROLL UP ===============--> */}
            <a href="#" class="scrollup" id="scroll-up">
                <i class='bx bx-up-arrow-alt scrollup__icon'></i>
            </a>
    </div>
  );
};

export default App;
