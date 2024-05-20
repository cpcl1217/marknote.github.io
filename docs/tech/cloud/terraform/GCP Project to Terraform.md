---
sidebar_label: 'GCP Project to Terraform'
sidebar_position: 3
---

本篇講述使用者如何使用 gcloud CLI 工具或外部工具來將 GCP 專案中的所有資源轉換為 HCL 格式。這將使得用戶能夠更加輕鬆地管理、版本控制和部署他們的 GCP 資源，並且能夠與其他基礎架構管理工具（如Terraform）無縫集成。


## 參考資料
https://cloud.google.com/docs/terraform/resource-management/export

https://github.com/GoogleCloudPlatform/terraformer?tab=readme-ov-file#demo-gcp

https://medium.com/@nanditasahu031/terraformer-generate-terraform-files-from-existing-infrastructure-5d709fedd2b9

https://github.com/GoogleCloudPlatform/terraformer/issues/1695

https://github.com/GoogleCloudPlatform/terraformer/issues/1857


## **實作流程**
### **方法一：Export GCP resources to Terraform format**


每個專案執行一次以下 command，即可在任何目錄中執行它
```
export GOOGLE_CLOUD_PROJECT=PROJECT_ID
```

在 Cloud Shell 中，安裝 Config Connector 的命令列介面(CLI)
```
sudo apt-get install google-cloud-sdk-config-connector
```
> **註:** 透過 Config Connector，可以使用 Google Cloud 的 Terraform 批次匯出工具

啟用 Cloud Asset API
```
gcloud services enable cloudasset.googleapis.com
```

建立一個目錄以將專案配置輸出到該目錄
```
mkdir OUTPUT_DIRECTORY
```

將專案的整個配置匯出到該目錄
```bash=
gcloud beta resource-config bulk-export \
 --path=OUTPUT_DIRECTORY \
 --project=PROJECT_ID \
 --resource-format=terraform
```

**如果不想要輸出全部 resources，也可以選擇單一或多個 resources**

* **匯出單一資源類型**
```bash=
gcloud beta resource-config bulk-export \
  --resource-types=RESOURCE_TYPE \
  --project=PROJECT_ID \
  --resource-format=terraform
```

* **匯出多個資源類型**
```bash=
gcloud beta resource-config bulk-export \
  --resource-types=ComputeFirewall,ComputeInstance \
  --project=PROJECT_ID \
  --resource-format=terraform
```


### **限制**
目前系統不支援某些資源類型匯出為 Terraform 格式，即使它們受 Terraform Google 提供者支援也是如此，我們可以透過以下 command 來檢視目前那些資源提供轉換

```
gcloud beta resource-config list-resource-types
```

以下為列表：

