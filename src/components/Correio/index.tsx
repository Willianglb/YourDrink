import React from "react";

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Correio = () => {
    const [nome, setNome] = React.useState("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNome(event.target.value);
    };

    return (
        <section className="section newsletter">
            <div className="newsletter__container container">
            <h2 className="section__title">Correio</h2>
            <p className="newsletter__description">
                Fique a vontade para falar o que quiser para mim!
            </p>

            <form action="" className="newsletter__form">
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Seu nome"
                        color="warning"
                        defaultValue=""
                        value={nome}
                        onChange={handleChange}
                    />
                    <FormControlLabel control={<Checkbox />} label="Anonimo" />
                </div>
                <div>

                    <button className="button">Enviar</button>
                </div>
            </form>
            </div>
        </section>
    )
}

export default Correio;