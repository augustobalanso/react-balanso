import React from 'react'
import { ItemDetail } from './ItemDetail'
import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'

export const ItemDetailContainer = () => {
    const [FetchSingleProduct, setFetchSingleProduct] = useState([])

    useEffect(() => {
        fetch('https://wookies-coderhouse-default-rtdb.firebaseio.com/stock/1.json',
            {headers : {
            'Access-Control-Allow-Origin': '*',
            }},            
            {method:'GET'})
            .then((res) => res.json())
            .then((fetchedProd) => setFetchSingleProduct(fetchedProd))
    }, [])
    
    return (
            <ItemDetail FetchRes={FetchSingleProduct} />
    )
}