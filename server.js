const express = require('express');
const app = express();
const PORT = 3000;

app.get('/track', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log("IP Address:", ip);

  // Log the IP to a file (optional)
  const fs = require('fs');
  fs.appendFileSync('ips.txt', `${ip}\n`, (err) => {
    if (err) console.error('Error writing to file:', err);
  });

  // Respond to the user or redirect them
  res.redirect('https://target-website.com'); // Replace with your desired URL
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
