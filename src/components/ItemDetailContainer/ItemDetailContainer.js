import React from 'react'
import { ItemDetail } from './ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc , getDoc } from 'firebase/firestore';
import db from '../../Utils/firebaseConfig'

export const ItemDetailContainer = () => {
    const { id } = useParams() 
    const [FetchSingleProduct, setFetchSingleProduct] = useState([])



    useEffect(() => {

        const getSingleProduct = async () => {
            const docRef = doc(db, "productos", id)
            const docSnap = await getDoc(docRef)
            const singleProduct = docSnap.data()
            singleProduct.id = id
    
            setFetchSingleProduct(singleProduct)
        }
    

        getSingleProduct()
    }, [id])


    return (
            <ItemDetail FetchRes={FetchSingleProduct} />
    )
}