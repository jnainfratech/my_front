import React, { useEffect } from 'react'
import './Transaction.css'
import NavBar from '../Components/NavBar'
import { Container } from '@mui/material'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatusTransaction, getUserTransaction } from '../Slice/transactionSlice';
function TransactionPage() {
  const data = useSelector(state=>state?.trans?.userData?.data)
  const handleAction = (e,id)=>{
    console.log("my id ", id)
    dispatch(checkStatusTransaction(id))
    dispatch(getUserTransaction())
  }
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getUserTransaction())
  },[])
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
      
    
  return (
    <div>
        <NavBar />
        <div className='transactionCont'>
            <Container>
                <span className='tranhead'>My Transaction</span>
            </Container>
            
        </div>
        <div>
            <Container >
                <p className='tranbread'>Home > Transaction</p>
            </Container>
        </div>
        <div>
            <Container>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell align="right">TRANSACTION ID</StyledTableCell>
                            <StyledTableCell align="right">MERCHENT ID</StyledTableCell>
                            <StyledTableCell align="right">NAME</StyledTableCell>
                            <StyledTableCell align="right">STATUS</StyledTableCell>
                            <StyledTableCell align="right">PRICE</StyledTableCell>
                            <StyledTableCell align="right">DATE</StyledTableCell>
                            <StyledTableCell align="right">ACTION</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {data?.map((row) => (
                            <StyledTableRow>
                        
                            <StyledTableCell align="right">{row.id}</StyledTableCell>
                            <StyledTableCell align="right">{row.merchant_id}</StyledTableCell>
                            <StyledTableCell align="right">{row.name}</StyledTableCell>
                            <StyledTableCell align="right">{row.status ==="Successful" ? <p className='pass'>SUCCESS</p>  :  <p className='fail'>FAIL</p>  }</StyledTableCell>
                            <StyledTableCell align="right">{row.price}</StyledTableCell>
                            <StyledTableCell align="right">{row.date_created.split("T")[0]}</StyledTableCell>
                            <StyledTableCell align="right"><button className='statusbtn' onClick={(e)=>handleAction(e,row.id)}>Check status</button> </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    </div>
  )
}

export default TransactionPage