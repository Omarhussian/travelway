import React from "react";
import {Box,Typography,Button,Card,CardContent,CardMedia,CardActions,Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/LocationOn';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';
const PlaceDetails = ({place , selected,refProp }) => {
    if(selected) refProp?.current?.scrollIntoView({behavior: 'smooth' , block:"start"});
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
                <Rating  value={Number(place.rating )} readOnly/>
                    <Typography gutterBottom variant='subtitle1' color='textSecondary'>
                        {place.num_reviews} reviews
                    </Typography>
                </Box>
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
                    <Box my={1} display='flex' justifyContent='space-between' key={i}>
                        <img src ={award.images.small} alt={award.display_name} />
                        <Typography variant='subtitle2' color='textSecondary'>{award.display_name}</Typography>
                    </Box>
                ))}
               {place?.cuisine?.map(({name})=>(
                   <Chip label={name} key={name} size="small" className={classes.chip} />
               ))}
            </CardContent>
            {place?.address && (
                <Typography gutterBottom variant='subtitle2' color="textSecondary" className={classes.subtitle}>
                    <LocationOnIcon  /> {place.address}
                </Typography>

            )}
            {place?.phone && (
                <Typography gutterBottom variant='subtitle2' color="textSecondary" className={classes.spacing}>
                   <PhoneIcon /> {place.phone}
                </Typography>

            )}
            <CardActions>
                <Button size="small" color="primary" onClick={()=>window.open(place.web_url,'_blank')}>
                    Tripadvisor
                </Button>
                <Button size="small" color="primary" onClick={()=>window.open(place.website,'_blank')}>
                    Website
                </Button>

            </CardActions>
        </Card>
        )
}
export default PlaceDetails;
