import faces from "./../../assets/images/mainBoxFace.png";
import instagram from "./../../assets/images/icons8-instagram-48.png";
import faceBook from "./../../assets/images/icons8-facebook-48.png";
import { Chip } from "@mui/material";
const CreatorList = () => {
  const Creators = [
    {
      name: "Vincent Nate",
      instaid: "@annan",
      deliverables1: "Instagram reel x 1",
      deliverables2: "Youtube Short",
      followers: "410K",
      reach: "3M",
      views: "3.4K",
      engagement: "3.4K",
      lastbid: "₹22.4K",
    },
    {
      name: "Terry Mango",
      instaid: "@annan",
      deliverables1: "Instagram reel x 1",
      deliverables2: "Youtube Short",
      followers: "410K",
      reach: "3M",
      views: "3.4K",
      engagement: "3.4K",
      lastbid: "₹22.4K",
    },
    {
      name: "Terry Mango",
      instaid: "@annan",
      deliverables1: "Instagram reel x 1",
      deliverables2: "Youtube Short",
      followers: "410K",
      reach: "3M",
      views: "3.4K",
      engagement: "3.4K",
      lastbid: "₹22.4K",
    },
    {
      name: "Terry Mango",
      instaid: "@annan",
      deliverables1: "Instagram reel x 1",
      deliverables2: "Youtube Short",
      followers: "410K",
      reach: "3M",
      views: "3.4K",
      engagement: "3.4K",
      lastbid: "₹22.4K",
    },
  ];
  return Creators.map((creator) => {
    return (
      <>
        <div className="MainBox_ListBox">
          <div className="AlphaCreator">
            <div className="image_content">
              <div className="faceimageSetting">
                <img src={faces} alt="face Image" height="60" />
              </div>
              <div className="createinfo">
                <div className="FacesNames">{creator.name}</div>
                <div className="creatorinsta">{creator.instaid}</div>
              </div>
            </div>
            <div className="socialMediaIocns">
              <div className="flexIcons">
                <img src={instagram} alt="face Image" height="40" />
                <img src={faceBook} alt="face Image" height="40" />
              </div>
            </div>
          </div>
          <div className="Deleverables_Box">
            <div className="creatordetailsinfo">
              <div className="Followers_Pending_flex">
                <div className="FolowersReach">
                  <div className="Deleverables">
                    <div>Deliverables</div>
                    <div>{creator.deliverables1}</div>
                    <div>{creator.deliverables2}</div>
                  </div>
                  <div className="FollowersData">
                    <div>Followers</div>
                    <div>{creator.followers}</div>
                  </div>
                  <div className="FollowersData">
                    <div>Reach</div>
                    <div>{creator.reach}</div>
                  </div>
                  <div className="FollowersData">
                    <div>views</div>
                    <div>{creator.views}</div>
                  </div>
                  <div className="FollowersData">
                    <div>Engagement</div>
                    <div>{creator.engagement}</div>
                  </div>
                  <div className="FollowersData">
                    <div>Last Bid</div>
                    <div>{creator.lastbid}</div>
                  </div>
                </div>
              </div>
              <div className="creatorStatus">
                <div className="bidinghistory">
                  <u>View bidding history</u>
                </div>
                <div className="payments">
                  <div className="payments-info">
                    <span>Mod of payment</span>
                    <span> Standard</span>
                  </div>
                  <div className="payments">
                    <Chip color="success" label="Approved"></Chip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });
};

export default CreatorList;
