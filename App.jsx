//                                              Method - 1 

// import React, { useState } from 'react';

// const App = () => {

//   const [fname, setFName] = useState();
//   const [lname, setLName] = useState();
//   const [fullName, setFullName] = useState();
//   const [lastNamenew, setLastNameNew] = useState();

//   const onSubmits = (event) => {
//     event.preventDefault();
//     alert('Submitted');
//     setFullName(fname);
//     setLastNameNew(lname);
//   };

//   const inputEvent = (event) => {
//     console.log(event.target.value);
//     setFName(event.target.value);
//   };

//   const inputEventTwo = (event) => {
//     console.log(event.target.value);
//     setLName(event.target.value);
//   };

//   return (
//     <>
//       <div className='main_div'>
//         <form onSubmit={onSubmits}>
//           <div>
//             <h1> HELLO {fullName} {lastNamenew} </h1>
//             <input type='text' placeholder='Enter Your First Name' onChange={inputEvent} value={fname} />
//             <br />
//             <input type='text' placeholder='Enter Your Last Name' onChange={inputEventTwo} value={lname} />
//             <button type = 'submit'> Submit Me 👍 </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default App;


//                                                     Method - 2

// import React, { useState } from 'react';

// const App = () => {

//   const [fullName, setFullName] = useState({
//     fname: '',
//     lname: '',
//   });


//   const inputEvent = (event) => {
//     console.log(event.target.value);
//     console.log(event.target.name);
  

//     const value = event.target.value;
//     const name = event.target.name;

//     setFullName((prevValue) => {
//       console.log(prevValue);
//       if(name === 'fName'){
//         return {
//           fname : value,
//           lname : prevValue.lname,
//         };
//       }else if(name === 'lName'){
//         return {
//           fname : prevValue.fname,
//           lname : value,
//         };
//       }
//     })
//   };

//   const onSubmits = (event) => {
//     event.preventDefault();
//     alert('Form Submitted');
//   };

//   return (
//     <>
//       <div className='main_div'>
//         <form onSubmit={onSubmits}>
//           <div>
//             <h1> HELLO {fullName.fname} {fullName.lname}</h1>
//             <input
//               type='text'
//               placeholder='Enter Your First Name'
//               name='fName' 
//               onChange={inputEvent}
//               value={fullName.fname} 
//             />
//             <br />
//             <input
//               type='text'
//               placeholder='Enter Your Last Name'
//               name='lName' 
//               onChange={inputEvent}
//               value={fullName.lname} 
//             />
//             <button type='submit'> Submit Me 👍 </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default App;

//                                                        Method - 3

import React, { useState } from 'react';

const App = () => {

  const [fullName, setFullName] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
  });


  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
  

    // const value = event.target.value;
    // const name = event.target.name;
    const {value, name} = event.target;

    setFullName((prevValue) => {
    console.log(prevValue);

    return {
      ...prevValue,
      [name]: value,

    }

      // if(name === 'fName'){
      //   return {
      //     fname : value,
      //     lname : prevValue.lname,
      //     email : prevValue.email,
      //     phone : prevValue.phone,
      //   };
      // }else if(name === 'lName'){
      //   return {
      //     fname : prevValue.fname,
      //     lname : value,
      //     email : prevValue.email,
      //     phone : prevValue.phone,
      //   };
      // }else if(name === 'email'){
      //   return {
      //     fname : prevValue.fname,
      //     lname : prevValue.lname,
      //     email : value,
      //     phone : prevValue.phone,
      //   };
      // }else if(name === 'phone'){
      //   return {
      //     fname : prevValue.fname,
      //     lname : prevValue.lname,
      //     email : prevValue.email,
      //     phone : value,
      //   };
      // }
    })
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert('Form Submitted');
  };

  return (
    <>
      <div className='main_div'>
        <form onSubmit={onSubmits}>
          <div>
            <h1> HELLO {fullName.fname} {fullName.lname}</h1>
            <p> {fullName.email} </p>
            <p> {fullName.phone} </p>
            <input
              type='text'
              placeholder='Enter Your First Name'
              name='fname' 
              onChange={inputEvent}
              value={fullName.fname} 
            />
            <br />
            <input
              type='text'
              placeholder='Enter Your Last Name'
              name='lname' 
              onChange={inputEvent}
              value={fullName.lname} 
            />
            <input
              type='email'
              placeholder='Enter Your email'
              name='email' 
              onChange={inputEvent}
              value={fullName.email}
              autoComplete = 'off' 
            />
            <input
              type='number'
              placeholder='Enter Your Mobile number'
              name='phone' 
              onChange={inputEvent}
              value={fullName.phone} 
            />
            <button type='submit'> Click here to Submit 👍 </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;