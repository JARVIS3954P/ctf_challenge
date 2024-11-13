const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Simulating an SQL Database with hardcoded values
const users = [
  { username: 'admin', password: 'password123', flag: 'FLAG{SQL_injection_found}' }
];

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/challenge1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'challenge1.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/challenge2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'challenge2.html'));
});

app.get('/download/hash', (req, res) => {
  res.download(path.join(__dirname, 'hash.txt'), 'hash.txt', (err) => {
    if (err) {
      console.error('Error downloading hash file:', err);
      res.status(500).send('File download failed.');
    }
  });
});

app.get('/download/image', (req, res) => {
  res.download(path.join(__dirname, 'public', 'forensics_challenge.jpg'), 'forensics_challenge.jpg', (err) => {
    if (err) {
      console.error('Error downloading image file:', err);
      res.status(500).send('File download failed.');
    }
  });
});

app.post('/submit-forensics', (req, res) => {
  const { answer } = req.body;
  const correctFlag = 'FLAG{hidden_text_in_metadata}'; // Update based on your flag

  if (answer === correctFlag) {
    res.send('Correct! You found the hidden flag. Here is your flag: ' + correctFlag);
  } else {
    res.send('Incorrect answer. Try again!');
  }
});

app.post('/submit-trivia', (req, res) => {
    const answers = {
    q1: 'c',
    q2: 'a',
    q3: 'b',
    q4: 'a',
    q5: 'c',
    q6: 'a',
    q7: 'b',
    q8: 'b',
    q9: 'b',
    q10: 'b'
};

    let score = 0;
    for (let key in answers) {
        if (req.body[key] === answers[key]) {
            score += 1;
        }
    }

    const totalQuestions = Object.keys(answers).length;
    const passingScore = 0.8 * totalQuestions; // 80%

    if (score >= passingScore) {
        res.send('Congratulations! You passed the quiz. Here is your flag: FLAG{quiz_master}');
    } else {
        res.send('Sorry, you did not pass. Try again!');
    }
});


// Simulate SQL Injection Vulnerability
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Vulnerable "SQL Query" - direct string concatenation (vulnerable to SQL injection)
  const sqlQuery = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

  console.log('Simulating SQL Query: ', sqlQuery);

  // Simulate query result (in reality, this would be from a database)
  const user = users.find(u => u.username === username && u.password === password);
  
  // If the user is found and matches the credentials
  if (user) {
    res.redirect('/admin');
  } else {
    // Failed login
    res.send('<p>Incorrect username or password. Try again.</p><a href="/login">Go back</a>');
  }
});

app.get('/admin', (req, res) => {
  // Vulnerable page - admin access with the flag
  res.send('<h1>Welcome to the Admin Page!</h1><p>Here is your flag: FLAG{SQL_injection_found}</p>');
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
