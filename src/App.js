import logo from './logo.svg';
// import './App.css';
import './css/styles.css'
import About from './About' 
import Creation from './Creation' 
import Home from './Home' 
import Footer from './Footer' 
import Header from './Header' 

function App() {
  return (
    <div className="App">
      <div class="top">
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
