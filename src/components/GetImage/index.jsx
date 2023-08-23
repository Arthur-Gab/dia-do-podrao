import { useState } from "react";

function GetImage({ img, className }) {
	const [imgSrc, setImgSrc] = useState(null);

	import(`../../assets/img/${img}.jpg`)
		.then((image) => {
			setImgSrc(image.default);
		})
		.catch((err) => console.error("Erro ao carregar imagem: ", err));

	if (!imgSrc) {
		return <div>Imagem não encontrada</div>;
	}

	return (
		<img
			className={className}
			src={imgSrc}
			alt={`Imagem ilustrativa do(a) ${img}`}
		/>
	);
}

export default GetImage;
