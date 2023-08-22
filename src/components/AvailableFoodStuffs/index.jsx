import FoodItem from "../../layout/FoodItem";
import { LuSearch } from "react-icons/lu";

function AvailableFoodStuffs(props) {
	/* 
	Retornar somente os itens que possuem o nome ou description
	igual ao valor do input, caso este tenha no minimo 1 caracter
	*/
	// props.content.map((item) => (
	// 	<FoodItem
	// 		key={item.id}
	// 		item={item}
	// 	/>
	// ));
	const foodItemsList = props.content
		.filter((item) => {
			if (props.getSearchedItem.length === 0) {
				return item;
			} else {
				// Se a drescrição ou nome tiver o valor digitado
				// retornar o item
				if (
					item.description
						.toLowerCase()
						.includes(props.getSearchedItem.toLowerCase()) ||
					item.name.toLowerCase().includes(props.getSearchedItem.toLowerCase())
				) {
					return item;
				}
			}
		})
		.map((item) => (
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
				className={`${
					foodItemsList.length > 0
						? "lg:grid lg:grid-cols-2 lg:justify-items-center 2xl:grid-cols-3"
						: "items-center flex flex-col gap-4 text-white-a6 font-bold  sm:text-lg max-sm:text-base"
				}`}
			>
				{foodItemsList.length === 0 && (
					<>
						<h3>Infelizmente, não possuimos o item que você procura...</h3>
						<LuSearch size={48} />
					</>
				)}
				{foodItemsList}
			</ul>
		</section>
	);
}

export default AvailableFoodStuffs;
