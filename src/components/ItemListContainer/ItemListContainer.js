import React from 'react';
import ItemList from './ItemList.js'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../Utils/firebaseConfig.js';

export const ItemListContainer = () => {
    const { category } = useParams()
    const [StockJson, setStockJson] = useState([]);

    useEffect(() => {
        
        const getProdFirestore = async () => {
            const productSnapshot = await getDocs(collection(db, "productos"));
            const productList = productSnapshot.docs.map((doc) => {
                let product = doc.data()
                product.id = doc.id
                return product
            })
            if(category === undefined){
                setStockJson(productList)
            } else {
                const filteredProdList = productList.filter(item => item.category === category)
                setStockJson(filteredProdList)
            }
        }
    

        getProdFirestore()

        // async function fetchAPI(){
        //     const backendRequest = await fetch(`https://wookies-coderhouse-default-rtdb.firebaseio.com/stock.json`,
        //     {headers : {
        //     'Access-Control-Allow-Origin': '*',
        //     }},
        //     {method:'GET'}, 
        //     {mode: 'no-cors'})
        //     const backendData = await backendRequest.json();
        //     return backendData
        // }    

        // fetchAPI()
        //     .then((response) =>{
        //         if(category === undefined){
        //             setStockJson(response)
        //         } else {
        //             const filteredResponse = response.filter(item => item.category === category)
        //             setStockJson(filteredResponse)
        //         }

        //     })
        //     // .then(data =>{
        //     //     setStockJson(data)
        //     // })
        //     .catch(err =>{
        //         console.log(err)
        //     }
        //     )

    },[category])


    return (
        <ItemList StockJson={StockJson} />
    )
};

export default ItemListContainer
