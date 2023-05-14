import React, { useState } from "react";
import "../Components/Contact/Contact.css";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fullNammessage, setfullNamemessage] = useState("");
  const [phoneNumberMessage, setPhoneNumberMessage] = useState("");
  const [emailmessage, setemailmessage] = useState("");
  const [messagemessage, setmessagemessage] = useState("");


  async function handleSubmit(event) {
    event.preventDefault();
    if (fullName.length === 0) {
      setPhoneNumberMessage("");
      setemailmessage("");
      setmessagemessage("");
      setfullNamemessage("Please enter your Full ame");
    } else if (phoneNumber.length === 0) {
      setPhoneNumberMessage("Please enter your Phone number");
      setfullNamemessage("");
      setemailmessage("");
      setmessagemessage("");
    } else if (email.length === 0) {
      setfullNamemessage("");
      setPhoneNumberMessage("");
      setmessagemessage("");
      setemailmessage("Please enter your email address");
    } else if (message.length === 0) {
      setfullNamemessage("");
      setPhoneNumberMessage("");
      setemailmessage("");
      setmessagemessage("Please write the message");
    } else {
        await axios.post('http://localhost:8000/user/sendMessage',{
            fullName,
            phoneNumber,
            email,
            message
          }).then((res)=>{
            if(res.data.success === true){
              setfullNamemessage("");
                setPhoneNumberMessage("");
                setemailmessage("");
                setmessagemessage("");
                setFullName("");
                setPhoneNumber("");
                setEmail("");
                setMessage("");
                toast.success(res.data.message)
            }
            else{
                toast.error(res.data.message)
            }
          })
          .catch((err)=>{
            toast.error(err);
          })
    }
  }
//   const [users, setusers] = useState([]);
//   useEffect(() => {
//     axios.get("http://localhost:3001/users").then((res) => {
//       setusers(res.data);
//     });
//   }, [users]);

  return (
    <div className="flex justify-center">
      <Container className="Contact w-[70%] mt-[5%]  mr-auto ml-auto rounded-[10px]">
        <Row xs={1} md={1}>
          <Col>
            <p className="uppercase text-center p-[5%] text-[#fe8d1b] xsm:text-[35px] md:text-[40px]">
              Have some questions ?
            </p>
          </Col>
        </Row>
        <Row xs={1} lg={2}>
          <Col xs={12} lg={6} className="flex-col !justify-end">
            <img
              alt=""
              src="/images/mailImage.png"
              className="w-[100%] xs:h-[90%] lg:h-[80%] mt-[10%]"
            ></img>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} className="">
            <form onSubmit={handleSubmit} className="w-[100%]">
              <input
                onChange={(event) => setFullName(event.target.value)}
                value={fullName}
                type="text"
                placeholder="Full Name"
                name="firstName"
                className="border-[2px] block mr-auto ml-auto border-[gray]  mb-[10px] mt-[10px] p-[3%] rounded-[15px] xsm:w-[100%] sm:w-[90%] lg:w-[80%] "
              />
              <p className="text-[red] pl-16">{fullNammessage}</p>
              <input
                onChange={(event) => setPhoneNumber(event.target.value)}
                value={phoneNumber}
                type="text"
                placeholder="Phone Number"
                name="lastName"
                className="border-[2px] block mr-auto ml-auto border-[gray]  mb-[10px] mt-[10px] p-[3%] rounded-[15px] xsm:w-[100%] sm:w-[90%] lg:w-[80%]"
              />
              <p className="text-[red] pl-16">{phoneNumberMessage}</p>
              <input
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="email"
                placeholder="what's your email ..."
                name="email"
                className="border-[2px] block mr-auto ml-auto border-[gray]  mb-[10px] mt-[10px] p-[3%] rounded-[15px] xsm:w-[100%] sm:w-[90%] lg:w-[80%]"
              />
              <p className="text-[red] pl-16">{emailmessage}</p>
              <textarea
                onChange={(event) => setMessage(event.target.value)}
                value={message}
                typeof="textarea"
                placeholder="your question ..."
                name="message"
                className="wrap block mr-auto ml-auto max-h-[150px] border-[2px] border-[gray]  mb-[10px] mt-[10px] pb-[15%] pl-[4%] pt-[4%] rounded-[15px] xsm:w-[100%] sm:w-[90%] lg:w-[80%]"
              />
              <p className="text-[red] pl-16">{messagemessage}</p>
              <input
                type="submit"
                value="send message"
                name="submit"
                className="sendbutton border-[2px] text-[white] text-[20px] block mr-auto ml-auto border-[gray] mb-[10px] mt-[10px] p-[3%] rounded-[15px] xsm:w-[100%] sm:w-[90%] lg:w-[80%]"
              />
            </form>
          </Col>
        </Row>
        {/* <div className="">
          <h1 className="p-[20px] text-gray-600 capitalize border-b-[2px]">
            Users here :
          </h1>
          {users.map((item, index) => {
            return (
              <ul className="text-[black] mb-[10px] bg-[#f5f3f3] rounded-[20px] p-[2%]">
                <li className="text-[orange]">
                  <span className="text-[gray] border-b-[2px] pr-[10px]">
                    First Name :
                  </span>
                  {item.firstname}
                </li>
                <li className="text-[orange]">
                  <span className="text-[gray] border-b-[2px] pr-[10px]">
                    Last Name :{" "}
                  </span>
                  {item.lastname}
                </li>
                <li className="text-[orange]">
                  <span className="text-[gray] border-b-[2px] pr-[10px]">
                    Email :
                  </span>
                  {item.email}
                </li>
                <li className="text-[orange]">
                  <span className="text-[gray] border-b-[2px] pr-[10px]">
                    Message :
                  </span>
                  {item.message}
                </li>
              </ul>
            );
          })}
        </div> */}
      </Container>
    </div>
  );
};

export default Contact;
