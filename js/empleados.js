
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
		  {"data":"idempleados"},
		  {"data":"emp_foto",
		  render:function(data,type,row){
			 return "<img src='../"+data+"' width='80px'> ";
		  }},
		  {"data":"emp_nombre"},		 
		  {"data":"emp_apellido"},		 	
		  {"data":"emp_dni"},		 
          {"data":"emp_direccion"},	
		  
        
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
	var cargo=$("#txt_cargo").val();
	var nombreBenef=$("#txt_nombreBenef").val();
	var dniBenef=$("#txt_dniBenef").val();
	var direccionBenef=$("#txt_direccionBenef").val();
	var movilBenef=$("#txt_movilBenef").val();
	var nombreEsposa=$("#txt_nombreEsposa").val();
	var dniEsposa=$("#txt_dniEsposa").val();
	var movilEsposa=$("#txt_movilEsposa").val();
	var hijos=$("#txt_hijos").val();
	var registroCombo=$("#cbm_registro").val();
	var registro=$("#txt_registro").val();
	var vencimiento=$("#txt_vencimiento").val();
	var observacion=$("#txt_observacion").val();
	
	var foto = $("#seleccionararchivo").val();
	var nombreFoto="";

	var f=new Date();
	var extension=foto.split('.').pop(); /// captura la extension

	if(foto.lenght>0){
		
		 nombreFoto="IMG"+f.getDate()+""+(f.getMonth()+1)+""+f.getFullYear()+""+f.getHours()+""+f.getMilliseconds()+"."+extension;
	}

	

	
	

	

	var formData= new FormData();
	var fo = $("#seleccionararchivo")[0].files[0];
	formData.append('fo',fo);
	formData.append('foto',nombreFoto);
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
				alert("funciona")
			}
		}
	});
	return false;
}

