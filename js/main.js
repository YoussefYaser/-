// handle redundant nav & footer code in all page.html
document.addEventListener("DOMContentLoaded", function () {
    const redundant = `
        <nav>
            <div class="custom-container">
                <div class="links">
                    <div class="logo">
                        <a href="https://rsc.mped.gov.eg/">
                            <img src="../src/assets/logo.png" alt="">
                        </a>
                    </div>
                    <div class="box custom-overflow-hidden">
                        <div>
                            <ul class="custom-list-unstyled custom-w-fit custom-text-center">
                                <li>
                                    <a href="/src/index.html" class="custom-no-decoration">الصفحة الرئيسية</a>
                                </li>
                                <li>
                                    <a href="../src/FAQs.html" class="custom-no-decoration">الأسئلة الشائعة</a>
                                    <div class="dropdown">
                                        <p>- ما هي المستندات المطلوبة لتقديم طلب رفع مساحي؟</p>
                                        <p>- كيف أحدد مساحة العقار التي يتم كتابتها أثناء تقديم الطلب؟</p>
                                        <p>- هل يمكن التقدم بطلب رفع مساحي لأكثر من عقار في نفس الطلب؟</p>
                                        <p>- هل يلزم تقديم الطلبات بصفة شخصية؟</p>
                                        <p>- هل المراكز التكنولوجيا بالمحافظة المكان الوحيد لتقديم الطلبات؟</p>
                                        <p>- كيف يتم دفع رسوم الرفع المساحي؟</p>
                                        <p>- هل يمكن استرداد المبلغ المدفوع في حال إتمام عملية الدفع؟</p>
                                        <p>- هل يمكن اختيار المكتب الهندسي للرفع المساحي للعقار؟</p>
                                        <p>- هل يمكن تغيير موعد الرفع المساحي؟</p>
                                    </div>
                                </li>
                                <li>
                                    <a href="" class="custom-no-decoration">الشكاوى</a>
                                </li>
                                <li>
                                    <a href="../src/contactUs.html" class="custom-no-decoration">اتصل بنا</a>
                                </li>
                            </ul>
                            <div class="buttons w-fit">
                                <button>
                                    <a href="" class="custom-no-decoration">
                                        <span>
                                            <i class="fa-solid fa-clipboard"></i>
                                        </span>
                                        متابعة الطلبات
                                    </a>
                                </button>
                                <button>
                                    <a href="" class="custom-no-decoration">
                                        <span>
                                            <i class="fa-solid fa-user"></i>
                                        </span>
                                        مستخدم
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <button id="burger-toggler" class="navbar-toggler collapsed">
                    <div id="burger-bar">
                        <span class="bar-top "></span>
                        <span class="bar-middle "></span>
                        <span class="bar-bottom "></span>
                    </div>
                </button>
            </div>
        </nav>

        <footer>
            <div class="custom-container custom-text-center">
                <div>
                    <div class="logo">
                        <img src="assets/logo.png" alt="">
                    </div>
                    <div>
                        <h3>بوابة المركز التكنولوجى للتسجيل المساحى العقارى</h3>
                        <ul class="custom-list-unstyled">
                            <li class="w-fit">
                                -
                                <a href="../src/terms&conditions.html" class="custom-no-decoration" target="_blank">
                                    الشروط والاحكام
                                </a>
                            </li>
                            <li class="w-fit">
                                -
                                <a href="../src/FAQs.html" class="custom-no-decoration" target="_blank">
                                    الأسئلة الشائعة
                                </a>
                            </li>
                            <li class="w-fit">
                                -
                                <a href="../src/citizenServices.html" class="custom-no-decoration" target="_blank">
                                    المراكز التكنولوجية لخدمة المواطنين
                                </a>
                            </li>
                            <li class="w-fit">
                                -
                                <a href="../src/prices.html" class="custom-no-decoration" target="_blank">
                                    تكاليف الرفع المساحى و مصاريف الشحن
                                </a>
                            </li>
                            <li class="w-fit">
                                -
                                <a href="../src/newCities.html" class="custom-no-decoration" target="_blank">
                                    المدن الجديدة غير خاضعة للقانون
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="contact-us">
                        <div class="inner custom-text-center">
                            <span>
                                <i class="fa-solid fa-phone fa-shake"></i>
                            </span>
                            <span>رقم التليفون</span>
                            <p>0225476199</p>
                        </div>
                        <div class="inner custom-text-center">
                            <span>
                                <i class="fa-solid fa-envelope"></i>
                            </span>
                            <span>
                                البريد الإلكتروني
                            </span>
                            <p>
                                <a href="mailto:rsc@mped.gov.eg">rsc@mped.gov.eg</a>
                            </p>
                        </div>
                        <div class="inner custom-text-center">
                            <span>
                                <i class="fa-brands fa-whatsapp"></i>
                            </span>
                            <span>
                                رقم الواتس اب
                            </span>
                            <p>01273377445</p>
                        </div>
                    </div>
                    <p class="custom-text-center">جميع الحقوق محفوظة © ٢٠٢٢</p>
                </div>
            </div>
        </footer>

        <span class="arrow-up custom-xy-center custom-pointer">
            <i class="fa-solid fa-arrow-up"></i>
        </span>

    `;
    document.body.insertAdjacentHTML('beforeend', redundant);

    // handle nav bar
    const burgerBar = document.getElementById('burger-bar');
    const burgerToggler = document.getElementById('burger-toggler');
    const nav = document.querySelector('nav');
    const navBox = document.querySelector('nav .custom-container .box');
    const navLinks = document.querySelectorAll('nav .custom-container .links ul li a');

    burgerToggler.onclick = function () {
        if (!this.classList.contains('collapsed')) {
            burgerBar.children[0].style.setProperty('animation-name', 'bar-top-backward');
            burgerBar.children[2].style.setProperty('animation-name', 'bar-bottom-backward');
            navBox.style.setProperty('height', '0');
            this.classList.add('collapsed');
        }
        else {
            burgerBar.children[0].style.setProperty('animation-name', 'bar-top-forward');
            burgerBar.children[2].style.setProperty('animation-name', 'bar-bottom-forward');
            navBox.style.setProperty('height', `${navBox.scrollHeight}px`);
            this.classList.remove('collapsed');
        }
    }

    window.addEventListener('scroll', function () {
        if (this.scrollY) {
            nav.style.setProperty('background-color', '#fff');
            for (let i = 0; i < burgerBar.children.length; i++) {
                burgerBar.children[i].style.setProperty('border-color', '#000')
            }
            for (let i = 0; i < navLinks.length; i++) {
                navLinks[i].style.setProperty('color', '#000');
            }
        }
        else {
            nav.style.setProperty('background-color', 'transparent');
            for (let i = 0; i < burgerBar.children.length; i++) {
                burgerBar.children[i].style.setProperty('border-color', '#fff')
            }
            for (let i = 0; i < navLinks.length; i++) {
                navLinks[i].style.setProperty('color', '#fff');
            }
        }
    });

    window.addEventListener('resize', function () {
        if (!burgerToggler.classList.contains('collapsed') && this.innerWidth >= 640) {
            burgerToggler.click();
        }
    });
    

    // handle arrow up
    const arrow = document.querySelector('.arrow-up');
    arrow?.addEventListener('click', function () {
        window.scrollTo(0, 0);
    })
});

