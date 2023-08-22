import FoodItem from "../../layout/FoodItem";

function AvailableFoodStuffs(props) {
	const foodItemsList = props.content.map((item) => (
		<FoodItem
			key={item.id}
			item={item}
		/>
	));

	return (
		<section
			className="flex flex-col"
			aria-labelledby={props.label}
		>
			<h2
				className="mb-12 w-fit self-center border-b-4 border-b-red text-2xl font-bold uppercase dark:text-white"
				id={props.label}
			>
				{props.label}
			</h2>
			<ul
				aria-label="Lista de produtos"
				className="lg:grid lg:grid-cols-2 lg:justify-items-center 2xl:grid-cols-3"
			>
				{foodItemsList}
			</ul>
		</section>
	);
}

export default AvailableFoodStuffs;
