import React from 'react'
import { useLocation } from 'react-router'
import { Button } from 'react-bootstrap';
import { CartState } from '../../../Context/Context';

const ViewCake = () => {
    const location = useLocation();
    const {cakeDetails} = location.state;

    const {
        state: { cart },
        dispatch,
    } = CartState();

    // console.log(cakeDetails);
    return (
        <div>
            Tittle: {cakeDetails.title}<br></br>
            Price:{cakeDetails.price}<br></br>
            {
                cart.some(p =>p.id === cakeDetails.id) ? (
                            <Button disabled >Order</Button>
                            ) : (
                            <Button
                                className="Order"
                                onClick={() => {
                                dispatch({
                                type: 'ADD_TO_CART',
                                payload: cakeDetails
                                })
                                }}
                               >
                                Order
                                </Button>
                        )
                    }
        </div>
    )
}

export default ViewCake
