let question = document.querySelector(".question");
let box = document.querySelector(".box")
let questionCount = 1;
let answers = document.querySelectorAll(".answer");
let next = document.querySelector(".next button");
let questions = [
    {
        qs: "What is the capital of Libya?",
        Tripoli: true,
        Omman: false,
        Misurata: false,
        Bangazi: false,
      },
      {
        qs: "Who painted the Mona Lisa?",
        "Leonardo da Vinci": true,
        "Pablo Picasso": false,
        "Vincent van Gogh": false,
        Michelangelo: false,
      },
      {
        qs: "What is the largest planet in our solar system?",
        Jupiter: true,
        Saturn: false,
        Mars: false,
        Earth: false,
      },
      {
        qs: "Which country is known for its tulips?",
        Netherlands: true,
        France: false,
        Italy: false,
        Germany: false,
      },
      {
        qs: "What is the chemical symbol for gold?",
        Au: true,
        Ag: false,
        Fe: false,
        Cu: false,
      },
      {
        qs: "Who wrote the play 'Romeo and Juliet'?",
        "William Shakespeare": true,
        "Oscar Wilde": false,
        "Jane Austen": false,
        "Charles Dickens": false,
      },
      {
        qs: "What is the tallest mountain in the world?",
        "Mount Everest": true,
        "Mount Kilimanjaro": false,
        "Mount Fuji": false,
        "Mount McKinley": false,
      },
      {
        qs: "Which animal is known for its black and white stripes?",
        Zebra: true,
        Giraffe: false,
        Cheetah: false,
        Lion: false,
      },
      {
        qs: "What is the largest ocean on Earth?",
        "Pacific Ocean": true,
        "Atlantic Ocean": false,
        "Indian Ocean": false,
        "Arctic Ocean": false,
      },
      {
        qs: "Who is the current President of the United States?",
        "Joe Biden": true,
        "Donald Trump": false,
        "Barack Obama": false,
        "George W. Bush": false,
      },
  
];
let count = 0; //to count true answer
let x = Math.floor(Math.random() * questions.length);
let [s, a, b, c, d] = Object.keys(questions[x]);
let all = [s, a, b, c, d]; //to acesses to four question and the index start 1 because the first index is qeustion
let questionsUseded = [x]; //to don't repeat question
question.innerHTML = questions[x][s];
i = 1;
answers.forEach((element) => {
  element.innerHTML = all[i];
  i++;
});

answers.forEach((element) => {
  element.onclick = () => {
    if (questions[x][element.innerHTML]) {
      element.style.backgroundColor = "#23e123";
      count++;
    } else {
      element.style.backgroundColor = "red";

      answers.forEach((tureelement) => {
        if (questions[x][tureelement.innerHTML])
          tureelement.style.backgroundColor = "#23e123";
      });
    }

    next.style.display = "block";
    console.log(next);
  };
});


next.onclick = () => {
    answers.forEach(element=> {
        element.style.backgroundColor="white"
    });
        if (questionCount<=4){
        questionCount++
        x = Math.floor(Math.random() * questions.length);
        nx =true
      
      while(nx){
      
          if (!questionsUseded.includes(x))
          questionsUseded.push(x)
          nx =false
      }
        [s, a, b, c, d] = Object.keys(questions[x]);
        all = [s, a, b, c, d]; //to acesses to four question and the index start 1 because the first index is qeustion
        questionsUseded = [x]; //to don't repeat question
        question.innerHTML = questions[x][s];
        i = 1;
        answers.forEach((element) => {
          element.innerHTML = all[i];
          i++;
        });
      
        answers.forEach((element) => {
          element.onclick = () => {
            if (questions[x][element.innerHTML]) {
              element.style.backgroundColor = "#23e123";
              count++;
            } else {
              element.style.backgroundColor = "red";
      
              answers.forEach((tureelement) => {
                if (questions[x][tureelement.innerHTML])
                  tureelement.style.backgroundColor = "#23e123";
              });
            }
      
            next.style.display = "block";
          };
        });
      };
     if (questionCount>4) {
    box.innerHTML= `your answer ${count} from 4 `
    setInterval(() => {
        location.reload()
    }, 3000);
     }  
}

