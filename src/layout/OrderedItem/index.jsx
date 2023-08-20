import { FaMinus, FaPlus } from "react-icons/fa";

const OrderedItem = (props) => {
	return (
		<li className="list-none border-b-2 border-red pb-4 text-lg text-white">
			<div className="mb-2 flex justify-between text-left">
				<p>{props.name}</p>
				<strong className="text-stroke text-right text-yellow">
					{props.price.toFixed(2)}
				</strong>
			</div>

			<div className="flex justify-between px-4">
				<button
					className="text-white-a6"
					aria-label="Remover item do carrinho"
				>
					Remover
				</button>
				<div className="flex items-center rounded border px-2 py-1 border-white-a6">
					<button aria-label="Diminuir a quantidade do item">
						<FaMinus className="text-yellow" />
					</button>
					<span
						className="px-1"
						aria-label="Quantidade do item"
					>
						1
					</span>
					<button aria-label="Aumentar a quantidade do item">
						<FaPlus className="text-yellow" />
					</button>
				</div>
			</div>
		</li>
	);
};

export default OrderedItem;
