import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/header.css';

export default function Buscador() {

    return (
        <div>
            <div class="container bus-btn">
                <div class="row">
                    <div className="buscador-e">
                        <div className="buscador col-2">
                            <div class="input-group">
                                <div class="form-outline">
                                    <input type="search" id="form1" class="form-control" value="Buscar" />
                                    {/* <label class="form-label" for="form1">Buscar</label> */}
                                </div>
                                <button type="button" class="btn btn-primary">
                                    <i class="fas fa-search">Buscar</i>
                                </button>
                            </div>
                        </div>
                        <div className="ingresar">
                            {/* <button type="button" class="btn btn-primary">Ingresar</button> */}
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                               Ingresar
                            </button>
                        </div>

            
                    </div>
                </div>
            </div>

                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Ingrese un nuevo registro</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div class="form-group">
                                                <label for="formGroupExampleInput">Nombre</label>
                                                <input type="text" class="form-control" id="formGroupExampleInput"
                                                    placeholder="Ingrese el nombre" />
                                            </div>
                                            <div class="form-group">
                                                <label for="formGroupExampleInput2">Apellido</label>
                                                <input type="text" class="form-control" id="formGroupExampleInput2"
                                                    placeholder="Ingrese el Apellido" />
                                            </div>
                                            <div class="form-group">
                                                <label for="formGroupExampleInput2">2º Apellido</label>
                                                <input type="text" class="form-control" id="formGroupExampleInput2"
                                                    placeholder="Ingrese el 2º Apellido" />
                                            </div>
                                            <div class="form-group">
                                                <label for="formGroupExampleInput2">Móvil</label>
                                                <input type="text" class="form-control" id="formGroupExampleInput2"
                                                    placeholder="Ingrese el Móvil" />
                                            </div>
                                            <div class="form-group">
                                                <label for="formGroupExampleInput2">Email</label>
                                                <input type="text" class="form-control" id="formGroupExampleInput2"
                                                    placeholder="Ingrese el Email" />
                                            </div>
                                            <div class="form-group">
                                                <label for="formGroupExampleInput2">Dirección</label>
                                                <input type="text" class="form-control" id="formGroupExampleInput2"
                                                    placeholder="Ingrese el Dirección" />
                                            </div>
                                            <select class="form-control">
                                                <option>Seleccione ciudad</option>
                                                <option>Medellin</option>
                                                <option>Cali</option>
                                                <option>Bogota</option>
                                                <option>Pereira</option>
                                            </select>
                                            <div class="form-group">
                                                <label for="formGroupExampleInput2">Compañia</label>
                                                <input type="text" class="form-control" id="formGroupExampleInput2"
                                                    placeholder="Ingrese el NIT de la compañia" />
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

        </div>

    );
}