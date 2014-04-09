
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

	var form0  = document.getElementById("instance2").getElementsByTagName("form")[0];
	var oInput = form0.getElementsByTagName("input");
	var oBtn1  = form0.getElementsByTagName("button")[0];

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
	var oL = document.getElementById("instance8").getElementsByTagName("li");
	var oMg = document.getElementById("msg");
	var oPi   = oMg.getElementsByTagName("p")[0];
	var oStr = oMg.getElementsByTagName("strong")[0];
	var oArra = [
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

	for(var i=0; i<oL.length; i++){
		oL[i].index = i;
		oL[i].onmouseover = function(){
			for(var x in oL){
				oL[x].className = "";	
				this.className = "now";
			}
				oPi.innerHTML = oArra[this.index];
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
	var time = null;

	oInput3.onclick = function(){
		this.className == "" ? (time = setInterval(updateTime,1000),updateTime()) : clearInterval(time);
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
			clearInterval(time);
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
	var oBoxs = document.getElementById("box");
	var oUl3 = oBoxs.getElementsByTagName("ul");
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
	
	oBoxs.onmouseover = function(){
		clearInterval(play);	
	}
	//鼠标离开自动播放
	oBoxs.onmouseout = function(){
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
	

	//各种数组方法实例
	var instance16 = document.getElementById("instance16");
	var oDiv = instance16.getElementsByTagName("div");
	var oInputs = instance16.getElementsByTagName("input");
	var i=0;
	var bS1 = bS2 = true;
	var aTmp = [];
	
	oInputs[0].onclick = function(){
		aTmp = getArray(oDiv[0].innerHTML);	
		bS1 ?
			(aTmp.shift(), this.value = this.value.replace("删除","添加"), bS1=false) :
			(aTmp.unshift("one(1)"), this.value = this.value.replace("添加","删除"), bS1=true);
		oDiv[0].innerHTML = aTmp.join();
	};

	oInputs[1].onclick = function(){
		aTmp = getArray(oDiv[0].innerHTML);	
		bS2 ?
			(aTmp.pop(), this.value = this.value.replace("删除","添加"), bS2=false) :
			(aTmp.push("ten(10)"), this.value = this.value.replace("添加","删除"), bS2=true);
		oDiv[0].innerHTML = aTmp.join();
	};

	oInputs[2].onclick = function(){
		aTmp = getArray(oDiv[1].innerHTML);	
		oDiv[1].innerHTML = aTmp.concat(aTmp).toString();
	};

	oInputs[3].onclick = function(){
		aTmp = getArray(oDiv[1].innerHTML);	
		aTmp.length = 5;
		oDiv[1].innerHTML = aTmp.join();
	};

	oInputs[4].onclick = function(){
		aTmp = ["red","yellow","green","black","white","brown"];	
		oDiv[2].innerHTML = aTmp.join();
	};

	oInputs[5].onclick = function(){
		aTmp = getArray(oDiv[2].innerHTML);	
		aTmp.splice(0,3);
		oDiv[2].innerHTML = aTmp.join();
	};

	oInputs[6].onclick = function(){
		aTmp = getArray(oDiv[2].innerHTML);	
		aTmp.splice(1,2);
		oDiv[2].innerHTML = aTmp.join();
	};

	oInputs[7].onclick = function(){
		aTmp = getArray(oDiv[2].innerHTML);	
		aTmp.splice(1,0,"orange","purple");
		oDiv[2].innerHTML = aTmp.join();
	};

	oInputs[8].onclick = function(){
		aTmp = getArray(oDiv[2].innerHTML);	
		aTmp.splice(1,2,"#090","#00f");
		oDiv[2].innerHTML = aTmp.join();
	};

	function getArray(str){
			aTmp.length = 0;
			str = str.split(",");
			for(var x in str)aTmp.push(str[x]);
			return aTmp;
	};

	//星级评分实例
	var instance18 = document.getElementById("instance18");
	var oUl = instance18.getElementsByTagName("ul")[0];
	var aLi = oUl.getElementsByTagName("li");
	var aSpan = instance18.getElementsByTagName("span")[1];
	var oP = instance18.getElementsByTagName("p")[0];
	var i = iScore = iStar = 0;
	var aMsg = [
		"很不满意|差得离谱",
		"不满意|部分破损，不满意",
		"一般|质量一般，没那么好",
		"满意|基本相符，挺满意的",
		"非常满意|质量非常好，完全一致"
	]
	for(i=1; i<=aLi.length; i++){
		aLi[i-1].index = i;
		aLi[i-1].onmouseover = function(){
			fnPoint(this.index);
			oP.style.display = "block";
			var oWidth = oUl.offsetWidth - 115 + this.index*this.offsetWidth;
			oP.style.left = oWidth + "px";
			oP.innerHTML = "<em><b>" + (this.index) + "</b>分 " + aMsg[this.index-1].match(/(.+)\|/)[1] + "</em>"
			+aMsg[this.index-1].match(/\|(.+)/)[1];
		};

		aLi[i-1].onmouseout = function(){
			fnPoint();
			oP.style.display = "none";
		};

		aLi[i-1].onclick = function(){
			iStar = this.index;	
			oP.style.display = "none";
			aSpan.innerHTML = "<strong>" +(this.index)+ "分</strong>(" + aMsg[this.index-1].match(/\|(.+)/)[1] +")";
		};
	};
	

	function fnPoint(iArg){
		iScore = iArg || iStar;
		for(var i=0; i<aLi.length; i++){
			i < iScore ? aLi[i].className = "on" : aLi[i].className ="";
		}
	};



/*
	//键盘控制实例
	var oBox = document.getElementById("boxs");
	var bLeft= bTop = bRight = bBottom = bCtrlKey = false;

	setInterval(function(){
		if(bLeft){
			oBox.style.left = oBox.offsetLeft - 10 + "px";	
		}else if(bRight){
			oBox.style.left = oBox.offsetLeft + 10 + "px";
		}else if(bTop){
			oBox.style.top  = oBox.offsetTop  - 10 + "px";
		}else if(bBottom){
			oBox.style.top  = oBox.offsetTop  + 10 + "px";
		}
		//防止溢出
		limit();
	},30);

	document.onkeydown = function(event){
		var event = event || window.event;	
		bCtrlKey = event.ctrlKey;

		switch(event.keyCode){
			case 37:
				bLeft = true;
				break;
			case 38:
				if(bCtrlKey){
					var oldWidth = oBox.offsetWidth;
					var oldHeight= oBox.offsetHeight;

					oBox.style.width = oldWidth*1.5 + "px";
					oBox.style.height= oldHeight*1.5 + "px";

					oBox.style.left = oBox.offsetLeft - (oBox.offsetWidth - oldWidth) / 2 + "px";
					oBox.style.top  = oBox.offsetTop  - (oBox.offsetHeight- oldHeight) / 2 + "px";
					
					break;
				}
				bTop = true;
				break;
			case 39:
				bRight = true;
				break;
			case 40:
				if(bCtrlKey){
					var oldWidth = oBox.offsetWidth;		
					var oldHeight= oBox.offsetHeight;

					oBox.style.width = oBox.offsetWidth*0.75 + "px";
					oBox.style.height= oBox.offsetHeight*0.75 + "px";

					oBox.style.left = oBox.offsetLeft - (oBox.offsetWidth - oldWidth) / 2 + "px";
					oBox.style.top  = oBox.offsetTop  - (oBox.offsetHeight - oldHeight) / 2 + "px";
					
					break;
				}
				bBottom = true;
				break;
			case 49:
				bCtrlKey && (oBox.style.background = "red");
				break;
			case 50:
				bCtrlKey && (oBox.style.background = "yellow");
				break;
			case 51:
				bCtrlKey && (oBox.style.background = "blue");
				break;
		}
		return false;
	};
	document.onkeyup = function(event){
		switch( (event || window.event).keyCode ){
			case 37:
				bLeft = false;
				break;
			case 38:
				bTop = false;
				break;
			case 39:
				bRight = false;
				break;
			case 40:
				bBottom = false;
				break;
		}
	};
	//防止溢出
	function limit(){
		var doc = [document.documentElement.offsetWidth,document.documentElement.offsetHeight];	
		//防止左侧溢出
		oBox.offsetLeft <= 0 && (oBox.style.left = 0 + "px");
		//防止顶部溢出
		oBox.offsetTop  <= 0 && (oBox.style.top  = 0 + "px");
		//防止右侧溢出
		doc[0] - oBox.offsetWidth <= oBox.offsetLeft && (oBox.style.left = doc[0]-oBox.offsetWidth + "px");
		//防止底部溢出
		doc[1] - oBox.offsetHeight<= oBox.offsetTop  && (oBox.style.top  = doc[1]-oBox.offsetHeight + "px");
	};
*/
	//拖拽特效实例
	

	var oId  = document.getElementById("instance20");
	var oBos = document.getElementById("bos");
	var oH2  = oBos.getElementsByTagName("h2")[0];
	var oA1  = oBos.getElementsByTagName("a")[0];
	var oSpn = oBos.getElementsByTagName("span");
	var diX  = diY = 0;
	var bDrag=false;
	var aPos = [{x:oBos.offsetLeft,y:oBos.offsetTop}];

	oH2.onmousedown = function(event){
		var event = event || window.event;	
		var offTop= getPos(oBos);
		bDrag = true;
		diX  = event.clientX - oBos.offsetLeft;
		diY  = event.clientY - oBos.offsetHeight;

		aPos.push({x:oBox.offsetLeft,y:oBox.offsetTop});

		this.setCapture && this.setCapture();
		console.log(event.pageY);

		return false;
	};

	oId.onmousemove = function(event){

		if(!bDrag) return;
		var event = event || window.event;
		var iL = event.clientX - diX;
		var iT = event.clientY - diY;
		var maxL = document.documentElement.clientWidth - oBos.offsetWidth;
		var maxT = document.documentElement.clientHeight- oBos.offsetHeight;

		iL = iL < 0 ? 0 : iL;
		iL = iL > maxL ? maxL : iL;

		iT = iT < 0 ? 0 : iT;
		iT = iT > maxT ? maxT : iT;

		oBos.style.marginTop = oBos.style.marginLeft = 0;
		oBos.style.left = iL + "px";
		oBos.style.top  = iT + "px";

		aPos.push({x:iL,y:iT});

		status();

		return false;

	};

	document.onmouseup = window.onblur = oH2.onlosecapture = function(){
		bDrag = false;	
		oH2.releaseCapture && oH2.releaseCapture();
		status();
	};

	oA1.onclick = function(){
		if(aPos.length == 1) return;	
		var tim = setInterval(function(){
			var oPos = aPos.pop();	
			oPos ? (oBos.style.left = oPos.x + "px" , oBos.style.display.top = oPos.y + "px",status()) : clearInterval(tim);
		},30);

		this.focus = false;
		return false;
	};

	oA1.onmousedown = function(event){
		event = event || window.event;	
		event.cancelBubble = true;
	};

	function status(){
		oSpn[0].innerHTML = bDrag;
		oSpn[1].innerHTML = oBos.offsetTop;
		oSpn[2].innerHTML = oBos.offsetLeft;
	};

	function getPos(ele){
		var offTop = ele.offsetTop;	
		if(ele.offsetParent != null) offTop += getPos(ele.offsetParent);
		return offTop;
	};

	console.log(getPos(oBos));
	

	status();


	//幻灯片缓冲实例
	(function(){

	var oOut = document.getElementById("out");
	var oLies= oOut.getElementsByTagName("ul")[0];
	var aLis = oLies.getElementsByTagName("li");
	var aIamges = oOut.getElementsByTagName("img");
	var tims = playTime = null;
	var index = i = 0;
	var bOrder = true;
	var aTp = [];
	var aBtns = null;
	
	for(i=0; i<aIamges.length; i++) aTp.push("<li>" + (i+1) + "</li>");

	var oCount = document.createElement("ul");
	oCount.className = "cou"; 
	oCount.innerHTML = aTp.join("");
	oOut.appendChild(oCount);
	aBtns = oOut.getElementsByTagName("ul")[1].getElementsByTagName("li");

	cutover();

	for(i=0; i<aBtns.length; i++){
		aBtns[i].index = i;	
		aBtns[i].onmouseover = function(){
			index = this.index;	
			cutover();
		}
	}

	function cutover(){
		for(i=0; i<aBtns.length; i++) aBtns[i].className ="";
		aBtns[index].className ="cur";
		startMove(-(index*aLis[0].offsetHeight));
	}

	function next(){
		bOrder ? index++ : index--;
		index <= 0 && (index = 0, bOrder=true);
		index >= aBtns.length - 1 && (index = aBtns.length -1, bOrder=false);
		cutover();
	}

	playTime = setInterval(next,3000);

	oOut.onmouseover = function(){
		clearInterval(playTime);	
	};
	oOut.onmouseout = function(){
		playTime = setInterval(next,3000);
	};

	function startMove(iTaget){
		clearInterval(tims);
		tims = setInterval(function(){
			doMove(iTaget);		
		},30);
	}

	function doMove(iTaget){
		var iSpeed = (iTaget - oLies.offsetTop) / 10;
		iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
		oLies.offsetTop == iTaget ? clearInterval(tims) : oLies.style.top = oLies.offsetTop + iSpeed + "px";
	}

	})();	


	
		var oIphone = document.getElementById("iphone");	
		var oLock   = document.getElementById("lock");
		var oBtn    = oLock.getElementsByTagName("span")[0];
		var disX    = 0;
		var maxL    = oLock.clientWidth - oBtn.offsetWidth;
		var oBg     = document.createElement("img");	
		oBg.src     = "./images/2.jpg";

		oBtn.onmousedown = function(event){
			var event = event || window.event;
			disX = event.clientX - this.offsetLeft;

			document.onmousemove = function(e){
				var e = e || window.event;	
				var l = e.clientX - disX;

				l < 0 && (l=0);
				l > maxL && (l=maxL);

				oBtn.style.left = l + "px";

				oBtn.offsetLeft == maxL && (oIphone.style.background = "url(" + oBg.src + ")",oLock.style.display = "none");
				return false;
			};

			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup = null;
				oBtn.releaseCapture && oBtn.releaseCapture();

				oBtn.offsetLeft > maxL / 2 ?
					startMove(maxL,function(){
					oIphone.style.background = "url(" + oBg.src + ")";
					oLock.style.display = "none";
				}) : startMove(0)
			};

			this.setCapture && this.setCapture();
			return false;
		};


		function startMove(iTaget,onEnd){
			clearInterval(oBtn.timer);
			oBtn.timer = setInterval(function(){
				doMove(iTaget,onEnd);	
			},30);
		};

		function doMove (iTaget,onEnd){
			var iSpeed = (iTaget - oBtn.offsetLeft) / 5;	
			iSpeed  = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			iTaget == oBtn.offsetLeft ? (clearInterval(timer),onEnd && onEnd()) : oBtn.style.left = oBtn.offsetLeft+iSpeed+"px";
		}
	
			

};

	//封装兼容性添加移除实际		
var EventUtil = {
	addHander: function(oElement,sEvent,fnHander){
		oElement.addEventListener ? 
			oElement.addEventListener(sEvent,fnHander,false) :
			oElement.attachEvent("on"+sEvent,fuHaner);
	},
	removeHander: function(oElement,sEvent,fnHander){
		oElement.removeEventListener ?	
			oElement.removeEventListener(sEvent,fnHander,false) :
			oElement.detachEvent("on"+sEvent,fuHander);
	},
	addLoadHander: function(fnHander){
		this.addHander(window,"load",fnHander);	
	}
};
EventUtil.addLoadHander(function(){
	var aBtn = document.getElementById("instance17").getElementsByTagName("input");

	EventUtil.addHander(aBtn[1],"click",function(){
		EventUtil.addHander(aBtn[0],"click",fnHander);	
		aBtn[0].value = "可以点击了";
	});

	EventUtil.addHander(aBtn[2],"click",function(){
		EventUtil.removeHander(aBtn[0],"click",fnHander);
		aBtn[0].value = "没有用的按钮";
	});

	function fnHander(){
		alert("事件绑定成功");	
	};
});



var get = {
	byId: function(id){
		return typeof id === "string" ? document.getElementById(id) : id;	
	},
	byClass: function(sClass,oParent){
		var aClass = [];	
		var reClass = new RegExp("(^|)" + sClass + "(|$)");
		var aElem = this.byTagName("*",oParent);
		for(var i=0; i<aElem.length; i++) reClass.test(aElem[i].className) && aClass.push(aElem[i]);
		return aClass;
	},
	byTagName: function(elem,obj){
		return (obj || document).getElementsByTagName(elem);
	}
};
function css(obj,attr,value){
	switch(arguments.length){
		case 2:
			if(typeof arguments[1] == "object"){
				for(var i in attr) i == "opacity" ? (obj.style["filter"] = "alpha(opacity=" + attr[i] + ")" ,
					obj.style[i] = attr[i]/100) : obj.style[i] = attr[i];
			}else{
				return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,null)[attr];
			}
			break;

		case 3:
			attr == "opacity" ? (obj.style["filter"] = "alpha(opacity=" + value + ")", obj.style[attr] = value / 100) : 
			obj.style[attr] = value;
			break;

	}
};
EventUtil.addLoadHander(function(){

	var oMsgBox = get.byId("msgBox");	
	var oUserName = get.byId("userName");
	var oConBox = get.byId("conBox");
	var osendBtn = get.byId("senBtn");
	var oMaxNum = get.byClass("maxNum")[0];
	var oContext = get.byClass("countTxt")[0];
	var oLists = get.byId("tell");
	var oUl = get.byTagName("ul",oMsgBox)[0];
	var aLi = get.byTagName("li",oLists);
	var	aFtxt = get.byClass("f-text",oMsgBox) 
	var aImg = get.byTagName("img",get.byId("face"));
	var bSend = false;
	var timer = null;
	var oTmp = "";
	var i = 0;
	var maxNum = 140;

	//禁止表单提交
	EventUtil.addHander(get.byTagName("form",oMsgBox)[0],"submit",function(){return false});

	//为发送按钮绑定发送事件
	EventUtil.addHander(osendBtn,"click",fnSend);

	//ctrl+enter快捷键发送
	EventUtil.addHander(document,"keyup",function(event){
		event = event || window.event;	
		event.ctrlKey && event.keyCode == 13 && fnSend();
	});

	//发送事件
	function fnSend(){
		var reg = /^\s*$/g;	
		if(reg.test(oUserName.value)){
			alert("请填写名称");	
			oUserName.focus();
		}else if(!/^[u4e00-\u9fa5\w]{2,8}$/g.test(oUserName.value)){
			alert("名称为2-8个字符");	
			oUserName.focus();
		}else if(reg.test(oConBox.value)){
			alert("说点什么吧")	
			oConBox.focus();
		}else if(!bSend){
			alert("字数超过限制");
			oConBox.focus();
		}else {
			var oLi = document.createElement("li");
			var oDate = new Date();

			oLi.innerHTML = "<div class=\"userPic\"><img src=\"" + get.byClass("curren",get.byId("face"))[0].src + "\"></div>\
				<div class= \"contents\">\
					<div class= \"userName\"><a href=\"javascript:;\">" + oUserName.value + "</a>:</div>\
					<div class=\"msgInfo\">" + oConBox.value.replace(/<[^>]*>|&nbsp;/ig,"") + "</div>\
					<div class=\"times\"><span>" + format(oDate.getMonth()+1) + "\u6708" + format(oDate.getDate()) + "\u65e6" +
						format(oDate.getHours())+ ":" +format(oDate.getMinutes()) + "</span><a class=\"del\" href=\"javascript:;\">\
					\u5220\u9664</a></div>\
				</div>";

			//插入新的li元素
			aLi.length ? oUl.insertBefore(oLi,aLi[0]) : oUl.appendChild(oLi);
			
			//重置表单
			get.byTagName("form",oMsgBox)[0].reset();

			//facn元素图片减淡效果
			for(i=0; i<aImg.length; i++){
				aImg[i].className = "";	
			}
			aImg[0].className = "curren";

			//新的li元素插入时的效果，先循环增加高度，再循环增加透明度
			var iHeight = oLi.clientHeight - parseFloat(css(oLi,"paddingTop")) - parseFloat(css(oLi,"paddingBottom"));
			var alpha = count = 0;
			css(oLi,{"opacity":"0","height":"0"});
			tir = setInterval(function(){
					css(oLi,{"display":"block","opacity":"0","height":(count += 8)+"px"});
					if(count > iHeight){
						clearInterval(tir);
						css(oLi,"height",iHeight + "px");
						tir = setInterval(function(){
							css(oLi,"opacity",(alpha += 10));	
							alpha > 100 && (clearInterval(tir),css(oLi,"opacity",100));
						},300);
					}
			},300);

			//为新添加的li元素添加鼠标划过/移除事件
			liHover();

			//删除按钮
			delLi();
		}
	};

	//绑定事件，判断字符输入
	EventUtil.addHander(oConBox,"keyup",confine);
	EventUtil.addHander(oConBox,"focus",confine);
	EventUtil.addHander(oConBox,"change",confine);

	//输入字符限制
	function confine(){
		var iLen = 0;	
		for (i=0; i< oConBox.value.length; i++) iLen += /[^\x00-\xff]/g.test(oConBox.value.charAt(i)) ? 2 : 1;
		console.log(iLen);
		oMaxNum.innerHTML = Math.abs(maxNum - Math.floor(iLen));
		maxNum - Math.floor(iLen) >= 0 ? (css(oMaxNum,"color",""),oContext.innerHTML = "还能输入",bSend = true ) :
			(css(oMaxNum,"color","#f60"),oContext.innerHTML = "已超过",bSend = false);
	};
	confine();

	//li元素在鼠标划过和离开时的效果函数
	function liHover(){
		for(i=0; i<aLi.length; i++){
			EventUtil.addHander(aLi[i],"mouseover",function(event){
				oTmp = get.byClass("times",this)[0];
				var aA = get.byTagName("a",oTmp);
				if(!aA.length){
					var oA = document.createElement("a");	
					oA.innerHTML = "删除";
					oA.className = "del";
					oA.href = "javascript:;";
					oTmp.appendChild(oA);
				}else{
					aA[0].style.display = "block";	
				}
			});		
			//鼠标划出效果
			EventUtil.addHander(aLi[i],"mouseout",function(){
				this.className = "";	
				var oA = get.byTagName("a",get.byClass("times",this)[0])[0];
				oA.style.display = "none";
			});
		}	
	};
	liHover();

		
	//删除功能
	function delLi(){
		var aA = get.byClass("del",oUl);	
	
		for(i=0; i<aA.length; i++){
			aA[i].onclick = function(){
				var oParent = this.parentNode.parentNode.parentNode;	
				var alpha = 100;
				var iHeight = oParent.offsetHeight;
				tir = setInterval(function(){
					css(oParent,"opacity",(alpha -=10));
					if(alpha < 0){
						clearInterval(tir);	
						tir = setInterval(function(){
							iHeight -= 10;
							iHeight < 0 && (iHeight = 0);
							css(oParent,"height",iHeight + "px");
							iHeight == 0 && (clearInterval(tir),oUl.removeChild(oParent));
						},30);
					}
				},30);
				this.onclick = null;
			}	
		}
	};
	delLi();

	//提交按钮效果
	EventUtil.addHander(osendBtn,"mouseover",function(){this.className = "hove"});
	EventUtil.addHander(osendBtn,"mouseout",function(){this.className = ""});

	//输入框焦点样式加载
	for(i=0; i< aFtxt.length; i++){
		EventUtil.addHander(aFtxt[i],"focus",function(){this.className="actv"});
		EventUtil.addHander(aFtxt[i],"blur",function(){this.className=""});
	}

	function format(str){
		return str.toString().replace(/^(\d)$/,"0$1");
	};
	
	//头像face元素效果
	for(i=0; i<aImg.length; i++){
		aImg[i].onmouseover = function(){
			this.className += " hov";	
		};	
		aImg[i].onmouseout = function(){
			this.className = this.className.replace(/\s?hov/,"");	
		};
		aImg[i].onclick = function(){

			for(i=0; i<aImg.length; i++){
				aImg[i].className = "";	
			}
			this.className = "curren";
		};

	};

	(function() {
		var get = {
			byId: function(id) {
				return typeof id === "string" ? document.getElementById(id) : id;
			},	
			byClass: function(sClass,oParent) {
				var aClass = [],
					reClass = new RegExp("(^| )" + sClass + "( |$)"),
					aElem = this.byTagName("*",oParent);
				for( var i=0; i<aElem.length; i++) reClass.test(aElem[i].className) && aClass.push(aElem[i]);
				return aClass;
			},	
			byTagName: function(elem,obj){
				return (obj || document).getElementsByTagName(elem);	
			}
		}	

		function getStyle(obj,attr) {
			return parseFloat(obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,null)[attr]);
		};

		var oBox = get.byId("instance24"),
			
			oLists = get.byClass("lists",oBox)[0],
			oUl = get.byTagName("ul",oBox)[0],
			aLi = get.byTagName("li",oBox),
			
			oScorllBar = get.byClass("scorllBar",oBox)[0],
			oBarL = get.byClass("barL",oScorllBar)[0],
			oBarM = get.byClass("barM",oScorllBar)[0],
			oBar  = get.byClass("bar",oBarM)[0],
			oBarR = get.byClass("barR",oScorllBar)[0],

			maxL = oBarM.offsetWidth - oBar.offsetWidth,
			iMarginRight = getStyle(aLi[0],"marginRight"),
			timer = null,
			iScale = 0, disX = 0, i=0;
			
			oUl.style.width = (aLi[0].offsetWidth + iMarginRight) * aLi.length + "px";

			oBar.onmousedown = function(event) {
				var event = event || window.event;
				disX = event.clientX - oBar.offsetLeft;
				document.onmousemove = function(event) {
					var event = event || window.event;
					var iL = event.clientX - disX;
					iL <= 0 && (iL = 0);
					iL >= maxL && (iL = maxL);
					oBar.style.left = iL + "px";
					iScale = iL / maxL;
					return false;
				};
				
				document.onmouseup = function() {
					startMove(oUl,parseInt( (oLists.offsetWidth + iMarginRight - oUl.offsetWidth)*iScale) );
					isStop();
					document.onmousemove = null;
					document.onmouseup = null;
				};
				return false;
			};

			oBar.onclick = function(event) {
				(event || window.event).cancelBubble = true;	
			};

			oBarL.onmouseover = oBarR.onmouseover = document.onkeydown = function(event) {
				clearInterval(timer);	
				var event = event || window.event;
				var iSpeed = 0;
				if(this === oBarR || event.keyCode === 39) {
					iSpeed = 5;	
				}else if (this === oBarL || event.keyCode === 37) {
					iSpeed = -5;	
				}
				timer = setInterval(function() {
					togetherMove(getStyle(oBar,"left") + iSpeed,1)	
				},30)
			};

			oBarL.onmouseout = oBarR.onmouseout = document.onkeyup = function() {
				clearInterval(timer);
			};

			oBarM.onclick = function(event) {
				var iTarget = (event || window.event).clientX - oBox.offsetLeft - this.offsetLeft - oBar.offsetWidth / 2;
				togetherMove(iTarget);
			};

			oBox.onmouseover = function(event) {
				event = event || window.event;	
				function mouseWheel(event) {
					var delta = event.wheelDelta ? event.wheelDelta : -event.detail*40;	
					var iTarget = delta > 0 ? -50 : 50;
					togetherMove(oBar.offsetLeft + iTarget);
				}
				addHandler(this,"mousewheel",mouseWheel);
				addHandler(this,"DOMMouseScroll",mouseWheel);
			};

			function togetherMove(iTarget,buffer) {
				if(iTarget <= 0) {
					timer && clearInterval(timer);	
					iTarget = 0;
				}else if (iTarget >= maxL) {
					timer && clearInterval(timer);	
					iTarget = maxL;
				}
				iScale = iTarget / maxL;
				startMove(oUl,parseInt((oLists.offsetWidth + iMarginRight - oUl.offsetWidth)*iScale),function(){isStop()},buffer);
				startMove(oBar,iTarget,function(){isStop()},buffer);
			};

			function isStop() {
				oBarL.className = "barL";
				oBarR.className = "barR";
				switch(oBar.offsetLeft) {
					case 0 :
						/(^|\s)barLStop(\s|$)/.test(oBarL.className) || (oBarL.className += " barLStop");
						break;
					case maxL:
						/(^|\s)barRStop(\s|$)/.test(oBarR.className) || (oBarR.className += " barRStop");
				}
			}
			isStop();

		function addHandler(element, type, handdler) {
			return element.addEventListener?element.addEventListener(type,handdler,false) : element.attachEvent("on"+type,handdler)
		};
		function startMove(obj,iTarget,fnEnd,buffer) {
			clearInterval(obj.timer);	
			obj.timer = setInterval(function() {
				doMove(obj,iTarget,fnEnd,buffer)	
			},25);
		};
		function doMove(obj,iTarget,fnEnd,buffer) {
			var iLeft = getStyle(obj,"left");
			var iSpeed = (iTarget - iLeft) / (buffer || 5);
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			iSpeed === iTarget ? (clearInterval(obj.timer), fnEnd && fnEnd()) : obj.style.left = iLeft + iSpeed + "px";
		};
	})()

});

