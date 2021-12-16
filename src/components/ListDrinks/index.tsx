import React from 'react';

const ListaBebidas = [
    {
        name: "Red Highball Sweet",
        photo: "src..."
    },
    {
        name: "Red Highball Citrus",
        photo: "src..."
    }
]

const ListDrinks = () => {
    return (
        <section className="section trick" id="bebidas">
          <h2 className="section__title">Bebidas</h2>
          <div className="trick__container container grid">

            {ListaBebidas.map((item) => (
                <div className="trick__content">
                    <img
                    src="assets/img/trick-treat1-img.png"
                    alt=""
                    className="trick__img"
                    />
                    <h3 className="trick__title">{item.name}</h3>
                    <button className="button trick__button">
                    <i className="bx bx-cart-alt trick__icon"></i>
                    </button>
                </div>
            ))}
        
            </div>
        </section>
    )
}

export default ListDrinks;