
// const [allvalid,setallvalid]=useState('');
// const [fname,setfname]=useState('');
// const [lname,setlname]=useState('');
// const [email,setemail]=useState('');
// const [question,setquestion]=useState('');
// const accountSubmitHandler=(e)=>{
//     e.preventDefault();
//     if(fnameref.current.value==='' && lnameref.current.value==='' && emailref.current.value===''&& questionref.current.value==='' ){
//         setallvalid('All fields must be filled .');
//     }else if(fnameref.current.value===''){
//         setallvalid('');
//         setfname('');
//         setlname('');
//         setemail('');
//         setquestion('');
//         setfname('Please write your first name .');

//     }else if(lnameref.current.value===''){
//         setallvalid('');
//         setfname('');
//         setemail('');
//         setquestion('');
//         setlname('Please write your last name .');

//     }else if(emailref.current.value===''){
//         setallvalid('');
//         setfname('');
//         setlname('');
//         setquestion('');
//         setemail('Please write your email address .');

//     }else if(questionref.current.value===''){
//         setallvalid('');
//         setfname('');
//         setlname('');
//         setemail('');
//         setquestion('Please write your message .');
//     }else{
//         setallvalid('');
//         setemail('');
//         setfname('');
//         setlname('');
//         setquestion('');
//         alert('informations submitted .');
//         fnameref.current.value='' ;
//         lnameref.current.value='' ;
//         emailref.current.value='' ;
//         questionref.current.value='' ;

//     }
// }
// const fnameref=useRef();
// const lnameref=useRef();
// const emailref=useRef();
// const questionref=useRef();

// const [users,setusers]=useState([]);

// const loadusers = async()=>{
//     const result =await axios.get("http://localhost/my-project/index.php");
//     setusers(result.data.phpresult);
//     console.log(result.data.phpresult);
// }
// useEffect(()=>{
//     loadusers();
// },[]);