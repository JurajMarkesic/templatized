---
title: "PostgreSQL Database Server"
date: 2023-01-01T10:00:00+10:00
image: "images/products/postgresql.png"
layout: product
description: PostgreSQL Database Server description
permalink: "/aws-machine-images/postgresql-database-server/"
bodyClass: page-product
weight: 250
---

PostgreSQL Database Server
==========================

PostgreSQL is an open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads. PostgreSQL comes with many features aimed to help developers build applications, administrators to protect data integrity and build fault-tolerant environments, and help you manage your data no matter how big or small the dataset. In addition to being free and open source, PostgreSQL is highly extensible. For example, you can define your own data types, build out custom functions, even write code from different programming languages without recompiling your database.

  Features
==========

*   AAMI built with the latest, stable version of PostgreSQL.
    
*   AMI compatible for spinning up PostgreSQL database nodes with the service up and running.
    
*   AMI is built on a patched operating system and the node created from this is ready to be deployed in production.
    

  How It Works
==============

*   When an EC2 node spun up from this AMI, the PostgreSQL service is up and running.
    
*   SSH into the newly spun up node if you need to perform any additional configuration. The database port 5432 is open and you could connect to the database instance remotely also.
    

Click on the links below to take you to Amazon Marketplace for spinning up EC2 nodes.

*   [PostGRE SQL Database Server for Amazon Linux 2](https://aws.amazon.com/marketplace/pp/prodview-xvj2s6m7ixzug?sr=0-9&ref_=beagle&applicationId=AWSMPContessa)
    
*   [PostGRESQL Database Server for CentOS 7](https://aws.amazon.com/marketplace/pp/prodview-h6b7jwgb2dc2e?sr=0-5&ref_=beagle&applicationId=AWSMPContessa)
    
*   [POSTGRESQL Database Server for CentOS 8](https://aws.amazon.com/marketplace/pp/prodview-yb7g7qskmpwc6?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
    
*   [POSTGRESQL Server for Red Hat Enterprise Linux 7](https://aws.amazon.com/marketplace/pp/prodview-yjpzslswwbmak?sr=0-11&ref_=beagle&applicationId=AWSMPContessa)
    
*   [POSTGRESQL Server for Red Hat Enterprise Linux 8](https://aws.amazon.com/marketplace/pp/prodview-cqmlyhvzlgl2e?sr=0-10&ref_=beagle&applicationId=AWSMPContessa)
    
*   [POSTGRE SQL Server for SUSE Linux 15](https://aws.amazon.com/marketplace/pp/prodview-56htqramg36a2?sr=0-7&ref_=beagle&applicationId=AWSMPContessa)
    
*   [POSTGRE SQL Server for SUSE Linux 12](https://aws.amazon.com/marketplace/pp/prodview-v22pnfn4jikis?sr=0-8&ref_=beagle&applicationId=AWSMPContessa)
*   [POSTGRESQL Server for Debian 10](https://aws.amazon.com/marketplace/pp/prodview-btcrkfpt57q24?sr=0-6&ref_=beagle&applicationId=AWSMPContessa)
    
*   [POSTGRE SQL Server for Ubuntu 16.04](https://aws.amazon.com/marketplace/pp/prodview-h7rbwjaqp2m3u?sr=0-3&ref_=beagle&applicationId=AWSMPContessa)
    
*   [POSTGRESQL Server for Ubuntu 18.04](https://aws.amazon.com/marketplace/pp/prodview-25gqlugusxjma?sr=0-2&ref_=beagle&applicationId=AWSMPContessa)
    
*   [POSTGRE SQL Server for Ubuntu 20.04](https://aws.amazon.com/marketplace/pp/prodview-mgm443ayiultw?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
    

  Configuration
===============

*   When an EC2 node spun up from this AMI, the database service would be available on port 5432.
    
*   The database service can be managed using standard steps:
    

$ sudo systemctl \[start|stop|status\] POSTGRESQL.service 

where the POSTGRESQL name is specific to the operating system as follows:

*   Ubuntu: postgresql@13-main
    
*   Debian: postgresql@13-main
    
*   Red Hat Enterprise Linux 7: postgresql-13
    
*   Red Hat Enterprise Linux 8: postgresql
    
*   CentOS 7: postgresql-13
    
*   CentOS 8: postgresql
    
*   Amazon Linux: postgresql-13
    
*   SUSE Linux: postgresql
    

  Unsupported Configurations
============================

Kurian releases latest, stable versions of open source software on popular Linux distributions. If you need a configuration that is not currently available in marketplace, send us your requirements to contact@kurianinc.us. Please include the following info in the email:

*   Name of Software with version numbers that need to be released as AMIs.
    
*   Linux distribution and the version.
    
*   The EC2 instance type that you plan to spin up using the AMI (optional).
    

  Upgrade
=========

Follow official documentation for the directions for any upgrades.

  Maintenance and Troubleshooting
=================================

*   The Cassandra service is cassandra, and it can be managed using standard options available for a Linux service. See the last section also.
    
*   The application can be maintained following the official documents.
    
*   Kurian can help with configuring the application for your specific needs using this AMI. Contact us with details to contact@kurianinc.us
    

  Remote Access to EC2 Node
===========================

Following are the standard AWS defined users available for SSH when a node is provisioned:

*   Amazon Linux: ec2-user
    
*   Red Hat Linux: ec2-user
    
*   SuSE Linux: ec2-user
    
*   Fedora: fedora
    
*   CentOS: centos
    
*   Debian Linux: admin
    
*   Ubuntu: ubuntu
    

  Release history
=================

*   05/31/2021 – Initial release on Debian 10, Ubuntu 16.04/18.04/20.04, Amazon Linux 2, CentOS 7.9/8.3, RHEL 7 and 8, SUSE Linux platforms. Not supported on Amazon Linux 2018, Fedora 31.
