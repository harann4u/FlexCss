// Top Bar Icons
import TopBarIcons from "./../../assets/images/Group.png";
// Top Bar right Side Bar Icons
import CoinsImage from "./../../assets/images/Top_RightSideBar_yellowIcon.png";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import AddHomeIcon from "@mui/icons-material/AddHome";
import HumanFace from "./../../assets/images/TopSideHumarFace.png";

const Header = () => {
  const TopRightBardata = ["Mason xavier", "Demo2", "Demo3"];
  return (
    <div className="headerBox">
      {/* <h1>Header</h1> */}
      <div className="HeaderFirstBox">
        <div className="IoncsTopBar">
          <img src={TopBarIcons} alt="yellow Image" height="30" />
        </div>
        <div className="searchBar-Top">
          <form action="">
            <input type="text" placeholder="..search" />
          </form>
        </div>
      </div>
      <div className="HeaderSecondBox">
        <div className="Coins">
          {/* Box Set pannanum */}
          <img src={CoinsImage} alt="yellow Image" height="30" />
          <p> 25,636coins</p>
        </div>
        <div className="Notification">
          <NotificationAddIcon />
        </div>
        <div className="TopRightSideBar-Home">
          <AddHomeIcon />
        </div>
        <div className="humanface_AutoComplete">
          <img src={HumanFace} alt="yellow Image" height="30" />
          <select className="dropDownSelect">
            {TopRightBardata.map((item) => (
              <option value="item">{item}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
