// 1) Создать некий счетчик. В HTML две кнопки (increment, decrement) или ("-", "+") и отобразить в HTML переменную внутри которой 0. При нажатии на эти кнопки должно меняться значение +1 или -1 при нажатии на соответствующую кнопку. При нажатии на плюс отображаемая цифра должна менять цвет на зеленый, а при нажатии на минус в красный. Нельзя уменьшать значение ниже нуля.

// 2) Создать блок 500 на 500 с бордером и отобразить внутри в тексте x: y: соответствующие координаты при движении мыши внутри этого блока.

// 3) Создайте input в HTML, куда пользователь может вводить название цвета (red, blue, green и т. д.). При вводе цвета (в input), фон страницы должен менять цвет в реальном времени когда инпут меняется.

const indicator = document.querySelector("#indicator");
const increment = document.querySelector("#increments"); // Проверьте, что в HTML именно id="increments", а не "increment"
const decrement = document.querySelector("#decrement");

let counter = 0;

const updateCounter = () => {
  indicator.innerText = counter;
};

updateCounter();

increment.addEventListener("click", () => {
  counter++;
  indicator.className = "increment";
  updateCounter();
});

decrement.addEventListener("click", () => {
  if (counter === 0) return;
  counter--;
  indicator.className = "decrement";
  updateCounter();
});

const block = document.querySelector(".block");
const indicatorY = document.querySelector(".y");
const indicatorX = document.querySelector(".x");
const ball = document.querySelector(".ball");

block.addEventListener("mousemove", (e) => {
  indicatorX.innerText = `X:${e.clientX}`;
  indicatorY.innerText = `Y:${e.clientY}`;
  ball.style.top = e.clientY + "px";
  ball.style.left = e.clientX + "px";
  console.log(e);
});

const inp = document.querySelector(".inp");
inp.addEventListener("input", (e) => {
  const colors = e.target.value;
  document.body.style.background = colors;
});
