import './css/styles.css'
import vr from '././images/desktop/image-interactive.jpg'
import vrm from '././images/mobile/image-interactive.jpg'
const About = () => {
    return ( <div className="about">
    
        <div class="img">
            <img src={vr} alt=""/>
        </div>
        <div class="info">
            <h2>The leader in interactive VR</h2>
    
        <p>
            Founded in 2011, Loopstudios has been producing world-class virtual reality 
            projects for some of the best companies around the globe. Our award-winning 
            creations have transformed businesses through digital experiences that bind 
            to their brand.
        </p>
        </div>
    </div> );
}
 
export default About;