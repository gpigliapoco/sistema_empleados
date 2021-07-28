var table; //// para poder llamar al reload en otra funcion.

function listar_sector(){
	 table = $("#tabla_sector").DataTable({
	  "ordering":false,   
	  "bLengthChange":false,
	  "searching": { "regex": false },
	  "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
	  "pageLength": 10,
	  "destroy":true,
	  "async": false ,
	  "processing": true,
	  "ajax":{
		   url:"../controlador/especialidad/control_especial_listar.php",
		  type:'POST'
	  },
	  "columns":[
		  {"data":"idsector"},
		  {"data":"sec_nombre"},        		  
		  
	  ],

	  "language":idioma_espanol,
	  select: true
  });
  

  document.getElementById("tabla_sector_filter").style.display="none";
  $('input.global_filter').on( 'keyup click', function () {
	   filterGlobal();
   } );
   $('input.column_filter').on( 'keyup click', function () {
	   filterColumn( $(this).parents('tr').attr('data-column') );
   });
 

}

function AbrirModalRegistro(){
	$("#modal_registro_sector").modal({backdrop:'static',keyboard:false});
	$("#modal_registro_sector").modal("show");
}

 

function registrarEspecial(){
	var nombre= $("#txt_nombre").val();
	

	if(nombre.lenght==0 || fecha.lenght==0){
		return Swal.fire("Hay campos vacios","warning");
	}
		$.ajax({
			url: "../controlador/especialidad/control_especial_registrar.php",
			type: "POST",
			data: {
				nombre:nombre,
				
			}
		}).done(function(resp){
			alert(resp);
		})

}


