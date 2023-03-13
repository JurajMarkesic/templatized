---
# SEO
title: Jenkins Slave
description: write_a_description_around_160_characters_long_about_this_PRODUCT_POST
image: /assets/images/seo/banner.png

# PAGE
date: 2023-01-01T10:00:00+10:00
name: Jenkins Build Slave
post_title: Jenkins Slave
thumbnail: assets/images/products/jenkins-slave.jpg
permalink: "/aws-machine-images/jenkins-slave/"
# link: https://example.com/
weight: 30
---

Jenkins Build Slave
-------------------

In a Jenkins based CI/CD pipeline the Jenkins slaves are the work horses. A slave machine is configured to perform variety of tasks – compilation of application source code, executing playbooks and running a wide range of automation tasks.

The Kurian Jenkins slave AMI is preloaded with most of the popular tools that are required to run such automations tasks:

*   Git Client
*   Ant
*   Maven
*   Gradle
*   Java OpenJDK 8 as the default Java version
*   OpenJDK releases from 9 through 14.
*   C/C++ compilers
*   Go compiler
*   Python 2.7 and 3.x
*   Docker
*   Node.js
*   Ansible
*   AWS CLI
*   kubectl

All the tools are installed following official guidelines so you don’t need to deal with any custom environment and you can build on the baseline build platform available on this AMI.

