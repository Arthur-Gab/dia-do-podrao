// prover o contexto e gerenciar/modificar
import { useReducer, createContext, useContext } from "react";

const CartContext = createContext([
	{
		id: "",
		name: "",
		price: 0,
		qtt: 0,
	},
]);
const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {
	const [state, dispatch] = useReducer(cartReducer, initialCartState);

	return (
		<CartContext.Provider value={state}>
			<CartDispatchContext.Provider value={dispatch}>
				{children}
			</CartDispatchContext.Provider>
		</CartContext.Provider>
	);
}

export function useCartContext() {
	const context = useContext(CartContext);

	if (context === undefined) {
		throw Error("Você está fora do escopo do CartContext");
	}

	return context;
}

export function useCartDispatchContext() {
	const context = useContext(CartDispatchContext);

	if (context === undefined) {
		throw Error("Você está fora do escopo do CartContext");
	}

	return context;
}

// Adicionar e Remover Itens do Carrinho
function cartReducer(curState, action) {
	switch (action.type) {
		// Adicionar item ao carrinho
		case "ADD_TO_CART": {
			const item = {
				id: action.id,
				name: action.name,
				price: action.price,
				qtt: 1,
			};

			const existingIndex = curState.findIndex(
				(existingItem) => existingItem.id === item.id
			);

			// Se o item já existir no state não adicionar
			if (existingIndex !== -1) {
				return curState;
			} else {
				const newState = [...curState, { ...item }];
				return newState;
			}
		}
		// Remover item do carrinho
		case "REMOVE": {
			const newState = curState.filter((item) => item.id !== action.item.id);
			return newState;
		}
		// Aumentar ou diminuir a quantidade do item no carrinho
		case "INCREASE_OR_DECREASE": {
			const newState = curState.map((item) => {
				if (item.id === action.item.id) {
					let qtt = item.qtt;

					if (action.operator === "increase") {
						qtt += 1;
					} else if (action.operator === "decrease") {
						if (qtt - 1 > 0) {
							qtt -= 1;
						}
					}

					return { ...item, qtt };
				}
				return item;
			});

			return newState;
		}
		default:
			return curState;
	}
}

const initialCartState = []; // Inicialize o carrinho vazio
