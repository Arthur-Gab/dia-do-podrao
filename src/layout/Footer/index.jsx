import { AiFillFacebook } from "react-icons/ai";
import { LuDrumstick } from "react-icons/lu";
import { SiIfood, SiInstagram } from "react-icons/si";

function Footer() {
	// Só pra impedir o reload caso seja clicado no link
	const handlerOnClick = (e) => {
		e.preventDefault();
	};

	return (
		<footer className="dark:bg-yellow bg-black-24">
			<div className="container mx-auto flex flex-col gap-6 p-4 dark:text-black text-white">
				<header className="flex items-center justify-between gap-2 dark:text-black text-yellow">
					<div className="flex gap-2 items-center">
						<LuDrumstick size={48} />
						<h1 className="text-2xl w-20 font-bold">Dia do Podrão</h1>
					</div>
					<ul className="flex max-w-lg justify-end max-sm:gap-4 sm:gap-8">
						<li>
							<a
								href="#"
								arget="_blank"
								onClick={handlerOnClick}
							>
								<SiInstagram size={32} />
							</a>
						</li>
						<li>
							<a
								href="#"
								arget="_blank"
								onClick={handlerOnClick}
							>
								<AiFillFacebook size={32} />
							</a>
						</li>
						<li>
							<a
								href="#"
								arget="_blank"
								onClick={handlerOnClick}
							>
								<SiIfood size={32} />
							</a>
						</li>
					</ul>
				</header>
				<article>
					<h2 className="mb-4 inline-block border-b-2 dark:border-b-red border-b-yellow">
						HORÁRIO DE FUNCIONAMENTO:
					</h2>
					<ul className="space-y-2 pl-4">
						<li className="custom-listItem">Seg-Sex: 16h00 ás 23h00</li>
						<li className="custom-listItem">Sab: 18h00 ás 00h00</li>
					</ul>
				</article>
				<article>
					<h2 className="mb-4 inline-block border-b-2 dark:border-b-red border-b-yellow">
						LOCALIZAÇÃO:
					</h2>
					<ul className="space-y-2 pl-4">
						<li className="custom-listItem">
							Av. Guarapari, 1234 - Santa Amelia, Belo Horizonte - MG, 31560-300
						</li>
					</ul>
				</article>
				<address
					className="text-center text-xs brightness-90"
					title="Veja meu linkedin"
				>
					<a
						href="https://www.linkedin.com/in/art2354/"
						target="_blank"
						className="relative group"
					>
						© 2023 Arthur Gabriel. Todos os direitos reservados.
						<span className="absolute -bottom-1 w-0 -translate-x-2/4 left-2/4 dark:bg-red bg-yellow h-[2px] z-0 group-hover:animate-line-grow"></span>
					</a>
				</address>
			</div>
		</footer>
	);
}

export default Footer;
