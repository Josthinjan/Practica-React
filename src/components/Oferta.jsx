import { Link } from 'react-router-dom';
import logouleam from '../imagenes/logouleam.png'
import './Oferta.css'
function Oferta() {

    const handleOferta = () => {
        alert('¡Oferta Generada!');
    };

    return (
        <>

            <body className='body-oferta'>
                <header className='header-oferta'>
                    <div className="logo-oferta">
                        <Link to={'/Principal'} className='link'>  <img src={logouleam} alt="Logo" /></Link>
                    </div>
                </header>
                <main className='main-oferta'>
                    <div className="info-oferta">

                        <div className="izquierda-oferta">

                            <div className="descripcion-oferta">
                                <h1 className="titulo">
                                    Oferta
                                </h1>
                                <p className="textoOferta">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet..
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet
                                </p>
                            </div>
                        </div>

                        <div className="derecha-oferta">
                            <h2>Contacto</h2>
                            <p className="creador">Autor</p>
                            <p className="telefono">09999999999</p>
                            <p className="correo">ejemplo@gmail.com</p>
                            <button type="submit" id="registrarse" className='boton-oferta' onClick={handleOferta}>Solicitar Empleo</button>
                        </div>
                    </div>
                </main>
                <footer>
                    <p>Copyright Josthin Baque 2023</p>
                </footer>
            </body>
        </>
    )
}

export default Oferta