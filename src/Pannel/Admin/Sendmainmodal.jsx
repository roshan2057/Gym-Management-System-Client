import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const MyModal = (params) => {
    const email = params.email;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit=(event)=>{
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      message: event.target.message.value,
    };

    axios
      .post(`${process.env.REACT_APP_API}/gmail`, data, {
        headers: {
          auth: Cookies.get("token"),
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <i class="bi bi-envelope-check p-1 fs-4"></i>
        Send Mail
      </Button>

      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Send Mail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label htmlFor="input1">Reception</label>
              <input type="text" className="form-control" value={email} name='email' id="input1" />
            </div>
            
            <div className="form-group">
              <label htmlFor="textarea">Message</label>
              <textarea className="form-control" id="textarea" rows="3" name='message' placeholder='Enter the message'></textarea>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <input type="submit" className="btn btn-primary" value="Send" />
            <Button variant="secondary" onClick={handleClose}>
           
              Close
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default MyModal;
