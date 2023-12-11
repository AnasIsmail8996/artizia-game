import './newItems.css'
import Bird from '../../assets/images/bird.png'; 
import DuckBack from '../../assets/images/duck-back.png';
import DuckSmall from '../../assets/images/duck-small.png';
import RightIcon from '../../assets/images/big-chack.png';
import ThereDott from '../../assets/images/theredott.png';
import Heart  from '../../assets/images/heart.png';
const Card = () => {
  return (
   <>
     <div className='card-one'>
        <div className='img-duck'>
          <img src={Bird} alt="" />
          <div className='content-hide-show-new-I'>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Facebook</p>
          </div>
        </div>
       <div className='ratio'>
        <p>46d</p>
        <p>18h</p>
        <p>40m</p>
        <p>10s</p>
       </div>

        <div className='three-images'>
        <img src={DuckBack} alt="" />
        </div>
        <div className='three-images-child-one'>
          <img src={DuckSmall} alt="" />
        </div>
        <div className='three-images-child-Two'>
          <img src={RightIcon} alt="" />
        </div>
         
         <div className='name-Icon'>
          <p>Pinky Ocean</p>
          <img src={ThereDott} alt="" />
         </div>

             <div className='ratio-text'>
              <p>0.08 ETH1/20</p>
             </div>

             <div className='text-icon-name'>
              <h6>Place a bid</h6>
              <img src={Heart} alt="" />
              <p>50</p>
             </div>

     </div>

   
   </>
  )
}

export default Card;