//-------------------------------------------------------------------------------------------------------------------------------------


// serviceCards handlle scroll scale

const serviceCards = document.querySelectorAll('.home main .services .services-list .service-card');

function handleScrollServiceCards() {
    for (let i = 0; i < serviceCards.length; i++) {
        if (window.scrollY > serviceCards[i].offsetTop - window.innerHeight) {
            serviceCards[i].style.setProperty('transform', 'scale(1)');
        }
    }
}

handleScrollServiceCards();

//-------------------------------------------------------------------------------------------------------------------------------------

// steps handel scroll show

const steps = document.querySelectorAll('.home main .steps .custom-row > div');

function handleScrollSteps() {
    for (let i = 0; i < steps.length; i++) {
        if (window.scrollY > steps[i].offsetTop - window.innerHeight + 30) {
            steps[i].style.cssText = `top : 0px; 
                                        opacity : 1`;
        }
    }
}

handleScrollSteps();

//---------------------------------------------------------------------------------------------------------------------------------------

window.addEventListener('scroll', function () {
    handleScrollServiceCards();
    handleScrollSteps();
});


// start FAQs accordions

const questions = document.querySelectorAll('.FAQs ul li .question');
const answers = document.querySelectorAll('.FAQs ul li .answer');

questions.forEach((elem, i) => {
    elem.addEventListener('click', function () {
        if (answers[i].classList.contains('collapsed')) {
            answers[i].style.setProperty('height', `${answers[i].scrollHeight}px`);
            answers[i].classList.remove('collapsed');
            questions[i].children[0].style.setProperty('transform', 'rotateX(180deg)');
        }
        else {
            answers[i].style.setProperty('height', `0px`);
            answers[i].classList.add('collapsed');
            questions[i].children[0].style.setProperty('transform', 'rotateX(0deg)');
        }
    })
})


window.addEventListener('resize', function () {
    if (this.innerWidth < this.screen.width) {
        answers.forEach((elem, i) => {
            elem.style.setProperty('overflow', 'auto');
        });
    }
    else {
        answers.forEach((elem, i) => {
            elem.style.setProperty('overflow', 'visible');
        });
    }
})

//---------------------------------------------------------------------------------------------------------------


//handle nav & tabs in conditions

const tabs = document.querySelectorAll('.conditions .system .tabs >  .controls li');
const tabsContent = document.querySelectorAll('.conditions .system .tabs .tabs-content> div');


tabs.forEach((elem, i) => {
    elem.addEventListener('click', function () {
        if (!elem.classList.contains('active')) {
            for (let i = 0; i < tabsContent.length; i++) {
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

window.addEventListener('scroll', function () {
    if (video && (this.scrollY > video.offsetTop - this.innerHeight + 80)) {
        video.style.setProperty('transform', 'scaleX(1)');
    }
})

//--------------------------------------------------------------------------------------------------------------

