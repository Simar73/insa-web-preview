const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist/insanalytics-web/browser')));

app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/insanalytics-web/browser/index.html'));
});

app.listen(PORT, () => {
  console.log(`InsAnalytics running on http://localhost:${PORT}`);
});