The build slaves spun up from this AMI work the best with Jenkins server created from Kurian’s AMI for [Jenkins Server](https://github.com/kurianinc/ami-pub/wiki/Jenkins-2.x-AMI-by-Kurian). AMIs are available for all the major Linux distributions.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#features)Features
================================================================================================

All the compilers, interpreters and other tools that are normally used by build and automation jobs are installed on the AMI.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#openjdk-releases)OpenJDK releases
----------------------------------------------------------------------------------------------------------------

*   OpenJDK is the default version of Java available on the AMI.
*   The OpenJDK versions 9 and above are installed under `/opt/java`. For example, release 9 is available under `/opt/java/jdk-9`. For the actual path and related info check under `/opt/java` and point JAVA\_HOME to appropriate path as needed.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#cc)C/C++
---------------------------------------------------------------------------------------

`gcc` and `g++` are available on the AMI and the related standard header files.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#go)Go
------------------------------------------------------------------------------------

Latest version of Go is installed and available in the system path. Run `go version` to see the version info.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#python)Python
--------------------------------------------------------------------------------------------

The default version of Python available on the AMI is Python 3. Python 2.7 is also available on the AMI and it may have to be accessed as `python2` or `python2.7`.

Please note the Python paths are slightly different on each Linux distribution as we didn’t make any attempt to standardize to avoid customization.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#nodejs)Node.js
=============================================================================================

Latest version of Node.js executable is available in the system path.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#git-client)Git client
----------------------------------------------------------------------------------------------------

Git client is installed and available in the system PATH as `git`.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#ant)Ant
--------------------------------------------------------------------------------------

The system environment variable `ANT_HOME` points to the install location of Apache Ant.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#maven)Maven
------------------------------------------------------------------------------------------

Latest version of Maven is installed and it can be accessed as `mvn` from the system path.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#gradle-and-yarn)Gradle and Yarn
--------------------------------------------------------------------------------------------------------------

Latest stable releases of `Gradle` and `Yarn` are installed. The system environment variable `GRADLE_HOME` points to the install location.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#ansible)Ansible
----------------------------------------------------------------------------------------------

A recent version of Ansible is available on the AMI. To the see the installed version and the Python interpreter it uses, run `ansible --version`.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#aws-cli)AWS CLI
----------------------------------------------------------------------------------------------

The AWS CLI command `aws` can be accessed as `aws` or `/usr/local/bin/aws` depending on the Linux distribution.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#docker)Docker
--------------------------------------------------------------------------------------------

The latest, stable version of Docker is available on the AMI for Docker based builds.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#kubectl)kubectl
----------------------------------------------------------------------------------------------

A recent version of the `kubectl` command-line tool is installed for Jenkins jobs that need to access Kubernetes clusters.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#jenkins-user)jenkins user
--------------------------------------------------------------------------------------------------------

For SSH connectivity the headless user `jenkins` is setup with the home directory `/var/jenkins`. This user has passwordless sudo access on the system.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#how-it-works)How It Works
========================================================================================================

In a Jenkins based CI/CD pipeline, the Jenkins jobs can be configured to run on a slave host, and that is the best practice. On the Jenkins server side the build slaves are called nodes. A node can be configured to work with Jenkins server different ways and for the details look at the section on configuration.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#supported-platforms)Supported Platforms
======================================================================================================================

Click on the links below to take you to Amazon Marketplace for spinning up EC2 nodes.

*   [Jenkins Build Slave AMI for Amazon Linux 2018](https://aws.amazon.com/marketplace/pp/B088KRMB24)
*   [Jenkins Build Slave AMI for Amazon Linux 2](https://aws.amazon.com/marketplace/pp/B088KRK7P7)
*   [Jenkins Slave for AlmaLinux 8 by Kurian](https://aws.amazon.com/marketplace/pp/prodview-y3a2hnikkmhjk?sr=0-11&ref_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Slave for Rocky Linux 8 by Kurian](https://aws.amazon.com/marketplace/pp/prodview-z37uuopuuyngi?sr=0-12&ref_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Slave for Oracle Linux 7 by Kurian](https://aws.amazon.com/marketplace/pp/prodview-c4uenkurftpxy?sr=0-14&ref_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Slave for Oracle Linux 8 by Kurian](https://aws.amazon.com/marketplace/pp/prodview-qasezde5jvg6w?sr=0-13&ref_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Build Slave AMI for CentOS 7](https://aws.amazon.com/marketplace/pp/B088KS5D57)
*   [Jenkins Build Slave AMI for CentOS 8](https://aws.amazon.com/marketplace/pp/B088KRG633)
*   [Jenkins Build Slave AMI for Red Hat Enterprise Linux 7](https://aws.amazon.com/marketplace/pp/B088KQQXMF)
*   [Jenkins Build Slave AMI for Red Hat Enterprise Linux 8](https://aws.amazon.com/marketplace/pp/B088KQF8YZ)
*   [Jenkins Build Slave AMI for Fedora 31](https://aws.amazon.com/marketplace/pp/B088KTFRVW)
*   [Jenkins Build Slave AMI for Debian 10](https://aws.amazon.com/marketplace/pp/B088KS25WR)
*   [Jenkins Slave for Debian Linux 11](https://aws.amazon.com/marketplace/pp/prodview-sbfva7vtawga6?sr=0-9&ref_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Build Slave AMI for Ubuntu 16.04](https://aws.amazon.com/marketplace/pp/B088KR1CT2)
*   [Jenkins Build Slave AMI for Ubuntu 18.04](https://aws.amazon.com/marketplace/pp/B088KR8MHC)
*   \[Jenkins Slave by Kurian for Ubuntu 22.04\]9https://aws.amazon.com/marketplace/pp/prodview-ha5jk4c5easu6?sr=0-10&ref\_=beagle&applicationId=AWSMPContessa)
*   [Jenkins Build Slave AMI for openSUSE 15](https://aws.amazon.com/marketplace/pp/B088KRDZL6)
*   [Jenkins Build Slave AMI for SUSE Linux Enterprise Server 12](https://aws.amazon.com/marketplace/pp/B088KR5HD9)
*   [Jenkins Build Slave AMI for SUSE Linux Enterprise Server 15](https://aws.amazon.com/marketplace/pp/B088KR6FDX)

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#unsupported-configurations)Unsupported Configurations
====================================================================================================================================

Kurian releases latest, stable versions of open source software on popular Linux distributions. If you need a configuration that is not currently available in marketplace, send us your requirements to [contact@kurianinc.us](mailto:contact@kurianinc.us). Please include the following info in the email:

*   Name of Software to be on the AMI with version numbers.
*   Linux distribution and the version.
*   The EC2 instance type you plan to spin up from the AMI (optional).

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#configuration)Configuration
==========================================================================================================

A host can be configured as a Jenkins slave by running `agent.jar` on it and connecting the agent service to the Jenkins server. The connectivity could be initiated from Jenkins server or from the slave. There are multiple methods available and few popular methods are summarized here. The Kurian Jenkins Build Slave is compatible with any method you prefer.

After spinning up the EC2 node using this AMI use one of the following methods to configure it as a build node on the Jenkins server. The Jenkins servers built from Kurian AMIs are the best suited for building CI/CD infrastructure.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#launch-agent-on-slave-node-via-ssh)Launch agent on slave node via SSH
----------------------------------------------------------------------------------------------------------------------------------------------------

*   Generate a SSH key pair without passphrase. (It’s OK to have a passphrase actually but the setup would little easier without one. It’s up to your local security norms.)
    
*   An SSH credential to access slave node from Jenkins server must be setup using the private key generated in the last step. For this, navigate to Jenkins -> Credentials -> System and click `Add credentials` under `Global credentials` dropdown.
    
    *   Select `SSH Username with private key` as `Kind`
    *   `jenkins` as `Username`.
    *   In the `Private Key` field, use `Enter directly` option to add the content of private key.
*   In the new node creation window, choose these options:
    
    *   `/var/jenkins` as `Remote root directory`.
    *   `Launch agents via SSH` as `Launch method`.
    *   Use private IP or public IP as `Host` depending on how Jenkins server to slave node SSH access is configured.
    *   Select the credential created in the previous step (or existing) as `Credentials`.
    *   Choose `Manually trusted key Verification Strategy` as `Host Key Verification Strategy`.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#launch-agent-on-slave-by-connecting-it-to-the-server)Launch agent on slave by connecting it to the server
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This allows the agent running on a slave node to be connected to the Jenkins master whenever it is ready. This means that the agent need not be reachable from the Jenkins server; the agent just needs to be able to reach the server. If you have enabled security via the Configure Global Security page, you can customize the port on which the Jenkins master will listen for incoming agent connections.

*   In the `Configure Global Security` page, under `Agents` -> `TCP port for inbound agents` select Fixed or Random port for inbound access from the agent. Make sure network access is provisioned for this inbound access accordingly.
*   Create a new node with `Launch method` selected as `Launch agent by connecting it to the master`. When clicked on the newly created node, you will be presented with multiple options as in the picture below:

![](https://camo.githubusercontent.com/45ff2c7f7fe8edb32e51e20744144c9aa5cbcc3c8a8b5c38e332419a5a9263de/68747470733a2f2f6b757269616e2d6d61726b6574706c6163652d70726f64756374732e73332d75732d776573742d322e616d617a6f6e6177732e636f6d2f6a656e6b696e732d736c6176652d636f6e6669672d6a6e6c702d312e706e67)

*   SSH into the slave node and as user `jenkins`:
    
    $ cd /var/jenkins $ curl http://JENKINS-SERVER-IP:8080/jnlpJars/agent.jar -o agent.jar $ echo SECRET > SECRET-FILE $ java -jar /var/jenkins/agent.jar -jnlpUrl http://JENKINS-SERVER-IP:8080/computer/NODE-NAME/slave-agent.jnlp -secret @/var/jenkins/SECRET-FILE -workDir “/var/jenkins”
    

Verify that the agent is able to connect to Jenkins server successfully. To run the agent process on the slave node `agent.jar` can be run as a background process as follows:

    $ nohup java -jar /var/jenkins/agent.jar -jnlpUrl http://JENKINS-SERVER-IP:8080/computer/NODE-NAME/slave-agent.jnlp -secret @/var/jenkins/SECRET-FILE -workDir "/var/jenkins" &
    

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#automatically-provisioned-build-nodes-using-amazon-ec2-plugin)Automatically provisioned build nodes using Amazon EC2 plugin
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For detailed steps, refer this official documentation: [https://plugins.jenkins.io/ec2/](https://plugins.jenkins.io/ec2/). Make sure that it’s installed on the Jenkins server. This plugin is preinstalled in Kurian’s Jenkins Server AMIs.

These are the important points to note:

*   Add a new provisioner by selecting Jenkins -> Configure Clouds -> Amazon EC2
*   Have a Jenkins Credential item to store an AWS keys set that has privileges to spin up EC2 nodes and configure security groups. Select that as `Amazon EC2 Credentials`.
*   `EC2 Key Pair's Private Key` must correspond to the SSH key pair that will be used for communicating between Jenkins server and build slave node.
*   `AMI ID` must be the id of Kurian Jenkins Build Slave AMI.
*   `Security group names` should have AWS security group(s) that opens SSH accessing from Jenkins server to slave node on port 22.
*   `Remote user` must be `jenkins` and `Remote FS root` must be `/var/jenkins`. Both these are preconfigured already on the AMI.
*   Use `User Data` to inject the public key corresponds to `EC2 Key Pair's Private Key`. Use following command-line:
    
    #!/bin/bash echo “PUBLIC-KEY” » ~jenkins/.ssh/authorized\_keys chown jenkins:jenkins ~jenkins/.ssh/authorized\_keys chmod 600 ~jenkins/.ssh/authorized\_keys
    

Notes:

*   Replace `PUBLIC-KEY` with actual content of the public key.
    
*   Security groups for slave hosts must be configured to open the network inbound connection from Jenkins server.
    
*   Remote SSH access for `jenkins` user on the slave nodes must be ensured, such as configuring SELINUX settings on Red Hat Linux distributions.
    
*   `Connection Strategy` would depend on how the network access between Jenkins server host and the slave node is provisioned. The best practice is using `Private IP` as that is more secure.
    

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#upgrade)Upgrade
==============================================================================================

As a best practice, in-place update of a Jenkins slave node is discouraged. The `agent.jar` file is downloaded from or pushed by (depending on the configuration method used) Jenkins server, and make sure the `agent.jar` runs on the slave node is compatible.

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#maintenance-and-troubleshooting)Maintenance and Troubleshooting
==============================================================================================================================================

Kurian can help with configuring Jenkins for your specific needs. Contact us with details to [contact@kurianinc.us](mailto:contact@kurianinc.us)

[](https://github.com/kurianinc/ami-pub/wiki/Jenkins-Build-Slave-AMI-by-Kurian#remote-access-to-ec2-node)Remote Access to EC2 Node
==================================================================================================================================

The communication between Jenkins master and slave host is over ssl and port 22 must be opened on the slave host for the Jenkins master.

The headless user is needed on the slave host for the communication between Jenkins master and slave. On the AMI `jenkins` has been setup for that purpose.

In addition, following are the standard AWS defined users available when a node is provisioned:

*   Amazon Linux: ec2-user
*   Red Hat Linux: ec2-user
*   SuSE Linux: ec2-user
*   Fedora: fedora
*   CentOS: centos
*   Debian Linux: admin
*   Ubuntu: ubuntu