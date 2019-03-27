const express = require('express');
const app = express();
app.get('/', (req, res) => {
	res.send("Hello world...");
});
app.get('/about',(req, res) => {
	res.send('About GET');
});
app.post('/about',(req, res) => {
	res.send('About POST');
});
app.get('/data',(req, res) => {
	res.send('Response GET');
});
app.post('/data',(req, res) => {
	res.json({	username:'David',
				lastname: 'Raygoza'
		});
});
app.get('/contact',(req, res) => {
	res.send('form contact');
});
app.listen(3000,() => {
	console.log('server on port 3000');
});