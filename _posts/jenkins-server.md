---
title: "Jenkins Server"
date: 2023-01-01T10:00:00+10:00
image: "images/products/jenkins.jpg"
layout: product
description: Jenkins Server description
permalink: "/aws-machine-images/jenkins-server/"
bodyClass: page-product
weight: 20
---

Jenkins Automation Server
=========================

Jenkins is mainly used for setting up automated software builds and building CI/CD pipelines in a software development organization. However, it can also be used as a general purpose DevOps automation platform where various automation, provisioning and system maintenance tasks can be hosted and orchestrated from.

When you spin up an AWS EC2 node from Kurian’s Jenkins Server AMI, Jenkins Automation Server is up and running, and fully functional. It also comes with additional tools commonly found in a DevOps toolchain that are needed to roll out various automation projects. They include:

*   Major Jenkins plugins
*   Compilers Open JDK 8 and C/C++
*   Python 2.7 and 3.x
*   Ansible
*   Node.js
*   AWS CLI
*   kubectl
*   Maven
*   Gradle
*   Git Client

At the same time, the Jenkins setup is not altered from official installation guidelines so you don’t need to deal with a custom Jenkins setup for building on the baseline platform provided by this AMI.

Note: For all the listed applications and features to be available select the latest version of the AMI.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-2.x-AMI-by-Kurian#features)Features
========================================================================================

*   The AMI has latest Jenkins Continuous Integration/Continuous Deployment (CI/CD) platform pre-installed and configured, with the dependent plugins and applications.
*   The AMI has all the important plugins preinstalled.
*   The AMI has Open JDK 1.8, gcc and g++ compilers, and AWS CLI preinstalled.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-2.x-AMI-by-Kurian#how-it-works)How It Works
================================================================================================

Jenkins is a Java based application and usual steps are the following, but, it can differ depending on the target OS platform:

*   Install Open JDK.
*   Install Jenkins package.
*   Install Jenkins plugins.
*   Install and configure applications that are needed for building CI/CD pipelines.

Though the above steps are not very hard, it requires some technical skills to get everything right for Jenkins to be up and running. Also, it requires many plugins to be usable in a real-life development environment.

The Kurian’s AMI comes with all the above steps baked in, so the EC2 node spun up from it will be usable from the get-go.

Build slaves can be integrated with these servers to provision scalable build, CI/CD or automation infrastructure. Kurian provides fully configured [build slave AMIs](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian) to meet most of the common build requirements.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-2.x-AMI-by-Kurian#supported-platforms)Supported Platforms
==============================================================================================================

Click on the links below to take you to Amazon Marketplace for spinning up EC2 nodes.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-2.x-AMI-by-Kurian#latest-releases)Latest Releases
------------------------------------------------------------------------------------------------------

