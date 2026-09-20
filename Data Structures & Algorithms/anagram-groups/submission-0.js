class Solution {
        /**
             * @param {string[]} strs
                  * @return {string[][]}
                       */
                           groupAnagrams(strs) {
                                   const map = new Map(); // key -> array of strings
                                           
                                                   for (const str of strs) {
                                                               // String ko sort kar ke key banayein
                                                                           const key = str.split('').sort().join('');
                                                                                       
                                                                                                   // Agar key map mein nahi hai tou nayi array banayein
                                                                                                               if (!map.has(key)) {
                                                                                                                               map.set(key, []);
                                                                                                                                           }
                                                                                                                                                       
                                                                                                                                                                   // Original string ko us key wali array mein add karein
                                                                                                                                                                               map.get(key).push(str);
                                                                                                                                                                                       }
                                                                                                                                                                                               
                                                                                                                                                                                                       // Map ki tamam values ko array mein convert kar ke return karein
                                                                                                                                                                                                               return Array.from(map.values());
                                                                                                                                                                                                                   }
                                                                                                                                                                                                                   }
