import Banner from "../../layout/Banner";
import AvailableFoodStuffs from "../AvailableFoodStuffs";
import Filters from "../Filters";
import { DUMMY_PRODUCTS } from "../../DUMMY_PRODUCTS.JS";
import { useReducer } from "react";

function FoodStuffs() {
	// Serve para controlar a se os botões Hamburguer, Bebidas, Combos, ALcoolico estão marcados
	const [state, dispatch] = useReducer(reduceBtnState, initialBtnState);

	/*
		o available vai definir se o AvailableFoodStuffs aparece de 2 formas:
		 - O estado do botão daquele AvailableFoodStuffs, exemplo, btn Hamburguer está ativado, a AvailableFoodStuffs dos Hamburguer aparece e 
		 as demais somente se seus respectivos botões também estiverem ativados (com X)
		 - Todos os AvailableFoodStuffs estão com seus botões desativados (sem X)
	*/
	const availableFoodStuffs = Object.entries(state).reduce((acc, cur) => {
		// cur = ['hamburguer', true]
		const [foodName, isAvailable] = cur;

		if (isAvailable) {
			acc.push(foodName); // Adiciona o nome da comida
		} else {
			const index = acc.indexOf(foodName);
			if (index !== -1) {
				acc.splice(index, 1); // Remove o nome da comida, se existir
			}
		}

		return acc;
	}, []);

	return (
		<div className="flex flex-col gap-12 mb-14">
			<Banner />

			<Filters
				onChangeBtnState={dispatch}
				btnState={state}
			/>

			{(availableFoodStuffs.length === 0) !==
				availableFoodStuffs.includes("hamburguers") && (
				<AvailableFoodStuffs
					content={DUMMY_PRODUCTS.hamburguers}
					label={"hamburguers"}
				/>
			)}

			{(availableFoodStuffs.length === 0) !==
				availableFoodStuffs.includes("bebidas") && (
				<AvailableFoodStuffs
					content={DUMMY_PRODUCTS.bebidas}
					label={"bebidas"}
				/>
			)}

			{(availableFoodStuffs.length === 0) !==
				availableFoodStuffs.includes("combos") && (
				<AvailableFoodStuffs
					content={DUMMY_PRODUCTS.combos}
					label={"combos"}
				/>
			)}

			{(availableFoodStuffs.length === 0) !==
				availableFoodStuffs.includes("alcoolico") && (
				<AvailableFoodStuffs
					content={DUMMY_PRODUCTS.alcoolico}
					label={"alcoólico"}
				/>
			)}
		</div>
	);
}

function reduceBtnState(curState, action) {
	switch (action.type) {
		case "TOGGLE_BTN_STATE": {
			const newState = Object.entries(curState).map((btn) => {
				// btn = ['hamburguer', false]
				if (btn[0] === action.label) {
					return [btn[0], !btn[1]];
				}

				return btn;
			});

			const newObj = Object.fromEntries(newState);

			return newObj;
		}
	}
}
const initialBtnState = {
	hamburguers: false,
	bebidas: false,
	combos: false,
	alcoolico: false,
};

export default FoodStuffs;
