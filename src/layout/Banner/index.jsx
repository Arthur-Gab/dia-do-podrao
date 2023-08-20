import banner from "../../assets/img/banner.jpg";

function Banner() {
	return (
		<figure className="relative z-0 mx-auto h-52 max-w-[992px] flex items-center justify-center overflow-hidden rounded border-yellow border-4">
			<img
				src={banner}
				alt="Delicios Hamburguer Desmontado"
				className="rotate-90 brightness-75"
			/>
			<h2 className="text-white text-2xl absolute text-center font-bold">
				BOM DIA SR(A) CLIENTE
				<br />
				PEÇA JÁ O SEU PODRÃO DO DIA !!!
			</h2>
		</figure>
	);
}

export default Banner;
