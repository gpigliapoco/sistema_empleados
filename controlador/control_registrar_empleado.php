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
    $nombreBenef = (isset($_POST['nombreBenef'])) ? $_POST['nombreBenef'] : '';
    $direccionBenef = (isset($_POST['direccionBenef'])) ? $_POST['direccionBenef'] : '';
    $dniBenef = (isset($_POST['dniBenef'])) ? $_POST['dniBenef'] : '';
    $movilBenef = (isset($_POST['movilBenef'])) ? $_POST['movilBenef'] : '';
    $nombreEsposa = (isset($_POST['nombreEsposa'])) ? $_POST['nombreEsposa'] : '';
    $dniEsposa = (isset($_POST['dniEsposa'])) ? $_POST['dniEsposa'] : '';
    $movilEsposa = (isset($_POST['movilEsposa'])) ? $_POST['movilEsposa'] : '';
    $hijos = (isset($_POST['hijos'])) ? $_POST['hijos'] : '';
    $registroCombo = (isset($_POST['registroCombo'])) ? $_POST['registroCombo'] : '';
    $registro = (isset($_POST['registro'])) ? $_POST['registro'] : '';
    $vencimiento = (isset($_POST['vencimiento'])) ? $_POST['vencimiento'] : '';
    $observacion = (isset($_POST['observacion'])) ? $_POST['observacion'] : '';


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