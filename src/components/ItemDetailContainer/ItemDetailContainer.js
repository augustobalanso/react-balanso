import React from 'react'
import { ItemDetail } from './ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from '@mui/material'

export const ItemDetailContainer = () => {
    const { id } = useParams() 
    const [FetchSingleProduct, setFetchSingleProduct] = useState([])

    useEffect(() => {
        fetch(`https://wookies-coderhouse-default-rtdb.firebaseio.com/stock.json`,
            {headers : {
            'Access-Control-Allow-Origin': '*',
            }},            
            {method:'GET'})
            .then((res) => res.json())
            .then((data) => data.find((element)=> element.id==id))
            .then((fetchedProd) => setFetchSingleProduct(fetchedProd))
    }, [id])
    
    return (
            <ItemDetail FetchRes={FetchSingleProduct} />
    )
}