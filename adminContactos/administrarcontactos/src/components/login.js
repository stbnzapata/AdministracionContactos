
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.png';
import fb from './fb.svg';
import ing from './ing.svg';
import youtube from './youtube.svg';
import pinterest from './pinterest.svg';
import './login.css';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
const sesion = false;



// import './login.css';

export default function Login() {
    return (


        <section id="cont_admin">
            <div className="cont_tamano">

                <div id="wrapper">

                    <form action="" method="post" name="" id="" className="login-form">

                        <div className="logo_admin" >

                            <img src={logo} />

                        </div>

                        <div className="content">

                            <div class="content">
                                <input name="email" id="email" type="email"  class="input username" placeholder="Correo *" />
                                <input name="password" id="password" type="password" class="input password"  placeholder="Clave *" />
                            </div>


                            <div class="footer" valign="bottom">
                                <input type="button" name="botonera" value="INGRESAR" class="boton" />
                            </div>

                        </div>

                    
                        <div className="remate_admin">
                            <div className="derechos">
                                <p>
                                    Dise&ntilde;o y Desarrollo
                                    <a href="#">
                                        MINTICS
                                    </a>
                                </p>
                            </div>
                        </div>

                    </form>
                </div>

                <article className="cont_redes_inferior">
                    <ul className="redes_inferior">
                        <li>
                            <a href="https://es-la.facebook.com/" target="_blank" title="Linkedin">
                                <img src={fb} />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/" target="_blank" title="Facebook">
                                <img src={ing} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/" target="_blank" title="Facebook">
                                <img src={youtube} />
                            </a>
                        </li>
                        <li>
                            <a href="https://co.pinterest.com/" target="_blank" title="Linkedin">
                                <img src={pinterest} />
                            </a>
                        </li>
                    </ul>
                </article>



                <div className="info_contacto">

                    <div className="txt">
                        <p>Tel&eacute;fono: (574) 000 00 00 | Direcci&oacute;n: Cra 0 Numero 100 Bloque0|
                            Colombia</p>
                    </div>

                </div>


            </div>
        </section>
    );
}


