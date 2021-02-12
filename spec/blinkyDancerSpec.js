describe('blinkyDancer', function(){
  let blinkyDancer, clock;
  let timeBetweenSteps = 100;

  beforeEach(function(){
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  })
})