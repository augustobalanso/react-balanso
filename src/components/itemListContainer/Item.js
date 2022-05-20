import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Modal from './Modal'
import { Card, CardMedia, CardContent, Typography,CardActions } from '@mui/material'

const Item = ({title,stock,price,id,itemDesc,img}) => {

    function stockMessage(stock){
        if(stock === 0){
            return(
                <Typography sx={{color : 'red'}} >
                    SIN STOCK
                </Typography>
            )
        } else {
            return(
                <Typography>
                    Stock : {stock}
                </Typography>
            )
        }
    }   

    return (
        <Card sx={{ maxWidth: 345, marginTop: '50px' }} variant={'outlined'}>
            <CardMedia
                component="img"
                height="100%"
                image={img}
                alt={id}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="h6" color="text.primary">
                    ${price}
                </Typography>
            </CardContent>
            <CardActions>
                <div style={{ width : '100%', display : 'flex ', flexDirection : 'column'}}>
                    <Modal title={title} itemDesc={itemDesc} id={id} />
                    {stockMessage(stock)}
                    <ItemCount stock={stock} />
                </div>
            </CardActions>
        </Card>

            )
}

export default Item