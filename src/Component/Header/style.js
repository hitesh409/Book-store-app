import { makeStyles } from "@material-ui/core";
import { colors } from "../../Constant/constant";
import { Padding } from "@mui/icons-material";


export const headerStyle = makeStyles((theme) => ({
  headerWrapper: {
    display: "flex",
    justifyContent: "center",
    backgroundColor:colors.greyBg,
  },
 
  topHeader: {
    display: (props) => (props.open ? "none" : "block"),
  },
  bottomHeader: {
    // backgroundColor: "#ffffff",
  },
  container: {
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    
  },
  logoWrapper: {
    flex: 1,
  },
  siteLogo: {
    display: "inline-block",
    textDecoration: "none",
  },
  topRightBar: {
    display: "flex",
    justifyContent: "flex-end",
  },
  topNavBar: {
    display: "flex",
    alignItems: "center",
    listStyle: "none",
    
  },
  topNavBarItem: {
    marginRight: 10,
    backgroundColor:colors.greyBg
  },
  topNavBarLink: {
    textDecoration: "none",
    color: "#333333",
    backgroundColor:colors.greyBg,
    
  },
  cartCountryWrap: {
    display: "flex",
    justifyContent:"flex-end",
    alignItems: "center",
    listStyle: "none",
    margin: 0,
    padding: 0,
    
    textDecoration: "none"
    
  },
  cartLink: {
    marginRight: 10,
  },
  hamburger: {
    cursor: "pointer",
  },
  searchOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
    display: "none",
  },
  headerSearchWrapper: {
    top: "100%",
    left: 0,
    width: "100%",
    padding: 20,
    backgroundColor: "#ffffff",
    
  },
  headerSearchOuter: {
    position: "relative",
  },
  headerSearchInner: {
    display: "flex",
    alignItems: "center",
  },
  textWrapper: {
    flex: 1,
  },
  greenBtn: {
    marginLeft:15
  },
  productList: {

    position:"absolute",
    width: "100%",
    flex: 1000,
    backgroundColor:colors.greyBg,
    padding:10,
    borderRadius: "1rem",
    marginTop:".5rem",

  },
  noProduct: {
    textAlign: "center",
    color: "#999999",
  },
  relatedProductList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  innerBlock: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",
    padding: "1rem",
    border: "1px solid #e0e0e0",
    // marginBottom: 10,
    width: "100%",
    backgroundColor:colors.white,
    borderRadius: "1rem",
  },
  leftCol: {
    flex: 1,
  },
  rightCol: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
    color: colors.textColor,
    fontSize: 20,
  },
  des: {
    color:colors.lightTextColor,
  },
  price: {
    color: colors.textColor,
    fontWeight: "bold",
    marginRight: 10,
    fontSize: 20,
  },
  cartL: {
    textDecoration: "none",
    color: colors.white
  },
  btn: {
    color: "#4db5ff",
    fontSize: "1rem",
    borderRight: "1px solid #4db5ff",
    borderRadius: 0,
    padding: "0 1rem 0 0",
    margin:"1rem"
  },
  
}));
