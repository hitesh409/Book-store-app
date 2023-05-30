import { makeStyles } from "@material-ui/core";
import { colors } from "../../../Constant/constant"; 


const loginstyle = makeStyles((theme)=> ({
    createAccountWrapper: {
        "& .create-account-page-wrapper":{
            padding: "0px 0 0px",
            "@media (max-width:991px)":{
                padding: "35px 0 50px",
            },
            "@media (max-width:767px)":{
                padding: "35px 0 40px",
            },
           
            "& .create-account-row":{
            
               
                "& .backlink":{
                    color:colors.primary,
                    fontWeight:"300",
                },

                "& .btn-wrapper":{
                    marginTop:"17px",
                    marginBottom: "15px",
                    "& .btn":{
                        minWidth:"136px",
                        padding: "0 15px",
                    },
                },
                "& .form-row-wrapper":{
                    display:"flex",
                    flexWrap: "wrap",
                    margin: "0 -15px",
                    "& .form-col":{
                        padding : "0 15px",
                        maxWidth: "50%",
                        flex: "0 0 50%",
                        position: "relative",
                    }
                }
            },
            
            "& .para":{
                color: colors.lightTextColor,
                fontWeight: 300,
                fontSize: "15px",
                marginBottom: "16px",
            },
            "& .breadcrumb-wrapper":{
               
            },
            "& .create-account-row":{
               
            },
            "& .pi" : {
                paddingBottom: "10px",
                borderBottom: "0.5px solid #C8C8C8"
            },
            "& .form-row-wrapper":{
                
                // display: "grid",
                // gridTemplateColumns: "repeat(2,1fr)",
                // gap: "1rem",
            },
            "& .form-block":{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: "3.4rem",
            },
            "& .personal-info":{
                marginBottom:"32px",

            },
            "& .form-col":{
                marginBottom:"1.5rem",
            },
            "& .container":{
                display:"flex",
                flex: "wrap",
                flexDirection: "column",
                backgroundColor: "white",
                alignItems: "center"
              
            },
            "& h2":{
                fontSize: "36px",
                textAlign:"center",
                lineHeight: "1.2",
                marginBottom: "0px",
                fontWeight: 700,
                color: colors.textColor,
                paddingBottom: "18px",
                position: "relative",
                "&:after":{
                    position: "absolute",
                    content: "",
                    left:"50%",
                    transform: "translateX(-50%)",
                    bottom :"0",
                    height: "2px",
                    width: "165px",
                    backgroundColor: colors.primary
                }
            },
            "& .MuiOutlinedInput-input" : {
                padding: "16.5px 150px 16.5px 10px"
            },
            
        }
    }
}))

export {loginstyle} ;