import React from "react";
import {Box,Typography,Button,Card,CardContent,CardMedia,CardActions,Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/LocationOn';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';
const PlaceDetails = ({place}) => {
    const classes   = useStyles();
    return (
        <Card elevation={6}>
            <CardMedia
            style={{height:350}}
            image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
            title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>
                    {place.name}
                </Typography>
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant='subtitle1' color='textSecondary'>
                        price
                    </Typography>
                    <Typography gutterBottom variant='subtitle1' color='textSecondary'>
                        {place.price_level}
                    </Typography>
                </Box>
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant='subtitle1' color='textSecondary'>
                        Ranking
                    </Typography>
                    <Typography gutterBottom variant='subtitle1' color='textSecondary'>
                        {place.ranking}
                    </Typography>
                </Box>
                {place?.awards?.map((award,i)=>(
                    <Box display='flex' justifyContent='space-between' key={i}>
                        <img src ={award.images.small} alt={award.display_name} />
                    </Box>
                ))}
            </CardContent>
            
        </Card>
        )
}
export default PlaceDetails;
