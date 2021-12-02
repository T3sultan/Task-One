import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Product = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const url = `https://staging-backend.esyms-api.com/esyms/website/product/front-condition?categoryId=&name=%20`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data.results.docs))

    }, [])

    return (
        <div>
            <h1>All Products {products.length}</h1>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="table">
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
                        {products.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell align="right">{row._id}</TableCell>
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
            </TableContainer>

        </div>
    );
};

export default Product;