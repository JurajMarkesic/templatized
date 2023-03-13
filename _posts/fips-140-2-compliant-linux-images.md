---
title: "FIPS 140 2 Compliant Linux Images"
date: 2023-01-01T10:00:00+10:00
image: "images/products/fips.jpg"
layout: product
description: FIPS 140 2 Compliant Linux Images description
permalink: "/aws-machine-images/fips-140-2-compliant-linux-images/"
bodyClass: page-product
weight: 230
---

Introduction
============

The FIPS 140-2 publication prescribes a set of requirements that need to be satisfied by cryptographic modules both software and hardware components. FIPS 140-2 establishes the Cryptographic Module Validation Program (CMVP), and the Automated Cryptographic Validation Testing (ACVT) program, which are accreditation programs used to certify that cryptographic modules do in fact correctly implement encryption as prescribed.

Compliance to the FIPS 140 standard is required for several US-government regulated sectors and an increasing number of international standards refer to it for encryption related requirements.

Kurian offers FIPS 140-2 compliant AMIs for the following platforms:

*   [FIPS 140-2 compliant AMI for CentOS 7](https://aws.amazon.com/marketplace/pp/B08ZJFYHC6)
*   [FIPS 140-2 compliant AMI for CentOS 8](https://aws.amazon.com/marketplace/pp/B08ZGZC7G6)
*   [FIPS 140-2 compliant AMI for Red Hat Enterprise Linux 7](https://aws.amazon.com/marketplace/pp/B091CNCHHS)
*   [FIPS 140-2 compliant AMI for Red Hat Enterprise Linux 8](https://aws.amazon.com/marketplace/pp/B08ZJG9PKC)
*   [FIPS 140-2 compliant AMI for Amazon Linux 2](https://aws.amazon.com/marketplace/pp/B08ZJ4YQ3N)

[](https://github.com/kurianinc/ami-pub/wiki/FIPS-140-2-Compliant-Linux-Images#configuration)Configuration
==========================================================================================================

There is no specific configuration needed. Check if FIPS mode is enabled on the EC2 node as follows:

    $ sudo sysctl crypto.fips_enabled
    crypto.fips_enabled = 1
