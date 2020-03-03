export class Character {
	
	age: number;
	name: string;
	address: string;

	constructor(name: string, age: number, address: string) {
		this.name = name;
		this.address = address;
		this.age = age;
	}

	getName(): string {
		return this.name;
	}

	getAge(): number {
		return this.age;
	}

	getAddress(): string {
		return this.address;
	}

}