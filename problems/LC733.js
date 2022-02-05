/**
 * #733. Flood Fill
 *
 * An image is represented by an m x n integer grid image where image[i][j]
 * represents the pixel value of the image.
 *
 * You are also given three integers sr, sc, and newColor. You should perform
 * a flood fill on the image starting from the pixel image[sr][sc].
 *
 * To perform a flood fill, consider the starting pixel, plus any pixels
 * connected 4-directionally to the starting pixel of the same color as the
 * starting pixel, plus any pixels connected 4-directionally to those pixels
 * (also with the same color), and so on. Replace the color of all of the
 * aforementioned pixels with newColor.
 *
 * Return the modified image after performing the flood fill.
 *
 * Notes:
 *   - m == image.length
 *   - n == image[i].length
 *   - 1 <= m, n <= 50
 *   - 0 <= image[i][j], newColor < 216
 *   - 0 <= sr < m
 *   - 0 <= sc < n
 *
 * Difficulty: Easy
 * Time Submitted: 02/04/2022 15:34
 *
 * Notes
 * The solution is based on the _BFS_ algorithm.
 *
 * Submission details
 *   - Runtime: 76 ms, faster than 97.55% of other JS submissions
 *   - Memory Usage: 44.6 MB, less than 7.70% of other JS submissions
 *
 * Complexity analysis
 *   - O(M*N) time | where M and N are the dimensions of the input matrix
 *   - O(M*N) space | where M and N are the dimensions of the input matrix
 *
 */

 /**
  * @param {number[][]} image
  * @param {number} sr
  * @param {number} sc
  * @param {number} newColor
  * @return {number[][]}
  */
 const floodFill = function(image, sr, sc, newColor) {

   const rows = image.length;
   const cols = image[0].length;
   const oldColor = image[sr][sc];
   const newImage = Array(rows).fill(-1).map(() => Array(cols).fill(-1));

   // Direction vectors for rows and cols
   const dr = [-1,  1,  0,  0]
   const dc = [ 0,  0,  1, -1]

   function floadFill(r, c) {

     newImage[r][c] = newColor;

     for (let i = 0; i < 4; i++) {

       let newR = r + dr[i];
       let newC = c + dc[i];

       if ((newR < 0) || (newC < 0))
         continue;
       if ((newR >= rows) || (newC >= cols))
         continue;
       if (newImage[newR][newC] !== -1)
         continue;
       if (image[newR][newC] !== oldColor)
         continue;
       newImage[newR][newC] = newColor;

       floadFill(newR, newC);

     }

   }

   function copyRemaining() {
     for(let r = 0; r < rows; r++)
       for(let c = 0; c < cols; c++)
         if (newImage[r][c] === -1)
           newImage[r][c] = image[r][c];
   }

   floadFill(sr, sc);
   copyRemaining();

   return newImage

 };
