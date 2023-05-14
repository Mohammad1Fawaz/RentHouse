import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {TiWarning} from 'react-icons/ti'
import { toast } from 'react-toastify';
import {AiFillCloseCircle} from 'react-icons/ai'
const  DeleteModal = (props)=> {
    const handleDelete = () =>{
        axios.delete(`http://localhost:8000/deleteHouse/${props.houseId}`).then((res)=>{
            if(res.data.success){
                toast.dark(res.data.message);
                props.onClose();
            }
            else{
                toast.error(res.data.message);
            }
        })
    }
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'center' }}
    >
      <Modal.Dialog>
        <Modal.Header className='relative'>
        <AiFillCloseCircle onClick={()=>{props.onClose()}} className='absolute top-4 right-2 w-8 h-8 cursor-pointer text-orange-400'/>
          <Modal.Title className='flex'>Delete House<TiWarning className='inline-block w-8 h-8 text-center ml-2 text-red-600'/></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className='text-red-600'>Are You sure you want to Delete this house ?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{props.onClose();}}>No</Button>
          <Button  className='!bg-orange-400 hover:!bg-white hover:!text-orange-400 hover:!border-[1px] hover:!border-orange-400' onClick={handleDelete}>Yes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default DeleteModal;