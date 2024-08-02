;(function () {
  // Configuration
  // const config = window.embeddedChatbotConfig || {};
  // const chatbotId = config.chatbotId || document.currentScript.getAttribute('chatbotId');
  // const domain = config.domain || document.currentScript.getAttribute('domain');
  const userType = document.currentScript.getAttribute('userType') || 'student'
  const userID = document.currentScript.getAttribute('userID') || ''
  const clientId =
    document.currentScript.getAttribute('clientId') || 'corposerve'

  // if (!chatbotId || !domain) {
  //   console.error('Chatbot ID and domain are required for embedding.');
  //   return;
  // }

  // SVG icons
  const upArrowSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="campus-assistant-chatbot-xaeb-icon">
      <path d="M18 15l-6-6-6 6"/>
    </svg>`

  const downArrowSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="campus-assistant-chatbot-xaeb-icon">
      <path d="M6 9l6 6 6-6"/>
    </svg>`

  // GIF alternatives (commented out)
  // const upArrowGIF = '<img src="path/to/your/up-arrow.gif" alt="Up arrow" class="campus-assistant-chatbot-xaeb-icon">';
  // const downArrowGIF = '<img src="path/to/your/down-arrow.gif" alt="Down arrow" class="campus-assistant-chatbot-xaeb-icon">';

  // Create iframe
  const iframe = document.createElement('iframe')
  iframe.src = `https://vercel-ai-chatbot-with-supabase-xaeb.vercel.app/chatbot-iframe/${clientId}?userType=${userType}&userID=${userID}`
  iframe.id = 'campus-assistant-chatbot-xaeb-iframe'
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
  `

  // Add CSS
  const style = document.createElement('style')
  style.id = 'campus-assistant-chatbot-xaeb-style'
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
    .campus-assistant-chatbot-xaeb-icon-container {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .campus-assistant-chatbot-xaeb-icon {
      width: 80%;
      height: 80%;
      display: flex;
    }
    .campus-assistant-chatbot-xaeb-icon svg {
      width: 100%;
      height: 100%;
    }
    .campus-assistant-chatbot-xaeb-icon img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `
  document.head.appendChild(style)

  // Create toggle button
  const button = document.createElement('button')
  button.id = 'campus-assistant-chatbot-xaeb-toggle-button'
  button.innerHTML = `<div class="campus-assistant-chatbot-xaeb-icon-container"><div class="campus-assistant-chatbot-xaeb-icon">${upArrowSVG}</div></div>`
  button.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: black;
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
    padding: 0;
    overflow: hidden;
  `

  // Hover animations for button
  button.onmouseenter = () => {
    button.style.transform = 'scale(1.1)'
  }
  button.onmouseleave = () => {
    button.style.transform = 'scale(1)'
  }

  // Toggle function
  function toggleChatbot() {
    const isOpen = iframe.style.display === 'block'

    if (isOpen) {
      iframe.style.opacity = '0'
      iframe.style.transform = 'scale(0.5)'
      setTimeout(() => {
        iframe.style.display = 'none'
      }, 300)
      button.querySelector('.campus-assistant-chatbot-xaeb-icon').innerHTML =
        upArrowSVG
      // For GIF: button.querySelector('.campus-assistant-chatbot-xaeb-icon').innerHTML = upArrowGIF;
    } else {
      iframe.style.display = 'block'
      setTimeout(() => {
        iframe.style.opacity = '1'
        iframe.style.transform = 'scale(1)'
      }, 0)
      button.querySelector('.campus-assistant-chatbot-xaeb-icon').innerHTML =
        downArrowSVG
      // For GIF: button.querySelector('.campus-assistant-chatbot-xaeb-icon').innerHTML = downArrowGIF;
    }
  }

  // Add event listener to button
  button.addEventListener('click', toggleChatbot)

  // Append elements to body
  document.body.appendChild(iframe)
  document.body.appendChild(button)

  // Expose toggle function globally
  window.toggleChatbot = toggleChatbot
})()