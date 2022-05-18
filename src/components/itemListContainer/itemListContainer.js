import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount.js'
import { Button, CardActions, Grid } from '@mui/material';
// import arrayProds from '../Productos/backendsimulado.js';



const ItemListContainer = ({ image, title, price, stock }) => {

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
            <Grid item md={4}>
                <Card sx={{ maxWidth: 345, marginTop: '50px' }} variant={'outlined'}>
                    <CardMedia
                        component="img"
                        height="100%"
                        image={image}
                        alt={title}
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
                            <Button variant="contained">VER MÁS</Button>
                            <Typography variant={'h6'} sx={{ mt : '6px',color : '#6b6b6b'}}>
                                {stockMessage(stock)}
                            </Typography>
                            <ItemCount image={image} title={title} price={price} stock={stock} />
                        </div>
                    </CardActions>
                </Card>
            </Grid>

        // ESTO ES PARA CUANDO SE MAPEE LA DATA, COMO EN ESTE DESAFIO SE PIDE ESPECIFICAMENTE PROPS, LO TUVE QUE SACAR
        // 
        // <Grid container direction="row" alignItems="center" justify="center" spacing={3}>
        //     {arrayProds.map((productos) =>
        //         <Grid item xs={12} md={6} lg={4} sx={{display : 'flex', flexDirection : 'column', alignItems : 'center'}} key={productos.id}>
        //         <Card sx={{ maxWidth: 345, marginTop: '50px' }} variant={'outlined'}>
        //             <CardMedia
        //                 component="img"
        //                 height="100%"
        //                 image={productos.img}
        //                 alt={productos.title}
        //             />
        //             <CardContent>
        //                 <Typography gutterBottom variant="h5" component="div">
        //                     {productos.title}
        //                 </Typography>
        //                 <Typography variant="body2" color="text.secondary">
        //                     {productos.itemDesc}
        //                 </Typography>
        //                 <Typography variant="h6" color="text.primary">
        //                     ${productos.price}
        //                 </Typography>
        //             </CardContent>
        //             <CardActions>
        //                 <div style={{ width : '100%', display : 'flex ', flexDirection : 'column'}}>
        //                     <Button variant="contained">VER MÁS</Button>
        //                     <Button variant="outlined">COMPRAR</Button>
        //                 </div>
        //             </CardActions>
        //         </Card>
        //         </Grid>
        //     )}
        // </Grid>
    )
};

export default ItemListContainer;

