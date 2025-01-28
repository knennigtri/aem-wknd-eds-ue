// style example
// https://github.com/adobe-experience-league/exlm/blob/0cb2cb5c622eb030c8f362a1646c19dc881803bd/blocks/teaser/teaser.js

export default function decorate(block) {


  block.classList.add('new-class-name');

  // Find the div with data-aue-prop="style"
  const styleDiv = block.querySelector('div p[data-aue-prop="style"]').parentElement;

  // Remove the div if it exists
  if (styleDiv) {
    styleDiv.remove();
  }
}
