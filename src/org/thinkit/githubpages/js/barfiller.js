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

    let skillSet = '';
    let count = 0;

    Object.keys(SKILL_SET).forEach(function(skill) {
        skillSet +=
            `<div class="skill-bar-item">
                <p>${skill}</p>
                <div id="bar${++count}" class="barfiller">
                    <span class="tip"></span>
                    <span class="fill" data-percentage="${SKILL_SET[skill]}"></span>
                </div>
            </div>`
    });

    skillBarsObject.innerHTML = skillSet;
}

createSkillBars();