var hands = [
  {name: 'hour'},
  {name: 'minute'},
  {name: 'second'}
].map(function(element) {
  element.block = document.getElementById(element.name);
  return element;
});

const setCSSVar = (element, key, value) => element.style.setProperty(`--${key}`, value);

function moveHand() {
  requestAnimationFrame(moveHand);
  var now = new Date();

  hands[2].now = ((360 / 60) * now.getSeconds() + 180);
  hands[1].now = ((360 / 60) * now.getMinutes() + (6 / 60) * now.getSeconds() + 180);
  hands[0].now = ((360 / 12) * now.getHours() + (30 / 60) * now.getMinutes() + 180);

  hands.forEach(function(element) {
    setCSSVar(element.block, element.name, element.now + 'deg');
  });
}
moveHand();
