---
title: "Drupal"
date: 2023-01-01T10:00:00+10:00
image: "images/products/drupal.jpg"
layout: product
description: Drupal description
permalink: "/aws-machine-images/drupal/"
bodyClass: page-product
weight: 220
---

Drupal Content Management System
================================

Drupal is a free and open-source content-management system (CMS) that is flexible and multilingual. It can be customized to run simple websites through complex web applications. With thousands of free modules and themes Drupal based websites will help you attract the audience you need to deliver your message, grow brand awareness, and build your community. This is a repackaged open source software product wherein additional charges apply for support by Kurian.

This AMI is built using the latest versions of Apache, MariaDB database and PHP on the target Linux operating system (LAMP stack) that is patched with updates. The MariaDB database is secured to prevent any unwanted access for increased security. When a machine is spun up using this AMI Drupal would be up and running and ready for configuring for your specific requirements.

[](https://github.com/kurianinc/ami-pub/wiki/Drupal#features)Features
=====================================================================

*   AMI with the latest versions of Apache, MariaDB database and PHP (LAMP stack) on the target operating system patched with updates.
*   Runs secured version of MySQL compatible MariaDB database used with password unique to the instance.
*   Ready to be configured for specific requirements once the EC2 node is spun up from this AMI.

[](https://github.com/kurianinc/ami-pub/wiki/Drupal#configuration)Configuration
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

[](https://github.com/kurianinc/ami-pub/wiki/Drupal#unsupported-configurations)Unsupported Configurations
=========================================================================================================

Kurian releases latest, stable versions of open source software on popular Linux distributions. If you need a configuration that is not listed here, send us your requirements to [contact@kurianinc.us](mailto:contact@kurianinc.us). Please include the following info in the email:

*   Name of Software to be on the AMI with version numbers.
*   Linux distribution and the version.
*   The EC2 instance type you plan to spin up from the AMI (optional).

[](https://github.com/kurianinc/ami-pub/wiki/Drupal#how-it-works)How It Works
=============================================================================

*   When an EC2 node spun up from this AMI, Joomla would be up and running on port 80 over HTTP.
*   Minimal configuration is needed to set up the site that can be completed using the web interface provided by Joomla.
*   Additional configurations such as adding SSL encryption (access over HTTPS) following the official documentation available at [https://docs.joomla.org/Main\_Page](https://docs.joomla.org/Main_Page).

Click on the links below to take you to Amazon Marketplace for spinning up EC2 nodes.

*   \[Drupal 9.1.4 AMI for Amazon Linux 2018\](Not supported)
*   [Drupal 9.1.4 AMI for Amazon Linux 2](https://aws.amazon.com/marketplace/pp/B08YS5BKLZ)
*   [Drupal 9.1.4 AMI for CentOS 7](https://aws.amazon.com/marketplace/pp/B08YS7VFZY)
*   [Drupal 9.1.4 AMI for CentOS 8](https://aws.amazon.com/marketplace/pp/B08YS6J89G)
*   [Drupal 9.1.4 AMI for Red Hat Enterprise Linux 7](https://aws.amazon.com/marketplace/pp/B08YS5R77L)
*   [Drupal 9.1.4 AMI for Red Hat Enterprise Linux 8](https://aws.amazon.com/marketplace/pp/B08XQVSSMW)
*   \[Drupal 9.1.4 AMI for Fedora 31\](Not supported)
*   [Drupal 9.1.4 AMI for Debian 10](https://aws.amazon.com/marketplace/pp/B08XQVMWYJ)
*   [Drupal 9.1.4 AMI for Ubuntu 16.04](https://aws.amazon.com/marketplace/pp/B08XQWKBNJ)
*   [Drupal 9.1.4 AMI for Ubuntu 18.04](https://aws.amazon.com/marketplace/pp/B08XQT5JX2)
*   [Drupal 9.1.4 AMI for Ubuntu 20.04](https://aws.amazon.com/marketplace/pp/B08XQX2XPZ)
*   \[Drupal 9.1.4 AMI for openSUSE Leap 15.2\](Not supported)
*   \[Drupal 9.1.4 AMI for SUSE Linux Enterprise Server 12 SP5\](Not supported)
*   \[Drupal 9.1.4 AMI for SUSE Linux Enterprise Server 15 SP2\](Not supported)

[](https://github.com/kurianinc/ami-pub/wiki/Drupal#upgrade)Upgrade
===================================================================

Follow official Joomla documentation for upgrades and migration at [https://docs.joomla.org/Special:MyLanguage/Portal:Upgrading\_Versions](https://docs.joomla.org/Special:MyLanguage/Portal:Upgrading_Versions).

[](https://github.com/kurianinc/ami-pub/wiki/Drupal#maintenance-and-troubleshooting)Maintenance and Troubleshooting
===================================================================================================================

*   Kurian can help with configuring the application for your specific needs using this AMI. Contact us with details to [contact@kurianinc.us](mailto:contact@kurianinc.us)

[](https://github.com/kurianinc/ami-pub/wiki/Drupal#remote-access-to-ec2-node)Remote Access to EC2 Node
=======================================================================================================

Following are the standard AWS defined users available for SSH when a node is provisioned:

*   Amazon Linux: ec2-user
*   Red Hat Linux: ec2-user
*   SuSE Linux: ec2-user
*   Fedora: fedora
*   CentOS: centos
*   Debian Linux: admin
*   Ubuntu: ubuntu

[](https://github.com/kurianinc/ami-pub/wiki/Drupal#release-history)Release history
===================================================================================

*   02/28/2021 – Initial release of Drupal 9.1.4 on Debian 10, Ubuntu 16.04/18.04/20.04, Amazon Linux 2, CentOS 7.9/8.3, RHEL 7.9/8.3
