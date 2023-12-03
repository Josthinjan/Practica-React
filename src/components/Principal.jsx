import { Link } from 'react-router-dom';
import './Principal.css'
import logouleam from '../imagenes/logouleam.png'
const Principal = () => {
    return (
        <>
            <body className='body-principal'>
                <header className='cabeza-main' >
                    <div className="logo">
                        <Link to={'/Principal'}>  <img src={logouleam} alt="Logo" /></Link>
                    </div>
                </header>
                <main className='main-principal' >
                    <div className="principal-main">
                        <div className="izquierda-main">
                            <section className='seccion-main'>
                                <div className="contenido-main">
                                    <Link to={'/Perfil'}>
                                        <p>Perfil</p>
                                    </Link>
                                    <Link to={'/Generar-Empleo'}>
                                        <p>Crear oferta de trabajo</p>
                                    </Link>
                                    <Link to={'/'} >
                                        <p>Cerrar Sesión</p>
                                    </Link>

                                </div>
                            </section>
                        </div>
                        <div className="centro-main">
                            <div className="ofertas-main">
                                <h3 className="titulo-main">Oferta 1</h3>
                                <p className="textoOferta-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.
                                </p>
                                <Link to={'/Oferta'}>ver mas</Link >

                            </div>
                        </div>
                    </div>
                </main >
                <footer>
                    <p>Copyright Josthin Baque 2023</p>
                </footer>
            </body >
        </>
    );
};
export default Principal;