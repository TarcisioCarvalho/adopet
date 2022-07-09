import './css/base/base.css'
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Inicial from './Components/Inicial';
import Cadastro from './Components/Cadastro';


function App() {
  return (
    <>
   {/*    <Header/>
    <main className="App">
       <Inicial/>
        
    </main>
    <Footer/>  */}
    <Header/>
    <main>
     {/*  <Inicial/> */}
      <Cadastro/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
