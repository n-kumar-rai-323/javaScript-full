const purchaseamount=20000;
if (purchaseamount>=10000){
    discount=(20/100)*purchaseamount;
    console.log(`Rs.${discount} discount provided.`)
}else if(purchaseamount>=5000 && purchaseamount<10000){
    discount=(10/100)*purchaseamount;
    console.log(`Rs.${discount} discount provided.`)
}else if(purchaseamount>=2000  && purchaseamount<5000){
    discount=(5/100)*purchaseamount;
    console.log(`Rs.${discount} discount provided.`)
}else{
    discount=(0)*purchaseamount;
    console.log(`Rs.${discount} discount provided.`)
}