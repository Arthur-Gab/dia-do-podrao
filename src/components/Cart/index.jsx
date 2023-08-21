import Modal from "../../UI/Modal";
import { LuArrowRight, LuX } from "react-icons/lu";
import OrderedItem from "../../layout/OrderedItem";
import { useCartContext } from "../../context/CartContext";

const burguerItem = {
	name: "Clássico Cheeseburger",
	description:
		"Pão de hambúrguer, carne de boi, queijo cheddar, alface, tomate, cebola, molho especial.",
	price: 12.99,
};

function Cart(props) {
	const cartState = useCartContext();
	// debugger;
	const cartItems = cartState.map((item) => (
		<OrderedItem
			key={item.id}
			name={item.name}
			price={item.price}
			qtt={item.qtt}
		/>
	));

	const cartTotal = cartState.reduce((acc, cur) => {
		return (acc = acc + cur.price * cur.qtt);
	}, 0);

	return (
		<Modal onClick={props.closeCart}>
			{/* Dialog Header */}
			<div className="relative rounded-t bg-yellow py-4 text-center">
				<h2 className="text- inline text-2xl font-bold uppercase underline decoration-red decoration-4">
					Meus Pedidos
				</h2>
				<button
					className="absolute right-0 top-0 p-4"
					aria-label="Fechar Carrinho de compras"
					onClick={props.closeCart}
				>
					<LuX
						size={32}
						strokeWidth={2.5}
					/>
				</button>
			</div>

			{/* Lista de Itens que o cliente deseja comprar */}
			<ul className="my-8 flex flex-col gap-6 px-10">{cartItems}</ul>

			{/* Total da compra */}
			<div className="rounded-b bg-yellow py-4 text-2xl font-bold text-red">
				<button
					className="mx-auto flex items-center w-full justify-center"
					aria-label={`Finalizar Pedido - Valor Total: R$ 53,95`}
					type="button"
				>
					<span
						className="mr-4"
						aria-label="Valor total do pedido"
					>
						TOTAL:
						<span className="text-black ml-2">R$ {cartTotal}</span>
					</span>
					<LuArrowRight
						size={32}
						strokeWidth={2.5}
						aria-hidden={true}
					/>
				</button>
			</div>
		</Modal>
	);
}

export default Cart;
