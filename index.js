var changeStyle  = function(elem,attr,value){
	elem.style[attr] = value;
};
window.onload = function(){
	//控制div元素
	var oBtn  = document.getElementById("outer").getElementsByTagName("input");
	var oInner= document.getElementById("inner");
	var oAttr = ["width","height","background","display","display"];
	var oVal  = ["200px","200px","red","none","block"];

	for(var i=0,len=oBtn.length; i<len; i++){
		oBtn[i].index = i;
		oBtn[i].onclick = function(){
			this.index == oBtn.length-1 && (oInner.style.cssText = "");
			changeStyle(oInner,oAttr[this.index],oVal[this.index]);
		}
		oBtn[i].onmouseover = function(){
			oBtn[this.index].className = "hover";	
		}
		oBtn[i].onmouseout = function(){
			oBtn[this.index].className = "";	
		}
	};

	//设置页面背景颜色
	var oLink = document.getElementsByTagName("link")[1];
	var oSkin = document.getElementById("skin").getElementsByTagName("li");

	for(var i=0; i<oSkin.length; i++){
		oSkin[i].onclick = function(){
			for(var x in oSkin){
				oSkin[x].className = "";	
			}
			this.className = "current";
			oLink["href"] ="style/"+ this.id + ".css";
		}
	};

	//传递参数

	var oInput = document.forms[0].getElementsByTagName("input");
	var oBtn1  = document.forms[0].getElementsByTagName("button")[0];

	var myFun = function(a,b){
		console.log(a.value);	
		console.log(b.value);
	}
	
	oBtn1.onclick = function(){
		myFun(oInput[0],oInput[1]);	
	}

	for (var i=0; i<oInput.length; i++){

		oInput[i].onfocus = function(){
			this.className = "high";	
		};
		oInput[i].onblur = function(){
			this.className = "";
		};
	}

	var oTips = document.forms[0].getElementsByTagName("p")[0];
	var oLabel = document.forms[0].getElementsByTagName("label")[0];
	oLabel.onmouseover = function(){
		oTips.style.display = "block";	
	}
	oLabel.onmouseout = function(){
		oTips.style.display = "none";	
	}

	//输入法实例	
	var oBtn2 = document.getElementById("instance4").getElementsByTagName("button")[0];
	var oItem = document.getElementById("item");
	var oList = oItem.getElementsByTagName("li");
	var oClose= document.getElementById("close");
	var style = oItem.style;
	oBtn2.onclick = function(){
		style.display = style.display == "block" ? "none" :"block";
	};
	oClose.onclick = function(){
		style.display = "none";	
	}
	for(var i=0; i<oList.length; i++){
		oList[i].onclick = function(){
			console.log(this.innerHTML);	
		}	
	}

	//数字求和实例
	var oBtn3 = document.getElementById("instance5").getElementsByTagName("button")[0];
	var oInput1 = document.getElementById("instance5").getElementsByTagName("input")[0];
	var oStrong = document.getElementById("instance5").getElementsByTagName("strong")[0];

	oInput1.onkeyup = function(){
		this.value = this.value.replace(/[^(\d)|(,)]/,"");
	}
	oBtn3.onclick = function(){
		var sum = 0;
		var oInput1 = document.getElementById("instance5").getElementsByTagName("input")[0].value.split(",");
		for(var i in oInput1){
			sum += parseInt(oInput1[i]);	
		}
		oStrong.innerHTML = sum;
	}
	
	var oLay = document.getElementById("overlay");
	var oDailog = document.getElementById("dailog");
	var oBtn4 = document.getElementById("instance6").getElementsByTagName("button")[0];
	var oClose1 = document.getElementById("dailog").getElementsByTagName("span")[0];

	oBtn4.onclick = function(){
		oLay.style.display = "block";	
		oDailog.style.display = "block";
	}

	oClose1.onclick = function(){
		oLay.style.display = "none";	
		oDailog.style.display = "none";
	}

	//简易选项卡实例
	var oLi = document.getElementById("tab").getElementsByTagName("li");
	var oUl = document.getElementById("content").getElementsByTagName("ul");

	for(var i=0; i<oLi.length; i++){
		oLi[i].index = i;	
		oLi[i].onmouseover = function(){
			for(var x in oLi){
				oLi[x].className = "";
				this.className = "active";
			}
			for(var n=0; n<oUl.length; n++){
				oUl[n].style.display = "none";			
				oUl[this.index].style.display = "block";
			}
				
		}
	};

	//简单日历实例
	var oLis = document.getElementById("instance8").getElementsByTagName("li");
	var oMsg = document.getElementById("msg");
	var oP   = oMsg.getElementsByTagName("p")[0];
	var oStr = oMsg.getElementsByTagName("strong")[0];
	var oArray = [
		"元旦：1月1日至3日放假三天。",
		"春节：2月2日至8日放假7天。",
		"妇女节：3月8日妇女节，与我无关。",
		"清明节：4月3日至5日放假3天",
		"劳动节：4月30日至5月2日放假3天。",
		"端午节：6月4日至6日放假3天。",
		"小暑：7月7日小暑。不放假。",
		"七夕节：8月6日七夕节。不放假。",
		"中秋节：9月10日至12日放假3天。",
		"国庆节：10月1日至7日放假7天。",
		"立冬：11月8日立冬。不放假。",
		"艾滋病日:12月1日<br />废除奴隶制国际日:12月2日。"
	];

	for(var i=0; i<oLis.length; i++){
		oLis[i].index = i;
		oLis[i].onmouseover = function(){
			for(var x in oLis){
				oLis[x].className = "";	
				this.className = "now";
			}
				oP.innerHTML = oArray[this.index];
				oStr.innerHTML = this.index + 1;
				
		}
	};
	
	//单一按钮显示，隐藏列表收缩展开实例
	var oH3 = document.getElementById("instance9").getElementsByTagName("h3")[0];
	var oUl1= document.getElementById("instance9").getElementsByTagName("ul")[0];
	
	oH3.onclick = function(){
		var style = oUl1.style;
		style.display = style.display == "none" ? "block" : "none";
	};

	//修改图片路径实例
	var oImg = document.getElementById("instance10").getElementsByTagName("img");
	var oDiv = document.getElementById("first").getElementsByTagName("div")[0];
	
	//y有点问题，后面再来解决					
	for(var i=0; i<oImg.length; i++){
		oImg[i].onmouseover = function(){
			var img = new Image();	
			img.src = oImg[0].src = this.src;
			oImg[0].style.opacity = 0;
			oDiv.style.display = "block";
			img.complete ? oDiv.style.display="none" : (oImg[0].onload = function(){oDiv.style.display = "none"});
		}	
	};

	
	//复选框选择实例
	var oA = document.getElementById("instance11").getElementsByTagName("a")[0];
	var oInput2 = document.getElementById("instance11").getElementsByTagName("input");
	var oLabel1 = document.getElementById("instance11").getElementsByTagName("label")[0];

	var isCheckAll = function(){
		for(var i=1,n=0; i<oInput2.length; i++){

			if(oInput2[i].checked){
				n++;	
			}
		}
		oInput2[0].checked = (n == oInput2.length-1);
		oLabel1.innerHTML = (oInput2[0].checked ? "全不选" : "全选");
	};
	//全选/全不选
	oInput2[0].onclick = function(){
		for(var i=1; i<oInput2.length; i++){
			oInput2[i].checked = this.checked;
		}	
		isCheckAll();
	};
	//反选
	oA.onclick = function(){
		for(var i=1; i<oInput2.length; i++){
			oInput2[i].checked = !oInput2[i].checked;	
		}	
		isCheckAll();
	};
	//根据复选个数更新全选状态框
	for(var i=1; i<oInput2.length; i++){
		oInput2[i].onclick = function(){
			isCheckAll();	
		}	
	};

	
	//简易时钟实例
	var oClock = document.getElementById("instance12");
	var oSpan  = oClock.getElementsByTagName("span");

	setInterval(getTimes,1000);
	getTimes();

	function getTimes(){
		var oDate = new Date();	
		oSpan[0].innerHTML = format(oDate.getHours());
		oSpan[2].innerHTML = format(oDate.getMinutes());
		oSpan[4].innerHTML = format(oDate.getSeconds());
	}
	function format(a){
		return a.toString().replace(/^(\d)$/,"0$1");	
	}

	//倒数计时器实例
	var oClock1 = document.getElementById("instance13");
	var oInput3 = oClock1.getElementsByTagName("input")[0];
	var timer = null;

	oInput3.onclick = function(){
		this.className == "" ? (timer = setInterval(updateTime,1000),updateTime()) : clearInterval(timer);
		this.className = this.className == '' ? "cancel" : '';
		this.value = this.value == '开始' ? "取消" : '开始';
	}
	function format(a){
		return a.toString().replace(/^(\d)$/,'0$1');
	}	
	function updateTime(){
		var oSpan1 = oClock1.getElementsByTagName("span");	
		var oRemain= oSpan1[0].innerHTML.replace(/^0/,"")*60 + parseInt(oSpan1[1].innerHTML.replace(/^0/,""));
		if(oRemain <= 0){
			clearInterval(timer);
			return;
		}
		oRemain--;
		oSpan1[0].innerHTML = format(parseInt(oRemain / 60));
		oRemain %= 60;
		oSpan1[1].innerHTML = format(parseInt(oRemain));
	}


	//nav实例	
	var get = {
		byId: function(id){
			return document.getElementById(id);	
		},	
		byTagName: function(elem,obj){
			return (obj || document).getElementsByTagName(elem);	
		},
		byClass: function(sClass,oParent){
			var aClass = [];	
			var teClass= new RegExp("(^| )" + sClass +"( |$)");
			var aElems = this.byTagName("*",oParent);
			for(var i=0,len=aElems.length; i<len; i++){
				if(teClass.test(aElems[i].className)){
					aClass.push(aElems[i]);	
				}
			return aClass;
			}
		}
	};

	var oInstan = get.byId("instance14");
	var oNav = get.byClass("nav",oInstan)[0];
	var oUl2 = oNav.childNodes[1];
	var aSubNav = get.byClass("subnav",oNav);
	var	oSubNav = timer = null; 
	var i=3;
	
	for(i; i<oUl2.childNodes.length; i++){
		if(oUl2.childNodes[i].nodeType == 1){

		oUl2.childNodes[i].onmouseover = function(){

			for(var i=0; i<aSubNav[i]; i++){
				aSubNav[i].style.display = "none";	
			}	

			oSubNav = get.byTagName("ul",this)[0];
			oSubNav.style.display = "block";
		};

		oUl2.childNodes[i].onmouseout = function(){
			oSubNav.style.display = "none";			
		}

		}
	};

	//slider实例
	var oBox = document.getElementById("box");
	var oUl3 = oBox.getElementsByTagName("ul");
	var oImg1= oUl3[0].getElementsByTagName("li");
	var oNum = oUl3[1].getElementsByTagName("li");
	var timer = paly = null;
	var i = index = 0;
	var oOrder = true;

	//图片切换效果，淡入淡出
	function show(a){
		index = a;
		var alpha = 0;
		for(i=0; i<oNum.length; i++){
			oNum[i].className = "";	
			oNum[index].className = "cure";
			clearInterval(timer);

		}
		for(i=0 ; i<oImg1.length; i++){
			oImg1[i].style.opacity = 0;	
			oImg1[i].style.filter = "alpha(opacity=0)";
		}
		
		timer = setInterval(function(){
			alpha += 2;	
			if( alpha < 100){
				oImg1[index].style.opacity = alpha / 100;
				oImg1[index].style.filter  = "alpha(opacity = " + alpha +")";
			}else if (alpha >= 100){
				alpha = 100;	
				clearInterval(timer);
			};
		},20);
	};

	//切换按钮
	for(i=0; i<oNum.length; i++){
		oNum[i].index = i;	
		oNum[i].onmouseover = function(){
			show(this.index);
		}
	}

	//鼠标划过停止播放
	
	oBox.onmouseover = function(){
		clearInterval(play);	
	}
	//鼠标离开自动播放
	oBox.onmouseout = function(){
		autoPlay();
	}
	//自动播放
	function autoPlay() {
		play = setInterval(function(){
			oOrder ? index++ : index--;
			//倒序播放	
			index >= oImg1.length && (index = oImg1.length-2,oOrder=false);
			//顺序播放	
			index <= 0 && (index = 0, oOrder=true);
			show(index);
		},2000);	
	}
	autoPlay();


};
