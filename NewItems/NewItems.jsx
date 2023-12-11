import './newItems.css';

import Card from './Card';
const NewItems = () => {
  return (
    <>
    <div className='NewI-Heading'>
     <h2>New Items</h2>
    </div>
    {/* card section starting from here  */}
<div className='father-cards'>
  <div>

<Card/>
  </div>

     


{/* card two */}
     <div >
 <Card/>
     </div>
       
       {/* card there */}
      <div >
   <Card/>
     </div>


     {/* card four */}

     <div >
   <Card/>

     </div>
    
     {/* five card */}

<div >
<Card/>

</div>

{/* six card */}
<div >
<Card/>

</div>

{/* seven card*/}

<div >
<Card/>
</div>

{/* eight card */}

<div >
<Card/>

</div>




  </div>
  </>
  )
}

export default NewItems;