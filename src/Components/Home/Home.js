import React ,{useState} from 'react'
import {CartState} from '../../Context/Context';
import SingleItem from '../Items/SingleItem';
import './Home.css'
import Filter from '../Filter/Filter';
import {AiFillCloseCircle} from "react-icons/ai";
import {IoMdOpen} from "react-icons/io";
const Home = () => {
    //USING GLOBAL STATE WITHOUT PROPS
    const {
        state: {cakes},
        productState:{sort,searchQuery}
    } = CartState();

    console.log(searchQuery);

    const [toggle,setToggle] = useState({
        isToggleON: true
    });
    
    //logical function to render products according filter
    const transformProducts = () => {
        let sortedProducts = cakes;
        if(sort){
        sortedProducts = sortedProducts.sort((a,b) =>(
        sort==='lowToHigh'?a.price-b.price:b.price-a.price
        ));
        }

        if(searchQuery){
            sortedProducts = sortedProducts.filter(
                (prod) => prod.title.toLowerCase().includes(searchQuery)
                );
        }
           
        return sortedProducts
    }

    const handleClick = () =>{
        setToggle(prevState => ({
            isToggleON: !prevState.isToggleON
        }));
    }

    return (
        <div><span onClick={()=>handleClick()}>
        { toggle.isToggleON ?<div> Filter <AiFillCloseCircle/></div>:<div>Filter <IoMdOpen/></div> }
        </span>
        {toggle.isToggleON === true ? <Filter/> : ""}

        <div className="home">
            <div className="cakeContainer">
                {transformProducts().map((cak,idx) =>{
                    return <SingleItem key={idx} cake={cak}/>
                })}
            </div>
        </div>
        </div>
    )
}

export default Home
