// - Define a function `getFirstSelector(selector)`, which accepts a selector and
//   returns the first element that matches.
function getFirstSelector(selector) {
  return document.querySelector(selector)
}
// - Define a function `nestedTarget()` that pulls a `.target` out of `#nested`
//   (`#` is used for IDs in selectors — but you knew that because you [read the docs][docs],
//   right? :) ). (Note that in `index.html` `#nested` and `.target` just
//   _happen_ to be `div`s. This method should work with arbitrary elements.)
function nestedTarget() {
  return document.querySelector('#nested .target')
}
// - Define a function `increaseRankBy(n)` that increases the ranks in all of the
//   `.ranked-list`s by `n`. (You might need to make use of [`parseInt()`][parseint]
function increaseRankBy(n) {
  const rankedLists = document
  .getElementById('app')
  .querySelectorAll('ul.ranked-list')

  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i]) + n
  }
}
// - Define a function `deepestChild()` that pulls out the most deeply nested child
//   element from `div#grand-node`. (Remember, you can iterate over elements and call
//   `querySelector()` and `querySelectorAll()` on them. This is challenging to
//   implement correctly, but not beyond your ability!)
function deepestChild() {
  let node = document.getElementById('grand-node')
  let deepChild = node.children[0]

  while (deepChild) {
    node = deepChild
    deepChild = node.children[0]
  }
  return node
}
