SET NAMES UTF8;

DROP DATABASE IF EXISTS ui_china;
CREATE DATABASE ui_china CHARSET=UTF8;
USE ui_china;

# 创建首页推荐表
CREATE TABLE homepage(
    hid INT PRIMARY KEY AUTO_INCREMENT,
    rec_img VARCHAR(128), # 推荐的大图
    rec_con VARCHAR(32),  # 推荐描述
    au_con VARCHAR(32),   # 作者描述
    au_name VARCHAR(32),  # 作者昵称
    au_img VARCHAR(128)   # 作者头像
);
# 插入数据
INSERT INTO homepage VALUES
(NULL,'img/main/main_1.jpg','UI中国核心用户群线上分享会','用豹纹称霸美柚大赛的直男','UI中国','img/head/s_hd_1.jpg'),
(NULL,'img/main/main_2.jpg','实力硬派设计师，你敢来认证吗...','UI中国认证设计师','UI中国','img/head/s_hd_2.jpg'),
(NULL,'img/main/main_3.jpg','核心用户群全面开放','uicner是时候亮出身份，跟我们一起并肩！','UI中国','img/head/s_hd_3.jpg'),
(NULL,'img/main/main_4.jpg','用画作诗的虹之女神','UI中国设计师-MarinaRen','UI中国人物专访','img/head/s_hd_4.jpg'),
(NULL,'img/main/main_5.jpg','关于IOS10锁屏界面交互的一次...','体验真正的交互变革！','zhuyuxuan','img/head/s_hd_5.jpg'),
(NULL,'img/main/main_6.jpg','设计师的灵感来源——东京旅行...','UI中国认证设计师','阿里巴巴UED','img/head/s_hd_6.jpg'),
(NULL,'img/main/main_7.jpg','实战项目——Sketch打造MINI W...','uicner是时候亮出身份，跟我们一起并肩！','wenroudong','img/head/s_hd_7.jpg'),
(NULL,'img/main/main_8.jpg','复杂任务引导设计——阿里云国...','UI中国设计师-MarinaRen','阿里巴巴UED','img/head/s_hd_8.jpg'),
(NULL,'img/main/main_9.jpg','SA9527-描啦个描~','描啦个描活动...','SA9527','img/head/s_hd_9.jpg'),
(NULL,'img/main/main_10.jpg','字形合一，网页设计中的图文配','UI中国认证设计师','飞屋哲','img/head/s_hd_10.jpg'),
(NULL,'img/main/main_11.jpg','字趣设计','uicner是时候亮出身份，跟我们一起并肩！','木子李','img/head/s_hd_11.jpg'),
(NULL,'img/main/main_12.jpg','LAZY STAR BOY--2','UI中国设计师-MarinaRen','白鱼123','img/head/s_hd_12.jpg'),
(NULL,'img/main/main_13.gif','小柚子的怪物世界','快来打怪物啊！！！','歌舞升平','img/head/s_hd_13.jpg'),
(NULL,'img/main/main_14.gif','百变美柚','UI中国认证设计师','蓝_若空','img/head/s_hd_14.jpg'),
(NULL,'img/main/main_15.jpg','Exercise APP概念设计','uicner是时候亮出身份，跟我们一起并肩！','JACKW','img/head/s_hd_15.jpg'),
(NULL,'img/main/main_16.jpg','日月解|Sun.Moon.Anat*my','UI中国设计师-MarinaRen','bonpo','img/head/s_hd_16.jpg'),
(NULL,'img/main/main_17.gif','咖 APP 界面 交互 设计','UI中国认证设计师','KennyCormick','img/head/s_hd_17.jpg'),
(NULL,'img/main/main_18.jpg','2015-baidu合集','UI中国认证设计师','sandman','img/head/s_hd_18.jpg'),
(NULL,'img/main/main_19.gif','春田柚子','uicner是时候亮出身份，跟我们一起并肩！','Ahoy','img/head/s_hd_19.jpg'),
(NULL,'img/main/main_20.jpg','最爱肉夹馍提案','UI中国设计师-MarinaRen','WOYOTIME','img/head/s_hd_20.jpg');

