import ReactDOM from "react-dom";

function Backdrop(props) {
	return (
		<div
			aria-hidden={true}
			className="fixed top-0 left-0 w-screen h-screen z-40 bg-backdrop"
			// Reservado para quando se desejar fechar o Modal ao Clicar fora
			onClick={props.onClick}
		/>
	);
}

function ModalOverlay(props) {
	return (
		<div
			role="dialog"
			aria-modal={true}
			className="fixed top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 z-50 w-11/12 bg-black-24 max-w-2xl rounded"
		>
			{props.children}
		</div>
	);
}

const portalElement = document.querySelector("#overlays");

function Modal(props) {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClick={props.onClick} />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</>
	);
}

export default Modal;
