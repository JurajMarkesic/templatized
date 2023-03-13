---
title: "SonarQube"
date: 2023-01-01T10:00:00+10:00
image: "images/products/sonarqube.png"
layout: product
description: SonarQube description
permalink: "/aws-machine-images/sonarqube/"
bodyClass: page-product
weight: 260
---

SonarQube Community Edition with PostGreSQL 

SonarQube is an automated code scanning tool that can be integrated with CI/CD pipeline to detect security vulnerabilities and defects in the application code. It can integrate with your existing workflow to enable continuous code inspection across your project branches and pull requests. The single node SonarQube AMI by Kurian has pre-configured the community edition of SonarQube with PostgreSQL as the backend database. When an EC2 instance is spun up from this AMI the SonarQube service would be up and running on that machine for your immediate use.

Features
========

*   AMI built with the latest, stable version of the community edition of SonarQube.
    
*   AMI compatible for spinning up nodes to run SonarQube on a single node with PostgreSQL as the backend database.
    
*   AMI is built on a patched operating system and the node created from this is ready to be deployed in production.
    

How It Works
============

*   When an EC2 node spun up from this AMI, the SonarQube service is up and running on port 9000.
    
*   SSH into the newly spun up node if you need to perform any additional configuration.
    

Click on the links below to take you to Amazon Marketplace for spinning up EC2 nodes.

*   [SonarQube Community Edition for Amazon Linux 2](https://aws.amazon.com/marketplace/pp/prodview-l6e45ptuzcjei?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
    
*   [SonarQube Community Edition for CentOS 7](https://aws.amazon.com/marketplace/pp/prodview-aenyo5lbjsh4k?sr=0-3&ref_=beagle&applicationId=AWSMPContessa)
*   [SonarQube Community Edition for CentOS 8](https://aws.amazon.com/marketplace/pp/prodview-z5wxgxtne7yv6?sr=0-5&ref_=beagle&applicationId=AWSMPContessa)
*   [SonarQube Community Edition for Red Hat Enterprise Linux 7](https://aws.amazon.com/marketplace/pp/prodview-3mwztpebixuuw?sr=0-11&ref_=beagle&applicationId=AWSMPContessa)
*   [SonarQube Community Edition for Red Hat Enterprise Linux 8](https://aws.amazon.com/marketplace/pp/prodview-hnz4sk6jxi5r4?sr=0-10&ref_=beagle&applicationId=AWSMPContessa)
*   [SonarQube Community Edition for Debian10](https://aws.amazon.com/marketplace/pp/prodview-pe5hspmcutyj6?sr=0-8&ref_=beagle&applicationId=AWSMPContessa)
*   [SonarQube Community Edition for SUSE Linux 12](https://aws.amazon.com/marketplace/pp/prodview-wwcwqrqhkpa3g?sr=0-7&ref_=beagle&applicationId=AWSMPContessa)
*   [SonarQube Community Edition for SUSE Linux 15](https://aws.amazon.com/marketplace/pp/prodview-2zkwc6hlcj5gi?sr=0-6&ref_=beagle&applicationId=AWSMPContessa)
*   [SonarQube Community Edition for Ubuntu 16.04](https://aws.amazon.com/marketplace/pp/prodview-hkxpuuosplvdu?sr=0-4&ref_=beagle&applicationId=AWSMPContessa)
*   [SonarQube Community Edition Ubuntu 18.04](https://aws.amazon.com/marketplace/pp/prodview-rgm4f47nc5eg4?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [SonarQube Community Edition Ubuntu 20.04](https://aws.amazon.com/marketplace/pp/prodview-casbcdpod2zaa?sr=0-2&ref_=beagle&applicationId=AWSMPContessa)

Configuration
=============

*   When an EC2 node spun up from this AMI, the SonarQube service would be available on port 9000.
    
*   The service can be accessed using the URL [http://EC2-NODE-IP:9000](http://ec2-node-ip:9000/). Login as admin/admin and when you login first time you will be required to change the password.
    
*   The service can be managed using standard steps:
    

$ sudo systemctl \[start|stop|status\] sonarqube.service 

*   At times due to database connection issues the service might not be fully up. Look at logs under logs directory and adjust connection settings in conf/sonar.properties. The sonarqube.service must be restarted for any change made in sonar.properties file to take effect.
    

Unsupported Configurations
==========================

Kurian releases latest, stable versions of open source software on popular Linux distributions. If you need a configuration that is not currently available in marketplace, send us your requirements to contact@kurianinc.us. Please include the following info in the email:

*   Name of Software with version numbers that need to be released as AMIs.
    
*   Linux distribution and the version.
    
*   The EC2 instance type that you plan to spin up using the AMI (optional).
    

Upgrade
=======

Follow official documentation for the directions for any upgrades.

Maintenance and Troubleshooting
===============================

*   The SonarQube service is sonarqube, and it can be managed using standard options available for a Linux service. See the last section also.
    
*   The SonarQube application can be integrated with CI/CD pipeline and maintained following the official documentation.
    
*   Kurian can help with configuring the application for your specific needs using this AMI. Contact us with details to contact@kurianinc.us
    

Remote Access to EC2 Node
=========================

Following are the standard AWS defined users available for SSH when a node is provisioned:

*   Amazon Linux: ec2-user
    
*   Red Hat Linux: ec2-user
    
*   SuSE Linux: ec2-user
    
*   Fedora: fedora
    
*   CentOS: centos
    
*   Debian Linux: admin
    
*   Ubuntu: ubuntu
    

Release history
===============

05/31/2021 – Initial release on Debian 10, Ubuntu 16.04/18.04/20.04, Amazon Linux 2, CentOS 7.9/8.3, RHEL 7 and 8, SUSE Linux platforms. Not supported on Amazon Linux 2018, Fedora 31.
=======================================================================================================================================================================================