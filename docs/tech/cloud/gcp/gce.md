---
keywords: [gcp, google, gce, compute]
title: GCE (Google Compute Engine) | Cloud | GCP | Tech-Notes
sidebar_label: GCE (Google Compute Engine)
---

# GCE (Google Compute Engine)

<br/>

<div style={{textAlign: 'center'}}>

<img width="200" height="180" alt="logo" src="/img/cloud/gce.png"/>

_GCE provides scalable, high-performance virtual machines._

</div>

:::note More Information

- https://cloud.google.com/compute

:::

<br/>

## Pricing

### On-Demand

- Pay-as-you-go pricing
- Billed per second with a one-minute minimum usage cost
- No upfront payment or long-term commitment

Recommended for:

- Short-lived or unpredictable workloads
- Experimentation and development environments

:::note More Information

- https://cloud.google.com/compute/pricing

:::

### Preemptible VMs

- Low-cost, short-term instances
- Limited to 24 hours of usage
- Up to 80% discount compared to regular instances
- May be terminated with short notice if resources are needed by Google

Recommended for:

- Batch processing
- Testing and development environments

:::note More Information

- https://cloud.google.com/preemptible-vms

:::

### Committed Use Discounts

- Discounts for committing to a specific instance usage over a one or three-year period
- Savings of up to 57% compared to on-demand pricing

Recommended for:

- Steady-state workloads with predictable usage

:::note More Information

- https://cloud.google.com/compute/pricing#committed-use-discounts

:::

<br/>

## Machine Types

- Different machine types to match various computing needs
- Options for CPU, memory, and storage configurations
- Grouped into families based on capabilities

:::note More Information

- https://cloud.google.com/compute/docs/machine-types

:::

<br/>

## Instance Lifecycle

- Instances can be stopped, started, or terminated
- Persistent disks retain data even if instances are stopped or deleted
- Data stored on local disks is lost when the instance is stopped or deleted

:::note More Information

- https://cloud.google.com/compute/docs/instances/instance-life-cycle

:::

<br/>

## Instance Metadata and Startup Scripts

### Metadata

- Information about the instance, such as hostname and project ID
- Accessible through the metadata server

### Startup Scripts

- Custom scripts executed when instances start
- Useful for setting up software configurations or installing dependencies

:::note More Information

- https://cloud.google.com/compute/docs/storing-retrieving-metadata
- https://cloud.google.com/compute/docs/startupscript

:::

<br/>

## Placement Policies

Placement policies control how VM instances are distributed across physical hardware to maximize performance and availability.

- **Zonal Placement**: Instances are located in a specific zone, providing high availability within that zone.
- **Regional Placement**: Instances are distributed across multiple zones within a region for increased redundancy.

:::note More Information

- https://cloud.google.com/compute/docs/instances/managing-instance-access

:::
