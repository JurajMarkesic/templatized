---
title: "Nexus Repository Manager"
date: 2023-01-01T10:00:00+10:00
image: "images/products/nexus-repository.jpg"
layout: product
description: Nexus Repository Manager description
permalink: "/aws-machine-images/nexus-repository-manager/"
bodyClass: page-product
weight: 150
---

Nexus Repository Manager
========================

A repository manager is a key component in a CI/CD pipeline. It has to store a wide variety of artifacts that are needed for both build and deployment. It serves as a hub for storing and sharing both third-party libraries and internally built libraries and applications, that are used for build and deployment. Nexus Repository Manager is one of the most popular applications that addresses this requirement 100% and more. It supports all types of artifacts from raw files through Linux repository specific artifacts like rpm and also Docker images. The Nexus Repository Manager can be configured as a private Docker registry also.

[](https://github.com/kurianinc/ami-pub/wiki/Nexus-Repository-Manager#features)Features
=======================================================================================

*   Nexus Repository Manager could be a hub for sharing both third-party and built components in a CI/CD pipeline.
*   A local cache for third-party libraries needed in builds. An essential requirement to increase build velocity and add better monitoring to what used in building applications.
*   Industry standard repositories can be set up for both internal and external use, including Docker registries.

[](https://github.com/kurianinc/ami-pub/wiki/Nexus-Repository-Manager#how-it-works)How It Works
===============================================================================================

*   When an EC2 node spun up from this AMI, Nexus Repository Manager would be up and running on port 8081 over HTTP.
*   Additional configurations such as adding SSL encryption (access over HTTPS), reverse proxy and Docker registry can be set up following the official documentation.

Click on the links below to take you to Amazon Marketplace for spinning up EC2 nodes.

*   [Nexus Repository Manager AMI for Amazon Linux 2018](https://aws.amazon.com/marketplace/pp/B08WQ2Q2XN)
*   [Nexus Repository Manager AMI for Amazon Linux 2](https://aws.amazon.com/marketplace/pp/prodview-7bzqiwcvvg6gc?sr=0-7&ref_=beagle&applicationId=AWSMPContessa)
*   [Nexus Repository Manager AMI for CentOS 7](https://aws.amazon.com/marketplace/pp/prodview-nuutxtfrvpouy?sr=0-4&ref_=beagle&applicationId=AWSMPContessa)
*   [Nexus Repository Manager AMI for CentOS 8](https://aws.amazon.com/marketplace/pp/prodview-t24salib3u5ie?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Nexus  Repository Manager AMI for Red Hat Enterprise Linux 7](https://aws.amazon.com/marketplace/pp/prodview-aotiyj4bma6bo?sr=0-13&ref_=beagle&applicationId=AWSMPContessa)
*   [Nexus Repository Manager AMI for Red Hat Enterprise Linux 8](https://aws.amazon.com/marketplace/pp/prodview-qxuz3daefxvvi?sr=0-12&ref_=beagle&applicationId=AWSMPContessa)
*   [Nexus Repository Manager AMI for Fedora 31](https://aws.amazon.com/marketplace/pp/prodview-ybr25ax7ulqp2?sr=0-3&ref_=beagle&applicationId=AWSMPContessa)
*   [Nexus Repository Manager AMI for Debian 10](https://aws.amazon.com/marketplace/pp/prodview-rygpbatg6bl2k?sr=0-6&ref_=beagle&applicationId=AWSMPContessa)
*   [Nexus Repository Manager  AMI for Ubuntu 16.04](https://aws.amazon.com/marketplace/pp/prodview-5qepnda2tmmgs?sr=0-2&ref_=beagle&applicationId=AWSMPContessa)
*   [Nexus Repository Manager AMI for Ubuntu 18.04](https://aws.amazon.com/marketplace/pp/prodview-pqe4cgncgsz7c?sr=0-5&ref_=beagle&applicationId=AWSMPContessa)
*   [Nexus Repository Manager AMI for Ubuntu 20.04](https://aws.amazon.com/marketplace/pp/prodview-4mtkva7i3moec)
*   [Nexus Repository Manager  AMI for openSUSE Leap 15.2](https://aws.amazon.com/marketplace/pp/prodview-r2ohksnfled24?sr=0-9&ref_=beagle&applicationId=AWSMPContessa)
*   [Nexus Repository Manager  AMI for SUSE Linux Enterprise Server 12 SP5](https://aws.amazon.com/marketplace/pp/prodview-3hscgnajasokc?sr=0-11&ref_=beagle&applicationId=AWSMPContessa)
*   [Nexus Repository Manager AMI for SUSE Linux Enterprise Server 15 SP2](https://aws.amazon.com/marketplace/pp/prodview-ybodfjcpjf2yq?sr=0-10&ref_=beagle&applicationId=AWSMPContessa)

[](https://github.com/kurianinc/ami-pub/wiki/Nexus-Repository-Manager#configuration)Configuration
=================================================================================================

*   When an EC2 node spun up from this AMI, Nexus Repository Manager would be up and running on port 8081 over HTTP.
*   The admin password is stored in `/opt/nexus/sonatype-work/nexus3/admin.password`. SSH into the node and get that password.
*   Access the user interface using the URL `http://EC2-NODE-IP:8081`. Login as `admin` using the password obtained in the last step. An overview of the interface is available here [https://help.sonatype.com/repomanager3/user-interface/user-interface-overview](https://help.sonatype.com/repomanager3/user-interface/user-interface-overview).
*   Create the needed repositories. Guidelines are available at [https://help.sonatype.com/repomanager3/repository-management](https://help.sonatype.com/repomanager3/repository-management).
*   If the access on port 8081 is not feasible for some reason or if you like to HTTPS support plan to set up a reverse proxy following directions here [https://help.sonatype.com/repomanager3/installation/run-behind-a-reverse-proxy](https://help.sonatype.com/repomanager3/installation/run-behind-a-reverse-proxy). For this you also need point a CNAME, such as repository.mycompany.com, to the instance.
*   To configure a private Docker registry follow directions here [https://help.sonatype.com/repomanager3/formats/docker-registry](https://help.sonatype.com/repomanager3/formats/docker-registry).
*   To add this instance as the repository server to a CI/CD pipeline you also need to implement a plugin on the build platform, such as `Nexus Platform Plugin` to Jenkins. Details can be found here [https://help.sonatype.com/integrations/nexus-and-continuous-integration/nexus-platform-plugin-for-jenkins](https://help.sonatype.com/integrations/nexus-and-continuous-integration/nexus-platform-plugin-for-jenkins).

[](https://github.com/kurianinc/ami-pub/wiki/Nexus-Repository-Manager#unsupported-configurations)Unsupported Configurations
===========================================================================================================================

Kurian releases latest, stable versions of open source software on popular Linux distributions. If you need a configuration that is not currently available in marketplace, send us your requirements to [contact@kurianinc.us](mailto:contact@kurianinc.us). Please include the following info in the email:

*   Name of Software to be on the AMI with version numbers.
*   Linux distribution and the version.
*   The EC2 instance type you plan to spin up from the AMI (optional).

[](https://github.com/kurianinc/ami-pub/wiki/Nexus-Repository-Manager#upgrade)Upgrade
=====================================================================================

Follow Sonatype documentation if you are using this EC2 instance for migrating an old instance of Nexus Repository to it.

[](https://github.com/kurianinc/ami-pub/wiki/Nexus-Repository-Manager#maintenance-and-troubleshooting)Maintenance and Troubleshooting
=====================================================================================================================================

*   The Nexus Repository Manager service is `nexus`, and it can be managed using a standard options available for a Linux service.
*   The application can be maintained following the official documents.
*   Kurian can help with configuring the application for your specific needs using this AMI. Contact us with details to [contact@kurianinc.us](mailto:contact@kurianinc.us)

[](https://github.com/kurianinc/ami-pub/wiki/Nexus-Repository-Manager#remote-access-to-ec2-node)Remote Access to EC2 Node
=========================================================================================================================

Following are the standard AWS defined users available for SSH when a node is provisioned:

*   Amazon Linux: ec2-user
*   Red Hat Linux: ec2-user
*   SuSE Linux: ec2-user
*   Fedora: fedora
*   CentOS: centos
*   Debian Linux: admin
*   Ubuntu: ubuntu

[](https://github.com/kurianinc/ami-pub/wiki/Nexus-Repository-Manager#release-history)Release history
=====================================================================================================

*   02/13/2021 – Initial release of version 3.29.2 on Debian 10, Ubuntu 16.04/18.04/20.04, Amazon Linux 2018/2, Fedora 31, CentOS 7.9/8.3, RHEL 7.9/8.3, SUSE 12.5/15.2, openSUSE Leap 15.2
