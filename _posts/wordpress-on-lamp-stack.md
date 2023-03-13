---
title: "WordPress on LAMP Stack"
date: 2023-01-01T10:00:00+10:00
image: "images/products/wordpress-lamp.jpg"
layout: product
description: WordPress on LAMP Stack description
permalink: "/aws-machine-images/wordpress-on-lamp-stack/"
bodyClass: page-product
weight: 80
---

WordPress AMI
=============

When an AWS EC2 node is spun up using Kurian’s WordPress AMI, the popular blog platform is fully functional and you can start blogging right away.

All the necessary software – WordPress, PHP, Apache and MySQL/MariaDB – that are needed to run WordPress, have been baked into the AMI, pre-installed and configured.

[](https://github.com/kurianinc/ami-pub/wiki/Wordpress-AMI-by-Kurian#features)Features
======================================================================================

*   The AMI has WordPress pre-installed and configured, with the dependent applications.
*   After the EC2 node is spun up, you can readily login to the application and start adding content.

[](https://github.com/kurianinc/ami-pub/wiki/Wordpress-AMI-by-Kurian#how-it-works)How It Works
==============================================================================================

WordPress is a PHP application that runs on Apache HTTP server and uses MySQL or MariaDB as the database. If you have to manually install WordPress there are multiple steps involved. The WordPress AMI comes with all the software and configurations baked in, so the EC2 node spun up from it will be usable from the get-go.

[](https://github.com/kurianinc/ami-pub/wiki/Wordpress-AMI-by-Kurian#version-56)Version 5.6
===========================================================================================

*   WordPress running on open-source MariaDB, fully compatible with MySQL.
*   Hardened MariaDB 10.5 database.
*   PHP 7 and Apache 2.x

[](https://github.com/kurianinc/ami-pub/wiki/Wordpress-AMI-by-Kurian#supported-platforms)Supported Platforms
------------------------------------------------------------------------------------------------------------

Pick any one of the below Linux platforms to run your WordPress instance. The links will take you to AWS Marketplace where you can subscribe the related AMI to spin up the EC2 instance.

*   [WordPress 5.6 for RedHat Enterprise Linux 7.9](https://aws.amazon.com/marketplace/pp/B01DSZAECC)
*   [WordPress 5.6 for RedHat Enterprise Linux 8.3](http://aws.amazon.com/marketplace/pp/B08TBR4G5V)
*   [WordPress 5.6 for Ubuntu 16.04](https://aws.amazon.com/marketplace/pp/B01CYGU5LQ)
*   [WordPress 5.6 for Ubuntu 18.04](http://aws.amazon.com/marketplace/pp/B08TBSGY7B)
*   [WordPress 5.6 for Ubuntu 20.04](http://aws.amazon.com/marketplace/pp/B08TBW6PGQ)
*   [WordPress 5.6 for CentOS 7.9](https://aws.amazon.com/marketplace/pp/B01DSYI6BY)
*   [WordPress 5.6 for CentOS 8.3](https://aws.amazon.com/marketplace/pp/B08V1HB5Y2)
*   [WordPress 5.6 for Debian 10](https://aws.amazon.com/marketplace/pp/B01DSZ2542)
*   [WordPress 5.6 for Amazon Linux 2](http://aws.amazon.com/marketplace/pp/B08TBS9Y5T)

If WordPress AMI for your favorite platform is not listed here, Kurian might be able to create that for you on demand. Contact us!

[](https://github.com/kurianinc/ami-pub/wiki/Wordpress-AMI-by-Kurian#configuration)Configuration
------------------------------------------------------------------------------------------------

*   After the EC2 node is up and running fully, access the WordPress config page using url: [http://NODE-IP/wp-admin/](http://node-ip/wp-admin/).
    
*   Login as the pre-configured user ‘admin’. The password for this user is set as the instance id of the newly spun up EC2 node. Obtain that from the AWS EC2 console.
    
*   You can start adding content now, but, doing minor updates will make the site more secure and specific to your requirements:
    
    *   After logging in, click on the Settings menu item on the left-pane to get to the site configuration page.
    *   On the site configuration page, update at least these items:
        *   Site Title
        *   Email Address
*   Under the user admin menu, on the top-right corner, select Edit My Profile option, and, there update at least these items:
    
    *   Password, using Reset Password button, if you like to change password from instance id.
    *   Email
*   If you have to point the new instance to an existing IP address such as EIP, update the database using the script available at [https://github.com/kurianinc/ami-pub/blob/master/wordpress/scripts/update-site-url.sh](https://github.com/kurianinc/ami-pub/blob/master/wordpress/scripts/update-site-url.sh). Take a backup of database _wordpress_ before running this script.
    
*   If there are multiple network sites created already, and, the IP has to be updated as above, run the script for each network by changing the database names. Take a backup of database _wordpress_ before running this script.
    
*   It is recommended to use a domain name for site url, instead of IP address, in production, as migration to new EC2 instances will be hard with IP address hardcoded in the database.
    
*   To administer MariaDB database login to database as `root` locally with EC2 node instance id as the password. If that password doesn’t work use `dummypass`.
    

[](https://github.com/kurianinc/ami-pub/wiki/Wordpress-AMI-by-Kurian#versions-52-and-lower)Versions 5.2 and lower
=================================================================================================================

These legacy versions are marked for EOL. You are recommended to upgrade to the latest AMI.

[](https://github.com/kurianinc/ami-pub/wiki/Wordpress-AMI-by-Kurian#supported-platforms-1)Supported Platforms
--------------------------------------------------------------------------------------------------------------

Pick any one of the below Linux platforms to run your WordPress instance. The links will take you to AWS Marketplace where you can subscribe the related AMI to spin up the EC2 instance.

*   [WordPress 5.2 for Amazon Linux 2018](https://aws.amazon.com/marketplace/pp/B01DSXE5I8)
    
*   [WordPress 4.9.1 for SuSE Linux Enterprise Server 12 SP3](https://aws.amazon.com/marketplace/pp/B01DSZJCZW)
    
*   [WordPress 4.9.1 for Fedora Linux 23](https://aws.amazon.com/marketplace/pp/B01DSZAJHM)
    
*   [WordPress 4.9.1 for RedHat Linux 7.4](https://aws.amazon.com/marketplace/pp/B01DSZAECC)
    
*   [WordPress 4.9.1 for Debian Linux 8](https://aws.amazon.com/marketplace/pp/B01DSZ2542)
    
*   [WordPress 4.9.1 for CentOS 7.4](https://aws.amazon.com/marketplace/pp/B01DSYI6BY)
    
*   [WordPress 4.9.1 for Ubuntu 16.04](https://aws.amazon.com/marketplace/pp/B01CYGU5LQ)
    

If WordPress AMI for your favorite platform is not listed here, Kurian might be able to create that for you on demand. Contact us!

[](https://github.com/kurianinc/ami-pub/wiki/Wordpress-AMI-by-Kurian#configuration-1)Configuration
--------------------------------------------------------------------------------------------------

*   After the EC2 node is up and running fully, access the WordPress config page using url: [http://NODE-IP/wp-admin/](http://node-ip/wp-admin/).
    
*   Login as the pre-configured user ‘admin’. The password for this user is set as the instance id of the newly spun up EC2 node. Obtain that from the AWS EC2 console.
    
*   You can start adding content now, but, doing minor updates will make the site more secure and specific to your requirements:
    
    *   After logging in, click on the Settings menu item on the left-pane to get to the site configuration page.
    *   On the site configuration page, update at least these items:
        *   Site Title
        *   Email Address
*   Under the user admin menu, on the top-right corner, select Edit My Profile option, and, there update at least these items:
    
    *   Password, using Reset Password button, if you like to change password from instance id.
    *   Email
*   If you have to point the new instance to an existing IP address such as EIP, update the database using the script available at [https://github.com/kurianinc/ami-pub/blob/master/wordpress/scripts/update-site-url.sh](https://github.com/kurianinc/ami-pub/blob/master/wordpress/scripts/update-site-url.sh). Take a backup of database _wordpress_ before running this script.
    
*   If there are multiple network sites created already, and, the IP has to be updated as above, run the script for each network by changing the database names. Take a backup of database _wordpress_ before running this script.
    
*   It is recommended to use a domain name for site url, instead of IP address, in production, as migration to new EC2 instances will be hard with IP address in the database.
    

[](https://github.com/kurianinc/ami-pub/wiki/Wordpress-AMI-by-Kurian#hosting-website-on-wordpress)Hosting Website on WordPress
==============================================================================================================================

Though WordPress can be used in various ways to serve content, a simple web site hosted on a EC2 node can be configured as follows:

*   Register your domain (example, myownbusiness.com) with a domain registrar and forward that domain to the IP address of the EC2 node where WordPress runs.
*   Under Settings, update both WordPress Address (URL) and Site Address (URL) to point to the new domain.

[](https://github.com/kurianinc/ami-pub/wiki/Wordpress-AMI-by-Kurian#maintenance-and-troubleshooting)Maintenance and Troubleshooting
====================================================================================================================================

*   Look at the Apache error logs under /var/log/apache2/
*   The database info, including the password which is randomly generated, are available in the WordPress config file as below:
    *   Ubuntu – /srv/www/wordpress/wp-config.php
    *   Most of the other Linux platforms supported – /var/www/wordpress/wp-config.php

We can configure your WordPress instance to meet specific requirements. Contact us with details to [contact@kurianinc.us](mailto:contact@kurianinc.us)

[](https://github.com/kurianinc/ami-pub/wiki/Wordpress-AMI-by-Kurian#remote-access-to-ec2-node)Remote Access to EC2 Node
========================================================================================================================

The EC2 node can be accessed using any SSL based remote access clients on port 22, using the ssh key you have selected when the node is spun up.

Following are the predefined users available when a node is provisioned:

*   Amazon Linux: ec2-user
*   Red Hat Linux: ec2-user
*   SuSE Linux: ec2-user
*   Fedora: fedora
*   CentOS: centos
*   Debian Linux: admin
*   Ubuntu: ubuntu
