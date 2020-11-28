import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter as Router,Link,NavLink,Route,Redirect} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    marginLeft:'20%' ,
    marginRight:'10%' ,
    marginTop : '10px',
    marginBottom:'10px'   

    
  },
  media: {
    height:  200,
  },
  cat:{
   marginLeft:'10%' ,
   marginRight:'10%' ,
   marginTop : '10px',
   marginBottom:'10px'


  }
});

 const MediaCard =  (props)=>{
  const classes = useStyles();

  function string_to_slug (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaaeeeeiiiioooouuuunc------";

    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}
   const url =  props.title && string_to_slug (props.title)

  return (
    <div className={classes.cat}>

    <Card className={classes.root}>
      {
        props.foraddress ?  
        <Link to={{
          pathname:`/address/${props.payload_id}`,
          search: `${props.payload_id}` 
        }}>
        <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.nationality}
          <br/>
          {props.payload_mass_kg}
          <br/>
          {props.orbit}
      </Typography><span>{props.payload_id}</span>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.manufacturer}
          </Typography>
        </CardContent>
      </CardActionArea> </Link>     :   
 <Link to={{
  pathname:`/history/${url}`,
  search: `${props.id}` 
}}>
<CardActionArea>
<CardContent>
  <Typography gutterBottom variant="h5" component="h2">
  {props.title}
  <br/>
  {props.event_date_utc}
  <br/>
  {props.flight_number}
  </Typography>
  <Typography variant="body2" color="textSecondary" component="p">
  {props.details}
  </Typography>
</CardContent>
</CardActionArea>    </Link>

      }
      
    </Card>
    
    </div>
  );
}
export default MediaCard;