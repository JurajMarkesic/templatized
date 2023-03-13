---
title: "Postfix Mail Server"
date: 2023-01-01T10:00:00+10:00
image: "images/products/postfix.jpg"
layout: product
description: Postfix Mail Server description
permalink: "/aws-machine-images/postfix-mail-server/"
bodyClass: page-product
weight: 140
---

Introduction
============

Postfix can be used as a full-featured SMTP server or as a Mail Transfer Agent (MTA). In a public cloud environment, the usual requirement is to have a MTA for the applications to send out emails using the corporate email infrastructure. A Postfix server can be configured to do that. This AMI has the latest, stable build of Postfix Mail Server installed on the target operating system with latest patches applied.

[](https://github.com/kurianinc/ami-pub/wiki/Postfix-Mail-Server#supported-platforms)Supported platforms
========================================================================================================

Following distributions and versions of AMIs are available on AWS Marketplace:

*   [Postfix Mail Server for Debian Linux 10](https://aws.amazon.com/marketplace/pp/prodview-c2rrnbybkgx26?sr=0-6&ref_=beagle&applicationId=AWSMPContessa)
*   [Postfix Mail Server for Amazon Linux 2018](https://aws.amazon.com/marketplace/pp/prodview-rbtls22pznpry?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Postfix Mail Server for Amazon Linux 2](https://aws.amazon.com/marketplace/pp/prodview-jkireg3r3qfpm?sr=0-5&ref_=beagle&applicationId=AWSMPContessa)
*   [Postfix Mail Server for Ubuntu 16.04](https://aws.amazon.com/marketplace/pp/prodview-osyqg34brbitq?sr=0-4&ref_=beagle&applicationId=AWSMPContessa)
*   [Postfix Mail Server for Ubuntu 18.04](https://aws.amazon.com/marketplace/pp/prodview-ybh67ynbdqrdi?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Postfix Mail Server for Ubuntu 20.04](https://aws.amazon.com/marketplace/pp/prodview-rjvyskrhlcd7c?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Postfix Mail Server for CentOS 7](https://aws.amazon.com/marketplace/pp/prodview-pbc6dlvmjtb2c?sr=0-3&ref_=beagle&applicationId=AWSMPContessa)
*   [Postfix Mail Server for CentOS 8](https://aws.amazon.com/marketplace/pp/prodview-flg6s7tdyvbq2?sr=0-2&ref_=beagle&applicationId=AWSMPContessa)
*   [Postfix Mail Server for Red Hat Enterprise Linux 7](https://aws.amazon.com/marketplace/pp/prodview-3dsfqzdorgjao?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Postfix Mail Server for Red Hat Enterprise Linux 8](https://aws.amazon.com/marketplace/pp/prodview-u55qco7ft3jj2)
*   [Postfix Mail Server for Fedora 31](https://github.com/kurianinc/ami-pub/wiki/Postfix-Mail-Server)
*   [Postfix Mail Server for SUSE Linux 12](https://github.com/kurianinc/ami-pub/wiki/Postfix-Mail-Server)
*   [Postfix Mail Server for SUSE Linux 15](https://github.com/kurianinc/ami-pub/wiki/Postfix-Mail-Server)
*   [Postfix Mail Server for openSUSE Linux Leap 15.2](https://github.com/kurianinc/ami-pub/wiki/Postfix-Mail-Server)

[](https://github.com/kurianinc/ami-pub/wiki/Postfix-Mail-Server#unsupported-configurations)Unsupported Configurations
======================================================================================================================

Kurian releases latest, stable versions of open source software on popular Linux distributions. If you need a configuration that is not currently available in marketplace, send us your requirements to [contact@kurianinc.us](mailto:contact@kurianinc.us). Please include the following info in the email:

*   Name of Software to be on the AMI with version numbers.
*   Linux distribution and the version.
*   The EC2 instance type you plan to spin up from the AMI (optional).

[](https://github.com/kurianinc/ami-pub/wiki/Postfix-Mail-Server#configuration)Configuration
============================================================================================

*   SSH into the new EC2 instance as user specific to the operating system. See `Remote Access to EC2 Node` below to see the users listed.
*   The Postfix service can be managed using the systemd command `sudo systemctl start|stop|status postfix`. The service will be up and running when the node is ready. The service can also be managed using postfix commands: `postfix start|stop|status`. Note: On Ubuntu 20.04 the postfix service will not be running after the EC2 node is spun up. It can be started/stopped using the command: sudo /usr/sbin/postfix start|stop
*   After the EC2 node is spun up refer the Postfix documentation for setting it up. Kurian also provides professional services to configure mail or MTA services for any AWS environment based on this AMI.

[](https://github.com/kurianinc/ami-pub/wiki/Postfix-Mail-Server#upgrade)Upgrade
================================================================================

*   Move existing Postfix configurations to a new instance and restart the `postfix` service.
*   To upgrade to a new version of Postfix, spin up a new host with that version and move the configurations to that host. In place upgrade is not recommended unless it’s not used in production.

[](https://github.com/kurianinc/ami-pub/wiki/Postfix-Mail-Server#maintenance-and-troubleshooting)Maintenance and Troubleshooting
================================================================================================================================

Kurian can help with configuring Jenkins for your specific needs. Contact us with details to [contact@kurianinc.us](mailto:contact@kurianinc.us)

[](https://github.com/kurianinc/ami-pub/wiki/Postfix-Mail-Server#remote-access-to-ec2-node)Remote Access to EC2 Node
====================================================================================================================

Following are the standard AWS defined users available when a node is provisioned:

*   Amazon Linux: ec2-user
*   Red Hat Linux: ec2-user
*   SuSE Linux: ec2-user
*   Fedora: fedora
*   CentOS: centos
*   Debian Linux: admin
*   Ubuntu: ubuntu
