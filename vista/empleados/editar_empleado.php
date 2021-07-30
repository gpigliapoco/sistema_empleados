<script type="text/javascript" src="../js/empleados.js?rev=<?php echo time();?>"></script>
<div class="col-md-12">
          <div class="box box-warning box-solid">
            <div class="box-header with-border">
              <h3 class="box-title">Editar Datos Empleado</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
              </div>
              <!-- /.box-tools -->
            </div>
            <!-- /.box-header -->
            <form onsubmit="return false" method="POST" action="#" enctype="multipart/form-data">
              <div class="box-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                     <label for="">Nombre</label>
                     <input type="text" name="nombre" id="txt_nombreEditar" placeholder="Nombre" class="form-control">
                    </div>
                    <div class="form-group">
                     <label for="">Direccion</label>
                     <input type="text" name="nombre" id="txt_direccionEditar" placeholder="Direccion" class="form-control">
                    </div>
                    <div class="form-group">
                     <label for="">Documento</label>
                     <input type="text" name="nombre" id="txt_dniEditar" placeholder="Documento" class="form-control">
                    </div>
                    <div class="form-group">
                    <div class="col-md-3"></div>
                    
                        <div class="card "  >
                          <img src="./imagenes/avatar.png" class="img-fluid" width="300" id="mostrarimagen">                         
                        </div>
                        <div class="col-md-6">
                          <label for="">Foto perfil</label><br>
                          <input type="file" class="form-control" id="seleccionararchivoEditar">
                        </div>
                     
                     
                     </div>   
                    
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                     <label for="">Apellido</label>
                     <input type="text" name="nombre" id="txt_apellidoEditar" placeholder="Apellido" class="form-control">
                    </div>
                    <div class="form-group">
                     <label for="">Ciudad</label>
                     <input type="text" name="nombre" id="txt_ciudadEditar" placeholder="Ciudad" class="form-control">
                    </div>
                    <div class="form-group">
                     <label for="">Movil</label>
                     <input type="text" name="nombre" id="txt_movilEditar" placeholder="Movil" class="form-control">
                    </div>
                    <div class="form-group">
                     <label for="">Sexo</label>
                     <select class="js-example-basic-single" name="state" id="cbm_sexoEditar" style="width:100%;">
                                <option value="m">MASCULINO</option>
                                <option value="f">FEMENINO</option>
                            </select>
                    </div>
                    <div class="form-group">
                     <label for="">Fecha de nacimiento</label>
                     <input type="date" name="nombre" id="txt_fechaNEditar" class="form-control">
                    </div>
                    <div class="form-group">
                     <label for="">Estado Civil</label>
                     <select class="js-example-basic-single" name="state" id="cbm_estadoCivilEditar" style="width:100%;">
                                <option value="s">SOLTERO</option>
                                <option value="c">CASADO</option>
                            </select>
                    </div>
                    <div class="form-group">
                     <label for="">Fecha Ingreso</label>
                     <input type="date" name="nombre" id="txt_ingresoEditar" class="form-control">
                    </div>
                    <div class="form-group">
                     <label for="">Cargo</label>
                     <input type="text" name="nombre" id="txt_cargoEditar" class="form-control">
                    </div>

                  </div>
                  <div class="col-lg-12"></div>
                  <div class="col-lg-12" style="text-align:center">
                    <b>Datos Del Beneficiario</b>                    
                  </div> 
                    <div class="col-lg-6">
                     <label for="">Nombre</label>
                     <input type="text" name="nombre" id="txt_nombreBenefEditar" placeholder="Nombre" class="form-control">
                    </div>
                    <div class="col-lg-6">
                     <label for="">Documento</label>
                     <input type="text" name="nombre" id="txt_dniBenefEditar" placeholder="Documento" class="form-control">
                    </div>
                    <div class="col-lg-6">
                     <label for="">Direccion</label>
                     <input type="text" name="nombre" id="txt_direccionBenefEditar" placeholder="Direccion" class="form-control">
                    </div>
                    <div class="col-lg-6">
                     <label for="">Movil</label>
                     <input type="text" name="nombre" id="txt_movilBenefEditar" placeholder="Movil" class="form-control">
                    </div>
                    
                    <div class="col-md-12">
          <!-- Custom Tabs -->
          <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
              <li class="active"><a href="#tab_1" data-toggle="tab">Datos Conyuge</a></li>
              <li><a href="#tab_2" data-toggle="tab">Datos adicionales</a></li>
              <li><a href="#tab_3" data-toggle="tab">Observaciones</a></li>
              
              <li class="pull-right"><a href="#" class="text-muted"><i class="fa fa-gear"></i></a></li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="tab_1">
                <div class="row">
                  <div class="col-lg-6">
                     <label for="">Nombre Esposa</label>
                     <input type="text" name="nombre" id="txt_nombreEsposaEditar" placeholder="Nombre" class="form-control">
                  </div>
                  <div class="col-lg-6">
                     <label for="">documento</label>
                     <input type="text" name="nombre" id="txt_dniEsposaEditar" placeholder="Documento" class="form-control">
                  </div>
                  <div class="col-lg-8">
                     <label for="">Movil</label>
                     <input type="text" name="nombre" id="txt_movilEsposaEditar" placeholder="Movil" class="form-control">
                  </div>
                  <div class="col-lg-4">
                     <label for="">Hijos Cantidad</label>
                     <input type="text" name="nombre" id="txt_hijosEditar" placeholder="Cantidad" class="form-control">
                  </div>
                </div>
               
              </div>
              <!-- /.tab-pane -->
              <div class="tab-pane" id="tab_2">
                <div class="row">
                  <div class="col-lg-2">
                     <label for="">Reg.Moyano</label>
                      <select class="js-example-basic-single" name="state" id="cbm_registroEditar" style="width:100%;">
                                <option value="s">SI</option>
                                <option value="n">NO</option>
                            </select>
                  </div>
                  <div class="col-lg-6">
                     <label for="">Registro Conducir</label>
                     <input type="text" name="nombre" id="txt_registroEditar" placeholder="Numero de Registro" class="form-control">
                  </div> <div class="col-lg-4">
                     <label for="">fecha Vencimiento</label>
                     <input type="date" name="nombre" id="txt_vencimientoEditar" class="form-control">
                  </div>
                </div>
              </div>
              <!-- /.tab-pane -->
              <div class="tab-pane" id="tab_3">
                <div class="row">
                  <div class="col-lg-12">
                    <label for="">Observaciones</label>
                    <textarea name="" id="txt_observacionEditar" cols="50" rows="3" class="form-control"></textarea>
                  </div>
                </div>

              </div>
              <!-- /.tab-pane -->
            </div>
            <!-- /.tab-content -->
          </div>
          <!-- nav-tabs-custom -->
        </div>
        <div class="col-lg-12" style="text-align:center">
       <button class="btn btn-success btn-lg" onclick="Editar()">Editar</button>
        </div>
            </div>
            <!-- /.box-body -->
                </div>          
              </div>            
            </form>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <script>
