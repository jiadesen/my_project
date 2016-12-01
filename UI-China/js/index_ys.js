//原生js
//功能点1：页面内容异步加载
function loadDataByKey(key) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                doResponse(xhr);
            } else {
                console.log('响应完成但有问题');
            }
        }
    };
    xhr.open('GET', 'data/ui_china_ys.php?key=' + key, true);
    xhr.send(null);
    function doResponse(xhr) {
        var data = xhr.responseText;
        data = JSON.parse(data);
        // console.log(data);
        // console.log(data[1]);
        var html = '';
        var frag_last = document.createDocumentFragment();
        for (var i = 0; i < data.length; i++) {
            //方法一：使用小撇号字符串
            // html += `
            //       <dl>
            //         <dt><img src="${data[i].rec_img}"/></dt>
            //         <dd>${data[i].rec_con}</dd>
            //         <dd>${data[i].au_con}</dd>
            //         <dd><span><img src="${data[i].au_img}"/></span><a href="#">${data[i].au_name}</a></dd>
            //       </dl>
            //       `;

            //方法二：原生DOM操作
            //创建dl
            var dl = document.createElement('dl');
            //创建文档片段
            var frag = document.createDocumentFragment();
            //创建dt
            var dt = document.createElement('dt');
            //创建rec_img
            var rec_img = new Image;
            rec_img.src = data[i].rec_img;
            //将rec_img追加到dt下
            dt.appendChild(rec_img);
            //将dt追加到文档片段中
            frag.appendChild(dt);
            //创建rec_con
            var rec_con = document.createElement('dd');
            rec_con.innerHTML = data[i].rec_con;
            frag.appendChild(rec_con);
            //创建au_con
            var au_con = document.createElement('dd');
            au_con.innerHTML = data[i].au_con;
            frag.appendChild(au_con);
            //创建dd_last
            var dd_last = document.createElement('dd');
            var span = document.createElement('span');
            var au_img = new Image;
            au_img.src = data[i].au_img;
            span.appendChild(au_img);
            dd_last.appendChild(span);
            //创建a
            var a = document.createElement('a');
            a.href = '#';
            a.innerHTML = data[i].au_name;
            dd_last.appendChild(a);
            frag.appendChild(dd_last);
            //将追加完成的frag追加到dl中
            dl.appendChild(frag);
            //
            frag_last.appendChild(dl);
        }
        //方法一：小撇号字符串向页面写入内容：
        // document.getElementById('main').firstElementChild.innerHTML = html;
        //方法二：原生DOM向页面追加内容：
        document.getElementsByClassName('main')[0].appendChild(frag_last);

        //测试拿到的元素
        // console.log(document.getElementsByClassName('main')[0]);
        // console.log(document.getElementById('main').firstElementChild);
    }
}

//功能点2：页面加载完成后默认显示的内容
window.onload = function () {
    loadDataByKey("homepage")
};

//功能点3：鼠标点击时异步请求对应的数据列表
