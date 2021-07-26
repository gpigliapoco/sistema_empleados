<?php 

    require 'conexion1.php';

    class modelo_empleados extends conexionBD{

        public function listar_empleado(){
            $c= conexionBD::conexionPDO();
            $arreglo = array();
            $sql="CALL listar_empleados";
            $query->$c->prepare($sql);
            $query->execute();
            $result= $query->fetchAll(PDO::FETCH_ASSOC);
            foreach($result as $respuesta){
                $arreglo["data"][]=$respuesta;
            }
            return $arreglo;
            conexionBD=cerrar();
        }


    }


?>