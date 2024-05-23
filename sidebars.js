/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tech: [
    "index",
    {
      type: "category",
      label: "☁ Cloud",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "cloud/index",
      },
      items: [
        {
          type: "category",
          label: "GCP",
          link: {
            type: "doc",
            id: "cloud/gcp/index",
          },
          items: ["cloud/gcp/gce", "cloud/gcp/gcs", "cloud/gcp/cloud function", "cloud/gcp/app engine", "cloud/gcp/gke"],
        },
        {
          type: "category",
          label: "Kubernetes",
          link: {
            type: "doc",
            id: "cloud/kubernetes/index",
          },
          items: [
            "cloud/kubernetes/namespace",
            {
              type: "link",
              label: "Cheats",
              href: "/tech-notes/cheats/kubernetes/kubectl",
            },],
        },
        {
          type: "category",
          label: "Terraform",
          link: {
            type: "doc",
            id: "cloud/terraform/index",
          },
          items: ["cloud/terraform/backend", "cloud/terraform/GCP Project to Terraform", "cloud/terraform/Initial construction of the project"],
        },
      ],
    },
  ],
};


export default sidebars;
