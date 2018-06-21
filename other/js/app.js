const elem = document.querySelector('progress');

const data = {
  percent: 0
}

setInterval(function(){
  elem.value = ++data.percent % 100;
}, 500)