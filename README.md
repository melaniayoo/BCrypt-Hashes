# BCrypt-Hashes

This repository demonstrates how to hash and verify passwords using the `bcrypt` library.

## 📋 Project Overview

This project hashes a sample password both **asynchronously** and **synchronously**, then compares the hashed value with the original password to validate the match.

## 🚀 Features

- Hash passwords using `bcrypt`
  - Asynchronous (`bcrypt.hash`)
  - Synchronous (`bcrypt.hashSync`)
- Verify password hashes
  - Asynchronous comparison (`bcrypt.compare`)
  - Synchronous comparison (`bcrypt.compareSync`)

## 🧠 How It Works

1. `bcrypt.hash()` creates a secure hash of the password using 12 salt rounds.
2. `bcrypt.compare()` checks if a plaintext password matches a given hash.
3. Same process is repeated using synchronous methods.
4. Results (`true`/`false`) are logged to the terminal.

## 📂 Project Structure
```
BCrypt-Hashes/
├── freeCodeCamp/
│ └── fcctesting.js # (provided by FCC)
├── server.js # Main application file
├── package.json
└── README.md
```

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/melaniayoo/BCrypt-Hashes.git
   cd BCrypt-Hashes
   ```

2. Install dependencies:
```bash
npm install
```

3. Run the app:
```bash
npm start
```

4. You should see output similar to:
```bash
$2b$12$...
true
Listening on port: 3000
......
true
```