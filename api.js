//��ȡ��ַ������&���÷���
//�����ַ��Ϊhttps://www.zhanfenghai.com/hello.html?id=123&name=zhan
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
GetQueryString(id);//���123