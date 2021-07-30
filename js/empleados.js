
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
		   url:"../controlador/control_listar_empleados.php",
		  type:'POST'
	  },
	  "columns":[
		  {"data":"idempleado"},
		  {"data":"emp_foto",
		  render:function(data,type,row){
			 return "<img src='../"+data+"' width='80px'> ";
		  }},
		  {"data":"nombre"},		 
		  {"data":"emp_apellido"},		 	
		  {"data":"emp_dni"},		 
          {"data":"emp_direccion"},	
		  {"data":"emp_status",
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

  
  

  document.getElementById("tabla_empleados_filter").style.display="none";
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

function comboRol(){
	$.ajax({
		url: "../controlador/control_comborol.php",
		type: "POST",
	}).done(function(resp){
	//	alert(resp);  // para ver que datos trae
		var data=JSON.parse(resp);
		var cadena="";
	/* 	 alert(data);
		alert(data[0].rol);
		for(var i=0;i < data.length;i++){
			alert(data[i].rol);			// prueba de recorrido de datos.
		}  */
		if(data.length>0){
			for(var i=0;i < data.length;i++){
				cadena+="<option value='"+data[i].idsector+"'>"+data[i].sector+"</option>";
			}
			$("#cbm_cargo").html(cadena);
			//$("#cbm_rolEditar").html(cadena);
		}
	})
}


function Registrar(){
	var nombre=$("#txt_nombre").val();
	var apellido=$("#txt_apellido").val();
	var direccion=$("#txt_direccion").val();
	var ciudad=$("#txt_ciudad").val();
	var dni=$("#txt_dni").val();
	var movil=$("#txt_movil").val();
	var sexo=$("#cbm_sexo").val();
	var nacimiento=$("#txt_fechaN").val();
	var estado=$("#cbm_estadoCivil").val();
	var ingreso=$("#txt_ingreso").val();
	var cargo=$("#cbm_cargo").val();	
	var nombreEsposa=$("#txt_nombreEsposa").val();
	var dniEsposa=$("#txt_dniEsposa").val();
	var movilEsposa=$("#txt_movilEsposa").val();
	var hijos=$("#txt_hijos").val();
	var nombreBenef=$("#txt_nombreBenef").val();
	var dniBenef=$("#txt_dniBenef").val();
	var direccionBenef=$("#txt_direccionBenef").val();
	var movilBenef=$("#txt_movilBenef").val();
	var registroCombo=$("#cbm_registro").val();
	var registro=$("#txt_registro").val();
	var vencimiento=$("#txt_vencimiento").val();
	var observacion=$("#txt_observacion").val();

	
	
	var foto = $("#seleccionararchivo").val();
	

	var f=new Date();
	var extension=foto.split('.').pop(); /// captura la extension
	nombreFoto="";
	
	if(foto.lenght>0){	
		 nombreFoto="IMG"+f.getDate()+""+(f.getMonth()+1)+""+f.getFullYear()+""+f.getHours()+""+f.getMilliseconds()+"."+extension;
	

	     }
	if(nombre.lenght==0 || apellido.lenght == 0 || dni.lenght ==0 || direccion.lenght==0){
		return Swal.fire("llenar campos vacios","warning");
	}
	
	

	

	var formData= new FormData();
	var fo = $("#seleccionararchivo")[0].files[0];
	formData.append('fo',fo);
	formData.append('nombreFoto',nombreFoto);
	formData.append('nombre',nombre);
	formData.append('apellido',apellido);
	formData.append('direccion',direccion);
	formData.append('ciudad',ciudad);
	formData.append('dni',dni);
	formData.append('movil',movil);
	formData.append('sexo',sexo);
	formData.append('nacimiento',nacimiento);
	formData.append('estado',estado);
	formData.append('ingreso',ingreso);
	formData.append('cargo',cargo);
	formData.append('nombrebenef',nombreBenef);
	formData.append('direccionBenef',direccionBenef);
	formData.append('dniBenef',dniBenef);
	formData.append('movilBenef',movilBenef);
	formData.append('nombreEsposa',nombreEsposa);
	formData.append('dniEsposa',dniEsposa);
	formData.append('movilEsposa',movilEsposa);
	formData.append('hijos',hijos);
	formData.append('registroCombo',registroCombo);
	formData.append('registro',registro);
	formData.append('vencimiento',vencimiento);
	formData.append('observacion',observacion);

	$.ajax({
		url:'../controlador/control_registrar_empleado.php',
		type:'post',
		data:formData,		
		contentType:false,
		processData:false,
		success: function(respuesta){
			alert(respuesta);
		
			if(respuesta ==1){
				Swal.fire('Empleado registrado','success');
				cargar_contenido('contenido_principal','empleados/registro_empleados.php');
			}
		}
	});
	return false;
}




function limpiarRegistros(){

	$("#txt_nombre").val("");
	$("#txt_apellido").val("");
	$("#txt_direccion").val("");
	$("#txt_ciudad").val("");
	$("#txt_dni").val("");
	$("#txt_movil").val("");
	$("#cbm_sexo").val("");
	$("#txt_fechaN").val("");
	$("#cbm_estadoCivil").val("");
	$("#txt_ingreso").val("");
	$("#txt_cargo").val("");
	$("#txt_nombreBenef").val("");
	$("#txt_dniBenef").val("");
	$("#txt_direccionBenef").val("");
	$("#txt_movilBenef").val("");
	$("#txt_nombreEsposa").val("");
	$("#txt_dniEsposa").val("");
	$("#txt_movilEsposa").val("");
	$("#txt_hijos").val("");
	$("#cbm_registro").val("");
	$("#txt_registro").val("");
	$("#txt_vencimiento").val("");
	$("#txt_observacion").val("");
	
	$("#seleccionararchivo").val("");

}

