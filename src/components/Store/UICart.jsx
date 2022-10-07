import React from 'react'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/material';


const UICart = () => {
    return (
        <div>
            <Box sx={{ flexGrow: '3', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <ShoppingCartIcon sx={{ color: 'white' }} />
            </Box>
        </div>
    )
}

export default UICart