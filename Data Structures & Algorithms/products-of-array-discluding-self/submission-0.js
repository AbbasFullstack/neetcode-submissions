class Solution {
        /**
             * @param {number[]} nums
                  * @return {number[]}
                       */
                           productExceptSelf(nums) {
                                   const n = nums.length;
                                           const result = new Array(n).fill(1);
                                                   
                                                           // Step 1: Left products calculate karein
                                                                   // result[i] mein nums[0] se nums[i-1] tak ka product hoga
                                                                           let leftProduct = 1;
                                                                                   for (let i = 0; i < n; i++) {
                                                                                               result[i] = leftProduct;
                                                                                                           leftProduct *= nums[i];
                                                                                                                   }
                                                                                                                           
                                                                                                                                   // Step 2: Right products calculate karein aur multiply karein
                                                                                                                                           // result[i] mein nums[i+1] se nums[n-1] tak ka product multiply hoga
                                                                                                                                                   let rightProduct = 1;
                                                                                                                                                           for (let i = n - 1; i >= 0; i--) {
                                                                                                                                                                       result[i] *= rightProduct;
                                                                                                                                                                                   rightProduct *= nums[i];
                                                                                                                                                                                           }
                                                                                                                                                                                                   
                                                                                                                                                                                                           return result;
                                                                                                                                                                                                               }
                                                                                                                                                                                                               }
