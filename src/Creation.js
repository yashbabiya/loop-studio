import './css/styles.css'
import Card from './Card'
import x1 from '././images/desktop/image-deep-earth.jpg'
import x2 from '././images/desktop/image-night-arcade.jpg'
import x3 from '././images/desktop/image-soccer-team.jpg'
import x4 from '././images/desktop/image-grid.jpg'
import x5 from '././images/desktop/image-from-above.jpg'
import x6 from '././images/desktop/image-pocket-borealis.jpg'
import x7 from '././images/desktop/image-curiosity.jpg'
import x8 from '././images/desktop/image-fisheye.jpg'


import y1 from '././images/mobile/image-deep-earth.jpg'
import y2 from '././images/mobile/image-night-arcade.jpg'
import y3 from '././images/mobile/image-soccer-team.jpg'
import y4 from '././images/mobile/image-grid.jpg'
import y5 from '././images/mobile/image-from-above.jpg'
import y6 from '././images/mobile/image-pocket-borealis.jpg'
import y7 from '././images/mobile/image-curiosity.jpg'
import y8 from '././images/mobile/image-fisheye.jpg'



const Creation = () => {
    return ( <div className="creation">
    
    <div className="top0">
        <h2>Our creations</h2>
    
        <button class="btn">See all</button>
    </div>
    <div className="card-container">

    <Card img={x1} text="Deep earth"/>
    <Card img={x2} text="Night arcade"/>
    <Card img={x3} text="Soccer team VR"/>
    <Card img={x4} text="The grid"/>
    <Card img={x5} text="From up above VR"/>
    <Card img={x6} text="Pocket borealis"/>
    <Card img={x7} text="The curiosity"/>
    <Card img={x8} text="Make it fisheye"/>


    </div>

    <div className="card-mobile">

    <Card img={y1} text="Deep earth"/>
    <Card img={y2} text="Night arcade"/>
    <Card img={y3} text="Soccer team VR"/>
    <Card img={y4} text="The grid"/>
    <Card img={y5} text="From up above VR"/>
    <Card img={y6} text="Pocket borealis"/>
    <Card img={y7} text="The curiosity"/>
    <Card img={y8} text="Make it fisheye"/>


    </div>
    <button class="btnx">See all</button>


    </div> );
}
 
export default Creation;