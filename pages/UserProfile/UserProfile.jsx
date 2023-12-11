import './UserProfile.css'
import UserPNavbar from './UserPNavbar';
import userBackWhite from '../../assets/images/user-back-white.png';
import UserFront from '../../assets/images/user-pic.png';
import UserRightIcon from '../../assets/images/big-chack.png';
import InstagramIcon from '../../assets/images/instagram.png';
import FacebookIcon from '../../assets/images/facebook.png';
import TwitterIcon from '../../assets/images/twitter.png';
import MsgDarkIcon from '../../assets/images/msgicondark.png';
import UserCards from './UserCards';

const UserProfile = () => {
  return (
    <>
    <div>
    <UserPNavbar/>
    </div>

    <div className='user-profile-back'></div>
    <div className='back-white-img'>
      <img src={userBackWhite} alt="" />
      <div className='user-iamge'>
        <img src={UserFront} alt="" />
        <div className='user-right-icon'>
          <img src={UserRightIcon} alt="" />
        </div>
      </div>
      </div>


<div className='details-parent'>
  {/* card one */}
  <div className='details-child-one'> 
    <button>Following</button>
  </div>
{/* card two */}
  <div className='details-child-Two'> 
    <p>Followers 50k+</p>
  </div>
  {/* there child */}
  <div className='details-child-There'> 
  <p>Monica Lucas</p>
  </div>
{/* Four Child */}
  <div className='details-child-Four'>
    <p>Shere</p>
    <img src={InstagramIcon} alt="" />
    <img src={FacebookIcon} alt="" />
    <img src={TwitterIcon} alt="" />
     </div>
</div>
{/* name and id */}
<div className='name-id'>
  <p>@monicaaa</p>
</div>


{/* after name and Icon */}

<div className='user-link-msg-id'>
<div className='user-link-msg-id-one'>
  <p>DdzFFzCqrhshMSxb9....</p>
  <button>Copy</button>
</div>
{/*  two msg and icon  */}
<div className='user-link-msg-id-two'>
<button><img src={MsgDarkIcon} alt="" /> MESSAGE</button>
</div>
</div>


{/* collection & Linked btn */}

<div className='Col-Lin-parent'>
  {/* one button */}
  <div className='Col-Lin-chid-one'> 
  <button>Collection</button>
  </div>
  {/* two button */}
  <div className='Col-Lin-chid-Two'>
    <button>Liked</button>
  </div>
</div>



{/* card section starting from here */}

<div className='card-user-profile-parent'>
<div ><UserCards/></div>
<div ><UserCards/></div>
<div ><UserCards/></div>
<div ><UserCards/>  </div>
<div ><UserCards/></div>
<div ><UserCards/></div>
<div ><UserCards/></div>
<div ><UserCards/></div>

</div>



    </>
  )
}

export default UserProfile;