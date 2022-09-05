---
id: openid
title: OpenID Connect Clients
sidebar_position: 2
---


Services can be integrated with the GRNET eID Proxy using OpenID Connect (OIDC). To allow this, the Proxy provides an OpenID Connect (OAuth2) API. Interconnection with the eID Proxy OIDC Provider allows users to sign in using any of the supported backend authentication mechanisms, including the eIDAS-Node Infrastructure. Once the user has signed in, the Proxy can return OIDC Claims containing information about the authenticated user.


## Endpoints
The most important OIDC/OAuth2 endpoints of the GRNET eID Proxy are listed in Table 1.

Table 1. GRNET eID Proxy OpenID Connect endpoints :

|        Endpoint        |                              Test environment                              |
| :--------------------: | :------------------------------------------------------------------------: |
| Provider configuration | `https://eid-proxy-demo.aai-dev.grnet.gr/.well-known/openid-configuration` |
| Authorisation          | `https://eid-proxy-demo.aai-dev.grnet.gr/Saml2/OIDC/authorization`         |
| Token                  | `https://eid-proxy-demo.aai-dev.grnet.gr/OIDC/token`                       |
| UserInfo               | `https://eid-proxy-demo.aai-dev.grnet.gr/OIDC/userinfo`                    |


|        Endpoint        |                        Preproduction environment                      |
| :--------------------: | :-------------------------------------------------------------------: |
| Provider configuration | `https://eid-proxy.aai-dev.grnet.gr/.well-known/openid-configuration` |
| Authorisation          | `https://eid-proxy.aai-dev.grnet.gr/Saml2/OIDC/authorization`         |
| Token                  | `https://eid-proxy.aai-dev.grnet.gr/OIDC/token`                       |
| UserInfo               | `https://eid-proxy.aai-dev.grnet.gr/OIDC/userinfo`                    |


|        Endpoint        |                       Production environment                      |
| :--------------------: | :---------------------------------------------------------------: |
| Provider configuration | `https://eid-proxy.aai.grnet.gr/.well-known/openid-configuration` |
| Authorisation          | `https://eid-proxy.aai.grnet.gr/Saml2/OIDC/authorization`         |
| Token                  | `https://eid-proxy.aai.grnet.gr/OIDC/token`                       |
| UserInfo               | `https://eid-proxy.aai.grnet.gr/OIDC/userinfo`                    |





## Client registration
Before a service can use the eID Proxy OIDC Provider for user login, it must register a client and obtain OAuth 2.0 client credentials. OAuth2 credentials typically include a client ID and client secret.
It is also necessary to specify one or more Redirection URI(s) to indicate where the eID Proxy OIDC Provider will send responses to the authentication requests. Note that the Redirection URI(s) MUST use the https scheme.




## User claims
The GRNET eID Proxy UserInfo Endpoint is an OAuth 2.0 Protected Resource that returns specific information about the authenticated End-User as Claim values.
To obtain the requested Claims about the End-User, the Client makes a request to the UserInfo Endpoint using an Access Token obtained through OpenID Connect Authentication.
The scopes associated with the Access Token used to access the UserInfo Endpoint will determine what Claims will be released.
These Claims are represented by a JSON object that contains a collection of name and value pairs for the Claims.
Table 2 lists the Claims that can be returned from the GRNET eID Proxy OpenID Connect UserInfo endpoint.

Table 2. GRNET eID Proxy OpenID Connect Claims



|                     |                  |                                       Friendly name                                    |                       |                         |
| :-----------------: | :--------------: | :------------------------------------------------------------------------------------: | :-------------------: | :---------------------: |
|                     |                  | Current First Name(s)                                                                  | FirstName             | given_name              |
|                     |                  | Current Family Name(s)                                                                 | FamilyName            | family_name             |
| **Natural Person**  |  profile         | Date of Birth includes a date using the following format: `YYYY + "-" + MM + "-" + DD` | DateOfBirth           | birthdate               |
|                     |                  | A unique person identifier                                                             | PersonIdentifier      | person_identifier       |
|                     | legal_profile    | The legal name for the legal person authenticating                                     | LegalName             | legal_name              |
|                     |                  | A unique identifier for the legal person identity                                      | LegalPersonIdentifier | legal_person_identifier |
| **Legal Person**    | legal_address    | The address the legal person has registered with the MS authority or operating address if not registered. For a company this should be the registered address within the MS issuing the eID. | LegalAddress          | legal_address           |
|                     | vat_registration | The VAT registration number for the organisation                                       | VATRegistration       | vat_registration |

:::note
Note that when needed, the GRNET eID Proxy will request High LoA for service. Then the service can use the requester_acr_mapping mechanism of the Service Provider plugin described in Section  **????**
:::




