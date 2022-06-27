import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CartTable from '../NavBar/CartTable'
import { CartFormAddress } from './CartFormAddress';
import { CartFormCredCard } from './CartFormCredCard';
import { CartContext } from '../../context/CartContext';
import Snackbar from '@mui/material/Snackbar';
import { Link } from 'react-router-dom'
import MuiAlert from '@mui/material/Alert'

const steps = ['Revisá tu compra', 'Datos de tu Domicilio', 'Pago'];

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



export default function HorizontalLinearStepper({total}) {
  const { CartOrder, CartItems, emptyCart, emptyOrder,recalculateTotal, setCartOrder, Success, CartOrderRef, CartTotalRef, saveData} = useContext(CartContext)
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [open, setOpen] = React.useState(false);

  const buildOrder = () => {
      recalculateTotal()
      setCartOrder({...CartOrder, items : CartItems, total : CartTotalRef.current})
    }


  const uploadOrder = () => {
    saveData(CartOrderRef.current)
    handleClick()
    setTimeout(() => {
      emptyCart()
      emptyOrder()
    }, 1500);

  }

  const isStepOptional = (step) => {
    return step === 3;
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };


  return (
    <Box sx={{ width: '100%', mt: '24px' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography variant='h3' sx={{ mt: 2, mb: 1 }}>
            Gracias por tu compra!
          </Typography>
          <Typography variant='h5'>
            Podés verificar tus pedidos&nbsp;
            <Link to={'/Ordenes'} >
            acá
            </Link>
          </Typography>
          <Typography variant='h5'>
            Volver a la&nbsp; 
            <Link to={'/'}>
              Home
            </Link>
          </Typography>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Orden nro: {Success}
                </Alert>
          </Snackbar>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div style={{ marginTop: 30, marginBottom: 10 }}>
            {activeStep === 0 && CartItems.length !== 0 && (
            <CartTable total={total} />
            )}
            {activeStep === 0 && CartItems.length === 0 && (
            <Typography variant='h5'>Carrito Vacio - volver a <Link to={'/'} >PRODUCTOS</Link></Typography>
            )}
            {activeStep === 1 && (
              <CartFormAddress />
            )}
            {activeStep === 2 && (
              <CartFormCredCard />
            )}
          </div>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Atrás
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Saltear
              </Button>
            )}

            <Button disabled={CartItems.length === 0} onClick={handleNext}>
              {activeStep === steps.length - 1 ? <div onClick={uploadOrder}>Finalizar</div> : <div onClick={buildOrder}>Siguiente</div>}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}