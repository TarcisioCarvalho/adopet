import './css/base/base.css'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import { AuthProvider } from './context/auth';


import Header from './Components/Header';
import Footer from './Components/Footer';
import Inicial from './Components/Inicial';
import Cadastro from './Components/Cadastro';
import Login from './Components/Login';
import Home from './Components/Home';
import Mensagens from './Components/Mensagens';
import Perfil from './Components/Perfil';

const Private = ({Item})=>{
  const signed = false;

  return signed>0?<Item/>:<Login/>;
}


function App() {
  
  return (
    <AuthProvider>
    
    <BrowserRouter>

          <Header/>

          <Routes>
              
              <Route path='/' element={<Inicial/>}/>
              <Route path='home' element={<Private Item = {Home}/> } />
              <Route path='cadastro' element={<Cadastro/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='mensagens' element={<Private Item = {Mensagens}/>}/>
              <Route path='perfil' element={<Private Item = {Perfil}/>}/>
              <Route path='*' element={<Login/>}/>
              
          </Routes>
          
        
    </BrowserRouter>
    <Footer/>
    </AuthProvider>
  );
}

export default App;
