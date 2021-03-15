/*
SQLyog Job Agent Version 9.02 Copyright(c) Webyog Softworks Pvt. Ltd. All Rights Reserved.


MySQL - 5.7.29-log : Database - interdata
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`interdata` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `interdata`;

/*Table structure for table `category1` */

DROP TABLE IF EXISTS `category1`;

CREATE TABLE `category1` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) DEFAULT NULL,
  `DESCRIPTION` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `category1` */

insert  into `category1` values (1,'Mobile','All Mobile');

/*Table structure for table `category2` */

DROP TABLE IF EXISTS `category2`;

CREATE TABLE `category2` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) DEFAULT NULL,
  `DESCRIPTION` varchar(250) DEFAULT NULL,
  `CATEGORY_ID` bigint(20) DEFAULT NULL,
  `CATEGORY_NAME` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `category2` */

insert  into `category2` values (1,'Sumsang','All Sumsang',1,'Mobile');

/*Table structure for table `product` */

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) DEFAULT NULL,
  `PRICE` varchar(10) DEFAULT NULL,
  `CATEGORY2_ID` bigint(20) DEFAULT NULL,
  `CATEGORY2_NAME` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `product` */

insert  into `product` values (1,'A16','25000',1,'Sumsang');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) DEFAULT NULL,
  `EMAIL` varchar(50) DEFAULT NULL,
  `ADDRESS` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `user` */

insert  into `user` values (1,'Mayank','mayanksahu142@gmail.com','Indore');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
