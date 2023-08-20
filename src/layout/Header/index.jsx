import { LuDrumstick } from "react-icons/lu";
import HeaderCart from "../HeaderCart";

function Header(props) {
	return (
		<>
			<header className="bg-yellow fixed w-screen top-0 left-0 z-10">
				<div className="container mx-auto flex justify-between items-center p-4">
					<div className="flex gap-2 items-center">
						<LuDrumstick size={48} />
						<h1 className="text-2xl w-20 font-bold">Dia do Podrão</h1>
					</div>
					<HeaderCart showCart={props.showCart} />
				</div>
			</header>
		</>
	);
}

export default Header;
