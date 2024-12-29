CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,          -- Unique identifier for the user
    username VARCHAR(50) NOT NULL UNIQUE,          -- Unique username
    email VARCHAR(100) NOT NULL UNIQUE,            -- Unique email address
    password VARCHAR(255) NOT NULL,                -- Encrypted password
    role VARCHAR(50) DEFAULT 'USER',               -- Role for access control (e.g., USER, ADMIN)
    is_email_verified BOOLEAN DEFAULT FALSE,       -- Email verification status
    email_verification_token VARCHAR(255),         -- Token for email verification
    last_login TIMESTAMP,                          -- Timestamp of the last successful login
    failed_login_attempts INT DEFAULT 0,           -- Tracks failed login attempts
    account_status VARCHAR(50) DEFAULT 'ACTIVE',   -- Account status (e.g., ACTIVE, INACTIVE, BANNED)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Account creation timestamp
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Last update timestamp
);
