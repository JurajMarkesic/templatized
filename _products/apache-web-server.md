---
# SEO
title: Apache Web Server
description: write_a_description_around_160_characters_long_about_this_WORK_POST
image: /assets/images/seo/banner.png

# PAGE
date: 2023-01-01T10:00:00+10:00
name: Apache Web Server
thumbnail: assets/images/products/apache-web-server.jpg
synopsis: Nam eu quam maximus, mattis nisl volutpat, euismod magna. Duis bibendum interdum placerat.
permalink: aws-machine-images/apache-web-server
# link: https://example.com/
weight: 10
---

Apache Web Server
=================

Apache HTTP server has been running millions of websites of all varieties and it is one of the most popular open source applications also. The Kurian AMI bakes the latest version of Apache HTTP server software onto the target Linux distribution updated with latest OS patches. A node spun out of this AMI will be ready to be added to a cluster or further configuration immediately.

The AMI has PHP and supporting modules also installed including MySQL client modules. So, the PHP applications can connect remotely to MySQL compatible databases, including AWS RDS Aurora and MariaDB. If a database is needed locally, the LAMP stack AMI by Kurian is recommended instead of this AMI product. Also, the AMI is configured for Ansible to work with the nodes spun up from it.

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Web-Server#features)Features
================================================================================

*   Latest Apache HTTP Server with support for PHP.
*   AMI generated with latest OS patches and Ansible support.
*   Support to connect to remote MySQL databases.

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Web-Server#how-it-works)How It Works
========================================================================================

The AMI is preinstalled with Apache and PHP with supporting modules especially for connecting to remote databases. Spin up the node and deploy web sites or PHP applications to the Apache document root, and they would work with additional configuration.

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Web-Server#verify-the-availability-of-apache-and-php)Verify the availability of Apache and PHP
--------------------------------------------------------------------------------------------------------------------------------------------------

*   After the EC2 node spun up from this node is up and running, access [http://EC2-NODE-IP/index.php](http://ec2-node-ip/index.php) and check if phpinfo can be viewed on the browser.
*   Deploy the application or website to the document root. On most of the Linux distributions that is `/var/www/html` and on SUSE versions of Linux it is `/srv/www/htdocs`. If the application needs to be deployed as part of provisioning the node, use user data option of EC2 that is also supported by Terraform.

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Web-Server#supported-platforms)Supported Platforms
======================================================================================================

Click on the links below to take you to Amazon Marketplace for spinning up EC2 nodes.

*   [Apache Web Server AMI for Amazon Linux 2018](https://aws.amazon.com/marketplace/pp/prodview-qkbhn57ess3qq?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Web Server AMI for Amazon Linux 2](https://aws.amazon.com/marketplace/pp/prodview-jiyt4k2qtdr2i?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Web Server AMI for CentOS 7](https://aws.amazon.com/marketplace/pp/prodview-wsrzifawnecrs?sr=0-2&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Web Server AMI for CentOS 8](https://aws.amazon.com/marketplace/pp/prodview-efpwzlgityucw?sr=0-2&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Web Server AMI for Red Hat Enterprise Linux 7](https://aws.amazon.com/marketplace/pp/prodview-gj4jhplyu2i6g?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Web Server AMI for Red Hat Enterprise Linux 8](https://aws.amazon.com/marketplace/pp/B08VS542X8)
*   [Apache Web Server AMI for Fedora 31](https://aws.amazon.com/marketplace/pp/prodview-qf2dl7k7cikpa?sr=0-2&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Web Server AMI for Debian 10](https://aws.amazon.com/marketplace/pp/prodview-2h27mbf6nxjck)
*   [Apache Web Server AMI for Ubuntu 16.04](https://aws.amazon.com/marketplace/pp/prodview-bd65pkb6zv3uc?sr=0-2&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Web Server AMI for Ubuntu 18.04](https://aws.amazon.com/marketplace/pp/prodview-bftltwq5hr7bu?sr=0-2&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Web Server AMI for Ubuntu 20.04](https://aws.amazon.com/marketplace/pp/prodview-b6jahfzkoe5ae?sr=0-2&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Web Server AMI for openSUSE Leap 15.2](https://aws.amazon.com/marketplace/pp/B08W4F5KSD)
*   [Apache Web Server AMI for SUSE Linux Enterprise Server 12 SP5](https://aws.amazon.com/marketplace/pp/prodview-qofe3j6nojomi?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Web Server AMI for SUSE Linux Enterprise Server 15 SP2](https://aws.amazon.com/marketplace/pp/prodview-rvlpiaa3zthaq)

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Web-Server#unsupported-configurations)Unsupported Configurations
====================================================================================================================

Kurian releases latest, stable versions of open source software on popular Linux distributions. If you need a configuration that is not currently available in marketplace, send us your requirements to [contact@kurianinc.us](mailto:contact@kurianinc.us). Please include the following info in the email:

*   Name of Software to be on the AMI with version numbers.
*   Linux distribution and the version.
*   The EC2 instance type you plan to spin up from the AMI (optional).

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Web-Server#configuration)Configuration
==========================================================================================

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Web-Server#upgrade)Upgrade
==============================================================================

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Web-Server#maintenance-and-troubleshooting)Maintenance and Troubleshooting
==============================================================================================================================

Kurian can help with configuring the application for your specific needs. Contact us with details to [contact@kurianinc.us](mailto:contact@kurianinc.us)

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Web-Server#remote-access-to-ec2-node)Remote Access to EC2 Node
==================================================================================================================

Following are the standard AWS defined users available for SSH when a node is provisioned:

*   Amazon Linux: ec2-user
*   Red Hat Linux: ec2-user
*   SuSE Linux: ec2-user
*   Fedora: fedora
*   CentOS: centos
*   Debian Linux: admin
*   Ubuntu: ubuntu