import './css/base/base.css'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 


import Header from './Components/Header';
import Footer from './Components/Footer';
import Inicial from './Components/Inicial';
import Cadastro from './Components/Cadastro';
import Login from './Components/Login';
import Home from './Components/Home';
import Mensagens from './Components/Mensagens';
import Perfil from './Components/Perfil';




function App() {
  
  return (
    <>
    
    <BrowserRouter>

          <Header/>

          <Routes>
              
              <Route path='/' element={<Inicial/>}/>
              <Route path='home' element={<Home /> } />
              <Route path='cadastro' element={<Cadastro/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='mensagens' element={<Mensagens/>}/>
              <Route path='perfil' element={<Perfil/>}/>
              
          </Routes>
          
        
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
