import React, { useEffect, useState } from "react";
import { commerce } from "./Lib/Commerce";
import {Produtos, NavBar} from "./Components"



const App = () => {
    const [produtos, setProdutos] = useState([])
    const [cart, setCart ] = useState({})


    const fetchProdutos = async () => {
        const {data} = await commerce.products.list()
        setProdutos(data)
    }

    const fetchCarrinho = async () => {
        setCart(await commerce.cart.retrieve()) 
    }
    
    const lidaCarrinho = async (produtoId, quantidade) => {
        
    setCart(await commerce.cart.add(produtoId, quantidade))
        
    }

    useEffect( () => {
        fetchProdutos()
        fetchCarrinho()
    }, [])
    

    return (
        <div>
            <NavBar totalItems={cart.total_items}/>
            <Produtos
             produtos={produtos}
            addToCart={lidaCarrinho}/>
        </div>
        
    )
}

export default App
