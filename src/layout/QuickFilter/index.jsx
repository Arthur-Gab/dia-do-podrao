import { LuX } from "react-icons/lu";

function QuickFilter(props) {
	function handlerAvailableFoodStuffs() {
		props.onClick(props.label);
	}

	return (
		<button
			aria-labelledby={props.label}
			className={`text-black w-fit px-4 py-2 rounded-full uppercase font-bold flex items-center gap-2 transition ${
				props.btnState ? "bg-white" : "bg-yellow-secondary"
			}`}
			tabIndex={0}
			aria-checked={props.btnState}
			onClick={handlerAvailableFoodStuffs}
		>
			{props.btnState && <LuX size={24} />}
			<span id={props.label}>{props.label}</span>
		</button>
	);
}

export default QuickFilter;