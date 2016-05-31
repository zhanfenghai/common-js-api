//获取地址栏参数&调用方法
//例如地址栏为https://www.zhanfenghai.com/hello.html?id=123&name=zhan
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
GetQueryString(id);//输出123

/*日期格式转换*/
//第一个参数为时间，第二个参数是所需要转换的格式
var dt = function(value,type){
	var datetime = new Date(value.replace(' ', 'T'));
	return dtFormat(datetime,type);
};
var dtFormat = function (dt, formatStr) {
		var str = typeof formatStr === "string" && formatStr.length > 0 ? formatStr : "yyyy-MM-dd";
		var Week = ['日', '一', '二', '三', '四', '五', '六'];
		str = str.replace(/yyyy|YYYY/, dt.getFullYear());
		str = str.replace(/yy|YY/, (dt.getYear() % 100) > 9 ? (dt.getYear() % 100).toString() : '0' + (dt.getYear() % 100));
		str = str.replace(/MM/, (dt.getMonth() + 1) > 9 ? (dt.getMonth() + 1).toString() : '0' + (dt.getMonth() + 1));
		str = str.replace(/M/g, (dt.getMonth() + 1));
		str = str.replace(/w|W/g, Week[dt.getDay()]);
		str = str.replace(/dd|DD/, dt.getDate() > 9 ? dt.getDate().toString() : '0' + dt.getDate());
		str = str.replace(/d|D/g, dt.getDate());
		str = str.replace(/hh|HH/, dt.getHours() > 9 ? dt.getHours().toString() : '0' + dt.getHours());
		str = str.replace(/h|H/g, dt.getHours());
		str = str.replace(/mm/, dt.getMinutes() > 9 ? dt.getMinutes().toString() : '0' + dt.getMinutes());
		str = str.replace(/m/g, dt.getMinutes());
		str = str.replace(/ss|SS/, dt.getSeconds() > 9 ? dt.getSeconds().toString() : '0' + dt.getSeconds());
		str = str.replace(/s|S/g, dt.getSeconds());
		return str;
	};
dt(datetime,"HH:mm:ss");


/*获取cookie*/
function getCookie(name) {
	var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if (arr != null) return unescape(arr[2]);
		return null
}

//数组去重
function unique(array){
    var n = [];//临时数组
    for(var i = 0;i < array.length; i++){
        if(n.indexOf(array[i]) == -1) n.push(array[i]);
    }
    return n;
}

//快速排序法
function quickSort(arr){
	
	if(arr.length<=1){
		return arr;
	}
	var left = [];
	var right = [];
	
	var num = Math.floor(arr.length/2);
	var middleValue = arr[num];//基数
	for(var i = 0;i<arr.length;i++){
		if(arr[i]<middleValue){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat(middleValue,quickSort(right));
}

//es6中相同作用域下不可以重复声明变量
{
	let a = 2;
	var a = 3;//可以，因为var声明的是全局变量，let声明局部变量
}

function test(){
	let str = "test";
	var str = "again";//不可以，两者都是在同一个作用域内
}

















