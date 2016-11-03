//
//		Creat by YunHan
//
//		   2016/11/4
//
  var operateway = 0;//计算方式 0 为无计算
  var inputfirnum = true;//是否可以输入第一个数字，计算符号改变后此值为false
  var inputsecnum = false;//是否可以输入第二个数字，计算符号改变后此值为true
  var inputoperate = false;//判断是否能够添加运算符号
  var isfirnum = false;//判断第一个数是否存在
  var issecnum = false;//判断第二个数是否存在
  var isnumcolorchange = false;
  // var isoperate = false;//判断运算符号是否存在
 //  var oneObj;
 //  window.onload = getNumObj();
 //  function getNumObj(){
 //  	oneObj = document.getElementById("one");
 // 	var twoObj = document.getElementById("two");
 // 	var threeObj = document.getElementById("three");
 // 	var fourObj = document.getElementById("four");
	// var fiveObj = document.getElementById("five");
	// var sixObj = document.getElementById("six");
 // 	var sevenObj = document.getElementById("seven");
	// var eightObj = document.getElementById("eight");
 // 	var nineObj = document.getElementById("nine");
 //  	var zeroObj = document.getElementById("zero");//Get数字对象
 //  // var firnumObj = document.getElementById("firstnum");//Get第一个数字对象
 //  // var secnumObj = document.getElementById("secondnum");//Get第二个数字对象
 //    alert("Get success");
 //  }
	// alert(oneObj);
function addnum(num){
  	var firnumObj = document.getElementById("firstnum");
  	var secnumObj = document.getElementById("secondnum");
  	var firnum = String(firnumObj.innerHTML);
  	var secnum = String(secnumObj.innerHTML);
  	if (inputfirnum == true && inputsecnum == false){
  		if(firnum == 'Your FirNum'){
  			firnumObj.innerHTML = String(num);
  			isfirnum = true;
  			inputoperate = true;
  		};
  		if(firnum != 'Your FirNum' && firnum.length <= 6){
  			firnumObj.innerHTML = firnumObj.innerHTML + String(num);
  			isfirnum = true;
  			inputoperate = true;
  		};
  	};
  	if (inputfirnum == false && inputsecnum == true) {
  		if(secnum == 'Your SecNum'){
  			secnumObj.innerHTML = String(num);
  			issecnum = true;
  		};
  		if(secnum != 'Your SecNum' && secnum.length <= 6){
  			secnumObj.innerHTML = secnumObj.innerHTML + String(num);
  			issecnum = true;
  		};
  	};
};

function change(num){
	var operatorObj = document.getElementById("operator");
	if(inputoperate == true){
		if(num == 1){
			operatorObj.style.background="url(./image/jiafa-100ffffff.png)";
			operateway = 1;
		};
		if(num == 2){
			operatorObj.style.background="url(./image/jianfa-100ffffff.png)";
			operateway = 2;
		};
		if(num == 3){
			operatorObj.style.background="url(./image/chengfa-100ffffff.png)";
			operateway = 3;
		};
		if(num == 4){
			operatorObj.style.background="url(./image/chufa-100ffffff.png";
			operateway = 4;
		};
		inputfirnum = false;
		inputsecnum = true;
	};
};

function calculate(){
	var calculateObj = document.getElementById("calculator");
  	var firnum = parseInt(document.getElementById("firstnum").innerHTML);
  	var secnum = parseInt(document.getElementById("secondnum").innerHTML);
  	var resultObj = document.getElementById("result");
  	var result = document.getElementById("result").innerHTML;
  	if(isfirnum == true){
  		if(operateway != 0){
  			if(issecnum == true){
  				result ="";
  				if(operateway == 1){
  					resultObj.innerHTML = parseInt(firnum) + parseInt(secnum);
  				};
  				if(operateway == 2){
  					resultObj.innerHTML = parseInt(firnum) - parseInt(secnum);
  				};
  				if(operateway == 3){
  					resultObj.innerHTML = parseInt(firnum) * parseInt(secnum);
  				};
  				if(operateway == 4){
  					// if(parseInt(secnum) == 0){
  					// 	resultObj.innerHTML = "Error:Not Be Zero";
  					// }
  					resultObj.innerHTML = parseFloat(firnum) / parseFloat(secnum);
  				};
  			};
  		};
  	};
};

