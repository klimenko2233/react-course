import type {ICart} from "../../models/CartsModel.ts";
import type {FC} from "react";

interface CartComponentProps {
    cart: ICart
}

export const CartComponent:FC<CartComponentProps> = ({cart}) => {
    return (
        <div>
            {cart.discountedTotal} $
        </div>
    );
};