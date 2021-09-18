import React,{useState,useEffect} from 'react'
import {Button,ListGroup,Row,Col,Image} from 'react-bootstrap';
import {CartState} from "../../Context/Context";
import "./Cart.css";
import {AiFillDelete,AiOutlinePlus,AiFillMinusCircle} from "react-icons/ai";
import { Link } from 'react-router-dom';

const Cart = () => {
    const {
        state: {cart},
        dispatch,
    } = CartState();
    const [total,setTotal] = useState();

    useEffect(() =>{
        setTotal(cart.reduce((acc,curr) => acc + Number(curr.price)*curr.qty,0));
    })

    // console.log(cart);
    
    return (
        <div className="home">
            <div className="cakeContainer">
                <ListGroup>
                    {
                        cart.map(cake => {
                            console.log(cake.inStock);
                            console.log(cake.qty);
                            return(
                                <ListGroup.Item key={cake.id}>
                                <Row>
                                    <Col md={2}>
                                        <Image src="#" alt={cake.name} fluid rounded/>
                                    </Col>
                                    <Col md={2}>
                                        <span>{cake.title}</span>
                                    </Col>
                                    <Col md={2}>
                                        <span>Rs {cake.price}</span>
                                    </Col>
                                    <Col md={2}>
                                        <span>QTY:{cake.qty}</span>
                                    </Col>
                                    <Col md={2}>
                                       
                                        {cake.qty <=cake.inStock ? ( 
                                            
                                        <Button
                                        type="button"
                                        variant="light"
                                        onClick={() =>{
                                            dispatch({
                                                type:"CHANGE_CART_QTY",
                                                payload: {
                                                    id: cake.id,
                                                    qty: cake.qty+1
                                                }
                                            })
                                        }}
                                        >
                                        <AiOutlinePlus/>
                                        </Button>
                                       ):(
                                        <p>OUT OF STOCK</p> 
                                        ) }
                                       
                                    </Col>
                                    <Col md={2}>                                            
                                        <Button
                                        type="button"
                                        variant="light"
                                        onClick={() =>{
                                            dispatch({
                                                type:"CHANGE_CART_QTY",
                                                payload: {
                                                    id: cake.id,
                                                    qty: cake.qty-1
                                                }
                                            })
                                        }}
                                        >
                                        <AiFillMinusCircle/>
                                        </Button>
                                       
                                    </Col>
                                    <Col md={2}>
                                    <Button
                                    type="button"
                                    variant="light"
                                    onClick={() => {
                                    dispatch({
                                    type: 'REMOVE_FROM_CART',
                                    payload: cake
                                    })
                                    }}
                                    >
                                    <AiFillDelete fontSize="20px"/>
                                    </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            )        
                    })
                    }
                </ListGroup>
            </div>
            <div className="filters summary">
                    <span>Total items: {cart.length}</span>
                    <span>Total: Rs {total}</span>
                    <Link to="/checkOut">
                    <Button disabled={cart.length === 0}>
                        Check Out
                    </Button>
                    </Link>
            </div>
        </div>
    )
}

export default Cart
