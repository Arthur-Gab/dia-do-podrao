import QuickFilter from '../../layout/QuickFilter';
import { LuSearch, LuX } from 'react-icons/lu';

function Filters(props) {
	function getInputValue(e) {
		props.onSearchItem(e.target.value);
	}

	function onResetInputValue(e) {
		props.onSearchItem('');
	}

	return (
		<section aria-label="Filtros">
			<form
				className="flex max-w-5xl w-full mx-auto items-center mb-6"
				onReset={onResetInputValue}
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<fieldset className="relative flex items-center pb-1 border-b-red border-b-2 w-full max-w-5xl mx-auto">
					<LuSearch
						size={24}
						className="text-red absolute left-1"
					/>
					<label
						htmlFor="searchFoods"
						className="sr-only"
					>
						Pesquisar ...
					</label>
					<input
						type="text"
						id="searchFoods"
						placeholder="Pesquisar ..."
						className="w-full text-lg pl-8 bg-transparent dark:placeholder:text-white dark:text-white font-bold text-black placeholder:text-black"
						onChange={getInputValue}
						value={props.inputValue}
					/>
				</fieldset>
				<button
					className="text-red border-b-red border-b-2 px-2 p-1"
					type="reset"
					aria-label="Limpar valor"
				>
					<LuX
						size={24}
						aria-hidden={true}
						focusable={false}
					/>
				</button>
			</form>
			<div
				className="flex gap-2 max-[528px]:overflow-x-scroll pb-4 h-fit min-[519px]:justify-center sm:gap-4 scrollbar-filter"
				tabIndex={-1}
				aria-label={'Pesquisa rápida'}
			>
				<QuickFilter
					label={'hamburguers'}
					btnState={props.availableFoodStuffs.includes('hamburguers')}
					onClick={props.onFilterSection}
				/>
				<QuickFilter
					label={'bebidas'}
					btnState={props.availableFoodStuffs.includes('bebidas')}
					onClick={props.onFilterSection}
				/>
				<QuickFilter
					label={'combos'}
					btnState={props.availableFoodStuffs.includes('combos')}
					onClick={props.onFilterSection}
				/>
				<QuickFilter
					label={'alcoolico'}
					btnState={props.availableFoodStuffs.includes('alcoolico')}
					onClick={props.onFilterSection}
				/>
			</div>
		</section>
	);
}

export default Filters;
