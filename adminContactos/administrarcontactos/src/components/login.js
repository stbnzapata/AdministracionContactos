
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
                            <div>
                                <Formik
                                    initialValues={{

                                        email: "",
                                        clave: "",

                                    }}
                                    validationSchema={Yup.object().shape({

                                        email: Yup.string()
                                            .email("El correo electrónico es incorrecto")
                                            .required("Por favor introduzca su correo electrónico"),
                                        clave: Yup.string()

                                            .min(8, 'Minimo 8 caracteres')
                                            .matches(/[a-zA-Z]/, 'Ingrese caracteres validos')
                                            .required("Ingrese por favor la clave"),
                                            
                                    })}
                                    onSubmit={(values, { setSubmitting }) => {
                                        const timeOut = setTimeout(() => {
                                            console.log(values);
                                            setSubmitting(false);

                                            clearTimeout(timeOut);
                                        }, 1000);
                                    }}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleSubmit,
                                        isSubmitting,
                                        validating,
                                        valid,
                                    }) => {
                                        return (
                                            <Form name="contact" method="post" onSubmit={handleSubmit}>


                                                <div className="content">
                                                    <label htmlFor="email" >

                                                        <Field
                                                            type="email"
                                                            name="email"
                                                            autoComplete="email"
                                                            placeholder="Su correo"
                                                            className="input username"
                                                        />
                                                    </label>
                                                    <ErrorMessage name="email">{(msg) => <p className="camp_requerido">{msg}</p>}</ErrorMessage>


                                                    <label htmlFor="clave" >

                                                        <Field
                                                            type="text"
                                                            name="clave"
                                                            autoComplete="name"
                                                            placeholder="Su clave"
                                                            className="input password"
                                                        />
                                                    </label>
                                                    {errors.clave && touched.clave && <p className="camp_requerido" >{errors.clave}</p>}
                                                </div>

                                                <div className="footer" valign="bottom">
                                                    <button type="submit" className="boton" disabled={!valid || isSubmitting}>
                                                        {isSubmitting ? `Submiting...` : `INGRESAR`}
                                                    </button>
                                                </div>
                                            </Form>
                                        );
                                    }}
                                </Formik>
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


