import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles';

const Produto  = ({produto,  addToCart}) => {
    const classes = useStyles()
    return(
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={produto.image.url} title={produto.name}/>
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant="h5" gutterBottom>
                        {produto.name}
                    </Typography>
                    <Typography variant="h5">
                        {produto.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{__html: produto.description}} variant="body2"/>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Adicionar ao Carrinho" onClick = {() => addToCart(produto.id, 1)}> 
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Produto