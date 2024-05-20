---
keywords: [gcp, google, gcs, storage]
title: GCS (Google Cloud Storage) | Cloud | GCP | Tech-Notes
sidebar_label: GCS (Google Cloud Storage)
---

# GCS (Google Cloud Storage)

<br/>

<div style={{textAlign: 'center'}}>

<img width="200" height="200" alt="logo" src="/img/cloud/gcs.png"/>

_Google Cloud Storage (GCS) is an object storage service offering scalability, data availability, security, and performance._

</div>

:::note More Information

- https://cloud.google.com/storage

:::

<br/>

## Objects

- An object consists of:
  - _Name_: name of the object
  - _Content_: object content as a sequence of bytes
  - _Metada_: name-value pairs to store information regarding the object
  - _Subresources_: store object additional information (e.g. ACL, CORS)
- Objects can range in size from 0 B to 5 TB

:::note More Information

- https://cloud.google.com/storage/docs/key-terms#objects

:::

<br/>

## Buckets

- Container for objects stored in Google Cloud Storage
- Bucket names must be globally unique across all Google Cloud projects

:::note More Information

- https://cloud.google.com/storage/docs/creating-buckets

:::

<br/>

## Consistency

- Strong read-after-write consistency for PUT and DELETE requests of object
- S3 does not support object locking for concurrent writers (if two PUT requests are simultaneously made to the same key, the request with the latest timestamp wins)

:::note More Information

- https://cloud.google.com/storage/docs/consistency

:::

<br/>

## Storage Classes

### Standard

- Default storage class
- Designed for frequently accessed data
- Suitable for performance-sensitive use cases

### Nearline

- Designed for data accessed less frequently (once a month)
- Low cost with a minimum storage duration of 30 days

### Coldline

- Designed for data accessed infrequently (once a year)
- Lowest cost with a minimum storage duration of 90 days

### Archive

- Designed for long-term data storage with rare access
- Lowest cost with a minimum storage duration of 365 days

:::note More Information

- https://cloud.google.com/storage/docs/storage-classes

:::

<br/>

## Versioning

- GCS does not support object versioning directly
- Implement versioning using unique object names or by leveraging Object Lifecycle Management

:::note More Information

- https://cloud.google.com/storage/docs/object-versioning

:::

<br/>

## Object Lifecycle Management

- Manage objects based on predefined rules
  - Transition actions: define when objects transition to another storage class
  - Expiration actions: define when objects expire

:::note More Information

- https://cloud.google.com/storage/docs/lifecycle

:::

<br/>

## Object Lifecycle Management

- Manage objects based on predefined rules
  - Transition actions: define when objects transition to another storage class
  - Expiration actions: define when objects expire

:::note More Information

- https://cloud.google.com/storage/docs/lifecycle

:::

<br/>

## Object Lifecycle Management

- Manage objects based on predefined rules
  - Transition actions: define when objects transition to another storage class
  - Expiration actions: define when objects expire

:::note More Information

- https://cloud.google.com/storage/docs/lifecycle

:::

<br/>

## Access Control

- Bucket access can be controlled via:
  - Bucket Policies
  - Access Control Lists (ACL)
- By default, all newly created buckets are private
- GCS buckets can create access logs which logs all requests to the bucket
- Access logs can be sent to another bucket
- Signed URLs allow users to temporarily download/upload objects to buckets without Google Cloud credentials or permissions

:::note More Information

- https://cloud.google.com/storage/docs/access-control
- https://cloud.google.com/storage/docs/access-control/signed-urls

:::

### Encryption

- Transit
  - SSL/TLS
- Rest
  - Server Side Encryption (SSE)
    - Google-managed encryption keys (SSE-S3)
    - Customer-supplied encryption keys (SSE-C)
    - Customer-managed encryption keys (SSE-KMS)
  - Client Side Encryption

:::note More Information

- https://cloud.google.com/security/encryption-in-transit
- https://cloud.google.com/security/encryption-at-rest

:::
