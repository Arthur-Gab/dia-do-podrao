import { useState } from "react";
import Cart from "./components/Cart";
import FoodStuffs from "./components/FoodStuffs";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { CartProvider } from "./context/CartContext";

function App() {
	const [isCartShow, setIsCartShow] = useState(false);

	function handlerCartShow() {
		setIsCartShow(!isCartShow);
	}

	return (
		<CartProvider>
			{isCartShow && <Cart closeCart={handlerCartShow} />}
			<Header showCart={handlerCartShow} />
			<main className="container mx-auto px-4 mt-32">
				<FoodStuffs />
			</main>
			<Footer />
		</CartProvider>
	);
}

export default App;
