<?php
    header('Content-Type:application/json;charset=UTF-8');
    //服务器信息
    $db_url = '127.0.0.1';
    $db_user = 'root';
    $db_pwd = '';
    $db_name = 'ui_china';
    $db_port = '3306';
    //$db_url = SAE_MYSQL_HOST_M;
    //$db_user = SAE_MYSQL_USER;
    //$db_pwd = SAE_MYSQL_PASS;
    //$db_name = SAE_MYSQL_DB;
    //$db_port = SAE_MYSQL_PORT;
    //接收客户端提交的类别
    $key = $_REQUEST['key'];
    $conn = mysqli_connect($db_url,$db_user, $db_pwd, $db_name, $db_port);
    $sql = "SET NAMES UTF8";
    mysqli_query($conn,$sql);
    $arr = [];
    $sql = "SELECT * FROM $key ORDER BY hid LIMIT 20";
    $result = mysqli_query($conn,$sql);
    while(($list = mysqli_fetch_assoc($result))!=null){

        $arr[] = $list;
    }
    echo json_encode($arr);