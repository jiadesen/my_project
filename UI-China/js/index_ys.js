//原生js
//功能点1：页面内容异步加载
function loadDataByTypeAndPage(type, pageNum) {
    if (window.ActiveXObject) {
        var xhr = new ActiveXObject("Microsoft.XMLHTTP"); //IE5 和 IE6
    } else if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest(); //IE7+
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // console.log('响应完成且成功');
                doResponse(xhr);
            } else {
                console.log('响应完成但有问题');
            }
        }
    };
    xhr.open('GET', 'data/ui_china.php?type=' + type + '&pageNum=' + pageNum + '&timeTmp=' + new Date().getTime(), true); //追加随机时间阻止缓存
    xhr.send(null);
    function doResponse(xhr) {
        // console.log(xhr);
        var pager = xhr.responseText;
        pager = JSON.parse(pager);
        // console.log(pager);

        //对应方法一和方法三：小撇号字符串和普通字符串拼接使用(IE11不兼容小撇号字符串)
        var html = '';
        //对应方法二：创建文档片段，对应原生DOM操作(弃用，改为普通的字符串拼接)
        // var frag_last = document.createDocumentFragment();

        for (var i = 0; i < pager.data.length; i++) {
            // 方法一：使用小撇号字符串
            // html += `
            //       <dl>
            //         <dt><img src="${pager.data[i].rec_img}"/></dt>
            //         <dd>${pager.data[i].rec_con}</dd>
            //         <dd>${pager.data[i].au_con}</dd>
            //         <dd><span><img src="${pager.data[i].au_img}"/></span><a href="#">${pager.data[i].au_name}</a></dd>
            //       </dl>
            //       `;

            //方法二：原生DOM操作(BUG弃用，改为普通的字符串拼接)
            //创建dl
            // var dl = document.createElement('dl');
            // //创建dt
            // var dt = document.createElement('dt');
            // var rec_img = new Image; //创建rec_img
            // rec_img.src = pager.data[i].rec_img;
            // //将rec_img追加到dt下
            // dt.appendChild(rec_img);
            // //将dt追加到dl中
            // dl.appendChild(dt);
            // //创建rec_con
            // var rec_con = document.createElement('dd');
            // rec_con.innerHTML = pager.data[i].rec_con;
            // dl.appendChild(rec_con);
            // //创建au_con
            // var au_con = document.createElement('dd');
            // au_con.innerHTML = pager.data[i].au_con;
            // dl.appendChild(au_con);
            // //创建dd_last
            // var dd_last = document.createElement('dd');
            // var span = document.createElement('span');
            // var au_img = new Image;
            // au_img.src = pager.data[i].au_img;
            // span.appendChild(au_img);
            // dd_last.appendChild(span);
            // var a = document.createElement('a'); //创建a
            // a.href = '#';
            // a.innerHTML = pager.data[i].au_name;
            // dd_last.appendChild(a);
            // dl.appendChild(dd_last);
            // // console.log(dl);
            // //拼接
            // // frag_last.appendChild(dl);
            // frag_last += dl;
            // console.log(frag_last);

            //方法三：普通字符串拼接
            html += '<dl><dt><img src="' + pager.data[i].rec_img + '"/></dt><dd>' + pager.data[i].rec_con + '</dd><dd>' + pager.data[i].au_con + '</dd><dd><span><img src="' + pager.data[i].au_img + '"/></span><a href="#">' + pager.data[i].au_name + '</a></dd></dl>';
        }

        //方法一：小撇号字符串向页面写入内容：
        // document.getElementById('main').firstElementChild.innerHTML = html;
        // document.getElementById('main_list').innerHTML = html;
        main_list.innerHTML = html;
        //方法二：原生DOM向页面追加内容：
        //使用方法二的一个奇怪BUG:点击分类按钮页面数据不更新，但是查看Network所有的数据请求都正确！mdzz...
        // document.getElementsByClassName('main')[0].appendChild(fra6g_last);
        // document.getElementById('main_list').appendChild(frag_last);

        //测试拿到的元素
        // console.log(document.getElementsByClassName('main')[0]);
        // console.log(document.getElementById('main_list'));

        //根据返回的分页数据，动态创建分页条内容
        var html_page = '';

        //方法一：使用小撇号字符串
        // var str = `<li>共${pager.pageCount}页/当前是第${pager.pageNum}页</li>`;
        // var first = (pager.pageNum == 1) ? `<li>首页</li>` : `<li><a href="${pager.type}" rel="1">首页</a></li>`;
        // var last = (pager.pageNum == pager.pageCount) ? `<li>尾页</li>` : `<li><a href="${pager.type}" rel="${pager.pageCount}">尾页</a></li>`;
        // var prev = (pager.pageNum == 1) ? `<li>上一页</li>` : `<li><a href="${pager.type}" rel="${pager.pageNum - 1}">上一页</a></li>`;
        // var next = (pager.pageNum == pager.pageCount) ? `<li>下一页</li>` : `<li><a href="${pager.type}" rel="${pager.pageNum + 1}">下一页</a></li>`;
        // var p = '';
        // if (pager.pageNum - 1 > 0) {
        //     p += `<li class="p"><a  class="p" href="${pager.type}" rel="${pager.pageNum - 1}">${pager.pageNum - 1}</a></li>`;
        // }
        //
        // p += `<li class="active p"><a  class="p" href="${pager.type}" rel="${pager.pageNum}">${pager.pageNum}</a></li>`;
        //
        // if (pager.pageNum + 1 > 0 && pager.pageNum < pager.pageCount) {
        //     p += `<li class="p"><a  class="p" href="${pager.type}" rel="${pager.pageNum + 1}">${pager.pageNum + 1}</a></li>`;
        // }

        //方法二：使用普通字符串拼接(兼容IE11 ==、)
        var str = '<li>共' + pager.pageCount + '页/当前是第' + pager.pageNum + '页</li>';
        var first = (pager.pageNum == 1) ? '<li>首页</li>' : '<li><a href="' + pager.type + '" rel="1">首页</a></li>';
        var last = (pager.pageNum == pager.pageCount) ? '<li>尾页</li>' : '<li><a href="' + pager.type + '" rel="' + pager.pageCount + '">尾页</a></li>';
        var prev = (pager.pageNum == 1) ? '<li>上一页</li>' : '<li><a href="' + pager.type + '" rel="' + (pager.pageNum - 1) + '">上一页</a></li>';
        var next = (pager.pageNum == pager.pageCount) ? '<li>下一页</li>' : '<li><a href="' + pager.type + '" rel="' + (pager.pageNum + 1) + '">下一页</a></li>';
        var p = '';
        if (pager.pageNum - 1 > 0) {
            p += '<li class="p"><a  class="p" href="' + pager.type + '" rel="' + (pager.pageNum - 1) + '">' + (pager.pageNum - 1) + '</a></li>';
        }

        p += '<li class="active p"><a  class="p" href="' + pager.type + '" rel="' + pager.pageNum + '">' + pager.pageNum + '</a></li>';

        if (pager.pageNum + 1 > 0 && pager.pageNum < pager.pageCount) {
            p += '<li class="p"><a  class="p" href="' + pager.type + '" rel="' + (pager.pageNum + 1) + '">' + (pager.pageNum + 1) + '</a></li>';
        }

        //拼接
        html_page = first + prev + p + next + last + str;
        document.getElementsByClassName('pager')[0].innerHTML = html_page;
    }
}

