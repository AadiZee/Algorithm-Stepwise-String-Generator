function steps(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      j <= i ? (line += "#") : (line += " ");
    }
    console.log(line);
  }
}

steps(3);
