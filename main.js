var ul=document.getElementById('ul');
var scoreCard=document.getElementById('scoreCard');
var btn=document.getElementById('button');
var quizBox=document.getElementById('questionBox');
var op1=document.getElementById('op1');
var op2=document.getElementById('op2');
var op3=document.getElementById('op3');  
var op4=document.getElementById('op4');

        var app={
            questions:[
                {q:'HTML stands for', options:['hyper text markup language', 'high text markup language', 'hyper tabular markup language', 'none of these'],answer:1},
                {q:'Do all HTML tags come in a pair?', options:['maybe', 'yes', 'no', 'none'],answer:3},
                {q:'How do you insert a comment in HTML?', options:['!-- start  ---', '// nd ends with //', '||-- nd ends with --||', '* nd ends with *'],answer:1},
                {q:' What is an image map?', options:['lets you draw', 'it helps hover images', 'lets you change comment', 'lets you link to many different web pages using a single image.'],answer:4},
                {q:'Which of the following centers tabs/pills?', options:['nav.navbar-nav', 'nav-justified', 'nav nav-pills', 'nav-stacked'],answer:2},
                {q:' Which of the following is for title of the modal?', options:['modal-title', 'modal-sm', 'modal-open', 'modal-lg'],answer:1},
                
            ],
            index:0,
            load:function(){
                if(this.index<=this.questions.length-1){
                quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;
                op1.innerHTML=this.questions[this.index].options[0];
                op2.innerHTML=this.questions[this.index].options[1];
                op3.innerHTML=this.questions[this.index].options[2];
                op4.innerHTML=this.questions[this.index].options[3];
                scoreCard.innerHTML=this.questions.length+"/"+this.score;
                }
                else{
                    quizBox.innerHTML="Quiz Over!!!"
                    op1.style.display="none";
                    op2.style.display="none";
                    op3.style.display="none";
                    op4.style.display="none";
                    btn.style.display="none";
                }
            },
            next:function(){
                this.index++;
                this.load();
            },
            check:function(ele){

                var id=ele.id.split('');
                console.log(id[id.length-1]);
                if(id[id.length-1]==this.questions[this.index].answer){
                    this.score++;
                    ele.className="correct";
                    ele.innerHTML="Correct";
                    this.scoreCard();
                    
                }
                else{
                    ele.className="wrong";
                    ele.innerHTML="Wrong";
                }
            },
            notClickAble:function(){
                for(let i=0;i<ul.children.length;i++){
                    ul.children[i].style.pointerEvents="none";
                    console.log( ul.children[i]);
                    
                    
                }
            },
            clickAble:function(){
                for(let i=0;i<ul.children.length;i++){
                    ul.children[i].style.pointerEvents="auto";
                    ul.children[i].className=''
                    
                    
                }
            },
            score:0,
            scoreCard:function(){
                scoreCard.innerHTML=this.questions.length+"/"+this.score;
            }
        }

        window.onload=app.load();

        function button(ele){
            app.check(ele);
            app.notClickAble();
        }

        function next(){
            app.next();
            app.clickAble();
        }