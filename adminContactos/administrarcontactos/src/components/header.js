import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './media/logo.png';
import './css/header.css';
import Buscador from './buscador';
// import './css/buscador.css';

export default function Header() {

    return (
        <div>
            <div class="container-fluid">
                <div class="row header">
                    <a class="navbar-brand logo col-2" href="#">
                        <img src={logo} />
        
                    </a>

                    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon">

                            </span>
                        </button> */}

                    <div className="mensaje  col-2">
                        <p> Bienvenido(a): Administrador</p>
                    </div>

                    <nav class="navbar navbar-expand-lg navbar-light bg-light col-6">
                        <ul class="navbar-nav me-auto mb-lg-0">

                            <li class="nav-item">
                                <a class="nav-link active" href="#">Contactos</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" >Compañias</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Usuarios</a>
                            </li>
                            <li class="nav-item">
                                <button type="button" class="btn btn-danger">Cerrar Sesion</button>
                            </li>

                        </ul>

                    </nav>
                    {/* <form class="d-flex  col-2">
                            <button type="button" class="btn btn-danger">Cerrar Sesion</button>
                        </form> */}
                </div>
            </div>
            {/* <div class="container bus-btn">
                <div class="row">
                    <div className="buscador-e">
                        <Buscador />
                        <div className="ingresar">
                            <button type="button" class="btn btn-primary">Ingresar</button>
                        </div>
                    </div>
                </div>

            </div> */}
        </div>
    );
}