| KRM KIND                                 | BULK EXPORT? | EXPORT? | IAM? |
|------------------------------------------|--------------|---------|------|
| AccessContextManagerAccessLevel          |              |         |      |
| AccessContextManagerAccessPolicy         |              |         |  x   |
| AccessContextManagerServicePerimeter     |              |         |      |
| ArtifactRegistryRepository               |  x           |   x     |  x   |
| BigQueryDataset                          |  x           |   x     |      |
| BigQueryJob                              |              |   x     |      |
| BigQueryTable                            |  x           |   x     |  x   |
| BigtableAppProfile                       |  x           |   x     |      |
| BigtableGCPolicy                         |              |         |      |
| BigtableInstance                         |  x           |   x     |  x   |
| BigtableTable                            |  x           |   x     |  x   |
| CloudBuildTrigger                        |              |         |      |
| CloudIdentityGroup                       |              |         |      |
| ComputeAddress                           |  x           |   x     |  x   |
| ComputeAddress                           |  x           |   x     |  x   |
| ComputeBackendBucket                     |  x           |   x     |  x   |
| ComputeBackendService                    |  x           |   x     |      |
| ComputeBackendService                    |  x           |   x     |      |
| ComputeDisk                              |  x           |   x     |  x   |
| ComputeDisk                              |  x           |   x     |  x   |
| ComputeExternalVPNGateway                |  x           |   x     |      |
| ComputeFirewall                          |  x           |   x     |      |
| ComputeForwardingRule                    |  x           |   x     |      |
| ComputeForwardingRule                    |  x           |   x     |      |
| ComputeHTTPHealthCheck                   |  x           |   x     |      |
| ComputeHTTPSHealthCheck                  |  x           |   x     |      |
| ComputeHealthCheck                       |  x           |   x     |      |
| ComputeHealthCheck                       |  x           |   x     |      |
| ComputeImage                             |  x           |   x     |  x   |
| ComputeInstance                          |  x           |   x     |  x   |
| ComputeInstance                          |  x           |         |  x   |
| ComputeInstanceGroup                     |  x           |   x     |      |
| ComputeInstanceTemplate                  |  x           |   x     |      |
| ComputeInterconnectAttachment            |  x           |   x     |      |
| ComputeNetwork                           |  x           |   x     |      |
| ComputeNetworkEndpointGroup              |  x           |   x     |      |
| ComputeNetworkPeering                    |              |         |      |
| ComputeNodeGroup                         |  x           |   x     |      |
| ComputeNodeTemplate                      |  x           |   x     |      |
| ComputeProjectMetadata                   |              |         |      |
| ComputeRegionNetworkEndpointGroup        |              |         |      |
| ComputeReservation                       |  x           |   x     |      |
| ComputeResourcePolicy                    |  x           |   x     |      |
| ComputeRoute                             |  x           |   x     |      |
| ComputeRouter                            |  x           |   x     |      |
| ComputeRouterInterface                   |              |         |      |
| ComputeRouterNAT                         |              |         |      |
| ComputeRouterPeer                        |              |         |      |
| ComputeSSLCertificate                    |  x           |   x     |      |
| ComputeSSLCertificate                    |  x           |   x     |      |
| ComputeSSLPolicy                         |  x           |   x     |      |
| ComputeSecurityPolicy                    |  x           |   x     |      |
| ComputeSharedVPCHostProject              |              |         |      |
| ComputeSharedVPCServiceProject           |              |         |      |
| ComputeSnapshot                          |  x           |   x     |  x   |
| ComputeSubnetwork                        |  x           |   x     |  x   |
| ComputeTargetGRPCProxy                   |              |   x     |      |
| ComputeTargetHTTPProxy                   |  x           |   x     |      |
| ComputeTargetHTTPProxy                   |  x           |   x     |      |
| ComputeTargetHTTPSProxy                  |  x           |   x     |      |
| ComputeTargetHTTPSProxy                  |  x           |   x     |      |
| ComputeTargetInstance                    |  x           |   x     |      |
| ComputeTargetPool                        |  x           |   x     |      |
| ComputeTargetSSLProxy                    |              |   x     |      |
| ComputeTargetTCPProxy                    |  x           |   x     |      |
| ComputeTargetVPNGateway                  |  x           |   x     |      |
| ComputeURLMap                            |  x           |   x     |      |
| ComputeURLMap                            |  x           |   x     |      |
| ComputeVPNGateway                        |  x           |   x     |      |
| ComputeVPNTunnel                         |  x           |   x     |      |
| ContainerCluster                         |  x           |   x     |      |
| ContainerNodePool                        |  x           |         |      |
| DataflowFlexTemplateJob                  |              |         |      |
| DataflowJob                              |              |         |      |
| DNSManagedZone                           |  x           |   x     |      |
| DNSPolicy                                |  x           |   x     |      |
| DNSRecordSet                             |              |         |      |
| FirestoreIndex                           |              |         |      |
| IAMCustomRole                            |  x           |         |      |
| IAMServiceAccount                        |  x           |         |  x   |
| IAMServiceAccountKey                     |              |         |      |
| KMSCryptoKey                             |  x           |         |  x   |
| KMSKeyRing                               |  x           |   x     |  x   |
| LoggingLogSink                           |  x           |         |      |
| MemcacheInstance                         |  x           |   x     |      |
| MonitoringAlertPolicy                    |  x           |         |      |
| MonitoringNotificationChannel            |              |         |      |
| PubSubSchema                             |              |   x     |      |
| PubSubSubscription                       |  x           |   x     |  x   |
| PubSubTopic                              |  x           |   x     |  x   |
| RedisInstance                            |  x           |   x     |      |
| Folder                                   |  x           |   x     |  x   |
| Project                                  |  x           |   x     |  x   |
| ResourceManagerLien                      |              |         |      |
| ResourceManagerPolicy                    |              |         |      |
| SecretManagerSecret                      |  x           |   x     |  x   |
| SecretManagerSecretVersion               |  x           |         |      |
| ServiceDirectoryEndpoint                 |              |   x     |      |
| ServiceDirectoryNamespace                |  x           |   x     |  x   |
| ServiceDirectoryService                  |              |   x     |  x   |
| ServiceNetworkingConnection              |              |         |      |
| Service                                  |  x           |   x     |      |
| SourceRepoRepository                     |  x           |   x     |  x   |
| SpannerDatabase                          |  x           |   x     |  x   |
| SpannerInstance                          |  x           |   x     |  x   |
| SQLDatabase                              |              |   x     |      |
| SQLInstance                              |  x           |   x     |      |
| SQLSSLCert                               |              |         |      |
| SQLUser                                  |              |         |      |
| StorageBucket                            |  x           |         |  x   |
| StorageBucketAccessControl               |              |         |      |
| StorageDefaultObjectAccessControl        |              |         |      |
| StorageNotification                      |              |         |      |
| StorageTransferJob                       |              |         |      |

