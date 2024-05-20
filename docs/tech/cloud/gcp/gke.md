---
keywords: [gcp, google, kubernetes, gke, container orchestration]
title: GKE (Google Kubernetes Engine) | Cloud | GCP | Tech-Notes
sidebar_label: GKE (Google Kubernetes Engine)
---

# GKE (Google Kubernetes Engine)

<br/>

<div style={{textAlign: 'center'}}>

<img width="200" height="170" alt="logo" src="/img/cloud/gke.png"/>

_Google Kubernetes Engine (GKE) is a managed, production-ready environment for running containerized applications._

</div>

:::note More Information

- https://cloud.google.com/kubernetes-engine

:::

<br/>

## Overview

- GKE is a managed Kubernetes service that simplifies the deployment, management, and scaling of containerized applications.
- Provides a powerful platform for running modern applications, with features like automatic upgrades, monitoring, and logging.
- Supports hybrid and multi-cloud environments with Anthos.

:::note More Information

- https://cloud.google.com/kubernetes-engine/docs/concepts

:::

<br/>

## Clusters

- A GKE cluster is a set of nodes (VMs) that run Kubernetes and the containerized applications.
- Types of clusters:
  - **Standard Cluster**: Provides maximum flexibility and control.
  - **Autopilot Cluster**: Provides a fully managed Kubernetes experience with optimized cluster configuration and management.

:::note More Information

- https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture
- https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview

:::

<br/>

## Node Pools

- Node pools are groups of nodes within a cluster that share the same configuration.
- Allows for different machine types and scaling configurations within the same cluster.
- Can manage and scale node pools independently.

:::note More Information

- https://cloud.google.com/kubernetes-engine/docs/concepts/node-pools

:::

<br/>

## Autoscaling

- GKE supports both cluster autoscaling and horizontal pod autoscaling.
  - **Cluster Autoscaler**: Automatically adjusts the size of the node pool based on the resource requirements.
  - **Horizontal Pod Autoscaler**: Adjusts the number of pod replicas based on CPU/memory usage or custom metrics.

:::note More Information

- https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler
- https://cloud.google.com/kubernetes-engine/docs/concepts/horizontalpodautoscaler

:::

<br/>

## Networking

- GKE integrates with Google Cloud's VPC for networking, enabling secure communication between pods and services.
- Supports native VPC networking, Network Policy for fine-grained control, and Ingress for HTTP(S) load balancing.

:::note More Information

- https://cloud.google.com/kubernetes-engine/docs/concepts/network-overview
- https://cloud.google.com/kubernetes-engine/docs/concepts/ingress

:::

<br/>

## Security

- GKE provides robust security features including:
  - Node security with Shielded GKE Nodes.
  - Workload identity for secure access to Google Cloud services.
  - Binary Authorization for enforcing deploy-time security policies.
  - Integration with Google Cloud’s IAM for access control.

:::note More Information

- https://cloud.google.com/kubernetes-engine/docs/concepts/security-overview

:::

<br/>

## Logging and Monitoring

- GKE integrates with Google Cloud’s operations suite, providing built-in logging and monitoring.
- Stackdriver Kubernetes Engine Monitoring offers detailed insights into the health and performance of your clusters and workloads.

:::note More Information

- https://cloud.google.com/kubernetes-engine/docs/concepts/logging-and-monitoring

:::

<br/>

## CI/CD Integration

- GKE integrates seamlessly with Google Cloud's CI/CD tools such as Cloud Build, enabling continuous integration and continuous delivery.
- Supports Kubernetes-native CI/CD pipelines with tools like Tekton.

:::note More Information

- https://cloud.google.com/solutions/continuous-delivery-to-kubernetes-using-cloud-build

:::

<br/>

## Best Practices

- Use multi-zonal or regional clusters for high availability.
- Implement proper resource requests and limits for your pods.
- Regularly update your clusters and node pools to the latest Kubernetes version.
- Leverage network policies and IAM for fine-grained security control.
- Monitor and optimize your workloads with GKE’s logging and monitoring tools.

:::note More Information

- https://cloud.google.com/kubernetes-engine/docs/best-practices

:::
