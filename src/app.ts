import express from 'express';
import bodyParser from 'body-parser';
import { List } from './Entity/List';
import { Character } from './Entity/Character';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/Hello-World/', (request, response) => {
	response.send('Hello world!');
});

app.post('/Character', (request, response) => {
	response.setHeader('Content-Type', 'application/json');

	let result: Character;
	let isFound: boolean = false;

	const list = new List('./public/flat_db.csv');
	isFound = list.parse();

	if (isFound) {

		isFound = list.query(request.body.name);
		
		if (isFound)
			response.send(list.tuple);
		else
			response.send('This person doesn\'t exist in our files.');
	} else
		response.send('File not found.');
});

app.listen(port, (error) => {
	if (error) return console.error(error);
	return console.log(`The server is listening on port ${port}`);
});