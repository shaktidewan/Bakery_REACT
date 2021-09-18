import React from 'react'
import {Card,Button } from "react-bootstrap";
import "./SingleItem.css";
import {CartState} from '../../Context/Context';
import {Link} from 'react-router-dom';

const SingleItem = ({cake}) => {
    const {
        state: { cart },
        dispatch,
    } = CartState();

    // console.log(cake);

    return (
        <div className="cakes">
            <Card>
                <Card.Img 
                variant="top"
                src=""
                alt={cake.title}
                />
                <Card.Body>
                    <Card.Title>
                        {cake.title}
                    </Card.Title>
                    <Card.Subtitle>
                        <span>Rs {cake.price}</span>
                    </Card.Subtitle>
                    <Link to={{
                        pathname:"/viewCake",
                        state:{
                            cakeDetails:cake
                        }}}>
                    <Button
                    className="View"
                    >
                        Quick View
                    </Button>
                    </Link>

                    {
                        cart.some(p =>p.id === cake.id) ? (
                            <Button disabled >Order</Button>
                        ) : (
                            <Button
                             className="Order"
                                onClick={() => {
                                dispatch({
                                type: 'ADD_TO_CART',
                                payload: cake
                                })
                                }}
                               >
                                Order
                                </Button>
                        )
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleItem
