const pEle = document.querySelector("#generator");
const adviceEle = document.querySelector("#namber");
const tasEle = document.querySelector(".tas");
console.log(tasEle);
async function getDatas() {
  const res = await fetch("https://api.adviceslip.com/advice");
  // console.log(await res.json());
  const data = await res.json();
  console.log(data.slip);
  adviceEle.textContent = `ADVICE #${data.slip.id}`;
  pEle.textContent = data.slip.advice;
}
tasEle.addEventListener('click',()=>{
    getDatas()
})

getDatas();
