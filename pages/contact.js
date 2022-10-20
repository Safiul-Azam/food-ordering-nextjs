import ForVisit from "../components/Contact/ForVisit";
import Banner from "../components/Contact/Banner";
import ContactInfo from "../components/Contact/ContactInfo";
import MapForm from "../components/Contact/MapForm";

function contact() {
    return (
        <div>
            <Banner/>
            <ForVisit/>
            <ContactInfo/>
            <MapForm/>
        </div>
    );
}

export default contact;