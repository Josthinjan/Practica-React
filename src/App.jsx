
import Login from './components/Login'
import Registro from './components/Registro'
import logouleam from './imagenes/logouleam.png'
const App = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logouleam} alt="Logo" />
        </div>
      </header>
      <Login />
      <footer>
        <p>Copyright Josthin Baque 2023</p>
      </footer>
    </>
  );
};

export default App;
