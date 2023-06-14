function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if (this.marks) {
		this.marks.push(...marksToAdd);
	} else {
		console.log("Студент отчислен, добавление оценок невозможно");
	}
}

Student.prototype.getAverage = function() {
	if (this.marks && this.marks.length > 0) {
		const sum = this.marks.reduce((total, mark) => total + mark);
		return sum / this.marks.length;
	} else {
		return 0;
	}
}

Student.prototype.exclude = function(reason) {
	this.excluded = reason;
	delete this.subject;
	delete this.marks;
}

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}

let student3 = new Student("Валентина", "женский", 20);
student3.setSubject("Philosophy");
console.log(student3.getAverage());
student3.addMarks(4, 4);
console.log(student3.getAverage());
console.log(student3);

let student4 = new Student("Михаил", "мужской", 22);
student4.setSubject("Physics");
console.log(student4.getAverage());
student4.addMarks(5, 4, 4, 5);
console.log(student4.getAverage());
console.log(student4);