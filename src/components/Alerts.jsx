import { AlertTitle, Snackbar, Stack } from '@mui/material'
import MuiAlert from '@mui/material/Alert';
import React from 'react'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

//   export default function CustomizedSnackbars() {



export const AlertSucessfullAddToCart = (statusHandle) => {

    const [open, setOpen] = React.useState();

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        console.log(statusHandle),
    <Stack spacing={2} sx={{ width: '100%' }} onClick={handleClick}>
        
        {
            statusHandle.handleClick ? (
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        <AlertTitle>Success</AlertTitle>
                        This is a success message — <strong>check it out!</strong>
                    </Alert>
                </Snackbar>
            ) : null

        }
        {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert variant='filled' severity="success">
                <AlertTitle>Success</AlertTitle>
                This is a success alert — check it out!
            </Alert>
        </Snackbar> */}
    </Stack>
    )
}


export const AlertWarningAddToCart = () => {
    return (
        console.log('holi'),
        <div>
            <h1>hola</h1>
        </div>
    )
}
