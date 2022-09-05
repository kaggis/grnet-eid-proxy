---
id: user_attributes
title: User Attributes
sidebar_position: 4
---

## User attributes

This section defines the attributes that can be made available to services
connected to the GRNET eID Proxy.

### 1. Unique ID

<!-- markdownlint-disable line-length no-inline-html -->

|          attribute name | Unique ID                                                                                       |
| ----------------------: | :---------------------------------------------------------------------------------------------- |
|         **description** | A unique identifier for the user                       |
|   **SAML Attribute(s)** | `urn:oid:1.3.6.1.4.1.5923.1.1.1.13` (eduPersonUniqueId)                                         |
|          **OIDC scope** | `openid`                                                                                        |
|       **OIDC claim(s)** | `sub`                                                                                           |
| **OIDC claim location** | <ul><li>ID token</li><li>Userinfo endpoint</li><li>Introspection endpoint</li></ul>             |
|              **origin** | Assigned by the GRNET eID Proxy                                            |
|             **changes** | No                                                                                              |
|        **multiplicity** | No                                                                                              |
|        **availability** | Always                                                                                          |
|             **example** | _4a58cb0338fb68060ba75e20e02a4844148f9c63a5cd9a7418dc5a9a6ab641cbaef73b4c65519286359f766c45bdbad36cc9189e75a03bd12f13526c34cab93e@eid-proxy.aai.grnet.gr_   |
|               **notes** | Use this attribute within your application as the unique-identifier key for the user            |
|              **status** | Stable                                                                                          |


### 2. Person Identifier

|          attribute name | Person Identifier                                                                   |
| ----------------------: | :---------------------------------------------------------------------------------- |
|         **description** | The user's person identifier                                                        |
|   **SAML Attribute(s)** | - |
|          **OIDC scope** | `profile`                                                                           |
|       **OIDC claim(s)** | `person_identifier`                                                                 |
| **OIDC claim location** | Userinfo endpoint                                                                   |
|              **origin** | Provided by the eIDAS Node from which the user is authenticating                                                |
|             **changes** | Yes                                                                                 |
|        **multiplicity** | Single-valued                                                                       |
|        **availability** | Always (for natural person authentication through eIDAS)                                                                              |
|             **example** | _CA/CA/UniqueId1_                                                                   |
|               **notes** | Any service that consumes assertions of identity must assume that the Unique Identifier presented for a particular person may change over time e.g. where the user's digital identity is replaced or repaired. This should be handled by a consuming service using the same matching process as used when an identity is first encountered utilising the Minimum Data Set to identify the Principal within the service.                                                                                   |
|              **status** | Stable                                                                              |

### 3. Given Name

|          attribute name | Given Name                           |
| ----------------------: | :----------------------------------- |
|         **description** | The user's first name                |
|   **SAML Attribute(s)** | `urn:oid:2.5.4.42` (givenName)       |
|          **OIDC scope** | `profile`                            |
|       **OIDC claim(s)** | `given_name`                         |
| **OIDC claim location** | Userinfo endpoint                    |
|              **origin** | Provided by user's Identity Provider |
|             **changes** | Yes                                  |
|        **multiplicity** | Single-valued                        |
|        **availability** | Always (for natural person authentication through eIDAS)                               |
|             **example** | _John_                               |
|               **notes** | -                                    |
|              **status** | Stable                               |

### 4. Family Name

|          attribute name | Family Name                          |
| ----------------------: | :----------------------------------- |
|         **description** | The user's last name                 |
|   **SAML Attribute(s)** | `urn:oid:2.5.4.4` (sn)               |
|          **OIDC scope** | `profile`                            |
|       **OIDC claim(s)** | `family_name`                        |
| **OIDC claim location** | Userinfo endpoint                    |
|              **origin** | Provided by user's Identity Provider |
|             **changes** | Yes                                  |
|        **multiplicity** | Single-valued                        |
|        **availability** | Always (for natural person authentication through eIDAS)                               |
|             **example** | _Doe_                                |
|               **notes** | -                                    |
|              **status** | Stable                               |

### 5. Birth Date

