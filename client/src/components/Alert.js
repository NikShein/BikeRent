import { Transition } from 'react-transition-group';
import { useContext } from 'react';
import { MainContext } from '../App';

function Alert() {
  const { alert, text } = useContext(MainContext);
  return (
    <Transition in={alert} timeout={1000} mountOnEnter unmountOnExit>
      {(state) => (
        <div className={`alert ${state}`}>
          <p>{text}</p>
        </div>
      )}
    </Transition>
  );
}

export default Alert;
