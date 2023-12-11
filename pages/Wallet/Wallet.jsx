import './Wallet.css'
import UserPNavbar from '../UserProfile/UserPNavbar';
import WalletCards from './WalletCards';
import WalletCardTwo from './WalletCardTwo';
const Wallet = () => {
  return (
    <>
    <div><UserPNavbar/></div>
   {/* wallet section */}
   <div className='wallet'>
    <h1>Wallet</h1>
   </div>

{/* wallet cards starting from here */}

<div className='wallet-card-parent'>
    <div >
        <WalletCards/>
    </div>
    <div >
      <WalletCardTwo/>
    </div>
    <div >
    <WalletCardTwo/>
      </div>
    <div >
    <WalletCardTwo/>
    </div>

    <div > <WalletCards/></div>
    <div > <WalletCards/></div>
    <div > <WalletCards/></div>
    <div > <WalletCards/></div>
    
</div>




    </>
  )
}

export default Wallet;