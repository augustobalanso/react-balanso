import React, { useContext } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../context/CartContext';


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


export default function CustomizedTables({total}) {

    const { CartItems, deleteItemCart } = useContext(CartContext)
    const rows = CartItems
    let localTotal = 0
    
    if(total === undefined){
      CartItems.forEach((Element) => {
        localTotal += Element.price*Element.CartQty
      })
    }

    return (
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell align="center">Producto</StyledTableCell>
                <StyledTableCell align="right">Talle</StyledTableCell>
                <StyledTableCell align="right">Cant.</StyledTableCell>
                <StyledTableCell align="right">Precio</StyledTableCell>
                <StyledTableCell align="right">Borrar</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.cartConfirmID}>
                  <StyledTableCell component="th" scope="row">
                    <img height='80px' alt={`${row.id}`} src={`.${row.img}`} />
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.title}</StyledTableCell>
                  <StyledTableCell align="right">{row.talle}</StyledTableCell>
                  <StyledTableCell align="right">{row.CartQty}</StyledTableCell>
                  <StyledTableCell align="right">${row.price*row.CartQty}</StyledTableCell>
                  <StyledTableCell align="right">
                    <DeleteIcon onClick={() => deleteItemCart(row.cartConfirmID)} />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <h3 style={{ marginTop : '2rem' }} align={'right'} >Total: ${total === undefined ? localTotal : total }</h3> 
      </div>
    )

}