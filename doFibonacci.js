function fibonacci(number) {
  if (!number) throw new TypeError("please input a number value");
  if (number < 2) {
    return 1;
  }
  return fibonacci(number - 1) + fibonacci(number - 2);
}

this.onmessage = function(event) {
  this.postMessage({
    value: fibonacci(event.data.number)
  });
}