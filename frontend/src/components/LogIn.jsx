import React from "react";
import { useState } from "react";
import "../styles/login.scss";
import { Formik, Form} from 'formik';
import FormFields from "./FormFields";
import { registrationfields, logInFields, verificationField } from "../const/formFields";
import * as Yup from 'yup';

function LogIn({handleClick}){
    const[isRegistered, setIsRegistered] = useState(true)
    const[isSubmitted, setIsSubmitted] = useState(false);
    const [isPWForgotten, setIsPWForgotten] = useState(false);

    //Handles registration of new user
    function handleRegistration(){
      setIsRegistered(!isRegistered);
      setIsPWForgotten(false)
    }

    function handleForgotPw(){
        setIsPWForgotten(true)
    }

    //Submits user information based on intended action
    function handleSubmit(values){
      if(!isPWForgotten){
        if(values.firstName){
          // handleRegistration(values);
          console.log(values)
        }else{
          // handleLogIn(values);
          console.log(values)
        }
      }else{
        // handleEmailVerification(values);
        console.log(values)
      }
    }

    function handleEmailVerifForm(){
      setIsPWForgotten(true);
    }

    //Validation rules for login
    let validationSchema = Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string()
        .required('Required')
    });

    //Validation rules for password reset
    const emailValidationSchema = Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Required'),
    });

    //Additional validation rules for registration
    const registerValidationSchema = validationSchema.shape({
      firstName: Yup.string()
        .min(2, 'First name is too short!')
        .max(50, 'First name is too long!')
        .required('Required'),
      lastName: Yup.string()
        .min(2, 'Last name is too short!')
        .max(50, 'Last name is too long!')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required')
        .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password should contain at least one uppercase and lowercase character")
        .matches(/\d/, "Password should contain at least one number")
        .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character"),
      confirmPW: Yup.string()
        .when("password", (password, schema) => {
          if (password) {
            return schema
              .required("Required")
              .oneOf([Yup.ref("password")], "Passwords do not match");
          }
        }),
    });

    return (

    <main className="logIn"> 
        <div className="logIn__form">
        <button className="logIn__close material-symbols-outlined" onClick={handleClick}>
            close
        </button>
        <h2>{isRegistered ? "Sign In" : "Register"}</h2>
        <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPW: '',
            }}
            validationSchema={!isPWForgotten ? (isRegistered ? validationSchema : registerValidationSchema) : emailValidationSchema}
            onSubmit= {(values, {resetForm}) => {
              setIsSubmitted(true);
              setTimeout(()=> {
                handleSubmit(values)
                setIsSubmitted(false)
              }, 1000);
              setTimeout(()=> {
                resetForm()
              }, 3000)
            }}
          >
            {({ errors, touched }) => (
                <Form className="logIn__input">
                { (!isPWForgotten ? (isRegistered ? logInFields : registrationfields) : verificationField).map((fieldDetails, index) => (
                    <FormFields
                      key={index}
                      label={fieldDetails.label} 
                      id={fieldDetails.id} 
                      type={fieldDetails.type} 
                      placeholder={fieldDetails.placeholder}
                      errors={errors}
                      touched={touched}
                    />
                  ))
                }
                
                <div className="mt-3">
                  <button
                    type="submit"
                    disabled={isSubmitted}
                  >
                    { isSubmitted && <span className="material-symbols-outlined">
                    autorenew
                    </span>}
                    {!isPWForgotten ? (isRegistered ? "Log In" : "Create Your Account") : "Send Verification Email"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          
        <span>
            {isRegistered ?
            <>Don't have an account? <a onClick={handleRegistration}>Register here</a>
            <br/>
            <a onClick={handleForgotPw}>Forgot Password?</a>
            </>
            : 
            <>Already have an account? <a onClick={handleRegistration}>Sign in here</a></>
            }
        </span>
        </div>
    </main>
    
    )
}

export default LogIn