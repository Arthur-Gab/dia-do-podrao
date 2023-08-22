import QuickFilter from "../../layout/QuickFilter";

function Filters(props) {
	return (
		<div className="flex gap-2 overflow-x-auto pb-4 h-fit min-[519px]:justify-center sm:gap-4">
			<QuickFilter
				label={"hamburguers"}
				onClick={props.onChangeBtnState}
				btnState={props.btnState.hamburguers}
			/>
			<QuickFilter
				label={"bebidas"}
				onClick={props.onChangeBtnState}
				btnState={props.btnState.bebidas}
			/>
			<QuickFilter
				label={"combos"}
				onClick={props.onChangeBtnState}
				btnState={props.btnState.combos}
			/>
			<QuickFilter
				label={"alcoolico"}
				onClick={props.onChangeBtnState}
				btnState={props.btnState.alcoolico}
			/>
		</div>
	);
}

export default Filters;
