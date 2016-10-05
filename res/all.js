var slide_i = 0;

(function(){
	$(document).ready(function(){
		var slide_img_set = $(".banner_bg .img");
		var slide_img_icons = $(".control ul li");

		var slide_timer = setInterval(function(e){

			$(slide_img_set[slide_i]).fadeOut("slow");
			if(slide_i == slide_img_set.length-1){
				slide_i = 0;
				$(slide_img_icons[slide_img_set.length-1]).find("a").removeClass("current");
				$(slide_img_icons[slide_i]).find("a").addClass("current");
			}
			else{
				$(slide_img_icons[slide_i]).find("a").removeClass("current");
				slide_i++;
				$(slide_img_icons[slide_i]).find("a").addClass("current");
			}
			$(slide_img_set[slide_i]).fadeIn("slow");

		},3500);

	});
})();

function bannerIconClick(index){
	var slide_img_set = $(".banner_bg .img");
	$(slide_img_set[slide_i]).fadeOut("slow");

	var slide_img_icons = $(".control ul li");
	$(slide_img_icons[slide_i]).find("a").removeClass("current");

	$(slide_img_icons[index]).find("a").addClass("current");
	$(slide_img_set[index]).fadeIn("slow");

	slide_i = index;
}

$(function() {

	allPage();
	if($('#indexpage').length!=0){
		indexpage();
		return;
	}
	if($('#welfare').length!=0){
		welfarepage();
		return;
	}
	if($('#workEnvipage').length!=0){
		imgChange();
		return;
	}
	if($('#ypinfopage').length>0){
		ypinfoPage();return;
	}
	if($('#grinfopage').length>0){
		grinfoPage();return;
	}
	if($('#eduinfopage').length>0){
		eduinfoPage();return;
	}
	if($('#hdinfopage').length>0){
		hdinfoPage();return;
	}
	if($('#hdinfopage').length>0){
		hdinfoPage();return;
	}
	if($('#preach').length>0){
		preachPage();
	}
	if($('#previewpage').length>0){
		previewPage();
	}

});
function allPage(){
	if(typeof(mustShowLogin)!='undefined'&&mustShowLogin){
		showLogin(true);
	}
	if(typeof(alertError)!='undefined'){
		alert(alertError);
	}
	$('a').focus(function(){
		$(this).blur();
	});	
}
var homeimgLoaded=[];homeindex=0;
function indexpage(){
	//换低图
	//autoChangeHomebg();
}
function autoChangeHomebg(){
	if(typeof(homeimgbg)!='object')return;
	loadImgs(homeimgbg);
	setInterval(changeHomeBackgroud, 7000);
}
function changeHomeBackgroud(){
	if(homeimgLoaded.length==0)return;
	if(!homeimgLoaded[homeindex]){
		homeindex=0;
	}
	if('url("'+homeimgLoaded[homeindex]+'")'==$('body:first').css('background-image')){
		if(++homeindex==homeimgLoaded.length){
			homeindex = 0;
		}
	}
	$('body:first').css('background-image','url('+homeimgLoaded[homeindex]+')');
	if(++homeindex==homeimgLoaded.length){
		homeindex = 0;
	}
}
function loadedImg(){
	homeimgLoaded.push(this.src);
}
function loadImgs(imgs){
	var len_imgs = imgs.length;
	for(var i = 0;i<len_imgs;i++){
		img = new Image();
		img.onload=loadedImg;
		img.src = imgs[i];
	}
}
function previewPage(){
	if(typeof(mustShowLogin)!='undefined'&&mustShowLogin||(typeof(showtip)=='undefined'))return;
	var cont = '<div class="fcrow1"><div class="row11">你的简历提交成功</div><div class="row12">你可以继续对简历<a href="javascript:;" class="closeit">修改</a>和<a href="preview2.php" target="_blank">预览</a></div></div>'+
	'<div class="fcrow2"><table><tr><td align="center" width="103"><div><img src="'+file_root+'/img/fc3.png"/></td><td width="222" class="fcrow2c">● 赶快扫描二维码，添加官方微信<br/>● 开启与小腾姐的特色互动，支持面试结果查询</td><td width="103"><a class="qqjobs" href="http://t.qq.com/QQjobs" target="_blank">立即收听</a></td><td width="222" class="fcrow2c fcrow2split">● 欢迎开通<a href="http://t.qq.com/" target="_blank">腾讯微博</a>，收听<a href="http://t.qq.com/QQjobs" target="_blank">腾讯招聘</a><br/>● 获取更多招聘动态，收获更多惊喜</td></tr></table></div>';
	var html = '<div id="loginalertout" class="fuceng"><div id="loginalert">'+
	'<div class="tt"><a href="javascript:;" class="closebut">X</a><div class="clr"></div></div>'+
	'<div class="c">'+cont+'</div>'+
	'<div class="b"></div>'+
	'</div></div>';
	$(html).setLightBox({layoverBg:'#000',layoverOpa:'0.1',alertdivBg:'#fff',alertdivWidth:'728px',closeBut:'.closebut,.closeit',layerdivClick:true,dragbody:'#loginalert .tt'});
}
function preachPage(){
	$('#preach .contdiv .i').hover(function(){
		$(this).css('z-index','10');
		$(this).find('.share:first').removeClass('none');
	},function(){
		$(this).css('z-index','1');
		$(this).find('.share:first').addClass('none');
	}).find('.share').html('<span class="left">分享到：</span><a href="javascript:;" onclick="shareto(\'qqt\',\'preach\',this);" id="qqt" title="分享到腾讯微博">分享到腾讯微博</a><a href="javascript:;" onclick="shareto(\'qzone\',\'preach\',this);" id="qzone" title="分享到QQ空间">分享到QQ空间</a><a href="javascript:;" onclick="shareto(\'pengyou\',\'preach\',this);" id="pengyou" title="分享到腾讯朋友">分享到腾讯朋友</a><a href="javascript:;"  onclick="shareto(\'sinat\',\'preach\',this);"id="sinat" title="分享到新浪微博">分享到新浪微博</a><a href="http://www.renren.com/601658396"  onclick="shareto(\'renren\',\'preach\',this);"id="renren" title="分享到人人网">分享到人人网</a><a href="javascript:;"  onclick="shareto(\'kaixin001\',\'preach\',this);"id="kaixin" title="分享到开心网">分享到开心网</a><div class="clr"></div>');
}
//closeGoHome在强制登录页面，点击关闭去首页
function showLogin(closeGoHome){
	/*var url = encodeURIComponent(window.location.href);
	var src = 'http://ui.ptlogin2.qq.com/cgi-bin/login?appid=537000001&s_url='+url+'&hide_title_bar=1';
	var frame = '<iframe width="100%" scrolling="no" frameborder="0" src="'+src+'" style="height: 210px;width:400px;" border="0" allowtransparency="true" id="login_frame" name="login_frame"></iframe>';
	var html = '<div id="loginalertout"><div id="loginalert">'+
			'<div class="t"><div class="left">QQ登录</div><a href="javascript:;" class="closebut">X</a><div class="clr"></div></div>'+
			'<div class="c">'+frame+'</div>'+
			'<div class="b"></div>'+
			'</div></div>';
	if(closeGoHome){
		$(html).setLightBox({layoverBg:'#000',layoverOpa:'0.1',alertdivBg:'#fff',alertdivWidth:'410px',closeBut:'.closebut',layerdivClick:true,dragbody:'#loginalert .t',closeFn:gohome});
	}else{
		$(html).setLightBox({layoverBg:'#000',layoverOpa:'0.1',alertdivBg:'#fff',alertdivWidth:'410px',closeBut:'.closebut',layerdivClick:true,dragbody:'#loginalert .t'});
	}
	$('#login_frame').attr('src',src);//for ie6
*/
	var url = encodeURIComponent(window.location.href);
	var src = 'http://ui.ptlogin2.qq.com/cgi-bin/login?appid=537000001&s_url='+url+'&hide_title_bar=0';
	var frame = '<iframe width="100%" scrolling="no" frameborder="0" src="'+src+'" style="height: 210px;width:400px;" border="0" allowtransparency="true" id="login_frame" name="login_frame"></iframe>';
	var html = frame;
	$(html).setLightBox({layoverBg:'#000',layoverOpa:'0.1',alertdivBg:'#fff',alertdivWidth:'490px',closeBut:'.closebut',layerdivClick:true,dragbody:'#loginalert .t'});
	$('#login_frame').attr('src',src);//for ie6	
}
function gohome(){
	window.location.href='index.php';
}
function ptlogin2_onClose(){
	if(typeof(mustShowLogin)!='undefined'&&mustShowLogin){
		window.location.href='http://join.qq.com/index.php';
	}
	$.ml.closeLightBox();
}
function ptlogin2_onResize(width, height) {
	//获得浮动Div对象
	var login_frame = document.getElementById("login_frame");
	if (login_frame)  {
		//重新设置大小注意，一定要加px，否则firefox下有问题
		login_frame.style.width = width + "px";
		login_frame.style.height = height + "px";
		//最好重新调整登录框的位置， 这儿略....
		//先隐藏，在显示，这样可以避免滚动条的出现
		login_frame.style.visibility = "hidden";
		login_frame.style.visibility = "visible";
	}

}
function welfarepage(){
	var itemt =$('#welfare .itemt ul a');
	var itemc =$('#welfare .itemc .descm');
	var itemc_live =$('#welfare .itemc .live');
	itemt.each(function(desm){
			$(this).click(function(){
				if($(this).hasClass('active'))return;
				itemt.removeClass('active');
				$(this).addClass('active');				
				itemc.removeClass('active');
				if($(this).attr('name')=="live"){
					$('#welfare .itemc .live').addClass('active');
				}else if($(this).attr('name')=="wealth"){
					$('#welfare .itemc .wealth').addClass('active');
				}else if($(this).attr('name')=="health"){
					$('#welfare .itemc .health').addClass('active');
				}
			});
	});
	$('#welfare .des_content').each(function(){
		$(this).hover(function(){
			$(this).find('a').css('display','block');
		},
		function(){
			$(this).find('a').css('display','none');
		});
	});
/*
	$('#guanhuai .i').hover(function(){
		$(this).find('.desc').css('display','block');
	},function(){
		$(this).find('.desc').css('display','none');
	});*/
}
function checkFormApply1(){
	if($('#agreen').length>0&&!isChecked('#agreen')){
		alert('加入腾讯必须认同腾讯公司正直诚信价值观，承诺所填简历信息真实可信！');
		return false;
	}
	submiting=true;
	var r = checkMyCommonFields($('[validate]'));
	if(!r){
		errorE.focus();
	}
	submiting=false;
	return r;
}
function checkFormApply2(){
	submiting=true;
	var r = checkMyCommonFields($('[validate]'));
	if(!r){
		errorE.focus();
	}
	submiting=false;
	return r;
}
function checkFormApply3(){
	submiting=true;
	var r = checkMyCommonFields($('[validate]'));
	if(!r){
		errorE.focus();
	}
	submiting=false;
	if(r){
		document.myform.submit();
	}
}
function checkFormApply4(){
	$('#regresume textarea').each(function(){
		if($(this).attr('title')==$.trim($(this).val())){
			$(this).val('');
		}
	});
	
	submiting=true;
	var r = checkMyCommonFields($('[validate]'));
	if(!r){
		errorE.focus();
	}
	submiting=false;
	return r;
}
function checkSecondWorkcity(val,jq_e,jq_msg){
	if(val){
		 if($('#expectWorkPlace1').val()==val&&!$('#expectWorkPlace2div').hasClass('none')){
			return [false,'第二志愿和第一志愿相同']; 
		 }
	}
	return [true,''];

}

