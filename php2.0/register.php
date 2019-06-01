<?php
    //注册接口
    header("content-type:text/html;charset=utf8");
    include('public.php');


    //接收前端传来的数据   用户名和手机号、密码
    $uname = $_GET["uname"];
    $phone = $_GET["phone"];
    $upwd = $_GET["upwd"];

    //查找用户名。如果存在则注册失败，如果不存在添加成功

    //sql语句   获取的集合
    $sql = "select * from user2 where uname = '$uname'";

    $res = mysqli_query($connect,$sql);

    //返回查找的信息
    $arr = mysqli_fetch_assoc($res);

    if($arr){
        echo json_encode(array(
            "state" => "0",
            "info" => "账号存在,请重新注册"
        ));
    }else{
      //往数据库添加数据
       $insert = "insert into user2 (uname,phone,upwd) values ('$uname','$phone','$upwd')";
       mysqli_query($connect,$insert);
        echo json_encode(array(
            "state" => "1",
            "info" => "注册成功"
        ));
    }
?>