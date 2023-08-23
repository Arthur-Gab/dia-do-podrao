import { FaMinus, FaPlus } from "react-icons/fa";
import { useCartDispatchContext } from "../../context/CartContext";

const OrderedItem = (props) => {
	const dispatch = useCartDispatchContext();

	function handlerRemoveItemFromCart() {
		dispatch({
			type: "REMOVE",
			item: props.item,
		});
	}

	function handlerIncreaseQuantity() {
		dispatch({
			type: "INCREASE_OR_DECREASE",
			item: props.item,
			operator: "increase",
		});
	}

	function handlerDecreaseQuantity() {
		dispatch({
			type: "INCREASE_OR_DECREASE",
			item: props.item,
			operator: "decrease",
		});
	}

	return (
		<li className="list-none border-b-2 border-red pb-4 text-lg dark:text-white text-black">
			<div className="mb-2 flex justify-between text-left">
				<p>{props.item.name}</p>
				<strong className="text-stroke text-right text-yellow-secondary dark:text-yellow">
					{props.item.price.toFixed(2)}
				</strong>
			</div>

			<div className="flex justify-between px-4">
				<button
					className="dark:text-white-a6 text-black-63 hover:text-red ease-in duration-300 transition-colors"
					aria-label="Remover item do carrinho"
					onClick={handlerRemoveItemFromCart}
				>
					Remover
				</button>
				<div className="flex items-center rounded border px-2 py-1 border-white-a6">
					<button
						onClick={handlerDecreaseQuantity}
						aria-label="Diminuir a quantidade do item"
					>
						<FaMinus className="text-yellow-secondary dark:text-yellow" />
					</button>
					<span
						className="px-1"
						aria-label="Quantidade do item"
					>
						{props.item.qtt}
					</span>
					<button
						onClick={handlerIncreaseQuantity}
						aria-label="Aumentar a quantidade do item"
					>
						<FaPlus className="text-yellow-secondary dark:text-yellow" />
					</button>
				</div>
			</div>
		</li>
	);
};

export default OrderedItem;
