import OO1 from './img/1.png';
import OO2 from './img/2.png';
import OO3 from './img/3.png';
import OO4 from './img/4.png';
import OO5 from './img/5.png';
import OO6 from './img/6.png';
import OO7 from './img/7.png';
import OO8 from './img/Surprise.jpg';
import OO9 from './img/dado.png';
import O1O from './img/agua2.webp';
import O11 from './img/refri.png';
import O12 from './img/sucoLaranja.png';

type ListaBebidasProps = {
    name: string;
    photo: string;
    Desc: string;
    id: number;
    href?: string;
};

const ListaBebidas: ListaBebidasProps[] = [
    {
        name: "Red Highball Sweet",
        photo: OO1,
        Desc: "Whisky com morango e guaraná",
        id: 1
    },
    {
        name: "Red Highball Citrus",
        photo: OO2,
        Desc: "Whisky com limão e soda",
        id: 2
    },
    {
        name: "Shot Horse",
        photo: OO3,
        Desc: "Shot de whisky com gelo",
        id: 3
    },
    {
        name: "Whisky Tropical",
        photo: OO4,
        Desc: "Whisky, Energético Tropical e laranja",
        id: 4
    },
    {
        name: "Caipirinha de vinho",
        photo: OO5,
        Desc: "Caipirinha de vinho com limão",
        id: 5
    },
    {
        name: "Caipiroska de limão",
        photo: OO6,
        Desc: "Caipiroska de limão",
        id: 6
    },
    {
        name: "Caipiroska de morango",
        photo: OO7,
        Desc: "Caipiroska de morango",
        id: 7
    },
    {
        name: "Caipirinha de limão",
        photo: OO6,
        Desc: "Caipirinha de limão feita com velho barreiro",
        id: 8
    },
    {
        name: "Caipirinha de morango",
        photo: OO7,
        Desc: "Caipirinha de morango feita com velho barreiro",
        id: 9
    },
    {
        name: "Surprise",
        photo: OO8,
        Desc: "Gin, chá, baly e outras coisinhas...",
        id: 10
    },
    {
        name: "Aleatório",
        photo: OO9,
        Desc: "Bebida sorteada a partir da lista de bebidas",
        id: 11
    },
    {
        name: "Água",
        photo: O1O,
        Desc: "Água",
        id: 12
    },
    {
        name: "Refrigerante",
        photo: O11,
        Desc: "Irei até ao local pegar qual deseja",
        id: 13
    },
    {
        name: "Suco de laranja",
        photo: O12,
        Desc: "Suco de laranja integral",
        id: 14
    }
]

export default ListaBebidas;