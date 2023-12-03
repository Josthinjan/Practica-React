import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './Home.css'
import logouleam from '../imagenes/logouleam.png'
import imagenindex from '../imagenes/imagenindex.jpeg'




const Home = () => {
    return (
        <>
            <body>
                <header className='cabeza'>
                    <div class="logo">
                        <Link to={'/'}>  <img src={logouleam} alt="Logo" /></Link>
                    </div>

                    <div class="botones-main">
                        <Link className='link' to={'/Login'}><button class="boton-home" >Inciar Sesion</button></Link>
                        <Link className='link' to={'/Registro'}><button class="boton-home" >Registrarse</button></Link>
                    </div>
                </header>


                <main class="cuerpo-main">
                    <div class="textoindex">
                        <section class="texto_index">
                            <h1>¡Ofertas de Trabajo para Todos!</h1>
                            <ul>
                                <li>Encuentra el empleo adecuado para ti</li>
                                <li>Publica tu auncio de empleo aqui</li>
                                <li>Inicia sesión para ver las ofertas</li>
                            </ul>
                        </section>
                    </div>

                    <div class="imagen">
                        <img src={imagenindex} alt="imagen" />
                    </div>
                </main>

                <footer>
                    <p>Copyright Josthin Baque 2023</p>
                </footer>
            </body>
        </>
    );
};

export default Home;