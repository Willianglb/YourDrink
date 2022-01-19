import React from 'react';

import HomeBanner from '../../components/HomeBanner/index';
import Header from '../../components/Header/index';
import ListDrinks from '../../components/ListDrinks/index';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        {/* <!--==================== Swiper Inicial ====================--> */}
        <HomeBanner />

        {/* <!--==================== Bebidas ====================--> */}
        <ListDrinks />
      </main>

      {/* <!--==================== FOOTER ====================--> */}
      <footer className="footer section">
        <div className="footer__container container grid">
          <div className="footer__content">
            <a href="#" className="footer__logo">
              <img src="assets/img/logo.png" alt="" className="footer__logo-img" />
              Birthday
            </a>

            <p className="footer__description">Aproveite a festa.</p>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Desenvolvedores:</h3>

            <ul className="footer__links">
              <li>
                <a href="https://www.instagram.com/willianglb/" className="footer__link">
                  Willian Botelho
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/gabriel_wedig/" className="footer__link">
                  Gabriel Wedig
                </a>
              </li>
            </ul>
          </div>
        </div>

        <span className="footer__copy">&#169; Willianglb</span>

        <img src="assets/img/footer1-img.png" alt="" className="footer__img-one" />
        <img src="assets/img/footer2-img.png" alt="" className="footer__img-two" />
      </footer>

      {/* <!--=============== SCROLL UP ===============--> */}
      <a href="#" className="scrollup" id="scroll-up">
        <i className="bx bx-up-arrow-alt scrollup__icon"></i>
      </a>
    </div>
  )
}

export default App;

