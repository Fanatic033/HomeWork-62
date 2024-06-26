import {useRef, useState} from 'react';
import Modal from './Modal/Modal.tsx';
import Alert from './Alert/Alert.tsx';
import {CSSTransition} from 'react-transition-group';

const Hw58 = () => {
  const btnSettings = [
    {type: 'primary', label: 'Continue', onClick: () => console.log('clicked continue')},
    {type: 'danger', label: 'Close', onClick: () => console.log('clicked cancel')}
  ];
  const [showModal, setShowModal] = useState(false);
  const [alert, setAlert] = useState(true);
  const closeAlert = () => {
    setAlert(false);
  };
  const alertRef = useRef(null);
  return (
    <div className={'text-center'}>
      <button
        className={'btn btn-primary ms-5 mt-5'}
        onClick={() => setShowModal(true)}>
        click modal
      </button>
      <Modal
        show={showModal}
        title={' Modal Order Tittle'}
        onClose={() => setShowModal(false)}
        buttons={btnSettings}
      >
        <p className={'modal-body'}>
          Content
        </p>
      </Modal>
      <CSSTransition
        in={alert}
        timeout={500}
        classNames={'alert'}
        unmountOnExit
        nodeRef={alertRef}
      >
        <div className={'w-50 mt-5 text-center m-auto'}>
          <Alert type={'warning'} onDismiss={closeAlert}>Hello</Alert>
          <Alert type={'success'}>Success</Alert>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Hw58;
