---
title: "Joomla! on LAMP Stack"
date: 2023-01-01T10:00:00+10:00
image: "images/products/joomla.jpg"
layout: product
description: Joomla! on LAMP Stack description
permalink: "/aws-machine-images/joomla-on-lamp-stack/"
bodyClass: page-product
weight: 90
---

Joomla! Content Management System
=================================

Joomla is an award winning, free and open source content management system (CMS) for publishing web content. It is built on a model view controller web application framework that can be used independently of the CMS that allows you to build powerful online applications. It can be used for building variety of websites like corporate websites or portals, intranets and extranets, small business websites, online magazines, newspapers and publications, eCommerce and online reservations, government, nonprofit and organizational websites, community based, school and church websites or portals and personal or family homepages.

This AMI is built using the latest versions of Apache, MariaDB database and PHP on the target operating system patched with updates. The MariaDB database is secured to prevent any unwanted access for increased security. When a machine is spun up using this AMI Joomla would be up and running and ready for configuring for your specific requirements.

[](https://github.com/kurianinc/ami-pub/wiki/Joomla#features)Features
=====================================================================

*   AMI with the latest versions of Apache, MariaDB database and PHP (LAMP stack) on the target operating system patched with updates.
*   Runs secured version of MySQL compatible MariaDB database used with password unique to the instance.
*   Ready to be configured for specific requirements once the EC2 node is spun up from this AMI.

[](https://github.com/kurianinc/ami-pub/wiki/Joomla#configuration)Configuration
===============================================================================

*   When an EC2 node is spun up from this AMI, Joomla! would be up and running on port 80 over HTTP, with latest versions of Apache Web Server, PHP and MySQL compatible MariaDB.
*   Get the public IP address and point the domain associated with the site to that IP address by making appropriate DNS changes.
*   Your site on Joomla can be configured by using the URL [http://yourdomain.com](http://yourdomain.com/) or [http://PUBLIC-IP](http://public-ip/). Detailed steps are available at [https://docs.joomla.org/Special:MyLanguage/J3.x:Installing\_Joomla#Start\_Install](https://docs.joomla.org/Special:MyLanguage/J3.x:Installing_Joomla#Start_Install)
*   For configuring the site use the following database info:
    *   Host: `localhost`
    *   Database Name: `joomla`
    *   Database User: `joomla`
    *   Database Password: `Instance ID` of the EC2 instance.
*   Note that FTP service is not enabled on this machine by default and you need to manually configure it, if that is required.

[](https://github.com/kurianinc/ami-pub/wiki/Joomla#unsupported-configurations)Unsupported Configurations
=========================================================================================================

Kurian releases latest, stable versions of open source software on popular Linux distributions. If you need a configuration that is not listed here, send us your requirements to [contact@kurianinc.us](mailto:contact@kurianinc.us). Please include the following info in the email:

*   Name of Software to be on the AMI with version numbers.
*   Linux distribution and the version.
*   The EC2 instance type you plan to spin up from the AMI (optional).

[](https://github.com/kurianinc/ami-pub/wiki/Joomla#how-it-works)How It Works
=============================================================================

*   When an EC2 node spun up from this AMI, Joomla would be up and running on port 80 over HTTP.
*   Minimal configuration is needed to set up the site that can be completed using the web interface provided by Joomla.
*   Additional configurations such as adding SSL encryption (access over HTTPS) following the official documentation available at [https://docs.joomla.org/Main\_Page](https://docs.joomla.org/Main_Page).

Click on the links below to take you to Amazon Marketplace for spinning up EC2 nodes.

*   [Joomla 3.9.24 AMI for Amazon Linux 2018](https://github.com/kurianinc/ami-pub/wiki/Joomla)
*   [Joomla 3.9.24 AMI for Amazon Linux 2](https://aws.amazon.com/marketplace/pp/prodview-guqn27dmha662?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Joomla 3.9.24 AMI for CentOS 7](https://aws.amazon.com/marketplace/pp/B08X9WX3VZ)
*   [Joomla 3.9.24 AMI for CentOS 8](https://aws.amazon.com/marketplace/pp/B08YK82782)
*   [Joomla 3.9.24 AMI for Red Hat Enterprise Linux 7](https://aws.amazon.com/marketplace/pp/B08XB6RPWQ)
*   [Joomla 3.9.24 AMI for Red Hat Enterprise Linux 8](https://aws.amazon.com/marketplace/pp/B08XBV24HD)
*   [Joomla 3.9.24 AMI for Fedora 31](https://github.com/kurianinc/ami-pub/wiki/Joomla)
*   [Joomla 3.9.24 AMI for Debian 10](http://aws.amazon.com/marketplace/pp/B08X4WPNGX)
*   [Joomla 3.9.24 AMI for Ubuntu 16.04](https://aws.amazon.com/marketplace/pp/B08XB1L157)
*   [Joomla 3.9.24 AMI for Ubuntu 18.04](https://aws.amazon.com/marketplace/pp/B08XBGKJV5)
*   [Joomla 3.9.24 AMI for Ubuntu 20.04](https://aws.amazon.com/marketplace/pp/B08XB61MX8)
*   [Joomla 3.9.24 AMI for openSUSE Leap 15.2](https://github.com/kurianinc/ami-pub/wiki/Joomla)
*   [Joomla 3.9.24 AMI for SUSE Linux Enterprise Server 12 SP5](https://github.com/kurianinc/ami-pub/wiki/Joomla)
*   [Joomla 3.9.24 AMI for SUSE Linux Enterprise Server 15 SP2](https://github.com/kurianinc/ami-pub/wiki/Joomla)

[](https://github.com/kurianinc/ami-pub/wiki/Joomla#upgrade)Upgrade
===================================================================

Follow official Joomla documentation for upgrades and migration at [https://docs.joomla.org/Special:MyLanguage/Portal:Upgrading\_Versions](https://docs.joomla.org/Special:MyLanguage/Portal:Upgrading_Versions).

[](https://github.com/kurianinc/ami-pub/wiki/Joomla#maintenance-and-troubleshooting)Maintenance and Troubleshooting
===================================================================================================================

*   Kurian can help with configuring the application for your specific needs using this AMI. Contact us with details to [contact@kurianinc.us](mailto:contact@kurianinc.us)

[](https://github.com/kurianinc/ami-pub/wiki/Joomla#remote-access-to-ec2-node)Remote Access to EC2 Node
=======================================================================================================

Following are the standard AWS defined users available for SSH when a node is provisioned:

*   Amazon Linux: ec2-user
*   Red Hat Linux: ec2-user
*   SuSE Linux: ec2-user
*   Fedora: fedora
*   CentOS: centos
*   Debian Linux: admin
*   Ubuntu: ubuntu