# 佳作分享表
CREATE TABLE share(
    hid INT PRIMARY KEY AUTO_INCREMENT,
    rec_img VARCHAR(128), # 推荐的大图
    rec_con VARCHAR(32),  # 推荐描述
    au_con VARCHAR(32),   # 作者描述
    au_name VARCHAR(32),  # 作者昵称
    au_img VARCHAR(128)   # 作者头像
);
INSERT INTO share VALUES
(NULL,'img/main/main_20.jpg','最爱肉夹馍提案','UI中国设计师-MarinaRen','WOYOTIME','img/head/s_hd_20.jpg'),
(NULL,'img/main/main_19.gif','春田柚子','uicner是时候亮出身份，跟我们一起并肩！','Ahoy','img/head/s_hd_19.jpg'),
(NULL,'img/main/main_18.jpg','2015-baidu合集','UI中国认证设计师','sandman','img/head/s_hd_18.jpg'),
(NULL,'img/main/main_17.gif','咖 APP 界面 交互 设计','UI中国认证设计师','KennyCormick','img/head/s_hd_17.jpg'),
(NULL,'img/main/main_16.jpg','日月解|Sun.Moon.Anat*my','UI中国设计师-MarinaRen','bonpo','img/head/s_hd_16.jpg'),
(NULL,'img/main/main_15.jpg','Exercise APP概念设计','uicner是时候亮出身份，跟我们一起并肩！','JACKW','img/head/s_hd_15.jpg'),
(NULL,'img/main/main_14.gif','百变美柚','UI中国认证设计师','蓝_若空','img/head/s_hd_14.jpg'),
(NULL,'img/main/main_13.gif','小柚子的怪物世界','快来打怪物啊！！！','歌舞升平','img/head/s_hd_13.jpg'),
(NULL,'img/main/main_12.jpg','LAZY STAR BOY--2','UI中国设计师-MarinaRen','白鱼123','img/head/s_hd_12.jpg'),
(NULL,'img/main/main_11.jpg','字趣设计','uicner是时候亮出身份，跟我们一起并肩！','木子李','img/head/s_hd_11.jpg'),
(NULL,'img/main/main_10.jpg','字形合一，网页设计中的图文配','UI中国认证设计师','飞屋哲','img/head/s_hd_10.jpg'),
(NULL,'img/main/main_9.jpg','SA9527-描啦个描~','描啦个描活动...','SA9527','img/head/s_hd_9.jpg'),
(NULL,'img/main/main_8.jpg','复杂任务引导设计——阿里云国...','UI中国设计师-MarinaRen','阿里巴巴UED','img/head/s_hd_8.jpg'),
(NULL,'img/main/main_7.jpg','实战项目——Sketch打造MINI W...','uicner是时候亮出身份，跟我们一起并肩！','wenroudong','img/head/s_hd_7.jpg'),
(NULL,'img/main/main_6.jpg','设计师的灵感来源——东京旅行...','UI中国认证设计师','阿里巴巴UED','img/head/s_hd_6.jpg'),
(NULL,'img/main/main_5.jpg','关于IOS10锁屏界面交互的一次...','体验真正的交互变革！','zhuyuxuan','img/head/s_hd_5.jpg'),
(NULL,'img/main/main_4.jpg','用画作诗的虹之女神','UI中国设计师-MarinaRen','UI中国人物专访','img/head/s_hd_4.jpg'),
(NULL,'img/main/main_3.jpg','核心用户群全面开放','uicner是时候亮出身份，跟我们一起并肩！','UI中国','img/head/s_hd_3.jpg'),
(NULL,'img/main/main_2.jpg','实力硬派设计师，你敢来认证吗...','UI中国认证设计师','UI中国','img/head/s_hd_2.jpg'),
(NULL,'img/main/main_1.jpg','UI中国核心用户群线上分享会','用豹纹称霸美柚大赛的直男','UI中国','img/head/s_hd_1.jpg');

