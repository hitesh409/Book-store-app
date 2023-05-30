import React  from "react";
import { toast } from "react-toastify";
import { loginstyle } from "./style";
import { Breadcrumbs, Button, TextField } from "@material-ui/core";
import { Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from 'yup';
import ValidationErrorMessage from "../../ValidationErrorMessage";
import authService from "../../../Service/auth.service";
import { useAuthContext } from "../../../Context/auth.context";



export const Login = () => {

    const classes = loginstyle();
    const navigate = useNavigate();
    const authContext = useAuthContext()

    const initialValues = {
        email: "",
        password:"",
    }

    const validationSchema = yup.object().shape({
        email:yup.string()
            .email("*Invalid formate")
            .required("*Email is required"),
        password: yup.string()
            .min(5,"*Password must be 5 characters at minimum")
            .required("*Password is required"),
    })

    const onSubmit = (data) => {
        console.log(data)
        authService.login(data).then((res)=>{
            console.log("result",res)
            toast.success("Successfully logged in")
            authContext.setUser(res)
            navigate("/")
        })
        .catch((error) => {
            console.log("login error", error);
            //toast.error(error?.response?.data?.error || "Something went wrong");
          });
    }

    return (
        <div className={classes.createAccountWrapper} >
        <div className="create-account-page-wrapper" >
            <div className="container" >
                <Breadcrumbs 
                    seperator=">"
                    aria-label="breadcrumb"
                    className="breadcrumb-wrapper"
                >
                    <NavLink exact to="/"><Button color='textPrimary'>Home</Button> </NavLink>
                    <h1 color="textPrimary" >Create an Account</h1>
                </Breadcrumbs>
                    <div><h2>Login or Create an Account</h2></div>

                <div className="create-account-row">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {
                            (
                                {
                                    values,
                                    errors,
                                    touched,
                                    handleBlur,
                                    handleChange,
                                    handleSubmit,
                                }
                            )=> (
                        <form onSubmit={handleSubmit} >
                            <div className="form-block">
                                <div className="personal-info">
                                    <h3 className="pi">Login Information</h3>
                                    <p className="para">
                                        If you have an account with us please login.
                                    </p>
                                    <div className="form-row-wrapper">
                                        
                                    
                                        <div className="form-col">
                                            <TextField
                                                id="email"
                                                name="email"
                                                label="Email Address"
                                                variant="outlined"
                                                inputProps={{className:"small"}}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                            />
                                            <ValidationErrorMessage message={errors.email} touched={touched.email} />

                                        </div>
                                        <div className="form-col">
                                            <TextField
                                                id="password"
                                                type="password"
                                                name="password"
                                                label="Password"
                                                variant="outlined"
                                                inputProps={{className:"small"}}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <ValidationErrorMessage message={errors.password} touched={touched.password} />
                                        </div>

                                        <div className="form-col">
                                            <Button
                                                className="pink-btn-btn"
                                                variant="contained"
                                                type="submit"
                                                color="primary"
                                                disableElevation
                                                onClick={handleSubmit}
                                            >
                                                Login
                                            </Button>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="login-information">
                                    <h3 className="pi">Don't have acoount?</h3>
                                    <p className="para">
                                        If you don't have an account, please create.
                                    </p>
                                    
                                    <div className="btn-wrapper">
                                        <Button
                                            className="pink-btn-btn"
                                            variant="contained"
                                            type="submit"
                                            color="primary"
                                            disableElevation
                                            onClick={()=>{
                                                navigate("/register")
                                            }}
                                        >
                                            Register
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        )
                    }
                    </Formik>
                </div>

            </div>
        </div>
    </div>

    )
}