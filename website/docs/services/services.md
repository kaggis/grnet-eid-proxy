---
id: services
title: Services 
sidebar_position: 1
---

This section provides information about connecting services to the GRNET eID Proxy in order to enable authentication through the eIDAS-Node infrastructure.


## General Information

As already stated, the GRNET eID Proxy supports both OpenID Connect and SAML 2.0. Regardless of the protocol, SPs generally need to provide the following information in order to connect their service to the Proxy:

1. Name of the service
2. Short description
3. Privacy statement URL including list of required user attributes
4. Technical contact address(es)
5. Security contact address(es)
6. Logo URL (if available)
7. Protocol-specific endpoints

The integration follows a two-step process:

#### Step 1.
The SP is registered with the **preproduction** instance of the GRNET eID Proxy to allow testing eIDAS authentication using test natural/legal person account credentials. Note that while the preproduction instance has identical functionality to the production instance, no information is shared between the two systems.
* It should be noted that the SP can also be registered with the test instance of the GRNET eID Proxy when testing new features that are not available in (pre)production yet. As with the preproduction instance, the test instance allows for testing eIDAS authentication using test natural/legal person account credentials.

#### Step 2.
The SP is registered with the **production** instance of the GRNET eID Proxy. The production instance of the proxy is connected with the production instance of the Greek eIDAS Node which, in turn, is connected to a number of production eIDAS Nodes of other Member States. This allows European natural persons/legal entities to access the SP. This requires that the SP has been thoroughly tested during Step 1.

Technical information about the SP integration in the case of OpenID Connect and SAML can be found in the protocol-specific sections that follow.

