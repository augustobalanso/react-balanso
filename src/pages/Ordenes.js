import React, { useEffect } from 'react'
import { Accordion, Divider, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { collection, getDocs } from 'firebase/firestore';
import db from "../Utils/firebaseConfig";
import useState from 'react-usestateref';
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export const Ordenes = () => {

    const [ orderSnapshot, setOrderSnapshot, orderSnapshotRef ] = useState([])



    useEffect(() => {
        const querySnapshot = async () => {
            const snapshot = await getDocs(collection(db,'ordenes'))
            snapshot.forEach((doc) => {
                let orderDoc = {data: doc.data()}
                orderDoc.data.id = doc.id
                setOrderSnapshot([...orderSnapshotRef.current, orderDoc.data])
            })

        }

        querySnapshot()

    }, [])
    



    return (
        <div>
            {orderSnapshotRef.current.map((order) => {
                return (
                    <Accordion key={order.id.substr(order.id.length - 8)} sx={{ mt: '60px', justifyContent: 'space-between' }} >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Nombre: {order.buyer.name}&nbsp;&nbsp;&nbsp;</Typography>
                        <Divider  color="black" orientation="vertical" flexItem/>
                        <Typography>$&nbsp;{order.total}&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                        <Divider color="black" orientation="vertical" flexItem/>
                        <Typography>Orden nro. : {order.id}&nbsp;&nbsp;</Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                        <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '350px' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <TextField id="outlined-basic" value={order.buyer.name} label="Nombre de quien recibe" variant="outlined" disabled/>
                        <TextField id="outlined-basic" value={order.buyer.address} label="Direccion de envio" variant="outlined" disabled/>
                        <TextField id="outlined-basic" value={order.credcard.number.substr(order.credcard.number.length - 4)} label="4-digitos Tarjeta" variant="outlined" disabled/>
                        </Box>
                                       
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 500 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell></StyledTableCell>
                                            <StyledTableCell align="left">Producto</StyledTableCell>
                                            <StyledTableCell align="right">Talle</StyledTableCell>
                                            <StyledTableCell align="right">Cant.</StyledTableCell>
                                            <StyledTableCell align="right">Precio</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                {order.items.map((item) => {

                                    return (   


                                        <StyledTableRow key={item.cartConfirmID}>
                                            <StyledTableCell component="th" scope="row">
                                                <img height='80px' alt={`${item.id}`} src={`.${item.img}`} />
                                            </StyledTableCell>
                                            <StyledTableCell align="left">{item.title}</StyledTableCell>
                                            <StyledTableCell align="right">{item.talle}</StyledTableCell>
                                            <StyledTableCell align="right">{item.CartQty}</StyledTableCell>
                                            <StyledTableCell align="right">${item.price*item.CartQty}</StyledTableCell>
                                        </StyledTableRow>

                                    )

                                })}

                                    </TableBody>
                                </Table>
                            </TableContainer> 
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </div>
    )
}
