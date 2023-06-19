function parseCount(value) {
	let parsed = Number.parseFloat(value);
	if (Number.isNaN(parsed)) {
		throw new Error('Невалидное значение');
	}
	return parsed;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}
console.log(parseCount('123'));
console.log(parseCount('012'));
console.log(validateCount('56.65'));
console.log(validateCount("ыфва"));

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if (a + b <= c || a + c <= b || b + c <= a) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const p = this.perimeter / 2;
		const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return Number(area.toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		const triangle = new Triangle(a, b, c);
		return triangle;
	} catch {
		return {
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			},
			get area() {
				return 'Ошибка! Треугольник не существует';
			}
		}
	}
}       
const triangle = new Triangle(6, 10, 15);
console.log(triangle.area);
console.log(triangle.perimeter);
const triangle1 = getTriangle(1, 3, 100);
console.log(triangle1.area);
console.log(triangle1.perimeter);
const triangle2 = new Triangle(2, 5, 5);
console.log(triangle2.area);
console.log(triangle2.perimeter);
const triangle3 = new Triangle(1, 3, 3);
console.log(triangle3.area);
console.log(triangle3.perimeter);
const triangle4 = getTriangle(2, 5, 5);
console.log(triangle4);
console.log(triangle4.area);
console.log(triangle4.perimeter);
