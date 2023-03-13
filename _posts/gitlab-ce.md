---
title: "GitLab CE"
date: 2023-01-01T10:00:00+10:00
image: "images/products/gitlab.jpg"
layout: product
description: GitLab CE description
permalink: "/aws-machine-images/gitlab-ce/"
bodyClass: page-product
weight: 160
---

GitLab Community Edition
========================

GitLab is a full-featured DevOps platform that can be used to manage all aspects from application development through build and deployment. The implementation of Git source code management (SCM) system is one of the main features among multiple features it offers out-of-the-box. GitLab has a community edition which is open-source and free, and a licensed enterprise edition that has extra features. This AMI contains the community edition.

[](https://github.com/kurianinc/ami-pub/wiki/GitLab-CE#features)Features
========================================================================

*   Full featured implementation of Git source code management system.
*   An integrated DevOps environment that covers standard source code control, build, artifacts management and deployment features.
*   Built-in support for setting up CI/CD pipeline.

[](https://github.com/kurianinc/ami-pub/wiki/GitLab-CE#configuration)Configuration
==================================================================================

*   When an EC2 node is spun up from this AMI, GitLab would be up and running on port 80 over HTTP.
*   Configure a CNAME for the instance and point that to the new instance. Example, gitlab.yourcompany.com.
*   When GitLab is accessed on the browser first time you will be asked to set the password for the administrative user `root`. Set that and login into the application to complete the configuration and initial set up such as creating source code repositories.
*   Refer official documentation for specific maintenance and configuration tasks [https://docs.gitlab.com/ee/administration/](https://docs.gitlab.com/ee/administration/)

[](https://github.com/kurianinc/ami-pub/wiki/GitLab-CE#unsupported-configurations)Unsupported Configurations
============================================================================================================

Kurian releases latest, stable versions of open source software on popular Linux distributions. If you need a configuration that is not currently available in marketplace, send us your requirements to [contact@kurianinc.us](mailto:contact@kurianinc.us). Please include the following info in the email:

*   Name of Software to be on the AMI with version numbers.
*   Linux distribution and the version.
*   The EC2 instance type you plan to spin up from the AMI (optional).

[](https://github.com/kurianinc/ami-pub/wiki/GitLab-CE#how-it-works)How It Works
================================================================================

*   When an EC2 node spun up from this AMI, Tomcat would be up and running on port 8080 over HTTP.
*   Additional configurations such as adding SSL encryption (access over HTTPS), reverse proxy and Docker registry can be set up following the official documentation.

Click on the links below to take you to Amazon Marketplace for spinning up EC2 nodes.

*   [GitLab CE AMI for Amazon Linux 2018](https://aws.amazon.com/marketplace/pp/prodview-m746lne7zhrqk?sr=0-11&ref_=beagle&applicationId=AWSMPContessa)
*   [GitLab CE AMI AMI for Amazon Linux 2](https://aws.amazon.com/marketplace/pp/prodview-aqihm6gvq7vty?sr=0-10&ref_=beagle&applicationId=AWSMPContessa)
*   [GitLab CE AMI AMI for CentOS 7](https://aws.amazon.com/marketplace/pp/prodview-72obtmcs2qhug?sr=0-2&ref_=beagle&applicationId=AWSMPContessa)
*   [GitLab CE AMI AMI for CentOS 8](https://aws.amazon.com/marketplace/pp/prodview-cq6uby2ochism?sr=0-4&ref_=beagle&applicationId=AWSMPContessa)
*   [GitLab CE AMI AMI for Red Hat Enterprise Linux 7](https://aws.amazon.com/marketplace/pp/prodview-m254pku4pu3lq?sr=0-13&ref_=beagle&applicationId=AWSMPContessa)
*   [GitLab CE AMI AMI for Red Hat Enterprise Linux 8](https://aws.amazon.com/marketplace/pp/prodview-yjx4dlhicuhdk?sr=0-12&ref_=beagle&applicationId=AWSMPContessa)
*   [GitLab CE AMI AMI for Fedora 31](https://aws.amazon.com/marketplace/pp/prodview-jgfqdyim5jhyc?sr=0-5&ref_=beagle&applicationId=AWSMPContessa)
*   [GitLab CE AMI AMI for Debian 10](https://aws.amazon.com/marketplace/pp/prodview-t4pdmys3xr3aa?sr=0-9&ref_=beagle&applicationId=AWSMPContessa)
*   [GitLab CE AMI for Ubuntu 16.04](https://aws.amazon.com/marketplace/pp/prodview-46e6llajyvmz2?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [GitLab CE AMI for Ubuntu 18.04](https://aws.amazon.com/marketplace/pp/prodview-jlr6htvnw4fv4?sr=0-2&ref_=beagle&applicationId=AWSMPContessa)
*   [GitLab CE AMI for Ubuntu 20.04](https://aws.amazon.com/marketplace/pp/prodview-v2bgawmu4hyqs?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [GitLab CE AMI for openSUSE Leap 15.2](https://github.com/kurianinc/ami-pub/wiki/GitLab-CE)
*   [GitLab CE AMI for SUSE Linux Enterprise Server 12 SP5](https://aws.amazon.com/marketplace/pp/B08X4QZ6LP)
*   [GitLab CE AMI for SUSE Linux Enterprise Server 15 SP2](https://aws.amazon.com/marketplace/pp/prodview-6ndrzhw74btwo?sr=0-8&ref_=beagle&applicationId=AWSMPContessa)

[](https://github.com/kurianinc/ami-pub/wiki/GitLab-CE#upgrade)Upgrade
======================================================================

Follow official GitLab documentation for possible upgrade options.

[](https://github.com/kurianinc/ami-pub/wiki/GitLab-CE#maintenance-and-troubleshooting)Maintenance and Troubleshooting
======================================================================================================================

*   Kurian can help with configuring the application for your specific needs using this AMI. Contact us with details to [contact@kurianinc.us](mailto:contact@kurianinc.us)

[](https://github.com/kurianinc/ami-pub/wiki/GitLab-CE#remote-access-to-ec2-node)Remote Access to EC2 Node
==========================================================================================================

Following are the standard AWS defined users available for SSH when a node is provisioned:

*   Amazon Linux: ec2-user
*   Red Hat Linux: ec2-user
*   SuSE Linux: ec2-user
*   Fedora: fedora
*   CentOS: centos
*   Debian Linux: admin
*   Ubuntu: ubuntu

[](https://github.com/kurianinc/ami-pub/wiki/GitLab-CE#release-history)Release history
======================================================================================

*   02/18/2021 – Initial release of version 13.8.4 on Debian 10, Ubuntu 16.04/18.04/20.04, Amazon Linux 2018/2, Fedora 31, CentOS 7.9/8.3, RHEL 7.9/8.3, SUSE 12.5/15.2, openSUSE Leap 15.2
