import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch } from 'react-redux';
import { Box, Button, Popover, Typography } from '@mui/material';
import { deleteAllElements } from '../../redux/actions/storeActions';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Cart = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let newProduct = JSON.parse(localStorage.getItem('dataCarrito'))


  return (
    <div>
      <ShoppingCartIcon sx={{ color: 'white', ml: '3' }} variant="contained" onClick={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Carrito de compras
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        <div>
          {/* <Typography sx={{ p: 2 }}>Carrito de compras</Typography> */}
          {
            newProduct.length <= 0 ?
              <h2>No tienes productos en el carrito </h2>
              :
              <div>
                {newProduct.map((newProduct2, index45) => {
                  return (
                    <div key={newProduct2.id}>
                      <p>{newProduct2.name}</p>
                      <p>{newProduct2.price}</p>
                    </div>
                  )
                })
                }
              </div>
          }
       <button onClick={deleteAllElements}>Vaciar carrito</button>

        </div>
        </Box>

      </Modal>
    </div>
  );


  // console.log(newProduct)

  // // for (const dataCarrito in localStorage) {
  // //   console.log(`${dataCarrito}: ${localStorage.getItem(dataCarrito)}`)
  // // }

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // // const [anchorEl, setAnchorEl] = React.useState(null);

  // // const handleClick = (event) => {
  // //   setAnchorEl(event.currentTarget);
  // // };

  // // const handleClose = () => {
  // //   setAnchorEl(null);
  // // };

  // // const open = Boolean(anchorEl);
  // // const id = open ? 'simple-popover' : undefined;

  // return (
  //   <div>
  //     <ShoppingCartIcon sx={{ color: 'white', ml: '3' }} variant="contained" onClick={handleOpen} />

  //     <Modal
  //       open={open}
  //       onClose={handleClose}
  //       aria-labelledby="modal-modal-title"
  //       aria-describedby="modal-modal-description"
  //     // anchorOrigin={{
  //     //   vertical: 'bottom',
  //     //   horizontal: 'left',
  //     // }}
  //     >
  //       <div sx={style}>
  //         <Typography sx={{ p: 2 }}>Carrito de compras</Typography>
  //         {
  //           newProduct.length <= 0 ?
  //             <h2>No tienes productos en el carrito </h2>
  //             :
  //             <div>
  //               {newProduct.map((newProduct2, index45) => {
  //                 return (
  //                   <div >
  //                     <p>{newProduct2.name}</p>
  //                     <p>{newProduct2.price}</p>
  //                   </div>
  //                 )
  //               })
  //               }
  //             </div>
  //         }
  //       </div>
  //       <button onClick={deleteAllElements}>Vaciar carrito</button>
  //     </Modal>
  //   </div>
  // );
}

export default Cart