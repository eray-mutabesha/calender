// let kase=document.getElementsByClassName("case");

// let date= new Date();
// let year= date.getFullYear();
// let month=date.getDate();
// let jour=date.getDate();
// console.log(jour)
// let day=date.getDay();

 
// const monthName=["jan","fev","mars","Avril","Mai","Juin","Juillet","Out","sept","Oct","Nov","Dec"];
// const UP_MONTH="upMonth"
// const DOWN_MONTH="downMonth"



// function CALENDRIER_REDUCER(action){
//     switch(action){
//         case UP_MONTH:
//             if(month<12)month++
//             else{
//                 year++
//                 month=1
//             }
//             break;
//             case DOWN_MONTH:
//                 if(month>0)month--
//                 else{
//                     year--
//                     month=12
//                 }
//                 break;
//                default:
//                break;
//     }
//     calendrier(year,month);
// }
// // ----------------------------------------------------------------------------
// document.getElementById("avant").onclick=function(){
//     CALENDRIER_REDUCER(DOWN_MONTH)
   
// }
// document.getElementById("apres").onclick=function(){
//     CALENDRIER_REDUCER(UP_MONTH)
  
// }
// // ------------------------------------------------------------------------ 

//  function calendrier(year,month){

//      const monthNb=month+12*(year-2020)
//     let cld=[{daystart: 2,length:30,year: 2020, month: "jan"}]

//      for(let i=0;i<monthNb-1;i++){
//         let yearSimule = 2020+Math.floor(i/12)

//          const monthsSimuleLonguer=[31,getFevrierLength(yearSimule),31,30,31,30,31,30,31,31,30,31]

//          let monthSimuleIndex=(i+1)-(yearSimule-2020)*12

//          cld[i+1]={
//             daystart: (cld[i].daystart + monthsSimuleLonguer[monthSimuleIndex-1])%7,
//             length: monthsSimuleLonguer[monthSimuleIndex],
//              year: 2020 + Math.floor((i+1)/12),
//             month:monthName[monthSimuleIndex]
//          }
//         if(cld[i+1].month===undefined){
//             cld[i+1].month="jan"
//             cld[i+1].length=31
//         }
//     }
//     for(i=0;i<kase.length;i++){
//         kase[i].innerText="";
//       }
//       for(let i=0;i<cld[cld.length-1].length;i++){
       
//         if(i==jour){
//             kase[i+cld[cld.length-1].daystart].inneHTML=`<div class="actu">${i+1}</div>`;
            
//         }
//         else{
//             kase[i+cld[cld.length-1].daystart].innerText=i+1;
//         }
//     }


//     document.getElementById("titre").innerText=cld[cld.length-1].month.toLocaleUpperCase()+" "+cld[cld.length-1].year;
//  } 
//     calendrier(year,month);

//     function getFevrierLength(year){
//         if(year%4===0)return 29
//            else return 28
//      }
    
const date = new Date();

const renderCalendar = () =>{
date.setDate(1);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
const monthDays = document.querySelector(".days");
const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
const firstDayIndex = date.getDay();
const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay();
const nextDays = 5 - lastDayIndex +1;

document.querySelector(".date h4").innerHTML =  months[date.getMonth()];
document.querySelector(".date p").innerHTML = date.getFullYear();

let days = "";

for(let x=firstDayIndex; x > 0; x--){
days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
}

for (let i=1; i<=lastDay; i++){
if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
    days += `<div class="today">${i}</div>`
}
else{
    days += `<div>${i}</div>`;
} 
}

for (let j=1; j<=nextDays;j++){
days += `<div class="next-date">${j}</div>`;
monthDays.innerHTML = days;
}
}

document.querySelector(".prev").addEventListener("click",() =>{
date.setMonth(date.getMonth() - 1);
renderCalendar();
});

document.querySelector(".next").addEventListener("click",() =>{
date.setMonth(date.getMonth() + 1);
renderCalendar();
})

renderCalendar();