var elForm = document.querySelector('.time-determination-form');
var elDistance = document.querySelector('.time-determination__input');
var elWarning = document.querySelector('.time-determination__warning');
var elTransportType = document.querySelector ('.results');
var elResultFoot = document.querySelector('.result-box__item__result-foot');
var elResultBike = document.querySelector('.result-box__item__result-bike');
var elResultCar = document.querySelector('.result-box__item__result-car');
var elResultPlane = document.querySelector('.result-box__item__result-plane');

var onFood = 3.6;
var onBike = 20;
var inCar = 70;
var onPlane = 800;
var timeOnFood = 0;
var timeOnBike = 0;
var timeInCar = 0;
var timeOnPlane =0;

function distance_detector (distance) {
   timeOnFood = distance / onFood
   timeOnBike = distance / onBike;
   timeInCar = distance / inCar;
   timeOnPlane = distance / onPlane;
}
elForm.addEventListener('submit', function (evt) {
   evt.preventDefault();
   var inputDistance = Number(elDistance.value.trim());

   if (inputDistance <= 0 || isNaN(inputDistance)) {
      elWarning.classList.add('warning');
      elWarning.textContent = 'Masofaga faqat son kiritilishi kerak!';
      return;
   } else {
      elWarning.classList.remove('warning');
      elWarning.textContent = '';
   }
   
   distance_detector(inputDistance);
   timeOnFood = Math.trunc(timeOnFood) + ' soat ' + (Math.trunc(timeOnFood * 60)%60) + ' minut ' + (Math.trunc(timeOnFood * 3600)%60) + ' sekund';
   elResultFoot.textContent = timeOnFood;
   timeOnBike = Math.trunc(timeOnBike) + ' soat ' + (Math.trunc(timeOnBike * 60)%60) + ' minut ' + (Math.trunc(timeOnBike * 3600)%60) + ' sekund';
   elResultBike.textContent = timeOnBike;
   timeInCar = Math.trunc(timeInCar) + ' soat ' + (Math.trunc(timeInCar * 60)%60) + ' minut ' + (Math.trunc(timeInCar * 3600)%60) + ' sekund';
   elResultCar.textContent = timeInCar;
   timeOnPlane = Math.trunc(timeOnPlane) + ' soat ' + (Math.trunc(timeOnPlane * 60)%60) + ' minut ' + (Math.trunc(timeOnPlane * 3600)%60) + ' sekund';
   elResultPlane.textContent = timeOnPlane;
})
