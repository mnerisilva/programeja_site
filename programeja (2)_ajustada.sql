-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 28-Jun-2022 às 04:28
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



--
-- Extraindo dados da tabela `conteudo`
--

INSERT INTO `conteudo` (`id_conteudo`, `id_conteudo_indice`, `conteudo_descricao`, `conteudo_codigoyoutube`, `id_conteudotipo`) VALUES
(5, 5, 'HTML em 7 minutos', '0X1OUnQuY5c', 2),
(6, 6, '10 ideias de projetos em HTML e CSS para adicionar no portfólio!', 'y4ltLH9iK8E', 2),
(84, 84, 'HTML o ESSENCIAL pra programação Front-end', 'qHHXjEmOJyk', 2),
(85, 85, 'Como INSERIR IMAGEM no HTML - COMPLETO!!!! Passo a Passo!', '6U0l5cVAef0', 2),
(86, 86, 'HTML in 100 Seconds', 'ok-plXXHlWw', 2),
(87, 87, 'O que é HTML 2022 - Hostinger Brasil', 'jOqaeGC90D0', 2),
(88, 88, 'Aprendendo o básico de html (web) | Web #1', 'DG8b1Ud4Mr8', 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `conteudo_indice`
--



--
-- Extraindo dados da tabela `conteudo_indice`
--

INSERT INTO `conteudo_indice` (`id_conteudo_indice`, `id_conteudotipo`, `conteudo_titulo`, `id_categoria`, `id_subcategoria`) VALUES
(4, 2, 'Os setes pecados da gula', 2, 0),
(5, 2, 'HTML em 7 minutos', 2, 0),
(6, 2, '10 ideias de projetos em HTML e CSS para adicionar no portfólio!', 2, 0),
(60, 2, 'HTML em 7 minutos', 2, 0),
(61, 2, 'HTML 5 - Meu primeiro Hello World em HTML (Aula 01)', 2, 0),
(62, 2, 'TUTORIAL BÁSICO HTML e CSS: Introdução a código para não-programadores', 2, 0),
(63, 2, 'Curso HTML Completo (4 Horas)', 2, 0),
(64, 2, 'O MÍNIMO NECESSÁRIO PARA SER UM DESENVOLVEDOR', 2, 0),
(71, 2, 'HTML o ESSENCIAL pra programação Front-end', 2, 0),
(72, 2, 'HTML o ESSENCIAL pra programação Front-end', 2, 0),
(73, 2, 'HTML o ESSENCIAL pra programação Front-end', 2, 0),
(74, 2, 'HTML o ESSENCIAL pra programação Front-end', 2, 0),
(75, 2, 'HTML o ESSENCIAL pra programação Front-end', 2, 0),
(76, 2, 'HTML o ESSENCIAL pra programação Front-end', 2, 0),
(77, 2, 'HTML o ESSENCIAL pra programação Front-end', 2, 0),
(78, 2, 'HTML o ESSENCIAL pra programação Front-end', 2, 0),
(79, 2, 'HTML o ESSENCIAL pra programação Front-end', 2, 0),
(80, 2, 'HTML o ESSENCIAL pra programação Front-end', 2, 0),
(81, 2, 'HTML o ESSENCIAL pra programação Front-end', 2, 0),
(82, 2, 'HTML o ESSENCIAL pra programação Front-end', 2, 0),
(83, 2, 'HTML o ESSENCIAL pra programação Front-end', 2, 0),
(84, 2, 'HTML o ESSENCIAL pra programação Front-end', 2, 0),
(85, 2, 'Como INSERIR IMAGEM no HTML - COMPLETO!!!! Passo a Passo!', 2, 0),
(86, 2, 'HTML in 100 Seconds', 2, 0),
(87, 2, 'O que é HTML 2022 - Hostinger Brasil', 2, 0),
(88, 2, 'Aprendendo o básico de html (web) | Web #1', 2, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `conteudo_tipo`
--



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



-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--



--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_password`, `user_photo`, `user_date`) VALUES
(1, 'Marcio Henrique da Silva', '123456', 'https://userstock.io/data/wp-content/uploads/2020/05/imansyah-muhamad-putera-n4KewLKFOZw-1024x1024.jpg', ''),
(2, 'Giberto Pereira Santos', '123456', 'https://userstock.io/data/wp-content/uploads/2020/06/tyler-nix-PQeoQdkU9jQ-1024x1024.jpg', ''),
(3, 'Sandra Mara Garcia', '123456', 'https://userstock.io/data/wp-content/uploads/2020/06/aiony-haust-3TLl_97HNJo-1024x1024.jpg', '');

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
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

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
  MODIFY `id_conteudo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT for table `conteudo_indice`
--
ALTER TABLE `conteudo_indice`
  MODIFY `id_conteudo_indice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

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

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
