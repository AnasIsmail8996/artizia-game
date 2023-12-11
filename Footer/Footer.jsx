import './Footer.css';
import logoOne from '../../assets/logo/logo.png';
import logoTwo from '../../assets/logo/logo-light-two.png';
// social Icons One 
import SocialIconOne from '../../assets/social-icons/blade.png';
import SocialIconTwo from '../../assets/social-icons/facebook.png';
import SocialIconThere from '../../assets/social-icons/insta.png';
import SocialIconFour from '../../assets/social-icons/linkdin.png';
import SocialIconFive from '../../assets/social-icons/monkey.png';
import SocialIconSixth from '../../assets/social-icons/tiktok.png';
import SocialIconSeven from '../../assets/social-icons/youtube.png';


const Footer = () => {
  return (
    <>
    <div className='footer-parent'>
      <div className='footer-child-one'>
        <div className='footer-child-one-images'>
            <img src={logoOne} alt="" />
            <img src={logoTwo} alt="" />
        </div>
      </div>
      {/* two */}

      <div  className='footer-child-two'>
      <div className='footer-child-one-images-two'>
            <img src={SocialIconOne} alt="" />
            <img src={SocialIconTwo} alt="" />
            <img src={SocialIconThere} alt="" />
            <img src={SocialIconFour} alt="" />
            <img src={SocialIconFive} alt="" />
            <img src={SocialIconSixth} alt="" />
            <img src={SocialIconSeven} alt="" />
        </div>

      </div>

      {/* there */}
      <div className='footer-child-there'>
       <div className='terms-con'>
        <p>TERMS & CONDITIONS</p>
       </div>

       <div className='info-contact'>
        <p> Contact us:</p>
        <p>
            Info@artizia.io
        </p>
       </div>
      </div>
    </div>
    </>
  )
}

export default Footer;