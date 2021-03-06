//STEP 1
// Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.

//var favoriteMovies = ['The Seven Samurai', 'Bonnie and Clyde', 'Reservoir Dogs', 'Airplane!', 'Pan\'s Labyrinth'];
//console.log(favoriteMovies[1]);

//STEP 2
// Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. 
// Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.

/*
let movies = new Array(5);
movies = favoriteMovies;
console.log(movies[0]);
*/

//STEP 3
// Copy your code from step 2. Add a new movie into the 5th position within your array. Then, use the console to display the length of the array. 
// You should now have 6 total movies stored in the array.

/*
let movies = new Array(5);
favoriteMovies.push('Doctor Zhivago');
movies = favoriteMovies;
console.log(movies.length);
*/

//STEP 4
// Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. 
// Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.

/*
let movies = [];

for (const [index, movie] of favoriteMovies.entries()) {
    movies[index] = movie;
}

movies.shift()
console.log(movies);
*/

//STEP 5
// Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. 
// Now, use a for loop to iterate through the array and display each movie within the console window.

/*
let movies = [];

movies[0] = 'The Seven Samurai';
movies[1] = 'Bonnie and Clyde';
movies[2] = 'Reservoir Dogs';
movies[3] = 'Airplane!';
movies[4] = 'Pan\'s Labyrinth';
movies[5] = 'Doctor Zhivago';
movies[6] = 'The Deer Hunter';

for (const movie of movies) {
    console.log(movie);
}
*/

//STEP 6
// Copy the code from step 5. Now, use a for-in loop to iterate through the array and display each movie within the console window.

/*
let movies = [];

movies[0] = 'The Seven Samurai';
movies[1] = 'Bonnie and Clyde';
movies[2] = 'Reservoir Dogs';
movies[3] = 'Airplane!';
movies[4] = 'Pan\'s Labyrinth';
movies[5] = 'Doctor Zhivago';
movies[6] = 'The Deer Hunter';

for (const movie in movies) {
    console.log(movies[movie]);
} 
*/

//STEP 7
// Copy the code from step 5. Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.

/*
let movies = [];

movies[0] = 'The Seven Samurai';
movies[1] = 'Bonnie and Clyde';
movies[2] = 'Reservoir Dogs';
movies[3] = 'Airplane!';
movies[4] = 'Pan\'s Labyrinth';
movies[5] = 'Doctor Zhivago';
movies[6] = 'The Deer Hunter';

console.log(movies.sort()); 
*/

//STEP 8
// Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. 
// Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):

/*
let movies = [];
let leastFavMovies = [];

movies[0] = 'The Seven Samurai';
movies[1] = 'Bonnie and Clyde';
movies[2] = 'Reservoir Dogs';
movies[3] = 'Airplane!';
movies[4] = 'Pan\'s Labyrinth';
movies[5] = 'Doctor Zhivago';
movies[6] = 'The Deer Hunter';

leastFavMovies[0] = movies[2];
leastFavMovies[1] = movies[4];
leastFavMovies[2] = movies[5];

console.log('Movies I like:');
console.log('\n');

for (const movie of movies) {
    console.log(movie);
}

console.log('\n');

console.log('Movies I regret watching::');
console.log('\n');

for (const movie of leastFavMovies) {
    console.log(movie);
}
*/

//STEP 9
// Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. 
// Use the console window to display the list in reverse sorted order.

/*
let favoriteMovies = [];
let leastFavMovies = [];

favoriteMovies[0] = 'The Seven Samurai';
favoriteMovies[1] = 'Bonnie and Clyde';
favoriteMovies[2] = 'Reservoir Dogs';
favoriteMovies[3] = 'Airplane!';
favoriteMovies[4] = 'Pan\'s Labyrinth';
favoriteMovies[5] = 'Doctor Zhivago';
favoriteMovies[6] = 'The Deer Hunter';

leastFavMovies[0] = favoriteMovies[2];
leastFavMovies[1] = favoriteMovies[4];
leastFavMovies[2] = favoriteMovies[5];

movies = new Array(favoriteMovies.concat(leastFavMovies));
console.log(movies.reverse());
*/

//STEP 10
// Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.

/*
let favoriteMovies = [];
let leastFavMovies = [];

favoriteMovies[0] = 'The Seven Samurai';
favoriteMovies[1] = 'Bonnie and Clyde';
favoriteMovies[2] = 'Reservoir Dogs';
favoriteMovies[3] = 'Airplane!';
favoriteMovies[4] = 'Pan\'s Labyrinth';
favoriteMovies[5] = 'Doctor Zhivago';
favoriteMovies[6] = 'The Deer Hunter';

leastFavMovies[0] = favoriteMovies[1];
leastFavMovies[1] = favoriteMovies[2];
leastFavMovies[2] = favoriteMovies[3];

let movies = favoriteMovies.concat(leastFavMovies);
console.log(movies[movies.length - 1]);
*/

