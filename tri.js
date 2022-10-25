/*
Right Triangles
Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. 
The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.
*/

function stringFactory(size, char) {
  let string = '';

  for (let i = 0; i < size; i ++) {
    string += char;
  }

  return string;
}

function triangle(n) {
  let spaces = n - 1;
  let stars = 1;

  for (let layer = 0; layer < n; layer ++) {
    console.log(stringFactory(spaces, ' ') + stringFactory(stars, '*'));
    spaces -= 1;
    stars += 1;
  }

}

triangle(5);