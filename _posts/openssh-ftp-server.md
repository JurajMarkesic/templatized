---
title: "OpenSSH FTP Server"
date: 2023-01-01T10:00:00+10:00
image: "images/products/open-ssh.jpg"
layout: product
description: OpenSSH FTP Server description
permalink: "/aws-machine-images/openssh-ftp-server/"
bodyClass: page-product
weight: 240
---

Introduction
============

SFTP Server by Kurian is based on the OpenSSH Server platform and it is configured as a secured, robust FTP server for any file transfer requirements. The AMI is shipped with a default FTP user but any number of users can be created as needed. This server is an excellent and secured choice for allowing both internal and external users to transfer files.

[](https://github.com/kurianinc/ami-pub/wiki/OpenSSH-FTP-Server#supported-platforms)Supported platforms
=======================================================================================================

Following distributions and versions of AMIs are available on AWS Marketplace:

*   [OpenSSH FTP Server for Debian Linux 10](https://aws.amazon.com/marketplace/pp/prodview-blolmpx3zihuu?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   \[OpenSSH FTP Server for Amazon Linux 2018\](Not supported)
*   [OpenSSH FTP Server for Amazon Linux 2](https://aws.amazon.com/marketplace/pp/prodview-i46dajyqwaawq?sr=0-4&ref_=beagle&applicationId=AWSMPContessa)
*   [OpenSSH FTP Server for Ubuntu 16.04](https://aws.amazon.com/marketplace/pp/prodview-3fkft5jyqut7y?sr=0-3&ref_=beagle&applicationId=AWSMPContessa)
*   [OpenSSH FTP Server for Ubuntu 18.04](https://aws.amazon.com/marketplace/pp/prodview-g6zryyv6u3ao4?sr=0-2&ref_=beagle&applicationId=AWSMPContessa)
*   [OpenSSH FTP Server for Ubuntu 20.04](https://aws.amazon.com/marketplace/pp/prodview-qzjquia3bzra6?sr=0-6&ref_=beagle&applicationId=AWSMPContessa)
*   \[OpenSSH FTP Server for CentOS 7\](Not supported)
*   [OpenSSH FTP Server for CentOS 8](https://aws.amazon.com/marketplace/pp/prodview-wru3otqroji5k?sr=0-7&ref_=beagle&applicationId=AWSMPContessa)
*   \[OpenSSH FTP Server for Red Hat Enterprise Linux 7\](Not supported)
*   \[OpenSSH FTP Server for Red Hat Enterprise Linux 8\](Not supported)
*   \[OpenSSH FTP Server for Fedora 31\](Not supported)
*   [OpenSSH FTP Server for SUSE Linux 12](https://aws.amazon.com/marketplace/pp/prodview-qyu6ubq7gkglw?sr=0-5&ref_=beagle&applicationId=AWSMPContessa)
*   [OpenSSH FTP Server for SUSE Linux 15](https://aws.amazon.com/marketplace/pp/prodview-zqr4ybm5opjeu?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)
*   \[Postfix Mail Server for openSUSE Linux Leap 15.2\](Not supported)

[](https://github.com/kurianinc/ami-pub/wiki/OpenSSH-FTP-Server#unsupported-configurations)Unsupported Configurations
=====================================================================================================================

Kurian releases latest, stable versions of open source software on popular Linux distributions. If you need a configuration that is not currently available in marketplace, send us your requirements to [contact@kurianinc.us](mailto:contact@kurianinc.us). Please include the following info in the email:

*   Name of Software to be on the AMI with version numbers.
*   Linux distribution and the version.
*   The EC2 instance type you plan to spin up from the AMI (optional).

[](https://github.com/kurianinc/ami-pub/wiki/OpenSSH-FTP-Server#configuration)Configuration
===========================================================================================

*   Spin up an EC2 node with this AMI with adequate storage on the root partition to support your file transfer requirements.
*   SSH into the new EC2 instance as user specific to the operating system. See `Remote Access to EC2 Node` below to see the users listed.
*   Open `/etc/ssh/sshd_config` and look at the following block towards the end, and make sure that `PasswordAuthentication` is set to `yes`.

    Match group sftpusers
      PasswordAuthentication yes
      ChrootDirectory /sftp/%u
      X11Forwarding no
      AllowTcpForwarding no
      AllowAgentForwarding no
      ForceCommand internal-sftp
      PermitTunnel no
    

*   If `/etc/ssh/sshd_config` had to to modified restart the SSH daemon service:

    $ sudo service sshd restart #On Debian based systems the service could be ssh.
    

*   Create ftp users using the script `/usr/local/bin/create-ftp-user.sh`

    $ sudo /usr/local/bin/create-ftp-user.sh USER PASSWORD
    

*   Each user has the home directory at `/sftp/USER` and sub-directories Incoming and Outgoing. When the user if logged into SFTP server these subdirectories will be visible. If this directory structure needs to be custom, create that under the home directory and set owner and permission same as that the Incoming and Outgoing directories are configured with. Look up in `/usr/local/bin/create-ftp-user.sh` for directions on how the user directories are setup.
*   Check access to new SFTP server following standard FTP client procedures using any client as the default user or any other new user setup by you. From command-line, the sftp client can be started as follows:

    $ sftp ftpusr@EC2-NODE-PUBLIC-IP
    

*   If the SFTP server is published with CNAME such a `sftp.yourcompany.com`, point the CNAME to the IP address. It’s recommended to use an EIP as you will have the freedom upgrade the SFTP server with a new AMI in the future.

[](https://github.com/kurianinc/ami-pub/wiki/OpenSSH-FTP-Server#upgrade)Upgrade
===============================================================================

*   Upgrade the SFTP server with the latest AMI.
*   Move any custom users manually to the new host.

[](https://github.com/kurianinc/ami-pub/wiki/OpenSSH-FTP-Server#maintenance-and-troubleshooting)Maintenance and Troubleshooting
===============================================================================================================================

Kurian can help with configuring Jenkins for your specific needs. Contact us with details to [contact@kurianinc.us](mailto:contact@kurianinc.us)

[](https://github.com/kurianinc/ami-pub/wiki/OpenSSH-FTP-Server#remote-access-to-ec2-node)Remote Access to EC2 Node
===================================================================================================================

Following are the standard AWS defined users available when a node is provisioned:

*   Amazon Linux: ec2-user
*   Red Hat Linux: ec2-user
*   SuSE Linux: ec2-user
*   Fedora: fedora
*   CentOS: centos
*   Debian Linux: admin
*   Ubuntu: ubuntu
