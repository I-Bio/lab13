function Quest1(){
    let paragraph = document.getElementById("l-txt1");
    let groceries = ['чай', 'шпроты', 'печенье', 'сахар', 'чипсы'];
    let answ = groceries[0];

    for (let i = 1; i < groceries.length; i++){
        answ += ', ' + groceries[i];
    }

    paragraph.textContent = answ;
}

function Quest2_1(){
    let num = parseInt(document.getElementById("quest2-1-num").value);
    let paragraph = document.getElementById("l-txt2-1");
    let nums = [2,2,2,1,1,2,4,5,8,6,8,9,-2,7,2,1,8,7];
    let answ = -1;

    for (let i = 0; i < nums.length; i++){
        if (num === nums[i]){
            answ = i;
        }
    }

    paragraph.textContent = answ;
}

function Quest2_2(){
    let num = parseInt(document.getElementById("quest2-2-num").value);
    let paragraph = document.getElementById("l-txt2-2");
    let nums = [2,9,4,5,8,6,-2,7];
    let answ = -1;

    for (let i = 0; i < nums.length - 1; i++){
        let c = i;
        for (let j = i + 1; j < nums.length; j++){
            if (nums[j] < nums[c]){
                c = j;
            }
        }
        if (c !== i){
            let temp = nums[i];
            nums[i] = nums[c];
            nums[c] = temp;
        }
    }

    answ = nums.indexOf(num);

    if (answ !== -1){
        paragraph.textContent = "Новый индекс элемента: " + answ + " массив: " + nums;
    } else {
        paragraph.textContent = "Такого элемента нет в массиве: " + nums;
    }
}

function SalaryCalculation(mySalary){

    if (mySalary < 100000){
        mySalary *= 0.65;
    } else {
        mySalary *= 0.55;
    }

    return Math.round(mySalary);
}

function Quest3(){
    let num = parseFloat(document.getElementById("quest3-num").value);
    let paragraph = document.getElementById("l-txt3");
    let answ = SalaryCalculation(num);

    paragraph.textContent = "Чистая зарплата: " + answ;
}

function GetPrice(hours, isDeadLine){
    let pricePerHour = 1500;

    if (isDeadLine){
        hours /= 2;
        pricePerHour *= 2.5;
    }
    if (hours > 150){
        pricePerHour -= 250;
    }

    return pricePerHour * hours;
}

function Quest4_1(){
    let num = parseFloat(document.getElementById("quest4-1-num").value);
    let isDeadLine = document.getElementById("quest4-1-bool").checked;
    let paragraph = document.getElementById("l-txt4-1");
    let answ = GetPrice(num, isDeadLine);

    paragraph.textContent = "Стоимость проекта: " + answ;
}

function Quest4_2(){
    let computer = document.getElementById("quest4-2-sel1").value;
    let additionals = document.getElementById("quest4-2-sel2").value;
    let keyPrice = {"":0, Base: 1000, Pro:2000};
    let keyAdditionals = {0:0, 1:500, 2:1100};
    let paragraph = document.getElementById("l-txt4-2");
    let answ;

    if (computer == ""){
        answ = "";
    }else {
        answ = keyPrice[computer] + keyAdditionals[additionals];
    }

    paragraph.textContent = answ;
}

function GetSortedArray(myArray, key){

    for (let i = 0; i < myArray.length - 1; i++){
        let c = i;
        for (let j = i + 1; j < myArray.length; j++){
            if (myArray[j][key] < myArray[c][key]){
                c = j;
            }
        }
        if (c !== i){
            let temp = myArray[i];
            myArray[i] = myArray[c];
            myArray[c] = temp;
        }
    }

    return myArray;
}

function Quest5(){
    let key = document.getElementById("quest5-txt").value;
    if (key != "age") return;
    let paragraph = document.getElementById("l-txt5");
    paragraph.textContent = "";
    let array = [ { name: 'Петя', age: 5 }, { name: 'Лёля', age: 2 }, { name: 'Сима', age: 3 } ];
    let answ = GetSortedArray(array, key);

    for (let i = 0; i < answ.length; i++){
        paragraph.textContent += answ[i].name + " " + answ[i].age + ", ";
    }

    console.log(answ);
}

function GetData(keyArray, dataArray){
    let mainArray = []

    for (let i = 0; i < dataArray.length; i++) {
      let obj = {};
      for (let j = 0; j < keyArray.length; j++) {
        if (dataArray[i][j] !== undefined) {
          obj[keyArray[j]] = dataArray[i][j];
        }
      }
      mainArray.push(obj);
    }

    return mainArray;
}

function Quest6(){
    let paragraph = document.getElementById("l-txt6");
    paragraph.textContent = "";
    let keyArray = ['имя', 'любимый цвет', 'любимое блюдо'];
    let keyData = [ ['Василий', 'красный', 'борщ'], ['Мария'], ['Иннокентий', 'жёлтый', 'пельмени', '18', 'Азовское'] ];
    let answ = GetData(keyArray, keyData)

    for (let i = 0; i < answ.length; i++){
        let a = "";
        let b = "";
        let c = "";
        if (answ[i]['имя'] !== undefined) {
            a = answ[i]['имя'] + ',';
        }
        if (answ[i]['любимый цвет'] !== undefined){
            b = answ[i]['любимый цвет'] + ',';
        }
        if (answ[i]['любимое блюдо'] !== undefined){
            c = answ[i]['любимое блюдо'] + ',';
        }

        paragraph.textContent += a + " " + b + " " + c + "; ";
    }
    console.log(answ);
}