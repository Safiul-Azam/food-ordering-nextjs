import Banner from "../components/About/Banner";
import BurgerIdeas from "../components/About/BurgerIdeas";
import ClientSay from "../components/About/ClientSay";
import PromotionalVideo from "../components/About/PromotionalVideo";
import Quality from "../components/About/Quality";

function about() {
    return (
        <div>
            <Banner/>
            <BurgerIdeas/>
            <PromotionalVideo/>
            <Quality/>
            <ClientSay/>
        </div>
    );
}

export default about;