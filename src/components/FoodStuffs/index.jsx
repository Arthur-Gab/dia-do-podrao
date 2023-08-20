import Banner from "../../layout/Banner";
import AvailableFoodStuffs from "../AvailableFoodStuffs";

function FoodStuffs() {
	return (
		<div className="flex flex-col gap-12">
			<Banner />
			<AvailableFoodStuffs />
		</div>
	);
}

export default FoodStuffs;
