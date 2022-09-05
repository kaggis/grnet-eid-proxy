---
id: about
title: GRNET eID Proxy
sidebar_position: 1
slug: /
---

The GRNET eID Proxy service is a deployment of the Service Provider plugin presented in Chapter 3. As described in the previous Section, the proxy service will be used to enable authenticated access to the AcademicID  service through the eIDAS network. There are three instances of the GRNET eID Proxy:

1. **Production** – Connected with the production instance of the Greek eIDAS Node which, in turn, is connected to a number of production eIDAS Nodes of other Member States. This allows eIDAS cross-border authentication using natural/legal person account credentials.

2. **Preproduction** – Connected with the preproduction instance of the Greek eIDAS Node which, in turn, is connected to a number of preproduction eIDAS Nodes of other Member States. This allows for testing eIDAS cross-border authentication using test natural/legal person account credentials.

3. **Test** – Connected with an eIDAS Node deployed locally at GRNET to allow testing eIDAS authentication using test natural/legal person account credentials.


The remainder of this chapter describes a high-level view of the GRNET eID Proxy service architecture, the eIDAS authentication flow and the integration process for services using OpenID Connect or SAML.



