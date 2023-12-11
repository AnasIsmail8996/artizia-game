import './NFTCollection.css'

import NFTColCards from './NFTColCards';
const NFTCollection = () => {
  return (
    <>

    <div className='nft-parent-one'>
      <div className='nft-text-Heading'> 
        <h4>NFT Collection </h4>
      </div>
      <div className='nft-text-para'>  <p>View more</p></div>
    </div>


    {/* card section  */}

    <div className='card-parent'>
      
      <div><NFTColCards/> </div>
      {/* card two */}
      
      <div>  
<NFTColCards/>
      </div>

{/* card there */}
      <div >
      <NFTColCards/>
      </div>
{/* card four */}
      <div >
      <NFTColCards/>
      </div>
{/* card five */}
      <div >
      <NFTColCards/>
      </div>
{/* card six */}
      <div >
      <NFTColCards/>
      </div>
{/* card seven */}
      <div >
      <NFTColCards/>
      </div>
{/* card eight */}
      <div>
      <NFTColCards/>
      </div>
      
    </div>




    </>
  )
}

export default NFTCollection;