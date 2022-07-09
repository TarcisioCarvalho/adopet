import './css/base/base.css'
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Inicial from './Components/Inicial';
import Cadastro from './Components/Cadastro';
import Login from './Components/Login';
import Home from './Components/Home';


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
      {/*<Cadastro/>*/}
      {/* <Login/> */}
      <Home/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
