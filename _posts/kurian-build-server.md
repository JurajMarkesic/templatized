---
title: "Kurian Build Server"
date: 2023-01-01T10:00:00+10:00
image: "images/products/kurian-build-server.jpg"
layout: product
description: Kurian Build Server description
permalink: "/aws-machine-images/kurian-build-server/"
bodyClass: page-product
weight: 40
---

Kurian Build Server
===================

A general purpose build machine is a requirement at times in an environment where a diverse portfolio of products are built and packaged for testing and production or releasing to customers. These requirements include:

*   an environment for building legacy products
*   build node in a CI/CD pipeline
*   highly custom environment for building or releasing something
*   a baseline machine for building a build node to add to an existing CI/CD pipeline.

Note that if your requirement is to set up a Jenkins Server or Slave, check out the related AMI products by Kurian:

*   [Jenkins Server AMI](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Server)
*   [Jenkins Slave AMI](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Slave)

The Kurian Build Server AMI is preloaded with tools needed for building and packaging applications for a variety of platforms and application development environments:

*   Git Client
*   Ant
*   Maven
*   Gradle
*   Java OpenJDK 8 as the default Java version
*   OpenJDK releases from 9 through 15.
*   C/C++ compilers
*   Go compiler
*   Python, versions 2.7 and 3.x
*   Docker
*   Node.js
*   Ansible
*   AWS CLI
*   kubectl

All the tools are installed following official guidelines so you don’t need to deal with any custom environment and you can build on the baseline build platform available on this AMI.

