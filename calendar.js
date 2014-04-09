function Calender(id,inputName) {
	this.id = document.getElementById(id);	
	this.input = document.getElementById(inputName);
}

Calender.prototype.init = function() {
	_self = this;

	_self.beginYear = 1900;
	_self.endYear = 2051;

	_self.createTable();

	_self.calenderBox = document.getElementById('calenderBox');
	_self.ca_week = document.getElementById('ca_week');
	_self.ca_days = document.getElementById('ca_days');

	_self.optionsOfYears  = document.getElementById('ca_select_year');
	_self.optionsOfMouth = document.getElementById('ca_select_mouth');


	_self.optionsOfYears.onchange = function() {_self.fillTableBySelect(this)};
	_self.optionsOfMouth.onchange = function() {_self.fillTableBySelect(this)};

	_self.goNext();
	_self.goPrev();

	_self.getPosition(_self.input);

	_self.getThisDate(_self.input);
}
/*获取当前年份*/
Calender.prototype.getCurrentYear = function() {
	return new Date().getFullYear() || new Date().getYear();	
}

/*获取当前月份*/
Calender.prototype.getCurrentMouth = function() {
	return new Date().getMonth() + 1;	
}

/*获取当前日数*/
Calender.prototype.getCurrentDay = function() {
	return new Date().getDate();	
}

/*获取每月对应的天数 */
Calender.prototype.getDaysInMouth = function(year,mouth) {
	return [31,( !(year % 4) && ( (year % 100) || !(year % 400) ) ) ? 29:28, 31,30,31,30,31,31,30,31,30,31][mouth];	
}

/*创建日历并初始化*/
Calender.prototype.createTable = function() {

	var calenderNav = '';	
	calenderNav += '<div class=\"calenderNav\">';
	calenderNav += '<a id=\"ca_prev_year\">&#60;</a>';
	calenderNav += '<a id=\"ca_prev_mouth\">&#60;&#60;</a>';
	calenderNav += '<select id=\"ca_select_year\"></select>';
	calenderNav += '<select id=\"ca_select_mouth\"></select>';
	calenderNav += '<a id=\"ca_next_mouth\">&#62;&#62;</a>';
	calenderNav += '<a id=\"ca_next_year\">&#62;</a>';
	calenderNav += '</div>';

	var calenderTable = '';
	calenderTable += '<table id=\"ca_table\">';
	calenderTable += '	<thead id=\"ca_week\">';
	calenderTable += '		<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>';
	calenderTable += '	</thead>';
	calenderTable += '	<tbody id=\"ca_days\">'

	for(var i = 0; i < 6; i++) {
		calenderTable += '<tr>';	
		for(var j = 0; j < 7; j++) {
			switch(j) {
				case 0 : calenderTable += '<td class=\"sunday\"></td>'; break;
				case 6 : calenderTable += '<td class=\"saterday\"></td>'; break;
				default: calenderTable += '<td class=\"nomal\"></td>'; break;
			}
		}
		calenderTable += '</tr>';
	}
	calenderTable += '</tbody></table>';
	calenderBox = '<div id=\"calenderBox\">'+calenderNav + calenderTable+'<div>'
	this.id.innerHTML = calenderBox;

	/*填充日历头部的选项卡和每一天*/
	var ca_week = document.getElementById('ca_week');
	var ca_days = document.getElementById('ca_days');

	var year  = this.getCurrentYear();
	var mouth = this.getCurrentMouth();
	var day   = this.getCurrentDay();

	var optionsOfYears  = document.getElementById('ca_select_year');
	var optionsOfMouth = document.getElementById('ca_select_mouth');


	/*填充头部年份选项卡*/
	for(var i = this.beginYear; i < this.endYear; i++) {
		optionsOfYears.options.add( new Option(i,i) );
	}

	/*填充头部月份选项卡*/	
	var mouthArray = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
	for(var i = 0; i < 12; i++) {
		optionsOfMouth.options.add( new Option(mouthArray[i],i) );	
	}

	/*设置头部选项卡为当前年份和月份*/
	optionsOfYears.options[year-this.beginYear].selected = true;
	optionsOfMouth.options[mouth-1].selected = true;

	/*填充当前月份额每一天*/
	this.fillTable(year,mouth-1);
	
}

/*清空日历的每一天*/
Calender.prototype.clearTable  = function() {
	var allTables = ca_days.getElementsByTagName('td');
	for(var i = 0; i < allTables.length; i++) {
		allTables[i].innerHTML = "";	
	}		
}

