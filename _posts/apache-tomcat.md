---
title: "Apache Tomcat"
date: 2023-01-01T10:00:00+10:00
image: "images/products/tomcat.jpg"
layout: product
description: Apache Tomcat description
permalink: "/aws-machine-images/apache-tomcat/"
bodyClass: page-product
weight: 180
---

Apache Tomcat
=============

The Apache Tomcat is a Java application server, and it is an open source implementation of the Java Servlet, JavaServer Pages, Java Expression Language and Java WebSocket technologies. Apache Tomcat software powers numerous large-scale, mission-critical web applications across a diverse range of industries and organizations.

Multiple versions of Tomcat is actively in use right now. Kurian supports versions 9 and 10 with Java 8 as the runtime JVM. The `tomcat` service is configured to be managed using systemd on Linux platforms where systemd support is available.

Users of Tomcat 10 onwards should be aware that, as a result of the move from Java EE to Jakarta EE as part of the transfer of Java EE to the Eclipse Foundation, the primary package for all implemented APIs has changed from `javax.*` to `jakarta.*`. This will almost certainly require code changes to enable applications to migrate from Tomcat 9 and earlier to Tomcat 10 and later.

Refer Tomcat official documentation at [https://tomcat.apache.org/index.html](https://tomcat.apache.org/index.html) for details.

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Tomcat#features)Features
============================================================================

*   Fully configured service that is available for deploying Java applications when the EC2 node is up and running.
*   The AMI is built using patched operating system and production grade.
*   No custom configuration and so it is easy to do any additional configuration needed for a specific environment.

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Tomcat#configuration)Configuration
======================================================================================

*   When an EC2 node is spun up from this AMI, Tomcat service would be up and running on port 8080 over HTTP.
*   Tomcat on this machine can be managed as a UNIX service as follows:
    *   `$ sudo systemctl start|stop|status tomcat` # On platforms that support `systemd`
    *   `$ sudo service tomcat start|stop|status` # On platforms that doesn’t support `systemd`, mainly Amazon Linux 2018.
*   Both `JAVA_HOME` and `CATALINA_HOME` are globally defined by having those set in `/etc/profile.d/set-tomcat-env.sh`. The locations of Java and Tomcat directories can be found from those settings on the target platform.

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Tomcat#unsupported-configurations)Unsupported Configurations
================================================================================================================

Kurian releases latest, stable versions of open source software on popular Linux distributions. If you need a configuration that is not currently available in marketplace, send us your requirements to [contact@kurianinc.us](mailto:contact@kurianinc.us). Please include the following info in the email:

*   Name of Software to be on the AMI with version numbers.
*   Linux distribution and the version.
*   The EC2 instance type you plan to spin up from the AMI (optional).

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Tomcat#how-it-works)How It Works
====================================================================================

*   When an EC2 node spun up from this AMI, Tomcat would be up and running on port 8080 over HTTP.
*   Additional configurations such as adding SSL encryption (access over HTTPS), reverse proxy and Docker registry can be set up following the official documentation.

Click on the links below to take you to Amazon Marketplace for spinning up EC2 nodes.

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Tomcat#tomcat-9)Tomcat 9
----------------------------------------------------------------------------

*   [Apache Tomcat 9 AMI for Amazon Linux 2018](https://aws.amazon.com/marketplace/pp/prodview-7mfoipr3v5v7q?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Tomcat 9 AMI for Amazon Linux 2](https://aws.amazon.com/marketplace/pp/prodview-u5uh3haots5da?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Tomcat 9 AMI for CentOS 7](https://aws.amazon.com/marketplace/pp/prodview-py4tdwxvxts52?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Tomcat 9 AMI for CentOS 8](https://aws.amazon.com/marketplace/pp/prodview-bpuivmvch4lpw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Tomcat 9 AMI for Red Hat Enterprise Linux 7](https://aws.amazon.com/marketplace/pp/prodview-tf4dy52i2wzh6?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Tomcat 9 AMI for Red Hat Enterprise Linux 8](https://aws.amazon.com/marketplace/pp/prodview-qq7t4jpyrslcq?sr=0-2&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Tomcat 9 AMI for Fedora 31](https://aws.amazon.com/marketplace/pp/prodview-ginxtlrjpw4ly?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Tomcat 9 AMI for Debian 10](https://aws.amazon.com/marketplace/pp/prodview-r54f2nhgerbfs?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Tomcat 9 AMI for Ubuntu 16.04](https://aws.amazon.com/marketplace/pp/prodview-j7b74k2j7jpfw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Tomcat 9 AMI for Ubuntu 18.04](https://aws.amazon.com/marketplace/pp/prodview-n5xoyigwoe2yy?sr=0-2&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Tomcat 9 AMI for Ubuntu 20.04](https://aws.amazon.com/marketplace/pp/B08X4QNFSW)
*   [Apache Tomcat 9 AMI for openSUSE Leap 15.2](https://aws.amazon.com/marketplace/pp/B08XVV618N)
*   [Apache Tomcat 9 AMI for SUSE Linux Enterprise Server 12 SP5](https://aws.amazon.com/marketplace/pp/prodview-deigqvdouwk3w?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Tomcat 9 AMI for SUSE Linux Enterprise Server 15 SP2](https://aws.amazon.com/marketplace/pp/prodview-yxxywymxcc62e?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Tomcat#tomcat-10)Tomcat 10
------------------------------------------------------------------------------

*   [Apache Tomcat 10 AMI for Amazon Linux 2018](https://aws.amazon.com/marketplace/pp/prodview-zjj6xeugrj37c?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Tomcat 10 AMI for Amazon Linux 2](https://aws.amazon.com/marketplace/pp/prodview-sr7sius3o4un2?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Tomcat 10 AMI for CentOS 7](https://aws.amazon.com/marketplace/pp/prodview-ohgvbvrjgu22s?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Tomcat 10 AMI for CentOS 8](https://aws.amazon.com/marketplace/pp/prodview-w2ui4ogtokb7c?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Tomcat 10 AMI for Red Hat Enterprise Linux 7](https://aws.amazon.com/marketplace/pp/B08WRVGM69)
*   [Apache Tomcat 10 AMI for Red Hat Enterprise Linux 8](https://aws.amazon.com/marketplace/pp/prodview-e7atbovtwwvfa?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Tomcat 10 AMI for Fedora 31](https://aws.amazon.com/marketplace/pp/prodview-fsxji7peoi7ws?sr=0-2&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Tomcat 10 AMI for Debian 10](https://aws.amazon.com/marketplace/pp/B08WRRFDCJ)
*   [Apache Tomcat 10 AMI for Ubuntu 16.04](https://aws.amazon.com/marketplace/pp/prodview-lfbsbwhnyadko?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Tomcat 10 AMI for Ubuntu 18.04](https://aws.amazon.com/marketplace/pp/prodview-rfxgwu5r2rjkw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Tomcat 10 AMI for Ubuntu 20.04](https://aws.amazon.com/marketplace/pp/B08WWXZ18V)
*   [Apache Tomcat 10 AMI for openSUSE Leap 15.2](https://aws.amazon.com/marketplace/pp/prodview-poqwz4wkq6fk2)
*   [Apache Tomcat 10 AMI for SUSE Linux Enterprise Server 12 SP5](https://aws.amazon.com/marketplace/pp/prodview-erf3qvx2gs6qc?sr=0-2&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Tomcat 10 AMI for SUSE Linux Enterprise Server 15 SP2](https://aws.amazon.com/marketplace/pp/prodview-pzxucyyidnn3c?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Tomcat#upgrade)Upgrade
==========================================================================

Follow official Apache Tomcat documentation for upgrades.

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Tomcat#maintenance-and-troubleshooting)Maintenance and Troubleshooting
==========================================================================================================================

*   Kurian can help with configuring the application for your specific needs using this AMI. Contact us with details to [contact@kurianinc.us](mailto:contact@kurianinc.us)

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Tomcat#remote-access-to-ec2-node)Remote Access to EC2 Node
==============================================================================================================

Following are the standard AWS defined users available for SSH when a node is provisioned:

*   Amazon Linux: ec2-user
*   Red Hat Linux: ec2-user
*   SuSE Linux: ec2-user
*   Fedora: fedora
*   CentOS: centos
*   Debian Linux: admin
*   Ubuntu: ubuntu

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Tomcat#release-history)Release history
==========================================================================================

*   02/15/2021 – Initial release of version 10.0.2 on Debian 10, Ubuntu 16.04/18.04/20.04, Amazon Linux 2018/2, Fedora 31, CentOS 7.9/8.3, RHEL 7.9/8.3, SUSE 12.5/15.2, openSUSE Leap 15.2
