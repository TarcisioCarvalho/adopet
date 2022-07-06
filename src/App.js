import './css/base/base.css'
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Inicial from './Components/Inicial';


function App() {
  return (
    <>
     <Header/>
    <div className="App">
       <Inicial/>
        
    </div>
    <Footer/>
    </>
  );
}

export default App;