# 最新作品表
CREATE TABLE new(
    hid INT PRIMARY KEY AUTO_INCREMENT,
    rec_img VARCHAR(128), # 推荐的大图
    rec_con VARCHAR(32),  # 推荐描述
    au_con VARCHAR(32),   # 作者描述
    au_name VARCHAR(32),  # 作者昵称
    au_img VARCHAR(128)   # 作者头像
);
INSERT INTO new VALUES
(NULL,'img/main/main_10.jpg','字形合一，网页设计中的图文配','UI中国认证设计师','飞屋哲','img/head/s_hd_10.jpg'),
(NULL,'img/main/main_9.jpg','SA9527-描啦个描~','描啦个描活动...','SA9527','img/head/s_hd_9.jpg'),
(NULL,'img/main/main_8.jpg','复杂任务引导设计——阿里云国...','UI中国设计师-MarinaRen','阿里巴巴UED','img/head/s_hd_8.jpg'),
(NULL,'img/main/main_7.jpg','实战项目——Sketch打造MINI W...','uicner是时候亮出身份，跟我们一起并肩！','wenroudong','img/head/s_hd_7.jpg'),
(NULL,'img/main/main_6.jpg','设计师的灵感来源——东京旅行...','UI中国认证设计师','阿里巴巴UED','img/head/s_hd_6.jpg'),
(NULL,'img/main/main_5.jpg','关于IOS10锁屏界面交互的一次...','体验真正的交互变革！','zhuyuxuan','img/head/s_hd_5.jpg'),
(NULL,'img/main/main_4.jpg','用画作诗的虹之女神','UI中国设计师-MarinaRen','UI中国人物专访','img/head/s_hd_4.jpg'),
(NULL,'img/main/main_3.jpg','核心用户群全面开放','uicner是时候亮出身份，跟我们一起并肩！','UI中国','img/head/s_hd_3.jpg'),
(NULL,'img/main/main_2.jpg','实力硬派设计师，你敢来认证吗...','UI中国认证设计师','UI中国','img/head/s_hd_2.jpg'),
(NULL,'img/main/main_1.jpg','UI中国核心用户群线上分享会','用豹纹称霸美柚大赛的直男','UI中国','img/head/s_hd_1.jpg'),
(NULL,'img/main/main_20.jpg','最爱肉夹馍提案','UI中国设计师-MarinaRen','WOYOTIME','img/head/s_hd_20.jpg'),
(NULL,'img/main/main_19.gif','春田柚子','uicner是时候亮出身份，跟我们一起并肩！','Ahoy','img/head/s_hd_19.jpg'),
(NULL,'img/main/main_18.jpg','2015-baidu合集','UI中国认证设计师','sandman','img/head/s_hd_18.jpg'),
(NULL,'img/main/main_17.gif','咖 APP 界面 交互 设计','UI中国认证设计师','KennyCormick','img/head/s_hd_17.jpg'),
(NULL,'img/main/main_16.jpg','日月解|Sun.Moon.Anat*my','UI中国设计师-MarinaRen','bonpo','img/head/s_hd_16.jpg'),
(NULL,'img/main/main_15.jpg','Exercise APP概念设计','uicner是时候亮出身份，跟我们一起并肩！','JACKW','img/head/s_hd_15.jpg'),
(NULL,'img/main/main_14.gif','百变美柚','UI中国认证设计师','蓝_若空','img/head/s_hd_14.jpg'),
(NULL,'img/main/main_13.gif','小柚子的怪物世界','快来打怪物啊！！！','歌舞升平','img/head/s_hd_13.jpg'),
(NULL,'img/main/main_12.jpg','LAZY STAR BOY--2','UI中国设计师-MarinaRen','白鱼123','img/head/s_hd_12.jpg'),
(NULL,'img/main/main_11.jpg','字趣设计','uicner是时候亮出身份，跟我们一起并肩！','木子李','img/head/s_hd_11.jpg')