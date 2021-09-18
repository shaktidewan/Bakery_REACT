import React from 'react'
import { Nav,FormControl,Navbar,Dropdown,Form,Button } from 'react-bootstrap'
import './styles.css';
import {Link} from 'react-router-dom';
import {CgProfile} from 'react-icons/cg';
import {AiOutlineShoppingCart,AiFillDelete} from 'react-icons/ai';
import {CartState} from '../Context/Context';

const Header = () => {
    const {
        state: { cart },
        dispatch,
        productDispatch
    } = CartState();

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>
                <Link to="/">YAKKHA BAKERY</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link>
                    <Link to="/">PRODUCTS</Link>
                    </Nav.Link>
                    <Nav.Link>
                    <Link to="/aboutUs">ABOUT US</Link>
                    </Nav.Link>
                    <Nav.Link>
                    <Link to="/contact">CONTACT US</Link>
                    </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                        onChange={(e) =>{
                        productDispatch({
                            type:"FILTER_BY_SEARCH",
                            payload: e.target.value,
                            });
                        }}

                    />
                    </Form>
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <AiOutlineShoppingCart/> 
                        {cart.length}
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{minWidth: 370}}>
                        {cart.length > 0 ? (
                            <>
                            {
                                cart.map((cake)=>(
                                    <span className="cartItem" key={cake.id}>
                                        <img/>
                                        <div className="cartItemDetail">
                                            <span>{cake.title}</span>
                                            <span>Rs {cake.price}</span>
                                        </div>
                                        <AiFillDelete
                                            onClick={() => {
                                            dispatch({
                                            type: 'REMOVE_FROM_CART',
                                            payload: cake
                                            })
                                            }}
                                            variant="danger"/>
                                    </span>
                                ))
                            }
                            <Link to="/cart">
                            <Button style={{width: "95%",margin: "0 10px"}}>
                            Go To Cart
                            </Button>
                            </Link>
                            </>
                        ):(
                            <Dropdown.Item href="#/action-1">EMPTY</Dropdown.Item>
                        )}                        
                        </Dropdown.Menu>
                    </Dropdown>
                    <Navbar.Brand style={{marginLeft:'10px'}} href="#"> <CgProfile/> </Navbar.Brand>
                </Navbar.Collapse>
                </Navbar>
        </div>
    )
}

export default Header
