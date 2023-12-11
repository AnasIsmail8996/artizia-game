import './UserProfile.css'
import CardImage from '../../assets/images/Collection-card-image.png';
import RightIcon from '../../assets/images/big-chack.png';


const UserCards = () => {
  return (
      <>
    <div className='user-Cards-parent'>
     <div className='user-Cards-image'>
        <img src={CardImage} alt="" /></div>
        <div className='cards-text-icon'>
            <p>The land of the Dead by DR</p>
            <img src={RightIcon} alt="" /></div>

            <div className='user-cards-text-last'>
                {/* one */}
                <div className='user-cards-text-last-one'>
                    <p>Floor</p>
                </div>
                  {/* two */}
                <div className='user-cards-text-last-two'>
                    <p>24h Volume</p>
                </div>
                {/* there */}
                <div className='user-cards-text-last-there'>
                    <p>0.04 ETH</p>
                </div>
                {/* four */}
                <div className='user-cards-text-last-four'>
                    <p>7 ETH</p>
                    </div>
            </div>

    </div>
      </>
  )
}

export default UserCards;