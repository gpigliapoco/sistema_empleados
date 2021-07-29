-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-07-2021 a las 02:18:59
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
-- Base de datos: `felisan1`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `addSector` (IN `nombre` VARCHAR(45))  INSERT INTO sector(sector) VALUES (nombre)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarEmpleado` ()  SELECT empleado.*,sector.sector,CONCAT(empleado.emp_nombre," ",empleado.emp_apellido)as nombre FROM empleado INNER JOIN sector on empleado.idempleado=sector.idsector$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarSector` ()  SELECT * FROM sector$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `idempleado` int(11) NOT NULL,
  `emp_nombre` varchar(45) DEFAULT NULL,
  `emp_apellido` varchar(45) DEFAULT NULL,
  `emp_direccion` varchar(45) DEFAULT NULL,
  `emp_ciudad` varchar(45) DEFAULT NULL,
  `emp_dni` int(11) DEFAULT NULL,
  `emp_movil` int(11) DEFAULT NULL,
  `emp_sexo` char(1) DEFAULT NULL,
  `emp_nacimiento` date DEFAULT NULL,
  `emp_ingreso` date DEFAULT NULL,
  `emp_estado` varchar(45) DEFAULT NULL,
  `emp_status` enum('activo','inactivo') DEFAULT NULL,
  `emp_foto` varchar(250) DEFAULT NULL,
  `sector_idsector` int(11) NOT NULL,
  `emp_esposa` varchar(45) DEFAULT NULL,
  `emp_esposaDni` int(11) DEFAULT NULL,
  `emp_esposaMovil` int(11) DEFAULT NULL,
  `emp_hijos` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`idempleado`, `emp_nombre`, `emp_apellido`, `emp_direccion`, `emp_ciudad`, `emp_dni`, `emp_movil`, `emp_sexo`, `emp_nacimiento`, `emp_ingreso`, `emp_estado`, `emp_status`, `emp_foto`, `sector_idsector`, `emp_esposa`, `emp_esposaDni`, `emp_esposaMovil`, `emp_hijos`) VALUES
(1, 'gerardo', 'piglia', 'quesada 3209', 'vicente lopez', 29985934, 1513213, 'm', '2021-07-15', '2021-07-05', 'soltero', 'activo', NULL, 1, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleadoextras`
--

CREATE TABLE `empleadoextras` (
  `idempleadoExtras` int(11) NOT NULL,
  `ex_nombre` varchar(45) DEFAULT NULL,
  `ex_dni` int(11) DEFAULT NULL,
  `ex_movil` int(11) DEFAULT NULL,
  `ex_direccion` varchar(45) DEFAULT NULL,
  `ex_registroM` enum('s','n') DEFAULT NULL,
  `ex_registro` varchar(45) DEFAULT NULL,
  `ex_vrencimiento` date DEFAULT NULL,
  `empleado_idempleado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sector`
--

CREATE TABLE `sector` (
  `idsector` int(11) NOT NULL,
  `sector` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sector`
--

INSERT INTO `sector` (`idsector`, `sector`) VALUES
(1, 'chofer');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`idempleado`),
  ADD KEY `fk_empleado_sector_idx` (`sector_idsector`);

--
-- Indices de la tabla `empleadoextras`
--
ALTER TABLE `empleadoextras`
  ADD PRIMARY KEY (`idempleadoExtras`),
  ADD KEY `fk_empleadoExtras_empleado1_idx` (`empleado_idempleado`);

--
-- Indices de la tabla `sector`
--
ALTER TABLE `sector`
  ADD PRIMARY KEY (`idsector`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleado`
--
ALTER TABLE `empleado`
  MODIFY `idempleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `empleadoextras`
--
ALTER TABLE `empleadoextras`
  MODIFY `idempleadoExtras` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sector`
--
ALTER TABLE `sector`
  MODIFY `idsector` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD CONSTRAINT `fk_empleado_sector` FOREIGN KEY (`sector_idsector`) REFERENCES `sector` (`idsector`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `empleadoextras`
--
ALTER TABLE `empleadoextras`
  ADD CONSTRAINT `fk_empleadoExtras_empleado1` FOREIGN KEY (`empleado_idempleado`) REFERENCES `empleado` (`idempleado`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
