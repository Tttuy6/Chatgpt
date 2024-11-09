// Step 1: Open a new tab with about:blank
const newTab = window.open('about:blank', '_blank');

// Step 2: Create an iframe element
const iframe = newTab.document.createElement('iframe');

// Step 3: Set the iframe's size and remove borders
iframe.style.width = '100%';
iframe.style.height = '100vh';
iframe.style.border = 'none';

// Step 4: Set the iframe's source to the desired URL (ChatGPT.com)
iframe.src = 'https://chat.openai.com'; // Replace with the actual URL you want to embed

// Step 5: Append the iframe to the new tab's document body
newTab.document.body.appendChild(iframe);
