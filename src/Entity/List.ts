import fs from 'fs';
import { Character } from './Character';

export class List {

	list: Array<string>;
	path: string;
	tuple: any;

	constructor(path: string) {
		this.path = path;
		this.list = [];
		this.tuple = [];
	}

	query(query: string): boolean {
		this.tuple = this.tuple.map(line => {
			const [ name, age, address ] = [...line.replace(/"/ig, '').split(',')];
			return {"name": name, "age": age, "address": address};
		})
		.find(e => e.name == query);
		if (Boolean(this.tuple))
			this.tuple = new Character(this.tuple.name, Number(this.tuple.age), this.tuple.address);
		return Boolean(this.tuple);
	}

	parse(): boolean {
		this.tuple = fs.readFileSync(this.path, 'utf8').split('\n');
		return this.tuple.length != 0;
	}

}