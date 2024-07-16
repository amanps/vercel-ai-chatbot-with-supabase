(function() {
  // Configuration
  // const config = window.embeddedChatbotConfig || {};
  // const chatbotId = config.chatbotId || document.currentScript.getAttribute('chatbotId');
  // const domain = config.domain || document.currentScript.getAttribute('domain');

  // if (!chatbotId || !domain) {
  //   console.error('Chatbot ID and domain are required for embedding.');
  //   return;
  // }

  // SVG icons with explicit width and height attributes
  // const upArrowSVG = `
  // <div height="1" width="1">
  // <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="campus-assistant-chatbot-xaeb-icon">
  //   <path d="M18 15l-6-6-6 6"/>
  // </svg>
  // </div>`;

  const upArrowSVG = `
  <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="1080" height="1080" viewBox="0 0 1080 1080" xml:space="preserve">
  <desc>Created with Fabric.js 5.2.4</desc>
  <defs>
  </defs>
  <g transform="matrix(1 0 0 1 540 540)" id="abd92018-e92a-4506-8aee-7356a2271a77"  >
  <rect style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; visibility: hidden;" vector-effect="non-scaling-stroke"  x="-540" y="-540" rx="0" ry="0" width="1080" height="1080" />
  </g>
  <g transform="matrix(1 0 0 1 540 540)" id="45ca9d53-16e6-4a2b-8182-242f13372bb8"  >
  </g>
  <g transform="matrix(0.92 0 0 0.92 540 540)" id="a00b1822-b49a-4ab2-848c-f69b1101ed1f"  >
  </g>
  </svg>
  `;

  // const downArrowSVG = `
  //   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="campus-assistant-chatbot-xaeb-icon">
  //     <path d="M6 9l6 6 6-6"/>
  //   </svg>`;

  const downArrowSVG = `
  <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="1080" height="1080" viewBox="0 0 1080 1080" xml:space="preserve">
  <desc>Created with Fabric.js 5.2.4</desc>
  <defs>
  </defs>
  <rect x="0" y="0" width="100%" height="100%" fill="transparent"></rect>
  <g transform="matrix(1 0 0 1 540 540)" id="abd92018-e92a-4506-8aee-7356a2271a77"  >
  <rect style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; visibility: hidden;" vector-effect="non-scaling-stroke"  x="-540" y="-540" rx="0" ry="0" width="1080" height="1080" />
  </g>
  <g transform="matrix(0 0 0 0 0 0)" id="45ca9d53-16e6-4a2b-8182-242f13372bb8"  >
  </g>
  <g transform="matrix(0.88 0 0 0.88 540 540)" id="01c23a05-2366-4a8b-8e3b-8c1c9061a01f"  >
  </g>
  </svg>
  `;

  // Create iframe
  const iframe = document.createElement('iframe');
  // iframe.src = `https://www.my-chatbot-url.com/chat/${chatbotId}?domain=${encodeURIComponent(domain)}`;
  iframe.src = "https://vercel-ai-chatbot-with-supabase-xaeb.vercel.app";
  iframe.id = 'campus-assistant-chatbot-xaeb-iframe';
  iframe.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 20px;
    width: 450px;
    height: 700px;
    max-width: 90vw;
    max-height: calc(100dvh - 120px);
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    transform: scale(0.5);
    transform-origin: bottom right;
    opacity: 0;
    z-index: 9999;
    display: none;
  `;

  // Add CSS media query for mobile devices
  const style = document.createElement('style');
  style.id = 'campus-assistant-chatbot-xaeb-style';
  style.innerHTML = `
    @media screen and (max-width: 767px) {
      #campus-assistant-chatbot-xaeb-iframe {
        width: 90vw;
        height: calc(100dvh - 120px);
        bottom: 50px;
        right: 10px;
      }

      #campus-assistant-chatbot-xaeb-toggle-button {
        bottom: 10px;
        right: 10px;
      }
    }
    .campus-assistant-chatbot-xaeb-icon {
      width: 24px;
      height: 24px;
    }
  `;
  document.head.appendChild(style);

  // Create toggle button
  const button = document.createElement('button');
  button.id = 'campus-assistant-chatbot-xaeb-toggle-button';
  button.innerHTML = upArrowSVG;
  button.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    z-index: 10000;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  // Hover animations for button
  button.onmouseenter = () => {
    button.style.transform = 'scale(1.1)';
  };
  button.onmouseleave = () => {
    button.style.transform = 'scale(1)';
  };

  // Toggle function
  function toggleChatbot() {
    const isOpen = iframe.style.display === 'block';

    if (isOpen) {
      iframe.style.opacity = '0';
      iframe.style.transform = 'scale(0.5)';
      setTimeout(() => {
        iframe.style.display = 'none';
      }, 300);
      button.innerHTML = upArrowSVG;
    } else {
      iframe.style.display = 'block';
      setTimeout(() => {
        iframe.style.opacity = '1';
        iframe.style.transform = 'scale(1)';
      }, 0);
      button.innerHTML = downArrowSVG;
    }
  }

  // Add event listener to button
  button.addEventListener('click', toggleChatbot);

  // Append elements to body
  document.body.appendChild(iframe);
  document.body.appendChild(button);

  // Expose toggle function globally
  window.toggleChatbot = toggleChatbot;
})();