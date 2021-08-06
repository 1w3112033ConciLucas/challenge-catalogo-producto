import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import {Link} from 'react-router-dom';
//import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import {IconButton} from '@material-ui/core';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    margin: "0.2rem",   
  },
  category: {
      display: "flex",
      backgroundColor: "#FF0000", 
      color: "#FFF0F0",
      width: "-webkit-max-content",
      height: "2rem",
      fontWeight: "bolder",
      justifyContent: "center",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      marginTop:"-2rem",
      alignItems: "center",
      //zIndex: "-1",
  },
  dt: {
    display:"flex",
      flexDirection:"column",
      backgroundColor: "#FF0000!important",
      color: "#FFF0F0",
      width: "-webkit-max-content",
      height: "3rem",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      marginTop:"0.5rem",
      textAlign:"center",
      fontSize: "0.7rem",
      fontWeight: "bolder",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "100%",
      margin: "auto",
      marginRight: "0.3rem",
      //padding: "0.5rem",
      //marginBottom: "-3.5rem",
  },
  image:{
    height: "15rem",
    backgroundSize: '100%',
    marginTop: "-3.5rem",
  },
  imgContainer:{
    display: "flexGrow",
    //backgroundColor: "#FF0000",
  },
  description: {
    height: 65,
    display: '-webkit-box',
    //whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    //WebkitLineClamp: 3,
  }
});

export default function ProductCard({createdAt, title, category, description, tags, image, link, id}) {
    const classes = useStyles();

    let date = new Date(createdAt);

    let months = ["Ene", "Feb", 'Mar', "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

    let day = date.getDate();
    let month = months[date.getMonth()];
    
    let dateShow = [ day, month ];
  return (
    <Card className={classes.root}>
        <div className={classes.imgContainer}>
              <div className={classes.dt} >
                <div  className={classes.dt}>
                  {dateShow[0]}
                  <br/>
                  {dateShow[1]}
                </div> 
              </div>      
            <div 
            className={classes.image} 
            style={{ 
                backgroundImage: `url(${image})`, 
            }}>
            </div>
            <div className={classes.category} >
                {category}
            </div>
        </div>
     
        <CardContent style={{maxHeight: "3rem", marginBottom: "5rem"}}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
            <div style={{ display:"flex", flexDirection:"row" }}>
                
                <FolderOpenIcon style={{ color:'#FF0000', justifyContent: "flex-start", marginBottom:"1rem", marginTop:"1rem" }}/>
                
                <Typography style={{ color:'#FF0000', justifyContent: "flex-start",  alignSelf: "center"}}>
                    {tags}
                </Typography>
            </div>    
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
            {description}
          </Typography>
        </CardContent>
      <CardActions style={{ justifyContent: "flex-end", marginTop: "5rem", alignItems: "flex-end"}}>
        {/* <Link to={link}> */}
            <Button href={link} size="small" style={{backgroundColor: "#FF0000", color: "#FFF0F0", marginTop: "7rem"}}>
                Read More
            </Button>
        {/* </Link> */}
      </CardActions>
    </Card>
  );
}