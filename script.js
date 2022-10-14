function compute()
{
	//Getting values from all fields
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	//Calculating interest
	var interest = principal * years * rate /100;
	//Converting years value into an actual year.
	var year = new Date().getFullYear() + parseInt(years);
	
	//Amount field validation
	if(principal <=0){
		alert("Amount can't be zero or negative. Please enter a positive number");
		document.getElementById("principal").focus();
	} else {	
		//Printing calculation results
		document.getElementById("result").innerHTML = "If you deposit <mark>"+principal+
			"<\/mark>,\<br\>at an interest rate of <mark>"+rate+
			"%<\/mark>.\<br\>You will receive an amount of <mark>"+interest+
			"<\/mark>,\<br\>in the year <mark>"+year+"<\/mark>\<br\>"
	}
}

function updateRate() 
{
	//Updating rate value label based on user changes
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
        