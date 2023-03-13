---
# SEO
title: Jenkins Server
description: write_a_description_around_160_characters_long_about_this_WORK_POST
image: /assets/images/seo/banner.png

# PAGE
date: 2023-01-01T10:00:00+10:00
name: Jenkins Server
thumbnail: assets/images/products/jenkins.jpg
synopsis: Nam eu quam maximus, mattis nisl volutpat, euismod magna. Duis bibendum interdum placerat.
permalink: aws-machine-images/jenkins-server
# link: https://example.com/
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

*   [Jenkins Continuous Integration (CI) Server for Ubuntu 18.04](https://aws.amazon.com/marketplace/pp/prodview-lf6ea5oqmech2?sr=0-2&ref_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Continuous Integration (CI) Server for Ubuntu 20.04](https://aws.amazon.com/marketplace/pp/prodview-cpiswc743jbaa?sr=0-10&ref_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Server for Ubuntu 22.04](https://aws.amazon.com/marketplace/pp/prodview-c5gncr7cidf7s?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Continuous Integration (CI) Server for CentOS 7](https://aws.amazon.com/marketplace/pp/prodview-ekogbgarnpa5m?sr=0-5&ref_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Continuous Integration (CI) Server for Red Hat Linux 7](https://aws.amazon.com/marketplace/pp/prodview-kfol4fptuoo7g?sr=0-18&ref_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Continuous Integration (CI) Server for Red Hat Linux 8](https://aws.amazon.com/marketplace/pp/prodview-ycwgzirvyyrz4?sr=0-11&ref_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Continuous Integration (CI) Server for Debian GNU/Linux 10](https://aws.amazon.com/marketplace/pp/prodview-yenl7v3p524gu?sr=0-12&ref_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Continuous Integration (CI) Server for Debian GNU/Linux 11](https://aws.amazon.com/marketplace/pp/prodview-hchtxt2dzmfru?sr=0-19&ref_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Continuous Integration (CI) Server for Amazon Linux 2](https://aws.amazon.com/marketplace/pp/prodview-lbtexzfoxxklw?sr=0-7&ref_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Continuous Integration (CI) Server for Amazon Linux 2018](https://aws.amazon.com/marketplace/pp/prodview-mcypqjr7p7izm?sr=0-9&ref_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Continuous Integration (CI) Server for AlmaLinux 8](https://aws.amazon.com/marketplace/pp/prodview-sikvr7t56euz4?sr=0-13&ref_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Continuous Integration (CI) Server for Rocky Linux 8](https://aws.amazon.com/marketplace/pp/prodview-3bxkpcim4zdi4?sr=0-15&ref_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Continuous Integration (CI) Server for Oracle Linux 7](https://aws.amazon.com/marketplace/pp/prodview-6on4k6uku7wde?sr=0-17&ref_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Continuous Integration (CI) Server for Oracle Linux 8](https://aws.amazon.com/marketplace/pp/prodview-ebchynvaq3ype?sr=0-16&ref_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Continuous Integration (CI) Server for Red Hat Linux 7](https://aws.amazon.com/marketplace/pp/prodview-kfol4fptuoo7g?sr=0-18&ref_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Slave for SUSE Linux Enterprise Server 15](https://aws.amazon.com/marketplace/pp/prodview-qkbgmcdxvwufy?sr=0-20&ref_=beagle&applicationId=AWSMPContessa) [Jenkins Continuous Integration (CI) Server LTS for Fedora 31](https://aws.amazon.com/marketplace/pp/prodview-32aogwob2xpqq?sr=0-6&ref_=beagle&applicationId=AWSMPContessa)

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