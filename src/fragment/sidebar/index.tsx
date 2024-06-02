// Incons Import
import HomeIcon from "@mui/icons-material/Home";
import CampaignIcon from "@mui/icons-material/Campaign";
import DevicesIcon from "@mui/icons-material/Devices";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import InsightsIcon from "@mui/icons-material/Insights";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import ScreenRotationIcon from "@mui/icons-material/ScreenRotation";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sidebarIcons">
        <div className="SideBar-Box">
          <HomeIcon />
        </div>
        <div className="SideBar-Box">
          <CampaignIcon />
        </div>
        <div className="SideBar-Box">
          <DevicesIcon />
        </div>
        <div className="SideBar-Box">
          <AnalyticsIcon />
        </div>
        <div className="SideBar-Box">
          <InsightsIcon />
        </div>
        <div className="SideBar-Box">
          <EventRepeatIcon />
        </div>
        <div className="SideBar-Box">
          <ScreenRotationIcon />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
