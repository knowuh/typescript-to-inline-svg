const width = 100;
const height = 100;
let counter = 0;

const main = () => {
  const textElm = document.createElementNS('http://www.w3.org/2000/svg', "text");
  textElm.setAttribute('font-size', '14pt');
  textElm.setAttribute('font-family', 'monospace');
  textElm.setAttribute('fill', 'hsla(10,40%,80%,.8)');
  textElm.setAttribute('text-align', 'center');
  textElm.setAttribute('x', "2");
  textElm.setAttribute('y', `${height/2}`);
  document.querySelector("#top").appendChild(textElm);
  const update = () => {
    counter++;
    textElm.textContent=`count: ${counter}`;
  };
  window.setInterval(update, 1000);
}

window.addEventListener('load', () => main());
