import './css/styles.css'
import img from '././images/desktop/image-fisheye.jpg'
const Card = (props) => {
    return (
         <div className="card">
    <img src={props.img} alt="" id="c-img"/>
    <h3>{props.text}</h3>
    </div> 
    );
}
 
export default Card;