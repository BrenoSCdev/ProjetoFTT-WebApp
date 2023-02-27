import React from "react";
import { Grid } from "@material-ui/core";
import Produto from "./Produto/produto";
import useStyles from "./style"

const Produtos = ({produtos, addToCart}) => {
    const classes = useStyles()
    return(
        <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
            {produtos.map((produto) => (
                <Grid item key={produto.id} xs={12} sm={6} md={4} lg={3}>
                    <Produto produto={produto} addToCart={addToCart}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )
    
}
export default Produtos