import burguer from "../../assets/img/burguer.jpg";
import { FaShoppingBasket } from "react-icons/fa";
import { useCartDispatchContext } from "../../context/CartContext";

function FoodItem(props) {
	const dispatch = useCartDispatchContext();

	function addItemToCart() {
		dispatch({
			type: "ADD_TO_CART",
			id: props.item.id,
			name: props.item.name,
			price: props.item.price,
		});
	}

	return (
		<li className="mb-8 list-none md:max-w-md w-full max-lg:mx-auto flex flex-col justify-between dark:text-white text-black">
			<div className="mb-4 flex gap-4">
				<div className="flex-auto">
					<h3 className="mb-4 inline-block border-b-2 font-bold dark:border-b-white border-b-black ">
						{props.item.name}
					</h3>
					<p className="text-sm dark:text-white-f2 text-black-1e">
						{props.item.description}
					</p>
				</div>
				<img
					alt="Representação do Item"
					src={burguer}
					className="w-32 self-start justify-self-end rounded sm:w-44"
				/>
			</div>
			<button
				className="border-blacks flex w-full justify-center gap-4 rounded border-4 px-4 py-2 font-bold dark:border-red-secondary dark:bg-white dark:text-red-secondary bg-red btn-animation"
				aria-label="Adicionar item ao carrinho de compras"
				onClick={addItemToCart}
			>
				<FaShoppingBasket
					size={24}
					aria-hidden={true}
				/>
				<span aria-label="Preço">R$ {props.item.price.toFixed(2)}</span>
			</button>
		</li>
	);
}

export default FoodItem;
