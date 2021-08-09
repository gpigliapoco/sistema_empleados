<script type="text/javascript" src="../js/empleados.js?rev=<?php echo time();?>"></script>
<div class="col-md-12">
    <div class="box box-primary box-solid">
        <div class="box-header with-border" style="text-align:center">
            <h3 class="box-title"><b> LISTADO DE EMPLEADOS</b></h3>

          
            <div class="box-tools pull-right">
                <button class="btn btn-success" style="width:100%" onclick="cargar_contenido('contenido_principal','empleados/registro_empleados.php')"><i
                        class="glyphicon glyphicon-plus"></i>&nbsp;Nuevo Registro</button>
            </div>
            <!-- /.box-tools -->
        </div>
        <!-- /.box-header -->
      
        <div class="box-body">
            <table id="tabla_empleados" class="display responsive nowrap" style="width:100%">
                <thead >
                    <tr>
                        <th>#</th>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Documento</th>
                        <th>Movil</th>    
                        <th>Sector</th>
                        <th>Estado</th>                                             
                        <th>Acci&oacute;n</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>#</th>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Documento</th>
                        <th>Movil</th>    
                        <th>Sector</th>
                        <th>Estado</th>                                             
                        <th>Acci&oacute;n</th>
                    </tr>
                </tfoot>
            </table>
        </div>
        <!-- /.box-body -->
    </div>
    <!-- /.box -->
</div>
<div class="modal fade" id="modal_persona" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header text-center">                    
                    <h4 class="modal-title bg-primary"><b>DATOS DE EMPLEADO</b></h4>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card "  >
                          <img src="./imagenes/avatar.png" class="img-fluid" width="300" id="mostrarimagenCard">                         
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="modal-body">
                            <div class="row">
                               <label for="" class="col-sm-4 col-form-label"><h4> Nombre</h4> </label>
                                    <div class="col-sm-8 text-left">
                                        <h4><label for="" id="label_nombre" class="form-control-plaintext "></label></h4> 
                                    </div>
                            </div>
                            <div class="row">
                               <label for="" class="col-sm-4 col-form-label"><h4> Apellido</h4> </label>
                                    <div class="col-sm-8">
                                        <h4><label for="" id="label_apellido" class="form-control-plaintext"></label></h4> 
                                    </div>
                            </div> 
                            <div class="row">
                               <label for="" class="col-sm-4 col-form-label"><h4> Direccion</h4> </label>
                                    <div class="col-sm-8">
                                        <h4><label for="" id="label_direccion" class="form-control-plaintext"></label></h4> 
                                    </div>
                            </div> 
                            <div class="row">
                               <label for="" class="col-sm-4 col-form-label"><h4>Ciudad</h4> </label>
                                    <div class="col-sm-8">
                                        <h4><label for="" id="label_ciudad" class="form-control-plaintext"></label></h4> 
                                    </div>
                            </div> 
                            <div class="row">
                               <label for="" class="col-sm-4 col-form-label"><h4>D.N.I</h4> </label>
                                    <div class="col-sm-8">
                                        <h4><label for="" id="label_dni" class="form-control-plaintext"></label></h4> 
                                    </div>
                            </div>
                            <div class="row">
                               <label for="" class="col-sm-4 col-form-label"><h4>Movil</h4> </label>
                                    <div class="col-sm-8">
                                        <h4><label for="" id="label_movil" class="form-control-plaintext"></label></h4> 
                                    </div>
                            </div>    
                            <div class="row">
                               <label for="" class="col-sm-4 col-form-label"><h4>Fecha nacimiento</h4> </label>
                                    <div class="col-sm-8">
                                        <h4><label for="" id="label_nacimiento" class="form-control-plaintext"></label></h4> 
                                    </div>
                            </div>    
                            <div class="row">
                               <label for="" class="col-sm-4 col-form-label"><h4>Fecha Ingreso</h4> </label>
                                    <div class="col-sm-8">
                                        <h4><label for="" id="label_ingreso" class="form-control-plaintext"></label></h4> 
                                    </div>
                            </div>                              
                  
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="modal-body">
                            <div class="row ">
                               <label for="" class="col-sm-4 col-form-label "><h4>Estado</h4> </label>
                                    <div class="col-sm-8 text-left">
                                        <h4><label for="" id="label_estado" class="form-control-plaintext "></label></h4> 
                                    </div>
                            </div>
                            <div class="row">
                               <label for="" class="col-sm-4 col-form-label "><h4>Esposa</h4> </label>
                                    <div class="col-sm-8 text-left">
                                        <h4><label for="" id="label_nombreE" class="form-control-plaintext "></label></h4> 
                                    </div>
                            </div>
                            <div class="row">
                               <label for="" class="col-sm-4 col-form-label "><h4>D.N.I</h4> </label>
                                    <div class="col-sm-8 text-left">
                                        <h4><label for="" id="label_dniE" class="form-control-plaintext "></label></h4> 
                                    </div>
                            </div>
                            <div class="row">
                               <label for="" class="col-sm-4 col-form-label "><h4>Movil</h4> </label>
                                    <div class="col-sm-8 text-left">
                                        <h4><label for="" id="label_movilE" class="form-control-plaintext "></label></h4> 
                                    </div>
                            </div>
                            <div class="row">
                               <label for="" class="col-sm-4 col-form-label "><h4>Hijod</h4> </label>
                                    <div class="col-sm-8 text-left">
                                        <h4><label for="" id="label_hijos" class="form-control-plaintext "></label></h4> 
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>         
                <div class="modal-header text-center">                    
                    <h4 class="modal-title bg-primary"><b>DATOS DE BENEFICIARIO</b></h4>
                </div> 
                <div class="row">
                    <div class="col-md-6">
                        <div class="modal-body">
                        <div class="row">
                               <label for="" class="col-sm-3 col-form-label"><h4> Nombre</h4> </label>
                                    <div class="col-sm-6 text-left">
                                        <h4><label for="" id="label_nombreB" class="form-control-plaintext "></label></h4> 
                                    </div>
                            </div> 
                            <div class="row">
                               <label for="" class="col-sm-3 col-form-label"><h4> D.N.I</h4> </label>
                                    <div class="col-sm-6 text-left">
                                        <h4><label for="" id="label_dniB" class="form-control-plaintext "></label></h4> 
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="modal-body">
                        <div class="row">
                               <label for="" class="col-sm-3 col-form-label"><h4> Direccion</h4> </label>
                                    <div class="col-sm-6 text-left">
                                        <h4><label for="" id="label_direccionB" class="form-control-plaintext "></label></h4> 
                                    </div>
                            </div>
                            <div class="row">
                               <label for="" class="col-sm-3 col-form-label"><h4> Movil</h4> </label>
                                    <div class="col-sm-6 text-left">
                                        <h4><label for="" id="label_movilB" class="form-control-plaintext "></label></h4> 
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">                
                <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-close"><b>&nbsp;Cerrar</b></i></button>
            </div>
        </div>
        </div>
    </div>

<script>
$(document).ready(function() {
    listar_empleados();


});
</script>