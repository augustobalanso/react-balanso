import { Card, Grid, CardContent, Typography, CardActions, ToggleButtonGroup, ToggleButton, Divider } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ItemCount  from '../ItemCount/ItemCount'

export const ItemDetail = ({FetchRes}) => {
  const navigate = useNavigate()
  const [talle, setTalle] = useState('0');

  const handleTalle = (event, newAlignment) => {
    setTalle(newAlignment);
  };

  const {itemDesc,manuf,type,price,stock,title} = FetchRes

  return(
    <div>
    <Grid container marginTop={3}>
      <Grid item xs={8}>
        <Carousel variant='dark'>
          <CarouselItem>
            <img alt='primerimagen' style={{ height: '800px', width:'800px', objectFit : 'contain' }} src={`../../img/${FetchRes.id}/webp0.jpg`} />
          </CarouselItem>
          <CarouselItem>
            <img alt='segundaimagen' style={{ height: '800px', width:'800px', objectFit : 'contain' }} src={`../../img/${FetchRes.id}/webp1.jpg`}></img>
          </CarouselItem>
          <CarouselItem>
            <img alt='terceraimagen' style={{ height: '800px', width:'800px', objectFit : 'contain' }} src={`../../img/${FetchRes.id}/webp2.jpg`}></img>
          </CarouselItem>
        </Carousel>
      </Grid>
      <Grid item xs={4}>
        <Card variant='outlined' sx={{ 
                                      display: 'flex',
                                      flexDirection: 'column',
                                      justifyContent: 'center',
                                      minWidth: 275,
                                      height: 800 }}>
          <CardContent>
            <Button style={{
                      position: 'fixed',
                      top:'100px',
                      right:'90vw',
                      textDecoration : 'none',
                      color : 'black'}}
                    onClick ={() => navigate(-1)}
                    >
                        
            <ArrowCircleLeftIcon color={'primary'} fontSize={'large'} />
            </Button>
            {/* <Link style={{
                      position: 'fixed',
                      top:'100px',
                      right:'90vw',
                      textDecoration : 'none',
                      color : 'black'}}  
              to={`/Productos/`}>
              <ArrowCircleLeftIcon color={'primary'} fontSize={'large'} />
            </Link> */}
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {`Marca ${manuf}`}
            </Typography>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {type}
            </Typography>
            <Typography variant="body2">
              {itemDesc}
            </Typography>
            <Typography marginTop={4} variant='h4'>
              ${price}
            </Typography>
            <Typography marginBottom={4} color={'gray'} >
              3 cuotas <span style={{ color: 'green'}}>sin interes</span> de <span style={{ color: 'green'}}>${Math.round(price/3)}</span>
            </Typography>
            <Divider />
          </CardContent>
          <Typography variant='' textAlign={'left'} paddingLeft={7} >
            Talle
          </Typography>
          <CardActions sx={{ marginTop:'8px', marginBottom:'30px' , justifyContent:'center' }}>
          <ToggleButtonGroup
              color='primary'
              value={talle}
              exclusive
              onChange={handleTalle}
              aria-label="select Talle"
          >
              <ToggleButton value="40" aria-label="left aligned">
                40
              </ToggleButton>
              <ToggleButton value="41" aria-label="left aligned">
                41
              </ToggleButton>
              <ToggleButton value="42" aria-label="left aligned">
                42
              </ToggleButton>
              <ToggleButton value="43" aria-label="left aligned">
                43
              </ToggleButton>
              <ToggleButton value="44" aria-label="centered">
                44
              </ToggleButton>
              <ToggleButton value="45" aria-label="right aligned">
                45
              </ToggleButton>
              <ToggleButton value="46" aria-label="justified">
                46
              </ToggleButton>
            </ToggleButtonGroup>
          </CardActions>
          <Divider />
          <Typography marginTop={2}>
            Stock:{stock}
          </Typography>
          <CardActions>
            <ItemCount stock={stock} />
          </CardActions>
        </Card>
      </Grid>
    </Grid>
    </div>
  )
}
