//基于jquery
//功能点1：页面内容异步加载
//封装ajax，根据所需分类，异步加载内容
function loadDataByTypeAndPage(type, pageNum) {
    $.ajax({
        url: 'data/ui_china.php',
        data: {
            'type': type,
            'pageNum': pageNum
        },
        success: function (pager, msg, xhr) {
            // console.log('开始处理响应数据');
            // console.log(pager);
            // console.log(msg);
            // console.log(xhr);
            var html = '';
            $.each(pager.data, function (i, arr) {
                // console.log(arr);
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

            //根据返回的分页数据，动态创建分页条内容
            var html_page = '';

            // if (pager.pageNum - 2 > 0) {
            //     html_page += `<li><a href="${pager.type}" rel="${pager.pageNum - 2}">${pager.pageNum - 2}</a></li>`;
            // }
            // if (pager.pageNum - 1 > 0) {
            //     html_page += `<li><a href="${pager.type}" rel="${pager.pageNum - 1}">${pager.pageNum - 1}</a></li>`;
            // }
            // html_page += `<li class="active"><a href="${pager.type}" rel="${pager.pageNum}">${pager.pageNum}</a></li>`;
            // if (pager.pageNum + 1 > 0) {
            //     html_page += `<li><a href="${pager.type}" rel="${pager.pageNum + 1}">${pager.pageNum + 1}</a></li>`;
            // }
            // if (pager.pageNum + 2 > 0) {
            //     html_page += `<li><a href="${pager.type}" rel="${pager.pageNum + 2}">${pager.pageNum + 2}</a></li>`;
            // }

            var str = `<li>共${pager.pageCount}页/当前是第${pager.pageNum}页</li>`;
            var first = (pager.pageNum == 1) ? `<li>首页</li>` : `<li><a href="${pager.type}" rel="1">首页</a></li>`;
            var last = (pager.pageNum == pager.pageCount) ? `<li>尾页</li>` : `<li><a href="${pager.type}" rel="${pager.pageCount}">尾页</a></li>`;
            var prev = (pager.pageNum == 1) ? `<li>上一页</li>` : `<li><a href="${pager.type}" rel="${pager.pageNum - 1}">上一页</a></li>`;
            var next = (pager.pageNum == pager.pageCount) ? `<li>下一页</li>` : `<li><a href="${pager.type}" rel="${pager.pageNum + 1}">下一页</a></li>`;
            // for (var i = 1, p = ''; i <= pager.pageCount; i++) {
            //     if (i == 1) {
            //         p = `<li class="p"><a class="p" href="${pager.type}" rel="${i}">${i}</a></li>`;
            //     } else {
            //         p += `<li class="p"><a class="p" href="${pager.type}" rel="${i}">${i}</a></li>`;
            //     }
            // }

            var p = '';
            if (pager.pageNum - 1 > 0) {
                p += `<li class="p"><a  class="p" href="${pager.type}" rel="${pager.pageNum - 1}">${pager.pageNum - 1}</a></li>`;
            }
            p += `<li class="active p"><a  class="p" href="${pager.type}" rel="${pager.pageNum}">${pager.pageNum}</a></li>`;
            if (pager.pageNum + 1 > 0 && pager.pageNum < pager.pageCount) {
                p += `<li class="p"><a  class="p" href="${pager.type}" rel="${pager.pageNum + 1}">${pager.pageNum + 1}</a></li>`;
            }

            html_page = first + prev + p + next + last + str;
            $('.pager').html(html_page);
        }
    })
}

//功能点2：页面第一次加载时的默认显示
window.onload = function () {
    var type = 'homepage';
    var pageNum = '1';
    loadDataByTypeAndPage(type, pageNum);
};

//功能点3：鼠标点击分类时异步请求对应的数据列表
$('.column ul li').on("click", "a", function (e) {
    e.preventDefault();
    $(this).parent().addClass('active').siblings('.active').removeClass('active');
    //异步请求当前类别下的列表
    var type = $(this).attr('href');
    // console.log(type);
    var pageNum = $(this).attr('rel');
    // console.log(pageNum);
    loadDataByTypeAndPage(type, pageNum);
});

//功能点4：鼠标点击页码时异步请求对应的数据
$('.page').on("click", "a", function (e) {
    e.preventDefault();
    // $(this).parent().addClass('active').siblings('.active').removeClass('active');
    //异步请求当前类别下对应页码的列表
    var type = $(this).attr('href');
    // console.log(type);
    var pageNum = $(this).attr('rel');
    // console.log(pageNum);
    loadDataByTypeAndPage(type, pageNum);
});

//功能点5：轮播
var t = n = 0, count;
$(document).ready(function () {
    count = $("#banner_list a").length;
    $("#banner_list a:not(:first-child)").hide();
    $("#banner li").click(function () {
        var i = $(this).text() - 1;
        n = i;
        if (i >= count) return;
        //遍历当前可见的图片使其淡出
        $("#banner_list a").filter(":visible").fadeOut(500)
        //找到选中的图片使其淡入
            .parent().children().eq(i).fadeIn(1000);
        $(this).toggleClass("on");
        $(this).siblings().removeAttr("class");
    });
    t = setInterval("showAuto()", 3000);
    $("#banner").hover(function () {
        clearInterval(t)
    }, function () {
        t = setInterval("showAuto()", 3000);
    })
});
function showAuto() {
    n = n >= (count - 1) ? 0 : ++n;
    $("#banner li").eq(n).trigger('click');
}

//功能点6：返回页面顶部
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