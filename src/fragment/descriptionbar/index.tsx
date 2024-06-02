// Second Bar
import SecondBarImage from "./../../assets/images/SecondBarfirstImage.png";
import LockIcon from "@mui/icons-material/Lock";
import iconSecondBarContent from "./../../assets/images/secondBarIconContent.png";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

const DescriptionBar = () => {
  return (
    <div className="descriptionbar">
      <div className="descriptionImage">
        <img
          src={SecondBarImage}
          alt="yellow Image"
          width="390px"
          height="200px"
        />
      </div>
      <div className="Head_wholeText">
        <div>
          <h2>Summer Campaign</h2>
        </div>
        <div className="lock_ContentText">
          <div className="icon_header">
            <LockIcon />
            Closed campaign
          </div>
          <div>
            Black mirror is a television series released by Netflix and it’s 6th
            season is here, the main objective of this campaign is to target
            millennial audiences who are into watching movies and TV series...
          </div>
        </div>
      </div>
      <div className="ThreeBox_Button">
        <div className="Text_Date">
          <div className="icons-text">
            <div className="textDate_container">
              <div className="icons-bar2">
                <img
                  src={iconSecondBarContent}
                  alt="yellow Image"
                  width=""
                  height="30"
                />
              </div>
              <div className="Contennt_date">
                Applications deadline <br />
                Feb 27, 2024 11:59 PM
              </div>
            </div>
            <div className="textDate_container">
              <div className="icons-bar2">
                <img
                  src={iconSecondBarContent}
                  alt="yellow Image"
                  width=""
                  height="30"
                />
              </div>
              <div className="Contennt_date">
                Content submission deadline <br />
                Feb 27, 2024 11:59 PM
              </div>
            </div>
            <div className="textDate_container">
              <div className="icons-bar2">
                <img
                  src={iconSecondBarContent}
                  alt="yellow Image"
                  width=""
                  height="30"
                />
              </div>
              <div className="Contennt_date">
                Content go-live date <br />
                Feb 27, 2024 11:59 PM
              </div>
            </div>
          </div>
        </div>
        <div className="viewreportButton">
          <Button variant="contained" style={{ backgroundColor: "#1F1F1F" }}>
            view Report
          </Button>
        </div>
        <div className="loveheartPerson">
          <div className="loverHeartPreson_Container">
            <div className="HeartIcon">
              <FavoriteIcon />
            </div>
            <div className="Content_lover">
              Total Application <br />1 Creator
            </div>
          </div>
          <div className="loverHeartPreson_Container">
            <div className="HeartIcon">
              <PersonIcon />
            </div>
            <div className="Content_lover">
              ShortListed <br />0 Creator
            </div>
          </div>
          <div className="loverHeartPreson_Container">
            <div className="HeartIcon">
              <AccountBalanceIcon />
            </div>
            <div className="Content_lover">
              Budget Exhausted <br />0
            </div>
          </div>
        </div>
        <div className="shortListedBudget">
          <div className="shortlIstedNudget_container">
            <div className="icons_shortLove">
              <FavoriteTwoToneIcon />
            </div>
            <div className="shotlist">
              ShortListed <br />
              40 Creators
            </div>
          </div>
          <div className="shortlIstedNudget_container">
            <div className="icons_shortLove">
              <MonetizationOnTwoToneIcon />
            </div>
            <div className="shotlist">
              OverAll Budget <br />
              40K
            </div>
          </div>
          <div className="shortlIstedNudget_container">
            <div className="icons_shortLove">
              <SearchTwoToneIcon />
            </div>
            <div className="shotlist">
              OverAll Projection <br />
              40K
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBar;
