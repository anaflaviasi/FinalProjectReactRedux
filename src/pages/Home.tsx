import React, { useEffect } from "react";
import { Box } from "@mui/material";
import NavBar from "../components/NavBar";

import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { fetchEventDiscovery } from "../actions/eventActions";
import { Event } from "../types/types";
import EventCardMenu from "../components/EventCardMenu";
import Copyright from "../components/Copyright";
import Title from "../components/Title";


export default function Home(): JSX.Element{

    const dispatch: Dispatch<any> = useDispatch();

     const { isLoading, isError, data } = useSelector((state: any) => state.data);
     const { _embedded  } = data;
     console.log(_embedded, "embeds")

     console.log(data, "DATA");

    useEffect (() => {
        dispatch(fetchEventDiscovery());

    }, []);

    
    return (
    <>
    <NavBar />
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>

        
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
            <Title>Home</Title>
          <Toolbar />
          
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                
              <Grid sx={{ width: '100%', marginLeft:'30px', marginRight:'50px', marginBottom:'30px'}}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'grid',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    justifyItems: 'center',
                    height: '100%',
                    width: '100%'
                  }}
                >
                    <Grid container spacing={2} sx= {{marginTop: '50px'}}>
                    {
                         isLoading ? (
                             <h3>Fetching Data from API...</h3>
                         ) 
                         :_embedded?.events?.length > 0 && _embedded.events.map((event: Event, index: any) => {
                             if (index <= 1) {
                             return ( <EventCardMenu{...event}/> )
                             }
                         } )
                    }
                    </Grid>

                </Paper>
                
              </Grid>
            </Grid>
            
          </Container>
        </Box>
        <Copyright sx={{ pt: 4 }} />
    </Box>    
    </>
    )
}

