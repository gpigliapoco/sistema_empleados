<?php 

	require_once '../../modelo/m_historial.php';

	$mu= new modelo_historial();
	$nombre = (isset($_POST['nombre'])) ? $_POST['nombre'] : '';
    $apellido = (isset($_POST['apellido'])) ? $_POST['apellido'] : '';
    $direccion = (isset($_POST['direccion'])) ? $_POST['direccion'] : '';
    $ciudad = (isset($_POST['ciudad'])) ? $_POST['ciudad'] : '';
    $dni = (isset($_POST['dni'])) ? $_POST['dni'] : '';
    $movil = (isset($_POST['movil'])) ? $_POST['movil'] : '';
    $sexo = (isset($_POST['sexo'])) ? $_POST['sexo'] : '';
    $nacimiento = (isset($_POST['nacimiento'])) ? $_POST['nacimiento'] : '';
    $estado = (isset($_POST['estado'])) ? $_POST['estado'] : '';
    $ingreso = (isset($_POST['ingreso'])) ? $_POST['ingreso'] : '';
    $cargo = (isset($_POST['cargo'])) ? $_POST['cargo'] : '';
    $nombre = (isset($_POST['nombre'])) ? $_POST['nombre'] : '';
    $nombre = (isset($_POST['nombre'])) ? $_POST['nombre'] : '';
    $nombre = (isset($_POST['nombre'])) ? $_POST['nombre'] : '';

    date_default_timezone_set("America/Caracas");
    $fechaHora = date('Y-m-d h:i:s');
    $estado = '1';

    $nombre_de_foto_perfil = "Sisfarmacia-".date('Y-m-d-h-i-s');
    $filename = $nombre_de_foto_perfil."_".$_FILES['file']['name'];

    $location = "update_usuarios/".$filename;

    move_uploaded_file($_FILES['file']['tmp_name'],$location);

   
    
    $consulta=$mu->registrar_fua($idHistoria,$idConsulta);
	echo $consulta;
    
    

 ?>