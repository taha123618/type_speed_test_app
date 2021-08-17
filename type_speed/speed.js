

const setofWords = ["My name is Taha Ahmed and I am a Web Developer."];
const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime , endTime;

// def 
const playGame = () => {
    let randomNo = Math.floor(Math.random() * setofWords.length);
    msg.innerHTML = setofWords[randomNo];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

// def 
const endplay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/ 1000);
    // console.log(totalTime);


    let totalstring = typeWords.value;
    let wordCount = wordCounter(totalstring);

    // formula speed nikalne ki lye
    let speed = Math.round((wordCount / totalTime) * 60);

    let finalmsg = "You typed total at" +speed+ "word per minutes";
    // err cheching in words 
    finalmsg += comparedWords(msg.innerText,totalstring );
    msg.innerText = finalmsg;
}

const comparedWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    // arrary with foreach loop 
    words.forEach(function (item,index){
        if (item == words2[index]){
            cnt++;
        }
    }        
    );
    let errWords = ( words1.length - cnt);
    return (cnt + "correct out of" + words1.length + "words and the total no of error are" + errWords + ".");

}

// def 
const wordCounter = (str) =>{
    let response = str.split(" ").length;
    console.log(response);
    return response;
}


btn.addEventListener('click', () =>{
    if(this.innerText == 'Start'){
        typeWords.disabled = false;
        playGame();
    }else if(this.innerText == "Done"){
        typeWords.disabled = true;
        btn.innerText = "Start";
        endplay(); 
    }
});