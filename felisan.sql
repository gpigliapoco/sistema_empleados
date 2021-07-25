-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-07-2021 a las 00:59:26
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `felisan`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `addEmpleado` (IN `nom` VARCHAR(250), IN `apellido` VARCHAR(250), IN `direccion` VARCHAR(250), IN `ciudad` VARCHAR(250), IN `dni` INT, IN `movil` INT, IN `estado` VARCHAR(250), IN `nacimiento` DATE, IN `ingreso` DATE, IN `sexo` CHAR(1), IN `cargo` VARCHAR(250), IN `nombreBenef` VARCHAR(250), IN `direccionBenef` VARCHAR(250), IN `dniBenef` INT, IN `movilBenef` INT, IN `nombreE` VARCHAR(250), IN `dniE` INT, IN `movilE` INT, IN `hijos` INT, IN `moyano` CHAR(1), IN `registro` INT, IN `vencimiento` DATE, IN `observ` TEXT, IN `foto` VARCHAR(250))  INSERT INTO  empleados(empleados.emp_nombre,empleados.emp_apellido,empleados.emp_ciudad,empleados.emp_direccion,empleados.emp_dni,empleados.emp_sexo,empleados.emp_nacimiento,empleados.emp_movil,
                        empleados.emp_ingreso,empleados.emp_estado,empleados.emp_cargo,empleados.emp_estatus,empleados.emp_foto,empleados.emp_nombreBenef,empleados.emp_direccionBenef,empleados.emp_dniBenef,
                        empleados.emp_movilBenef,empleados.emp_nombreEsposa,empleados.emp_dniEsposa,empleados.emp_movilEsposa,empleados.emp_hijos,empleados.emp_registroM,empleados.emp_registro,
                        empleados.emp_vencimiento,empleados.emp_observacion) 
                        VALUES (nom,apellido,ciudad,direccion,dni,sexo,nacimiento,movil,ingreso,estado,cargo,'activo',foto,nombreBenef,direccionBenef,dniBenef,movilBenef,nombreE,dniE,movilE,hijos,
                                moyano,registro,vencimiento,observ)$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `idempleados` int(11) NOT NULL,
  `emp_nombre` varchar(45) DEFAULT NULL,
  `emp_apellido` varchar(45) DEFAULT NULL,
  `emp_ciudad` varchar(45) DEFAULT NULL,
  `emp_direccion` varchar(45) DEFAULT NULL,
  `emp_dni` int(11) DEFAULT NULL,
  `emp_sexo` char(1) DEFAULT NULL,
  `emp_nacimiento` date DEFAULT NULL,
  `emp_movil` int(11) DEFAULT NULL,
  `emp_ingreso` date DEFAULT NULL,
  `emp_estado` varchar(45) DEFAULT NULL,
  `emp_cargo` varchar(45) DEFAULT NULL,
  `emp_estatus` varchar(45) DEFAULT NULL,
  `emp_foto` varchar(250) DEFAULT NULL,
  `emp_nombreBenef` varchar(45) DEFAULT NULL,
  `emp_direccionBenef` varchar(45) DEFAULT NULL,
  `emp_dniBenef` int(11) DEFAULT NULL,
  `emp_movilBenef` int(11) DEFAULT NULL,
  `emp_nombreEsposa` varchar(45) DEFAULT NULL,
  `emp_dniEsposa` int(11) DEFAULT NULL,
  `emp_movilEsposa` int(11) DEFAULT NULL,
  `emp_hijos` int(11) DEFAULT NULL,
  `emp_registroM` char(1) DEFAULT NULL,
  `emp_registro` varchar(45) DEFAULT NULL,
  `emp_vencimiento` date DEFAULT NULL,
  `emp_observacion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`idempleados`, `emp_nombre`, `emp_apellido`, `emp_ciudad`, `emp_direccion`, `emp_dni`, `emp_sexo`, `emp_nacimiento`, `emp_movil`, `emp_ingreso`, `emp_estado`, `emp_cargo`, `emp_estatus`, `emp_foto`, `emp_nombreBenef`, `emp_direccionBenef`, `emp_dniBenef`, `emp_movilBenef`, `emp_nombreEsposa`, `emp_dniEsposa`, `emp_movilEsposa`, `emp_hijos`, `emp_registroM`, `emp_registro`, `emp_vencimiento`, `emp_observacion`) VALUES
(1, 'leo', 'piglia', 'VICENTE LOPEZ', 'JOSE MOLDES 5253', 29985934, 'm', '1982-12-05', 13132321, '1982-12-05', 'soltero', 'nada', 'activo', 'vista/imagenes/usuario.png', 'asda', 'JOSE MOLDES 5253', 312, 13321, 'asda', 3213, 132, 1, 'm', '13213', '1982-12-05', '23131'),
(2, 'asdfas', 'asfsa', '', 'asdf', 0, '', '0000-00-00', 0, '0000-00-00', '', '', 'activo', '', '', '', 0, 0, '', 0, 0, 0, '', '0', '0000-00-00', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`idempleados`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `idempleados` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
