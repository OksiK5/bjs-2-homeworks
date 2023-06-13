function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
    return arr1.every((element, index) => element === arr2[index]);
}
compareArrays([8, 9], [6]) // false, разные значения
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]) // false, разные значения
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]) // false, разные значения
compareArrays([1, 2, 3], [2, 3, 1]) // false, разные индексы, хотя и одинаковые значения
compareArrays([8, 1, 2], [8, 1, 2]) // true
compareArrays([1, 2], [1, 2, 3]) // false
compareArrays([0, 1], [0, 1, 2]) // false

function getUsersNamesInAgeRange(users, gender) {
	const filteredUsers = users.filter(user => {
		return user.gender === gender
	});
	const numOfUsers = filteredUsers.length;
	if (numOfUsers === 0) {
		return 0;
	}
	const agesSum = filteredUsers.reduce(
		(totalAges, currentUser) => totalAges + currentUser.age,
		0
	);
	return agesSum / numOfUsers;

}
const people = [{
		firstName: "Александр",
		secondName: "Карпов",
		age: 17,
		gender: "мужской"
	},
	{
		firstName: "Егор",
		secondName: "Морозов",
		age: 21,
		gender: "мужской"
	},
	{
		firstName: "Мелисса",
		secondName: "Леонова",
		age: 40,
		gender: "женский"
	},
	{
		firstName: "Мелания",
		secondName: "Савельева",
		age: 37,
		gender: "женский"
	},
	{
		firstName: "Мария",
		secondName: "Овчинникова",
		age: 18,
		gender: "женский"
	},
	{
		firstName: "Марьяна",
		secondName: "Котова",
		age: 17,
		gender: "женский"
	},
	{
		firstName: "Фёдор",
		secondName: "Селезнев",
		age: 50,
		gender: "мужской"
	},
	{
		firstName: "Георгий",
		secondName: "Петров",
		age: 35,
		gender: "мужской"
	},
	{
		firstName: "Даниил",
		secondName: "Андреев",
		age: 49,
		gender: "мужской"
	},
	{
		firstName: "Дарья",
		secondName: "Савельева",
		age: 25,
		gender: "женский"
	},
	{
		firstName: "Михаил",
		secondName: "Шаров",
		age: 22,
		gender: "мужской"
	},
	{
		firstName: "Владислав",
		secondName: "Давыдов",
		age: 40,
		gender: "мужской"
	},
	{
		firstName: "Илья",
		secondName: "Казаков",
		age: 35,
		gender: "мужской"
	},
	{
		firstName: "Евгений",
		secondName: "Кузьмин",
		age: 19,
		gender: "мужской"
	},
]
console.log(getUsersNamesInAgeRange(people, "мужской")); // 32
console.log(getUsersNamesInAgeRange(people, "женский")); // 27.4
console.log(getUsersNamesInAgeRange([], "женский")); // 0
console.log(getUsersNamesInAgeRange(people, "инопланетянин")); // 0
console.log(getUsersNamesInAgeRange([], "мужской")); // 0