/*填充日历*/
Calender.prototype.fillTable = function(year,mouth) {

	this.clearTable();

	var fristDayOfMouth = new Date(year,mouth,1).getDay();
	var daysInThisMouth = this.getDaysInMouth(year,mouth);


	ca_days.getElementsByTagName('td')[fristDayOfMouth].innerHTML = 1;
	var remainDay = 1;
	for(var i = fristDayOfMouth+1; i < daysInThisMouth + fristDayOfMouth; i++) {
		remainDay ++;
		ca_days.getElementsByTagName('td')[i].innerHTML = remainDay;		
	}
	_self.addStyle();

	/*为当前日期添加id以便添加样式*/
	var curDay = this.getCurrentDay();
	var curMou = this.getCurrentMouth(); 
	var curYer = this.getCurrentYear();

	var optionsOfYears = document.getElementById('ca_select_year')
	var optionsOfMouth = document.getElementById('ca_select_mouth')

	var selYer = optionsOfYears.options[optionsOfYears.selectedIndex].value;
	var selMou = optionsOfMouth.options[optionsOfMouth.selectedIndex].value;

	if(curYer == selYer && (curMou-1) == selMou && curDay){
		ca_days.getElementsByTagName('td')[curDay + fristDayOfMouth -1].id = 'currentDay';
		_self.addStyle();
	}else if(document.getElementById('currentDay')){
		document.getElementById('currentDay').id = '';
		_self.addStyle();
	}
}
/*根据选项卡填充日历*/
Calender.prototype.fillTableBySelect = function(obj) {

	var year = this.optionsOfYears.options[this.optionsOfYears.selectedIndex].value;
	var mouth = this.optionsOfMouth.options[this.optionsOfMouth.selectedIndex].value;

	this.fillTable(year,mouth);
	this.goNext();
	this.goPrev();
}
/*下一年,下一个月*/
Calender.prototype.goNext = function() {

	var nextYearButton = document.getElementById('ca_next_year');
	var nextMouthButton= document.getElementById('ca_next_mouth');

	var _self = this;

	var nextYear = this.optionsOfYears.options[this.optionsOfYears.selectedIndex].value;
	var nextMouth= this.optionsOfMouth.options[this.optionsOfMouth.selectedIndex].value; 
	
	/*下一年按钮*/
	nextYearButton.onclick = function(event) {
		if(nextYear >= _self.endYear - 1) nextYear = _self.beginYear -1;
		nextYear ++;
		var mouth = _self.optionsOfMouth.options[_self.optionsOfMouth.selectedIndex].value;
		_self.optionsOfYears.options[nextYear-_self.beginYear].selected = true;
		_self.fillTableBySelect(nextYear,mouth);
	};
	/*下一个月按钮*/
	nextMouthButton.onclick = function() {
		if(nextMouth >= 11) nextMouth = -1;
		nextMouth++;	
		var year = _self.optionsOfYears.options[_self.optionsOfYears.selectedIndex].value;
		_self.optionsOfMouth.options[nextMouth].selected = true;
		_self.fillTableBySelect(nextMouth,year);
	};
}

/*上一年,上一个月*/
Calender.prototype.goPrev = function() {

	var prevYearButton = document.getElementById('ca_prev_year');
	var prevMouthButton= document.getElementById('ca_prev_mouth');

	var _self = this;

	var prevYear = this.optionsOfYears.options[this.optionsOfYears.selectedIndex].value;
	var prevMouth= this.optionsOfMouth.options[this.optionsOfMouth.selectedIndex].value; 
	
	/*上一年按钮*/
	prevYearButton.onclick = function() {
		if(prevYear < _self.beginYear + 1) prevYear = _self.endYear;
		prevYear --;
		var mouth = _self.optionsOfMouth.options[_self.optionsOfMouth.selectedIndex].value;
		_self.optionsOfYears.options[prevYear-_self.beginYear].selected = true;
		_self.fillTableBySelect(prevYear,mouth);
	};
	/*上一个月按钮*/
	prevMouthButton.onclick = function() {
		if(prevMouth <= 0) prevMouth = 12;
		prevMouth--;	
		var year = _self.optionsOfYears.options[_self.optionsOfYears.selectedIndex].value;
		_self.optionsOfMouth.options[prevMouth].selected = true;
		_self.fillTableBySelect(prevMouth,year);
	};
}