[](https://github.com/kurianinc/ami-pub/wiki/Kurian-Build-Server#features)Features
==================================================================================

All the compilers, interpreters and other tools that are normally used by build and automation jobs are installed on the AMI.

[](https://github.com/kurianinc/ami-pub/wiki/Kurian-Build-Server#openjdk-releases)OpenJDK releases
--------------------------------------------------------------------------------------------------

*   OpenJDK 1.8 is the default version of Java available on the AMI.
*   The OpenJDK versions 9 and above are installed under `/opt/java`. For example, release 9 is available under `/opt/java/jdk-9`. For the actual path and related info check under `/opt/java` and point JAVA\_HOME to appropriate path as needed.

[](https://github.com/kurianinc/ami-pub/wiki/Kurian-Build-Server#cc)C/C++
-------------------------------------------------------------------------

`gcc` and `g++` are available on the AMI and the related standard header files.

[](https://github.com/kurianinc/ami-pub/wiki/Kurian-Build-Server#go)Go
----------------------------------------------------------------------

Latest version of Go is installed and available in the system path. Run `go version` to see the version info.

[](https://github.com/kurianinc/ami-pub/wiki/Kurian-Build-Server#python)Python
------------------------------------------------------------------------------

The default version of Python available on the AMI is Python 3. Python 2.7 is also available on the AMI and it may have to be accessed as `python2` or `python2.7`.

Please note the Python paths are slightly different on each Linux distribution as we didn’t make any attempt to standardize to avoid customization.

[](https://github.com/kurianinc/ami-pub/wiki/Kurian-Build-Server#nodejs)Node.js
===============================================================================

Latest version of Node.js executable is available in the system path.

[](https://github.com/kurianinc/ami-pub/wiki/Kurian-Build-Server#git-client)Git client
--------------------------------------------------------------------------------------

Git client is installed and available in the system PATH as `git`.

[](https://github.com/kurianinc/ami-pub/wiki/Kurian-Build-Server#ant)Ant
------------------------------------------------------------------------

The system environment variable `ANT_HOME` points to the install location of Apache Ant.

[](https://github.com/kurianinc/ami-pub/wiki/Kurian-Build-Server#maven)Maven
----------------------------------------------------------------------------

Latest version of Maven is installed and it can be accessed as `mvn` from the system path.

[](https://github.com/kurianinc/ami-pub/wiki/Kurian-Build-Server#gradle-and-yarn)Gradle and Yarn
------------------------------------------------------------------------------------------------

Latest stable releases of `Gradle` and `Yarn` are installed. The system environment variable `GRADLE_HOME` points to the install location.

[](https://github.com/kurianinc/ami-pub/wiki/Kurian-Build-Server#ansible)Ansible
--------------------------------------------------------------------------------

A recent version of Ansible is available on the AMI. To the see the installed version and the Python interpreter it uses, run `ansible --version`.

[](https://github.com/kurianinc/ami-pub/wiki/Kurian-Build-Server#aws-cli)AWS CLI
--------------------------------------------------------------------------------

The AWS CLI command `aws` can be accessed as `aws` or `/usr/local/bin/aws` depending on the Linux distribution.

[](https://github.com/kurianinc/ami-pub/wiki/Kurian-Build-Server#docker)Docker
------------------------------------------------------------------------------

The latest, stable version of Docker is available on the AMI for Docker based builds.

[](https://github.com/kurianinc/ami-pub/wiki/Kurian-Build-Server#kubectl)kubectl
--------------------------------------------------------------------------------

A recent version of the `kubectl` command-line tool is installed for Jenkins jobs that need to access Kubernetes clusters.

[](https://github.com/kurianinc/ami-pub/wiki/Kurian-Build-Server#how-it-works)How It Works
==========================================================================================

A node spun up from this AMI could be used immediately for compiling software and packaging binaries into artifacts supported by the application development tool or those available on the related Linux platform. Later Docker version is also available on the host for building Docker images.

[](https://github.com/kurianinc/ami-pub/wiki/Kurian-Build-Server#supported-platforms)Supported Platforms
========================================================================================================

Click on the links below to take you to Amazon Marketplace for spinning up EC2 nodes.

*   [Build Server for Amazon Linux 2018](https://aws.amazon.com/marketplace/pp/B08W8R8SRV)
*   [Build Server for Amazon Linux 2](https://aws.amazon.com/marketplace/pp/B08W59H13Z)
*   [Build Server for CentOS 7](https://aws.amazon.com/marketplace/pp/B08W5912LQ)
*   [Build Server for CentOS 8](https://aws.amazon.com/marketplace/pp/prodview-ylwequjbdmqfy?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Build Server for Red Hat Enterprise Linux 7](https://aws.amazon.com/marketplace/pp/prodview-337suywmhwk3i?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Build Server for Red Hat Enterprise Linux 8](https://aws.amazon.com/marketplace/pp/prodview-35qmy3i4em3tq?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Build Server for Fedora 31](https://aws.amazon.com/marketplace/pp/prodview-6wqepf7bp3dn2?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Build Server for Debian 10](https://aws.amazon.com/marketplace/pp/B08W59QQV1)
*   [Build Server for Ubuntu 16.04](https://aws.amazon.com/marketplace/pp/prodview-u6fpovpgr3xd4?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Build Server for Ubuntu 18.04](https://aws.amazon.com/marketplace/pp/prodview-sskpf3obif2ky?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   [Build Server for Ubuntu 20.04](https://aws.amazon.com/marketplace/pp/B08W5BNVZM)
*   [Build Server for openSUSE Leap 15.2](http://aws.amazon.com/marketplace/pp/B08W9Q5XV1)
*   [Build Server for SUSE Linux Enterprise Server 12](https://aws.amazon.com/marketplace/pp/prodview-qofe3j6nojomi?sr=0-6&ref_=beagle&applicationId=AWSMPContessa)
*   [Build Server for SUSE Linux Enterprise Server 15](https://aws.amazon.com/marketplace/pp/prodview-devmmhifi2nec?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)

[](https://github.com/kurianinc/ami-pub/wiki/Kurian-Build-Server#unsupported-configurations)Unsupported Configurations
======================================================================================================================

Kurian releases latest, stable versions of open source software on popular Linux distributions. If you need a configuration that is not currently available in marketplace, send us your requirements to [contact@kurianinc.us](mailto:contact@kurianinc.us). Please include the following info in the email:

*   Name of Software to be on the AMI with version numbers.
*   Linux distribution and the version.
*   The EC2 instance type you plan to spin up from the AMI (optional).

[](https://github.com/kurianinc/ami-pub/wiki/Kurian-Build-Server#configuration)Configuration
============================================================================================

The EC2 node is ready for building a variety of applications immediately. Test the build node with a typical build and if needed install any additional components.

[](https://github.com/kurianinc/ami-pub/wiki/Kurian-Build-Server#upgrade)Upgrade
================================================================================

Check for an updated version of this AMI for using up-to-date versions of the software needed for builds.

[](https://github.com/kurianinc/ami-pub/wiki/Kurian-Build-Server#maintenance-and-troubleshooting)Maintenance and Troubleshooting
================================================================================================================================

Kurian can help with configuring Jenkins for your specific needs. Contact us with details to [contact@kurianinc.us](mailto:contact@kurianinc.us)

[](https://github.com/kurianinc/ami-pub/wiki/Kurian-Build-Server#remote-access-to-ec2-node)Remote Access to EC2 Node
====================================================================================================================

Following are the standard AWS defined users available when a node is provisioned:

*   Amazon Linux: ec2-user
*   Red Hat Linux: ec2-user
*   SuSE Linux: ec2-user
*   Fedora: fedora
*   CentOS: centos
*   Debian Linux: admin
*   Ubuntu: ubuntu