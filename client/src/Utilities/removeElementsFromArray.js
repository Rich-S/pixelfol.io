//
//  https://derickbailey.com/2015/09/23/how-to-get-the-difference-between-two-arrays-as-a-distinct-list-with-javascript-es6/

function removeElementsFromArray(elements, array) {
  elements.forEach( d => array.splice(array.indexOf(d), 1) );
}

export default removeElementsFromArray;
