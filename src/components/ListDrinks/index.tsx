import React, {useState} from 'react';
import {ADD_PEDIDOS} from '../../services/mutations';
import { useMutation } from '@apollo/client';

import * as S from './ListDrinks.styles';

// Material-ui
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { Alert } from '@mui/material';

const ListaBebidas = [
    {
        name: "Red Highball Sweet",
        photo: "../../assets/img/redHighballSweet.jpg",
        Desc: "Whisky com morango e guaraná",
        id: 1,
    },
    {
        name: "Red Highball Citrus",
        photo: "../../assets/img/redHighballCitrus.jpg",
        Desc: "Whisky com limão e soda",
        id: 2
    },
    {
        name: "Shot Horse",
        photo: "../../assets/img/ShotHorse.jpg",
        Desc: "Shot de whisky com gelo",
        id: 3
    },
    {
        name: "Whisky Tropical",
        photo: "assets/img/whiskyTropical.jpg",
        Desc: "Whisky, Energético Tropical e laranja",
        id: 4
    },
    {
        name: "Caipirinha de vinho",
        photo: "assets/img/CaipirinhaVinho.jpg",
        Desc: "Caipirinha de vinho com limão",
        id: 5
    },
    {
        name: "Caipiroska de limão",
        photo: "assets/img/caipiroskadeLimao.jpg",
        Desc: "Caipiroska de limão",
        id: 6
    },
    {
        name: "Caipiroska de morango",
        photo: "assets/img/caipiroskadeMorango.jpg",
        Desc: "Caipiroska de morango",
        id: 7
    },
    {
        name: "Surprise",
        photo: "assets/img/Surprise.jpg",
        Desc: "?",
        id: 8
    }
]

const ListDrinks = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [foto, setFoto] = useState("");
    const [id, setId] = useState("");

    const [semNome, setSemNome] = useState(false);

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
        console.log("idString", idString)
        console.log("id", id)
        
        handleOpen();
    };

    return (
        <section className="section trick" id="bebidas">
          <h2 className="section__title">Bebidas</h2>
          <div className="trick__container container grid">

            {ListaBebidas.map((item) => (
                <div className="trick__content" onClick={() => FireCheckout(item.Desc, item.name, item.photo, item.id)} key={item.id}>
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
                        <Avatar
                            alt={title}
                            src={foto}
                            sx={{ width: 56, height: 56 }}
                        />
                        <S.ModalContent>
                            <h1>{title}</h1>
                            <p>{desc}</p>
                            {semNome && <p>Insira Seu nome</p>}
                            <TextField
                                required
                                id="outlined-required"
                                label="Digite seu nome"
                                defaultValue=""
                                value={usuario}
                                onChange={handleChange}
                            />
                            <button onClick={async e => {
                                e.preventDefault();
                                if (usuario === "") {
                                    setSemNome(true)
                                } else {
                                    setSemNome(false)

                                    const data: any = await addDrink({ variables: { name: usuario, bebidasId: id }});

                                    if (data) {
                                        alert(`Pedido feito ${data?.addPedido?.id || usuario}!`)
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
                        />
                    </Box>
                </Modal>
            )}
        </section>
    )
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default ListDrinks;
