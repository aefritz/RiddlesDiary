let mousehold = false;
let prevX;
let prevY;
document.body.addEventListener('mousedown', markOn);
document.body.addEventListener('mouseup', markOff);
document.body.addEventListener('mousemove', makeMark);
function makeMark (ev) {
  if (mousehold) {
    if (!(prevX)&&!(prevY)) {
      prevX = ev.pageX;
      prevY = ev.pageY;
    }
    let newMark = document.createElementNS('http://www.w3.org/2000/svg','circle');
    newMark.setAttribute('cx',`${ev.pageX}`);
    newMark.setAttribute('cy',`${ev.pageY}`);
    newMark.setAttribute('r', '8px');
    newMark.setAttribute('stroke', 'black');
    newMark.setAttribute('stroke-width', '1px');
    newMark.setAttribute('fill', 'black');
    document.querySelector('#imageSpace').appendChild(newMark);
    smoothConnection(ev.pageX, ev.pageY, prevX, prevY);
    prevX = ev.pageX;
    prevY = ev.pageY;
    return window.setTimeout(() => {newMark.remove();}, 5000);
  }
}
function smoothConnection (a,b,c,d) {
  let smoothLine = document.createElementNS('http://www.w3.org/2000/svg','line');
  smoothLine.setAttribute('stroke','black');
  smoothLine.setAttribute('stroke-width','17');
  smoothLine.setAttribute('x1',`${a}`);
  smoothLine.setAttribute('y1',`${b}`);
  smoothLine.setAttribute('x2',`${c}`);
  smoothLine.setAttribute('y2',`${d}`);
  document.querySelector('#imageSpace').appendChild(smoothLine);
  return window.setTimeout(() => {smoothLine.remove();}, 5000);
}
function markOn () {
  mousehold = true;
}
function markOff () {
  mousehold = false;
  prevX = 0;
  prevY = 0;
}
