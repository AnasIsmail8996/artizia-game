import './Wallet.css'
import WolfIcon from '../../assets/images/metamask-wallet.png';
const WalletCards = () => {
  return(

      <>

    <div className='wallet-card-one'>
         <div className='wallet-card-one-btn'>
            <button>Most Popular</button></div>

            <div className='wallet-content'>
              <img src={WolfIcon} alt="" />
              <h3>Metamask</h3>
              <p>Start exploring blockchain applications in seconds. 
                Trusted by over 1 million users worldwide.</p>
            </div>
    </div>


  </>
      ) 
  
}

export default WalletCards;