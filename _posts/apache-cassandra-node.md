---
# SEO
title: Apache Cassandra Node
description: write_a_description_around_160_characters_long_about_this_WORK_POST
image: /assets/images/seo/banner.png

# PAGE
date: 2023-01-01T10:00:00+10:00
name: Apache Cassandra Node
post_title: Apache Cassandra Node
thumbnail: assets/images/products/cassandra.jpg
synopsis: Apache Cassandra Node description
permalink: aws-machine-images/apache-cassandra-node
weight: 170
# link: https://example.com/
---

Apache Cassandra Node
=====================

Apache Cassandra is an open-source, distributed, wide-column store, NoSQL database management system designed to handle large amounts of data across many commodity servers, providing high availability with no single point of failure. Cassandra offers robust support for clusters spanning multiple datacenters, with asynchronous masterless replication allowing low latency operations for all clients. This AMI could be used for setting up a single node Cassandra installation or used as a node for setting up a multi-node Cassandra cluster.

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Cassandra-Node#features)Features
====================================================================================

*   AMI built with Java 8 and the latest, stable version of Apache Cassandra.
*   AMI compatible for setting up both single node Cassandra and multi-node Cassandra clusters.
*   AMI built on a patched operating system and the node created from this is ready to be deployed in production.

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Cassandra-Node#how-it-works)How It Works
============================================================================================

*   When an EC2 node spun up from this AMI, Cassandra service is up and running.
*   If the node has to be added to a cluster, do the additional configuration using user data script.

Click on the links below to take you to Amazon Marketplace for spinning up EC2 nodes.

*   [Apache Cassandra Node AMI for Amazon Linux 2018](http://aws.amazon.com/marketplace/pp/B091DWRGM7)
*   [Apache Cassandra Node AMI for Amazon Linux 2](https://aws.amazon.com/marketplace/pp/B091D5Q8X2)
*   [Apache Cassandra Node AMI for CentOS 7](https://aws.amazon.com/marketplace/pp/B091HZBHLM)
*   [Apache Cassandra Node AMI for CentOS 8](https://aws.amazon.com/marketplace/pp/B091J2SXMZ)
*   [Apache Cassandra Node AMI for Red Hat Enterprise Linux 7](https://aws.amazon.com/marketplace/pp/B091D2MGGF)
*   [Apache Cassandra Node AMI for Red Hat Enterprise Linux 8](https://aws.amazon.com/marketplace/pp/B091D3HX5L)
*   [Apache Cassandra Node AMI for Fedora 31](http://aws.amazon.com/marketplace/pp/B091J2H8VD)
*   [Apache Cassandra Node AMI for Debian 10](https://aws.amazon.com/marketplace/pp/B091CZ5T7J)
*   [Apache Cassandra Node AMI for Ubuntu 16.04](https://aws.amazon.com/marketplace/pp/B091HSNBP4)
*   [Apache Cassandra Node AMI for Ubuntu 18.04](https://aws.amazon.com/marketplace/pp/B091HWCTTN)
*   [Apache Cassandra Node AMI for Ubuntu 20.04](https://aws.amazon.com/marketplace/pp/prodview-xkbyhsutpvatc?sr=0-7&ref_=beagle&applicationId=AWSMPContessa)
*   [Apache Cassandra Node AMI for openSUSE Leap 15.2](https://aws.amazon.com/marketplace/pp/B091KTGPCY)
*   [Apache Cassandra Node AMI for SUSE Linux Enterprise Server 12 SP5](https://aws.amazon.com/marketplace/pp/B091J73CWS)
*   [Apache Cassandra Node AMI for SUSE Linux Enterprise Server 15 SP2](https://aws.amazon.com/marketplace/pp/B091KW5LGF)

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Cassandra-Node#configuration)Configuration
==============================================================================================

*   When an EC2 node spun up from this AMI, Cassandra service would be up and running on port 9042.
*   Depending on the configuration of the cluster to which the node has to join, more ports need to be opened as follows:

    Cassandra inter-node ports:
    7000	Cassandra inter-node cluster communication.
    7001	Cassandra SSL inter-node cluster communication.
    7199	Cassandra JMX monitoring port.
    
    Cassandra client ports:
    9042	Cassandra client port.
    9160	Cassandra client port (Thrift).
    9142	Default for native_transport_port_ssl, useful when both encrypted and unencrypted connections are required
    

*   The EC2 node would run a standalone Cassandra installation by default.
*   If the node has to be added to a cluster make suitable changes and restart the service.
*   The Cassandra installation is at /opt/cassandra/apache-cassandra-VERSION (e.g. /opt/cassandra/apache-cassandra-3.11.10).
*   On platforms supporting systemd the `cassandra` service can managed using standard steps:

On older Linux platforms like Amazon Linux 2018, standard `cassandra` service is available to manage the service:

*   At times, especially when smaller instance types are used for spinning up the EC2 node the Cassandra might fail to start. In such cases, manually start the Cassandra service.
*   /opt/cassandra/apache-cassandra-VERSION/bin is in the global PATH and all the Cassandra binaries like `nodetool` can be run without specifying the full path.
*   The Cassandra service is configured run as user `cassandra`. Any configuration change should take that into account.

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Cassandra-Node#unsupported-configurations)Unsupported Configurations
========================================================================================================================

Kurian releases latest, stable versions of open source software on popular Linux distributions. If you need a configuration that is not currently available in marketplace, send us your requirements to [contact@kurianinc.us](mailto:contact@kurianinc.us). Please include the following info in the email:

*   Name of Software with version numbers that need to be released as AMIs.
*   Linux distribution and the version.
*   The EC2 instance type that you plan to spin up using the AMI (optional).

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Cassandra-Node#upgrade)Upgrade
==================================================================================

Follow Apache Cassandra directions for any upgrades.

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Cassandra-Node#maintenance-and-troubleshooting)Maintenance and Troubleshooting
==================================================================================================================================

*   The Cassandra service is `cassandra`, and it can be managed using standard options available for a Linux service. See the last section also.
*   The application can be maintained following the official documents.
*   Kurian can help with configuring the application for your specific needs using this AMI. Contact us with details to [contact@kurianinc.us](mailto:contact@kurianinc.us)

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Cassandra-Node#remote-access-to-ec2-node)Remote Access to EC2 Node
======================================================================================================================

Following are the standard AWS defined users available for SSH when a node is provisioned:

*   Amazon Linux: ec2-user
*   Red Hat Linux: ec2-user
*   SuSE Linux: ec2-user
*   Fedora: fedora
*   CentOS: centos
*   Debian Linux: admin
*   Ubuntu: ubuntu

[](https://github.com/kurianinc/ami-pub/wiki/Apache-Cassandra-Node#release-history)Release history
==================================================================================================

*   03/29/2021 – Initial release of version 3.11.10 on Debian 10, Ubuntu 16.04/18.04/20.04, Amazon Linux 2018/2, Fedora 31, CentOS 7.9/8.3, RHEL 7.9/8.3, SUSE 12.5/15.2, openSUSE Leap 15.2
