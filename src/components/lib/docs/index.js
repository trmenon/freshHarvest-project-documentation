import React from 'react';
import { NavigationBar} from '../../common';
import { Outlet} from 'react-router-dom';

// Material UI imports
import Box from '@mui/material/Box';

function Docs() {    
    
    return (        
        <Box sx={{width: 'auto', mx: 2}}>
            <NavigationBar/>              
            <Outlet/>               
        </Box>
    );
}


export default Docs;