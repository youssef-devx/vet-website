

const x=document.querySelector('.bx-x'),
menu=document.querySelector('.bx-menu'),
sidebar=document.querySelector('.sidebar')
x.onclick=()=>{
  if(sidebar.style.display=="flex"){
    sidebar.style.display="none"
  }else{
    sidebar.style.display="flex"
  }
}
menu.onclick=()=>{
  if(sidebar.style.display=="flex"){
    sidebar.style.display="none"
  }else{
    sidebar.style.display="flex"
  }
}
const copyBtn=document.querySelector('.copy'),
inpt=document.querySelector('.inpt'),
modul=document.querySelector('.modul'),
calls=document.querySelectorAll('.call')
copyBtn.onclick=()=>{
  inpt.value="321 Dogburn Ln Orange, CT 06477"
  inpt.select()
  document.execCommand('copy')
  modul.innerText="Address copied!"
  modul.style.left='20px'
  setTimeout(()=>modul.style.left='-100%',3000)
}
calls.forEach(call=>{
  call.onclick=()=>{
    inpt.value="203-795-1241"
    inpt.select()
    document.execCommand('copy')
    modul.innerText="Phone number copied!"
    modul.style.left='20px'
    setTimeout(()=>modul.style.left='-100%',3000)
  }
})