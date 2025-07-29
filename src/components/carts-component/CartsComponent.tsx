import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {ICart} from "../../models/ICartModel.ts";
import {CartService} from "../../services/general.api.service.ts";
import {CartComponent} from "../cart-component/CartComponent.tsx";

export const CartsComponent = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        if(id) {
            CartService.getUserCarts(id).then((data) => setCarts(data.carts))
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