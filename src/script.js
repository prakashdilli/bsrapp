//const electron = require('electron');
console.log('test')
const submit = document.getElementById('submit');
const reset = document.getElementById('reset');
const salesPerMonth =document.getElementById('salesPerMonth');
const oneDaySales =document.getElementById('oneDaySales');




submit.addEventListener('click',function(event){
    console.log('clickded',)
       var rate_value = document.querySelector('input[name="radio"]:checked').value;
   		var value = computeSalesFromBSR(document.getElementById('bsrRank').value,rate_value);
    salesPerMonth.innerText = value;
    oneDaySales.innerText = Math.round(value/15);


})


// function updateSalesValue(){
	
// 	//alert("here");
// 	bsr = jQuery("#brpbsr-bsr").val();
// 	computeType = jQuery("#brpbsr-type").val();
	
// 	//console.log(computeType);
// 	sales = computeSalesFromBSR( bsr, computeType );
// 	jQuery("#brpbsr-month-sales").val(sales);
// 	jQuery("#brpbsr-day-sales").val(Math.round(sales/15));
	
// }

function computeSalesFromBSR(bsr,type){
	console.log(bsr,type)
	var alpha, beta, epsilon, sales;
	
	if( bsr == 0 ){ return 0; }
	
	if (type == 'book'){
		
		alpha = -0.33483877; // R23
		beta = -0.06198923; // R24
		epsilon = 3.69500221; // R22
		
	} else {
		
		alpha = -0.34034503; // R23
		beta = -0.07791303; // R24
		epsilon = 3.98993694; // R22
		
	}
	
	// Monthly sales
	return Math.round(Math.pow(10,(epsilon + alpha * Math.log10(bsr) + beta * Math.pow(Math.log10(bsr),2))) * 15 * 1.08 );
}

