import './UserProfile.css';
import colorLogo from '../../assets/logo/logo.png';
import colorLogoTwo from '../../assets/logo/logo-title-dark.png';

import LogoSearchIcon from '../../assets/images/logosearchicon.png';
import LogoMsgIcon from '../../assets/images/msgIcon.png';
import AlertIcon from '../../assets/images/alertIcon.png';
import PersonLogo from '../../assets/images/user-pic.png';
const UserPNavbar = () => {
  return (
    <>
    <div className='UserP-Nav-Parent'>
        {/* card one */}

  <div className='logo-icon-user'>
<img src={colorLogo} alt="" />
  </div>
  {/* card two */}
  <div className='logo-icon-user-two'>
<img src={colorLogoTwo} alt="" />

  </div>


{/* there */}
  <div className='logo-icon-user-there'>
    <img src={LogoSearchIcon} alt="" />
  </div>

{/* card four */}
  <div className='logo-icon-user-Four'>
    <img src={LogoMsgIcon} alt="" />
  </div>

  {/* five card */}

  <div className='logo-icon-user-Five'>
    <img src={AlertIcon} alt="" />
  </div>

  {/* six card */}
  <div className='logo-icon-user-six'>
<button> <span>Connect Wallet</span></button>
  </div>

{/* seven card */}
  <div className='logo-icon-user-seven'>
    <img src={PersonLogo} alt="" />
  </div>

    </div>
    </>
  )
}

export default UserPNavbar;