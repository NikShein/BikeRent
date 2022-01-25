import { Transition } from 'react-transition-group';

function Alert({ alert }) {
  return (
    <Transition in={alert} timeout={1000} mountOnEnter unmountOnExit>
      {(state) => (
        <div className={`alert ${state}`}>
          <p>Заполните все поля!</p>
        </div>
      )}
    </Transition>
  );
}

export default Alert;
