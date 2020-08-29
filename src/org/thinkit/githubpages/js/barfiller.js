'use strict'

const SKILL_SET = {
    'Java 7 ~ 14': 95,
    'HTML5': 80,
    'CSS3': 70,
    'JavaScript ES6': 90,
    'Python 3.x': 75,
    'Oracle SQL': 80,
    'Struts': 95,
    'Spring Boot': 85,
    'Bootstrap': 85,
    'Spring Boot': 70
}

const createSkillBars = () => {

    const skillBarsObject = document.getElementById('skill-bars');
    let count = 0;

    Object.keys(SKILL_SET).forEach(function() {
        skillBarsObject.innerHTML =
            `<div class="skill-bar-item">
                <p>${key}</p>
                <div id="bar${++count}" class="barfiller">
                    <span class="tip"></span>
                    <span class="fill" data-percentage="${value}"></span>
                </div>
            </div>`
    });
}

createSkillBars();