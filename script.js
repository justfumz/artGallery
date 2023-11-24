function changeColor(name) {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
  document.getElementById(name).style.backgroundColor = randomColor;
}
