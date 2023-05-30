import {
  Breadcrumbs,
  Button,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import ValidationErrorMessage from "../../ValidationErrorMessage";
import { createAccountStyle } from "./style";
import authService from "../../../Service/auth.service";
import { toast } from "react-toastify";

const Register = () => {
  const roleList = [
    { id: 2, name: "buyer" },
    { id: 3, name: "seller" },
  ];

//   const  [roleList , setRoleList] = useState()
//   useEffect(()=>{
//     if(roleList.length)
//         return
//     getRoles()
//   },[roleList])

//   const getRoles = () ={
//     userService.getAllRoles().then((res)=>{
//         setRoleList(res)
//     })
//   }


  const classes = createAccountStyle();

  const initialValues = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    roleId: 0,
    password: "",
    confirmPassword: "",
  };

  
  const validationSchema = yup.object().shape({
    firstName: yup.string().required("*First name is required"),
    lastName: yup.string().required("*Last name is required"),
    roleId: yup.string().required("*Role Id is required"),
    email: yup
      .string()
      .email("*Invalid formate")
      .required("*Email is required"),
    password: yup
      .string()
      .min(5, "*Password must be 5 characters at minimum")
      .required("*Password is required"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "*Password and confirm password must be match."
      )
      .required("*Confirm password is required"),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    delete data.id;
    delete data.confirmPassword;

    authService
      .create(data)
      .then((res) => {
        toast.success("Successfully registered");
        navigate("/login");
      })
      .catch((error) => {
        console.log("login error", error);
        //toast.error(error?.response?.data?.error || "Something went wrong");
      });
  };

  return (
    <div className={classes.createAccountWrapper}>
      <div className="create-account-page-wrapper">
        <div className="container">
          <Breadcrumbs
            seperator=">"
            aria-label="breadcrumb"
            className="breadcrumb-wrapper"
          >
            <NavLink exact to="/">
              <Button color="textPrimary">Home</Button>{" "}
            </NavLink>
            <h1 color="textPrimary">Create an Account</h1>
          </Breadcrumbs>
          <div>
            <h2>Login or Create an Account</h2>
          </div>

          <div className="create-account-row">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form>
                  <div className="form-block">
                    <div className="personal-info">
                      <h3 className="pi">Personal Information</h3>
                      <p className="para">
                        Please enter the following information to create your
                        account.
                      </p>
                      <div className="form-row-wrapper">
                        <div className="form-col">
                          <TextField
                            id="first-name"
                            name="firstName"
                            label="First Name"
                            variant="outlined"
                            inputProps={{ className: "small" }}
                            classes={{
                              root: "root-element",
                              FormControl: "custom-class",
                            }}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />

                          <ValidationErrorMessage
                            message={errors.firstName}
                            touched={touched.firstName}
                          />
                        </div>

                        <div className="form-col">
                          <TextField
                            id="last-name"
                            name="lastName"
                            label="Last Name"
                            variant="outlined"
                            inputProps={{ className: "small" }}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          <ValidationErrorMessage
                            message={errors.lastName}
                            touched={touched.lastName}
                          />
                        </div>
                        <div className="form-col">
                          <TextField
                            id="email"
                            name="email"
                            label="Email Address"
                            variant="outlined"
                            inputProps={{ className: "small" }}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          <ValidationErrorMessage
                            message={errors.email}
                            touched={touched.email}
                          />
                        </div>
                        <div className="form-col">
                          <FormControl
                            className="dropdown-wrapper"
                            variant="outlined"
                          >
                            <InputLabel htmlFor="select">Roles</InputLabel>
                            <Select
                              name="roleId"
                              id={"roleId"}
                              inputProps={{ className: "small" }}
                              // className={materialClasses.customSelect}
                              // MenuProps={{
                              //     classes:{
                              //         paper: materialClasses.customSelect,
                              //     }
                              // }}
                              onChange={handleChange}
                              //value = {values.roleId}
                            >
                              {roleList.length > 0 &&
                                roleList.map((role) => (
                                  <MenuItem
                                    value={role.id}
                                    key={"name" + role.id}
                                  >
                                    {role.name}
                                  </MenuItem>
                                ))}
                            </Select>
                          </FormControl>
                          <ValidationErrorMessage
                            message={errors.roleId}
                            touched={touched.roleId}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="login-information">
                      <h3 className="pi">Login Information</h3>
                      <div className="form-row-wrapper">
                        <div className="form-col">
                          <TextField
                            id="password"
                            type="password"
                            name="password"
                            label="Password"
                            variant="outlined"
                            inputProps={{ className: "small" }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ValidationErrorMessage
                            message={errors.password}
                            touched={touched.password}
                          />
                        </div>
                        <div className="form-col">
                          <TextField
                            id="confirm-password"
                            type="password"
                            name="confirmPassword"
                            label="Confirm Password"
                            variant="outlined"
                            inputProps={{ className: "small" }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ValidationErrorMessage
                            message={errors.confirmPassword}
                            touched={touched.confirmPassword}
                          />
                        </div>
                      </div>
                      <div className="btn-wrapper">
                        <Button
                          className="pink-btn-btn"
                          variant="contained"
                          type="submit"
                          color="primary"
                          disableElevation
                          onClick={handleSubmit}
                        >
                          Register
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
