const unit=200;
if (unit>0 && unit<=100){
    total=unit*0.5;
    console.log(`Total price is Rs.${total}`)
}else if(unit>100 && unit<=200){
    total=unit*0.7;
    console.log(`Total price is Rs.${total}`)
} else if(unit>200 && unit<=300){
    total=unit*1;
    console.log(`Total price is Rs.${total}`)
}else if(unit>300 && unit<=500){
    total=unit*1.5;
    console.log(`Total price is Rs.${total}`)
}else{
    total=unit*2;
    console.log(`Total price is Rs.${total}`)
}