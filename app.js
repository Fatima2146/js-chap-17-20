//\\\\\\\\\\\\\\\\\\\\\\\\\\\\-------- QUESTION 1. ---------\\\\\\\\\\\\\\\\\\\\\\\
let array = [];

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\-------- QUESTION 3. ---------\\\\\\\\\\\\\\\\\\\\\\\
for(let i=1; i<=10; i++){
    document.write(i,"<br>")
}

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\-------- QUESTION 4. ---------\\\\\\\\\\\\\\\\\\\\\\\
let table = parseInt(prompt("Enter a number to represent a multiplication table:"));
let leng = parseInt(prompt("Enter the length of the table:"));

for (let i = 1; i <= leng; i++) {
    document.write(`${table} x ${i} = ${table * i}<br>`);
}


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\-------- QUESTION 5. ---------\\\\\\\\\\\\\\\\\\\\\\\
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("List of fruits:");
for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] ,"<br>");
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\-------- QUESTION 6. ---------\\\\\\\\\\\\\\\\\\\\\\\
document.write("<h3>a. Counting:</h3>");
for (let i = 1; i <= 15; i++) {
    document.write(i);
    if (i < 15) {
        document.write(", ");
    }
}
document.write("<h3>b. Reverse counting:</h3>");
for (let i = 10; i >= 1; i--) {
    document.write(i);
    if (i > 1) {
        document.write(", ");
    }
}
document.write("<h3>c. Even:</h3>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i);
    if (i < 20) {
        document.write(", ");
    }
}
document.write("<h3>d. Odd:</h3>");
for (let i = 1; i <= 19; i += 2) {
    document.write(i);
    if (i < 19) {
        document.write(", ");
    }
}
document.write("<h3>e. Series:</h3>");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k");
    if (i < 20) {
        document.write(", ");
    }
}

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\-------- QUESTION 7. ---------\\\\\\\\\\\\\\\\\\\\\\\

let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let searchItem = prompt("Enter an item to search for:");
let found = false;
for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === searchItem.toLowerCase()) {
        found = true;
        document.write("Item '" + searchItem + "' found in the list.<br>");
        document.write("Length of '" + A[i] + "': " + A[i].length + "<br>");
        break;
    }
}

if (!found) {
    document.write("Item '" + searchItem + "' not found in the list.<br>");
}

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\-------- QUESTION 8. ---------\\\\\\\\\\\\\\\\\\\\\\\
 let num = [24, 53, 78, 91, 12];
let largest = num[0];
for (let i = 1; i < num.length; i++) {
    if (num[i] > largest) {
        largest = num[i];
    }
}
document.write("<br> Array elements",num ,"<br>")
document.write("The largest number in the array is: " + largest);

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\-------- QUESTION 9. ---------\\\\\\\\\\\\\\\\\\\\\\\
let num1 = [24, 53, 78, 91, 12];
let smallest = num[0];
for (let i = 1; i > num1.length; i++) {
    if (num[i] > smallest) {
        smallest = num1[i];
    }
}
document.write("<br> Array elements",num1 ,"<br>")
document.write("The largest number in the array is: " + smallest);

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\-------- QUESTION 10. ---------\\\\\\\\\\\\\\\\\\\\\\\
document.write("Multiples of 5 from 1 to 100:<br>");
for (let i = 5; i <= 100; i += 5) {
    document.write(i + "<br>");
}
