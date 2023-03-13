---
title: "LAMP Stack"
date: 2023-01-01T10:00:00+10:00
image: "images/products/lamp.jpg"
layout: product
description: LAMP Stack description
permalink: "/aws-machine-images/lamp-stack/"
bodyClass: page-product
weight: 60
---

LAMP Stack
==========

Kurian’s LAMP stack has the latest version of Apache, MariaDB and PHP pre-installed on the target Linux platform that is updated with OS and security patches. The MariaDB is secured and a PHP application can readily be deployed on a node that’s spun up from this AMI.

The version of Kurian’s LAMP Stack AMI is tied to the major version of PHP used in the stack.

[](https://github.com/kurianinc/ami-pub/wiki/LAMP-Stack#features)Features
=========================================================================

*   Latest versions of Apache, MariaDB and PHP.
*   Latest, stable release with OS patches.
*   Secured MariaDB installation.

[](https://github.com/kurianinc/ami-pub/wiki/LAMP-Stack#how-it-works)How it works
=================================================================================

The LAMP Stack is pre-configured with Apache, MariaDB and PHP. If the web application requires database support those objects need to be created and data be populated.

[](https://github.com/kurianinc/ami-pub/wiki/LAMP-Stack#supported-platforms)Supported platforms
===============================================================================================

Click on the links below to take you to Amazon Marketplace for spinning up EC2 nodes.

*   [LAMP Stack 7 AMI for Amazon Linux 2](https://aws.amazon.com/marketplace/pp/prodview-g4jko53l6tksg?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [LAMP Stack 7 for Amazon Linux 2018](https://aws.amazon.com/marketplace/pp/prodview-pwoklnbdtumve?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [LAMP Stack 7 AMI for CentOS 7.9](http://aws.amazon.com/marketplace/pp/B08TB1YY1Y)
*   [LAMP Stack 7 AMI CentOS 8.3](https://aws.amazon.com/marketplace/pp/prodview-uafdsx2fiotsc?sr=0-3&ref_=beagle&applicationId=AWSMPContessa)
*   [LAMP Stack 7 AMI Red Hat Enterprise Linux 7.9](https://aws.amazon.com/marketplace/pp/prodview-7marjyl2e74va?sr=0-2&ref_=beagle&applicationId=AWSMPContessa)
*   [LAMP Stack 7 AMI for Red Hat Enterprise Linux 8.3](https://aws.amazon.com/marketplace/pp/prodview-mvx4qty3z6u4g?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [LAMP Stack 7 AMI for Debian 10](http://aws.amazon.com/marketplace/pp/B08TB4S74K)
*   [LAMP Stack 7 AMI for Ubuntu 16.04](http://aws.amazon.com/marketplace/pp/B08TB512DL)
*   [LAMP Stack 7 AMI for Ubuntu 18.04](https://aws.amazon.com/marketplace/pp/prodview-shtl43zymwlni?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [LAMP Stack 7 AMI for Ubuntu 20.04](https://aws.amazon.com/marketplace/pp/prodview-z4uzco3kgblbk?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)

[](https://github.com/kurianinc/ami-pub/wiki/LAMP-Stack#configuration)Configuration
===================================================================================

*   mysql\_secure\_installation has been run on MariaDB and the root access is password authenticated, and it can be accessed only locally. For accessing database from remote hosts set up non-root users.
*   SSH into the EC2 instance running the database as user specific to the operating system. See `Remote Access to EC2 Node` below to see the users listed.
*   Connect to the database as `root` using instance id as the password. If that password doesn’t work use `dummypass`. Change password if needed.

[](https://github.com/kurianinc/ami-pub/wiki/LAMP-Stack#application-installation)Application installation
=========================================================================================================

The html or PHP applications can be deployed by copying that to the document root and setting the correct permissions. Those settings are operating system dependent as documented below:

[](https://github.com/kurianinc/ami-pub/wiki/LAMP-Stack#document-root)Document Root
-----------------------------------------------------------------------------------

### [](https://github.com/kurianinc/ami-pub/wiki/LAMP-Stack#default-document-root)Default document root

*   Amazon Linux: /var/www
*   Debian: /var/www
*   Ubuntu: /var/www
*   CentOS: /var/www
*   Fedora: /var/www
*   Red Hat Enterprise Linux: /var/www
*   SUSE distributions: /srv/www

If you like to use a different location for document root, that must be updated in the Apache configuration file and its location depends on the Linux distribution as follows.

### [](https://github.com/kurianinc/ami-pub/wiki/LAMP-Stack#apache-config-file)Apache config file

*   Amazon Linux: /etc/httpd/conf/httpd.conf
*   Debian: /etc/apache2/sites-enabled/000-default.conf
*   Ubuntu: /etc/apache2/sites-enabled/000-default.conf
*   CentOS: /etc/httpd/conf/httpd.conf
*   Fedora: /etc/httpd/conf/httpd.conf
*   Red Hat Enterprise Linux: /etc/httpd/conf/httpd.conf
*   SUSE distributions: /etc/apache2/default-server.conf

[](https://github.com/kurianinc/ami-pub/wiki/LAMP-Stack#os-owner)OS owner
-------------------------------------------------------------------------

*   Amazon Linux: apache
*   Debian: www-data
*   Ubuntu: www-data
*   CentOS: apache
*   Fedora: apache
*   Red Hat Enterprise Linux: apache
*   SUSE distributions: wwwrun

[](https://github.com/kurianinc/ami-pub/wiki/LAMP-Stack#os-group)OS group
-------------------------------------------------------------------------

*   Amazon Linux: www
*   Debian: www-data
*   Ubuntu: www-data
*   CentOS: www
*   Fedora: www
*   Red Hat Enterprise Linux: www
*   SUSE distributions: www

The permissions on the files copied to the document root can be set as in the following example:

    $ chown -R apache:www /var/www
    

Make sure you use the correct OS owner and group and document root location for the target Linux distribution.

[](https://github.com/kurianinc/ami-pub/wiki/LAMP-Stack#upgrade)Upgrade
=======================================================================

The individual components can be upgraded manually on the instance. However, it can break the working of LAMP stack as there are version dependencies that are tested only at the time of generating the AMI.

[](https://github.com/kurianinc/ami-pub/wiki/LAMP-Stack#maintenance-and-troubleshooting)Maintenance and Troubleshooting
=======================================================================================================================

Kurian can help with configuring and deploying applications that meet for your specific needs. Contact us with details to [contact@kurianinc.us](mailto:contact@kurianinc.us)

[](https://github.com/kurianinc/ami-pub/wiki/LAMP-Stack#remote-access-to-ec2-node)Remote Access to EC2 Node
===========================================================================================================

Use the following AWS defined user to SSH into a newly spun up EC2 node:

*   Amazon Linux: ec2-user
*   Red Hat Linux: ec2-user
*   SuSE Linux: ec2-user
*   Fedora: fedora
*   CentOS: centos
*   Debian Linux: admin
*   Ubuntu: ubuntu

[](https://github.com/kurianinc/ami-pub/wiki/LAMP-Stack#unsupported-configurations)Unsupported configurations
=============================================================================================================

Kurian releases latest, stable versions of open source software on popular Linux distributions. If you need a configuration that is not currently available in marketplace, send us your requirements to [contact@kurianinc.us](mailto:contact@kurianinc.us). Please include the following info in the email:

*   Name of Software to be on the AMI with version numbers.
*   Linux distribution and the version.
*   The EC2 instance type you plan to spin up from the AMI (optional).
