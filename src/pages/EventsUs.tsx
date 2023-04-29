import React, { Dispatch, useEffect } from "react";
import { Box, Toolbar } from "@mui/material";
import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchEventUs } from "../actions/eventActions";
import { Event } from "../types/types";
import EventCard from "../components/EventCard";
import Grid from '@mui/material/Grid';
import Copyright from "../components/Copyright";
import Title from "../components/Title";


function activeRemove(props: any){

}

// export default function Events(): JSX.Element{
    const EventsUs: React.FC = () => {

    const dispatch: Dispatch<any> = useDispatch();

     const { isLoading, isError, data } = useSelector((state: any) => state.data);
     const { _embedded  } = data;
     console.log(_embedded, "embeds")

     console.log(data, "DATA");

    useEffect (() => {
        dispatch(fetchEventUs());

    }, []);

    
    return (
    <>
    <NavBar path/>
   
    
    <Box sx={{ display: 'flex', flexDirection: 'column'   }}>

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
            <Title>Events in US</Title>
          <Toolbar />

        <Grid container spacing={2}
        sx={{justifyContent: 'center',
        justifyItems: 'center'}}>
        {
        isLoading ? (
            <h3>Fetching Data from API...</h3>
        ) 
        :_embedded?.events?.length > 0 && _embedded.events.map((event: Event, index: any) => {
             return <EventCard {...event}/> 
        } )
        }
        </Grid>
       </Box>
        <Copyright sx={{ pt: 4 }} />
    </Box>    
    </>
    )
}

export default EventsUs;