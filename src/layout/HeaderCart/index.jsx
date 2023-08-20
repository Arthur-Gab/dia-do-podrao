import { LuShoppingCart } from "react-icons/lu";

function HeaderCart(props) {
	return (
		<button
			onClick={props.showCart}
			className="bg-red flex gap-2 px-4 py-2 rounded items-center border-black border-4"
		>
			<LuShoppingCart size={24} />
			<span className="font-bold">R$ 56.89</span>
		</button>
	);
}

export default HeaderCart;
