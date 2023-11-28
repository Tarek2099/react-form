// import React, { Component } from 'react'
// import ControlSignupForm from "./controlSignupForm"
// import UncontrolSigninForm from './uncontrolSigninForm'


// class Form extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//       value: "signin"
//     }

//   }

//   handleOnClick = (e) => {
//     const values = e.target.value;
//     this.setState({
//       value: values,
//     });
//   }
//   render() {
//     return (
//       <div className="Forms_All">
//         <div className="button_all">
//           <button
//             className="signup_Button"
//             onClick={this.handleOnClick}
//             value="signup"
//           >
//             Sign Up
//           </button>
//           <button
//             className="signin_Button"
//             value="signin"
//             onClick={this.handleOnClick}
        
//           >
//             Sign In
//           </button>
//         </div>
//         {this.state.value === "signup" ? (
//           <ControlSignupForm />
//         ) : (
//           <UncontrolSigninForm />
//         )}
//       </div>
//     );
//   }
// }

// export default Form;