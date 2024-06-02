import Button from "@mui/material/Button";
// Main Box

import CreatorList from "../creatorlist";

const CreatorDashboard = () => {
  return (
    <div className="MainBar">
      <div className="ButtonName_Creatos">
        <div className="Creator_div">
          <button type="button" className="Creator_button">
            Creators
          </button>
          <text className="MediumContent">Medium and Content</text>
        </div>
      </div>
      <div className="searchBar_fillterButton">
        <div className="search_bar">
          <input type="search" placeholder="Search Creators" />
        </div>
        <div className="filer_sort_buttons">
          <Button variant="outlined" style={{ color: "#1F1F1F" }}>
            Filters
          </Button>
          <Button variant="outlined" style={{ color: "#1F1F1F" }}>
            Sort
          </Button>
        </div>
      </div>
      <div className="CloseApp_ListsData">
        <div className="Approved_Buttons">
          <div>All(64)</div>
          <div>Inivited(64)</div>
          <div>Pending Cost approval(64)</div>
          <div>Approved(64)</div>
        </div>
        <div className="CloseApplication_button">
          <Button variant="contained" style={{ backgroundColor: "#1F1F1F" }}>
            Close Application(14)
          </Button>
        </div>
      </div>
      <div className="mainBoxFlexdDesign">
        <CreatorList />
      </div>
    </div>
  );
};

export default CreatorDashboard;
