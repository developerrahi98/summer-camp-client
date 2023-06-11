import Banner from "../../Banner/Banner";
import ExtraSection from "../../ExtraSection/ExtraSection";
import PopularClasses from "../../PopularClasses/PopularClasses";
import Teachers from "../../Teachers/Teachers";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>JAM ACADEMY | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <ExtraSection></ExtraSection>
      <Teachers></Teachers>
    </div>
  );
};

export default Home;
