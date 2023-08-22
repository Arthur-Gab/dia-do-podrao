import { useState } from "react";
import Banner from "../../layout/Banner";
import AvailableFoodStuffs from "../AvailableFoodStuffs";
import Filters from "../Filters";
import { DUMMY_PRODUCTS } from "../../DUMMY_PRODUCTS.JS";

function FoodStuffs() {
	// Serve para controlar a se os botões Hamburguer, Bebidas, Combos, ALcoolico estão marcados
	const [availableFoodStuffs, setAvailableFoodStuffs] = useState([]);

	/*
		o available vai definir se o AvailableFoodStuffs aparece de 2 formas:
		 - O estado do botão daquele AvailableFoodStuffs, exemplo, btn Hamburguer está ativado, a AvailableFoodStuffs dos Hamburguer aparece e 
		 as demais somente se seus respectivos botões também estiverem ativados (com X)
		 - Todos os AvailableFoodStuffs estão com seus botões desativados (sem X)
	*/

	function handlerAddOrRemoveAvailableFoods(label) {
		const newState = availableFoodStuffs.includes(label)
			? availableFoodStuffs.filter((item) => item !== label)
			: [...availableFoodStuffs, label];

		setAvailableFoodStuffs(newState);
	}

	return (
		<div className="flex flex-col gap-12 mb-14">
			<Banner />

			<Filters
				onChangeAvailableFoodStuffs={handlerAddOrRemoveAvailableFoods}
				availableFoodStuffs={availableFoodStuffs}
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

export default FoodStuffs;
