export const DUMMY_PRODUCTS = {
	hamburguers: [
		{
			id: "burguer_1",
			name: "Clássico Cheeseburger",
			description:
				"Pão de hambúrguer, carne de boi, queijo cheddar, alface, tomate, cebola, molho especial.",
			price: 12.99,
		},
		{
			id: "burguer_2",
			name: "Hambúrguer Vegano",
			description:
				"Pão vegano, hambúrguer de grão-de-bico, queijo vegano, alface, tomate, cebola, molho vegano.",
			price: 10.99,
		},
		{
			id: "burguer_3",
			name: "Hambúrguer Duplo Bacon",
			description:
				"Pão de hambúrguer, 2 carnes de boi, queijo cheddar, bacon, alface, cebola, molho especial.",
			price: 15.99,
		},
		{
			id: "burguer_4",
			name: "Hambúrguer Frango Grelhado",
			description:
				"Pão de hambúrguer, peito de frango grelhado, queijo suíço, alface, tomate, cebola roxa, molho de mostarda e mel.",
			price: 13.49,
		},
		{
			id: "burguer_5",
			name: "Hambúrguer de Picanha",
			description:
				"Pão de hambúrguer, carne de picanha, queijo provolone, rúcula, cebola caramelizada, molho de barbecue.",
			price: 16.99,
		},
		{
			id: "burguer_6",
			name: "Hambúrguer Vegetariano de Abóbora",
			description:
				"Pão integral, hambúrguer de abóbora, queijo feta, espinafre, cebola roxa, molho de iogurte.",
			price: 11.99,
		},
	],
	bebidas: [
		{
			id: "bebidas_1",
			name: "Coca Cola",
			description:
				"Famosa Coca Cola gelada, perfeita para acompanhar seu hambúrguer favorito.",
			price: 5.0,
		},
		{
			id: "bebidas_2",
			name: "Limonada Natural",
			description:
				"Limonada feita na hora, com limões frescos e um toque de hortelã.",
			price: 6.5,
		},
		{
			id: "bebidas_3",
			name: "Milkshake de Chocolate",
			description:
				"Milkshake cremoso de chocolate, coberto com chantilly e raspas de chocolate.",
			price: 7.0,
		},
		{
			id: "bebidas_4",
			name: "Pepsi",
			description:
				"Bebida gaseificada sabor cola, perfeita para acompanhar seu hambúrguer.",
			price: 4.0,
		},
		{
			id: "bebidas_5",
			name: "Suco de Laranja Natural",
			description:
				"Suco fresco e natural de laranja, cheio de vitaminas e refrescância.",
			price: 5.5,
		},
		{
			id: "bebidas_6",
			name: "Água Mineral com Gás",
			description:
				"Água mineral com gás, uma opção simples e revigorante para acompanhar sua refeição.",
			price: 3.0,
		},
	],
	combos: [
		{
			id: "combo_1",
			name: "Clássico Cheeseburger + Coca Cola",
			description:
				"Delicie-se com o sabor do Clássico Cheeseburger, acompanhado pela icônica Coca Cola gelada. Uma combinação que satisfaz todos os gostos.",
			hamburguer: "Clássico Cheeseburger",
			bebida: "Coca Cola",
			price: (12.99 + 5.0) * 0.9,
		},
		{
			id: "combo_2",
			name: "Hambúrguer Vegano + Limonada Natural",
			description:
				"Saboreie o Hambúrguer Vegano, preparado com cuidado e acompanhado pela refrescante Limonada Natural. Uma opção saudável e saborosa.",
			hamburguer: "Hambúrguer Vegano",
			bebida: "Limonada Natural",
			price: (10.99 + 6.5) * 0.9,
		},
		{
			id: "combo_3",
			name: "Hambúrguer Duplo Bacon + Pepsi",
			description:
				"Aprecie o sabor ousado do Hambúrguer Duplo Bacon, combinado com a refrescante Pepsi. Uma explosão de sabores e energia.",
			hamburguer: "Hambúrguer Duplo Bacon",
			bebida: "Pepsi",
			price: (15.99 + 4.0) * 0.9,
		},
		{
			id: "combo_4",
			name: "Hambúrguer Frango Grelhado + Suco de Laranja Natural",
			description:
				"Desfrute da suculência do Hambúrguer Frango Grelhado, acompanhado pelo frescor do Suco de Laranja Natural. Uma combinação equilibrada e deliciosa.",
			hamburguer: "Hambúrguer Frango Grelhado",
			bebida: "Suco de Laranja Natural",
			price: (13.49 + 5.5) * 0.9,
		},
		{
			id: "combo_5",
			name: "Hambúrguer de Picanha + Milkshake de Chocolate",
			description:
				"Experimente o Hambúrguer de Picanha, realçado pelo sabor cremoso do Milkshake de Chocolate. Uma fusão de sabores irresistível.",
			hamburguer: "Hambúrguer de Picanha",
			bebida: "Milkshake de Chocolate",
			price: (16.99 + 7.0) * 0.9,
		},
		{
			id: "combo_6",
			name: "Hambúrguer Vegetariano de Abóbora + Água Mineral com Gás",
			description:
				"Aproveite o sabor único do Hambúrguer Vegetariano de Abóbora, acompanhado pela pureza da Água Mineral com Gás. Uma escolha leve e refrescante.",
			hamburguer: "Hambúrguer Vegetariano de Abóbora",
			bebida: "Água Mineral com Gás",
			price: (11.99 + 3.0) * 0.9,
		},
	],
	alcoolico: [
		{
			id: "bebida_alcoolica_1",
			name: "Margarita",
			description:
				"Clássico coquetel à base de tequila, licor de laranja e suco de limão.",
			price: 8.5,
		},
		{
			id: "bebida_alcoolica_2",
			name: "Martini Dry",
			description: "Elegante coquetel de gim e vermute seco, com uma azeitona.",
			price: 9.0,
		},
		{
			id: "bebida_alcoolica_3",
			name: "Mojito",
			description:
				"Refrescante coquetel cubano à base de rum branco, hortelã e limão.",
			price: 7.5,
		},
		{
			id: "bebida_alcoolica_4",
			name: "Cosmopolitan",
			description:
				"Coquetel sofisticado com vodka, licor de laranja, suco de cranberry e limão.",
			price: 8.75,
		},
		{
			id: "bebida_alcoolica_5",
			name: "Caipirinha",
			description:
				"Tradicional coquetel brasileiro com cachaça, limão e açúcar.",
			price: 6.25,
		},
		{
			id: "bebida_alcoolica_6",
			name: "Piña Colada",
			description:
				"Coquetel tropical à base de rum, suco de abacaxi e leite de coco.",
			price: 7.0,
		},
	],
};