// 功能点2：页面加载完成后默认显示的内容
window.onload = function () {
    var type = "homepage";
    var pageNum = "1";
    loadDataByTypeAndPage(type, pageNum)
};

//功能点3：鼠标点击分类时异步请求对应的数据列表(闭包)
var type_a = document.getElementsByClassName('type-a');
// console.log(type_a);
for (var i = 0; i < type_a.length; i++) {
    var a = function (k) {
        type_a[k].onclick = function (e) {
            e.preventDefault();
            // console.log(e);
            // console.log(this);
            // console.log(this.parentNode);
            var active = this.parentNode; //当前激活
            active.setAttribute('class', 'active');

            //先获取this.parentNode的父元素,遍历所有子元素，如果不是当前元素，移除class="active"
            var ul = this.parentNode.parentNode;
            // console.log(ul);
            var li = ul.children;
            // console.log(li);
            for (var i = 0; i < li.length; i++) {
                // console.log(li[i]);
                // console.log(this.parentNode);
                if (li[i] != active) {
                    li[i].removeAttribute('class');
                }
            }

            // var type = this.attributes.href.value;
            var type = this.getAttribute('href');
            // console.log(type);
            // var pageNum = this.attributes.rel.value;
            var pageNum = this.getAttribute('rel');
            // console.log(pageNum);
            loadDataByTypeAndPage(type, pageNum);
        }
    };
    a(i);
}

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










