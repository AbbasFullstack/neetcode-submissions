class Solution {
        /**
             * @param {number[]} nums
                  * @param {number} k
                       * @return {number[]}
                            */
                                topKFrequent(nums, k) {
                                        // Step 1: Har number ki frequency count karein
                                                const countMap = new Map();
                                                        for (const num of nums) {
                                                                    countMap.set(num, (countMap.get(num) || 0) + 1);
                                                                            }
                                                                                    
                                                                                            // Step 2: Buckets banayein (index = frequency)
                                                                                                    // Bucket array ki length nums.length + 1 hogi
                                                                                                            const buckets = Array.from({ length: nums.length + 1 }, () => []);
                                                                                                                    
                                                                                                                            for (const [num, freq] of countMap) {
                                                                                                                                        buckets[freq].push(num);
                                                                                                                                                }
                                                                                                                                                        
                                                                                                                                                                // Step 3: Sabse zyada frequency se shuru karke k elements uthayein
                                                                                                                                                                        const result = [];
                                                                                                                                                                                for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
                                                                                                                                                                                            for (const num of buckets[i]) {
                                                                                                                                                                                                            result.push(num);
                                                                                                                                                                                                                            if (result.length === k) {
                                                                                                                                                                                                                                                return result;
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                    return result;
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                        }
