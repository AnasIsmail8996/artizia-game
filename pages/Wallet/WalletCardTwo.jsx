import './Wallet.css';
import walletImage from '../../assets/images/coinbase-wallet.png';
const WalletCardTwo = () => {
  return (
    <>
    <div className='wallet-card-two'>
        <img src={walletImage} alt="" />
        <h2>Coinbase Wallet</h2>
        <p>The easiest and most secure crypto wallet. ...
             No Coinbase account required.</p>

    </div>
    </>
  )
}

export default WalletCardTwo;