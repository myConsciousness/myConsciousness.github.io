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

"use strict";

/**
 * スキルセット
 */
const SKILL_SET = {
  java: ["Java 7 ~ 14", 95],
  html: ["HTML5", 80],
  css: ["CSS3", 70],
  sass: ["Sass", 65],
  javascript: ["JavaScript ES6", 90],
  python: ["Python 3.x", 75],
  sql: ["Oracle SQL", 80],
  struts: ["Struts", 90],
  springboot: ["Spring Boot", 85],
  bootstrap: ["Bootstrap", 70],
  android: ["Android", 75],
};

/**
 * スキルセットを基にスキルバーを生成しHTMLへ出力します。
 */
const createSkillBars = () => {
  const skillBarsObject = document.getElementById("skill-bars");

  Object.keys(SKILL_SET).forEach((skill) => {
    skillBarsObject.appendChild(getSkillBarItemObject(skill));
  });
};

/**
 * スキル名を基にスキルバー項目を生成し返却します。
 *
 * @param {String} skill スキル名
 * @returns スキルバー項目
 */
const getSkillBarItemObject = (skill) => {
  const skillBarItemObject = document.createElement("div");
  skillBarItemObject.setAttribute("class", "skill-bar-item");
  skillBarItemObject.appendChild(getSkillNameObject(skill));
  skillBarItemObject.appendChild(getBarFillerObject(skill));

  return skillBarItemObject;
};

/**
 * スキル名を基にスキル名オブジェクトを生成し返却します。
 *
 * @param {String} skill スキル名
 * @returns スキル名オブジェクト
 */
const getSkillNameObject = (skill) => {
  const skillNameObject = document.createElement("p");
  skillNameObject.textContent = SKILL_SET[skill][0];

  return skillNameObject;
};

/**
 * スキル名を基にスキルバーオブジェクトを生成し返却します。
 *
 * @param {String} skill スキル名
 * @returns スキルバーオブジェクト
 */
const getBarFillerObject = (skill) => {
  const barFillerObject = document.createElement("div");
  barFillerObject.setAttribute("id", `bar-${skill}`);
  barFillerObject.setAttribute("class", "barfiller");

  const tipObject = document.createElement("span");
  tipObject.setAttribute("class", "tip");

  const fillObject = document.createElement("span");
  fillObject.setAttribute("class", "fill");
  fillObject.setAttribute("data-percentage", SKILL_SET[skill][1]);

  barFillerObject.appendChild(tipObject);
  barFillerObject.appendChild(fillObject);

  return barFillerObject;
};

createSkillBars();

(function ($) {
  fillSkillBars();

  /**
   * HTMLで設定された "data-percentage" の値を基にスキルバーを出力します。
   */
  function fillSkillBars() {
    Object.keys(SKILL_SET).forEach((skill) => {
      $(`#bar-${skill}`).barfiller({
        barColor: "#04c2c9",
      });
    });
  }
})(jQuery);
