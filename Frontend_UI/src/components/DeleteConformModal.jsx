import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import deleteIMG from '../images/delete.png';
import { DeleteBookAsync, ViewBookAsync } from '../services/actions/SubmitAction';

function DeleteConformModal() {

  const { isDelete, deleteId } = useSelector((state) => state.SubmitReducer);
  const disptch = useDispatch();

  return (
    <Modal show={isDelete}>
      <Modal.Body className='text-center p-4 border border-secondary rounded-4 bg-dark'>
        <img style={{ width: '100px', height: '100px' }} src={deleteIMG} alt="" />
        <h3 className='my-4 text-white'>Are You Sure ?</h3>
        <p className='text-secondary mb-4'>Do you want to delete this book ? This will remove the book permanently. You will not be able to recover it.</p>
        <Button variant="primary" className='me-3 px-4' onClick={() => disptch(ViewBookAsync())}><i className="bi bi-x-circle"></i>
        </Button>
        <Button variant="danger" className='px-4' onClick={() => disptch(DeleteBookAsync(deleteId))}><i className="bi bi-trash-fill"></i></Button>
      </Modal.Body>
    </Modal>
  );
}

export default DeleteConformModal;