import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Grid } from '@mui/material';
import arrayProds from '../Productos/backendsimulado.js';

const ItemListContainer = () => {

    return (
        <Grid container direction="row" alignItems="center" justify="center" spacing={3}>
            {arrayProds.map((productos) =>
                <Grid item xs={12} md={6} lg={4} sx={{display : 'flex', flexDirection : 'column', alignItems : 'center'}} key={productos.id}>
                <Card sx={{ maxWidth: 345, marginTop: '50px' }} variant={'outlined'}>
                    <CardMedia
                        component="img"
                        height="100%"
                        image={productos.img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {productos.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {productos.itemDesc}
                        </Typography>
                        <Typography variant="h6" color="text.primary">
                            ${productos.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <div style={{ width : '100%', display : 'flex ', flexDirection : 'column'}}>
                            <Button variant="contained">VER MÁS</Button>
                            <Button variant="outlined">COMPRAR</Button>
                        </div>
                    </CardActions>
                </Card>
                </Grid>
            )}
        </Grid>
    )
};

export default ItemListContainer;

