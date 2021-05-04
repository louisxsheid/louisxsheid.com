// export {};
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'dist','index.html')));
app.get('/projects', (req, res) => res.sendFile(path.join(__dirname, 'dist','index.html')));
app.get('/til', (req, res) => res.sendFile(path.join(__dirname, 'dist','index.html')));

// Global Error handler
app.use((err, req, res, next) => {
  // Set up default error
  const defaultError = {
    log: "Error caught in global error handler",
    status: 500,
    msg: {
      err: err,
    },
  };

  // Update default error message with provided error if there is one
  const output = Object.assign(defaultError, err);
  res.send(output);
});

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));