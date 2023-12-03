import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import Registro from './components/Registro'
import Principal from './components/Principal'
import Oferta from './components/Oferta'
import Generar from './components/Generar'
import Perfil from './components/Perfil'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Registro' element={<Registro />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Principal' element={<Principal />} />
        <Route path='/Oferta' element={<Oferta />} />
        <Route path='/Generar-Empleo' element={<Generar />} />
        <Route path='/Perfil' element={<Perfil />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;