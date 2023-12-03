import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Login.css';
import logouleam from '../imagenes/logouleam.png';

const Login = () => {
    const navigate = useNavigate();
    const [estalogeado, setEstaLogeado] = useState(false);
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            login();
        }
    };

    const login = () => {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
        if (storedUserData) {
            if (correo === storedUserData.correo && contraseña === storedUserData.contraseña) {
                setEstaLogeado(true);
                navigate('/Principal');
            } else {
                alert('Nombre de usuario o contraseña incorrectos.');
            }
        } else {
            alert('No hay datos de usuario almacenados');
        }
    };

    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
        if (storedUserData) {
            setCorreo(storedUserData.correo);
        }
    }, []);

    return (
        <>
            <body className='body-login'>
                <header className='header-login'>
                    <div className="logo">
                        <Link to={'/'}>
                            <img src={logouleam} alt="Logo" />
                        </Link>
                    </div>
                </header>
                <main id="principal" className='main-login'>
                    <div className="login">
                        <form action="" className="loginf" id="loginf">
                            <h2 className='h'>Iniciar Sesión</h2>
                            <input
                                type="email"
                                className="logincorreo"
                                placeholder="Correo"
                                id="correo"
                                required
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                            /><br />
                            <input
                                type="password"
                                id="contraseña"
                                className="logincontraseña"
                                placeholder="Contraseña"
                                required
                                onKeyPress={handleKeyPress}
                                value={contraseña}
                                onChange={(e) => setContraseña(e.target.value)}
                            /><br />
                            <div className="mensaje">
                                <p id="mensaje"></p>
                            </div>
                            <button
                                type="button"
                                className='boton-login'
                                onClick={login}
                                id="enviarFormularioBtn"
                            >
                                Enviar
                            </button>
                            <p className="textologin">
                                ¿No tienes cuenta? <Link to={'/Registro'}><b>Regístrate aquí</b></Link>
                            </p>
                        </form>
                    </div>
                </main>
                <footer>
                    <p>Copyright Josthin Baque 2023</p>
                </footer>
            </body>
        </>
    );
};

export default Login;

