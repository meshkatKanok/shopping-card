function handleproductchange(product,isincrease){
         
    //const productInput = document.getElementById( product + "-count");
    const productcount = getInputvalue(product);
    // const caseNewcount = casecount - 1;
    let productNewcount = productcount
    if(isincrease == true){
       productNewcount = productcount + 1;
   }

   if(isincrease == false && productcount > 0){
    productNewcount = productcount - 1;
    }

    document.getElementById(product + "-count").value = productNewcount;
    //const casetotal = productNewcount*59;
    let productTotal = 0;
    if(product == 'phone'){
       productTotal =  productNewcount * 1219;

    }
    if (product =='case'){
       productTotal = productNewcount * 59;
    }
    document.getElementById( product + "-total").innerText="$" + productTotal;
    calculatetotal();
  }

 function calculatetotal(){
    //const productInput = document.getElementById("phone-count");
    const phonecount = getInputvalue("phone");
    const casecount = getInputvalue("case");
   
    const TotalPrice = phonecount * 1219 + casecount * 59;
    document.getElementById("total-price").innerText="$"+ TotalPrice;

    const Tax = Math.round(TotalPrice * 0.2);
    document.getElementById("tax-amount").innerText="$" + Tax;
    const grandTotal = TotalPrice + Tax;
    document.getElementById("grand-total").innerText="$" + grandTotal;
 }
 function getInputvalue(product){

    const productInput = document.getElementById(product + "-count");
    const productcount = parseInt(productInput .value);
    return productcount;
 }



 function handleproductchange(product,isincrease){
         
    //const productInput = document.getElementById( product + "-count");
    const productcount = getInputvalue(product);
    // const caseNewcount = casecount - 1;
    let productNewcount = productcount
    if(isincrease == true){
       productNewcount = productcount + 1;
   }

   if(isincrease == false && productcount > 0){
    productNewcount = productcount - 1;
    }

    document.getElementById(product + "-count").value = productNewcount;
    //const casetotal = productNewcount*59;
    let productTotal = 0;
    if(product == 'phone'){
       productTotal =  productNewcount * 1219;

    }
    if (product =='case'){
       productTotal = productNewcount * 59;
    }
    document.getElementById( product + "-total").innerText="$" + productTotal;
    calculatetotal();
  }

 function calculatetotal(){
    //const productInput = document.getElementById("phone-count");
    const phonecount = getInputvalue("phone");
    const casecount = getInputvalue("case");
   
    const TotalPrice = phonecount * 1219 + casecount * 59;
    document.getElementById("total-price").innerText="$"+ TotalPrice;

    const Tax = Math.round(TotalPrice * 0.2);
    document.getElementById("tax-amount").innerText="$" + Tax;
    const grandTotal = TotalPrice + Tax;
    document.getElementById("grand-total").innerText="$" + grandTotal;
 }
 function getInputvalue(product){

    const productInput = document.getElementById(product + "-count");
    const productcount = parseInt(productInput .value);
    return productcount;
 }


//       // step-03 id change ace button te just id="case-increase/decrease"
//  function handlephonechange(isincrease){
//       const phoneInput = document.getElementById("phone-count");
//       const phonecount = parseInt(phoneInput.value)
//       // const caseNewcount = casecount - 1;
//       let phoneNewcount = phonecount;
//       if(isincrease == true){
//          phoneNewcount = phonecount + 1;
//      }

//      if(isincrease == false && phonecount > 0){
//         phoneNewcount = phonecount - 1;
//       }

//       phoneInput.value = phoneNewcount;
//       const phonetotal = phoneNewcount*1219;
//       document.getElementById("phone-total").innerText="$" + phonetotal;
   
//     }

//  function handleproductchange(isincrease){
//       const caseInput = document.getElementById("case-count");
//       const casecount = parseInt(caseInput.value)
//       // const caseNewcount = casecount - 1;
//       let caseNewcount = casecount;
//       if(isincrease == true){
//          caseNewcount = casecount + 1;
//      }

//      if(isincrease == false && casecount > 0){
//         caseNewcount = casecount - 1;
//       }

 //    caseInput.value = caseNewcount;
 //    const casetotal = caseNewcount*59;
 //    document.getElementById("case-total").innerText="$" + casetotal;
   
 //  }

 //    step-02

 //    document.getElementById("case-increase").addEventListener("click", function(){
 //       handleproductchange(true);
 // });

 //    document.getElementById("case-decrese").addEventListener("click", function(){
 //       handleproductchange(false);
 // });
 // function handleproductchange(isincrease){
 //    const caseInput = document.getElementById("case-count");
 //    const casecount = parseInt(caseInput.value)
 //    // const caseNewcount = casecount - 1;
 //    let caseNewcount = casecount;
 //    if(isincrease == true){
 //       caseNewcount = casecount + 1;
 //    }

 //    if(isincrease == false && casecount > 0){
 //       caseNewcount = casecount - 1;
 //    }

 //    caseInput.value = caseNewcount;
 //    const casetotal = caseNewcount*59;
 //    document.getElementById("case-total").innerText="$" + casetotal;
   
 // }

 // Step-01

 // document.getElementById("case-increase").addEventListener("click", function(){
 //    const caseInput = document.getElementById("case-count");
 //    const casecount = parseInt(caseInput.value)
 //    const caseNewcount = casecount + 1;
 //    caseInput.value = caseNewcount;
 //    const casetotal = caseNewcount*59;
 //    document.getElementById("case-total").innerText="$" + casetotal;
    
 // });

 //    document.getElementById("case-decrese").addEventListener("click", function(){
 //    const caseInput = document.getElementById("case-count");
 //    const casecount = parseInt(caseInput.value)
 //    const caseNewcount = casecount - 1;
 //    caseInput.value = caseNewcount;
 //    const casetotal = caseNewcount*59;
 //    document.getElementById("case-total").innerText="$" + casetotal;
   
 // });
