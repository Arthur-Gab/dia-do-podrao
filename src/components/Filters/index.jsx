import QuickFilter from "../../layout/QuickFilter";

function Filters(props) {
	return (
		<div className="flex gap-2 overflow-x-auto pb-4 h-fit min-[519px]:justify-center sm:gap-4">
			<QuickFilter
				label={"hamburguers"}
				btnState={props.availableFoodStuffs.includes("hamburguers")}
				onClick={props.onChangeAvailableFoodStuffs}
			/>
			<QuickFilter
				label={"bebidas"}
				btnState={props.availableFoodStuffs.includes("bebidas")}
				onClick={props.onChangeAvailableFoodStuffs}
			/>
			<QuickFilter
				label={"combos"}
				btnState={props.availableFoodStuffs.includes("combos")}
				onClick={props.onChangeAvailableFoodStuffs}
			/>
			<QuickFilter
				label={"alcoólico"}
				btnState={props.availableFoodStuffs.includes("alcoolico")}
				onClick={props.onChangeAvailableFoodStuffs}
			/>
		</div>
	);
}

export default Filters;