*   [Jenkins Automation Server 2.233 for Ubuntu 16.04](https://aws.amazon.com/marketplace/pp/B087XYGW9T?ref=_ptnr_amidoc_github)
*   [Jenkins Automation Server 2.233 for Ubuntu 18.04](https://aws.amazon.com/marketplace/pp/B087XD6GV6?ref=_ptnr_amidoc_github)
*   [Jenkins Automation Server 2.233 for Ubuntu 20.04](https://aws.amazon.com/marketplace/pp/prodview-cpiswc743jbaa?sr=0-2&ref_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Automation Server 2.233 for CentOS 7.x](https://aws.amazon.com/marketplace/pp/B087KKKD4G?ref=_ptnr_amidoc_github)
*   [Jenkins Automation Server 2.233 for CentOS 8.x](https://aws.amazon.com/marketplace/pp/B088KRDVCJ?ref=_ptnr_amidoc_github)
*   [Jenkins Automation Server 2.233 for RHEL 7.x](https://aws.amazon.com/marketplace/pp/B087GXLZ5S?ref=_ptnr_amidoc_github)
*   [Jenkins Automation Server 2.233 for RHEL 8.x](https://aws.amazon.com/marketplace/pp/B087XVGKNF?ref=_ptnr_amidoc_github)
*   [Jenkins Automation Server 2.233 for Fedora 31](https://aws.amazon.com/marketplace/pp/B087GWDZZ6?ref=_ptnr_amidoc_github)
*   [Jenkins Automation Server 2.233 for Amazon Linux 2018](https://aws.amazon.com/marketplace/pp/B087XC46VM?ref=_ptnr_amidoc_github)
*   [Jenkins Automation Server 2.233 for Amazon Linux 2](https://aws.amazon.com/marketplace/pp/B087XCWY7M?ref=_ptnr_amidoc_github)
*   [Jenkins Automation Server 2.233 for openSUSE Linux 15](https://aws.amazon.com/marketplace/pp/B0881VC3WV?ref=_ptnr_amidoc_github)
*   [Jenkins Automation Server 2.233 for SUSE Linux 12](https://aws.amazon.com/marketplace/pp/B087XCBFH6?ref=_ptnr_amidoc_github)
*   [Jenkins Automation Server 2.233 for SUSE Linux 15](https://aws.amazon.com/marketplace/pp/B087XWNRZG?ref=_ptnr_amidoc_github)
*   [Jenkins Automation Server 2.233 for Debian 10](https://aws.amazon.com/marketplace/pp/B087XDGMP3?ref=_ptnr_amidoc_github)

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-2.x-AMI-by-Kurian#older-releases)Older Releases
----------------------------------------------------------------------------------------------------

*   [Jenkins-2.46.1 for CentOS 7](https://aws.amazon.com/marketplace/pp/B071J97823/ref=_ptnr_amidoc_github)
    
*   [Jenkins-2.46.1 for Amazon Linux 2017.03.0](https://aws.amazon.com/marketplace/pp/B072JHMYGB/ref=_ptnr_amidoc_github)
    
*   [Jenkins-2.19.2 for Amazon Linux 2016.09.0](https://aws.amazon.com/marketplace/pp/B01MXMY5Z0/ref=_ptnr_amidoc_github) — Discontinued
    
*   [Jenkins-2.46.1 for Red Hat Linux 7.3](https://aws.amazon.com/marketplace/pp/B071FPCBTZ/ref=_ptnr_amidoc_github) — Discontinued
    
*   [Jenkins-2.46.1 for Fedora 23](https://aws.amazon.com/marketplace/pp/B072M3G9PK/ref=_ptnr_amidoc_github) — Discontinued
    
*   [Jenkins-2.46.2 for Debian 8 Jessie](https://aws.amazon.com/marketplace/pp/B071FPC4TW/ref=_ptnr_amidoc_github) — Discontinued
    
*   [Jenkins-2.55.1 for SUSE Linux 12 SP2](https://aws.amazon.com/marketplace/pp/B072F75PP1/ref_=_ptnr_amidoc_github) — Discontinued
    
*   [Jenkins-2.46.2 for Ubuntu 16.04](https://aws.amazon.com/marketplace/pp/B072PZVZFF/ref=_ptnr_amidoc_github) — Discontinued
    

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-2.x-AMI-by-Kurian#unsupported-platforms--configurations)Unsupported Platforms & Configurations
===================================================================================================================================================

Kurian releases latest versions of the software on popular Linux distributions. If you need a configuration that is not available currently in marketplace, send us your requirements to [contact@kurianinc.us](mailto:contact@kurianinc.us). Please include the following info in the email:

*   Name of Software to be on the AMI with version numbers.
*   Linux distribution and the version.
*   The EC2 instance type you plan to use (optional).

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-2.x-AMI-by-Kurian#configuration)Configuration
==================================================================================================

*   After the node is up and running fully, access Jenkins UI using url: [http://NODE-IP:8080](http://node-ip:8080/).
*   SSH into the EC2 node and obtain password for the admin user from /var/lib/jenkins/secrets/initialAdminPassword
    *   sudo cat /var/lib/jenkins/secrets/initialAdminPassword
*   Login as user ‘admin’. Change admin password soon after you login.
*   Rest of the configuration steps are application specific and refer product documentation for details.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-2.x-AMI-by-Kurian#upgrade)Upgrade
======================================================================================

An existing Jenkins instance can be migrated to a Jenkins instance spun up from latest version of AMI. Usually that is performed by syncing the JENKINS\_HOME directory from old instance to the new instance. However, a specific case of migration can be different and please consult the Jenkins documentation for that.

For help, contact us by email with details of your migration scenario.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-2.x-AMI-by-Kurian#maintenance-and-troubleshooting)Maintenance and Troubleshooting
======================================================================================================================================

Kurian can help with configuring Jenkins for your specific needs. Contact us with details to [contact@kurianinc.us](mailto:contact@kurianinc.us)

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-2.x-AMI-by-Kurian#remote-access-to-ec2-node)Remote Access to EC2 Node
==========================================================================================================================

Jenkins runs on port 8080 and that must be opened to the network from where you plan to access the application.

The EC2 node can be accessed using any SSL based remote access clients on port 22, using the ssh key you have selected when the node is spun up.

Following are the predefined users available when a node is provisioned:

*   Amazon Linux: ec2-user
*   Red Hat Linux: ec2-user
*   SuSE Linux: ec2-user
*   Fedora: fedora
*   CentOS: centos
*   Debian Linux: admin
*   Ubuntu: ubuntu