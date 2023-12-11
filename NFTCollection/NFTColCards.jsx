import './NFTCollection.css';

import nafTCardImage from '../../assets/images/NFTImage.png';
import duckImg from '../../assets/images/duck.png';
import RightIcon from '../../assets/images/big-chack.png';
import DuckBack from '../../assets/images/duck-back.png';
import ThereDott from '../../assets/images/theredott.png';
import BitCoinColor from '../../assets/images/bitcoincolor.png';
import Coin from '../../assets/images/btc.png';
import cartIcon from '../../assets/icons/shop.png';
const NFTColCards = () => {
  return (
    <>
  <div className='card-one'>
          <div className='img-card-nft'>
           
            <img src={nafTCardImage} alt="" />
            <div className='duck-back'>
                <img src={DuckBack} alt="" />
                </div>
            <div className='img-card-nft-duck'>
            <img className='img-card-nft-duck' src={duckImg} alt="" /> 
            
            <div className='card-right-icon'>
              <img src={RightIcon} alt="" />
            </div>
            </div>
            <div className='there-Dott'>
              <img src={ThereDott} alt="" />
            </div>

            <div className='text-section-two'>
              <div className='first-Heading-two'>
                <p >TUD NFT</p>
              </div>

              <div className='second-price-two' >
                <p className='color-text-number'>#9840</p>
              </div>
                 
                 <div className='second-price-there'><p >Price</p></div>

                 <div className='third-icon-text-two' >
                  <img className='coin-img-round'  src={BitCoinColor} alt="" />
               <p className='coin-number'>260</p>
                 </div>
            </div>
          
               


                <div className='hide-show-content'>
                <div className='color-img-text' >
              <div className='color-img-coin'>
                <img src={Coin} alt="" />
              </div>
              <div className='social-icon-names'>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
              </div>
              
            <div className='btn-icon'>
                  <button className='btn-color-full-C-T'> Buy Now   <div className='cartIcon' >
                     <img  src={cartIcon} alt="" />
                    </div>
                     </button>
                 </div>
         
                </div>
            </div>


          </div>
      </div> 
    </>
  )
}

export default NFTColCards;