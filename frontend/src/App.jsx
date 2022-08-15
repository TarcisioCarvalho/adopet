import './css/base/base.css'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import { AuthProvider } from './context/auth';


import Header from './Components/Header';
import Footer from './Components/Footer';
import Inicial from './pages/Inicial';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Home from './pages/Home';
import Mensagens from './pages/Mensagens';
import Perfil from './pages/Perfil';




function App() {
  
  return (
    <AuthProvider>
    
    <BrowserRouter>

          <Header/>

          <Routes>
              
              <Route path='/' element={<Inicial/>}/>
             {/* <Route path='home' element={<Private Item = {Home}/> } />*/}
              <Route path='home' element={<Home/>}/>
              <Route path='cadastro' element={<Cadastro/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='mensagens' element={<Mensagens/>}/>
              <Route path='perfil' element={<Perfil/>}/>
              
              
          </Routes>
          
        
    </BrowserRouter>
    <Footer/>
    </AuthProvider>
  );
}

export default App;
