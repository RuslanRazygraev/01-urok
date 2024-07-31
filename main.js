var seconds = 60;
var minuts = 60;
var seconds_in_hours = seconds*minuts;
var vremya = "В одном часе "+seconds_in_hours+" секунд";
var str = "новая строка на js";
console.log(str.length);
console.log(vremya.length);
console.log(vremya[8]);
console.log(vremya.toLocaleLowerCase());//маленькими буквами
console.log(vremya.toLocaleUpperCase());//капс
var new_vremya = vremya.slice(3,6);//режет до 3х и после 6ти
console.log(new_vremya);//обрезал
var string = "эТа СтРоКа с РаЗнЫм РеГиСтРоМ БуКв";
var pervaya_bukva = string[0].toUpperCase();
var ostalnye_bukvy = string.slice(1).toLowerCase();
var new_predlozhenie = pervaya_bukva+ostalnye_bukvy;
console.log(new_predlozhenie);
var bool = false&&false;//переменная и. Равняется false
var bool = false&&true;//Равняется false
var bool = true&&false;//Равняется false
var bool = true&&true;//Равняется true

var bool2 = false||false;//переменная или. Равняется false
var bool2 = false||true;//Равняется true
var bool2 = true||false;//Равняется true
var bool2 = true||true;//Равняется true

console.log(!bool);//воскл знак это переменная отрицание
console.log(bool2);
console.log(10<5);
console.log(10>5);
console.log(5==="5");//чтобы сравнить два числа
console.log(5=="5");//чтобы сравнить число 5 и строку 5

var array = [];//это массив
var abc = [10, "строка", true, "строка2", 17];//это массив
console.log(abc[0]);//узнать элемент массива по индексу
console.log(abc[1]);//узнать элемент массива по индексу
console.log(abc[2]);//узнать элемент массива по индексу
console.log(abc[3]);//узнать элемент массива по индексу
console.log(abc[4]);//узнать элемент массива по индексу
console.log(abc.indexOf("строка2"));//узнать индекс массива по элементу

console.log(abc);
abc.push("Строка3", 21);//метод push - добавить в конец в массив
abc[7] = "Добавил новый элемент в массив";//
console.log(abc);
console.log(abc[5]);
console.log(abc[6]);
var p1 = abc.pop();//метод pop - удалить из массива последний элемент и записать этот элемент в новую переменную
console.log(abc);
console.log(p1);
var p2 = abc.shift();//метод shift - удалить из массива первый элемент и записать этот элемент в новую переменную
console.log(abc);
console.log(p2);
abc.unshift("строка111", true, 77);//метод unshift - добавить в массив новый элемент в самое начало массива
console.log(abc);
console.log(abc.indexOf("строка2"));//метод indexOf - узнать индекс/нумирацию значения строка2
console.log(abc.join("+"));//метод join - объединяет все значения массива в одну строку. Разделитель можно написать любой
console.log(abc);

var tool = {};//это объект
var tools = {
	"name":"Карандаш",//свойство keys ключи : и значение
	"color":"синий",
	"diametr":15,
	"sharpened":true
};

for (var i=0; i<4; i++){//узнать содержимое объекта (сам придумал)
var value = Object.keys(tools)[i];
console.log(value+": "+tools[value]);
}




console.log(tools.name);//узнать содержимое ключа
console.log(tools["color"]);//узнать содержимое ключа
console.log(Object.keys(tools));//узнать содержимое объекта
var tools = [//массив
	{"name": "Карандаш", "color": "синий", "diametr": 15, "sharpened": true},
	{"name": "Маркер", "color": "красный", "diametr": 21, "sharpened": false},
	{"name": "Авторучка", "color": "черная", "diametr": 17, "sharpened": false}
];
console.log(tools[1]);//узнать элемент массива по индексу
console.log(tools[1]["color"]);//узнать ключ элемента массива

for (i=0; i<tools.length; i++){
	console.log("Товар: "+tools[i]["name"])
};

var name = "Евгений";
if (name.length>7 && name[0]=="Е"){
	console.log("Ваше имя - "+name+" - длиннее чем 7 символов!!!");
} else {console.log("Ваше имя короче чем 7 символов, или не начинается с буквы Е!!!")}

function helloword(name){
	console.log("Привет, "+name+"!");
}
var name=("Таня");
helloword(name);

function bublik(n){
	return console.log(n*2);
}
var num = 20;

console.log("Ура!!!");
console.log("Ура!!!");
console.log("Ура!!!");
bublik(num);

var str;
undefined//это значит, что значение не найдено

var str = null;//это значит, что значение пустое

var count = 10;
count++;//сделает +1 после цикла
++count;//сделает +1 до цикла