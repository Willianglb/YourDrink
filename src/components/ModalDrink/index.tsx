import React from 'react';
import styled from "styled-components";

// Material-ui
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

const ModalDrink = (foto : any, desc : string, title : string, handleClose: any) => (
        <Box sx={style}>
            {/* <Avatar
                alt={title}
                src={foto}
                sx={{ width: 56, height: 56 }}
            /> */}
            <ModalContent>
                <h1>{title}</h1>
                <p>{desc}</p>
                <TextField
                    required
                    id="outlined-required"
                    label="Digite seu nome"
                    defaultValue=""
                />
                <button>Pedir agora</button>
            </ModalContent>
            <CloseModalButton
                aria-label='Close modal'
                onClick={() => handleClose()}
            />
        </Box>
)

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

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export default ModalDrink;