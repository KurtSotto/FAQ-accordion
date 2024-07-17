const questionsAnswers = [
    {
        question: 'What is Frontend Mentor, and how will it help me?',
        answer: `Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.`
    },
    {
        question: 'Is Frontend Mentor free?',
        answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!`
    },
    {
        question: `Can I use Frontend Mentor projects in my portfolio?`,
        answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!`
    },
    {
        question: `How can I get help if I'm stuck on a challenge?`,
        answer: `The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.`
    }
]

let FAQ = ''

questionsAnswers.forEach((questionsAnswers, index) => {
    FAQ += `
        <div class="js-div">
            <div class="question">
            <p>${questionsAnswers.question}</p>
                <button class="js-button" id="button-${index}">
                    <img src="./assets/images/icon-plus.svg" alt="">
                </button>
            </div>

            <div class="answer" id="answer-${index}" style="display: none">
                <p>${questionsAnswers.answer}</p>
            </div>
        </div>
    `
})

document.querySelector('.js-FAQ').innerHTML = FAQ


const divElements = document.querySelectorAll('.js-div')

divElements.forEach((divs, index) => {
    divs.addEventListener('click', () => {
        const answer = document.querySelector(`#answer-${index}`)
        const button = document.querySelector(`#button-${index}`)

        if(answer.style.display === 'none'){
            answer.style.display = 'block'
            button.innerHTML = '<img src="./assets/images/icon-minus.svg" alt="">'   
        }
        else{
            answer.style.display = 'none'
            button.innerHTML = '<img src="./assets/images/icon-plus.svg" alt="">'
        }
    })
})

