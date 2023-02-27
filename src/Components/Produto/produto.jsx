import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles';

const Produto  = ({produto}) => {
    const classes = useStyles()
    return(
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={produto.imagem} title={produto.name}/>
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant="h5" gutterBottom>
                        {produto.nome}
                    </Typography>
                    <Typography variant="h5">
                        {produto.preco}
                    </Typography>
                </div>
                <Typography variant="body2" color="Secondary">
                    {produto.descricao}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className="classes.cardActions">
                <IconButton aria-label="Adicionar ao Carrinho">
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Produto