const AddButton=document.querySelectorAll('.add')
const RemoveButton=document.querySelectorAll('.rmv')
const HeartButton=document.querySelectorAll('.hrt')
const quan=document.querySelectorAll('.quan')
const price=document.querySelectorAll('.price')
const cardDiv=document.querySelectorAll('.card')
const sum=document.querySelector('.sum')
const delButton=document.querySelectorAll('.delete')
console.log(delButton)
console.log(HeartButton)

for (let i=0;i<AddButton.length;i++){
    AddButton[i].addEventListener('click',function(){
        quan[i].innerHTML++
        console.log(sum.innerHTML)
        sum.textContent =parseInt(sum.innerHTML) + parseInt(price[i].innerHTML);  
      }
        )
}
for (let i=0;i<RemoveButton.length;i++){
    RemoveButton[i].addEventListener('click',function(){
        if (quan[i].innerHTML>0){
            quan[i].innerHTML--
            sum.textContent =parseInt(sum.innerHTML) - parseInt(price[i].innerHTML);  

        }
        
    })
}
for (let i=0;i<delButton.length;i++){
    delButton[i].addEventListener('click',function(){
        cardDiv[i].remove();
        sum.textContent =parseInt(sum.innerHTML) - parseInt(price[i].innerHTML)* parseInt(quan[i].innerHTML);  

        
    })
}
for (let i=0;i<HeartButton.length;i++){
    HeartButton[i].addEventListener('click',function(){
        document.querySelectorAll('.hrt')[i].style.backgroundColor = "#C51104"
        
        
}
    )
}