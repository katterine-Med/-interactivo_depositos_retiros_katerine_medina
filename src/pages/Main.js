import React from 'react';
import { useHistory } from 'react-router';
import './Main.css';
import logo from '../Assets/Investing.gif';

function Main() {
    const history = useHistory();

    const historyPageIn = () => {
        history.push('/LevelA')
    }

    return (
        <div className="ContainerPage">
            <header min-width="100%">
                <h1 >Dépositos y Retiros</h1></header>
            <div className="containerBtns">
                <button onClick={historyPageIn}
                    className="buttonA">Nivel 1</button>
                <div>
                    <button className="buttonB">Nivel 2</button>
                </div>
                <div>
                    <button className="buttonC">Nivel 3</button>
                </div>
                <div>
                    <button className="buttonD">Nivel 4</button>
                </div>
            </div>
            <div className="Tx-cont">
                <p>Es momento de elegir el nivel de tu preferencia</p>
            </div>
            <div className="ImgPng">
                <img className="ImgPng" src={logo} alt="Investing..." />
            </div>

        </div>
    );
}


export default Main;