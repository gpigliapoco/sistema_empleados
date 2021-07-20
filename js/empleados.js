
var table; //// para poder llamar al reload en otra funcion.

function listar_empleados(){
	table = $("#tabla_empleados").DataTable({
	  "ordering":false,   
	  "bLengthChange":false,
	  "searching": { "regex": false },
	  "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
	  "pageLength": 10,
	  "destroy":true,
	  "async": false ,
	  "processing": true,
	  "ajax":{
		   url:"../controlador/paciente/control_listar_paciente.php",
		  type:'POST'
	  },
	  "columns":[
		  {"data":"idpaciente"},
		  {"data":"paciente"},
		  {"data":"pa_sexo",
		  	render: function (data, type, row ) {
				if(data=='m'){
					return "MASCULINO";                   
				}else{
					return "FEMENINO";                 
				}
			}},
		  {"data":"pa_movil"},		 	
		  {"data":"pa_dni"},		 
          {"data":"pa_direccion"},	
          {"data":"pa_status",
			render:function(data,type,row){
				if(data=='activo'){
					return "<span class='label label-success'>"+data+"</span>";
				}else{
					return "<span class='label label-danger'>"+data+"</span>";
				}
			}},	
            {"defaultContent":"<button style='font-size:13px;' type='button' class='desactivar btn btn-danger'><i class='fa fa-trash'></i></button>&nbsp;<button style='font-size:13px;' type='button' class='activar btn btn-success'><i class='fa fa-check'></i></button>&nbsp;<button style='font-size:13px;' type='button' class='editar btn btn-primary'><i class='fa fa-edit'></i></button>"}
		  
		  
	  ],

	  "language":idioma_espanol,
	  select: true
  });

  
  

  document.getElementById("tabla_paciente_filter").style.display="none";
  $('input.global_filter').on( 'keyup click', function () {
	   filterGlobal();
   } );
   $('input.column_filter').on( 'keyup click', function () {
	   filterColumn( $(this).parents('tr').attr('data-column') );
   });
 

}


function abrirModalRegistro(){
	$("#modal_registro_paciente").modal({backdrop:'static',keyboard:false});
	$("#modal_registro_paciente").modal("show");
}

function registrarHistorial(){
	var nombre=$("#txt_nombre").val();
	var apellido=$("#txt_apellido").val();
	var direccion=$("#txt_direccion").val();
	var ciudad=$("#txt_ciudad").val();
	var dni=$("#txt_dni").val();
	var movil=$("#txt_movil").val();
	var sexo=$("#cbm_sexo").val();
	var nacimiento=$("#txt_fechaN").val();
	var estado=$("#cbm_estadoCivil").val();
	var idConsulta=$("#txt_idConsulta").val();
	var idConsulta=$("#txt_idConsulta").val();
	var idConsulta=$("#txt_idConsulta").val();
	var idConsulta=$("#txt_idConsulta").val();
	var idConsulta=$("#txt_idConsulta").val();




	$.ajax({
		url: "../controlador/historial/control_registrar_fua.php",
		type: "POST",
		data: {
			idHistoria:idHistoria,
			idConsulta:idConsulta,
			
		}
	}).done(function(resp){
		
		if(resp>0){
			registrar_detalle_procedimiento(parseInt(resp));
			registrar_detalle_medicamento(parseInt(resp));
			registrar_detalle_insumos(parseInt(resp));
			Swal.fire("Mensaje De Confirmacion","Datos correctamente, Nuevo Usuario Registrado","success")            
				.then ( ( value ) =>  {
					$("#contenido_principal").load("historial/vista_historialManten.php");
			
			});
		}
		else{
			Swal.fire("Mensaje De Confirmacion","no se puede registrar fua","warning");
		}
	})
}


