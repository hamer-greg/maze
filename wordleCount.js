//
//  wordleCount.js
// Given a list of five letter wordle candidate words, rank them in the order that will expect to remove the most from the list
//  
//
//  Created by Greg Hamer on 1/21/23.
//
var counts = new Array();
var wordArray = new Array();
function getBestCandidate(textarea) {
    var statSub = 0;
    initializeCounts(counts);
    var baseCharCode = "a".charCodeAt(0);
    var badWords = "";
    var input=textarea.value.toLowerCase();
    wordArray= input.split(/\s+/);
    var wordScoreArray = new Array();
    
    for (var sub=0; sub < wordArray.length; sub++ ){
        if (wordArray[sub].length > 0) {
            if (wordArray[sub].length != 5) {
                badWords = badWords + " " + wordArray[sub];
            } else {
                var wordScore = new Array(2);
                wordScore[WORDTEXT_SUB()]= wordArray[sub];
                wordScore[WORDSCORE_SUB()] = 0;
                var chars = wordArray[sub].split("");
                wordScore[WORDCHARS_SUB()] = chars;
                wordScoreArray.push(wordScore);
                for (var index = 0; index < 5; index++) {
                    statSub = chars[index].charCodeAt(0) - baseCharCode;
                    counts[statSub][index]++;
                }
            }
        }
    }
    if (badWords.length > 0) {
        document.getElementById('info').innerHTML = "Some words are not five letters long: " + badWords;
        return false;
    }
    var output = "Letter Counts<br>";
    var charCount = 0;
    for (var i = 0;i < counts.length; i++) {
        charCount = counts[i][0] + counts[i][1] + counts[i][2] + counts[i][3] + counts[i][4];
        counts[i][TOTAL_SUB()] = charCount;
        counts[i][CHARCODE_SUB()] = baseCharCode + i;
    }
    //Tally the wordscore; number of words with same letter + number of other words with letters in same position
    var score = 0;
    for (var j = 0; j < wordScoreArray.length; j++){
        var chars = wordScoreArray[j][WORDTEXT_SUB()].split("");
        score = 0;
        var letters = new Array();
        var masks = new Array();
        for (var pos=0; pos < 5; pos++) {
            statSub = chars[pos].charCodeAt(0) - baseCharCode;
            var characterMask = 1 << statSub;
            masks[pos] =  characterMask;
            if (letters.indexOf(statSub) < 0) {
                score += counts[statSub][TOTAL_SUB()];
                letters.push(statSub);
            }
            score += counts[statSub][pos];
        }
        wordScoreArray[j][WORDSCORE_SUB()] = score;
    }
    //sort the counts array, highest total at the top
    counts.sort(function(a,b) {
        return b[TOTAL_SUB()] - a[TOTAL_SUB()]});
    for (var j = 0; j < wordScoreArray.length; j++){
        var result = computeAverageRemaining(wordScoreArray[j], wordScoreArray);
        wordScoreArray[j][WORDCOUNT_SUB()] = result[0];
        wordScoreArray[j][WORDINFO_SUB()] = result[1];
    }
    
    //output the letters array
    for (i = 0;i < counts.length; i++) {
        output = output + String.fromCharCode(counts[i][CHARCODE_SUB()]) + pad(counts[i][TOTAL_SUB()]) + pad(counts[i][0]) + pad(counts[i][1]) + pad(counts[i][2]) + pad(counts[i][3]) + pad(counts[i][4]) + "<br>";
    }
    //sort the words array, lowest score at top
    wordScoreArray.sort(function(a,b) {
        return a[WORDCOUNT_SUB()] -b[WORDCOUNT_SUB()];
    });
    //output the words array
    var candidateWordsTitle1 ="Candidate Words<br>&nbsp&nbsp&nbsp&nbspScore&nbsp&nbsp&nbsp&nbspAvg&nbsp";
    var candidateWordsTitle2 ="Max Bullseyes<br>";
    var lengthOfBestAvg = wordScoreArray[0][WORDCOUNT_SUB()].toFixed(2).length;
    for (i=0; i< lengthOfBestAvg - 3; i++){
        candidateWordsTitle1 = candidateWordsTitle1 + "&nbsp";
    }
    var candidateWords = candidateWordsTitle1 + candidateWordsTitle2;
    for (i=0; i < wordScoreArray.length; i++) {
        var scoreText = ("\u00A0" + wordScoreArray[i][WORDSCORE_SUB()]).padStart(4,"\u00A0");
        candidateWords = candidateWords + wordScoreArray[i][WORDTEXT_SUB()] + scoreText + " " + padd(wordScoreArray[i][WORDCOUNT_SUB()].toFixed(2),3)+ " " +wordScoreArray[i][WORDINFO_SUB()] + "<br>";
    }

    document.getElementById('best').innerHTML =output;
    document.getElementById('info').innerHTML= candidateWords;
    return false;
}
function computeAverageRemaining(guessedWord, wordScoreArray) {
    var knownCounts = new Map();
    var debugInfo = "";
    if (guessedWord[WORDTEXT_SUB()] == "raise") {
        debugInfo = "<br><br>raise debug:"
    }
    //Loop through all words and assume it is the winning word
    for (var j=0; j < wordScoreArray.length; j++) {
        //Construct the key given the guess and the assumed winning word; every word with the same key will appear in the same list, so only need
        //to count the number of times the same key is reproduced to know how many words survive for that key
        //Letters that are in the right place show up at the beginning of the key; letters that otherwise are used but in the wrong place appear
        //as their position number (0-4) in the guessed word; letters that cannot appear are left out of the key. Keys are unique per guessed
        //word so unusable letters can be ignored. (Every letter from the guess that was not yet in the key is an unusable letter)
        var exactMatches = new Array(5);
        var winningWordMask = "";
        var guessedWordMask = "";
        var knownCountKey = "";
        for (var i=0; i < 5; i++){
            if (guessedWord[WORDCHARS_SUB()][i] == wordScoreArray[j][WORDCHARS_SUB()][i]) {
                exactMatches[i] = guessedWord[WORDCHARS_SUB()][i];
                knownCountKey = knownCountKey + exactMatches[i];
            } else {
                exactMatches[i] = 0;
                winningWordMask = winningWordMask + wordScoreArray[j][WORDCHARS_SUB()][i];
                guessedWordMask = guessedWordMask + guessedWord[WORDCHARS_SUB()][i];
            }
        }
        
        var index = 0;
        for (var i=0; i < 5; i++) {
            var testChar = guessedWord[WORDCHARS_SUB()][i];
            if (exactMatches[i] == 0) {
                index = winningWordMask.indexOf(testChar);
                if (index >= 0)  {
                    //Note the position of the letters in the guess that are used but in the wrong place
                    knownCountKey = knownCountKey  + i;
                    //Remove from the winning word mask to cover multiple occurances of the same letter
                    winningWordMask = winningWordMask.slice(0,index) + winningWordMask.slice(index+1,winningWordMask.length);
               }
            }
        }
        //Lookup the key and bump the count
        var compatibleCount = knownCounts.get(knownCountKey);
        if (compatibleCount === undefined) {
            compatibleCount = 0;
        }
        compatibleCount++;
        //Update the count of words returned for the given key
        knownCounts.set(knownCountKey,compatibleCount);
    }
    if (debugInfo.length > 0) {
        debugInfo = debugInfo + "<br>knownCounts map size is " + knownCounts.size;
    }
    var maxReturned = 0;
    var sum = 0;
    var uniqueCount = 0;
    for (const [key, value] of knownCounts) {
        //The number of words in a list is also the number of occurances of words that have that length
        sum = (value * value) + sum;
        if (debugInfo.length > 0) {
            debugInfo = debugInfo + "<br>" + key + " " + value ;
        }
        if (value > maxReturned) {
            maxReturned = value;
        }
        if (value == 1) {
            uniqueCount++;
        }
    }
    //return a string with the average length of remaining words for the guess plus the max remaining list size and the number of exact hits
    return [new Number(sum /wordScoreArray.length),  " " + pad(maxReturned) +  " " + pad(uniqueCount) + debugInfo];
}
function pad(number) {
    return padd(number, 0);
}
function padd(number, extraAmount) {

    var paddingAmount =  extraAmount + ("" + counts[0][TOTAL_SUB()]).length - ("" + number).length;
    var padding = "\u00A0";
    for (var k=0; k < paddingAmount; k++){
        padding += "\u00A0";
    }
    return padding + number;
}
function initializeCounts(counts) {
    for (var index = 0;index < 26; index++){
        counts[index] = new Array();
        counts[index][0] = 0;
        counts[index][1] = 0;
        counts[index][2] = 0;
        counts[index][3] = 0;
        counts[index][4] = 0;
        counts[index][TOTAL_SUB()] = 0;
        counts[index][CHARCODE_SUB()] = 0;
    }
}
function TOTAL_SUB() {
    return 5;
}
function CHARCODE_SUB() {
    return 6;
}
function WORDTEXT_SUB() {
    return 0;
}
function WORDSCORE_SUB() {
    return 1;
}
function WORDCHARS_SUB() {
    return 2;
}
function WORDCOUNT_SUB() {
    return 3;
}
function WORDINFO_SUB() {
    return 4;
}
