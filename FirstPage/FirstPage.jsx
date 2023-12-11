
import logiIcon from '../../assets/logo/logoicon.svg';
import nameIcon from '../../assets/logo/logo-light-two.png';
import SearchIcon from '../../assets/logo/logoIconSearch.png';
//import UserIcon from '../../assets/images/OtherUser.png';

import './FirstPage.css'
const FirstPage = () => {

    
  return (
    <>


<div className="firstPage-parent">
  <div className='back-img'>
    
  </div>
  {/* left Side */}
  <div  className="FistPage-Left">
    <div className="left-logo-icon"> <img src={logiIcon} alt="" /> </div>
    <div  className="left-logo-name"><img src={nameIcon} alt="" /></div>
  </div>

{/* right side */}
  <div  className="FistPage-Right">
    <div className="Right-Page-Icon-Search"><img src={SearchIcon} alt="" /> </div>
    <div className="Right-Page-Btn"> <button>Connect Wallet</button></div>
    <div className="Right-Page-Icon-Owner"></div>
  </div>
  

  {/* Center Content and form  and  text  Starting from here */}
    <div className='center-parent'>
      <div >
        <div className='heading-center'>
          <p>Create <span> DIGITAL ART</span> and <span> SELL</span> as <span> NFT</span></p>
        </div>
      </div>
      {/* input  and button */}
      <div className='center-btn-input'>
        <button > Prompt </button>
        <input type="text"  placeholder='Generate'   />
        
      </div>
      <div className='center-text-after-input'>
        <p>   Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
      </div>
    </div>
    


</div>

   {/*color full page starting from   */}
<div className="color-full-page-parent">
 

  <div className="color-Text-parent">
    {/* First  column*/}
    <div className="color-Heading" ><p>WE HAVE THE  <span> BEST </span> NFT <span> DIGITAL ARTISTS </span></p></div>
    {/* Second Column */}
    <div className="color-para">
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
      sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p></div>


    <div className="color-counting">
      {/* first-child */}
      <div className="first-child">
      <h2>10K+</h2>
        <p>RARE NFT</p>
      </div>
      {/* first-second */}
      <div className="first-child">
        <h2>70K+</h2>
        <p>PRODUCTS</p>
      </div>
      {/* first-third */}
      <div className="first-child">
      <h2>05K+</h2>
        <p>NFT ARTIST</p>
      </div>

     
    </div>
  </div>
  
</div>



    
    </>
  )
}

export default FirstPage;