<script type="text/javascript" src="../js/sector.js?rev=<?php echo time();?>"></script>
<div class="col-md-12">
    <div class="panel panel-primary">
        <div class="panel-heading with-border">
              <h3 class="panel-title">BIENVENIDO A SECTOR </h3>
             
           
              <!-- /.box-tools -->
        </div>
            <!-- /.box-header -->
            
            <div class="box-body">
                <div class="row">
                    <div class="col-md-6">
                        <table id="tabla_sector" class="display responsive nowrap" style="width:100%">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>                                            
                                   
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>                                              
                                    
                                </tr>
                            </tfoot>
                        </table>   
                    </div>
                    <div class="col-md-6">
                        <div class="panel">
                            <form autocomplete="false" onsubmit="return false">
                            <div class="panel-content">
                                <div class="panel-header" style="text-align:center">
                                
                                <h4 class="panel-title"><b>Registrar sector </b></h4>
                                </div>
                                <div class="panel-body">
                                    <div class="col-lg-12">
                                        <label for="">Sector</label>
                                        <input type="text" class="form-control" id="txt_nombre" placeholder="Ingrese sector"><br>
                                    </div>               
                                </div>            
                                <div class="panel-footer" style="text-align:center" >
                                    <button class="btn btn-primary" onclick="registrarSector()"><i class="fa fa-check"><b>&nbsp;Registrar</b></i></button>
                                
                                </div>
                            </div>
            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.box-body -->
    </div>
          <!-- /.box -->
</div>


<script>
$(document).ready(function() {
    listar_sector();
    
} );



</script>