let arr = document.querySelectorAll('.stars')
let btn = document.querySelector('.submit_button')
let rateArr = []
const rate = (event) => {
  arr.forEach((item) => {
    if (item.classList.contains('active')) {
      item.classList.remove('active')
    }
  })

  event.target.classList.toggle('active')
  rateArr.push(+event.target.innerText)
  console.log(rateArr)
}

arr.forEach((item) => {
  item.addEventListener('click', rate)
})
const submit = () => {
  arr.forEach((item) => {
    if (item.classList.contains('active')) {
      item.classList.remove('active')
    }
  })
}
btn.addEventListener('click', submit)
//Сделать ещё один файл с JS и добавить его в качестве модуля
//Подругзить в него данные и из него их жостать в систему оценки динамически