/*添加样式*/
Calender.prototype.addStyle = function() {

	
	var nextMoth    = document.getElementById('ca_next_mouth');
	var prevMouth   = document.getElementById('ca_prev_mouth');
	var nextYear    = document.getElementById('ca_next_year');
	var prevYear    = document.getElementById('ca_prev_year');
	var selectYear  = document.getElementById('ca_select_year');
	var selectMouth = document.getElementById('ca_select_mouth');
	var th = document.getElementById('ca_week').getElementsByTagName('th');
	var td = document.getElementById('ca_days').getElementsByTagName('td');

	var newNextStyle  = 'padding:' + '2px 4px' + ';' + 'color:' + '#fff;'+ 'font-size:' + '15px' + ';' + 'background:' + '#000'+ ';' + 'cursor:' + 'pointer' + ';';
	var newPrevStyle  = 'margin:' + '2px' + ';' + 'padding:' + '2px 10px' + ';' + 'font-size:' + '15px' + ';' + 'color:' + '#fff' + ';' + 'background:' + '#d14836' + ';'
	+ 'cursor:' + 'pointer' + ';';
	var newSelectStyle= 'width:' + '50px' + ';' + 'height:' + '21px' + ';' + 'border:' + 'none' + ';' + 'outline:' + 'none' + ';' + 'cursor:' + 'pointer' + ';';
	var newThStyle    = 'width:' + '26px' +';'+ 'height:' + '25px' +';' + 'font-size:' + '13px' + ';' + 'font-weight:' + 'normal' + ";" 
	+ 'background:' + '#1abc9c' +';'+ 'color:' + '#fff' + ';';
	var newTdStyle    = 'background:' + '#eee' + ';' + 'text-align:' + 'center' + ';' + 'cursor:' + 'pointer' + ';';
	var newNullStyle  = 'background:' + '#eee' + ';' + 'text-align:' + 'center' + ';';

	nextMoth.style.cssText = newNextStyle;	
	prevMouth.style.cssText = newNextStyle;	
	nextYear.style.cssText = newPrevStyle;
	prevYear.style.cssText = newPrevStyle;

	selectYear.style.cssText = newSelectStyle;
	selectMouth.style.cssText = newSelectStyle;

	for(var i = 0; i < th.length; i++) {
		th[i].style.cssText = newThStyle;
	};

	for(var i = 0; i < td.length; i++) {
		td[i].style.cssText = '';
		td[i].onmouseover = null;
		td[i].onmouseout = null;
		if(td[i].innerHTML !== ""){
			td[i].style.cssText = newTdStyle;
			/*每一天的mouseover效果*/
			td[i].onmouseover = function() {
				this.style.background = '#2c3e50';	
				this.style.color = '#fff';
			}
			td[i].onmouseout = function() {
				this.style.background = '#eee';	
				this.style.color = '#000'
			}
		}else{
			td[i].style.cssText = newNullStyle;			
		}
	};

	if(document.getElementById('currentDay')) {
		var currentDayStyle = 'text-align:' + 'center' + ';' + 'background:' + '#2c3e50'+ ';' + 'color:' + '#fff' + ';' + 'cursor:' + 'pointer' + ';';
		currentDay.onmouseout = function() {
			this.style.background = '#2c3e50';	
			this.style.color = '#fff';
		}
		currentDay.style.cssText = currentDayStyle;
	}
}

/*动态指定日历位置*/
Calender.prototype.getPosition = function(elem) {

	var _self = this;
	var elementTarget = elem;

	/*获取元素的左侧绝对位置*/
	function getElementLeft(element) {
		var actualLeft = element.offsetLeft;
		var currentElem= element.offsetParent;

		while(currentElem !==null) {
			actualLeft += currentElem.offsetLeft;	
			currentElem = currentElem.offsetParent;
		}
		return actualLeft;
	}

	/*获取元素上侧绝对位置*/
	function getElementTop(element) {
		var actualTop  = element.offsetTop;			
		var currentElem= element.offsetParent;
		while(currentElem !== null) {
			actualTop += currentElem.offsetTop;	
			currentElem = currentElem.offsetParent;
		}
		return actualTop;
	}

	var elementLeft = getElementLeft(elem);
	var elementTop= getElementTop(elem);

	console.log(elem);
	console.log(elem.offsetTop);
	console.log(elementTop,elementLeft);

	_self.calenderBox.style.display = 'none';

	elem.onclick = function(event) {
		event = event || widow.event;	
		event.stopPropagation();
		var elementOffsetHeight = elementTarget.offsetHeight
		var boxWidth = _self.calenderBox.clientWidth;
		
		_self.calenderBox.style.display = "block";
		_self.calenderBox.style.position = "absolute";

		_self.calenderBox.style.top = elementTop + elementOffsetHeight + 2 +  'px';
		_self.calenderBox.style.left = elementLeft -2 + 'px';

	}
}
/*获取需要时期并填入元素*/
Calender.prototype.getThisDate = function(elem) {
	var _self = this;
	var thisDate = [];
	var tds = _self.ca_days.getElementsByTagName('td');

	for(var i = 0; i < tds.length; i++) {
		if(tds[i].innerHTML !== "")	{
			tds[i].onclick = function(event) {
				var event = event || window.event;
				event.stopPropagation();
				var thisYear = _self.optionsOfYears.options[_self.optionsOfYears.selectedIndex].value;	
				var	thisMouth= _self.optionsOfMouth.options[_self.optionsOfMouth.selectedIndex + 1].value; 
				var thisDay  = this.innerHTML;
				var thisDate = [thisYear,thisMouth,thisDay];
				elem.value = thisDate.join("-");
				_self.calenderBox.style.display = 'none';
			}
		}
	}
}
