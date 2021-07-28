<?php
	require_once '../../modelo/modelo_sector.php';

$mu= new modelo_especialidad();
$nombre = (isset($_POST['nombre'])) ? $_POST['nombre'] : '';



$consulta=$mu->registrar_sector($nombre);
echo $consulta;



?>