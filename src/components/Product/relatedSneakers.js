import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: '#daae51',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function RelatedSneakers({id}) {
    const [relatedSneakers,setRelatedSneakers] = useState([])
    useEffect(() => {
    axios
        .get(
            `https://heir-shoes-be.herokuapp.com/reccommended_sneakers/${id}`)
        .then((response) => {
            let shoes = response.data
            shoes = shoes.filter(sneak => (
              sneak.retailPrice !== null
            ))
            shoes = shoes.filter(sneak => (
              sneak.media.imageUrl !== null
            ))
          setRelatedSneakers(shoes)
          console.log(response.data.results)
        })
    },[id])
    const classes = useStyles();
    return (
        <div style={{"overflow-y":"scroll"}}>
         
        <GridList className={classes.gridList} cols={2.5}>
        {relatedSneakers.map((sneaker) => (
            
          <GridListTile key={sneaker.id} >
<Link to={`/product/${sneaker.id}`} >
 <div >
            <img src={sneaker.media.imageUrl} alt={sneaker.title} />
            <GridListTileBar
              title={sneaker.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${sneaker.title}`}>
                </IconButton>
              }
            />
            </div>
            </Link>
          </GridListTile>
          
        ))}
      </GridList>
      </div>
    )
            }
