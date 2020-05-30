# webWorker
a simple web worker demo

## instruments
You can get a fibonacci result calculated with the input number  
We know it can be computation-intensive to get a fibonacci value, so we use it to emulate a time-consuming work  
You can also input a non-number value, thus raises an error of `TypeError`, we can register `onerror` handler to handle it  
We will calculate the biiiiiiig fibonacci value without freezing up the window by utilizing the `WebWorker`.  
If we don't leverage the magic power provided by `WebWorker`, wo couldn't have works done so smoothly
Have a nice day