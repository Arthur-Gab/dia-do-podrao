import { LuShoppingCart } from "react-icons/lu";
import { useCartContext } from "../../context/CartContext";

function HeaderCart(props) {
	const cartState = useCartContext();

	const cartTotal = cartState.reduce((acc, cur) => {
		return (acc = acc + cur.price * cur.qtt);
	}, 0);

	return (
		<button
			onClick={props.openCart}
			className="bg-white flex gap-2 px-4 py-2 rounded items-center border-red-secondary text-red-secondary transition border-4 hover:scale-110 delay-100 ease-in-out duration-300"
		>
			<LuShoppingCart size={24} />
			<span className="font-bold">R$ {cartTotal.toFixed(2)}</span>
		</button>
	);
}

export default HeaderCart;
