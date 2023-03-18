var questions = [
            {
                question: "Питання 1:",
                answers: {
                    1: 'Неправильна відповідь',
                    2: 'Правильна відповідь',
                    3: 'Неправильна відповідь',
                    4: 'Неправильна відповідь'
                },
                rightAnswers: 2,
            },
            
            {
                question: "Питання 2:",
                answers: {
                    1: 'Неправильна відповідь',
                    2: 'Неправильна відповідь',
                    3: 'Правильна відповідь',
                    4: 'Неправильна відповідь'
                },
                rightAnswers: 3,
            },


            {
                question: "Питання 3:",
                answers: {
                    1: 'Неправильна відповідь',
                    2: 'Неправильна відповідь',
                    3: 'Неправильна відповідь',
                    4: 'Правильна відповідь'
                },
                rightAnswers: 4,
            },


            {
                question: "Питання 4:",
                answers: {
                    1: 'Неправильна відповідь',
                    2: 'Неправильна відповідь',
                    3: 'Правильна відповідь',
                    4: 'Неправильна відповідь'
                },
                rightAnswers: 3,
            },

            

            {
                question: "Питання 5:",
                answers: {
                    1: 'Правильна відповідь',
                    2: 'Неправильна відповідь',
                    3: 'Неправильна відповідь',
                    4: 'Неправильна відповідь'
                },
                rightAnswers: 1,
            },

        ]

var testContainer = document.getElementById("test");
var resultButton = document.getElementById("resultButton");
var resultContainer = document.getElementById("results");

genarateTest(questions,testContainer,resultButton,resultContainer);


function genarateTest(questions,testContainer,resultButton,resultContainer){

    


    function showQuestions(questions, testContainer){
        var out = [];
        var answers;
    
        for(var i=0; i<questions.length; i++){
            answers = [];

            for(var ans_text in questions[i].answers){
                answers.push('<label><br><input type="radio" name="question'+i+'" value="' +ans_text+'">'+ans_text+') '+questions[i].answers[ans_text]+'</label>');
            }
            
            out.push('<div class = "question">'+questions[i].question +'</div>'+'<div class="answers">'+answers.join('')+'</div>');
        }
        testContainer.innerHTML = out.join('');
    }



    function showResults(questions, testContainer, resultContainer){
        var answersContainers = testContainer.querySelectorAll('.answers');

        var userAnswer = '';
        var rightAnswersNum = 0;

        for(var i = 0; i<questions.length; i++){
            userAnswer  = (answersContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            if(userAnswer == questions[i].rightAnswers){
                answersContainers[i].style.color = "green";
                rightAnswersNum++;
            }else{
                answersContainers[i].style.color = "red";
            }
        }

        var resultStr;

        if(rightAnswersNum <3){
            resultStr = "Незадовільно";
        }else if(rightAnswersNum == 3){
            resultStr = "Треба повториити";
        }else if(rightAnswersNum == 4){
            resultStr = "Добре";
        }else if(rightAnswersNum == 5){
            resultStr = "Відмінно";
        }


        resultContainer.innerHTML = resultStr;
    }

  

   
    showQuestions(questions,testContainer);
    
    resultButton.onclick = function(){
        showResults(questions,testContainer,resultContainer);
    }

}


