function getFirstSelector(selector){
  var element = document.querySelector(selector);
  return element;
  }

function nestedTarget(){
  debugger
  var elements = document.getElementById('app').querySelectorAll('#nested .target')
  return elements[0]
  }

function increaseRankBy(n){
  var innerEl;
  var elements = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (var i = 0; i < elements.length; i++) {
    innerEl = elements[i].innerHTML
    innerEl = (parseInt(innerEl,10) + parseInt(n,10))
    elements[i].innerHTML = innerEl
  }
}

function deepestChild(){
  var current = Array.from(document.getElementById('grand-node').querySelectorAll('div'))
  var next = [];
  function criteriaFn(next){
    debugger
    var target = document.querySelector('#grand-node div div div div')
    if (next.innerHTML === target.innerHTML) {
      return true
    }
  }
  while (current.length > -1) {
    if (criteriaFn(next)) {
      return next
    }
    next = current.shift()
  }
}
