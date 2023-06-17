//--------------------Задача 1----------------------

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}
const sherlock = new PrintEditionItem(
	"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
	2019,
	1008
);
console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

const hello = new Magazine (
    "Hello!",
    2020,
    43
);
console.log(hello.name);
console.log(hello.releaseDate);
console.log(hello.pagesCount);

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

const picknick = new FantasticBook(
	"Аркадий и Борис Стругацкие",
	"Пикник на обочине",
	1972,
	168
);
console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

const sword = new Book(
	"А. Сапковский",
	"Меч Предназначения",
	1992,
	384
);
console.log(sword.author);
console.log(sword.releaseDate);
sword.state = 10;
console.log(sword.state); //10
sword.fix();
console.log(sword.state);
console.log(sword.pagesCount);

const sovereign = new FantasticBook(
	"Джон Толкин",
	"Властелин колец",
	1954,
	752
);
console.log(sovereign.author);
console.log(sovereign.releaseDate);

const secret = new DetectiveBook(
	"Агата Кристи",
	"Тайна голубого поезда",
	1928,
	352
);
console.log(secret.author);
console.log(secret.name);
console.log(secret.releaseDate);
console.log(secret.pagesCount);

const novel = new NovelBook(
	"Л.Н. Толстой",
	"Война и мир",
	1865,
	1300
);
console.log(novel.author);
console.log(novel.name);
console.log(novel.releaseDate);
console.log(novel.pagesCount);
novel.state = 5;
console.log(novel.state);
novel.fix();
console.log(novel.state);


//--------------Задача 2------------------

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
           this.books.push(book);
        }
    }

    findBookBy(type, value){
        for (let book of this.books) {
			if (book[type] === value) {
				return book;
			}
	    }
       	return null; 
    }

    giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				return this.books.splice(i, 1)[0];
			}
		}
		return null;
	}
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
	)
);

library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
	)
);

library.addBook(new NovelBook(
	"Герберт Уэллс", 
	"Машина времени", 
	1895, 
	138
	)
);

library.addBook(new Magazine(
	"Мурзилка", 
	1924, 
	60
	)
);

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3


library.addBook(new NovelBook(
	"А.Б.Мариенгоф",
	"Магдалина", 
	1919, 
	33
	)
);

library.addBook(new Magazine(
	"Крокодил", 
	1992, 
	16
	)
);

library.addBook(new FantasticBook(
	"Джоан Роулинг", 
	"Гарри Поттер и философский камень", 
	1997, 
	399
	)
);

library.addBook(
	new FantasticBook(
	"Дмитрий Глуховский",
	"Метро 2033",
	2007,
	437
	)
);

library.addBook(new NovelBook(
	"Эрнест Хемингуэй", 
	"По ком звонит колокол", 
	1940, 
	471
	)
);	

let book = library.findBookBy("releaseDate", 1919);
		if (!book) {
			book = new NovelBook("Владимир Маяковский", "Возвращение к Баку", 1919, 58);// создаём книгу, если не нашли
		}

	console.log("Книга, изданная в 1919 году: " + book.name + ', ' + book.author);

	console.log("Количество книг до выдачи: " + library.books.length);
let givenBook = library.giveBookByName("Метро 2033");// выдали книгу
	console.log("Выдана книга: " + givenBook.name);
	console.log("Количество книг после выдачи: " + library.books.length);
	givenBook.state = 16; //повредили выданную книгу
	givenBook.fix(); // восстановили выданную книгу
	console.log(givenBook.state);
	library.addBook(givenBook); //пытаемся вернуть восстановленную книгу обратно в библиотеку
	console.log("Количество книг после возвращения: " + library.books.length); // такое же, т.к. поврежденные книги не возвращаются в библиотеку (state < 30)


//-----------------Задача 3------------------

let student1Marks = {
	"физика": [4, 5, 5, 4],
	"химия": [3, 4, 5],
	"литература": [4],
	"информатика": [5, 5, 5]
};

class Student {
	constructor(name, marks) {
		this.name = name;
		this.marks = marks || {};
	}

	// добавляем оценку
	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			console.log("Ошибка! Оценка должна быть числом от 2 до 5.");
			return;
		}
		if (!this.marks[subject]) { //проверяем наличие предмета, если отсутствует
			this.marks[subject] = []; 
		}
		this.marks[subject].push(mark);  //добавляем новый предмет
	}

	// получаем средний балл по одному предмету
	getAverageBySubject(subject) {
		if (!this.marks[subject]) { //проверяем наличие предмета
			return 0;
		}
		const sum = this.marks[subject].reduce((total, mark) => total + mark, 0); //сумма 
		return sum / this.marks[subject].length; //среднее значение
	}


	//возвращаем общую среднюю оценку по всем предметам
	getAverage() {
		const subjects = Object.keys(this.marks); //получаем все названия предметов
		if (subjects.length === 0) {
			return 0;
		}
		const sum = subjects.reduce((total, subject) => { //перебираем все предметы
			const average = this.getAverageBySubject(subject); //считаем среднее значение по предмету
			return total + average; //суммируем полученные значения
		}, 0);
		return sum / subjects.length; // сумму всех средних оценок делим на количество предметов
	}
}

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
console.log(student.getAverageBySubject("физика")); // Средний балл по предмету физика 4.5
console.log(student.getAverageBySubject("биология")); // Вернёт 0, так как по такому предмету нет никаких оценок.
console.log(student.getAverage()); // Средний балл по всем предметам 4.75

const student1 = new Student("Сергей Потапов", student1Marks);
student1.addMark(5, "химия");
student1.addMark(5, "химия");
student1.addMark(4, "физика");
student1.addMark(4, "литература");
student1.addMark(5, "литература");
student1.addMark(3, "биология");
student1.addMark(5, "информатика");
student1.addMark(4, "физика");
student1.addMark(1, "физика");
student1.addMark(4, "алгебра");
console.log(student1.getAverageBySubject("физика").toFixed(1));
console.log(student1.getAverageBySubject("биология").toFixed(1));
console.log(student1.getAverageBySubject("философия"));
console.log(student1.getAverageBySubject("химия").toFixed(1));
console.log(student1.getAverageBySubject("информатика").toFixed(1));
console.log(student1.getAverageBySubject("литература").toFixed(1));
console.log(student1.getAverageBySubject("алгебра").toFixed(1));
console.log(student1.getAverage().toFixed(1));