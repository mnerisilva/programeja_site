-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 22-Jun-2022 às 04:44
-- Versão do servidor: 10.1.40-MariaDB
-- versão do PHP: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `programeja`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `descricao_categoria` varchar(50) NOT NULL,
  `abrev_categoria` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `descricao_categoria`, `abrev_categoria`) VALUES
(1, 'css', 'css'),
(2, 'html', 'html'),
(3, 'javascritpt', 'js'),
(4, 'sem categoria', 'sem categoria');

-- --------------------------------------------------------

--
-- Estrutura da tabela `conteudo`
--

CREATE TABLE `conteudo` (
  `id_conteudo` int(11) NOT NULL,
  `id_conteudo_indice` int(11) NOT NULL,
  `conteudo_descricao` varchar(150) NOT NULL,
  `conteudo_codigoyoutube` varchar(30) NOT NULL,
  `id_conteudotipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `conteudo_indice`
--

CREATE TABLE `conteudo_indice` (
  `id_conteudo_indice` int(11) NOT NULL,
  `id_conteudotipo` int(11) NOT NULL,
  `conteudo_titulo` varchar(150) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `id_subcategoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `conteudo_tipo`
--

CREATE TABLE `conteudo_tipo` (
  `id_conteudotipo` int(11) NOT NULL,
  `descricao_tipo` varchar(150) NOT NULL,
  `icone_tipo` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `conteudo_tipo`
--

INSERT INTO `conteudo_tipo` (`id_conteudotipo`, `descricao_tipo`, `icone_tipo`) VALUES
(1, 'link', '<i class=\"fa-solid fa-link\"></i>'),
(2, 'video', '<i class=\"fa-brands fa-youtube\"></i>'),
(3, 'playlist', '<i class=\"fa-solid fa-list\"></i>');

-- --------------------------------------------------------

--
-- Estrutura da tabela `subcategoria`
--

CREATE TABLE `subcategoria` (
  `id_subcategoria` int(11) NOT NULL,
  `descricao_subcategoria` varchar(50) NOT NULL,
  `abrev_subcategoria` varchar(50) NOT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indexes for table `conteudo`
--
ALTER TABLE `conteudo`
  ADD PRIMARY KEY (`id_conteudo`);

--
-- Indexes for table `conteudo_indice`
--
ALTER TABLE `conteudo_indice`
  ADD PRIMARY KEY (`id_conteudo_indice`);

--
-- Indexes for table `conteudo_tipo`
--
ALTER TABLE `conteudo_tipo`
  ADD PRIMARY KEY (`id_conteudotipo`);

--
-- Indexes for table `subcategoria`
--
ALTER TABLE `subcategoria`
  ADD PRIMARY KEY (`id_subcategoria`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `conteudo`
--
ALTER TABLE `conteudo`
  MODIFY `id_conteudo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `conteudo_indice`
--
ALTER TABLE `conteudo_indice`
  MODIFY `id_conteudo_indice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `conteudo_tipo`
--
ALTER TABLE `conteudo_tipo`
  MODIFY `id_conteudotipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `subcategoria`
--
ALTER TABLE `subcategoria`
  MODIFY `id_subcategoria` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
