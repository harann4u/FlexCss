import './App.css'

// Incons Import
import HomeIcon from '@mui/icons-material/Home';
import CampaignIcon from '@mui/icons-material/Campaign';
import DevicesIcon from '@mui/icons-material/Devices';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import InsightsIcon from '@mui/icons-material/Insights';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import ScreenRotationIcon from '@mui/icons-material/ScreenRotation';


// Top Bar Icons
import TopBarIcons from './Group.png'
// Top Bar right Side Bar Icons
import CoinsImage from './Top_RightSideBar_yellowIcon.png'
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import AddHomeIcon from '@mui/icons-material/AddHome';
import HumanFace from './TopSideHumarFace.png'

// Second Bar
import SecondBarImage from './SecondBarfirstImage.png'
import LockIcon from '@mui/icons-material/Lock';
import iconSecondBarContent from './secondBarIconContent.png'
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

const pages1 = () => {
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
               <form action="">
                 <input type="text" placeholder='..search' />
               </form>
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
                  <select>
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
                             <img src={SecondBarImage} alt="yellow Image" width='420px' height = '300px' />
                         </div>
                         <div className='Head_wholeText'>
                             <h2>Summer Campaign</h2>
                             <div><LockIcon/>Closed campaign</div>
                             <div>Black mirror is a television series released by Netflix and it’s 6th season is here, the main objective of this campaign is to target millennial audiences who are into watching movies and TV series...</div>
                         </div>
                       <div className='Text_Date'>
                             <div className='icons-text'>
                                       <div className='textDate_container'>
                                           <div className='icons-bar2'>
                                                     <img src={iconSecondBarContent} alt="yellow Image" width='' height='30' />
                                             </div>
                                             <div className='Content-bar2'>
                                             Applications deadline <br/>
                                             Feb 27, 2024 11:59 PM
                                             </div>
                                       </div>
                                       <div className='textDate_container'>
                                           <div className='icons-bar2'>
                                                     <img src={iconSecondBarContent} alt="yellow Image" width='' height='30' />
                                             </div>
                                             <div className='Content-bar2'>
                                             Content submission deadline <br/>
                                             Feb 27, 2024 11:59 PM
                                             </div>
                                       </div>
                                       <div className='textDate_container'>
                                           <div className='icons-bar2'>
                                                     <img src={iconSecondBarContent} alt="yellow Image" width='' height='30' />
                                             </div>
                                             <div className='Content-bar2'>
                                             Content go-live date <br/>
                                             Feb 27, 2024 11:59 PM
                                             </div>
                                       </div>
                               
                             </div>
                       </div>
                  <div className='viewreportButton'>
                          <Button variant="contained">view Report</Button>
                   </div> 
                   <div className='loveheartPerson'>
                           <div className='loverHeartPreson_Container'>
                                 <div className='HeartIcon'>
                                       <FavoriteIcon/>
                                   </div>
                                   <div className='Content-bar2'>
                                       Total Application <br/> 
                                       1 Creator
                                   </div>
                             </div>
                             <div className='loverHeartPreson_Container'>
                                 <div className='HeartIcon'>
                                       <PersonIcon/>
                                   </div>
                                   <div className='Content-bar2'>
                                       ShortListed <br/> 
                                       0 Creator
                                   </div>
                             </div>
                             <div className='loverHeartPreson_Container'>
                                 <div className='HeartIcon'>
                                       <AccountBalanceIcon/>
                                   </div>
                                   <div className='Content-bar2'>
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
                             <div className='Content-bar2'>
                                   ShortListed <br/> 
                                     40 Creators
                             </div>
                       </div>
                       <div className='shortlIstedNudget_container'>
                             <div className='icons_shortLove'>
                                   < MonetizationOnTwoToneIcon/>
                             </div>
                             <div className='Content-bar2'>
                                   OverAll Budget <br/> 
                                     40K
                             </div>
                       </div>
                       <div className='shortlIstedNudget_container'>
                             <div className='icons_shortLove'>
                                   < SearchTwoToneIcon/>
                             </div>
                             <div className='Content-bar2'>
                                   OverAll Projection <br/> 
                                     40K
                             </div>
                       </div>
                   </div>
             </div>
             {/* next Box Main */}
            <div className='MainBar'>Mainn Bar</div>
     </div>  
   </div>
  )
}

export default pages1
