import  {useEffect,useState} from 'react'
import './css/styles.css'
import About from './About' 
import Creation from './Creation' 
import Home from './Home' 
import Footer from './Footer' 
import Header from './Header' 
import back from '././images/desktop/image-hero.jpg'
import backm from '././images/mobile/image-hero.jpg'
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
      <Header />
      <Home />
      
      </div>
      <About />
      <Creation />
      <Footer/>
    </div>
  );
}

export default App;
