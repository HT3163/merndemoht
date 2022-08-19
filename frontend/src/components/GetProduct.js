import React, { Fragment , useEffect} from "react";
import { getProduct } from "../actions/productActions.js";
import { useSelector, useDispatch} from 'react-redux'


const Home = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {

        dispatch(getProduct())
    }, [dispatch])

    return (<Fragment>      

        ProgrammingWithHT

        </Fragment> 
    )
};

export default Home;