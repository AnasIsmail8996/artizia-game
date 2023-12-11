import './HowItWork.css';
import IconOne from '../../assets/icons/wallet.png';
import IconTwo from '../../assets/icons/hand.png';
import IconThere from '../../assets/icons/nft.png';
import IconFour from '../../assets/icons/sell.png';
import Footer from '../Footer/Footer';

const HowItWork = () => {
  return (
    <>
    <div className='how-it-Work-parent' >
      <div className='heading-how-it-work'> 
      <p>How It Works</p>
      </div>

    {/* card section starting from here */}
    <div className='how-it-work-card'>
      {/* starting */}
      <div className='card-one-parent-how-it-one'>
       <div className='how-it-work-card-one'>
        <div className='how-it-work-card-one-img'>
      <img  src={IconOne} alt="" /></div>
      <p><span>Set up your wallet</span></p>
    
      <p>Sed ut perspiciatis unde iste natus error
         sit voluptatem accusantium doloremque laudantium, 
        totam rem.</p>
       </div>
       </div>


{/* card two */}
       <div className='card-one-parent-how-it-two'>
       <div className='how-it-work-card-one'>
        <div className='how-it-work-card-one-img'>
      <img  src={IconTwo} alt="" /></div>
      <p><span>Create your NFT's</span></p>
    
      <p>Sed ut perspiciatis unde iste natus error
         sit voluptatem accusantium doloremque laudantium, 
        totam rem.</p>
       </div>

       </div>

{/* card there */}


<div   className='card-one-parent-how-it-there'>

     
       <div className='how-it-work-card-one'>
        <div className='how-it-work-card-one-img'>
      <img  src={IconThere} alt="" /></div>
      <p><span>Add your NFT's</span></p>
    
      <p>Sed ut perspiciatis unde iste natus error
         sit voluptatem accusantium doloremque laudantium, 
        totam rem.</p>
       </div>

</div>



      
       
       {/* card four */}
       <div  className='card-one-parent-how-it-four'>

       <div className='how-it-work-card-one'>
        <div className='how-it-work-card-one-img'>
      <img  src={IconFour} alt="" /></div>
      <p><span>Sell your NFT's</span></p>
    
      <p>Sed ut perspiciatis unde iste natus error
         sit voluptatem accusantium doloremque laudantium, 
        totam rem.</p>
       </div>

       </div>
     
    </div>
<div>
  <Footer/>
</div>

    </div>
    </>
  )
}

export default HowItWork;