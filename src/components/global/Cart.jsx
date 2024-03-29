import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch } from 'react-redux';
import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, Popover, Tooltip, Typography } from '@mui/material';
import { deleteAllElements, deleteProduct } from '../../redux/actions/storeActions';
import Modal from '@mui/material/Modal';
import styles from '../styles/cart.module.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useEffect } from 'react';

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
  const [count, setCount] = React.useState(1);
  const [scroll, setScroll] = React.useState('paper');
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {

  }, [])

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  let newProduct = JSON.parse(localStorage.getItem('dataCarrito'))


  return (
    <div>
      <Tooltip title="Carrito de compras">
        <ShoppingCartIcon sx={{ color: 'white', ml: '3', cursor: 'pointer' }} variant="contained" onClick={handleOpen} />
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={{ typography: '', fontFamily: 'Montserrat, sans-serif' }}
      >
        <DialogTitle
          sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}

          id="scroll-dialog-title">Carrito de compras</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}
          sx={{ typography: '', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}

        >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            sx={{ typography: '', fontFamily: 'Arial', color: 'black' }}
          >

            <div>
              {
                newProduct == null || newProduct.length === 0 ?
                  <h2>No tienes productos en el carrito </h2>
                  :
                  <div className={styles.grid_container}>
                    <div>
                      <p className={styles.store_main_title}><strong>Producto(s)</strong></p>
                      {newProduct.map((newProduct2, index45) => {
                        return (
                          <div className={styles.grid_container_map} key={newProduct2.id}>
                            <div>
                              <p>{newProduct2.name}</p>
                              <p>{newProduct2.price}</p>
                            </div>
                            <div className={styles.buttons}>
                              <div>
                                <button className={styles.product_button} onClick={() => { setCount(count + 1) }}>+</button>
                                <p>{count}</p>
                                <button className={styles.product_button} onClick={() => { setCount(count - 1) }}>-</button>
                              </div>
                              <div>
                                <Tooltip title="Elimina este producto del carrito">
                                  <DeleteForeverIcon sx={{ cursor: 'pointer' }} color='secondary' onClick={() => { deleteProduct(newProduct2.id) }} />
                                </Tooltip>
                              </div>
                            </div>

                          </div>
                        )
                      })
                      }
                    </div>
                    <div className={styles.cantidad}>
                      <p className={styles.store_main_title}><strong>Cantidad</strong></p>
                    </div>
                  </div>
              }
              <div className={styles.buttons_container}>
                <button
                  className={styles.dialog_buttons}
                  onClick={() => (deleteAllElements(), handleClose())}
                  onClose={handleClose}
                >
                  Vaciar carrito</button>
                <button
                  className={styles.dialog_buttons}
                  onClick={() => handleClose()}>Cerrar</button>

              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );

  // const [open, setOpen] = React.useState(false);
  // const [count, setCount] = React.useState(0);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // useEffect(() => {

  // }, [])


  // let newProduct = JSON.parse(localStorage.getItem('dataCarrito'))

  // return (
  //   <div>
  //     <ShoppingCartIcon sx={{ color: 'white', ml: '3' }} variant="contained" onClick={handleOpen} />

  //     <Modal
  //       open={open}
  //       onClose={handleClose}
  //       aria-labelledby="modal-modal-title"
  //       aria-describedby="modal-modal-description"
  //     >
  //       <Box sx={style}>
  //         <Typography id="modal-modal-title" variant="h6" component="h2">
  //           Carrito de compras
  //         </Typography>
  //         {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
  //           Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  //         </Typography> */}
  //         <div>
  //           {/* <Typography sx={{ p: 2 }}>Carrito de compras</Typography> */}
  //           {

  //             newProduct == null || newProduct.length === 0 ?
  //               <h2>No tienes productos en el carrito </h2>
  //               :
  //               <div className={styles.grid_container}>
  //                 <div>
  //                   <p>Producto(s)</p>
  //                   {newProduct.map((newProduct2, index45) => {
  //                     return (
  //                       <div key={newProduct2.id}>
  //                         <p>{newProduct2.name}</p>
  //                         <p>{newProduct2.price}</p>
  //                         <div>
  //                           <button onClick={() => { setCount(count + 1) }}>+</button>
  //                           <button onClick={() => { setCount(count - 1) }}>-</button>
  //                           <p>{count}</p>
  //                         </div>
  //                         <DeleteForeverIcon/>
  //                       </div>
  //                     )
  //                   })
  //                   }
  //                 </div>
  //                 <div>
  //                   <p>Cantidad</p>
  //                 </div>
  //               </div>
  //           }
  //           <button
  //             onClick={() => (deleteAllElements(), handleClose())}
  //             onClose={handleClose}
  //           >
  //             Vaciar carrito</button>

  //         </div>
  //       </Box>

  //     </Modal>
  //   </div>
  // );


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