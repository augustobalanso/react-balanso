import React from 'react';
import ItemList from './ItemList.js'
import { useState, useEffect } from 'react';

export const ItemListContainer = () => {
    const [StockJson, setStockJson] = useState([]);

    useEffect(() => {
        
        async function fetchAPI(){
            const backendRequest = await fetch(`https://wookies-coderhouse-default-rtdb.firebaseio.com/stock.json`, {method:'GET'}, {mode: 'no-cors'})
            const backendData = await backendRequest.json();
            return backendData
        }    

        setTimeout(() => {
            fetchAPI()
            .then(res =>{
                setStockJson(res)
            })
            .catch(err =>{
                console.log(err)
            }
            )
        },2000)
    },[])

    return (
        <ItemList StockJson={StockJson} />
    )
};

export default ItemListContainer