function imgChange(){
	$('.imgchange').each(function(){
		var big_img=$(this).find('.bigimg');
		var dot=$(this).find('.squars a');
		dot.mouseover(function(){
			if($(this).hasClass('active')) return;
				if(big_img.queue('fx').length!=0){
					big_img.stop(true);
				}
			dot.removeClass('active');
			var img=$(this).attr('b');
			$(this).addClass('active');
		
			big_img.animate({'opacity':'0.2'},400,function(){
				big_img.css('background-image','url('+img+')');
				big_img.animate({'opacity':'1'},700);
			});
		}).click( function(e){
			e.stopPropagation();
			e.preventDefault();
			return false;
			});
	});
}
function ypinfoPage(){
	$('[validate]').each(function(){
		if($(this).get(0).tagName.toUpperCase()=='SELECT'){
			$(this).change(function(){
				validateMyInfo(this);
			});
		}else{
			$(this).blur(function(){
				validateMyInfo(this);
			});
		}
	});
	$('#isDeploy,#notDeploy').click(function(){
		if($(this).val()=='1'){
			$('#expectWorkPlace2div').removeClass('none');
		}else{
			$('#expectWorkPlace2div').addClass('none');
		}
	});
}
function grinfoPage(){
	$('[validate]').blur(function(){
		validateMyInfo(this);
	});
	initBirthDate();
}
function eduinfoPage(){
	$('.dept_name_college').searchRemind({left:'0px',top:'25px',width:'300px'});
//$('[validate]').blur(function(){
//		validateMyInfo(this);
//	});
	changeAddDelEdu();
}
function hdinfoPage(){
	$('#regresume textarea').focus(function(){
		if($(this).attr('title')==$.trim($(this).val())){
			$(this).val('').removeClass('gray');
		}else{
			$(this).removeClass('gray');
		}
		
	}).blur(function(){
		if(''==$.trim($(this).val())){
			$(this).val($(this).attr('title')).addClass('gray');
		}
	}).blur();
	$('#regresume [type=radio]').click(function(){
		if($(this).val()=='1'){
			$(this).parent().find('.textarea:first').removeClass('none');
		}else{
			$(this).parent().find('.textarea:first').addClass('none');
		}
		activeProveReq();
	});
	activeProveReq();
}
//显示隐藏活动证明人是否必填
function activeProveReq(){
	if(hasActive()){
		$('#activeProveReq').removeClass('none');
	}else{
		$('#activeProveReq').addClass('none');
	}
}
//有选择有的。。。
function hasActive(){
	var flag = false;
	$('#hasProject,#hasPractice,#hasScholarship,#hasAwards,#hasCadres').each(function(){
		if($(this).attr('checked')){
			flag=true;
			return false;
		}
	});
	return flag;
}
function activeProve(val,jq_e,jq_msg){
	if(hasActive()){
		if(val==''){
			return [false,'请填写该项'];
		}
	}
	return [true,''];
}
//初始化生日
function initBirthDate(){
	birthYear = birthYear?birthYear:'';//默认２２岁
	birthMonth = birthMonth?birthMonth:'';//默认１月
	birthDay = birthDay?birthDay:'';
	option = '<option value="">请选择</option>';

	changeYears(birthYear);
	changeMonths(birthMonth);
	changeDays(birthDay);
}
function changeYears(now){
	var start 	= nowYear-35;//最大35岁
	var end	= nowYear-16;//最小１８岁
	option = getOptionHtml(start,end,now);
	$('#birthYear').html(option);
}

