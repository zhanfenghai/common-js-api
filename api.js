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