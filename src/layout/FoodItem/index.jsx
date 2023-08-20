import burguer from "../../assets/img/burguer.jpg";
import { FaShoppingBasket } from "react-icons/fa";

function FoodItem(props) {
	return (
		<li className="mb-8 list-none md:max-w-md max-lg:mx-auto">
			<div className="mb-4 flex gap-4">
				<div className="flex-auto">
					<h3 className="mb-4 inline-block border-b-2 font-bold border-b-white text-white">
						Clássico Cheeseburger
					</h3>
					<p className="text-sm text-white-f2">
						Pão de hambúrguer, carne de boi, queijo cheddar, alface, tomate,
						cebola, molho especial
					</p>
				</div>
				<img
					alt="Representação do Item"
					src={burguer}
					className="w-32 self-start justify-self-end rounded sm:w-44"
				/>
			</div>
			<button
				className="border-blacks flex w-full justify-center gap-4 rounded border-4 px-4 py-2 font-bold border-red-secondary bg-white text-red-secondary"
				aria-label="Adicionar item ao carrinho de compras"
			>
				<FaShoppingBasket
					size={24}
					aria-hidden={true}
				/>
				<span aria-label="Preço">R$ 12.99</span>
			</button>
		</li>
	);
}

export default FoodItem;
