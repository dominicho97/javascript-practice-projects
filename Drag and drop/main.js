

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty')



// fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);


//Loop through empties and call drag events
for(const empty of empties){
  empty.addEventListener('dragover',dragOver);
  empty.addEventListener('dragenter',dragEnter);
  empty.addEventListener('dragleave',dragLeave);
  empty.addEventListener('drop',dragrDrop);
}


// drag functions

  function dragStart()  {
    this.className +=' hold';
   setTimeout(() => (this.className = 'invisible'), 0);
  }

  function dragEnd()  {
   this.className = 'fill';
  }
  /*
 function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}
*/

