import React from 'react';
import { Pagination } from '@material-ui/lab';



const MyPagination = ({ setPage, number }) => {

    const handleChange = (page) => {
        setPage(page)
        window.scroll(0,0)
    }

    return (
        <div>
            <div>
                <Pagination
                    onChange={(e) => handleChange(e.target.textContent)}
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }} 
                    variant="outlined" 
                    count={number} 

                    />
            </div>

        </div>
    );
};

export default MyPagination;