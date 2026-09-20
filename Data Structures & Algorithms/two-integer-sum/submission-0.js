class Solution {
        /**
             * @param {number[]} nums
                  * @param {number} target
                       * @return {number[]}
                            */
                                twoSum(nums, target) {
                                        const map = new Map(); // number -> index
                                                
                                                        for (let i = 0; i < nums.length; i++) {
                                                                    const complement = target - nums[i];
                                                                                
                                                                                            // Check if complement already exists in map
                                                                                                        if (map.has(complement)) {
                                                                                                                        return [map.get(complement), i];
                                                                                                                                    }
                                                                                                                                                
                                                                                                                                                            // Store current number with its index
                                                                                                                                                                        map.set(nums[i], i);
                                                                                                                                                                                }
                                                                                                                                                                                        
                                                                                                                                                                                                return []; // Return empty if no solution
                                                                                                                                                                                                    }
                                                                                                                                                                                                    }
