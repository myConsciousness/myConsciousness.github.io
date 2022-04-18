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

const PORTFOLIO_SET = {
  ThinkIT: [
    "web",
    "HTML5 / CSS3 / JavaScript ES6 / Sass",
    "https://user-images.githubusercontent.com/13072231/92291515-05186e80-ef54-11ea-80f6-18ed1f5ff2b9.png",
  ],
  "SQL Formatter": [
    "package",
    "Gradle / Java 14",
    "https://user-images.githubusercontent.com/13072231/92247281-f608d080-ef01-11ea-8880-7eda6b904968.png",
  ],
  "JSON Formatter": [
    "package",
    "Gradle / Java 14",
    "https://user-images.githubusercontent.com/13072231/92247230-e12c3d00-ef01-11ea-8861-3f648f20e3a5.png",
  ],
  "Catalog API": [
    "package",
    "Gradle / Java 14",
    "https://user-images.githubusercontent.com/13072231/92294280-bd9ade00-ef65-11ea-87c6-fc8e7b2f41eb.png",
  ],
  "Content Framework": [
    "package",
    "Gradle / Java 14",
    "https://user-images.githubusercontent.com/13072231/92306692-084f4100-efcc-11ea-9a54-e6894a4d26f3.png",
  ],
  Duovoc: [
    "android",
    "Gradle / Android / Java 8 / SQLite 3",
    "https://user-images.githubusercontent.com/13072231/92307444-9679f600-efd1-11ea-9506-708298b87c4b.png",
  ],
};

const createPortfolioList = () => {
  const portfolioListObject = document.getElementById("gallery");
  let portfolioList = "";

  Object.keys(PORTFOLIO_SET).forEach(function (title) {
    portfolioList += `<div class="mix ${PORTFOLIO_SET[title][0]}" data-my-order="1">
                        <div>
                        <div class="card" style="background: url(${PORTFOLIO_SET[title][2]}) top center/cover;"></div>
                        <div class="text">
                            <div class="bold">${title}</div>
                            <span class="highlight">${PORTFOLIO_SET[title][1]}</span>
                        </div>
                        <div class="button">See Repository</div>
                        </div>
                    </div>`;
  });

  portfolioListObject.innerHTML = portfolioList;
};

createPortfolioList();
