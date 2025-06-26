var searchArray = [
    ['a',1 ],['b',17],['c',9 ],['d',11],['e',0 ],
    ['f',19],['g',16],['h',13],['i',7 ],['j',25],
    ['k',18],['l',6 ],['m',15],['n',8 ],['o',5 ],
    ['p',12],['q',24],['r',2 ],['s',3 ],['t',4 ],
    ['u',10],['v',21],['w',20],['x',22],['y',14],
    ['z',23 ],];
var rarityArray = new Array(26);
var answers = new Array();
var wordsCheckedCount = 0;
var lowestSubChecked = 26;
function initializeSearchArray() {
    for (var index = 0; index < searchArray.length; index++) {
        raritySub = new Array();
        raritySub[0] = searchArray[index][0];
        raritySub[1] = new Array();
        rarityArray[searchArray[index][1]] = raritySub;
        
    }
}
function getJotto(textarea) {
    var startTime = Date.now();
    wordsCheckedCount = 0;
    initializeSearchArray();
    var statSub = 0;
    
    var baseCharCode = "a".charCodeAt(0);
    var results = "";
    var input=textarea.value.toLowerCase();
    wordArray= input.split(/\s+/);
    var wordScoreArray = new Array();
    
    for (var sub=0; sub < wordArray.length; sub++ ){
        if (wordArray[sub].length > 0) {
            if (wordArray[sub].length != 5) {
                results = results + " " + wordArray[sub];
            } else {
                var wordScore = new Array(2);
                wordScore[WORDTEXT_SUB()]= wordArray[sub];
                wordScore[WORDSCORE_SUB()] = 0;
                wordScoreArray.push(wordScore);
                var chars = wordArray[sub].split("");
                var rarestLetterSub = 0;
                var xorBits = 0;
                var orBits = 0;
                for (var index = 0; index < 5; index++) {
                    charIndex = chars[index].charCodeAt(0) - baseCharCode;
                    
                    statSub = searchArray[charIndex][1];
                    if (chars[index] != searchArray[charIndex][0]) {
                        //should never happen
                        results = results + " array mismatch "  + statSub;
                    }
                    if (statSub > rarestLetterSub) {
                        rarestLetterSub = statSub;
                    }
                    var charFlag = (1 << statSub);
                    orBits = orBits | charFlag
                    xorBits = xorBits ^ charFlag;
                    if (orBits != xorBits) {
                        break; //so three common letters are caught
                    }
                }
                if (orBits != xorBits) {
                    //word has duplicate letters; do not use
                } else {
                    var wordData = new Object();
                    wordData.string = wordArray[sub];
                    wordData.flags = orBits;
                    rarityArray[rarestLetterSub][1].push(wordData);
                }
            }
        }
    }
    var setupTime = Date.now() ;
    var numberMisses = 0;
    for (var sub = 25; sub > 23; sub--){
        var wordArray = rarityArray[sub][1];
        var length = wordArray.length;
        for (var wordSub = 0; wordSub < length; wordSub++) {
            var jottoArray = new Array();
            var testWord = wordArray[wordSub];
            var jottoData = new Object();
            jottoData.flags = testWord.flags;
            jottoArray.push(testWord);
            jottoData.jottoArray = jottoArray;
            getNextWord(jottoData,sub-1, numberMisses);
            if (jottoArray.length == 5) {
               
            }
        }
        numberMisses++;
    }
   
        var jottoString = " Found <br>";
        for (var answerSub = 0; answerSub < answers.length; answerSub++){
            for (var jottoSub = 0; jottoSub < 5; jottoSub++) {
                jottoString = jottoString + answers[answerSub].jottoArray[jottoSub].string + " ";
            }
            jottoString = jottoString + "<br>" ;
        }
      var endTime = Date.now();
      var totalTime = endTime - startTime;
      var searchTime = endTime - setupTime;
      jottoString = "<br>" + jottoString + "elapsed time:" + totalTime + " millis; searchTime: " + searchTime + " millis<br>";
       jottoString += wordsCheckedCount + " words checked<br>";
       jottoString += "lowest character subscript checked was " + lowestSubChecked;
        
        document.getElementById('results').innerHTML =  jottoString;
    
        return false;
    
}
    function isUnique(jottoData, wordData) {
        return ((jottoData.flags & wordData.flags) == 0);
        
    }
function addAnswer(jottoData) {
    copy = new Object();
    copy.flags = jottoData.flags;
    wordArray = new Array();
    copy.jottoArray = wordArray;
    for (var i = 0; i < jottoData.jottoArray.length; i++) {
        wordArray.push(jottoData.jottoArray[i]);
    }
    answers.push(copy);
}
    function getNextWord(jottoData, rarestLetterSub, numberMisses) {
        var  originalFlags = jottoData.flags;
        while (numberMisses < 2) {
            var currentLetterFlags = 1 << rarestLetterSub;
            var testFlags = currentLetterFlags & originalFlags;
            if (testFlags == 0) {
                var wordArray = rarityArray[rarestLetterSub][1];
                var length = wordArray.length;
                if (rarestLetterSub < lowestSubChecked) {
                    lowestSubChecked = rarestLetterSub;
                }
                for (var wordSub = 0; wordSub < length; wordSub++) {
                    var wordData = wordArray[wordSub];
                    if (isUnique(jottoData, wordData)) {
                        jottoData.jottoArray.push(wordData);
                        jottoData.flags = jottoData.flags | wordData.flags;
                        //var numWordsFound = jottoData.jottoArray.length;
                        wordsCheckedCount++;
                        if (jottoData.jottoArray.length == 5) {
                            addAnswer(jottoData);
                        } else {
                            getNextWord(jottoData,  rarestLetterSub -1 , numberMisses);
                        }
                            //if (jottoData.jottoArray.length == 5) {
                            //    return;
                            //} else {
                                //did not work out fix up jottoData before trying next word
                                jottoData.jottoArray.pop();
                                jottoData.flags = originalFlags;
                            //}
                        //}
                    }
                }
                numberMisses++;
                
            }
            rarestLetterSub--;
        }
    }

