const express = require('express');
const app = express();
app.get('/', (req, res) => {
	res.send("hello world");
});
app.get('/about',(req, res) => {
	res.send('About');
});
app.get('/contact',(req, res) => {
	res.send('form contact');
});
app.listen(3000,() => {
	console.log('server on port 3000');
});