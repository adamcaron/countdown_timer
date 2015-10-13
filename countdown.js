function countdown(seconds, callback){
  var interval = setInterval(function() {
    if (seconds >= 0) {
      callback(seconds--)
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

countdown(5, function (s) {
  console.log(s);
});