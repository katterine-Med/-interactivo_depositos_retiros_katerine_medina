
import { useHistory } from 'react-router';
function LevelA() {
  const history = useHistory();
  const historyPageInLevel = () => {
    history.push('/Main')
  }
  return (
    <div>
        <button onClick={historyPageInLevel}
          className="buttonViewN">Continuar</button>  
    </div>

  );
}
export default LevelA;

