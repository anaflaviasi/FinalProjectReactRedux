import React from "react";
import { Event } from "../types/types";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete'; 
import { removeFromCart } from "../actions/cartActions";



interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }


const ExpandMore = styled((props: ExpandMoreProps) => {
const { expand, ...other } = props;
return <IconButton {...other} />;
})(({ theme, expand }) => ({
transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
marginLeft: 'auto',
transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
}),
}));
 
 const EventCard: React.FC<Event> = ({ id, name, dates, images, info, pleaseNote, url }) => {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dispatch = useDispatch();

  const handleRemoveFromFav = () => {
    const removeEvent: Event = {
        id, name, dates, images, info, pleaseNote, url
    };

    dispatch(removeFromCart(removeEvent));

  };

    return (
        <div>
            <Card sx={{ maxWidth: 345, margin: '20px'}}>

            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                    E
                </Avatar>
                }
                // action={
                // <IconButton aria-label="settings">
                //     <MoreVertIcon />
                // </IconButton>
                // }
                title={name}
                subheader= {dates.start.localDate}
            />
            {
                images.map((img: any, index: any) => {
                    if (index === 1){
                return ( <CardMedia
                        component="img"
                        height="194"
                        image={img.url}
                        alt="Paella dish"
                        /> )
                    }
            } )
            }

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                Tickets { dates.status.code}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {/* Timezone: */}
                {dates.timezone}
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="delete from favorites" onClick={handleRemoveFromFav}>
                <DeleteIcon />
                </IconButton>
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Info:</Typography>
                <Typography paragraph>
                        {pleaseNote}
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
        </div>
        
    )
 }

 export default EventCard;