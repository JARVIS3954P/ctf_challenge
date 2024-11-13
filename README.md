# Beginner CTF Event Website

This project is a web-based Capture The Flag (CTF) event platform designed for beginner participants to learn fundamental cybersecurity concepts through interactive challenges. Each challenge introduces participants to core cybersecurity principles such as SQL injection, password cracking, digital forensics, cybersecurity trivia, and social engineering. The site is developed using Node.js, Express, MongoDB, and other essential web technologies.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Challenges Overview](#challenges-overview)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **5 Progressive Challenges**: Each challenge tests different aspects of cybersecurity.
- **User Authentication**: A basic login system using MongoDB to track user access.
- **Scoring System**: Participants earn points for each successfully completed challenge.
- **Hint System**: Optional hints are available, reducing the points if used.
- **Flag Validation**: Correct submissions reveal the next challenge and flag.

---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js, MongoDB
- **Database**: MongoDB for user management
- **Hosting**: AWS EC2 instance with Apache and MySQL installed
- **Tools**: Git for version control, Express for server management, bcrypt for password hashing

---

## Challenges Overview

### Challenge 1: Basic Web Exploits
- **Objective**: Exploit an SQL injection vulnerability to access a hidden admin panel.
- **Skill**: Basic SQL injection.

### Challenge 2: Password Cracking
- **Objective**: Crack an MD5 hash provided in an S3 bucket.
- **Skill**: Basic password cracking and hash analysis.

### Challenge 3: Digital Forensics
- **Objective**: Analyze an image file to uncover a hidden message.
- **Skill**: Steganography and metadata analysis.

### Challenge 4: Trivia Quiz
- **Objective**: Answer cybersecurity questions with a minimum score of 80% to get the flag.
- **Skill**: General cybersecurity knowledge.

### Challenge 5: Social Engineering
- **Objective**: Identify phishing links or analyze a mock phishing email.
- **Skill**: Phishing detection and understanding of social engineering tactics.

---

## Project Structure

```plaintext
Beginner-CTF-Event/
│
├── public/                    # Contains static files
│   ├── css/                   # CSS files
│   ├── js/                    # JavaScript files
│   ├── images/                # Image assets
│   ├── challenge1.html        # HTML for Challenge 1
│   ├── challenge2.html        # HTML for Challenge 2
│   ├── challenge3.html        # HTML for Challenge 3
│   ├── challenge4.html        # HTML for Challenge 4
│   └── challenge5.html        # HTML for Challenge 5
│
├── app.js                     # Main server file
├── config/                    # Configuration files
│   └── db.js                  # MongoDB configuration
│
├── models/                    # Database models
│   └── User.js                # User model for MongoDB
│
├── routes/                    # Route handlers
│   └── index.js               # Route definitions for each challenge
│
└── README.md                  # Project documentation
