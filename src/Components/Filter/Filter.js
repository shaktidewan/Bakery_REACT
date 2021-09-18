import React from 'react'
import {Button,Form} from 'react-bootstrap';
import "./Filter.css"
import { CartState } from '../../Context/Context';

const Filter = () => {
    const {
        productState:{sort,searchQuery},
        productDispatch,
    } = CartState();


    return (
        <div className="filter">
            <span>
                <Form.Check
                    inline
                    label="Ascending"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                    onChange={()=>
                    productDispatch({
                        type:"SORT_BY_PRICE",
                        payload: "lowToHigh",
                    })}
                    checked={sort === "lowToHigh" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                    onChange={()=>
                    productDispatch({
                        type:"SORT_BY_PRICE",
                        payload: "highToLow",
                    })}
                    checked={sort === "highToLow" ? true : false}
                />
            </span>
            <Button 
                variant="light"
                onClick={()=>
                productDispatch({
                type: "CLEAR_FILTER",
                })
                }
            >Clear</Button>
        </div>
    )
}

export default Filter;
