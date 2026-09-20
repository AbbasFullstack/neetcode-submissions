class Solution {
        /**
             * @param {number[]} heights
                  * @return {number}
                       */
                           maxArea(heights) {
                                   let left = 0;
                                           let right = heights.length - 1;
                                                   let maxWater = 0;
                                                           
                                                                   while (left < right) {
                                                                               // Height chhoti wali bar se decide hoti hai
                                                                                           const height = Math.min(heights[left], heights[right]);
                                                                                                       // Width dono pointers ka distance hai
                                                                                                                   const width = right - left;
                                                                                                                               // Area = height * width
                                                                                                                                           const area = height * width;
                                                                                                                                                       
                                                                                                                                                                   // Max area update karein
                                                                                                                                                                               maxWater = Math.max(maxWater, area);
                                                                                                                                                                                           
                                                                                                                                                                                                       // Chhote height wale pointer ko move karein
                                                                                                                                                                                                                   if (heights[left] < heights[right]) {
                                                                                                                                                                                                                                   left++;
                                                                                                                                                                                                                                               } else {
                                                                                                                                                                                                                                                               right--;
                                                                                                                                                                                                                                                                           }
                                                                                                                                                                                                                                                                                   }
                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                   return maxWater;
                                                                                                                                                                                                                                                                                                       }
                                                                                                                                                                                                                                                                                                       }
