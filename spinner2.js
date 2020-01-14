var delay = 0;
var spinner = "|/-\\|/-\\|\n";

for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write("\r" + char + "");
  }, delay);
  delay += 200;
}
setTimeout(() => {
  process.stdout.write("\n");
}),
  (delay += 200);
