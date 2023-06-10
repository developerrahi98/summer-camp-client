import Banner from "../../Banner/Banner";
import ExtraSection from "../../ExtraSection/ExtraSection";
import PopularClasses from "../../PopularClasses/PopularClasses";
import Teachers from "../../Teachers/Teachers";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <ExtraSection></ExtraSection>
            <Teachers></Teachers>
        </div>
    );
};

export default Home;