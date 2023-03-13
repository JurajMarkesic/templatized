---
title: "DevOps Desk with Ansible"
date: 2023-01-01T10:00:00+10:00
image: "images/products/ansible.jpg"
layout: product
description: DevOps Desk with Ansible description
permalink: "/aws-machine-images/devops-desk-with-ansible/"
bodyClass: page-product
weight: 120
---

DevOps Desk
===========

DevOps Desk is a working environment designed for DevOps engineers to perform their daily chores. Typically, this instance is deployed in an environment that DevOps engineers will login to do administrative tasks. The tools popular with DevOps engineers are baked into this AMI and they are readily available for use when a new instance is spun up from this AMI.

These are the main tools available:

*   Ansible
*   git client
*   kubectl
*   awscli
*   curl
*   zip & unzip
*   Python 2.7
*   Python 3. This is the default python version setup on the AMI.
*   Networking triaging tools:
    *   `arp` is used to manipulate the kernel’s ARP cache, usually to add or delete an entry, or to dump the entire cache.
    *   `dnsdomainname` reports the system’s DNS domain name.
    *   `domainname` reports or sets the system’s NIS/YP domain name.
    *   `hostname` reports or sets the name of the current host system.
    *   `ifconfig` is the main utility for configuring network interfaces.
    *   `netstat` is used to report network connections, routing tables, and interface statistics.
    *   `route` is used to manipulate the IP routing table.

[](https://github.com/kurianinc/ami-pub/wiki/DevOps-Desk#supported-platforms)Supported Platforms
================================================================================================

Click on the links below to take you to Amazon Marketplace for spinning up EC2 nodes.

*   [DevOps Desk 1.0 with Ansible for CentOS 7](https://aws.amazon.com/marketplace/pp/B08735ZCS9)
*   [DevOps Desk 1.0 with Ansible for Ubuntu 18.04](https://aws.amazon.com/marketplace/pp/B087369QWQ)
*   [DevOps Desk 1.0 with Ansible for Red Hat Enterprise Linux 7](https://aws.amazon.com/marketplace/pp/B0873556RS)

[](https://github.com/kurianinc/ami-pub/wiki/DevOps-Desk#unsupported-configurations)Unsupported Configurations
==============================================================================================================

Kurian releases latest, stable versions of open source software on popular Linux distributions. If you need a configuration that is not currently available in marketplace, send us your requirements to [contact@kurianinc.us](mailto:contact@kurianinc.us). Please include the following info in the email:

*   Name of Software to be on the AMI with version numbers.
*   Linux distribution and the version.
*   The EC2 instance type you plan to spin up from the AMI (optional).

[](https://github.com/kurianinc/ami-pub/wiki/DevOps-Desk#configuration)Configuration
====================================================================================

[](https://github.com/kurianinc/ami-pub/wiki/DevOps-Desk#upgrade)Upgrade
========================================================================

*   Spin up new EC2 node with the latest DevOps Desk AMI.
*   From the old host move configuration files and data to the new node.
*   Check versions of the tools on the new host and perform tools related upgrades of the related configuration files as needed.

[](https://github.com/kurianinc/ami-pub/wiki/DevOps-Desk#maintenance-and-troubleshooting)Maintenance and Troubleshooting
========================================================================================================================

Kurian can help with configuring the application for your specific needs. Contact us with details to [contact@kurianinc.us](mailto:contact@kurianinc.us)

[](https://github.com/kurianinc/ami-pub/wiki/DevOps-Desk#remote-access-to-ec2-node)Remote Access to EC2 Node
============================================================================================================

Following are the standard AWS defined users available for SSH when a node is provisioned:

*   Amazon Linux: ec2-user
*   Red Hat Linux: ec2-user
*   SuSE Linux: ec2-user
*   Fedora: fedora
*   CentOS: centos
*   Debian Linux: admin
*   Ubuntu: ubuntu
