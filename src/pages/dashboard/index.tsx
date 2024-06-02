import CreatorDashboard from "../../fragment/creatordashboard";
import Header from "../../fragment/header";
import SideBar from "../../fragment/sidebar";

const Dashboard = () => {
  return (
    <div className="flexContainer">
      <Header />
      <div className="MainBox">
        <SideBar />
        {/* <Creator /> */}
      </div>
    </div>
  );
};
export default Dashboard;
