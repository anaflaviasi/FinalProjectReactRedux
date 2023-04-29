import { Event } from "../types/types";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


 
 const EventCardMenu: React.FC<Event> = ({ id, name, dates, images, info, pleaseNote, url }) => {

    const blank = " ";

   
    return (
        <div>
            <Card sx={{ maxWidth: 345, margin: '20px'}}>
            <CardActionArea>
                {
                    images.map((img: any, index: any) => {
                                    if (index === 1){
                                return ( <CardMedia
                        component="img"
                        height="140"
                        image={img.url}
                        alt="green iguana"
                        />)}
                    })
                }
                 <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                     {name}
                     </Typography>
                     {dates.start.localDate}
                     <Typography variant="body2" color="text.secondary">
                     Tickets { dates.status.code }
                     {blank} in { dates.timezone}
                     </Typography>
                 </CardContent>
            </CardActionArea>
            </Card>
    
        </div> 
        
    )
 }

 export default EventCardMenu;