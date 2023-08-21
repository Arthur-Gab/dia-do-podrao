import { LuShoppingCart } from "react-icons/lu";
import { useCartContext } from "../../context/CartContext";

function HeaderCart(props) {
	const cartState = useCartContext();

	const cartTotal = cartState.reduce((acc, cur) => {
		return (acc = acc + cur.price * cur.qtt);
	}, 0);

	return (
		<button
			onClick={props.showCart}
			className="bg-red flex gap-2 px-4 py-2 rounded items-center border-black border-4"
		>
			<LuShoppingCart size={24} />
			<span className="font-bold">R$ {cartTotal}</span>
		</button>
	);
}

export default HeaderCart;
