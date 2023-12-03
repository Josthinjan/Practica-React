import { Link } from 'react-router-dom';
import logouleam from '../imagenes/logouleam.png'
import './Generar.css'

const Generar = () => {
    const handleClick = () => {
        alert('¡Solicitud de empleo enviada!');
    };


    return (
        <>

            <body className='body-generar'>
                <header className='header-generar'>
                    <div className="logo-generar">
                        <Link to={'/Principal'}>  <img src={logouleam} alt="Logo" /></Link>
                    </div>
                </header>
                <main className='main-generar'>
                    <div className="cuerpo-generar">
                        <h1 className="titulo-generar">
                            Generar oferta de empleo
                        </h1>
                        <div className="formulario-generar">
                            <label for="nombre" className="texto-nombre">Nombre del Empleo</label>
                            <input type="text" className="nombre" ></input>
                            <label for="tipo" className="texto-tipo">Modalidad de Empleo</label>
                            <select name="tipo" id="tipo" >
                                <option value="1">Seleccione</option>
                                <option value="2">Presencial</option>
                                <option value="3">Virtual</option>
                                <option value="4">Hibrida</option>
                            </select>
                            <section className="division-generar">
                                <section className="izquierda-generar">
                                    <label for="descripcion">Descripción</label>
                                    <textarea className="descripcion-generar" rows="4">


                                    </textarea>

                                    <button type="submit" className="generar" onClick={handleClick}>Generar Oferta</button>
                                </section>
                                <section className="derecha-generar">

                                </section>
                            </section>
                        </div>
                    </div>
                </main>
                <footer>
                    <p>Copyright Josthin Baque 2023</p>
                </footer>
            </body >

        </>
    );
}

export default Generar;