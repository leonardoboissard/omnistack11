import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css'

import logoImg from '../../assets/logo.svg';

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos de sua ONG.</p>
                    <Link className='back-link' to="/">
                        <FiArrowLeft size={16} color="#e04021" />
                        Voltar para o Logon
                    </Link>
                </section>
                <form>
                    <input type="text" placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input type="text" placeholder="WhatsApp" />
                    <div className="input-group">
                        <input type="text" placeholder="Cidade" />
                        <input type="text" placeholder="UF" style={{ width: 80 }} />
                    </div>
                    <button className="btn" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
