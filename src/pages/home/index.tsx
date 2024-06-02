import Header from "../../fragment/header";
import SideBar from "../../fragment/sidebar";
import DescriptionBar from "../../fragment/descriptionbar";
import CreatorDashboard from "../../fragment/creatordashboard";

const Home = () => {
  return (
    <div className="flexContainer">
      <Header />
      <div className="MainBox">
        <SideBar />
        <DescriptionBar />
        <CreatorDashboard />
      </div>
    </div>
  );
};

export default Home;
