<script type="text/javascript" src="../js/empleados.js?rev=<?php echo time();?>"></script>
<div class="col-md-12">
    <div class="box box-default box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">BIENVENIDO A EMPLEADOS</h3>

          
            <div class="box-tools pull-right">
                <button class="btn btn-primary" style="width:100%" onclick="cargar_contenido('contenido_principal','empleados/registro_empleados.php')"><i
                        class="glyphicon glyphicon-plus"></i>&nbsp;Nuevo Registro</button>
            </div>
            <!-- /.box-tools -->
        </div>
        <!-- /.box-header -->
      
        <div class="box-body">
            <table id="tabla_empleados" class="display responsive nowrap" style="width:100%">
                <thead>
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

<script>
$(document).ready(function() {
    listar_empleados();


});
</script>