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

'use strict';

/**
 * マインドセット
 */
const MIND_SET = {
  Clean: [
    'fas fa-file-code',
    "Regardless of the programming language, always try to write clean code. I'm convinced that correct indentation, processing order, and correct naming for object behavior are essential elements of developing better software.",
  ],
  Optimization: [
    'far fa-gem',
    'I always try to write optimized code. Once the software has been completed, I examine it dynamically to see if better algorithms and data structures can be applied to it from multiple angles.',
  ],
  Secure: [
    'fas fa-fingerprint',
    "I always try to write secure code based on the extensive security knowledge I've gained in the development field. I also conduct thorough testing to find critical vulnerabilities and bugs as soon as possible.",
  ],
  Intuitive: [
    'far fa-lightbulb',
    " I always try to design interfaces that are intuitive for other developers and users of the application to use. I thoroughly encapsulate complex concepts that the user doesn't need to be aware of, and provide an interface that is intuitive to use, even for first-time users.",
  ],
  Productive: [
    'fas fa-rocket',
    "I'm always working on software development with productivity in mind. I'm always thinking about how to get work done at a faster pace than I am now without compromising the quality of work. I also don't neglect to create tools to improve that work.",
  ],
  Documentation: [
    'fas fa-book-reader',
    'I never neglect detailed documentation for my code, such as Javadoc and JSDoc. In particular, I try to write documentation for the APIs I publish that other developers and users can use simply by reading the documentation.',
  ],
};

/**
 * マインドセットを基にマインドリストを生成しHTMLへ出力します。
 */
const createMindList = () => {
  const mindListObject = document.getElementById('mind-list');
  let mindList = '<div class="row">';

  Object.keys(MIND_SET).forEach(function (mind) {
    mindList += `<div class="col-md-4 col-xs-6">
                  <div class="mind">
                    <div class="${MIND_SET[mind][0]}"></div>
                    <h3 class="mind-title"><strong>${mind}</strong></h3>
                    <p class="mind-description">
                        ${MIND_SET[mind][1]}
                    </p>
                  </div>
                </div>`;
  });

  mindList += '</div>';

  mindListObject.innerHTML = mindList;
};

createMindList();
