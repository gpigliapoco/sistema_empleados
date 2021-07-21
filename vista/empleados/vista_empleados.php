<script type="text/javascript" src="../js/empleados.js?rev=<?php echo time();?>"></script>
<div class="col-md-12">
    <div class="box box-warning box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">BIENVENIDO A EMPLEADOS</h3>

            <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
            </div>
            <!-- /.box-tools -->
        </div>
        <!-- /.box-header -->
        <div class="form-group">
            <div class="col-lg-10">
                <div class="input-group">
                    <input type="text" class="global_filter form-control" id="global_filter"
                        placeholder="Ingresar dato a buscar">
                    <span class="input-group-addon"><i class="fa fa-search"></i></span>
                </div>
            </div>
            <div class="col-lg-2">
                <button class="btn btn-danger" style="width:100%" onclick="cargar_contenido('contenido_principal','empleados/registro_empleados.php')"><i
                        class="glyphicon glyphicon-plus"></i>Nuevo Registro</button>
            </div>
        </div>
        <div class="box-body">
            <table id="tabla_empleados" class="display responsive nowrap" style="width:100%">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Documento</th>
                        <th>Movil</th>
                        <th>Direccion</th>
                        <th>Status</th>
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
                        <th>Direccion</th>
                        <th>Status</th>
                        <th>Acci&oacute;n</th>
                    </tr>
                </tfoot>
            </table>
        </div>
        <!-- /.box-body -->
    </div>
    <!-- /.box -->
</div>

<script>
$(document).ready(function() {
   // listar_paciente();


});
</script>