import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css'

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo" />
                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolve-lo</p>
                    <Link className='back-link' to="/profile">
                        <FiArrowLeft size={16} color="#e04021" />
                        Voltar para Home
                    </Link>
                </section>
                <form>
                    <input placeholder="Título do Caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em Reais" />
                    <button className="btn" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
