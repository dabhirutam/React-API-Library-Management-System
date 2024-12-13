import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import errorIMG from '../images/cloud-error.png';
import { ViewBookAsync } from '../services/actions/SubmitAction';

function ErrorMsgModal() {

  const { errMsg, isError, isLoading } = useSelector((state) => state.SubmitReducer);
  const disptch = useDispatch();

  return (
    <Modal show={isError}>
      <Modal.Body className='text-center p-4 border border-secondary rounded-4 bg-dark'>
        {
          isLoading ?
            <div className="text-center">
              <div className="spinner-border text-info" role="status"></div>
            </div>
            :
            <div>
              <img style={{ width: '100px', height: '100px' }} src={errorIMG} alt="" />
              <h3 className='my-4 text-white'>{errMsg}</h3>
              <p className='text-secondary mb-4'>Poor network connection detected. Please try again</p>
              <Button variant="danger" className='px-4' onClick={() => disptch(ViewBookAsync())}>RETRY</Button>
            </div>
        }
      </Modal.Body>
    </Modal>
  );
}

export default ErrorMsgModal;