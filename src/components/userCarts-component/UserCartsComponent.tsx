import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {ICart, ICartResponse} from "../../models/CartsModel.ts";
import {CartComponent} from "../cart-component/CartComponent.tsx";
import {cartService} from "../../services/api.service.ts";

export const UserCartsComponent = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        if(id){
            cartService.getUserCarts(id)
                .then((value:ICartResponse) => setCarts(value.carts));
        }
    }, [id]);
    return (
        <div>
            {
                carts.map(cart => <CartComponent key={cart.id} cart={cart}/>)
            }
        </div>
    );
};