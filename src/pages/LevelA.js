import cashA from '../Assets/cashA.png';
import cashB from '../Assets/cashB.png';
import cashC from '../Assets/cashC.png';
import { useHistory } from 'react-router';
import './LevelA.css';
function LevelA() {
    const history = useHistory();
    const historyPageInLevel = () => {
        history.push('/Main')
    }
    /* const dragAndDrop()) {
        
         containerScreenAtm
        containerScreenAtm.addEventListener('drop'), e => {
            containerScreenAtm.appendChild(cashA);
        }
    } */

    return (
        <div className="ContainerPageLevel">
            <header min-width="100%">
                <h1 >Dépositos y Retiros</h1></header>
            <div className="btn-Atm">
                <button onClick={historyPageInLevel}
                    className="btnNext">Continuar</button>
            </div>
            <div className="ContainerAtm">
                <div className="titleAtm">
                  <p>ATM</p>
                </div>
                <div className="containerScreenAtm">
                 
                </div>
                <div className="containerMoney">
                    
                        <img className="cashA" src={cashA} width="150em" height="70em"></img>
                        <br></br> 
                        <img className="cashB" src={cashB} width="75em" height="55em"></img>
                        <br></br> 
                        <img className="cashC"src={cashC} width="em" height="35em"></img>
                    
                </div>
            </div>
            <div className="text-Inst">
                <br></br>
                <p>Arrastra los billetes  y  monedas necesarios para completar la cantidad indicada arriba</p>
            </div>

        </div>
    );
}
export default LevelA;

