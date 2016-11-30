/****************封装ajax*****************/
function getAjax(type) {
    $.ajax({
        url: 'data/ui_china.php',
        data: {'type': type},
        success: function (list, msg, xhr) {
            // console.log('开始处理响应数据');
            var html = '';
            $.each(list, function (i, arr) {
                html += `
          <dl>
            <dt><img src="${arr.rec_img}"/></dt>
            <dd>${arr.rec_con}</dd>
            <dd>${arr.au_con}</dd>
            <dd><span><img src="${arr.au_img}"/></span><a href="#">${arr.au_name}</a></dd>
          </dl>
          `;
            });
            $('.main').html(html);
        }
    })
}
//页面第一次加载时的默认显示
window.onload = function () {
    var type = 'homepage';
    getAjax(type);
};
/******************鼠标点击时异步请求对应的数据列表*******************/
$('.column ul li').on("click", "a", function (e) {
    e.preventDefault();
    $(this).parent().addClass('active').siblings('.active').removeClass('active');
//  异步请求当前类别下的列表
    var type = $(this).attr('href');
    // console.log(type);
    getAjax(type);
});
/* ***********************************模拟轮播效果********************************************** */
var t = n = 0, count;
$(document).ready(function () {
    count = $("#banner_list a").length;
    $("#banner_list a:not(:first-child)").hide();
    $("#banner li").click(function () {
        var i = $(this).text() - 1;
        n = i;
        if (i >= count) return;
        $("#banner_list a").filter(":visible").fadeOut(500)
            .parent().children().eq(i).fadeIn(1000);
        $(this).toggleClass("on");
        $(this).siblings().removeAttr("class");
    });
    t = setInterval("showAuto()", 4000);
    $("#banner").hover(function () {
        clearInterval(t)
    }, function () {
        t = setInterval("showAuto()", 4000);
    })
});

function showAuto() {
    n = n >= (count - 1) ? 0 : ++n;
    $("#banner li").eq(n).trigger('click');
}
/**************************************返回页面顶部******************************************/
$(function () {
    $(window).scroll(function () {  //只要窗口滚动,就触发下面代码
        var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度
        if (scrollt > 200) {  //判断滚动后高度超过200px,就显示
            $("#scrollUp").fadeIn(400); //淡出
        } else {
            $("#scrollUp").stop().fadeOut(400); //如果返回或者没有超过,就淡入.必须加上stop()停止之前动画,否则会出现闪动
        }
    });
    $("#scrollUp").click(function () { //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部
        $("html,body").animate({scrollTop: "0px"}, 200);
    });
});