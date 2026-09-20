class Solution {
        /**
             * @param {number[]} numbers
                  * @param {number} target
                       * @return {number[]}
                            */
                                twoSum(numbers, target) {
                                        let left = 0;
                                                let right = numbers.length - 1;
                                                        
                                                                while (left < right) {
                                                                            const sum = numbers[left] + numbers[right];
                                                                                        
                                                                                                    if (sum === target) {
                                                                                                                    // 1-indexed return karna hai, is liye +1
                                                                                                                                    return [left + 1, right + 1];
                                                                                                                                                } else if (sum < target) {
                                                                                                                                                                // Sum chhota hai, tou left pointer ko aage barhayein
                                                                                                                                                                                left++;
                                                                                                                                                                                            } else {
                                                                                                                                                                                                            // Sum bara hai, tou right pointer ko peeche layein
                                                                                                                                                                                                                            right--;
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                return []; // Return empty if no solution
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                    }
