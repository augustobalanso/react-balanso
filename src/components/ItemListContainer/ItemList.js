import React from 'react'
import Item from './Item.js'
import { Grid } from '@mui/material'

const ItemList = ({StockJson}) => {

    return(
        <Grid container direction="row" alignItems="center" justify="center" spacing={3}>
        {
            StockJson.map( ({title,stock,price,id,itemDesc,img,category}) => {
                return (
                    <Grid item xs={12} md={6} lg={4} sx={{display : 'flex', flexDirection : 'column', alignItems : 'center'}} key={id}>    
                    <Item title={title} stock={stock} price={price} id={id} itemDesc={itemDesc} img={img} category={category} />
                    </Grid>
                )
            })
        }
        </Grid>
    )
}

export default ItemList
