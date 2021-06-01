const sentence = "hello there from lighthouse labs";
let seconds = 1000;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, seconds)
  seconds += 500
}