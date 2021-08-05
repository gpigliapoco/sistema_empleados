
var table; //// para poder llamar al reload en otra funcion.

function listar_empleados(){
	table = $("#tabla_empleados").DataTable({
	  "ordering":false,   
	  "bLengthChange":false,
	  "searching": { "regex": true },
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
		  {"data":"emp_dni"},		 	
		  {"data":"emp_movil"},		 
          {"data":"sector"},	
		  {"data":"emp_status",
			render:function(data,type,row){
				if(data=='activo'){
					return "<span class='label label-success'>"+data+"</span>";
				}else{
					return "<span class='label label-danger'>"+data+"</span>";
				}
			}},	
			{"data":"emp_status",
			render:function(data,type,row){
				if(data=='activo'){
					return "<button style='font-size:13px;' type='button' class='desactivar btn btn-danger'><i class='fa fa-times'></i></button>&nbsp;<button style='font-size:13px;' type='button' class='activar btn btn-success' disabled><i class='fa fa-check'></i></button>&nbsp;<button style='font-size:13px;' type='button' class='editar btn btn-primary'><i class='fa fa-edit'></i></button>&nbsp;<button style='font-size:13px;' type='button' class='ver btn btn-primary'><i class='fa fa-eye'></i></button>";
				}else{
					return "<button style='font-size:13px;' type='button' class='desactivar btn btn-danger' disabled><i class='fa fa-times'></i></button>&nbsp;<button style='font-size:13px;' type='button' class='activar btn btn-success'><i class='fa fa-check'></i></button>&nbsp;<button style='font-size:13px;' type='button' class='editar btn btn-primary'><i class='fa fa-edit'></i></button>&nbsp;<button style='font-size:13px;' type='button' class='ver btn btn-primary'><i class='fa fa-eye'></i></button>";
				}
			}},	
		  
        
           
		  
		  
	  ],

	  "language":idioma_espanol,
	  select: true
  });

  
  

  /* document.getElementById("tabla_empleados_filter").style.display="none";
  $('input.global_filter').on( 'keyup click', function () {
	   filterGlobal();
   } );
   $('input.column_filter').on( 'keyup click', function () {
	   filterColumn( $(this).parents('tr').attr('data-column') );
   }); */
 

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
			$("#cbm_cargoEditar").html(cadena);
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

	
	 let nombreFoto="";
	
	if(foto.length>0){	
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
	formData.append('nombreBenef',nombreBenef);
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
				cargar_contenido('contenido_principal','empleados/vista_empleados.php');
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


function modificarStatus(idemple,status){	
	
	$.ajax({
		url:"../controlador/control_modificar_status.php",
		type: "POST",
		data:{
			idemple:idemple,
			status:status
			
		}
	}).done(function(resp){
		
	   table.ajax.reload();
	})

}

$('#tabla_empleados').on('click','.activar',function(){
	var data =table.row($(this).parents('tr')).data();
	
    modificarStatus(data.idempleado,'ACTIVO');
       

})

$('#tabla_empleados').on('click','.desactivar',function(){
	var data =table.row($(this).parents('tr')).data();
	
	 modificarStatus(data.idempleado,'INACTIVO');
       

})

function editarEmple(id){
	$.ajax({
		url: "../controlador/control_listarEditar.php",
		type: "POST",
		data:{
			id
		}
	}).done(function(resp){
	//	alert(resp);  // para ver que datos trae
		var data=JSON.parse(resp);
		
		alert(data[0].emp_foto);
		
		$("#txt_idempleado").val(data[0].idempleado);
		$("#txt_nombreEditar").val(data[0].emp_nombre);
		$("#txt_nombreEditar").val(data[0].emp_nombre);
		$("#txt_apellidoEditar").val(data[0].emp_apellido);
		$("#txt_direccionEditar").val(data[0].emp_direccion);
		$("#txt_ciudadEditar").val(data[0].emp_ciudad);
		$("#txt_dniEditar").val(data[0].emp_dni);
		$("#txt_fechaNEditar").val(data[0].emp_nacimiento);
		$("#cbm_estadoCivilEditar").val(data[0].emp_estado).trigger("change");
		$("#txt_ingresoEditar").val(data[0].emp_ingreso);
		$("#cbm_cargoEditar").val(data[0].sector_idsector).trigger("change");	
		$("#txt_nombreEsposaEditar").val(data[0].emp_esposa);
		$("#txt_dniEsposaEditar").val(data[0].emp_esposaDni);
		$("#txt_movilEsposaEditar").val(data[0].emp_esposaMovil);
		$("#txt_hijosEditar").val(data[0].emp_hijos);
		$("#txt_nombreBenefEditar").val(data[0].ex_nombre);
		$("#txt_dniBenefEditar").val(data[0].ex_dni);
		$("#txt_direccionBenefEditar").val(data[0].ex_direccion);
		$("#txt_movilBenefEditar").val(data[0].ex_movil);
		$("#cbm_registroEditar").val(data[0].ex_moyano).trigger("change");
		$("#txt_registroEditar").val(data[0].ex_registro);
		$("#txt_vencimientoEditar").val(data[0].ex_vrencimiento);
		$("#txt_observacionEditar").val(data[0].ex_observacion);
		$("#mostrarimagenEditar").attr("src","../"+data[0].emp_foto);

	})
}


$('#tabla_empleados').on('click','.editar',function(){

	var data =table.row($(this).parents('tr')).data();

	alert(data.idempleado);

	$("#contenido_principal").load("../vista/empleados/editar_empleado.php");

	
	editarEmple(data.idempleado);

	

	/* $("#txt_movilEditar").val(data.emp_movil);
	$("#cbm_sexoEditar").val(data.emp_sexo).trigger("change");
	$("#txt_nombreEditar").val(data.emp_nombre);
	$("#txt_apellidoEditar").val(data.emp_apellido);
	$("#txt_direccionEditar").val(data.emp_direccion);
	$("#txt_ciudadEditar").val(data.emp_ciudad);
	$("#txt_dniEditar").val(data.emp_dni);
	$("#txt_fechaNEditar").val(data.emp_nacimiento);
	$("#cbm_estadoCivilEditar").val(data.emp_estado).trigger("change");
	$("#txt_ingresoEditar").val(data.emp_ingreso);
	$("#cbm_cargoEditar").val(data.sector_idsector).trigger("change");	
	$("#txt_nombreEsposaEditar").val(data.emp_esposa);
	$("#txt_dniEsposaEditar").val(data.emp_esposaDni);
	$("#txt_movilEsposaEditar").val(data.emp_esposaMovil);
	$("#txt_hijosEditar").val(data.emp_hijos);
	$("#txt_nombreBenefEditar").val(data.ex_nombre);
	$("#txt_dniBenefEditar").val(data.ex_dni);
	$("#txt_direccionBenefEditar").val(data.ex_direccion);
	$("#txt_movilBenefEditar").val(data.ex_movil);
	$("#cbm_registroEditar").val(data.ex_moyano).trigger("change");
	$("#txt_registroEditar").val(data.ex_registro);
	$("#txt_vencimientoEditar").val(data.ex_vrencimiento);
	$("#txt_observacionEditar").val(data.ex_observacion);  */
       
	
})

function updateEmple(){

	var id=$("#txt_idempleado").val();
	var nombre=$("#txt_nombreEditar").val();
	var apellido=$("#txt_apellidoEditar").val();
	var direccion=$("#txt_direccionEditar").val();
	var ciudad=$("#txt_ciudadEditar").val();
	var dni=$("#txt_dniEditar").val();
	var movil=$("#txt_movilEditar").val();
	var sexo=$("#cbm_sexoeditar").val();
	var nacimiento=$("#txt_fechaNEditar").val();
	var estado=$("#cbm_estadoCivilEditar").val();
	var ingreso=$("#txt_ingresoEditar").val();
	var cargo=$("#cbm_cargoEditar").val();	
	var nombreEsposa=$("#txt_nombreEsposaEditar").val();
	var dniEsposa=$("#txt_dniEsposaEditar").val();
	var movilEsposa=$("#txt_movilEsposaEditar").val();
	var hijos=$("#txt_hijosEditar").val();
	var nombreBenef=$("#txt_nombreBenefEditar").val();
	var dniBenef=$("#txt_dniBenefEditar").val();
	var direccionBenef=$("#txt_direccionBenefEditar").val();
	var movilBenef=$("#txt_movilBenefEditar").val();
	var registroCombo=$("#cbm_registroEditar").val();
	var registro=$("#txt_registroEditar").val();
	var vencimiento=$("#txt_vencimientoEditar").val();
	var observacion=$("#txt_observacionEditar").val();

	$.ajax({
		url:"../controlador/control_editar_empleado.php",
		type:"POST",
		data:{
			id:id,
			nombre:nombre,
			apellido:apellido,
			direccion:direccion,
			ciudad:ciudad,
			dni:dni,
			movil:movil,
			sexo:sexo,
			nacimiento:nacimiento,
			estado:estado,
			ingreso:ingreso,
			cargo:cargo,
			nombreEsposa:nombreEsposa,
			dniEsposa:dniEsposa,
			movilEsposa:movilEsposa,
			hijos:hijos,
			nombreBenef:nombreBenef,
			dniBenef:dniBenef,
			direccionBenef:direccionBenef,
			movilBenef:movilBenef,
			registroCombo:registroCombo,
			registro:registro,
			vencimiento:vencimiento,
			observacion:observacion
		}
	}).done(function(resp){

		if(resp>0){
			Swal.fire({
				icon: 'success',
				title: 'Editado',
				text: 'Datos de Empleado Editados'
				
			  });
			  cargar_contenido('contenido_principal','empleados/vista_empleados.php');
		}

	})

}

function actualizarfoto(){

	var id=$("#txt_idempleado").val();
	var foto = $("#seleccionararchivoEditar").val();
	

	var f=new Date();
	var extension=foto.split('.').pop(); /// captura la extension

	
	 let nombreFoto="";
	
	if(foto.length>0){	
		 nombreFoto="IMG"+f.getDate()+""+(f.getMonth()+1)+""+f.getFullYear()+""+f.getHours()+""+f.getMilliseconds()+"."+extension;
	

	     } 

	if(foto.length==0){
		return Swal.fire("EL campo esta vacio","warning");
	}
	
	
	
	

	var formData= new FormData();
	var fo = $("#seleccionararchivo")[0].files[0];
	formData.append('fo',fo);
	formData.append('nombreFoto',nombreFoto);
	formData.append('id',id);

	$.ajax({
		url:'../controlador/control_update_foto.php',
		type:'post',
		data:formData,		
		contentType:false,
		processData:false,
		success: function(respuesta){
			alert(respuesta);
		
			if(respuesta ==1){
				Swal.fire('Foto actualizada','success');
				
			}
		}
	});
	return false;
}
