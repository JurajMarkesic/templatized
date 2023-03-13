---
title: "Secured MariaDB Server"
date: 2023-01-01T10:00:00+10:00
image: "images/products/maria-db.jpg"
layout: product
description: Secured MariaDB Server description
permalink: "/aws-machine-images/secured-mariadb-server/"
bodyClass: page-product
weight: 50
---

Secured MariaDB
===============

MariaDB is an open-source MySQL database compatible database and the Kurian AMI has the latest stable release of MariaDB installed for the targeted Linux platform. The installation is secured by running mysql\_secure\_installation.

[](https://github.com/kurianinc/ami-pub/wiki/Secured-MariaDB-AMI#features)Features
==================================================================================

*   Latest, stable release with OS patches.
*   Secured installation.

[](https://github.com/kurianinc/ami-pub/wiki/Secured-MariaDB-AMI#how-it-works)How It Works
==========================================================================================

The MariaDB database server is ready for use when an EC2 instance is spun from this AMI. An ideal resource to use with automated infrastructure provisioning when a MariaDB or MySQL database is needed as part of the cluster and available for use immediately.

[](https://github.com/kurianinc/ami-pub/wiki/Secured-MariaDB-AMI#supported-platforms)Supported Platforms
========================================================================================================

Click on the links below to take you to Amazon Marketplace for spinning up EC2 nodes.

*   [Secured MariaDB 10.5 AMI for Amazon Linux 2](http://aws.amazon.com/marketplace/pp/B08T9X8CD6)
*   [Secured MariaDB 10.5 AMI for CentOS 7.9](http://aws.amazon.com/marketplace/pp/B08T9W487L)
*   [Secured MariaDB 10.5 AMI CentOS 8.3](https://aws.amazon.com/marketplace/pp/B08V1BDL9Z)
*   [Secured MariaDB 10.5 AMI Red Hat Enterprise Linux 7.9](http://aws.amazon.com/marketplace/pp/B08T9X3YSW)
*   [Secured MariaDB 10.5 AMI for Red Hat Enterprise Linux 8.3](https://aws.amazon.com/marketplace/pp/B08T9W7C1Q)
*   [Secured MariaDB 10.5 AMI for Debian 10](http://aws.amazon.com/marketplace/pp/B08T9VNBT1)
*   [Secured MariaDB 10.5 AMI for Ubuntu 16.04](https://aws.amazon.com/marketplace/pp/B08T1J35R1)
*   [Secured MariaDB 10.5 AMI for Ubuntu 18.04](http://aws.amazon.com/marketplace/pp/B08T9XXXPY)
*   [Secured MariaDB 10.5 AMI for Ubuntu 20.04](http://aws.amazon.com/marketplace/pp/B08T9VWKGW)

[](https://github.com/kurianinc/ami-pub/wiki/Secured-MariaDB-AMI#unsupported-configurations)Unsupported Configurations
======================================================================================================================

Kurian releases latest, stable versions of open source software on popular Linux distributions. If you need a configuration that is not currently available in marketplace, send us your requirements to [contact@kurianinc.us](mailto:contact@kurianinc.us). Please include the following info in the email:

*   Name of Software to be on the AMI with version numbers.
*   Linux distribution and the version.
*   The EC2 instance type you plan to spin up from the AMI (optional).

[](https://github.com/kurianinc/ami-pub/wiki/Secured-MariaDB-AMI#configuration)Configuration
============================================================================================

*   Besides running mysql\_secure\_installation for securing the database, no configuration is done.
*   SSH into the EC2 instance running the database as user specific to the operating system. See `Remote Access to EC2 Node` below to see the users listed.
*   Connect to the database as `root` using instance id as the password. If that doesn’t work try the password `dummypass`. Change password if needed.

[](https://github.com/kurianinc/ami-pub/wiki/Secured-MariaDB-AMI#upgrade)Upgrade
================================================================================

Using the related MariaDB documentation migrate old databases to the newly created instance.

[](https://github.com/kurianinc/ami-pub/wiki/Secured-MariaDB-AMI#maintenance-and-troubleshooting)Maintenance and Troubleshooting
================================================================================================================================

Kurian can help with configuring Jenkins for your specific needs. Contact us with details to [contact@kurianinc.us](mailto:contact@kurianinc.us)

[](https://github.com/kurianinc/ami-pub/wiki/Secured-MariaDB-AMI#remote-access-to-ec2-node)Remote Access to EC2 Node
====================================================================================================================

Following are the standard AWS defined users available when a node is provisioned:

*   Amazon Linux: ec2-user
*   Red Hat Linux: ec2-user
*   SuSE Linux: ec2-user
*   Fedora: fedora
*   CentOS: centos
*   Debian Linux: admin
*   Ubuntu: ubuntu