function changeMonths(now){
	var start 	= 1;
	var end	= 12;
	option = getOptionHtml(start,end,now);
	$('#birthMonth').html(option);
}
function changeDays(now){
	var now = typeof(now)!='undefined'?now:$('#birthDay').val();
	var start 	= 1;
	var year = parseInt('0'+$('#birthYear').val(),10);
	var month = parseInt('0'+$('#birthMonth').val(),10);
	var end	= getMonthDaySize(year,month==0?1:month);
	option = getOptionHtml(start,end,now);
	$('#birthDay').html(option);
}
//得到月有几天
function getMonthDaySize(year,month){
	var days_arr = [31,28,31,30,31,30,31,31,30,31,30,31];
	if((0==year%4&&(0!=year%100))||0==year%400){
		if(month==2)return 29;
	}
	return days_arr[month-1];
}
function getOptionHtml(start,end,now){
	var option  ='<option value="">请选择</option>';
	var selected = '';var for0 = '';
	for(;start<=end;start++){
		if(start==now){
			selected = ' selected="selected"';
		}else{
			selected = '';
		}
		for0 = start<10?'0':'';
		option +='<option'+selected+' value="'+for0+start+'">&nbsp;'+start+'</option>';
	}
	return option;
}
function otherNotBank(val,jq_e,jq_msg){
	if(jq_e.attr('checked')&&$.trim($('#'+jq_e.attr('oId')).val())==''){
		return [false,'请填写细节'];
	}
	return [true,''];
}
function resumeFile(val,jq_e,jq_msg){
	if(val==""){
		return [false,'请填写细节'];
	}
	return [true,''];
}
function checkHasAwards(val,jq_e,jq_msg){
	if(jq_e.attr('checked')&&(!isChecked('.awards'))&&($.trim($('#awardsarea').val())=='')){
		return [false,'请填写细节'];
	}
	return [true,''];
}
function checkMobile(val,jq_e,jq_msg){
	var show = '';var flag = true;
	if(val==''){
		return [false,'请填写该项'];
	}else if(val.length!=11&&$('#mobileType').val()=='1'){
		return [false,'长度不为11位'];
	}else if(val.match(/\D/)){
		return [false,'只能是数字'];
	}
	if(!submiting){
		$.ajax({
			url:'ajax.php',
			data:'act=checkMobile&mobile='+val,
			type:'POST',
			dataType:'text',
			timeout:15000,
			error:function(){
				
			},
			success:function(text){//nologin
				text = $.trim(text);
				if(text=='nologin'){
					showLogin(true);
				}else{
					var r = eval('('+text+')');
					if(!r[0]){
						jq_msg.removeClass('tipError tipNotice').addClass('tipError').html(r[1]);
					}
				}
			}
		});
	}
	if(true||flag){
		return [true,''];
	}else{
		return [true,show,'tipNotice'];
	}	
}
//选择学校列表
/*
 * 
parent.school_select_params
deptid_hidden:"dept_id_college"
schoolid_hidden:"school_id_college"
show_foreign:true
type_select:"degree_level_college"
callback_collage:function()
callback_school:function()
 */
