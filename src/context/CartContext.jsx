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
		// Adicionar
		case "ADD": {
			const item = {
				id: action.id,
				name: action.name,
				price: action.price,
				qtt: 1,
			};

			const existingIndex = curState.findIndex(
				(existingItem) => existingItem.id === item.id
			);

			// Se o item já existir no state aumentar a qtt em 1
			if (existingIndex !== -1) {
				const newState = [...curState];
				newState[existingIndex].qtt += 1;
				console.log(curState);
				return newState;
			} else {
				const newState = [...curState, { ...item }];
				console.log(curState);
				return newState;
			}
		}
		default:
			return curState;
	}
}

const initialCartState = []; // Inicialize o carrinho vazio
