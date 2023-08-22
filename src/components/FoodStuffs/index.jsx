import { useState } from "react";
import Banner from "../../layout/Banner";
import AvailableFoodStuffs from "../AvailableFoodStuffs";
import Filters from "../Filters";
import { DUMMY_PRODUCTS } from "../../DUMMY_PRODUCTS.JS";

function FoodStuffs() {
	// Serve para controlar a se os botões Hamburguer, Bebidas, Combos, ALcoolico estão marcados
	const [availableFoodStuffs, setAvailableFoodStuffs] = useState([]);
	const [serachedItem, setSearchedItem] = useState("");
	/*
		o availableFoodStuffs - State, vai definir se o <AvailableFoodStuffs/> aparece de 2 formas:
		 - O estado do botão daquele <AvailableFoodStuffs/>, exemplo, btn Hamburguer está ativado, a <AvailableFoodStuffs/> dos Hamburguer aparece e 
		 as demais somente se seus respectivos botões também estiverem ativados (com X)
		 - Todos os <AvailableFoodStuffs/> estão com seus botões desativados (sem X)
	*/

	function handlerSetInputValue(enteredValue) {
		setSearchedItem(enteredValue);
	}

	function handlerFilterSection(label) {
		// label definido pelo nome do QuickFilter
		const newState = availableFoodStuffs.includes(label)
			? availableFoodStuffs.filter((item) => item !== label)
			: [...availableFoodStuffs, label];

		setAvailableFoodStuffs(newState);
	}

	return (
		<div className="flex flex-col gap-12 mb-14">
			<Banner />

			<Filters
				onFilterSection={handlerFilterSection}
				onSearchItem={handlerSetInputValue}
				availableFoodStuffs={availableFoodStuffs}
				inputValue={serachedItem}
			/>

			{(availableFoodStuffs.length === 0) !==
				availableFoodStuffs.includes("hamburguers") && (
				<AvailableFoodStuffs
					content={DUMMY_PRODUCTS.hamburguers}
					getSearchedItem={serachedItem}
					label={"hamburguers"}
				/>
			)}

			{(availableFoodStuffs.length === 0) !==
				availableFoodStuffs.includes("bebidas") && (
				<AvailableFoodStuffs
					content={DUMMY_PRODUCTS.bebidas}
					getSearchedItem={serachedItem}
					label={"bebidas"}
				/>
			)}

			{(availableFoodStuffs.length === 0) !==
				availableFoodStuffs.includes("combos") && (
				<AvailableFoodStuffs
					content={DUMMY_PRODUCTS.combos}
					getSearchedItem={serachedItem}
					label={"combos"}
				/>
			)}

			{(availableFoodStuffs.length === 0) !==
				availableFoodStuffs.includes("alcoolico") && (
				<AvailableFoodStuffs
					content={DUMMY_PRODUCTS.alcoolico}
					getSearchedItem={serachedItem}
					label={"alcoólico"}
				/>
			)}
		</div>
	);
}

export default FoodStuffs;
