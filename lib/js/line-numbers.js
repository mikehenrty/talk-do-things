/**
 * Place this file in your Reveal.js presentation in 'lib/js/'.
 *
 * Add this javascript library to a reaveal.js presentation by adding it as a
 * dependency in Reveal.initialize.
 *
 * Reveal.initialize({
 *   ....
 *   dependencies: [
 *     ...
 *     {src: 'lib/js/line-numbers.js'}
 *   ]
 * })
 *
 */

function addLineNumbers() {
  if (!document.body.classList.contains('line-numbered')) {
    var blocks = document.body.querySelectorAll('pre code.hljs');
    if (blocks.length === 0) {
      return false;
    }
    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i];
      block.innerHTML = '<span class="line-number"></span>' +
        block.innerHTML.split('\n').join('\n<span class="line-number"></span>');
    }
    document.body.classList.add('line-numbered');
  }
  return true;
}

// Add an event listener when reveal is finished loading.
Reveal.addEventListener( 'ready', function( event ) {
  // Include css.
  var link = document.createElement( 'link' );
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'lib/css/line-numbers.css';
  // Add CSS to head
  document.getElementsByTagName( 'head' )[0].appendChild( link );
  // Try to add line numbers now, if no ready add on slide change
  if (!addLineNumbers()) {
    Reveal.addEventListener('slidechanged', addLineNumbers);
  }
});
