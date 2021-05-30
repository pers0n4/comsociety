import React from 'react';
const Chatbot = () => {
  React.useLayoutEffect(() => {
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://danbee.ai/js/plugins/frogue-embed/frogue-embed.min.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'frogue-embed');
  });

  return (
    <div
      class="position-right-bottom"
      data-chatbot="c6964afb-5ea3-465c-ac7e-a0a21bdb8eb8"
      data-init-key="value"
      data-user="jeff131@naver.com"
      id="frogue-container"
    ></div>
  );
};
export default Chatbot;