function clearnum(){
	var firnumObj = document.getElementById("firstnum");
  	var secnumObj = document.getElementById("secondnum");
  	var operatorObj = document.getElementById("operator");
  	var resultObj = document.getElementById("result");
  	firnumObj.style.opacity = "0";
  	firnumObj.innerHTML = "Your FirNum";
  	firnumObj.style.opacity = "1";
  	secnumObj.innerHTML = "Your SecNum";
  	operatorObj.style.background = "";
  	resultObj.innerHTML = "The Result";
	operateway = 0;
	inputfirnum = true;
	inputsecnum = false;
	inputoperate = false;
	isfirnum = false;
  issecnum = false;
	isoperate = false;
  isnumcolorchange = false;
};


 //  function addNumOne(){
 //  	// alert("Get in addNumOne");
 //  	var firnumObj = document.getElementById("firstnum");
 //  	var addnum = document.getElementById("one");
 //  	// alert(typeof firnumObj);
 //  	var firnum = String(firnumObj.innerHTML);
 //  	// alert(firnum);
 //  	if(firnum == '0'){
 //  		firnumObj.innerHTML = addnum.innerHTML;
 //  		// alert("Get in One if");
 //  	};
 //  	if(firnum != '0'&&firnum.length<=6){
 //  		firnumObj.innerHTML = firnumObj.innerHTML + addnum.innerHTML;
 //  		// alert("Get in One else");
 //  	};
 // };
 //  function addNumTwo(){
 //  	// alert("Get in addNumTwo");
 //  	var firnumObj = document.getElementById("firstnum");
 //  	var addnum = document.getElementById("two");
 //  	// alert(typeof firnumObj);
 //  	var firnum = String(firnumObj.innerHTML);
 //  	// alert(firnum);
 //  	if(firnum == '0'){
 //  		firnumObj.innerHTML = addnum.innerHTML;
 //  		// alert("Get in Two if");
 //  	};
 //  	if(firnum != '0'&&firnum.length<6){
 //  		firnumObj.innerHTML = firnumObj.innerHTML + addnum.innerHTML;
 //  		// alert("Get in Two else");
 //  	};
 // };
 //   function addNumThree(){
 //  	// alert("Get in addNumThree");
 //  	var firnumObj = document.getElementById("firstnum");
 //  	var addnum = document.getElementById("three");
 //  	// alert(typeof firnumObj);
 //  	var firnum = String(firnumObj.innerHTML);
 //  	// alert(firnum);
 //  	if(firnum == '0'){
 //  		firnumObj.innerHTML = addnum.innerHTML;
 //  		// alert("Get in Three if");
 //  	};
 //  	if(firnum != '0'&&firnum.length<6){
 //  		firnumObj.innerHTML = firnumObj.innerHTML + addnum.innerHTML;
 //  		// alert("Get in Three else");
 //  	};
 // };
 //   function addNumFour(){
 //  	// alert("Get in addNumFour");
 //  	var firnumObj = document.getElementById("firstnum");
 //  	var addnum = document.getElementById("four");
 //  	// alert(typeof firnumObj);
 //  	var firnum = String(firnumObj.innerHTML);
 //  	// alert(firnum);
 //  	if(firnum == '0'){
 //  		firnumObj.innerHTML = addnum.innerHTML;
 //  		// alert("Get in Four if");
 //  	};
 //  	if(firnum != '0'&&firnum.length<6){
 //  		firnumObj.innerHTML = firnumObj.innerHTML + addnum.innerHTML;
 //  		// alert("Get in Four else");
 //  	};
 // };
 //   function addNumFive(){
 //  	// alert("Get in addNumOne");
 //  	var firnumObj = document.getElementById("firstnum");
 //  	var addnum = document.getElementById("five");
 //  	// alert(typeof firnumObj);
 //  	var firnum = String(firnumObj.innerHTML);
 //  	// alert(firnum);
 //  	if(firnum == '0'){
 //  		firnumObj.innerHTML = addnum.innerHTML;
 //  		// alert("Get in One if");
 //  	};
 //  	if(firnum != '0'&&firnum.length<6){
 //  		firnumObj.innerHTML = firnumObj.innerHTML + addnum.innerHTML;
 //  		// alert("Get in One else");
 //  	};
 // };
 //   function addNumSix(){
 //  	// alert("Get in addNumOne");
 //  	var firnumObj = document.getElementById("firstnum");
 //  	var addnum = document.getElementById("six");
 //  	// alert(typeof firnumObj);
 //  	var firnum = String(firnumObj.innerHTML);
 //  	// alert(firnum);
 //  	if(firnum == '0'){
 //  		firnumObj.innerHTML = addnum.innerHTML;
 //  		// alert("Get in One if");
 //  	};
 //  	if(firnum != '0'&&firnum.length<6){
 //  		firnumObj.innerHTML = firnumObj.innerHTML + addnum.innerHTML;
 //  		// alert("Get in One else");
 //  	};
 // };
 //   function addNumSeven(){
 //  	// alert("Get in addNumOne");
 //  	var firnumObj = document.getElementById("firstnum");
 //  	var addnum = document.getElementById("seven");
 //  	// alert(typeof firnumObj);
 //  	var firnum = String(firnumObj.innerHTML);
 //  	// alert(firnum);
 //  	if(firnum == '0'){
 //  		firnumObj.innerHTML = addnum.innerHTML;
 //  		// alert("Get in One if");
 //  	};
 //  	if(firnum != '0'&&firnum.length<6){
 //  		firnumObj.innerHTML = firnumObj.innerHTML + addnum.innerHTML;
 //  		// alert("Get in One else");
 //  	};
 // };
 //   function addNumEight(){
 //  	// alert("Get in addNumOne");
 //  	var firnumObj = document.getElementById("firstnum");
 //  	var addnum = document.getElementById("eight");
 //  	// alert(typeof firnumObj);
 //  	var firnum = String(firnumObj.innerHTML);
 //  	// alert(firnum);
 //  	if(firnum == '0'){
 //  		firnumObj.innerHTML = addnum.innerHTML;
 //  		// alert("Get in One if");
 //  	};
 //  	if(firnum != '0'&&firnum.length<6){
 //  		firnumObj.innerHTML = firnumObj.innerHTML + addnum.innerHTML;
 //  		// alert("Get in One else");
 //  	};
 // };
 //   function addNumNine(){
 //  	// alert("Get in addNumOne");
 //  	var firnumObj = document.getElementById("firstnum");
 //  	var addnum = document.getElementById("nine");
 //  	// alert(typeof firnumObj);
 //  	var firnum = String(firnumObj.innerHTML);
 //  	// alert(firnum);
 //  	if(firnum == '0'){
 //  		firnumObj.innerHTML = addnum.innerHTML;
 //  		// alert("Get in One if");
 //  	};
 //  	if(firnum != '0'&&firnum.length<6){
 //  		firnumObj.innerHTML = firnumObj.innerHTML + addnum.innerHTML;
 //  		// alert("Get in One else");
 //  	};
 // };
 //   function addNumZero(){
 //  	// alert("Get in addNumOne");
 //  	var firnumObj = document.getElementById("firstnum");
 //  	var addnum = document.getElementById("zero");
 //  	// alert(typeof firnumObj);
 //  	var firnum = String(firnumObj.innerHTML);
 //  	// alert(firnum);
 //  	if(firnum == '0'){
 //  		firnumObj.innerHTML = addnum.innerHTML;
 //  		// alert("Get in One if");
 //  	};
 //  	if(firnum != '0'&&firnum.length<6){
 //  		firnumObj.innerHTML = firnumObj.innerHTML + addnum.innerHTML;
 //  		// alert("Get in One else");
 //  	};
 // };