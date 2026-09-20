class Solution {
        /**
             * @param {number[]} nums
                  * @return {number}
                       */
                           longestConsecutive(nums) {
                                   const numSet = new Set(nums);
                                           let longest = 0;
                                                   
                                                           for (const num of numSet) {
                                                                       // Check karein ke yeh sequence ka shuru hai ya nahi
                                                                                   // Agar num - 1 set mein nahi hai, tou yeh shuru hai
                                                                                               if (!numSet.has(num - 1)) {
                                                                                                               let length = 1;
                                                                                                                               let current = num;
                                                                                                                                               
                                                                                                                                                               // Aage ke consecutive numbers count karein
                                                                                                                                                                               while (numSet.has(current + 1)) {
                                                                                                                                                                                                   current++;
                                                                                                                                                                                                                       length++;
                                                                                                                                                                                                                                       }
                                                                                                                                                                                                                                                       
                                                                                                                                                                                                                                                                       longest = Math.max(longest, length);
                                                                                                                                                                                                                                                                                   }
                                                                                                                                                                                                                                                                                           }
                                                                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                           return longest;
                                                                                                                                                                                                                                                                                                               }
                                                                                                                                                                                                                                                                                                               }
