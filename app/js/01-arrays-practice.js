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


//STEP 10

//STEP 11

//STEP 12

//STEP 13

//STEP 14

//STEP 15

//STEP 16

//STEP 17

//STEP 18

//STEP 19

//STEP 20