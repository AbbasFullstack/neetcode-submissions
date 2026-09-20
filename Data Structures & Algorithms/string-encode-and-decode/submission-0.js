class Solution {
        /**
             * @param {string[]} strs
                  * @returns {string}
                       */
                           encode(strs) {
                                   let encoded = "";
                                           for (const str of strs) {
                                                       // Format: length + "#" + string
                                                                   encoded += str.length + "#" + str;
                                                                           }
                                                                                   return encoded;
                                                                                       }

                                                                                           /**
                                                                                                * @param {string} str
                                                                                                     * @returns {string[]}
                                                                                                          */
                                                                                                              decode(str) {
                                                                                                                      const result = [];
                                                                                                                              let i = 0;
                                                                                                                                      
                                                                                                                                              while (i < str.length) {
                                                                                                                                                          // 1. Length nikaalein (jab tak '#' na mil jaye)
                                                                                                                                                                      let j = i;
                                                                                                                                                                                  while (str[j] !== '#') {
                                                                                                                                                                                                  j++;
                                                                                                                                                                                                              }
                                                                                                                                                                                                                          const length = parseInt(str.substring(i, j));
                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                  // 2. Length ke hisaab se string nikaalein
                                                                                                                                                                                                                                                              const start = j + 1;
                                                                                                                                                                                                                                                                          const end = start + length;
                                                                                                                                                                                                                                                                                      result.push(str.substring(start, end));
                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                              // 3. Pointer ko aage barhayein
                                                                                                                                                                                                                                                                                                                          i = end;
                                                                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                                                                                  return result;
                                                                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                                                                      }
