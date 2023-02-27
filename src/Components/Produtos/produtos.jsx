import React from "react";
import { Grid } from "@material-ui/core";
import Produto from "../Produto/produto";


const produtos = [
    {id:1, nome: 'Fonte Redragon RGPS', descricao: '500W Bronze 80 Plus, GC-PS001', preco: 'R$299,00', imagem: 'https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/r/g/rgps500w3.jpg'},
    {id:2, nome: 'Processador Intel Core i5', descricao: '10400F, 6-Core, 12 Threads', preco: '698,80$', imagem: 'https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/b/x/bx8070110400f_1.jpg'}
]

const Produtos = () => {

    return(
        <main>
        <Grid container justify="center" spacing={4}>
            {produtos.map((produto) => (
                <Grid item key={produto.id} xs={12} sm={6} md={4} lg={3}>
                    <Produto produto={produto}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )
    
}
export default Produtos