//STEP 11
// Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.

/*
let favoriteMovies = [];
let leastFavMovies = [];

favoriteMovies[0] = 'The Seven Samurai';
favoriteMovies[1] = 'Bonnie and Clyde';
favoriteMovies[2] = 'Reservoir Dogs';
favoriteMovies[3] = 'Airplane!';
favoriteMovies[4] = 'Pan\'s Labyrinth';
favoriteMovies[5] = 'Doctor Zhivago';
favoriteMovies[6] = 'The Deer Hunter';

leastFavMovies[0] = favoriteMovies[1];
leastFavMovies[1] = favoriteMovies[2];
leastFavMovies[2] = favoriteMovies[3];

let movies = favoriteMovies.concat(leastFavMovies);
console.log(movies[0]);
*/

//STEP 12
// Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 

/*
let likedVideos = ['Lion King', 'Avengers'];
let unlikedVideos = ['The Seven Samurai', 'Bonnie and Clyde'];

for (let indexUnlinked = 0; indexUnlinked < unlikedVideos.length; indexUnlinked++) {
    for (let indexLiked = 0; indexLiked < likedVideos.length; indexLiked++) {
        unlikedVideos[indexLiked] = likedVideos[indexLiked];        
    }
}

console.log(unlikedVideos);
*/

//STEP 13
// Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, 
// and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. 
// Then, programmatically display the name of the second employee within a console window. 

/*
let employee1 = [{
    "employeeid": 1,
    "name": 'Paulo',
    "title": "CEO",
    "deparment": "Executive"
}]

let employee2 = [{
    "employeeid": 5,
    "name": 'Zak',
    "title": "CTO",
    "deparment": "Technology"
}]

let employees = employee1.concat(employee2);
console.log(employees[1]['name']);
*/

//STEP 14
// Copy the code from step 13. Modify the code slightly so that you’re using a loop to iterate through the array and print out the names of both employees.

/*
let employee1 = [{
    "employeeid": 1,
    "name": 'Paulo',
    "title": "CEO",
    "deparment": "Executive"
}]

let employee2 = [{
    "employeeid": 5,
    "name": 'Zak',
    "title": "CTO",
    "deparment": "Technology"
}]

let employees = employee1.concat(employee2);

for (const employee of employees) {
    console.log(employee.name);
}
*/

//STEP 15
// Copy the code from step 14. Now add a third employee and set his employment status to false. 
// Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. 
// Basically, only the first two should appear in the console window.

/*
let employee1 = [{
    "employeeid": 1,
    "name": 'Paulo',
    "title": "CEO",
    "deparment": "Executive",
    "employment_status": true
}]

let employee2 = [{
    "employeeid": 2,
    "name": 'Zak',
    "title": "CTO",
    "deparment": "Technology",
    "employment_status": true
}]

let employee3 = [{
    "employeeid": 3,
    "name": 'Pele',
    "title": "Soccer Player",
    "deparment": "Sport",
    "employment_status": false
}]

let employees = [].concat(employee1, employee2, employee3);

for (const employee of employees) {
    if (employee.employment_status) {
        console.log(employee.name);
    }    
}
*/

//STEP 16
// Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. 
// The array should look something like this: movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
// Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.

/*
let favFilms = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", true], ["Movie 4", 4], ["Movie 5", 5]];
let filmNames = favFilms.filter(films => typeof String(favFilms));

for (const iterator of filmNames) {
    console.log(iterator[0]);
}
*/

//STEP 17
// Create a string array called employees using literal notation and populate the array with several employee names. 
// Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. 
// Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in 
// the console window: Employees: ZAK JESSICA MARK FRED SALLY

/*
let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

function showEmployee(employees) {
    console.log("Employees:"); 
    console.log("\n"); 
    for (const employee of employees) {
        console.log(employee);
    }
}

showEmployee(employees);
*/

//STEP 18
// Write a JavaScript function to filter false, null, 0 and blank values from an array.
// Test Data: window.console.log(filterValues([58, '', 'abcd', true, null, false, 0])); 
// Expected Result: [58, "abcd", true]

/*
let arr = [58, '', 'abcd', true, null, false, 0];
let fileteredItems = arr.filter(function (e) {
    return e;
});

console.log(fileteredItems);
*/

//STEP 19
// Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, 
// the function should randomly return one of those numbers.

/*
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

console.log("random number =>", getRandom(myArray));
*/

//STEP 20
// Write a JavaScript function to get the largest number from a numeric array.

let myArray = [8, 2, 36, 4, 5, 20, 7, 8, 98, 10];

function getLargest(array) {
    return Math.max(...array);
}

console.log(getLargest(myArray));