function selectSchools(the){
	if(!window.school_select_params){
		window.school_select_params = {
					deptid_hidden:"dept_id_college",
					schoolid_hidden:"school_id_college",
					show_foreign:true,
					type_select:"degree_level_college",
					callback_collage:choose_collage,
					callback_school:choose_school};
	}
	currentSchEle = $(the).prev();
	var html = getSchoolsHtml();//alertdivWidth:'596px'
	$(html).setLightBox({layoverBg:'#000',layoverOpa:'0.1',alertdivBg:'#fff',alertdivWidth:'596px',closeBut:'.closebut',layerdivClick:true,dragbody:'#loginalert .t'});
}
function selectSchoolDepts(the){
	var thetable = $(the).parents('table:first'); 
	var jqSchool = thetable.find('.school_id_college:first');
	var jqSchoolName = thetable.find('.school_name_college:first');
	var jqSchoolNameTip =  thetable.find('.'+jqSchoolName.attr('tip')+':first');
	var jqCollege = thetable.find('.dept_name_college:first');
	var jqCollegeTip = thetable.find('.'+jqCollege.attr('tip')+':first');
	var schoolId = jqSchool.val();
	if(schoolId==''||schoolId=='0'||parseInt(schoolId)<1000){
		if(jqSchoolName.val()=='输入学校名称'||jqSchoolName.val()==''){
			jqSchoolName.addClass('error');
			jqSchoolNameTip.removeClass('tipNotice').addClass('tipError').html('请填写学校');
			jqSchoolName.focus();return false;
		}else{
			jqCollege.addClass('error');
			jqCollegeTip.removeClass('tipNotice').addClass('tipError').html('该校暂时没有院系数据，请自行填写');
			if(jqCollege.val()=='输入学院名称'||jqCollege.val()==''){jqCollege.val('').focus();}
			return false;
		}
	}
	window.school_select_params={type_select:'degree_level_college',schoolid_hidden:'school_id_college',deptid_hidden:'dept_id_college',year_select:'year_select_college'
		,callback_collage:choose_collage
		,show_foreign:true};
	var html = getSchoolDeptsHtml();//alertdivWidth:'596px'
	$(html).setLightBox({layoverBg:'#000',layoverOpa:'0.1',alertdivBg:'#fff',alertdivWidth:'618px',closeBut:'.closebut',layerdivClick:true,dragbody:'#loginalert .t'});
}
function getSchoolDeptsHtml(){
	return '<div id="loginalertout"><div id="loginalert"><div class="t"><div class="left">选择院系　　同时按下Ctrl+F可以搜索</div><div class="closebut">X</div><div class="clr"></div></div>\<div class="c">\<iframe width="100%" scrolling="no" height="183px" frameborder="0" src="http://api.pengyou.qq.com/html/select_collage.html" name="collage_select_iframe" id="collage_select_iframe"></iframe>\	</div>\	<div class="b"></div>\	</div></div>';
}
//如果不能使用朋友网的接口了，注释下面return，修改690px->596px
function getSchoolsHtml(){
	/*return '<div id="loginalertout"><div id="loginalert"><div class="t"><div class="left">选择学校　　同时按下Ctrl+F可以搜索</div><div class="closebut">X</div><div class="clr"></div></div>\
	<div class="c">\
	<iframe width="100%" scrolling="no" height="370px" frameborder="0" src="http://api.pengyou.qq.com/index.php?mod=school&act=selectorpage&type=3" name="school_select_iframe" id="school_select_iframe"></iframe>\
	</div>\
	<div class="b"></div>\
	</div></div>';
*/	
	var html ='<div id="loginalertout" class="chooseSchool"><div id="loginalert"><div class="t"><div class="left">选择学校　　同时按下Ctrl+F可以搜索</div><div class="closebut">X</div><div class="clr"></div></div>\
		<div class="c">\
		<div class="area_select">\
	学校所在地： <select onchange="change_state(this)"\
		id="state_select" name="select">\
		<option value="0">中国</option>\
		<option value="840">美国</option>\
		<option value="124">加拿大</option>\
		<option value="826">英国</option>\
		<option value="36">澳大利亚</option>\
		<option value="554">新西兰</option>\
		<option value="702">新加坡</option>\
		<option value="372">爱尔兰</option>\
		<option value="528">荷兰</option>\
		<option value="458">马来西亚</option>\
		<option value="764">泰国</option>\
		<option value="710">南非</option>\
		<option value="578">挪威</option>\
		<option value="208">丹麦</option>\
		<option value="608">菲律宾</option>\
		<option value="9999">其他</option>\
	</select>　<select onchange="select_city(this)" id="_province"\
		style="width: 105px;">\
		<option value="0">请选择省(市)...</option>\
		<option value="11">北京</option>\
		<option value="12">天津</option>\
		<option value="13">河北</option>\
		<option value="14">山西</option>\
		<option value="15">内蒙古</option>\
		<option value="21">辽宁</option>\
		<option value="22">吉林</option>\
		<option value="23">黑龙江</option>\
		<option value="31">上海</option>\
		<option value="32">江苏</option>\
		<option value="33">浙江</option>\
		<option value="34">安徽</option>\
		<option value="35">福建</option>\
		<option value="36">江西</option>\
		<option value="37">山东</option>\
		<option value="41">河南</option>\
		<option value="42">湖北</option>\
		<option value="43">湖南</option>\
		<option value="44">广东</option>\
		<option value="45">广西</option>\
		<option value="46">海南</option>\
		<option value="50">重庆</option>\
		<option value="51">四川</option>\
		<option value="52">贵州</option>\
		<option value="53">云南</option>\
		<option value="54">西藏</option>\
		<option value="61">陕西</option>\
		<option value="62">甘肃</option>\
		<option value="63">青海</option>\
		<option value="64">宁夏</option>\
		<option value="65">新疆</option>\
		<option value="71">台湾</option>\
		<option value="81">香港</option>\
		<option value="82">澳门</option>\
	</select>\
</div>\
<div class="ifram_wrap">\
	<div id="school_tips">\
	<div class="showdef">\
	<p>请先选择学校所在地。</p>\
	</div>\
	</div>\
	<iframe scrolling="yes" frameborder="0" class="scroll_ifram" id="school_iframe"></iframe>\
</div>\
</div>\
<div class="b"></div>\
</div></div>';
return html;
}
function select_city(the){
	var id = $(the).val();
	if(id=='0'){
		$('#school_tips').css('display','block');
		$('#school_iframe').css('display','none');
	}else{
		$('#school_tips').css('display','none');
		$('#school_iframe').css('display','block').attr('src',file_root+'school/'+id+'_1.htm');
	}
}
function choose_school(id,title){
	currentSchEle.blur();
	currentSchEle.val(title);
	currentSchEle.parent().find('.school_id_college').val(id);
	validateMyInfo(currentSchEle);
	$('.alertdiv,.layoverdiv').css('display','none');
	if($.browser.msie&&$.browser.version=='6.0'){
		$('.forieSelect').removeClass('none');	
	}
}
function choose_collage(college_id,college_name){
	$('#dept_id_college').val(college_id);
	$('#dept_name_college').val(college_name);
	close_frame('collage_select_pop');
}
function change_state(the){
	var id = $(the).val();
	if(id=='0'){
		$('#_province').removeClass('none');
		select_city($('#_province'));
	}else{
		$('#_province').addClass('none');
		$('#school_tips').css('display','none');
		$('#school_iframe').css('display','block').attr('src',file_root+'school/f'+id+'_1.htm');
	}
}
//添加一个教育
function addEducation(){
	$('#lastflag').before($('.oneedu:first').clone(true));
	$('.oneedu:last').find('select,input').val('');
	changeAddDelEdu();
}
//删除一个教育
function delEducation(the){
	$(the).parents('table').remove();
	changeAddDelEdu();
}
//改变显示的增加＼删除，保证最后一个有增加，只有一个学历是没有删除
function changeAddDelEdu(){
	var dels =$('.oneedu .del');
	if(dels.length==1){
		dels.addClass('none');
	}else{
		dels.removeClass('none');
	}
	$('.oneedu .add').addClass('none');
	$('.oneedu .add:last').removeClass('none');
}
function showBigImg(the){
	var html = '<img src="'+$(the).attr('src')+'"/>';
	$(html).setLightBox({layoverBg:'#000',layoverOpa:'0.1',alertdivBg:'#fff'});
}
function showHomeVideo(vid){//564,460
	//$('#tenvideo_flash_players').remove();
	var html = '<div id="homevideo1"><div id="homevideo2" onmouseover="$(\'#closebut\').css(\'display\',\'block\');" onmouseout="$(\'#closebut\').css(\'display\',\'none\');">'+getVideoHtml(vid)+'<a id="closebut" herf="javascript:;" style="display:none;"></a></div></div>';
	jQuery(html).setLightBox({layoverBg:'#000',layoverOpa:'0.5',alertdivBg:'#fff',alertdivWidth:'726',alertdivHeight:'417',sureBut:'#download',closeBut:'#closebut',layerdivClick:false,canNotDrag:true});
	
	//定义视频对象
	var video = new tvp.VideoInfo();
	//向视频对象传入视频vid
	video.setVid(vid); //传入视频vid
	//设置播放器对象
	var player = new tvp.Player(720, 411); //宽、高，单位像素
	//设置播放器初始化时加载的视频
	player.setCurVideo(video);
	//设置播放器皮肤使用mini版本
	player.addParam("flashskin","http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf");
	//设置loading动画使用mini版本
	player.addParam("loadingswf","http://imgcache.qq.com/minivideo_v1/vd/res/skins/web_small_loading.swf");
	player.addParam("autoplay",1);
	player.addParam("wmode",'Opaque');
	//输出播放器
	player.write("mod_player");
}
function getVideoHtml(vid){
	return '<div id="mod_player"></div>';
	var html = '<object width="720" height="411" align="middle" id="flashplayer" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codeBase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab#version=10,0,0,0" >'+ 
					'<PARAM NAME="FlashVars" VALUE="version=20110407&amp;vid='+vid+'&amp;autoplay=1&amp;list=0&amp;loadingswf=http://imgcache.qq.com/minivideo_v1/vd/res/skins/web_small_loading.swf&amp;skin=http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf&amp;">'+ 
					'<PARAM NAME="Movie" VALUE="http://static.video.qq.com/TencentPlayer.swf">'+
					'<PARAM NAME="Src" VALUE="http://static.video.qq.com/TencentPlayer.swf">'+
					'<PARAM NAME="WMode" VALUE="Opaque">'+
					'<PARAM NAME="Quality" VALUE="High">'+
					'<PARAM NAME="AllowScriptAccess" VALUE="always">'+
					'<PARAM NAME="AllowNetworking" VALUE="all">'+
					'<PARAM NAME="AllowFullScreen" VALUE="true">'+
					'<embed width="720" height="411" align="middle" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" bgcolor="#000000" id="flashplayer" name="_playerswf" quality="high" src="http://static.video.qq.com/TencentPlayer.swf" flashvars="version=20110407&amp;vid='+vid+'&amp;autoplay=1&amp;list=2&amp;loadingswf=http://imgcache.qq.com/minivideo_v1/vd/res/skins/web_small_loading.swf&amp;skin=http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf&amp;" wmode="Opaque">'+ 
				'</object>';
	return html;
}
function setVideo(vid){
	var video = new tvp.VideoInfo();
	video.setVid("{?$course.vid?}");
	var player = new tvp.Player(700, 550);
    //设置播放器初始化时加载的视频
    player.setCurVideo(video);
    //设置播放器为直播状态，1表示直播，2表示点播，默认为2
    player.addParam("type","2");	
    //输出播放器    
    player.write("mod_player");
}
//检查FAQ页面发送反馈表单是否为空，并提交查询
//thetype可能是反馈建议
function submitFaq( thetype ){
	var t = $('#faqtitle');
	var c = $('#faqcont');
	var applyshow = $('#applyshow');
	var t_val = $.trim(t.val());
	var c_val = $.trim(c.val());
	applyshow.removeClass('showerr showsuc none').text("提交中...");
	
	if( t_val=='' ){
		applyshow.addClass('showerr').text("请填写标题！");
		t.focus();    	
		return false;
	}
	if( t_val.length>100 ){ 
		applyshow.addClass('showerr').text("标题不能超过100个字符！");
  	t.focus();
  	return false;
  }
	
	if( c_val=='' ){
		applyshow.addClass('showerr').text("请填写内容！");
		c.focus();
		return false;
	}
	if( c_val.length>1000 ){
		applyshow.addClass('showerr').text("内容不能超过1000个汉字！");
  	c.focus();
  	return false;
  }
	
	var appfaq = $('#appfaq');
	appfaq.attr('disabled',true);
	$.ajax({
		url:'send_feedback.php',
		data:'title='+t_val+'&content='+c_val+'&type='+(thetype?thetype:''),
		type:'POST',
		dataType:'text',
		timeout:15000,
		error:function(){
			appfaq.attr('disabled',false);
			applyshow.addClass('showerr').text('连接服务器超时！');
		},
		success:function(response){
			response = $.trim(response);
			if(response=='0'){
				applyshow.addClass('showerr').text('提交失败，请重试。');
			}else if(response=='1'){
				$('#faqform').get(0).reset();
				applyshow.addClass('showsuc').text('您的反馈发送成功！我们会尽快处理。');
				alert('您的反馈发送成功！我们会尽快处理。');
				window.location.href='index.php';
			}else if(response=='2'){
				applyshow.addClass('showerr').text("您发送反馈过于频繁，请等待30分钟后重试！");
			}else if(response=='3'){
				no.focus();
				applyshow.addClass('showerr').text("您输入的验证码不正确！");
			}else if(response=='4'){
				applyshow.addClass('showerr').text("您输入的资料有误！");
			}else if(response=='nologin'){
				applyshow.addClass('showerr').text('请先登录');
				showLogin(true);
			}else{
				applyshow.addClass('showerr').text("提交异常");
			}
			appfaq.attr('disabled',false);
		}
	});
	return false;
}
function changeCode(){
	$('#code').attr('src','checkno.php?r='+Math.random());
}
function showManhua(){
	//只初始化一次
	var manhuas = $('#manhuas');
	var items = manhuas.find('.item');
	var prev = manhuas.find('.prev:first');
	var next = manhuas.find('.next:first');
	if(!manhuas.attr('inited')){
		//初始化背景
		items.each(function(){
			$(this).css('background-image','url('+$(this).attr('src')+')');
		});
	}
	//$('body > div').css('display','none');
	//manhuas.css('display','block');
	manhuas.css('display','block').setLightBox2({id:'1',layoverBg:'#000',layoverOpa:'0.5',alertdivBg:'#fff',alertdivWidth:'1000px',layerdivClick:true,canNotDrag:true});
	if(!manhuas.attr('inited')){
		//初始化事件
		imagesSwitch33(prev,next,items,900,1);
		manhuas.attr('inited',1);
	}
}
function hideManhua(){
	//$('#manhuas').css('display','none');
	$('.layoverdiv1,.alertdiv1').css('display','none');
	if($.browser.msie&&$.browser.version=='6.0'){
		$('.forieSelect').removeClass('none');	
	}
	//$('body > div').css('display','block');
	//manhuas.css('display','none');
}
function schoolinputKeyup(the){
var jq_msg = $(the).parent().parent().find('.'+$(the).attr('tip')+':first').removeClass('tipNotice').addClass('tipError').html('请选择');
}

function alertExam(){
	$(function(){
		//public edit
		$.get("/",{act:"check_exam"},function(databack){
			$("body").append(databack);
		});
	});
}

function closeExamTip(){
	$(".index_exam_tip_bg").remove();
	$(".index_exam_tip").remove();
}
