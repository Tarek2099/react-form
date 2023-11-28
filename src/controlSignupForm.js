import React, { useRef } from 'react'; 
import { Form } from 'reactstrap';
import {Formik, } from "formik"
import successMsg from './successMsg';
import emailjs from "@emailjs/browser";

const  ControlSignupForm  =()=> {
const form = useRef()
//   const []

// const  handleOnchange = (e) => {
//      const name = e.target.name;
//      const value = e.target.value;
//      this.setState({
//        [name]: value,
//      });
// }
//  const  handleSubmit = (event) => {
//     console.log(this.state);
//     event.preventDefault();
//   };
const style={
  bottom: "16px",
  color: "red",
  position: "relative",
}

    return (
      <div className="Container">
        <Formik
          initialValues={{
            user_name: "",
            user_email: "",
            password: "",
            confirmPassword: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.user_name) {
              errors.user_name = "Required";
            }
            if (!values.user_email) {
              errors.user_email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                values.user_email
              )
            ) {
              errors.user_email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            } else if (values.password !== values.confirmPassword) {
              errors.confirmPassword = "Password doesn't match";
            }
            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm({ values: "" });

            emailjs
              .sendForm(
                "service_mytua3v",
                "template_id7w8lb",
                form.current,
                "af3EIR4FnwhOhF9W4",
                
              )
              .then((result) => {
                console.log(result.text);
              })
              .error((error) => {
                console.log(error.text);
              });
            return (
              <div>
                <successMsg />
              </div>
            );
          }}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <form ref={form} className="form" onSubmit={handleSubmit}>
              <input
                name="user_name"
                id="userName"
                type="text"
                value={values.user_name}
                placeholder="Username"
                onChange={handleChange}
                required
              />
              <span style={style}>
                {errors.user_name && touched.user_name && errors.user_name}
              </span>
              <input
                type="email"
                id="email"
                name="user_email"
                value={values.user_email}
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <span style={style}>
                {errors.user_email && touched.user_email && errors.user_email}
              </span>

              <input
                name="password"
                id="password"
                type="password"
                value={values.password}
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <span style={style}>
                {errors.password && touched.password && errors.password}
              </span>

              <input
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                value={values.confirmPassword}
                placeholder="Confirm Password"
                onChange={handleChange}
                required
              />
              <span style={style}>
                {errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword}
              </span>
              <button className="button" type="submit">
                Sign Up
              </button>
            </form>
          )}
        </Formik>
      </div>
    );

}

export default ControlSignupForm;