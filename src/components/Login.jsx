import './Login.css'
const Login = () => {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            login();
        }
    };

    const login = () => {
        var usuario = document.getElementById("correo").value;
        var contraseña = document.getElementById("contraseña").value;
        var mensaje = document.getElementById("mensaje");

        if (usuario === "usuario@gmail" && contraseña === "contraseña") {
            estalogeado = true; // Marcar al usuario como autenticado
            window.location.href = "../main/principal.html";
        } else {
            mensaje.innerHTML = "Nombre de usuario o contraseña incorrectos.";
            mensaje.style.color = "red";
        }

        // Evita que el formulario se envíe automáticamente.
        // Note: In React, you would typically use the event parameter in the function signature.
        // Since you're using 'event' without declaring it, it might not work as expected in React.
        event.preventDefault();
    };

    return (
        <>

            <body>
                <main id="principal">
                    <div className="login">
                        <form action="" className="loginf" id="loginf">
                            <h2>Iniciar Sesión</h2>
                            <input
                                type="email"
                                className="logincorreo"
                                placeholder="Correo"
                                id="correo"
                                required
                            /><br />
                            <input
                                type="password"
                                id="contraseña"
                                className="logincontraseña"
                                placeholder="Contraseña"
                                required
                                onKeyPress={handleKeyPress} // Add onKeyPress event
                            /><br />
                            <div className="mensaje">
                                <p id="mensaje"></p>
                            </div>
                            <button type="button" onClick={login} id="enviarFormularioBtn">
                                Enviar
                            </button>
                            <p className="textologin">
                                ¿No tienes cuenta? <a href="registro.jsx"><b>Regístrate aquí</b></a>
                            </p>
                        </form>
                    </div>
                </main>

            </body>
            <footer>
                <p>Copyright Josthin Baque 2023</p>
            </footer>
        </>
    );
};

export default Login;
