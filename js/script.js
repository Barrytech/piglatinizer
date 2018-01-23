// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 

/*global $*/

$(document).ready(function() {



    function wordToPigLatin(word) {
        var consf = word.slice(0, 1);
        var sec= word.slice(0,2);
        var secrest= word.slice(2, word.length);
        var rest = word.slice(1, word.length);
        console.log(rest);
        console.log(consf);


        if ((consf === "i") || (consf === "e") || (consf === "a") || (consf === "u") || (consf === "o")) {

            console.log(word + "ay");
           return (word + "ay");
        }
        else if ((consf != "i") || (consf != "e") || (consf != "a") || (consf != "u") || (consf != "o")) {
           return (rest + consf + "ay");

        }

        else {
            alert("none");
        }

    }
    
    var vowells =[ "a", "i", "u","e", "o"];
    for (var i= 0; i< vowells.length; i++){
        return [i];
    
    }

 if ((consf != vowells[i]  & sec != vowells[i]) || (consf != vowells[i] & sec != vowells[i]) || (consf != vowells[i] & sec != vowells[i]) || (consf != vowells[i] & sec != vowells[i]) || (consf != vowells[i] & sec != vowells[i])) {

          
           return ( secrest + "ay");
        }
        else {
            alert("none");
        }

    });

    // Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 
    // Create the sentenceToPigLatin function that takes a sentence as a parameter
    //Loops through all the words in the sentence and transforms each word
    //It should return a transfromed sentance
    function sentenceToPlaglatin(word) {
        var sentences = word.split(" ");

        for (var i = 0; i < sentences.length; i++) {
            $("#message").append(wordToPigLatin(sentences[i]) + " ");
        }
    }

    $("#hit").click(function() {
        var word = $("#typed").val();
        sentenceToPlaglatin(word);
    });
        
});    


