var cal_num = 0;
var result_num = 0;
var first = true;


function add(char){

	var result = document.getElementById('result');
	result.value = result.value + char;


	// console.log(char);
	// alert($("result").prop("value"));
	// var a = $("result").prop("value") + char;
	// $(".result").val(a);
}

function result(){
	var result = document.getElementById('result');
	
	result.value = eval(result.value);
}

function ac(){
	var result = document.getElementById('result');
	
	result.value = "";
}

// $(".num_button").click(function() {
	
// 	cal_num = $(this).prop("value");
// 	console.log(cal_num);

// 	if(first==true){
// 		result_num = cal_num;
// 		first = false;
// 	}
// 	else{
// 		result_num = result_num + cal_num;
// 	}
// 	console.log(result_num);
// 	$(".result").val(result_num);
//   });

