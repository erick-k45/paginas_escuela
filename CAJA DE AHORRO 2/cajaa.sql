-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-11-2016 a las 15:12:54
-- Versión del servidor: 5.6.26
-- Versión de PHP: 5.5.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cajaa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cli`
--

CREATE TABLE IF NOT EXISTS `cli` (
  `IDECLI` varchar(10) NOT NULL,
  `PASSCL` varchar(10) NOT NULL,
  `APPCLI` varchar(15) NOT NULL,
  `APMCLI` varchar(15) NOT NULL,
  `NOMCLI` varchar(20) NOT NULL,
  `CALCLI` varchar(25) NOT NULL,
  `NUMCLI` int(11) NOT NULL,
  `COLCLI` varchar(25) NOT NULL,
  `COPCLI` int(11) NOT NULL,
  `TELCLI` varchar(10) NOT NULL,
  `EMACLI` varchar(50) NOT NULL,
  `SUCCLI` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cli`
--

INSERT INTO `cli` (`IDECLI`, `PASSCL`, `APPCLI`, `APMCLI`, `NOMCLI`, `CALCLI`, `NUMCLI`, `COLCLI`, `COPCLI`, `TELCLI`, `EMACLI`, `SUCCLI`) VALUES
('AACA940610', '12220648', 'Ama', 'Cañete', 'Adrian', 'FRESNO', 3, 'SAN BARTOLO', 74570, '2493351806', 'ama@hotmail.com', 1),
('AEMA940621', '13220064', 'Atemiz', 'Miguel', 'Arely', '...........', 0, '...............', 72000, '2222000000', 'atemiz@yahoo.com', 1),
('AUMV950110', '13220692', 'Aquino', 'Morales', 'Venice', '...........', 0, '...............', 72000, '2222000000', 'aquino@gmail.com', 1),
('AUVK930609', '11220720', 'Aguirre', 'Viveros', 'Karla', '...........', 0, '...............', 72000, '2222000000', 'aguirre@yahoo.com', 2),
('BABA941106', '15220038', 'Barrera', 'Becerra', 'Aldo', '...........', 0, '...............', 72000, '2222000000', 'barrera@yahoo.com', 2),
('BAGE941015', '12220652', 'Barrios', 'Gonzalez', 'Erick', '2 PTE.', 28, 'CENTRO', 72200, '1234765800', 'barrios@hotmail.com', 2),
('BAGR000000', '11220183', 'Bravo', 'Garcia', 'Rogelio', 'xx', 10, 'xx', 72000, '2222000000', 'bravo@hotmail.com', 1),
('BAJC000000', '12220653', 'Bravo', 'Jaramillo', 'Carlos Alfredo', '1er. Andador', 402, 'Manuel Rivera', 72309, '2221403962', 'bravoj@hotmail.com', 2),
('BASD950713', '13220696', 'Baylon', 'Salgado', 'Deisy Idalia', '...........', 0, '...............', 72000, '2222000000', 'baylon@yahoo.com', 1),
('BESA951020', '15220602', 'Becerra', 'Sanchez', 'Alonso', '...........', 0, '...............', 72000, '2222000000', 'becerra@gmail.com', 2),
('BURG940122', '12220654', 'Buezo', 'Ramos', 'Guadalupe', '...........', 0, '...............', 72000, '2222000000', 'buezo@gmail.com', 1),
('CABJ940330', '12220662', 'Castro', 'Bravo', 'Jaime Ivan', '...........', 0, '...............', 72000, '2222000000', 'castro@gmail.com', 1),
('CAMB940719', '12220658', 'Cano', 'Morales', 'Braulio', '...........', 0, '...............', 72000, '2222000000', 'cano@gmail.com', 2),
('CICM940922', '13220711', 'Cisneros', 'Chino', 'Mayra Paola', '...........', 0, '...............', 72000, '2222000000', 'cisneros@gmail.com', 2),
('COBA000000', '12220673', 'Corona', 'Bertado', 'Abigail', 'PINOSUAREZ', 315, 'ANZURES', 72960, '2224552787', 'corona@hotmail.com', 1),
('CORD931125', '12220675', 'Cortes', 'Rosales', 'Diana Esther', '...........', 0, '...............', 72000, '2222000000', 'cortes@yahoo.com', 2),
('COVF920806', '12220052', 'Contreras', 'Vega', 'Maria Fernanda', 'FLORES MAGON', 13120, 'GUADALUPE H.', 72490, '2222410439', 'contreras@hotmail.com', 1),
('CUMM940829', '12220679', 'Cuahutencos', 'Morales', 'Mariela', '...........', 0, '...............', 72000, '2222000000', 'cuahu@yahoo.com', 1),
('DICP960125', '14221637', 'Diaz', 'Castillo', 'Pablo Miguel', '...........', 0, '...............', 72000, '2222000000', 'diaz@yahoo.com', 2),
('DILC000000', '11220747', 'Diaz', 'Lopez', 'Conrado', '...........', 0, '...............', 72000, '2222000000', 'diaz@gmail.com', 2),
('FERC941014', '12220688', 'Fernandez', 'Robles', 'Carlos', 'ARAGON', 5, 'CENTRO', 72150, '2222774875', 'fernandez@hotmail.com', 1),
('FILI940401', '12220689', 'Figueiras', 'Lopez', 'Israel', '32 NORTE', 1010, 'RESURGIMIENTO', 72370, '2222359606', 'figueiras@hotmail.com', 2),
('FOBK950902', '13220721', 'Flores', 'Benitez', 'Karla Cinthya', '...........', 0, '...............', 72000, '2222000000', 'flores@yahoo.com', 1),
('FOCF931021', '12220693', 'Flores', 'Coyotzi', 'Fernanda', '...........', 0, '...............', 72000, '2222000000', 'flocoy@yahoo.com', 2),
('FODJ000000', '12220696', 'Fortis', 'Diaz', 'Jim', 'HER. SERDAN', 500, 'SAN MARTIN', 72110, '2226980319', 'fortiz@hotmail.com', 1),
('GACE941027', '12220700', 'Garcia', 'Carrasco', 'Eduardo', '20 NOVIEMBRE', 84, 'FORJADORES', 72475, '2228639357', 'garcia@hotmail.com', 1),
('GAGM941022', '12220704', 'Gaspar', 'Gaspar', 'Macario', 'SAN JUAN', 7, 'AGUA SANTA', 72980, '2224869001', 'gaspar@hotmail.com', 2),
('GAHA920127', '12220699', 'Garay', 'Hernandez', 'Angel', 'SAN PEDRO', 313, 'MALINZI', 72410, '2222143821', 'garay@hotmail.com', 2),
('GAML940612', '13220727', 'Garcia', 'Munoz', 'Luis', '...........', 0, '...............', 72000, '2222000000', 'garcia@yahoo.com', 1),
('GODR940727', '12220707', 'Gonzalez', 'Deluciano', 'José Ricardo', '...........', 0, '...............', 72000, '2222000000', 'gonzalez@gmail.com', 1),
('GOLB942002', '12220708', 'Gonzalez', 'Loranca', 'Beatriz', 'JUAREZ', 424, 'CENTRO', 72240, '2222131800', 'gonzalez@hotmail.com', 2),
('GORN950510', '13220068', 'Gonzalez', 'Ramirez', 'Nora Estefanía', '...........', 0, '...............', 72000, '2222000000', 'gonzaram@gmail.com', 2),
('GOVP000000', '11220758', 'Gomez', 'Vazquez', 'Maria del Pilar', 'xx', 10, 'xx', 72000, '2222000000', 'gomez@hotmail.com', 1),
('GUMJ000000', '13220736', 'Guzman', 'Mendoza', 'Joel', '...........', 0, '...............', 72000, '2222000000', 'guzman@gmail.com', 1),
('GUMJ950712', '13220734', 'Guerrero', 'Mora', 'Janet Aylin', '...........', 0, '...............', 72000, '2222000000', 'guerrero@yahoo.com', 2),
('GUPI930531', '13220737', 'Guzman', 'Perez', 'Isai', '...........', 0, '...............', 72000, '2222000000', 'guzper@gail.com', 2),
('GUVG940326', '12220711', 'Guevara', 'Vazquez', 'Gustavo', 'FRANCISCO', 75, 'XOCHICALCO', 72102, '2221714260', 'guevara@hotmail.com', 1),
('HELA950707', '13220740', 'Hernandez', 'Levin', 'Alexa', '...........', 0, '...............', 72000, '2222000000', 'hernandez@gmail.com', 1),
('HENJ900505', '11221418', 'Hernandez', 'Angeles', 'Juan Carlos', 'PRIV. TOPOYA', 12, 'MAESTRO FEDERAL', 72030, '2222808685', 'hernandez@hotmail.com', 2),
('HEPO951017', '13220741', 'Hernandez', 'Perez', 'Osiris', '...........', 0, '...............', 72000, '2222000000', 'herper@gmail.com', 2),
('JEBA940831', '12220680', 'De Jesus', 'Balbuena', 'Angel Antonio', 'MARIPOSAS', 9, 'FLOR DEL BOSQUE', 72370, '2227710844', 'dejesus@hotmail.com', 2),
('JICE950327', '13220745', 'Jimenez', 'Cuahutepitzi', 'Edwin E.', '...........', 0, '...............', 72000, '2222000000', 'jimenez@yahoo.com', 1),
('JIGA932303', '12220059', 'Jimenez', 'Gonzalez', 'Alma Rosa', 'EBANO', 10815, 'SAN DIEGO MAN.', 72220, '2225855061', 'jimenez@hotmail.com', 1),
('JUEG931129', '12220720', 'Juarez', 'Hernandez', 'Gabriela', '...........', 0, '...............', 72000, '2222000000', 'juarez@gmail.com', 1),
('JURA940812', '12220721', 'Juarez', 'Roldan', 'Adrian', '...........', 0, '...............', 72000, '2222000000', 'juarol@gmail.com', 2),
('LASD930924', '11221379', 'Lavariega', 'Sanchez', 'Daniel', '...........', 0, '...............', 72000, '2222000000', 'lavariega@yahoo.com', 2),
('LORL940917', '12220726', 'Lopez', 'Ruiz', 'Laura', '...........', 0, '...............', 72000, '2222000000', 'lopez@gmail.com', 1),
('MAPM930410', '11220779', 'Manzano', 'Paredes', 'Marco Antonio', 'PRIV. 2 NORTE', 9808, 'ROMA', 72210, '2222139006', 'manzano@hotmail.com', 2),
('MARG931107', '12220729', 'Marin', 'Rodriguez', 'Guadalupe del Carmen', 'CIPRESES', 2345, 'MIRADOR', 72480, '2223149080', 'marin@hotmail.com', 1),
('MARR950810', '13220752', 'Marcial', 'Ramos', 'Rebeca', '...........', 0, '...............', 72000, '2222000000', 'marcial@yahoo.com', 1),
('MOCV950330', '13220764', 'Moreno', 'Carmona', 'Victorino', '...........', 0, '...............', 72000, '2222000000', 'moreno@yahoo.com', 1),
('MOFC950430', '13220761', 'Mora', 'Frias', 'Carlos', '...........', 0, '...............', 72000, '2222000000', 'mora@yahoo.com', 2),
('MOMA930131', '13221721', 'Morales', 'Martinez', 'Alberto Angel', '...........', 0, '...............', 72000, '2222000000', 'morales@yahoo.com', 1),
('MOMD940626', '12220734', 'Mora', 'Mendez', 'David Octavio', 'AZTECA NORTE', 13, 'ANT. CAMINO', 72730, '2284315222', 'mora@hotmail.com', 2),
('MOOS930120', '12220735', 'Mora', 'Ortiz', 'Sebastian', 'CALLE 7B', 6, 'BOS. SAN SEBAS.', 72302, '2224773976', 'morao@hotmail.com', 1),
('MORN000000', '10220338', 'Moran', 'Arenas', 'Nallely', 'xx', 10, 'xx', 72000, '2222000000', 'moran@hotmail.com', 2),
('MOVD911114', '11220231', 'Morales', 'Vazquez', 'Daniel', '...........', 0, '...............', 72000, '2222000000', 'moravaz@yahoo.com', 2),
('OIRD950528', '13220768', 'Olivarez', 'Ramirez', 'Diana', '...........', 0, '...............', 72000, '2222000000', 'olivarez@gmail.com', 2),
('PALE930521', '15220031', 'Palestino', 'Lopez', 'Jose Elias', '...........', 0, '...............', 72000, '2222000000', 'palestino@gmail.com', 1),
('PEAR000000', '12220746', 'Perez', 'Altamirano', 'Ricardo Josue', 'AV.MAXIMINO', 1206, 'BAR. SAN MIGUEL', 72756, '2223615758', 'perez@hotmail.com', 1),
('PEGA950502', '13220778', 'Perez', 'Gonzalez', 'Ana Karen', '...........', 0, '...............', 72000, '2222000000', 'perez@gmail.com', 1),
('PEGB950403', '13220777', 'Perez', 'Galicia', 'Berenice Grisel', '...........', 0, '...............', 72000, '2222000000', 'perez@yahoo.com', 2),
('PELE940601', '12220750', 'Perez', 'Lorenzo', 'Erick Armando', '2 DE ABRIL', 5613, 'MIGUEL HIDALGO', 72920, '2222384711', 'perez@hotmail.com', 2),
('PEMM940105', '12220745', 'Pena', 'Martinez', 'Marco', '...........', 0, '...............', 72000, '2222000000', 'pena@gmail.com', 2),
('PEPJ950709', '13220779', 'Perez', 'Perez', 'Juan Daniel', '...........', 0, '...............', 72000, '2222000000', 'pepez@yahoo.com', 1),
('PIBC940418', 'E13021087', 'Pichardo', 'Banuelos', 'Carlos Leonel', '...........', 0, '...............', 72000, '2222000000', 'pichardo@yahoo.com', 2),
('POPX921106', '11220803', 'Poblano', 'Paz', 'Oscar Armando', '...........', 0, '...............', 72000, '2222000000', 'poblano@yahoo.com', 1),
('RARF000000', '14220067', 'Ramirez', 'Rojas', 'Flavio Cesar', '...........', 0, '...............', 72000, '2222000000', 'ramirez@yahoo.com', 2),
('RARG000000', '12220757', 'Ramirez', 'Romero', 'Gabriela', 'xx', 10, 'xx', 72000, '2222000000', 'ramirez@hotmail.com', 1),
('REHS941105', '13220787', 'Reyes', 'Hernandez', 'Stefan', '...........', 0, '...............', 72000, '2222000000', 'reyes@yahoo.com', 1),
('RELD940130', '12220762', 'Reyes', 'Luna', 'Daniel', '...........', 0, '...............', 72000, '2222000000', 'reyes@gmail.com', 2),
('REOA940321', '13221722', 'Reyes', 'Orosco', 'Alexis', '...........', 0, '...............', 72000, '2222000000', 'reyoro@yahoo.com', 2),
('ROMM931008', '12220767', 'Rojas', 'Medel', 'Miguel', '...........', 0, '...............', 72000, '2222000000', 'rojas@gmail.com', 1),
('RORJ940628', '12220770', 'Romero', 'Ramos', 'Jessica Larisa', '...........', 0, '...............', 72000, '2222000000', 'romero@yahoo.com', 1),
('ROSJ940303', '13221702', 'Romero', 'Salinas', 'Jaime', '...........', 0, '...............', 72000, '2222000000', 'romero@gmail.com', 2),
('SABI000000', '11220816', 'Saavedra', 'Bonilla', 'Irlanda', 'AV. 24 NORTE', 3603, 'AZTECA', 72270, '2228100049', 'saavedra@hotmail.com', 2),
('SAPA930618', '12220072', 'Salazar', 'Perez', 'Amada Itzel', 'JAZMIN', 725, 'LOMA VERDE', 72621, '2241166477', 'salazar@hotmail.com', 2),
('SAPG950724', '13220791', 'Salas', 'Picen', 'Gabriela', '...........', 0, '...............', 72000, '2222000000', 'salas@gmail.com', 1),
('SAPK930224', '12220682', 'De los Santos', 'Perez', 'Karina', '...........', 0, '...............', 72000, '2222000000', 'santos@gmail.com', 1),
('SARF930427', '13220071', 'Santos', 'Rojas', 'Maria Fernanda', '...........', 0, '...............', 72000, '2222000000', 'santos@gmail.com', 1),
('SASA950907', '13220794', 'Sanchez', 'Sanchez', 'Andres', '...........', 0, '...............', 72000, '2222000000', 'sanchez@gmail.com', 2),
('SOMO930213', '12221471', 'Solano ', 'Mojica', 'Oscar Eliud', '...........', 0, '...............', 72000, '2222000000', 'solano@yahoo.com', 2),
('SORA000000', '12220777', 'Soto', 'Reyes', 'Armando', 'AV. REFORMA', 25, 'SECCIÓN 1RA.', 90880, '2223061250', 'soto@hotmail.com', 1),
('TEMJ000000', '121090154', 'Teotan', 'Morales', 'Juan', 'CALLE TOKIO', 99, 'LOMAS ZARAGOZA', 56430, '5523455044', 'teotan@hotmail.com', 2),
('TEVV950224', '13220800', 'Tello', 'Vazquez', 'Viridiana', '...........', 0, '...............', 72000, '2222000000', 'tello@yahoo.com', 1),
('VACG000000', '13220804', 'Vazquez', 'Castillo', 'Gerson David', '...........', 0, '...............', 72000, '2222000000', 'vazquez@yahoo.com', 2),
('VASN950306', '13220808', 'Vazquez', 'Saenz', 'Nayeli', '...........', 0, '...............', 72000, '2222000000', 'vazquez@gmail.com', 2),
('YOCE930312', '12220786', 'Yoval', 'Cortes', 'Elizabeth', '...........', 0, '...............', 72000, '2222000000', 'yoval@gmail.com', 1),
('ZAMA950220', '13220812', 'Zahuantitla', 'Mani', 'Alejandro', '...........', 0, '...............', 72000, '2222000000', 'zahuan@yahoo.com', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cue`
--

CREATE TABLE IF NOT EXISTS `cue` (
  `IDECUE` int(11) NOT NULL,
  `FEPCUE` varchar(8) NOT NULL,
  `PLICUE` int(11) DEFAULT NULL,
  `FECCUE` varchar(8) NOT NULL,
  `MONCUE` double NOT NULL,
  `LOGCUE` varchar(5) NOT NULL,
  `PASCUE` varchar(5) NOT NULL,
  `CONCUE` int(11) NOT NULL,
  `EMPCUE` varchar(9) NOT NULL,
  `SUCCUE` int(11) NOT NULL,
  `TCUCUE` int(11) NOT NULL,
  `CLICUE` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `emp`
--

CREATE TABLE IF NOT EXISTS `emp` (
  `IDEEMP` varchar(10) NOT NULL,
  `PASSEM` varchar(10) NOT NULL,
  `TIPEMP` varchar(1) NOT NULL,
  `APPEMP` varchar(15) NOT NULL,
  `APMEMP` varchar(15) NOT NULL,
  `NOMEMP` varchar(20) NOT NULL,
  `EMPSUC` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `emp`
--

INSERT INTO `emp` (`IDEEMP`, `PASSEM`, `TIPEMP`, `APPEMP`, `APMEMP`, `NOMEMP`, `EMPSUC`) VALUES
('BAJC940821', '5678', 'E', 'BRAVO', 'JARAMILLO', 'CARLOS', 2),
('FILI940401', '5678', 'C', 'FIGUEIRAS', 'LOPEZ', 'ISRAEL', 2),
('GAGM941022', '5678', 'C', 'GASPAR', 'GASPAR', 'MACARIO', 2),
('GOLB940220', '1234', 'C', 'GONZALEZ', 'LORANCA', 'BEATRIZ', 1),
('HEMO661225', '1234', 'G', 'HERNANDEZ', 'MORALES', 'OSCAR', 1),
('MOMD940626', '5678', 'G', 'MORA', 'MENDEZ', 'DAVID', 2),
('MOOS930120', '1234', 'C', 'MORA', 'ORTIZ', 'SEBASTIAN', 1),
('TEMJ900904', '1234', 'E', 'TEOTAN', 'MORALES', 'JUAN', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ess`
--

CREATE TABLE IF NOT EXISTS `ess` (
  `IDEESS` int(11) NOT NULL,
  `COSESS` int(11) NOT NULL,
  `FECESS` varchar(8) NOT NULL,
  `ESSCUE` int(11) NOT NULL,
  `ESSCLI` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mov`
--

CREATE TABLE IF NOT EXISTS `mov` (
  `IDEMOV` int(11) NOT NULL,
  `CAPMOV` double NOT NULL,
  `FEPMOV` varchar(8) NOT NULL,
  `CAAMOV` double NOT NULL,
  `MOVPRE` int(11) NOT NULL,
  `MOVSOL` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `mov`
--

INSERT INTO `mov` (`IDEMOV`, `CAPMOV`, `FEPMOV`, `CAAMOV`, `MOVPRE`, `MOVSOL`) VALUES
(1, 2200, '04/11/16', 3000, 1, 1),
(1, 3300, '04/11/16', 0, 1, 2),
(1, 4400, '04/11/16', 4400, 1, 3),
(1, 3740, '04/11/16', 0, 1, 4),
(1, 4290, '04/11/16', 5000, 1, 5),
(1, 2420, '04/11/16', 0, 1, 6),
(1, 3300, '04/11/16', 3300, 1, 7),
(1, 4840, '04/11/16', 0, 1, 8),
(1, 4774, '04/11/16', 5000, 1, 9),
(1, 4158, '04/11/16', 0, 1, 10),
(2, 2200, '04/11/16', 2200, 2, 11),
(2, 3300, '04/11/16', 0, 2, 12),
(2, 4400, '04/11/16', 6000, 2, 13),
(2, 3740, '04/11/16', 0, 2, 14),
(2, 4290, '04/11/16', 5000, 2, 15),
(2, 2420, '04/11/16', 2420, 2, 16),
(2, 3300, '04/11/16', 0, 2, 17),
(2, 4840, '04/11/16', 6000, 2, 18),
(2, 4774, '04/11/16', 0, 2, 19),
(2, 4158, '04/11/16', 0, 2, 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ope`
--

CREATE TABLE IF NOT EXISTS `ope` (
  `IDEOPE` int(11) NOT NULL,
  `CAMOPE` double NOT NULL,
  `FEPOPE` varchar(8) NOT NULL,
  `CADOPE` double NOT NULL,
  `OPETRA` int(11) NOT NULL,
  `OPECUE` int(11) NOT NULL,
  `OPECLI` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pre`
--

CREATE TABLE IF NOT EXISTS `pre` (
  `IDEPRE` int(11) NOT NULL,
  `CANPRE` double NOT NULL,
  `FAPPRE` varchar(8) NOT NULL,
  `FECPRE` varchar(8) NOT NULL,
  `PRESOL` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pre`
--

INSERT INTO `pre` (`IDEPRE`, `CANPRE`, `FAPPRE`, `FECPRE`, `PRESOL`) VALUES
(1, 10000, '04/10/16', '04/11/16', 1),
(1, 15000, '04/10/16', '04/11/16', 2),
(1, 20000, '04/10/16', '04/11/16', 3),
(1, 17000, '04/10/16', '04/11/16', 4),
(1, 19500, '04/10/16', '04/11/16', 5),
(1, 11000, '04/10/16', '04/11/16', 6),
(1, 15000, '04/10/16', '04/11/16', 7),
(1, 22000, '04/10/16', '04/11/16', 8),
(1, 21700, '04/10/16', '04/11/16', 9),
(1, 18900, '04/10/16', '04/11/16', 10),
(2, 10000, '04/10/16', '04/11/16', 11),
(2, 15000, '04/10/16', '04/11/16', 12),
(2, 20000, '04/10/16', '04/11/16', 13),
(2, 17000, '04/10/16', '04/11/16', 14),
(2, 19500, '04/10/16', '04/11/16', 15),
(2, 11000, '04/10/16', '04/11/16', 16),
(2, 15000, '04/10/16', '04/11/16', 17),
(2, 22000, '04/10/16', '04/11/16', 18),
(2, 21700, '04/10/16', '04/11/16', 19),
(2, 18900, '04/10/16', '04/11/16', 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sol`
--

CREATE TABLE IF NOT EXISTS `sol` (
  `IDESOL` int(11) NOT NULL,
  `MONSOL` double NOT NULL,
  `APASOL` varchar(15) NOT NULL,
  `AMASOL` varchar(15) NOT NULL,
  `NOASOL` varchar(20) NOT NULL,
  `CALSOL` varchar(30) NOT NULL,
  `NUMSOL` int(11) NOT NULL,
  `COLSOL` varchar(30) NOT NULL,
  `COPSOL` int(11) NOT NULL,
  `TEASOL` varchar(10) NOT NULL,
  `EMASOL` varchar(50) NOT NULL,
  `ESTSOL` varchar(1) NOT NULL,
  `SOLCLI` varchar(10) NOT NULL,
  `SOLEMP` varchar(10) NOT NULL,
  `SOLSUC` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sol`
--

INSERT INTO `sol` (`IDESOL`, `MONSOL`, `APASOL`, `AMASOL`, `NOASOL`, `CALSOL`, `NUMSOL`, `COLSOL`, `COPSOL`, `TEASOL`, `EMASOL`, `ESTSOL`, `SOLCLI`, `SOLEMP`, `SOLSUC`) VALUES
(1, 10000, 'DOMINGUEZ', 'MARQUEZ', 'GUSTAVO', 'CALLE NUBE', 723, 'ARCO IRIS', 72345, '2222000001', 'dominguez_1@hotmail.com', 'A', 'AACA940610', 'TEMJ900904', 1),
(2, 15000, 'LOPEZ', 'MARQUEZ', 'PEDRO', '2 ORIENTE', 723, 'ARCO IRIS', 72345, '2222000001', 'dominguez_1@hotmail.com', 'A', 'BAGE941015', 'TEMJ900904', 1),
(3, 20000, 'GARZA', 'MARQUEZ', 'MARIA', '5 SUR', 723, 'ARCO IRIS', 72345, '2222000001', 'dominguez_1@hotmail.com', 'A', 'COVF920806', 'TEMJ900904', 1),
(4, 17000, 'SOTO', 'MARQUEZ', 'SERGIO', '23 MARZO', 723, 'ARCO IRIS', 72345, '2222000001', 'dominguez_1@hotmail.com', 'A', 'JEBA940831', 'TEMJ900904', 1),
(5, 19500, 'SOLORIO', 'MARQUEZ', 'GUSTAVO', 'OSA MAYOR', 723, 'ARCO IRIS', 72345, '2222000001', 'dominguez_1@hotmail.com', 'A', 'FERC941014', 'TEMJ900904', 1),
(6, 11000, 'DOMINGUEZ', 'MARQUEZ', 'GUSTAVO', 'CALLE NUBE', 723, 'ARCO IRIS', 72345, '2222000001', 'dominguez_1@hotmail.com', 'A', 'GAHA920127', 'TEMJ900904', 1),
(7, 15000, 'DOMINGUEZ', 'MARQUEZ', 'GUSTAVO', 'CALLE NUBE', 723, 'ARCO IRIS', 72345, '2222000001', 'dominguez_1@hotmail.com', 'A', 'AACA940610', 'TEMJ900904', 1),
(8, 22000, 'DOMINGUEZ', 'MARQUEZ', 'GUSTAVO', 'CALLE NUBE', 723, 'ARCO IRIS', 72345, '2222000001', 'dominguez_1@hotmail.com', 'A', 'GAGM941022', 'TEMJ900904', 1),
(9, 21700, 'DOMINGUEZ', 'MARQUEZ', 'GUSTAVO', 'CALLE NUBE', 723, 'ARCO IRIS', 72345, '2222000001', 'dominguez_1@hotmail.com', 'A', 'GOVP000000', 'TEMJ900904', 1),
(10, 18900, 'DOMINGUEZ', 'MARQUEZ', 'GUSTAVO', 'CALLE NUBE', 723, 'ARCO IRIS', 72345, '2222000001', 'dominguez_1@hotmail.com', 'A', 'GOLB942002', 'TEMJ900904', 1),
(11, 10000, 'DOMINGUEZ', 'MARQUEZ', 'GUSTAVO', 'CALLE NUBE', 723, 'ARCO IRIS', 72345, '2222000001', 'dominguez_1@hotmail.com', 'A', 'GUVG940326', 'BAJC940821', 2),
(12, 15000, 'LOPEZ', 'MARQUEZ', 'PEDRO', '2 ORIENTE', 723, 'ARCO IRIS', 72345, '2222000001', 'dominguez_1@hotmail.com', 'A', 'HENJ900505', 'BAJC940821', 2),
(13, 20000, 'GARZA', 'MARQUEZ', 'MARIA', '5 SUR', 723, 'ARCO IRIS', 72345, '2222000001', 'dominguez_1@hotmail.com', 'A', 'JIGA932303', 'BAJC940821', 2),
(14, 17000, 'SOTO', 'MARQUEZ', 'SERGIO', '23 MARZO', 723, 'ARCO IRIS', 72345, '2222000001', 'dominguez_1@hotmail.com', 'A', 'MAPM930410', 'BAJC940821', 2),
(15, 19500, 'SOLORIO', 'MARQUEZ', 'GUSTAVO', 'OSA MAYOR', 723, 'ARCO IRIS', 72345, '2222000001', 'dominguez_1@hotmail.com', 'A', 'MARG931107', 'BAJC940821', 2),
(16, 11000, 'DOMINGUEZ', 'MARQUEZ', 'GUSTAVO', 'CALLE NUBE', 723, 'ARCO IRIS', 72345, '2222000001', 'dominguez_1@hotmail.com', 'A', 'PELE940601', 'BAJC940821', 2),
(17, 15000, 'DOMINGUEZ', 'MARQUEZ', 'GUSTAVO', 'CALLE NUBE', 723, 'ARCO IRIS', 72345, '2222000001', 'dominguez_1@hotmail.com', 'A', 'AACA940610', 'BAJC940821', 2),
(18, 22000, 'DOMINGUEZ', 'MARQUEZ', 'GUSTAVO', 'CALLE NUBE', 723, 'ARCO IRIS', 72345, '2222000001', 'dominguez_1@hotmail.com', 'A', 'SAPA930618', 'BAJC940821', 2),
(19, 21700, 'DOMINGUEZ', 'MARQUEZ', 'GUSTAVO', 'CALLE NUBE', 723, 'ARCO IRIS', 72345, '2222000001', 'dominguez_1@hotmail.com', 'A', 'BAGR000000', 'BAJC940821', 2),
(20, 18900, 'DOMINGUEZ', 'MARQUEZ', 'GUSTAVO', 'CALLE NUBE', 723, 'ARCO IRIS', 72345, '2222000001', 'dominguez_1@hotmail.com', 'A', 'BAJC000000', 'BAJC940821', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suc`
--

CREATE TABLE IF NOT EXISTS `suc` (
  `IDESUC` int(11) NOT NULL,
  `NOMSUC` varchar(30) NOT NULL,
  `CALSUC` varchar(20) NOT NULL,
  `NUMSUC` int(11) NOT NULL,
  `COPSUC` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `suc`
--

INSERT INTO `suc` (`IDESUC`, `NOMSUC`, `CALSUC`, `NUMSUC`, `COPSUC`) VALUES
(1, 'Mirador', 'Av. 35 Oriente', 3511, 72350),
(2, 'El Vergel', 'Calle 29-A Sur', 2980, 72400),
(3, 'Satelite', 'Miguel Kant', 4567, 72730),
(4, 'Bosques San S.', 'Naranjos', 1678, 72310),
(5, 'Loma Bella', 'Calle 5 de Mayo', 2980, 72474);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tcu`
--

CREATE TABLE IF NOT EXISTS `tcu` (
  `IDETCU` int(11) NOT NULL,
  `NOMTCU` varchar(15) NOT NULL,
  `PORTCU` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tcu`
--

INSERT INTO `tcu` (`IDETCU`, `NOMTCU`, `PORTCU`) VALUES
(1, 'T. CREDITO', 22),
(2, 'PRESTAMOS', 22),
(3, 'C. INVERSION', 5),
(4, 'C. AHORRO', 3),
(5, 'CUEINV', 1),
(6, 'CUEAHO', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tra`
--

CREATE TABLE IF NOT EXISTS `tra` (
  `IDETRA` int(11) NOT NULL,
  `CANTRA` int(11) NOT NULL,
  `PLCTRA` int(11) NOT NULL,
  `CONTRA` int(11) NOT NULL,
  `LICTRA` double NOT NULL,
  `FOPTRA` varchar(8) NOT NULL,
  `TRACUE` int(11) NOT NULL,
  `TRACLI` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cli`
--
ALTER TABLE `cli`
  ADD PRIMARY KEY (`IDECLI`),
  ADD KEY `SUCCLI` (`SUCCLI`);

--
-- Indices de la tabla `cue`
--
ALTER TABLE `cue`
  ADD PRIMARY KEY (`IDECUE`,`CLICUE`),
  ADD KEY `EMPCUE` (`EMPCUE`,`SUCCUE`),
  ADD KEY `TCUCUE` (`TCUCUE`),
  ADD KEY `CLICUE` (`CLICUE`);

--
-- Indices de la tabla `emp`
--
ALTER TABLE `emp`
  ADD PRIMARY KEY (`IDEEMP`,`EMPSUC`),
  ADD KEY `EMPSUC` (`EMPSUC`);

--
-- Indices de la tabla `ess`
--
ALTER TABLE `ess`
  ADD PRIMARY KEY (`IDEESS`),
  ADD KEY `ESSCUE` (`ESSCUE`,`ESSCLI`);

--
-- Indices de la tabla `mov`
--
ALTER TABLE `mov`
  ADD PRIMARY KEY (`IDEMOV`,`MOVPRE`,`MOVSOL`),
  ADD KEY `MOVPRE` (`MOVPRE`,`MOVSOL`);

--
-- Indices de la tabla `ope`
--
ALTER TABLE `ope`
  ADD PRIMARY KEY (`IDEOPE`),
  ADD KEY `OPETRA` (`OPETRA`,`OPECUE`,`OPECLI`);

--
-- Indices de la tabla `pre`
--
ALTER TABLE `pre`
  ADD PRIMARY KEY (`IDEPRE`,`PRESOL`),
  ADD KEY `PRESOL` (`PRESOL`);

--
-- Indices de la tabla `sol`
--
ALTER TABLE `sol`
  ADD PRIMARY KEY (`IDESOL`),
  ADD KEY `SOLEMP` (`SOLEMP`,`SOLSUC`),
  ADD KEY `SOLCLI` (`SOLCLI`);

--
-- Indices de la tabla `suc`
--
ALTER TABLE `suc`
  ADD PRIMARY KEY (`IDESUC`);

--
-- Indices de la tabla `tcu`
--
ALTER TABLE `tcu`
  ADD PRIMARY KEY (`IDETCU`);

--
-- Indices de la tabla `tra`
--
ALTER TABLE `tra`
  ADD PRIMARY KEY (`IDETRA`,`TRACUE`,`TRACLI`),
  ADD KEY `TRACUE` (`TRACUE`,`TRACLI`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cli`
--
ALTER TABLE `cli`
  ADD CONSTRAINT `cli_ibfk_1` FOREIGN KEY (`SUCCLI`) REFERENCES `suc` (`IDESUC`);

--
-- Filtros para la tabla `cue`
--
ALTER TABLE `cue`
  ADD CONSTRAINT `cue_ibfk_1` FOREIGN KEY (`EMPCUE`, `SUCCUE`) REFERENCES `emp` (`IDEEMP`, `EMPSUC`),
  ADD CONSTRAINT `cue_ibfk_2` FOREIGN KEY (`TCUCUE`) REFERENCES `tcu` (`IDETCU`),
  ADD CONSTRAINT `cue_ibfk_3` FOREIGN KEY (`CLICUE`) REFERENCES `cli` (`IDECLI`);

--
-- Filtros para la tabla `emp`
--
ALTER TABLE `emp`
  ADD CONSTRAINT `emp_ibfk_1` FOREIGN KEY (`EMPSUC`) REFERENCES `suc` (`IDESUC`);

--
-- Filtros para la tabla `ess`
--
ALTER TABLE `ess`
  ADD CONSTRAINT `ess_ibfk_1` FOREIGN KEY (`ESSCUE`, `ESSCLI`) REFERENCES `cue` (`IDECUE`, `CLICUE`);

--
-- Filtros para la tabla `mov`
--
ALTER TABLE `mov`
  ADD CONSTRAINT `mov_ibfk_1` FOREIGN KEY (`MOVPRE`, `MOVSOL`) REFERENCES `pre` (`IDEPRE`, `PRESOL`);

--
-- Filtros para la tabla `ope`
--
ALTER TABLE `ope`
  ADD CONSTRAINT `ope_ibfk_1` FOREIGN KEY (`OPETRA`, `OPECUE`, `OPECLI`) REFERENCES `tra` (`IDETRA`, `TRACUE`, `TRACLI`);

--
-- Filtros para la tabla `pre`
--
ALTER TABLE `pre`
  ADD CONSTRAINT `pre_ibfk_1` FOREIGN KEY (`PRESOL`) REFERENCES `sol` (`IDESOL`);

--
-- Filtros para la tabla `sol`
--
ALTER TABLE `sol`
  ADD CONSTRAINT `sol_ibfk_1` FOREIGN KEY (`SOLEMP`, `SOLSUC`) REFERENCES `emp` (`IDEEMP`, `EMPSUC`),
  ADD CONSTRAINT `sol_ibfk_2` FOREIGN KEY (`SOLCLI`) REFERENCES `cli` (`IDECLI`);

--
-- Filtros para la tabla `tra`
--
ALTER TABLE `tra`
  ADD CONSTRAINT `tra_ibfk_1` FOREIGN KEY (`TRACUE`, `TRACLI`) REFERENCES `cue` (`IDECUE`, `CLICUE`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
