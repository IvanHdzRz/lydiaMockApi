const express = require('express');
const {mockGetOrder, mockOk, mockLogin} = require('./mockResponses');
const basePath = '/gw/json'
const app = express();
const port = 3000;

app.use(express.json());

app.get('/*', (req, res)=>{
	console.log('Get')
	console.log('Parametros recibidos: ',req.query);
	const calledEndpoint = req.path.replace(basePath, '');
	console.log(calledEndpoint);
	let response;
	switch (calledEndpoint) {
		case '/loginUser':
			response = mockLogin;
		break;
		case '/getPickOrder':
			response = mockGetOrder;
		break;
		default: response = mockOk; break;
	}
	res.status(201).json(response).send();
})

app.post('/*',(req, res) => {
	console.log('POST')
	console.log('Parametros recibidos: ',req.query);
	const calledEndpoint = req.path.replace(basePath, '');
	console.log(calledEndpoint);
	let response;
	switch (calledEndpoint) {
		case '/loginUser':
			response = mockLogin;
		break;
		case '/getPickOrder':
			response = mockGetOrder;
		break;
		default: response = mockOk; break;
	}
	res.status(201).json(response).send();
})

app.listen(port,()=>{
	console.log('Lydia mock api running on port: ' + port);
})