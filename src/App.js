import logo from './logo.svg';
// import './App.css';
import './css/styles.css'
import About from './About' 
import Creation from './Creation' 
import Home from './Home' 
import Footer from './Footer' 
import Header from './Header' 
import back from '././images/desktop/image-hero.jpg'
import backm from '././images/mobile/image-hero.jpg'
import  {useEffect,useState} from 'react'
function App() {

  const [state, setstate] = useState(back)
  useEffect(() => {
      if(window.innerWidth<600)
      {
        setstate(backm)
      }
  });
  return(
    <div className="App">
      <div class="top" style={{backgroundImage:`url(${state})`}}>
        {/* <div className="mobile" style={{backgroundImage:`url(${backm})`}}> */}
      <Header />
      <Home />
      {/* </div> */}
      </div>
      <About />
      <Creation />
      <Footer/>
    </div>
  );
}

export default App;
