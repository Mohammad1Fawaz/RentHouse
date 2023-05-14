import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
const AdminModal = (props) => {
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const [cookies, setCookie] = useCookies(['token']);
    const navigate = useNavigate();
    const handleConfirm = (e)=>{
        e.preventDefault()
        if(email.length >0 && password.length >0 ){
            axios.post('http://localhost:8000/user/Admin', {
                email,
                password,
              }).then((res) => {
                if (res.data.success === true) {
                  toast.success(res.data.message);
                  setemail('');
                  setpassword('');
                  props.onHide();
                  const token = res.data.token;
                  setCookie('token', token, { path: '/' });
                  setTimeout(()=>{
                    navigate('/AdminPage');
                  },5000)
                } else {
                  toast.error(res.data.message);
                }
              });
              
        }else{
            alert('fill the fields !')
        }
    }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className='capitalize'>
          Confirm you are the admin
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleConfirm}>
      <Modal.Body>
        <div>
            <label htmlFor='email' className='block'>Email</label>
            <input onChange={(e)=>{setemail(e.target.value)}} type='email' id='email' value={email} className='w-full border shadow rounded-sm outline-none p-2 mt-2 hover:!border-orange-400 focus:!border-orange-400'/>
        </div>
        <div>
            <label htmlFor='password' className='block'>Password</label>
            <input onChange={(e)=>{setpassword(e.target.value)}} type='password' id='password' value={password} className='w-full border shadow rounded-sm outline-none p-2 mt-2 hover:!border-orange-400 focus:!border-orange-400'/>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className='!bg-white border-[1px] !text-orange-400 !border-orange-400 hover:!bg-orange-400 hover:!text-white'>Close</Button>
        <Button type='submit' className='!bg-white border-[1px] !text-orange-400 !border-orange-400 hover:!bg-orange-400 hover:!text-white'>Confirm</Button>
      </Modal.Footer>
      </form>
    </Modal>
  );
}


export default AdminModal