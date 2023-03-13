---
title: "OpenJDK Java Machine"
date: 2023-01-01T10:00:00+10:00
image: "images/products/java.jpg"
layout: product
description: OpenJDK Java Machine description
permalink: "/aws-machine-images/openjdk-java-machine/"
bodyClass: page-product
weight: 70
---

Java Machine
============

Java applications use different versions of OpenJDK, starting from version 8 through the latest 15. This AMI has all the stable versions of OpenJDK pre-installed. All you need to do before running the workload is to point JAVA\_HOME to the correct location.

[](https://github.com/kurianinc/ami-pub/wiki/Java-Machine#features)Features
===========================================================================

All the versions of OpenJDK are installed on the AMI.

*   OpenJDK 8 is the default version of Java available on the AMI.
*   The OpenJDK versions 9 and above are installed under `/opt/java`. For example, release 9 is available under `/opt/java/jdk-9`. For the actual path and related info check under `/opt/java` and point JAVA\_HOME to appropriate path as needed.

[](https://github.com/kurianinc/ami-pub/wiki/Java-Machine#how-it-works)How It Works
===================================================================================

Point JAVA\_HOME to the appropriate location if the JDK version needed is not the default version. Currently, the default version is OpenJDK 8.

[](https://github.com/kurianinc/ami-pub/wiki/Java-Machine#supported-platforms)Supported Platforms
=================================================================================================

Click on the links below to take you to Amazon Marketplace for spinning up EC2 nodes.

*   [Java Machine AMI for Amazon Linux 2018](https://aws.amazon.com/marketplace/pp/prodview-ktdlpj4x4msi4?sr=0-7&ref_=beagle&applicationId=AWSMPContessa)
*   [Java Machine AMI for Amazon Linux 2](https://aws.amazon.com/marketplace/pp/prodview-76pz5jhauudw6?sr=0-11&ref_=beagle&applicationId=AWSMPContessa)
*   [Java Machine AMI for CentOS 7](https://aws.amazon.com/marketplace/pp/prodview-i345m62tuxnss?sr=0-5&ref_=beagle&applicationId=AWSMPContessa)
*   [Java Machine AMI for CentOS 8](https://aws.amazon.com/marketplace/pp/prodview-4hoyni2vjjlpe?sr=0-6&ref_=beagle&applicationId=AWSMPContessa)
*   [Java Machine AMI for Red Hat Enterprise Linux 7](https://aws.amazon.com/marketplace/pp/prodview-2zflhd3fhpa7k?sr=0-13&ref_=beagle&applicationId=AWSMPContessa)
*   [Java Machine AMI for Red Hat Enterprise Linux 8](https://aws.amazon.com/marketplace/pp/prodview-ytnbtr2qcc4vi?sr=0-12&ref_=beagle&applicationId=AWSMPContessa)
*   [Java Machine AMI for Fedora 31](https://aws.amazon.com/marketplace/pp/prodview-5e3snlehhkdoy?sr=0-3&ref_=beagle&applicationId=AWSMPContessa)
*   [Java Machine AMI for Debian 10](https://aws.amazon.com/marketplace/pp/B08V4ZZ94D)
*   [Java Machine AMI for Ubuntu 16.04](https://aws.amazon.com/marketplace/pp/prodview-mmozr2xxpo3rc?sr=0-4&ref_=beagle&applicationId=AWSMPContessa)
*   [Java Machine AMI for Ubuntu 18.04](https://aws.amazon.com/marketplace/pp/prodview-52tpitmb22kli?sr=0-9&ref_=beagle&applicationId=AWSMPContessa)
*   [Java Machine AMI for Ubuntu 20.04](https://aws.amazon.com/marketplace/pp/prodview-e22vf4jppk4us?sr=0-10&ref_=beagle&applicationId=AWSMPContessa)
*   [Java Machine AMI for openSUSE Leap 15.2](https://aws.amazon.com/marketplace/pp/B08VRN833V)
*   [Java Machine AMI for SUSE Linux Enterprise Server 12 SP5](https://aws.amazon.com/marketplace/pp/B08V5F7D9M)
*   [Java Machine AMI for SUSE Linux Enterprise Server 15 SP2](https://aws.amazon.com/marketplace/pp/prodview-udbewrccvsoo2?sr=0-14&ref_=beagle&applicationId=AWSMPContessa)

[](https://github.com/kurianinc/ami-pub/wiki/Java-Machine#unsupported-configurations)Unsupported Configurations
===============================================================================================================

Kurian releases latest, stable versions of open source software on popular Linux distributions. If you need a configuration that is not currently available in marketplace, send us your requirements to [contact@kurianinc.us](mailto:contact@kurianinc.us). Please include the following info in the email:

*   Name of Software to be on the AMI with version numbers.
*   Linux distribution and the version.
*   The EC2 instance type you plan to spin up from the AMI (optional).

[](https://github.com/kurianinc/ami-pub/wiki/Java-Machine#configuration)Configuration
=====================================================================================

[](https://github.com/kurianinc/ami-pub/wiki/Java-Machine#upgrade)Upgrade
=========================================================================

[](https://github.com/kurianinc/ami-pub/wiki/Java-Machine#maintenance-and-troubleshooting)Maintenance and Troubleshooting
=========================================================================================================================

Kurian can help with configuring Jenkins for your specific needs. Contact us with details to [contact@kurianinc.us](mailto:contact@kurianinc.us)

[](https://github.com/kurianinc/ami-pub/wiki/Java-Machine#remote-access-to-ec2-node)Remote Access to EC2 Node
=============================================================================================================

Following are the standard AWS defined users available for SSH when a node is provisioned:

*   Amazon Linux: ec2-user
*   Red Hat Linux: ec2-user
*   SuSE Linux: ec2-user
*   Fedora: fedora
*   CentOS: centos
*   Debian Linux: admin
*   Ubuntu: ubuntu