___

### **方法二：Terraformer**


安裝 Terraformer，這裡選用 linux 版本
```b=
export PROVIDER=google
curl -LO "https://github.com/GoogleCloudPlatform/terraformer/releases/download/$(curl -s https://api.github.com/repos/GoogleCloudPlatform/terraformer/releases/latest | grep tag_name | cut -d '"' -f 4)/terraformer-${PROVIDER}-linux-amd64"
chmod +x terraformer-${PROVIDER}-linux-amd64
sudo mv terraformer-${PROVIDER}-linux-amd64 /usr/local/bin/terraformer
```
\
在目錄建立```init.tf```並執行```terraform init```初始化 Terraform provider 外掛程式

* <span>init.tf</span>

```hcl=
terraform {
  required_providers {
    google = {
      source = "hashicorp/google"
      version = "4.0.0"
    }
  }
  required_version = ">= 0.13"
}
```
> **注意:** 必須按照此指定版本，否則會出現報錯情形
    
接下來就可以開始轉換 resources 為 HCL 和 tfstate 檔案

* **輸出 tfstate 檔**
```
terraformer plan google --resources=instances --projects=your-project-name --regions=asia-east1
```
    
* **輸出 HCL 檔**
```
terraformer import google --resources=instances --projects=your-project-name --regions=asia-east1
```

**和 gcloud 一樣也可以選擇輸出多寡**

* **匯出全部資源**
```
terraformer import google --resources="*" --projects=your-project-name --regions=asia-east1
```

* **匯出單一資源(一組)**
```
terraformer import google --resources=compute_instance --projects=your-project-name --regions=asia-east1 --filter=instance-name:your-instance-name
```

* **匯出單一資源(多組)**
```
terraformer import google --resources=compute_instance --projects=your-project-name --regions=asia-east1 --filter=instance-name:instance1,instance2,instance3
```
\
檢視當前環境啟用的所有 resources 
```
terraformer import google --projects=your-project-name list
```


### **比較**

我認為使用 gcloud 轉換算是蠻方便的，並且較少遇到報錯的問題，只是目前支援的 resources 實在太少了。

另一方面，Terraformer 撇除前期摸索以及花時間 debug 外，它還是現今轉 HCL 的首選。畢竟它的功能相對齊全一些，而且基本上現有的 resources 都能被轉換，所以評估下來還是 Terraformer 更勝一籌。
