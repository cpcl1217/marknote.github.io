---
sidebar_label: 'Initial construction of the project'
sidebar_position: 3
---


The installation process has been fully documented in the [previous section](http://localhost:3000/tech-notes/cloud/terraform/GCP%20Project%20to%20Terraform). This section will focus on the process of building the initial resources required for the project using HCL templates.

### **Implementation Process**
Below are the templates for implementing the APIs required for project initiation, as well as for constructing resources such as VPCs, VMs, and VPNs. Note that certain variables such as ```your_project_id```, ```your_vpc_name```, etc., will need to be replaced with your own values. Please pay close attention to these substitutions!


#### **enable_api.tf**
```
resource "google_project_service" "compute_engine" {
  project = "your_project_id"
  service = "compute.googleapis.com"
}
```


#### **compute_network.tf**
```
resource "google_compute_network" "your_vpc_name" {
  auto_create_subnetworks         = "false"
  delete_default_routes_on_create = "false"
  mtu                             = "1460"
  name                            = "your_vpc_name"
  project                         = "your_project_id"
  routing_mode                    = "REGIONAL"
}

resource "google_compute_subnetwork" "your_subnet_name" {
  ip_cidr_range              = "10.0.0.0/24"
  name                       = "your_subnet_name"
  network                    =  google_compute_network.your_vpc_name.self_link
  private_ip_google_access   = "false"
  private_ipv6_google_access = "DISABLE_GOOGLE_ACCESS"
  project                    = "your_project_id"
  purpose                    = "PRIVATE"
  region                     = "asia-east1"
  stack_type                 = "IPV4_ONLY"
}
```


#### **compute_instance.tf**
```
resource "google_compute_instance" "your_instance_name" {
  boot_disk {
    auto_delete = true
    device_name = "your_instance_name"

    initialize_params {
      image = "projects/debian-cloud/global/images/debian-12-bookworm-v20240312"
      size  = 10
      type  = "pd-balanced"
    }

    mode = "READ_WRITE"
  }

  can_ip_forward      = false
  deletion_protection = false
  enable_display      = false

  machine_type = "e2-medium"
  name = "your_instance_name"

  metadata = {
    block-project-ssh-keys = "true"
  }

  name = "your_instance_name"

  network_interface {
    access_config {
      network_tier = "PREMIUM"
    }

    queue_count = 0
    stack_type  = "IPV4_ONLY"
    subnetwork  = "projects/your_project_name/regions/asia-east1/subnetworks/your_subnet_name"
  }

  scheduling {
    automatic_restart   = true
    on_host_maintenance = "MIGRATE"
    preemptible         = false
    provisioning_model  = "STANDARD"
  }

  service_account {
    email  = "827588065038-compute@developer.gserviceaccount.com"
    scopes = ["https://www.googleapis.com/auth/devstorage.read_only", "https://www.googleapis.com/auth/logging.write", "https://www.googleapis.com/auth/monitoring.write", "https://www.googleapis.com/auth/service.management.readonly", "https://www.googleapis.com/auth/servicecontrol", "https://www.googleapis.com/auth/trace.append"]
  }

  shielded_instance_config {
    enable_integrity_monitoring = true
    enable_secure_boot          = false
    enable_vtpm                 = true
  }

  zone = "asia-east1-b"
}

```

#### **compute_external_vpn_gateway.tf**
```
resource "google_compute_external_vpn_gateway" "your_peer_gateway_name" {
  interface {
    id         = "0"
    ip_address = "your_peer_ip"
  }

  interface {
    id         = "1"
    ip_address = "your_peer_ip"
  }

  name            = "your_peer_gateway_name"
  project         = "your_project_name"
  redundancy_type = "TWO_IPS_REDUNDANCY"
}
```

#### **compute_router.tf**
```
resource "google_compute_router" "your_router_name" {
  bgp {
    advertise_mode = "DEFAULT"
    asn            = "65002"
  }

  encrypted_interconnect_router = "false"
  name                          = "your_router_name"
  network                       = "https://www.googleapis.com/compute/v1/projects/your_project_id/global/networks/your_vpc_name"
  project                       = "your_project_id"
  region                        = "asia-east1"
}

```

#### **compute_vpn_tunnel.tf**
```
resource "google_compute_vpn_tunnel" "your_tunnel_name0" {
  ike_version                     = "2"
  local_traffic_selector          = ["0.0.0.0/0"]
  name                            = "your_tunnel_name0"
  peer_external_gateway           = "https://www.googleapis.com/compute/v1/projects/your_project_name/global/externalVpnGateways/your_peer_gateway_name"
  peer_external_gateway_interface = "0"
  peer_ip                         = "your_peer_ip"
  project                         = "your_project_name"
  region                          = "asia-east1"
  remote_traffic_selector         = ["0.0.0.0/0"]
  router                          = "https://www.googleapis.com/compute/v1/projects/your_project_name/regions/asia-east1/routers/your_router_name"
  vpn_gateway                     = "https://www.googleapis.com/compute/v1/projects/your_project_name/regions/asia-east1/vpnGateways/your_vpn_gateway_name"
  vpn_gateway_interface           = "0"
}

resource "google_compute_vpn_tunnel" "your_tunnel_name1" {
  ike_version                     = "2"
  local_traffic_selector          = ["0.0.0.0/0"]
  name                            = "your_tunnel_name1"
  peer_external_gateway           = "https://www.googleapis.com/compute/v1/projects/your_project_name/global/externalVpnGateways/your_peer_gateway_name"
  peer_external_gateway_interface = "1"
  peer_ip                         = "your_peer_ip"
  project                         = "your_project_name"
  region                          = "asia-east1"
  remote_traffic_selector         = ["0.0.0.0/0"]
  router                          = "https://www.googleapis.com/compute/v1/projects/your_project_name/regions/asia-east1/routers/your_router_name"
  vpn_gateway                     = "https://www.googleapis.com/compute/v1/projects/your_project_name/regions/asia-east1/vpnGateways/your_vpn_gateway_name"
  vpn_gateway_interface           = "1"
}
```
