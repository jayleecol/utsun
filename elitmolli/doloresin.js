const myPromise = new Promise((resolve, reject) => {
  // Here, resolve and reject are functions provided by the promise constructor

  // Immediately resolving the promise
  resolve('Success!');
});

// Using the promise
myPromise.then((value) => {
  console.log(value);  // Output: 'Success!'
});
