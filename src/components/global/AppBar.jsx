import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// import { Linkq } from 'react-router-dom';
import Toolbar from '../landing-page/ToolBar';
import { AppBar, Typography } from '@mui/material';
import Logo from './Logo';
import { useMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logoutAsync } from '../../redux/actions/authActions';
import { useState } from 'react';
import UserMenu from './UserMenu';

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
};


function UserUndefined() {
    return (
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
                color="inherit"
                variant="h6"
                underline="none"
                sx={rightLink}
                href="/register"

            >
                {'Sign Up'}
            </Link>
            <Link
                variant="h6"
                underline="none"
                href="/login"
                sx={{ ...rightLink, color: '#F55139' }}
            >
                {'Log In'}
            </Link>


        </Box>
    )
}


function UserLogued() {
    const isUserLogued = useMatch("/store2");
    const dispatch = useDispatch();

    const { userData } = useSelector(store => store.authReducers);

    return (
        console.log(userData[0].userName),
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: "center" }}>
            <Typography variant="p" color="white">
                Hola {userData[0].userName}</Typography>
            <UserMenu userImage={userData[0].photoURL} />
            {/* <button onClick={() => (dispatch(logoutAsync()))}>LogOut</button> */}

        </Box>
    )
    // mostrar, ocultar contenido o hacer otra cosa

}


const AppAppBar = () => {

    const dispatch = useDispatch();
    const [userStatus, setUserStatus] = useState(false)

    const { userData } = useSelector(store => store.authReducers);

    useEffect(() => {
        if (userData) {
            setUserStatus(true)
        } else {
            setUserStatus(false)
        }
    }, [userData])
    console.log(userStatus);


    console.log(userData);
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: '#1e1f22' }}>
                    <Box sx={{ flex: 1 }} />
                    <Link
                        variant="h1"
                        underline="none"
                        color="white"
                        href=""
                        sx={{ fontSize: 10, }}
                    >
                        <Logo />
                    </Link>
                    {userStatus
                        ? <UserLogued />
                        : <UserUndefined />
                    }
                    <Box>
                        {/* {
                        UserLogued()
                        } */}

                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default AppAppBar;