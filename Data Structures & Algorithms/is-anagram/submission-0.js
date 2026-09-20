class Solution {
        /**
             * @param {string} s
                  * @param {string} t
                       * @return {boolean}
                            */
                                isAnagram(s, t) {
                                        // Agar length hi different hai tou anagram nahi ho sakte
                                                if (s.length !== t.length) {
                                                            return false;
                                                                    }
                                                                            
                                                                                    // Dono strings ko characters mein tod kar sort karein
                                                                                            const sortedS = s.split('').sort().join('');
                                                                                                    const sortedT = t.split('').sort().join('');
                                                                                                            
                                                                                                                    // Sorted strings compare karein
                                                                                                                            return sortedS === sortedT;
                                                                                                                                }
                                                                                                                                }
