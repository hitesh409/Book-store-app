import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  errorText: {
    marginBottom: '8px',
    color: 'red',
  },
});

const ValidationErrorMessage = (props) => {
    return(
        <>
            {props.touched && <p style={{ color: 'red', fontSize:"15px" }}>{props.message}</p>}
        </>
    )

}
export default ValidationErrorMessage