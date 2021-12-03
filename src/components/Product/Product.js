import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const Product = () => {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [correntPage, setCorrentPage] = useState(0)


    useEffect(() => {
        fetch("https://staging-backend.esyms-api.com/esyms/website/product/front-condition?categoryId=&name=%20")
            .then(res => res.json())
            .then(data => {
                setProducts(data.results.docs)
                const count = data.count;
                const pageNumber = Math.ceil(count / 10);
                setPage(pageNumber)

            })


    }, []);
    const handleChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };



    return (
        <div>
            <h1>All Products {products.length}</h1>
            <TableContainer component={Paper}>
                <Table aria-label="table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">ProductId</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Rating</TableCell>
                            <TableCell align="right">SpecialPrice</TableCell>
                            <TableCell align="right">Brand</TableCell>
                            <TableCell align="right">RouteOfAdministration</TableCell>
                            <TableCell align="right">SortOrder</TableCell>
                            <TableCell align="right">Image ID</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products
                            .map((row, index) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{row._id}</TableCell>
                                    <TableCell align="right">
                                        {row.productId}
                                    </TableCell>
                                    <TableCell align="right">{row.age}</TableCell>
                                    <TableCell align="right">{row.price}</TableCell>
                                    <TableCell align="right">{row.rating}</TableCell>
                                    <TableCell align="right">{row.specialPrice}</TableCell>
                                    <TableCell align="right">{row.brand}</TableCell>
                                    <TableCell align="right">{row.routeOfAdministration}</TableCell>
                                    <TableCell align="right">{row.img[0].sortOrder}</TableCell>
                                    <TableCell align="right">{row.img[0]._id}</TableCell>
                                </TableRow>
                            ))}

                    </TableBody>
                </Table>

              
                <Stack spacing={2}>
                    <Typography>Page: {page}</Typography>
                    <Pagination

                        onClick={() => setPage(page)}
                        style={{ display: 'flex', justifyContent: 'center' }}
                        count={500}
                        page={page}
                        onChange={handleChange}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Stack>





            </TableContainer>


        </div>
    );
};

export default Product;