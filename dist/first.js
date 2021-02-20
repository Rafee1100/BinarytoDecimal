"use strict";

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function () {
    const binaryNum = document.getElementById('number').value;
    let decimal=0;
    const l=binaryNum.length;
    for(let i=l-1;i>=0;i--){
      let x=parseInt(binaryNum[i]);
      decimal=decimal+(x*(Math.pow(2,i)));
    }
    console.log(decimal)
});


const clearBtn=document.getElementById('clear');
clearBtn.addEventListener('click',function(){
    const clearArea=document.getElementById('number').value=" ";
})
