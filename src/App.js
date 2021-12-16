import './App.css';
import HomeBanner from './components/HomeBanner/index';
import Header from './components/Header/index';
import ListDrinks from './components/ListDrinks/index';

function App() {
  return (
    <div className="App">
      <Header />

      <main class="main">
        {/* <!--==================== Swiper Inicial ====================--> */}
        <HomeBanner />

        {/* <!--==================== Bebidas ====================--> */}
        <ListDrinks />

        {/* <!--==================== Modal ====================--> */}
        {/* Fazer modal que abre e apresenta um lugar para colocar o nome quando clicado na bebida escolhida */}

        {/* <!--==================== Mensagens ====================--> */}
        <section class="section newsletter">
          <div class="newsletter__container container">
            <h2 class="section__title">Correio</h2>
            <p class="newsletter__description">
              Fique a vontade para falar o que quiser comigo
            </p>

            <form action="" class="newsletter__form">
              <input
                type="text"
                placeholder="Enter your email"
                class="newsletter__input"
              />
              <button class="button">Enviar</button>
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
              <a
                href="https://www.linkedin.com/in/willianglb/"
                target="_blank"
                class="footer__social-link"
              >
                <i class="bx bxl-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/willianglb/"
                target="_blank"
                class="footer__social-link"
              >
                <i class="bx bxl-instagram-alt"></i>
              </a>
              <a
                href="https://twitter.com/willglb"
                target="_blank"
                class="footer__social-link"
              >
                <i class="bx bxl-twitter"></i>
              </a>
            </div>
          </div>

          <div class="footer__content">
            <h3 class="footer__title">Sobre:</h3>

            <ul class="footer__links">
              <li>
                <a href="#" class="footer__link">
                  Willian Botelho
                </a>
              </li>
              <li>
                <a href="#" class="footer__link">
                  Gabriel Wedig
                </a>
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
        <i class="bx bx-up-arrow-alt scrollup__icon"></i>
      </a>
    </div>
  )
}

export default App
