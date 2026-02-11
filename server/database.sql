-- Bulinga TSS Database Schema

CREATE DATABASE IF NOT EXISTS bulinga_tss;
USE bulinga_tss;

-- Programs Table
CREATE TABLE programs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    levels VARCHAR(50),
    duration VARCHAR(50),
    career_opportunities TEXT,
    requirements TEXT,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- News/Events Table
CREATE TABLE news (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT,
    excerpt VARCHAR(300),
    image_url VARCHAR(255),
    category VARCHAR(50),
    published_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tenders Table
CREATE TABLE tenders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    deadline DATE,
    document_url VARCHAR(255),
    status ENUM('open', 'closed', 'awarded') DEFAULT 'open',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact Messages Table
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(100),
    message TEXT NOT NULL,
    status ENUM('new', 'read', 'replied') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Applications Table
CREATE TABLE applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    program_id INT,
    level VARCHAR(20),
    documents TEXT,
    status ENUM('pending', 'reviewing', 'accepted', 'rejected') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (program_id) REFERENCES programs(id)
);

-- Users Table (Admin)
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'staff') DEFAULT 'staff',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Sample Programs
INSERT INTO programs (name, slug, description, levels, duration, career_opportunities, requirements) VALUES
('Accounting', 'accounting', 'Comprehensive accounting program covering financial reporting, taxation, auditing, and management accounting. Prepares students for professional accounting careers.', 'L3, L4 & L5', '3 years', 'Accountant, Auditor, Financial Analyst, Tax Consultant, Bookkeeper', 'O-Level certificate with passes in Mathematics and English'),
('Business Services', 'business-services', 'Training in business administration, customer service, marketing, and entrepreneurship. Develops skills for modern business environments.', 'L3, L4 & L5', '3 years', 'Business Administrator, Customer Service Manager, Marketing Officer, Entrepreneur', 'O-Level certificate with passes in English and any business subject'),
('Computer Systems and Architecture', 'computer-systems-architecture', 'Advanced training in computer hardware, system design, network architecture, and infrastructure management.', 'L5', '2 years', 'System Administrator, Network Architect, IT Infrastructure Manager, Hardware Specialist', 'A-Level with Mathematics or Computer Studies, or Level 4 in IT'),
('Networking and Internet Technologies', 'networking-internet-technologies', 'Specialized program in network design, configuration, security, and internet technologies including cloud computing.', 'L5', '2 years', 'Network Engineer, Cybersecurity Specialist, Cloud Administrator, IT Support Specialist', 'A-Level with Mathematics or Physics, or Level 4 in IT'),
('Software Development', 'software-development', 'Intensive training in programming, software engineering, database management, and application development.', 'L4 & L5', '2-3 years', 'Software Developer, Web Developer, Mobile App Developer, Database Administrator', 'O-Level with Mathematics and English, or Level 3 in Computer Applications');

-- Insert Sample News
INSERT INTO news (title, content, excerpt, category, published_date) VALUES
('Bulinga TSS Launches New Computer Lab', 'We are excited to announce the opening of our state-of-the-art computer laboratory equipped with 50 modern computers...', 'New computer lab equipped with modern technology for enhanced learning.', 'Infrastructure', '2024-01-15'),
('Graduation Ceremony 2024', 'Over 200 students graduated from various programs in a colorful ceremony attended by district officials...', '200+ students celebrate graduation in colorful ceremony.', 'Events', '2024-02-10');

-- Insert Sample Tenders
INSERT INTO tenders (title, description, deadline, status) VALUES
('Supply of Computer Equipment', 'Tender for supply and installation of 50 desktop computers for CSA department', '2024-03-15', 'open'),
('Catering Services', 'Provision of catering services for boarding students', '2024-02-28', 'open');