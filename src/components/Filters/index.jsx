import QuickFilter from "../../layout/QuickFilter";
import { LuSearch, LuX } from "react-icons/lu";

function Filters(props) {
	function getInputValue(e) {
		props.onSearchItem(e.target.value);
	}

	function onResetInputValue() {
		props.onSearchItem("");
	}

	return (
		<>
			<form
				className="flex max-w-5xl w-full mx-auto items-center"
				onReset={onResetInputValue}
			>
				<fieldset className="relative flex items-center pb-1 border-b-red border-b-2 w-full max-w-5xl mx-auto">
					<LuSearch
						size={24}
						className="text-red absolute left-1"
					/>
					<label
						htmlFor="searchFoods"
						className="sr-only"
					>
						Pesquisar ...
					</label>
					<input
						type="text"
						id="searchFoods"
						placeholder="Pesquisar ..."
						className="w-full text-lg pl-8 bg-transparent placeholder:text-white text-white font-bold"
						onChange={getInputValue}
						value={props.inputValue}
					/>
				</fieldset>
				<button
					className="text-red border-b-red border-b-2 px-2 p-1"
					type="reset"
					aria-label="Limpar valor"
				>
					<LuX
						size={24}
						aria-hidden={true}
						focusable={false}
					/>
				</button>
			</form>
			<div
				className="flex gap-2 overflow-x-auto pb-4 h-fit min-[519px]:justify-center sm:gap-4"
				tabIndex={-1}
				aria-label={"Pesquisa rápida"}
			>
				<QuickFilter
					label={"hamburguers"}
					btnState={props.availableFoodStuffs.includes("hamburguers")}
					onClick={props.onFilterSection}
				/>
				<QuickFilter
					label={"bebidas"}
					btnState={props.availableFoodStuffs.includes("bebidas")}
					onClick={props.onFilterSection}
				/>
				<QuickFilter
					label={"combos"}
					btnState={props.availableFoodStuffs.includes("combos")}
					onClick={props.onFilterSection}
				/>
				<QuickFilter
					label={"alcoolico"}
					btnState={props.availableFoodStuffs.includes("alcoolico")}
					onClick={props.onFilterSection}
				/>
			</div>
		</>
	);
}

export default Filters;
