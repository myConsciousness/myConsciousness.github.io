/*
 * Copyright 2020 Kato Shinya.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

'use strict'

/**
 * スキルセット
 */
const SKILL_SET = {
    'Java 7 ~ 14': 95,
    'HTML5': 80,
    'CSS3': 70,
    'JavaScript ES6': 90,
    'Python 3.x': 75,
    'Oracle SQL': 80,
    'Struts': 90,
    'Spring Boot': 85,
    'Bootstrap': 85,
    'Abdroid': 75
}

/**
 * スキルセットを基にスキルバーを生成しHTMLへ出力します。
 */
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

(function($) {

    fillSkillBars();

    /**
     * HTMLで設定された "data-percentage" の値を基にスキルバーを出力します。
     */
    function fillSkillBars() {
        for (let i = 1, count = Object.keys(SKILL_SET).length; i <= count; i++) {
            $('#bar' + String(i)).barfiller({
                barColor: "#04c2c9",
            });
        }
    }
})(jQuery);