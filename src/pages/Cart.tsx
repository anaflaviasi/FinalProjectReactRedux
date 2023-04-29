import React from "react";
import { Box, Toolbar } from "@mui/material";
import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import Grid from '@mui/material/Grid';
import { Event } from "../types/types";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { clearCart } from "../actions/cartActions";
import EventCardCart from "../components/EventCardCart";
import Copyright from "../components/Copyright";
import Title from "../components/Title";

// export default function Cart(): JSX.Element {

const Cart: React.FC = () => {

    const { cart, total } = useSelector((state: any) => state.cart);

    const count = (cart.length);
    const [visible, setVisible] = React.useState(false);

    const setButtonVisible = () => {
        if (count > 0){
            setVisible(true);
        }  
      };  

    console.log (cart, "cart")

    const dispatch = useDispatch();
    
    const handleRemoveAll = () => {
        dispatch(clearCart());
    }

    return (
    <>
    <NavBar />
    <Box sx={{ display: 'flex', flexDirection: 'column'  }}>

    <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100%',
            // overflow: 'auto',
          }}
        >
          <Title>Favorites Events</Title>

          <Toolbar />
          
            <Button onClick={handleRemoveAll} sx={{ margin: '50px'}}
                variant="contained" endIcon={<DeleteIcon />}>
                Delete All
            </Button>
    
        <Grid container spacing={2} sx={{justifyContent: 'center',
        justifyItems: 'center'}}>
            {
                cart.map((cartItem: Event) => {
                    return <EventCardCart {...cartItem}/> 
                })
            }
        </Grid>
        </Box>
        <Copyright sx={{ pt: 4 }} />
    </Box>    
    </>
    )
}

export default Cart;

