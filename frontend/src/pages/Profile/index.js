import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="logo" />
                <span>Bem vindo, ONG</span>
                <Link className="btn" to="/incidents/new">Cadastrar Novo Caso</Link>
                <button>
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>
                    <strong>VALOR:</strong>
                    <p>R$100,00</p>

                    <button type="button"><FiTrash2 size={20} color="#a8a8b3" /></button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>
                    <strong>VALOR:</strong>
                    <p>R$100,00</p>

                    <button type="button"><FiTrash2 size={20} color="#a8a8b3" /></button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>
                    <strong>VALOR:</strong>
                    <p>R$100,00</p>

                    <button type="button"><FiTrash2 size={20} color="#a8a8b3" /></button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>
                    <strong>VALOR:</strong>
                    <p>R$100,00</p>

                    <button type="button"><FiTrash2 size={20} color="#a8a8b3" /></button>
                </li>
            </ul>
        </div>
    );
}
