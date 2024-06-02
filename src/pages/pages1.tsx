import '../App.css'
// Incons Import
import HomeIcon from '@mui/icons-material/Home';
import CampaignIcon from '@mui/icons-material/Campaign';
import DevicesIcon from '@mui/icons-material/Devices';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import InsightsIcon from '@mui/icons-material/Insights';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import ScreenRotationIcon from '@mui/icons-material/ScreenRotation';

// Top Bar Icons
import TopBarIcons from '../Group.png'
// Top Bar right Side Bar Icons
import CoinsImage from '../Top_RightSideBar_yellowIcon.png'
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import AddHomeIcon from '@mui/icons-material/AddHome';
import HumanFace from '../TopSideHumarFace.png'

// Second Bar
import SecondBarImage from '../SecondBarfirstImage.png'
import LockIcon from '@mui/icons-material/Lock';
import iconSecondBarContent from '../secondBarIconContent.png'
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { colors } from '@mui/material';

// Main Box
import faces from '../mainBoxFace.png'
import instagram from '../icons8-instagram-48.png'
import faceBook from '../icons8-facebook-48.png'
import Typography from '@mui/material/Typography';

const Pages1 = () => {
    const TopRightBardata = ['Mason xavier','Demo2','Demo3']
  return (
    <div className='flexContainer'>
    <div className='headerBox'>
         {/* <h1>Header</h1> */}
         <div className='HeaderFirstBox'>
            <div className='IoncsTopBar'>
               <img src={TopBarIcons} alt="yellow Image" height='30'/>
            </div>
            <div className='searchBar-Top'>
               <div className='searchBar_div'>
                     <input type="search" placeholder='..search' />
               </div>
            </div>
         </div>
         <div className='HeaderSecondBox'>
               <div className='Coins'>
                 {/* Box Set pannanum */}
                     <img src={CoinsImage} alt="yellow Image" height='30'/>
                     <p> 25,636coins</p>
               </div>
               <div className='Notification'>
                     <NotificationAddIcon/>
               </div>
               <div className='TopRightSideBar-Home'>
                 <AddHomeIcon/>
               </div>
               <div className='humanface_AutoComplete'>
                 <img src={HumanFace} alt="yellow Image" height='30'/>
                  <select className='dropDownSelect'>
                   {TopRightBardata.map((item)=>
                         <option value="item">{item}</option>
                   )}
                  </select>
               </div>
         </div>
     </div>
     <div className='MainBox'>
            {/* <h1>Main</h1> */}
            <div className='sideBar'>
                   <div className='sidebarIcons'>
                            <div className='SideBar-Box'><HomeIcon/></div>
                            <div className='SideBar-Box'><CampaignIcon/></div>
                            <div className='SideBar-Box'><DevicesIcon/></div>
                            <div className='SideBar-Box'><AnalyticsIcon/></div>
                            <div className='SideBar-Box'><InsightsIcon/></div>
                            <div className='SideBar-Box'><EventRepeatIcon/></div>
                            <div className='SideBar-Box'><ScreenRotationIcon/></div>
                   </div>
            </div>
             <div className='secondBar'>
                         <div className='SecondbarFirstImage'>
                             <img src={SecondBarImage} alt="yellow Image" width='390px' height = '200px' />
                         </div>
                         <div className='Head_wholeText'>
                                <div>
                                    <h2>Summer Campaign</h2>
                                </div>
                             <div className='lock_ContentText'>
                                    <div className='icon_header'><LockIcon/>Closed campaign</div>
                                    <div>Black mirror is a television series released by Netflix and it’s 6th season is here, the main objective of this campaign is to target millennial audiences who are into watching movies and TV series...</div>
                            </div>
                             
                         </div>
                         <div className='ThreeBox_Button'>
                                                    <div className='Text_Date'>
                                                        <div className='icons-text'>
                                                                <div className='textDate_container'>
                                                                        <div className='icons-bar2'>
                                                                            <img src={iconSecondBarContent} alt="yellow Image" width='' height='30' />
                                                                        </div>
                                                                        <div className='Contennt_date'>
                                                                            Applications deadline <br/>
                                                                            Feb 27, 2024 11:59 PM
                                                                        </div>
                                                                </div>
                                                                <div className='textDate_container'>
                                                                    <div className='icons-bar2'>
                                                                                <img src={iconSecondBarContent} alt="yellow Image" width='' height='30' />
                                                                        </div>
                                                                        <div className='Contennt_date'>
                                                                        Content submission deadline <br/>
                                                                        Feb 27, 2024 11:59 PM
                                                                        </div>
                                                                </div>
                                                                <div className='textDate_container'>
                                                                    <div className='icons-bar2'>
                                                                                <img src={iconSecondBarContent} alt="yellow Image" width='' height='30' />
                                                                        </div>
                                                                        <div className='Contennt_date'>
                                                                        Content go-live date <br/>
                                                                        Feb 27, 2024 11:59 PM
                                                                        </div>
                                                                </div>
                                                        
                                                        </div>
                                                </div>
                                            <div className='viewreportButton'>
                                                    <Button variant="contained" style = {{ backgroundColor: "#1F1F1F"}}>view Report</Button>
                                            </div> 
                                            <div className='loveheartPerson'>
                                                    <div className='loverHeartPreson_Container'>
                                                            <div className='HeartIcon'>
                                                                <FavoriteIcon/>
                                                            </div>
                                                            <div className='Content_lover'>
                                                                Total Application <br/> 
                                                                1 Creator
                                                            </div>
                                                        </div>
                                                        <div className='loverHeartPreson_Container'>
                                                            <div className='HeartIcon'>
                                                                <PersonIcon/>
                                                            </div>
                                                            <div className='Content_lover'>
                                                                ShortListed <br/> 
                                                                0 Creator
                                                            </div>
                                                        </div>
                                                        <div className='loverHeartPreson_Container'>
                                                            <div className='HeartIcon'>
                                                                <AccountBalanceIcon/>
                                                            </div>
                                                            <div className='Content_lover'>
                                                                Budget Exhausted <br/> 
                                                                0
                                                            </div>
                                                        </div>
                                            </div>
                                            <div className='shortListedBudget'>
                                                <div className='shortlIstedNudget_container'>
                                                        <div className='icons_shortLove'>
                                                            < FavoriteTwoToneIcon/>
                                                        </div>
                                                        <div className='shotlist'>
                                                            ShortListed <br/> 
                                                                40 Creators
                                                        </div>
                                                </div>
                                                <div className='shortlIstedNudget_container'>
                                                        <div className='icons_shortLove'>
                                                            < MonetizationOnTwoToneIcon/>
                                                        </div>
                                                        <div className='shotlist'>
                                                            OverAll Budget <br/> 
                                                                40K
                                                        </div>
                                                </div>
                                                <div className='shortlIstedNudget_container'>
                                                        <div className='icons_shortLove'>
                                                            < SearchTwoToneIcon/>
                                                        </div>
                                                        <div className='shotlist'>
                                                            OverAll Projection <br/> 
                                                                40K
                                                        </div>
                                                </div>
                                            </div>
                         </div>
                     
             </div>
             {/* next Box Main */}
            <div className='MainBar'>
                <div className='ButtonName_Creatos'>
                    <div className='Creator_div'>
                      <button type = "button" className='Creator_button'>
                         Creators
                      </button>
                      <text className='MediumContent'>Medium and Content</text>
                    </div>
                </div>
                <div className='searchBar_fillterButton'>
                        <div className='search_bar'>
                            <input type="search" placeholder='Search Creators' />
                        </div>
                        <div className='filer_sort_buttons'>
                            <Button variant="outlined" style = {{ color: "#1F1F1F"}} >Filters</Button> 
                            <Button variant="outlined" style = {{ color: "#1F1F1F"}} >Sort</Button> 
                        </div>
                </div>
                <div className='CloseApp_ListsData'>
                    <div className='Approved_Buttons'>
                            <div>All(64)</div>
                            <div>Inivited(64)</div>
                            <div>Pending Cost approval(64)</div>
                            <div>Approved(64)</div>
                    </div>
                    <div className='CloseApplication_button'>
                         <Button variant="contained" style = {{ backgroundColor: "#1F1F1F"}} >Close Application(14)</Button>
                    </div>
                   
                </div>
                <div className='mainBoxFlexdDesign'>
                                        <div className='MainBox_ListBox'>
                                            <div className='AlphaCreator'>
                                                <div className='image_content'>
                                                        <div className='faceimageSetting'>
                                                            <img src={faces} alt="face Image" height='60'/> 
                                                        </div>
                                                        <div className='FacesNames'>
                                                            Vincent Nate<br/> 
                                                                @anna
                                                        </div>
                                                </div>
                                                <div className='socialMediaIocns'>
                                                    <div className='flexIcons'>
                                                        <img src={faceBook} alt="face Image" height='40'/>
                                                        <img src={instagram} alt="face Image" height='40'/> 
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='Deleverables_Box'>
                                                <div className='DeleverablesFlex'>
                                                        <div className='Deleverables'>
                                                            <div>Deliverables</div>
                                                            <div>Instagram reel x 1</div>
                                                            <div>Youtube Sort</div>
                                                        </div>
                                                        <div className='behindHistory'>
                                                                <div>View biddding history</div>
                                                        </div>
                                                </div>
                                            <div className='Followers_Pending_flex'>
                                                        <div className='FolowersReach'>
                                                                <div className='FollowersData'>
                                                                    <div>Followers</div>
                                                                    <div>410K</div>
                                                                </div> 
                                                                <div className='FollowersData'>
                                                                    <div>Reach</div>
                                                                    <div>410K</div>
                                                                </div> 
                                                                <div className='FollowersData'>
                                                                    <div>views</div>
                                                                    <div>410K</div>
                                                                </div>  
                                                                <div className='FollowersData'>
                                                                    <div>Engagement</div>
                                                                    <div>410K</div>
                                                                </div> 
                                                                <div className='FollowersData'>
                                                                    <div>Last Bid</div>
                                                                    <div>410K</div>
                                                                </div> 
                                                        </div>
                                                        <div className='Payment'>
                                                                <div>most of the Payment Exepedited</div>
                                                                <div>Approved</div>
                                                        </div>
                                            </div>
                                                
                                            </div>
                                        </div>
                                        <div className='MainBox_ListBox'>
                                            <div className='AlphaCreator'>
                                                <div className='image_content'>
                                                        <div className='faceimageSetting'>
                                                            <img src={faces} alt="face Image" height='60'/> 
                                                        </div>
                                                        <div className='FacesNames'>
                                                            Vincent Nate<br/> 
                                                                @anna
                                                        </div>
                                                </div>
                                                <div className='socialMediaIocns'>
                                                    <div className='flexIcons'>
                                                        <img src={faceBook} alt="face Image" height='40'/>
                                                        <img src={instagram} alt="face Image" height='40'/> 
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='Deleverables_Box'>
                                                <div className='DeleverablesFlex'>
                                                        <div className='Deleverables'>
                                                            <div>Deliverables</div>
                                                            <div>Instagram reel x 1</div>
                                                            <div>Youtube Sort</div>
                                                        </div>
                                                        <div className='behindHistory'>
                                                                <div>View biddding history</div>
                                                        </div>
                                                </div>
                                            <div className='Followers_Pending_flex'>
                                                        <div className='FolowersReach'>
                                                                <div className='FollowersData'>
                                                                    <div>Followers</div>
                                                                    <div>410K</div>
                                                                </div> 
                                                                <div className='FollowersData'>
                                                                    <div>Reach</div>
                                                                    <div>410K</div>
                                                                </div> 
                                                                <div className='FollowersData'>
                                                                    <div>views</div>
                                                                    <div>410K</div>
                                                                </div>  
                                                                <div className='FollowersData'>
                                                                    <div>Engagement</div>
                                                                    <div>410K</div>
                                                                </div> 
                                                                <div className='FollowersData'>
                                                                    <div>Last Bid</div>
                                                                    <div>410K</div>
                                                                </div> 
                                                        </div>
                                                        <div className='Payment'>
                                                                <div>most of the Payment Exepedited</div>
                                                                <div>Approved</div>
                                                        </div>
                                            </div>
                                                
                                            </div>
                                        </div>
                                        <div className='MainBox_ListBox'>
                                            <div className='AlphaCreator'>
                                                <div className='image_content'>
                                                        <div className='faceimageSetting'>
                                                            <img src={faces} alt="face Image" height='60'/> 
                                                        </div>
                                                        <div className='FacesNames'>
                                                            Vincent Nate<br/> 
                                                                @anna
                                                        </div>
                                                </div>
                                                <div className='socialMediaIocns'>
                                                    <div className='flexIcons'>
                                                        <img src={faceBook} alt="face Image" height='40'/>
                                                        <img src={instagram} alt="face Image" height='40'/> 
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='Deleverables_Box'>
                                                <div className='DeleverablesFlex'>
                                                        <div className='Deleverables'>
                                                            <div>Deliverables</div>
                                                            <div>Instagram reel x 1</div>
                                                            <div>Youtube Sort</div>
                                                        </div>
                                                        <div className='behindHistory'>
                                                                <div>View biddding history</div>
                                                        </div>
                                                </div>
                                            <div className='Followers_Pending_flex'>
                                                        <div className='FolowersReach'>
                                                                <div className='FollowersData'>
                                                                    <div>Followers</div>
                                                                    <div>410K</div>
                                                                </div> 
                                                                <div className='FollowersData'>
                                                                    <div>Reach</div>
                                                                    <div>410K</div>
                                                                </div> 
                                                                <div className='FollowersData'>
                                                                    <div>views</div>
                                                                    <div>410K</div>
                                                                </div>  
                                                                <div className='FollowersData'>
                                                                    <div>Engagement</div>
                                                                    <div>410K</div>
                                                                </div> 
                                                                <div className='FollowersData'>
                                                                    <div>Last Bid</div>
                                                                    <div>410K</div>
                                                                </div> 
                                                        </div>
                                                        <div className='Payment'>
                                                                <div>most of the Payment Exepedited</div>
                                                                <div>Approved</div>
                                                        </div>
                                            </div>
                                                
                                            </div>
                                        </div>
                                        <div className='MainBox_ListBox'>
                                            <div className='AlphaCreator'>
                                                <div className='image_content'>
                                                        <div className='faceimageSetting'>
                                                            <img src={faces} alt="face Image" height='60'/> 
                                                        </div>
                                                        <div className='FacesNames'>
                                                            Vincent Nate<br/> 
                                                                @anna
                                                        </div>
                                                </div>
                                                <div className='socialMediaIocns'>
                                                    <div className='flexIcons'>
                                                        <img src={faceBook} alt="face Image" height='40'/>
                                                        <img src={instagram} alt="face Image" height='40'/> 
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='Deleverables_Box'>
                                                <div className='DeleverablesFlex'>
                                                        <div className='Deleverables'>
                                                            <div>Deliverables</div>
                                                            <div>Instagram reel x 1</div>
                                                            <div>Youtube Sort</div>
                                                        </div>
                                                        <div className='behindHistory'>
                                                                <div>View biddding history</div>
                                                        </div>
                                                </div>
                                            <div className='Followers_Pending_flex'>
                                                        <div className='FolowersReach'>
                                                                <div className='FollowersData'>
                                                                    <div>Followers</div>
                                                                    <div>410K</div>
                                                                </div> 
                                                                <div className='FollowersData'>
                                                                    <div>Reach</div>
                                                                    <div>410K</div>
                                                                </div> 
                                                                <div className='FollowersData'>
                                                                    <div>views</div>
                                                                    <div>410K</div>
                                                                </div>  
                                                                <div className='FollowersData'>
                                                                    <div>Engagement</div>
                                                                    <div>410K</div>
                                                                </div> 
                                                                <div className='FollowersData'>
                                                                    <div>Last Bid</div>
                                                                    <div>410K</div>
                                                                </div> 
                                                        </div>
                                                        <div className='Payment'>
                                                                <div>most of the Payment Exepedited</div>
                                                                <div>Approved</div>
                                                        </div>
                                            </div>
                                                
                                            </div>
                                        </div>
                </div>
                
            </div>
     </div>  
   </div>
  )
}

export default Pages1