//         function archivo(evt) {
//             var files = evt.target.files; // FileList object
//             // Obtenemos la imagen del campo "file".
//             for (var i = 0, f; f = files[i]; i++) {
//                 //Solo admitimos imágenes.
//                 if (!f.type.match('image.*')) {
//                     continue;
//                 }
//                 var reader = new FileReader();
//                 reader.onload = (function (theFile) {
//                     return function (e) {
//                         // Insertamos la imagen
//                         document.getElementById("list").innerHTML = ['<img class="thumb thumbnail" src="',e.target.result, '" width="200px" title="', escape(theFile.name), '"/>'].join('');
//                     };
//                 })(f);
//                 reader.readAsDataURL(f);
//             }
//         }
//         document.getElementById('file').addEventListener('change', archivo, false);

//         function ver(){
	    

//       	alert(file);
// }

document.getElementById("seleccionararchivo").addEventListener("change", () => {
            var archivoseleccionado = document.querySelector("#seleccionararchivo");
            var archivos = archivoseleccionado.files;
            var imagenPrevisualizacion = document.querySelector("#mostrarimagen");
            // Si no hay archivos salimos de la función y quitamos la imagen
            if (!archivos || !archivos.length) {
            imagenPrevisualizacion.src = "";
            return;
            }
            // Ahora tomamos el primer archivo, el cual vamos a previsualizar
            var primerArchivo = archivos[0];
            // Lo convertimos a un objeto de tipo objectURL
            var objectURL = URL.createObjectURL(primerArchivo);
            // Y a la fuente de la imagen le ponemos el objectURL
            imagenPrevisualizacion.src = objectURL;
        });
    </script>

                         
                    
