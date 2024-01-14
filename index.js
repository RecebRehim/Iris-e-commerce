const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Statik dosyaları servis etmek için 'views' klasörünü kullan
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
  // index.html dosyasını gönder
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/cart', (req, res) => {
  // index.html dosyasını gönder
  res.sendFile(path.join(__dirname, 'views', 'cart.html'));
});

app.get('/account', (req, res) => {
  // index.html dosyasını gönder
  res.sendFile(path.join(__dirname, 'views', 'account.html'));
});

app.get('/product', (req, res) => {
  // index.html dosyasını gönder
  res.sendFile(path.join(__dirname, 'views', 'product.html'));
});
app.get('/productDetail', (req, res) => {
  // index.html dosyasını gönder
  res.sendFile(path.join(__dirname, 'views', 'productDetail.html'));
});
app.get('/about', (req, res) => {
  // index.html dosyasını gönder
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});



app.listen(port, () => {
  console.log("Server is running at http://localhost:${port}");
});

