import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("__filename:"+__filename)
console.log("__dirname:"+__dirname)
const app = express();

// Serve static files from the build directory
app.use(express.static(join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, '0.0.0.0', () => { // Modify this line
  console.log(`Server is running at http://localhost:${port}`);
})
