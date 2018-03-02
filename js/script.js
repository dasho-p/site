"use strict"
 // ========================================5============================================
/*Завдання 5: вам потрібно написати функцію яка приймає додатнє число і повертає наступне більше число, 
утворене з тих самих цифер.

Тести:

biggerNumber(23) // 32;
biggerNumber(624) // 642;
biggerNumber(2018) // 2081;

Якщо більшого числа немає, повернути -1

biggerNumber(9) = -1;
biggerNumber(111) = -1;
biggerNumber(531) = -1;*/
 
function biggerNumber (number) {

	var strNumber = "" + number;
	var arrNum = strNumber.split("");
	var result = -1;

	for (var i = 0; i < arrNum.length - 1; i++) {
		if(arrNum[arrNum.length - i -1] > arrNum[arrNum.length - i - 2]){
			arrNum.splice((arrNum.length - i -2), 2, arrNum[arrNum.length - i -1], arrNum[arrNum.length - i -2]);
			result = +arrNum.join("");
			return result;
		} else{
			continue;
		}
	}
	return result;
}


document.write("Завдання 5."+ "<br>" + biggerNumber(531));
// ==================================================================================