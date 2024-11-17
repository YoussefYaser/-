// handle nav bar

const burgerBar = document.getElementById('burger-bar');
const burgerToggler = document.getElementById('burger-toggler');
const nav = document.querySelector('nav');
const navBox = document.querySelector('nav .container .box');
const navLinks = document.querySelectorAll('nav .container .links ul li a');

burgerToggler.onclick = function(){
    if(! this.classList.contains('collapsed')){
        burgerBar.children[0].style.setProperty('animation-name', 'bar-top-backward');
        burgerBar.children[2].style.setProperty('animation-name','bar-bottom-backward');
        navBox.style.setProperty('height', '0');
        this.classList.add('collapsed');
    }
    else{
        burgerBar.children[0].style.setProperty('animation-name', 'bar-top-forward');
        burgerBar.children[2].style.setProperty('animation-name','bar-bottom-forward');
        navBox.style.setProperty('height', `${navBox.scrollHeight}px`);
        this.classList.remove('collapsed');
    }
}

window.addEventListener('scroll', function(){
    if(this.scrollY){
        nav.style.setProperty('background-color', '#fff');
        for(let i=0; i<burgerBar.children.length; i++){
            burgerBar.children[i].style.setProperty('border-color', '#000')
        }
        for(let i=0; i<navLinks.length; i++){
            navLinks[i].style.setProperty('color', '#000');
        } 
    }
    else{
        nav.style.setProperty('background-color', 'transparent');
        for(let i=0; i<burgerBar.children.length; i++){
            burgerBar.children[i].style.setProperty('border-color', '#fff')
        }
        for(let i=0; i<navLinks.length; i++){
            navLinks[i].style.setProperty('color', '#fff');
        } 
    }
});

window.addEventListener('resize', function(){
    if(!burgerToggler.classList.contains('collapsed') && this.innerWidth >=640){
        burgerToggler.click();
    }
});


//--------------------------------------------------------------------------------------------------------

// serviceCards handlle scroll scale

const serviceCards = document.querySelectorAll('.home main .services .services-list .service-card');

function handleScrollServiceCards(){
    for(let i=0; i<serviceCards.length; i++){
        if(window.scrollY > serviceCards[i].offsetTop - window.innerHeight){            
            serviceCards[i].style.setProperty('transform', 'scale(1)');
        }
    }
}

handleScrollServiceCards();

//--------------------------------------------------------------------------------------------------------------

// steps handel scroll show

const steps = document.querySelectorAll('.home main .steps .row > div');

function handleScrollSteps(){
    for(let i=0; i<steps.length; i++){
        if(window.scrollY > steps[i].offsetTop - window.innerHeight + 30){            
            steps[i].style.cssText = `top : 0px; 
                                        opacity : 1`;
        }
    }
}

handleScrollSteps();

//---------------------------------------------------------------------------------------------------------------

window.addEventListener('scroll', function(){
    handleScrollServiceCards();
    handleScrollSteps();
});


// start FAQs accordions

const questions = document.querySelectorAll('.FAQs ul li .question');
const answers = document.querySelectorAll('.FAQs ul li .answer');

questions.forEach((elem, i)=>{
    elem.addEventListener('click', function(){
        if(answers[i].classList.contains('collapsed')){
            answers[i].style.setProperty('height', `${answers[i].scrollHeight}px`);
            answers[i].classList.remove('collapsed');
            questions[i].children[0].style.setProperty('transform', 'rotateX(180deg)');
        }
        else{
            answers[i].style.setProperty('height', `0px`);
            answers[i].classList.add('collapsed');
            questions[i].children[0].style.setProperty('transform', 'rotateX(0deg)');
        }
    })
})


window.addEventListener('resize', function(){
    if(this.innerWidth < this.screen.width){
        answers.forEach((elem, i)=>{
            elem.style.setProperty('overflow', 'auto');
        });
    }
    else{
        answers.forEach((elem, i)=>{
            elem.style.setProperty('overflow', 'visible');
        });
    }
})

//---------------------------------------------------------------------------------------------------------------


//handle nav & tabs in conditions

const tabs = document.querySelectorAll('.conditions .system .tabs >  .controls li');
const tabsContent = document.querySelectorAll('.conditions .system .tabs .tabs-content> div');


tabs.forEach((elem, i)=>{
    elem.addEventListener('click', function(){
        if(!elem.classList.contains('active')){
            for(let i=0; i<tabsContent.length; i++){
                tabsContent[i].style.cssText = `opacity: 0;
                                                pointer-events: none;`;
                tabs[i].classList.remove('active');
            }
            tabsContent[i].style.cssText = `opacity: 1;
            pointer-events: all;`;
            tabs[i].classList.add('active');
        }
    })
})

//---------------------------------------------------------------------------------------------------------------

// handle video animation

const video = document.querySelector('.home main .video video ');

window.addEventListener('scroll', function(){
    if(video  && (this.scrollY > video.offsetTop - this.innerHeight + 80)){
        video.style.setProperty('transform', 'scaleX(1)');
    }
})

//--------------------------------------------------------------------------------------------------------------

// handle arrow up

const arrow = document.querySelector('.arrow-up');

arrow?.addEventListener('click', function(){
    window.scrollTo(0, 0);
})


//--------------------------------------------------------------------------------------------------------------
