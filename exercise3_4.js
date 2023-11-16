let objStudent = [
	{
		name: "Teo",
		age: "31",
		dia_chi: "Ha Noi",
		so_dien_thoai: "099999",
		email: "teo@gmail.com",
	},
	{
		name: "Ty",
		age: "35",
		dia_chi: "Ha Noi",
		so_dien_thoai: "099999",
		email: "ty@gmail.com",
	},
	{
		name: "A",
		age: "25",
		dia_chi: "Ha Noi",
		so_dien_thoai: "099999",
		email: "a@gmail.com",
	},
	{
		name: "Te",
		age: "30",
		dia_chi: "Ha Noi",
		so_dien_thoai: "099999",
		email: "te@gmail.com",
	},
	{
		name: "Ta",
		age: "18",
		dia_chi: "Ha Noi",
		so_dien_thoai: "099999",
		email: "ta@gmail.com",
	},
];
let jsonStudent = JSON.stringify(objStudent);
console.log(jsonStudent);
let objStudent2 = JSON.parse(jsonStudent);
console.log(objStudent2);
const filterUser = objStudent2.filter((a) => a.age <= 30 && a.age >= 18);
console.log(filterUser);
console.log(typeof objStudent2[4]["age"]);
