<?php
header('Content-Type:application/json;charset=UTF-8');
//服务器信息
$db_url = '127.0.0.1';
$db_user = 'root';
$db_pwd = '';
$db_name = 'ui_china';
$db_port = '3306';
//新浪云
//$db_url = SAE_MYSQL_HOST_M;
//$db_user = SAE_MYSQL_USER;
//$db_pwd = SAE_MYSQL_PASS;
//$db_name = SAE_MYSQL_DB;
//$db_port = SAE_MYSQL_PORT;

//接收客户端提交的类别
$type = $_REQUEST['type'];
$pageNum = $_REQUEST['pageNum'];

/***向客户端输出了分页对象***/
$pager = [
    'type' => $type,
    'recorderCount' => 0, //总记录数
    'pageSize' => 20, //页面大小
    'pageCount' => 0, //总页数
    'pageNum' => intval($pageNum), //当前页号
    'data' => null
];
/**************************/

//连接数据库
$conn = mysqli_connect($db_url, $db_user, $db_pwd, $db_name, $db_port);
//设置编码方式
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);
//获取总记录数，计算总页数
$sql = "SELECT COUNT(*) FROM $type";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$pager['recorderCount'] = intval($row['COUNT(*)']); //将字符串解析为整数
$pager['pageCount'] = ceil(($pager['recorderCount']) / ($pager['pageSize']));

//获取当前指定页中的记录
$start = ($pager['pageNum'] - 1) * $pager['pageSize']; //从哪一行开始获取数据
$count = $pager['pageSize']; //读取多少行
$sql = "SELECT * FROM $type LIMIT $start,$count";
$result = mysqli_query($conn, $sql);

//读取所有数据记录
$pager['data'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
//输出
echo json_encode($pager);