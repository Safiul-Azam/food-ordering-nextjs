import Banner from "../components/About/Banner";
import BurgerIdeas from "../components/About/BurgerIdeas";
import PromotionalVideo from "../components/About/PromotionalVideo";
import Quality from "../components/About/Quality";

function about() {
    return (
        <div>
            <Banner/>
            <BurgerIdeas/>
            <PromotionalVideo/>
            <Quality/>
        </div>
    );
}

export default about;