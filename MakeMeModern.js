function showInvoice() {
	invoiceDiv = document.querySelector("#div2");
	hostingDiv = document.querySelector("#div3");
	sslDiv = document.querySelector("#div4");
	hostingDiv.style.display = "none";
	sslDiv.style.display = "none";
	invoiceDiv.style.display = "block";
	invoiceDiv.scrollIntoView({behavior: "smooth"});
}

function showHosting() {
	invoiceDiv = document.querySelector("#div2");
	hostingDiv = document.querySelector("#div3");
	sslDiv = document.querySelector("#div4");
	invoiceDiv.style.display = "none";
	sslDiv.style.display = "none";
	hostingDiv.style.display = "block";
	hostingDiv.scrollIntoView({behavior: "smooth"});
}

function showSSL() {
	invoiceDiv = document.querySelector("#div2");
	hostingDiv = document.querySelector("#div3");
	sslDiv = document.querySelector("#div4");
	invoiceDiv.style.display = "none";
	hostingDiv.style.display = "none";
	sslDiv.style.display = "block";
	sslDiv.scrollIntoView({behavior: "smooth"});
}

// Change what the cost spans display depending on the payment amount in the invoice div
var payment_amount = $("#payment_amount");
payment_amount.data("previous", 0);
payment_amount.on("input change paste keyup", function(event) {
	if (payment_amount.data("previous") != payment_amount.val()) {
		payment_amount.data("previous", payment_amount.val());
		if (payment_amount && payment_amount.val()) {
			totalCost = parseInt(payment_amount.val()) + 0.029 * parseInt(payment_amount.val()) + 0.30;
			$("span.cost").each(function() {
				$(this).html(totalCost.toFixed(2));
			});
			$("span.check_cost").html(parseInt(payment_amount.val()).toFixed(2));
		} else {
			$("span.cost").each(function() {
				$(this).html("0.00");
			});
			$("span.check_cost").html("0.00");
		}
	}
});


// Change the buttons when the input values are all filled in the invoice div
$("#invoice_email,#invoice_number,#payment_amount").on("input change paste keyup", function(event) {
	if (($("#invoice_email") && $("#invoice_email").val() != "") && ($("#invoice_number") && $("#invoice_number").val() != "") && ($("#payment_amount") && $("#payment_amount").val() != "")) {
		$("#div2 .pay.fade").each(function() {
			$(this).addClass("orange");
			$(this).removeClass("gray");
		});
	} else {
		$("#div2 .pay.fade").each(function() {
			$(this).removeClass("orange");
			$(this).addClass("gray");
		});
	}
});