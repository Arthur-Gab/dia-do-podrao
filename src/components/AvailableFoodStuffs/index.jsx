import FoodItem from "../../layout/FoodItem";

const DUMMY_BURGUERS = [
	{
		name: "Clássico Cheeseburger",
		description:
			"Pão de hambúrguer, carne de boi, queijo cheddar, alface, tomate, cebola, molho especial.",
		price: 12.99,
	},
	{
		name: "Hambúrguer Vegano",
		description:
			"Pão vegano, hambúrguer de grão-de-bico, queijo vegano, alface, tomate, cebola, molho vegano.",
		price: 10.99,
	},
	{
		name: "Hambúrguer Duplo Bacon",
		description:
			"Pão de hambúrguer, 2 carnes de boi, queijo cheddar, bacon, alface, cebola, molho especial.",
		price: 15.99,
	},
	{
		name: "Hambúrguer Frango Grelhado",
		description:
			"Pão de hambúrguer, peito de frango grelhado, queijo suíço, alface, tomate, cebola roxa, molho de mostarda e mel.",
		price: 13.49,
	},
	{
		name: "Hambúrguer de Picanha",
		description:
			"Pão de hambúrguer, carne de picanha, queijo provolone, rúcula, cebola caramelizada, molho de barbecue.",
		price: 16.99,
	},
	{
		name: "Hambúrguer Vegetariano de Abóbora",
		description:
			"Pão integral, hambúrguer de abóbora, queijo feta, espinafre, cebola roxa, molho de iogurte.",
		price: 11.99,
	},
];

function AvailableFoodStuffs() {
	const foodStuffsList = DUMMY_BURGUERS.map((item) => (
		<FoodItem>{item.name}</FoodItem>
	));

	return (
		<section
			className="mb-14 flex flex-col"
			aria-label={`Seção de Hamburgueres`}
		>
			<h2 className="mb-12 w-fit self-center border-b-4 border-b-red text-2xl font-bold uppercase dark:text-white">
				Hamburgueres
			</h2>
			<ul
				aria-label="Lista de produtos"
				className="lg:grid lg:grid-cols-2 lg:justify-items-center 2xl:grid-cols-3"
			>
				{foodStuffsList}
			</ul>
		</section>
	);
}

export default AvailableFoodStuffs;
