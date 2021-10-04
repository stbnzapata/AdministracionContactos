
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './media/logo.png';
import './css/login2.css';

// import './../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';


function valAcceso(forma, param) {

    var base = "document." + forma + ".";
    var partir = param.split(",");
    var n = partir.length;
    var tam = n - 1;
    var i;
    var bError = false;
    var valor = "";
    var x;
    for (i = 0; i < n; i++) {
        x = eval(base + partir[i] + ".value");
        x = x.replace(/^\s+/, "");
        bError = bError || (x == "");
        if (bError) {
            eval(base + partir[i] + ".value=''");
            document.getElementById('capax_' + partir[i]).style.display = "";
            eval(base + partir[i] + ".focus()");
            valor = 1;
            break;
        } else {
            valor = "";
        }
    }

    var password = document.getElementById('c').value;
    var valido = document.getElementById('capax_c');
    if (password) {
        if (password.length < 8) {
            valido.style.display = "";
            valido.innerText = "La contraseña debe contener mas de 8 caracteres";
            valor = 1;

        } else {
            valido.style.display = "none";
        }
    }
    // comentado mientras se define la ruta
    //if (valor == "") eval(base + "submit()");

}

function validarClave() {

    //document.getElementById('c').addEventListener('input', function () {
    var clave = document.getElementById('c').value;
    var valido = document.getElementById('capax_c');

    //validar que no tenga espacios
    var espacios = false;
    var cont = 0;

    while (!espacios && (cont < clave.length)) {
        if (clave.charAt(cont) == " ")
            espacios = true;
        cont++;
    }

    if (espacios) {
        valido.style.display = "";
        valido.innerText = "La contraseña no puede contener espacios en blanco";
        return false;
    } else {
        valido.style.display = "none";
        return true;
    }

    //});
}

//validar el correo electronico
function validarEmail() {
    //document.getElementById('l').addEventListener('input', function () {

    var campo = document.getElementById('l');
    var valido = document.getElementById('capax_l');
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    document.getElementById('capax_l').style.display = "";

    // if (emailRegex.test(this.state.email) === true){
    if (emailRegex.test(campo.value)) {
        valido.innerText = "válido";
        return true;
    } else {
        valido.innerText = "incorrecto";
        return false;
    }
    //});
}

function ocultar(capa) {
    var base = document.getElementById(capa);
    if (base) base.style.display = "none";
}


export default function Login() {
    return (
        <div>

            <nav>
                <ul>
                    <li><a href="https://www.facebook.com/" target="_black"><i class="fa fa-facebook-f"></i><span>Facebook</span></a></li>
                    <li><a href="https://twitter.com/?lang=es" target="_black"><i class="fa fa-twitter"></i><span>Twitter</span></a></li>
                    <li><a href="https://www.instagram.com/" target="_black"><i class="fa fa-instagram"></i><span>Instagram</span></a></li>
                    <li><a href="https://www.youtube.com/" target="_black"><i class="fa fa-youtube"></i><span>Youtube</span></a></li>
                </ul>
            </nav>
            <section id="cont_admin">

                <section class="container">
                    <div class="row justify-content-around">
                        <div id="wrapper" class="col-lg-4 col-md-12">

                            <form action="" method="post" name="forml" id="forml" class="login-form">

                                <div class="logo_admin">

                                    <img src={logo} />

                                </div>

                                <div class="content">
                                    <input name="l" id="l" type="text" class="input username form-control" placeholder="Email *"
                                        onChange={() => {
                                            validarEmail();
                                        }}
                                        onBlur={() => {
                                            ocultar('capax_l');
                                            ocultar('capax_error');

                                        }} />

                                    <div class="user-icon"></div>

                                    <input name="c" id="c" type="password" class="input password form-control"
                                        placeholder="Clave *"
                                        onChange={() => {
                                            validarClave();
                                        }}
                                        onBlur={() => {
                                            ocultar('capax_c');
                                            ocultar('capax_error');
                                        }} />

                                    <div class="pass-icon"></div>

                                </div>


                                <div id="capax_l" style={{ display: "none" }} class="validacion">Debe ingresar el email</div>
                                <div id="capax_c" style={{ display: "none" }} class="validacion">Debe ingresar la clave</div>

                                <div id="capax_error" style={{ display: "none" }} class="validacion">Usuario o clave son
                                    incorrectos</div>



                                <div class="footer" valign="bottom">
                                    <input type="button" name="botonera" value="Iniciar sesi&oacute;n" class="btn btn-dark"

                                        onClick={() => {
                                            valAcceso('forml', 'l,c')

                                        }}
                                    />


                                </div>

                            </form>
                        </div>

                    </div>

                    <div class="row">
                        <div class="info_contacto col-12">

                            <div class="txt">
                                <p class="mb-0">Tel&eacute;fono: (574) 000 00 00 | Direcci&oacute;n: Cra 0 Numero 100 Bloque0|
                                    Colombia</p>
                            </div>

                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}


