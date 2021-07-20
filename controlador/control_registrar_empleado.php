<?php 

	require_once '../../modelo/m_historial.php';

	$mu= new modelo_historial();
	$idHistoria = (isset($_POST['idHistoria'])) ? $_POST['idHistoria'] : '';
    $idConsulta = (isset($_POST['idConsulta'])) ? $_POST['idConsulta'] : '';

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