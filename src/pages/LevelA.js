
import { useHistory } from 'react-router';
function LevelA() {
  const history = useHistory();
  const historyPageInNotes = () => {
    history.push('/Main')
  }
  return (
    <div>
        <button onClick={historyPageInNotes}
          className="buttonViewN">Ver Notas</button>  
    </div>
    
  );
}
export default LevelA;

