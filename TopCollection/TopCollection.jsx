import './TopCollection.css';
// import otherUserProfile from '../../assets/images/other-user-profile.png';
 import rightIcon from '../../assets/images/big-chack.png';
import SecondIcon from '../../assets/images/second.png';
 import ThirdIcon from '../../assets/images/third.png';
 import FourIcon from '../../assets/images/four.png';
const TopCollection = () => {
  return (
      <>
      <div className='top-heading-parent'>
        <div className='top-heading-left' >
            <p>Top Collection</p>
             </div>
        <div className='top-heading-right'>
            <p>View more markets</p>
             </div>
      </div>


{/* after heading card icons */}
 

<div className='table-parent'>

 <table>
 <thead>
    
  <tr>
      <th></th>
    <th className='name'>Name</th>
    <th className='last-price'>Last Price</th>
    <th className='hour'>24h Hour</th>
  </tr>
   
 </thead>
 <tbody>
 {/* First Row */}

 <tr> 
 <td> <td> <img className='rightIcon'   src={ rightIcon} alt="" /></td> 
 <img className='round-img-icon'   src={FourIcon} alt="" /></td>
             <td className='image-text'>Bull BTC Club</td>
            <td className='last-price-two'>500.59 ETH</td>
            <td className='change-hour'>0.59 ETH</td>
 </tr>
  {/* Second Row */}
  <tr>
  <td>   <td> <img className='rightIcon' src={ rightIcon} alt="" /></td> <img  className='round-img-icon' src={SecondIcon} alt="" /></td>
            <td className='image-text'>Genesis Universe Medal</td>
            <td className='last-price-two'>500.59 ETH</td>
            <td className='change-hour'>0.59 ETH</td>
          </tr>
          {/* Third Row */}
          <tr>
          <td> <td> <img className='rightIcon' src={ rightIcon} alt="" /></td> <img className='round-img-icon'   src={ThirdIcon} alt="" /></td>
            <td className='image-text'>Metabox Genesis Miner NFT</td>
            <td className='last-price-two'>500.59 ETH</td>
            <td className='change-hour'>0.59 ETH</td>
          </tr>
          {/* Fourth Row */}
          <tr>
          <td> <td> <img className='rightIcon' src={ rightIcon} alt="" /></td> <img className='round-img-icon'  src={FourIcon} alt="" /></td>
            <td className='image-text'>Bird World Mystery Box 3</td>
            <td className='last-price-two'>500.59 ETH</td>
            <td className='change-hour'>0.59 ETH</td>
          </tr>
    


 </tbody>
 </table>
</div>



      </>
  )
}

export default TopCollection;