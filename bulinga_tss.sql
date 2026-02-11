-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2026 at 04:30 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bulinga_tss`
--

-- --------------------------------------------------------

--
-- Table structure for table `announcements`
--

CREATE TABLE `announcements` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `content` text DEFAULT NULL,
  `type` enum('event','announcement','notice') DEFAULT 'announcement',
  `priority` enum('low','medium','high') DEFAULT 'medium',
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `parent_phone` varchar(20) DEFAULT NULL,
  `program` varchar(100) NOT NULL,
  `level` varchar(20) NOT NULL,
  `result_slip` varchar(255) DEFAULT NULL,
  `status` enum('pending','accepted','rejected') DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `first_name`, `last_name`, `email`, `phone`, `parent_phone`, `program`, `level`, `result_slip`, `status`, `created_at`) VALUES
(1, 'ishimwe', 'UMULISA', 'bertinmugisha8@gmail.com', '0793450646', '0793450646', 'Software Development', 'L5', NULL, 'pending', '2026-02-11 14:55:10');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `subject` varchar(100) DEFAULT NULL,
  `message` text NOT NULL,
  `status` enum('new','read','replied') DEFAULT 'new',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `content` text DEFAULT NULL,
  `excerpt` varchar(300) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `published_date` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `content`, `excerpt`, `image_url`, `category`, `published_date`, `created_at`) VALUES
(1, 'Bulinga TSS Launches New Computer Lab', 'We are excited to announce the opening of our state-of-the-art computer laboratory equipped with 50 modern computers...', 'New computer lab equipped with modern technology for enhanced learning.', NULL, 'Infrastructure', '2024-01-15', '2026-02-08 12:42:17'),
(2, 'Graduation Ceremony 2024', 'Over 200 students graduated from various programs in a colorful ceremony attended by district officials...', '200+ students celebrate graduation in colorful ceremony.', NULL, 'Events', '2024-02-10', '2026-02-08 12:42:17');

-- --------------------------------------------------------

--
-- Table structure for table `programs`
--

CREATE TABLE `programs` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `levels` varchar(50) DEFAULT NULL,
  `duration` varchar(50) DEFAULT NULL,
  `career_opportunities` text DEFAULT NULL,
  `requirements` text DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `programs`
--

INSERT INTO `programs` (`id`, `name`, `slug`, `description`, `levels`, `duration`, `career_opportunities`, `requirements`, `image_url`, `created_at`) VALUES
(1, 'Accounting', 'accounting', 'Comprehensive accounting program covering financial reporting, taxation, auditing, and management accounting. Prepares students for professional accounting careers.', 'L3, L4 & L5', '3 years', 'Accountant, Auditor, Financial Analyst, Tax Consultant, Bookkeeper', 'O-Level certificate with passes in Mathematics and English', NULL, '2026-02-08 12:42:17'),
(2, 'Business Services', 'business-services', 'Training in business administration, customer service, marketing, and entrepreneurship. Develops skills for modern business environments.', 'L3, L4 & L5', '3 years', 'Business Administrator, Customer Service Manager, Marketing Officer, Entrepreneur', 'O-Level certificate with passes in English and any business subject', NULL, '2026-02-08 12:42:17'),
(3, 'Computer Systems and Architecture', 'computer-systems-architecture', 'Advanced training in computer hardware, system design, network architecture, and infrastructure management.', 'L5', '2 years', 'System Administrator, Network Architect, IT Infrastructure Manager, Hardware Specialist', 'A-Level with Mathematics or Computer Studies, or Level 4 in IT', NULL, '2026-02-08 12:42:17'),
(4, 'Networking and Internet Technologies', 'networking-internet-technologies', 'Specialized program in network design, configuration, security, and internet technologies including cloud computing.', 'L5', '2 years', 'Network Engineer, Cybersecurity Specialist, Cloud Administrator, IT Support Specialist', 'A-Level with Mathematics or Physics, or Level 4 in IT', NULL, '2026-02-08 12:42:17'),
(5, 'Software Development', 'software-development', 'Intensive training in programming, software engineering, database management, and application development.', 'L4 & L5', '2-3 years', 'Software Developer, Web Developer, Mobile App Developer, Database Administrator', 'O-Level with Mathematics and English, or Level 3 in Computer Applications', NULL, '2026-02-08 12:42:17');

-- --------------------------------------------------------

--
-- Table structure for table `tenders`
--

CREATE TABLE `tenders` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` text DEFAULT NULL,
  `deadline` date DEFAULT NULL,
  `document_url` varchar(255) DEFAULT NULL,
  `status` enum('open','closed','awarded') DEFAULT 'open',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tenders`
--

INSERT INTO `tenders` (`id`, `title`, `description`, `deadline`, `document_url`, `status`, `created_at`) VALUES
(1, 'Supply of Computer Equipment', 'Tender for supply and installation of 50 desktop computers for CSA department', '2024-03-15', NULL, 'open', '2026-02-08 12:42:17'),
(2, 'Catering Services', 'Provision of catering services for boarding students', '2024-02-28', NULL, 'open', '2026-02-08 12:42:17');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','staff') DEFAULT 'staff',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `announcements`
--
ALTER TABLE `announcements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `programs`
--
ALTER TABLE `programs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `tenders`
--
ALTER TABLE `tenders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `announcements`
--
ALTER TABLE `announcements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `programs`
--
ALTER TABLE `programs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tenders`
--
ALTER TABLE `tenders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