|          attribute name | Birth Date                                           |
| ----------------------: | :--------------------------------------------------- |
|         **description** | The user's birth date                                |
|   **SAML Attribute(s)** | `urn:oid:1.3.6.1.4.1.25178.1.2.3` (schacDateOfBirth) |
|          **OIDC scope** | `profile`                                            |
|       **OIDC claim(s)** | `birth_date`                                         |
| **OIDC claim location** | Userinfo endpoint                                    |
|              **origin** | Provided by user's Identity Provider                 |
|             **changes** | Yes                                                  |
|        **multiplicity** | Single-valued                                        |
|        **availability** | Always (for natural person authentication through eIDAS)                                               |
|             **example** | _1965-01-01_                                         |
|               **notes** | -                                                    |
|              **status** | Stable                                               |

### 6. Legal Name

|          attribute name | Legal Name                                                            |
| ----------------------: | :-------------------------------------------------------------------- |
|         **description** | The user's legal name                                                 |
|   **SAML Attribute(s)** | - |
|          **OIDC scope** | `legal_profile`                                                       |
|       **OIDC claim(s)** | `legal_name`                                                          |
| **OIDC claim location** | Userinfo endpoint                                                     |
|              **origin** | Provided by user's Identity Provider                                  |
|             **changes** | Yes                                                                   |
|        **multiplicity** | Single-valued                                                         |
|        **availability** | Always (for legal person authentication through eIDAS)                                                                |
|             **example** | _Legal Name 1_                                                        |
|               **notes** | -                                                                     |
|              **status** | Stable                                                                |

### 7. Legal Person Identifier

|          attribute name | Legal Name                                                                                    |
| ----------------------: | :-------------------------------------------------------------------------------------------- |
|         **description** | The user's legal person identifier                                                            |
|   **SAML Attribute(s)** | - |
|          **OIDC scope** | `legal_profile`                                                                               |
|       **OIDC claim(s)** | `legal_person_identifier`                                                                     |
| **OIDC claim location** | Userinfo endpoint                                                                             |
|              **origin** | Provided by user's Identity Provider                                                          |
|             **changes** | Yes                                                                                           |
|        **multiplicity** | Single-valued                                                                                 |
|        **availability** | Always (for legal person authentication through eIDAS)                                                                                        |
|             **example** | _CA/CA/UniqueId1_                                                                             |
|               **notes** | -                                                                                             |
|              **status** | Stable                                                                                        |

### 8. Legal Address

|          attribute name | Legal Name                                                                                      |
| ----------------------: | :---------------------------------------------------------------------------------------------- |
|         **description** | The current address for the natural person as registered with the eIDAS Member State authority. |
|   **SAML Attribute(s)** | - |
|          **OIDC scope** | `legal_address`                                                                                 |
|       **OIDC claim(s)** | `legal_address`                                                                                 |
| **OIDC claim location** | Userinfo endpoint                                                                               |
|              **origin** | Provided by user's Identity Provider                                                            |
|             **changes** | Yes                                                                                             |
|        **multiplicity** | Single-valued                                                                                   |
|        **availability** | Only when released by the eIDAS Node from which the legal person is authenticating              |
|             **example** | _PGVpZGFzLWxlZ2FsOkZ1bGxDdmFkZHJlc3M+TGVnYWwgYWRkcmVzczwvZWlkYXMtbGVnYWw6RnVsbEN2YWRkcmVzcz4K_  |
|               **notes** | Address data is structured as an XML sequence of xsd:string elements. This data is base64 encoded.  |
|              **status** | Stable                                                                                          |

### 9. Vat Registration

|          attribute name | Vat Registration                                                                               |
| ----------------------: | :--------------------------------------------------------------------------------------------- |
|         **description** | The user's vat registration number                                                             |
|   **SAML Attribute(s)** | -  |
|          **OIDC scope** | `vat_registration`                                                                             |
|       **OIDC claim(s)** | `vat_registration`                                                                             |
| **OIDC claim location** | Userinfo endpoint                                                                              |
|              **origin** | Provided by user's Identity Provider                                                           |
|             **changes** | Yes                                                                                            |
|        **multiplicity** | Single-valued                                                                                  |
|        **availability** | Only when released by the eIDAS Node from which the legal person is authenticating              |
|             **example** | _12345_                                                                                        |
|               **notes** | -                                                                                              |
|              **status** | Stable                                                                                         |
