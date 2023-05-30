import { AppBar, Button, List, ListItem, TextField } from "@material-ui/core";
import React, { useContext, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RoutePaths } from "../Utils/enum";
import shared from "../Utils/shared";
import bookService from "../../Service/book.service";
import { headerStyle } from "./style";
import { useAuthContext } from "../../Context/auth.context";





export const Header = () => {

    const classes = headerStyle()
    const authContext = useAuthContext()

    const open = false;
    const [query,setquery] = useState("")
    const [bookList,setbookList] = useState([])
    const [openSearchResult,setopenSearchResult] = useState(false)

    const items = useMemo(()=>{
        return shared.NavigationItem
        // return shared.NavigationItem.filter(
        //     (item) => 
        //     item.access.length || item.access.includes(authContext.user.roleId)
        // )  
    },[])

    const openMenu = () => {
        document.body.classList.toggle("open-menu");
    }

    const searchBook = async() => {
        const res = await bookService.searchBook(query)
        setbookList(res)
    }

    const search = () => {
        document.body.classList.add("search-result-open")
        searchBook()
        setopenSearchResult(true)
    }

    const logout = () => {
        authContext.signOut()
    }

    return (
        <div className={classes.headerWrapper}>
            <AppBar id="header" position="static" >
                {/* <div 
                    className={classes.topHeader}
                    style={
                        {display: open ? "none" : "block"}
                    }
                ></div> */}
                <div className={classes.bottomHeader}>
                    <div className={classes.container}>
                        <div >
                            <div className={classes.logoWrapper}>
                                <Link to="/" className={classes.siteLogo} title="logo">
                                    <img src="" alt=""/>
                                </Link>
                            </div>
                            <div className={classes.topRightBar}>
                                <List className={classes.topRightBar}>
                                   
                                    {
                                        !authContext.user.id && (
                                            <>
                                                <ListItem>
                                                    <NavLink to={RoutePaths.Login} title="Login">
                                                        <Button className={classes.btn} color="contained">Login</Button>
                                                    </NavLink>
                                                    <NavLink to={RoutePaths.Register} title="Register">
                                                        <Button className={classes.btn} color="contained">Register</Button>
                                                    </NavLink>
                                                </ListItem>
                                            </>
                                        )
                                    }
                                     {
                                        items.map((item,index) => (
                                            <ListItem key={index}>
                                                <Link to={item.route} title={item.name}>
                                                    <Button className={classes.btn} color="contained">{item.name}</Button>
                                                </Link>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                                <List className={classes.cartCountryWrap}>
                                    <ListItem className={classes.cartLink}  >
                                        <Link to="/cart" title="Cart" className={classes.cartL} >
                                            <img src="" alt=" "/>
                                            <span>
                                                {0}
                                            </span>
                                            Cart
                                        </Link>
                                    </ListItem>
                                    <ListItem className={classes.hamburger} onClick={openMenu}>
                                        <span></span>
                                    </ListItem>
                                </List>
                                {
                                    authContext.user.id && (
                                        <List className="right">
                                            <Button className={classes.btn} onClick={()=>logout()} color="contained">
                                                Logout
                                            </Button>
                                        </List>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.searchOverlay}
                    onClick={()=>{
                        setopenSearchResult(false)
                        document.body.classList.remove("search-results-open")
                    }}
                ></div>
                <div className={classes.headerSearchWrapper}>
                    <div className={classes.container}>
                        <div className={classes.headerSearchOuter}>
                            <div className={classes.headerSearchInner}>
                                <div className={classes.textWrapper}>
                                    <TextField
                                        id="text"
                                        name="text"
                                        placeholder="What are you looking for..."
                                        variant="outlined"
                                        value={query}
                                        onChange={(e)=>setquery(e.target.value)}
                                        fullWidth
                                    />

                                    {
                                        openSearchResult && (
                                            <>
                                                <div className={classes.productList}>
                                                    {bookList?.length===0 && (
                                                        <p className={classes.noProduct}>No product found</p>
                                                    )}

                                                    <List className={classes.relatedProductList}>
                                                        {bookList?.length > 0 && 
                                                        bookList.map((item,i)=>{
                                                            return(
                                                                <ListItem key={i}>
                                                                    <div className={classes.innerBlock}>
                                                                        <div className={classes.leftCol}>
                                                                            <span className={classes.title}>
                                                                                {item.name}
                                                                            </span>
                                                                            <p className={classes.des}>{item.description}</p>
                                                                        </div>
                                                                        <div className={classes.rightCol}>
                                                                            <span className={classes.price}>
                                                                                INR. {item.price}
                                                                            </span>
                                                                            <Link onClick={()=>{}}>
                                                                                Add To Cart
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </ListItem>
                                                            )
                                                        })}
                                                    </List>

                                                </div>
                                            </>
                                        )
                                    }

                                </div>
                                <Button
                                    type="submit"
                                    className={classes.greenBtn}
                                    variant="contained"
                                    color="primary"
                                    disableElevation
                                    onClick={search}
                                >
                                    {/* <em>
                                        <img src="" alt="search" />
                                    </em> */}
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </AppBar>
        </div>
    )
}

export default Header;