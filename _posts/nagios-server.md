---
title: "Nagios Server"
date: 2023-01-01T10:00:00+10:00
image: "images/products/nagios.jpg"
layout: product
description: Nagios Server description
permalink: "/aws-machine-images/nagios-server/"
bodyClass: page-product
weight: 130
---

Nagios Core Server
==================

Nagios is a popular, open-source infrastructure and networking monitoring platform. It is a flexible monitoring platform that can easily be extended to support database, platform and application monitoring also. The Kurian’s version of AMI provides many plugins as well that are included on the AMI.

The Kurian’s Nagios Core Server AMI contains Nagios Core 4 and the out of the box plugins.

To install Nagios server the application code has to be built and supporting software like Apache, PHP and Perl be installed. This secured AMI is baked in with an installed version of Nagios Core, and, the nagiosadmin password is tied to the EC2 instance id.

The Nagios Core version supported on the AMI is 4.4.5.

Look up more information on Nagios Core [here](https://assets.nagios.com/downloads/nagioscore/docs/nagioscore/4/en/toc.html).

[](https://github.com/kurianinc/ami-pub/wiki/Nagios-Core-Server-4.x#features)Features
=====================================================================================

*   Fully installed Nagios Core version 4.4.5
*   Includes standard Nagios Plugins to extend the out of the box monitoring features.
*   Secured access to the server with instance specific password for nagiosadmin.

[](https://github.com/kurianinc/ami-pub/wiki/Nagios-Core-Server-4.x#how-it-works)How it works
=============================================================================================

Nagios server can be used as the central platform for infrastructure and network monitoring. The plugins included in the AMI can be used to add more monitoring features to the platform.

On the hosts that have to be monitored a Nagios client, [NRPE](https://github.com/NagiosEnterprises/nrpe/blob/master/README.md), has to be installed and configured to talk to the server.

[](https://github.com/kurianinc/ami-pub/wiki/Nagios-Core-Server-4.x#supported-platforms)Supported platforms
===========================================================================================================

*   Nagios Server 4.4.5 for CentOS 7.7
*   Nagios Server 4.4.5 for Red Hat Enterprise Linux 7.7
*   Nagios Server 4.4.5 for Ubuntu 18.04

[](https://github.com/kurianinc/ami-pub/wiki/Nagios-Core-Server-4.x#configuration)Configuration
===============================================================================================

*   Spin up EC2 node using this AMI.
*   Open access to ports 22 and 80.
*   Access Nagios UI using URL [http://NODE-IP/nagios](http://node-ip/nagios). Login as `nagiosadmin` with EC2 instance id as password.

[](https://github.com/kurianinc/ami-pub/wiki/Nagios-Core-Server-4.x#upgrade)Upgrade
===================================================================================

Refer Nagios official documentation for details for an upgrade path if you are already a Nagios user and like to use this AMI for that purpose.

[](https://github.com/kurianinc/ami-pub/wiki/Nagios-Core-Server-4.x#maintenance--troubleshooting)Maintenance & troubleshooting
==============================================================================================================================

[](https://github.com/kurianinc/ami-pub/wiki/Nagios-Core-Server-4.x#change-nagiosadmin-password)Change `nagiosadmin` password
-----------------------------------------------------------------------------------------------------------------------------

As root user run the following command:

    $ htpasswd -b -c /usr/local/nagios/etc/htpasswd.users nagiosadmin NEW-PASSWORD
    

[](https://github.com/kurianinc/ami-pub/wiki/Nagios-Core-Server-4.x#provision-access-to-nagios-via-https)Provision access to Nagios via HTTPS
---------------------------------------------------------------------------------------------------------------------------------------------

Nagios server uses Apache as the HTTP server to serve the UI. Follow Apache documentation for the related Linux platform to enforce HTTPS access for the Nagios UI.

[](https://github.com/kurianinc/ami-pub/wiki/Nagios-Core-Server-4.x#remote-access-to-ec2-node)Remote access to EC2 node
=======================================================================================================================

Out of the box, the Nagios UI is available on port 80 and it’s password protected with user nagiosadmin and EC2 instance id as password.

You will need to ssh into the EC2 node for additional configuration and maintenance tasks. Use the following user that are specific to the OS:

*   CentOS: centos
*   Ubuntu: ubuntu
*   Red Hat Enterprise Linux: ec2-user
