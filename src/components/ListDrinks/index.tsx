import React, {useState} from 'react';
import { ADD_PEDIDOS } from '../../services/mutations';
import { useMutation } from '@apollo/client';

import * as S from './ListDrinks.styles';

//Imagens
import OO1 from '../../assets/img/1.png';
import OO2 from '../../assets/img/2.png';
import OO3 from '../../assets/img/3.png';
import OO4 from '../../assets/img/4.png';
import OO5 from '../../assets/img/5.png';
import OO6 from '../../assets/img/6.png';
import OO7 from '../../assets/img/7.png';
import OO8 from '../../assets/img/Surprise.jpg';
import OO9 from '../../assets/img/dado.png';
import O1O from '../../assets/img/agua2.webp';
import O11 from '../../assets/img/refri.png';
import O12 from '../../assets/img/sucoLaranja.png';

// Material-ui
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const ListaBebidas = [
    {
        name: "Red Highball Sweet",
        photo: OO1,
        Desc: "Whisky com morango e guaraná",
        id: 1,
        href: 'redball'
    },
    {
        name: "Red Highball Citrus",
        photo: OO2,
        Desc: "Whisky com limão e soda",
        id: 2
    },
    {
        name: "Shot Whisky",
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
        id: 5,
        href: 'vinho'
    },
    {
        name: "Caipiroska de limão",
        photo: OO6,
        Desc: "Caipiroska de limão (Feito com Vodka)",
        id: 6
    },
    {
        name: "Caipiroska de morango",
        photo: OO7,
        Desc: "Caipiroska de morango (Feito com Vodka)",
        id: 7
    },
    {
        name: "Caipirinha de limão",
        photo: OO6,
        Desc: "Caipirinha de limão feita com velho barreiro",
        id: 8,
        href: 'caipirinha'
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
        id: 11
    },
    {
        name: "Refrigerante",
        photo: O11,
        Desc: "Irei até ao local pegar qual deseja",
        id: 11
    },
    {
        name: "Suco de laranja",
        photo: O12,
        Desc: "Suco de laranja integral",
        id: 11
    }
]

const ListDrinks = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [foto, setFoto] = useState("");
    const [id, setId] = useState("");

    const [semNome, setSemNome] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);

    const [usuario, setUsuario] = React.useState("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsuario(event.target.value);
    };

    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const [addDrink]: any = useMutation(ADD_PEDIDOS);

    const FireCheckout = (desc: string, name: string, photo: string, id: any) => {
        const idString = id.toString();
        setTitle(name);
        setDesc(desc);
        setFoto(photo);
        setId(idString);
        
        handleOpen();
    };

    return (
        <section className="section trick" id="bebidas">
          <h2 className="section__title">Bebidas</h2>
          <div className="trick__container container grid">

            {ListaBebidas.map((item) => (
                <div className="trick__content" onClick={() => FireCheckout(item.Desc, item.name, item.photo, item.id)} key={item.id} id={item.href} >
                    <img
                    src={item.photo}
                    alt=""
                    className="trick__img"
                    />
                    <h3 className="trick__title">{item.name}</h3>
                    <button className="button trick__button" />
                </div>
            ))}
        
            </div>
            {openModal && (
                <Modal
                open={openModal}
                onClose={handleClose}
                >
                    <Box sx={style}>   
                        <S.ModalContent>
                            <Avatar
                                alt={title}
                                src={foto}
                                sx={{ width: 90, height: 90 }}
                            />
                            <h1>{title}</h1>
                            <p className="p-margin">{desc}</p>
                            {semNome && <S.Aviso>*Insira seu nome*</S.Aviso>}
                            <TextField
                                sx={{bgcolor: "white"}}
                                required
                                id="outlined-required"
                                label="Digite seu nome"
                                defaultValue=""
                                value={usuario}
                                onChange={handleChange}
                                color='warning'
                            />
                            <br/>
                            <button onClick={async e => {
                                e.preventDefault();
                                if (usuario === "") {
                                    setSemNome(true)
                                } else {
                                    setSemNome(false)

                                    const data: any = await addDrink({ variables: { name: usuario, bebidasId: id }});

                                    if (data) {
                                        setAlertOpen(true)
                                        setTimeout(() => {
                                            setAlertOpen(false);
                                        }, 5000);
                                    }

                                    handleClose();
                                }
                            }}>
                                Pedir agora
                            </button>
                        </S.ModalContent>
                        <S.CloseModalButton
                            aria-label='Close modal'
                            onClick={() => handleClose()}
                        >X</S.CloseModalButton>
                    </Box>
                </Modal>
            )}

            <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert variant="filled" severity="success">Pedido feito {usuario}!</Alert>
            </Snackbar>
        </section>
    )
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'black',
    border: '2px solid #fff',
    boxShadow: 24,
    p: 4,
};

export default ListDrinks;
