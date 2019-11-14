# sanity-plugin-ajonp-gcp-cloud-build

Use Google Cloud Platform for building you sanity studio.

## Get Google Cloud Platform Credential

### clientId

![GCP Cred](https://res.cloudinary.com/ajonp/image/upload/v1573715420/ajonp-ajonp-com/lessons/sanity-plugin-ajonp-gcp-cloud-build/Screen_Shot_2019-11-14_at_2.10.11_AM.png)

![](https://res.cloudinary.com/ajonp/image/upload/v1573715611/ajonp-ajonp-com/lessons/sanity-plugin-ajonp-gcp-cloud-build/Screen_Shot_2019-11-14_at_2.12.53_AM.png)
![](https://res.cloudinary.com/ajonp/image/upload/v1573715611/ajonp-ajonp-com/lessons/sanity-plugin-ajonp-gcp-cloud-build/Screen_Shot_2019-11-14_at_2.13.13_AM.png)

### projectId

![](https://res.cloudinary.com/ajonp/image/upload/v1573715703/ajonp-ajonp-com/lessons/sanity-plugin-ajonp-gcp-cloud-build/Screen_Shot_2019-11-14_at_2.14.24_AM.png)

### scope

Can be left the same

## How to use

## Install plugin

`npm install @ajonp/sanity-plugin-ajonp-gcp-cloud-build`

## Add plugin to project

`sanity.json` add `@ajonp/sanity-plugin-ajonp-gcp-cloud-build`

```
  "plugins": [
    "@sanity/base",
    "@sanity/components",
    "@sanity/default-layout",
    "@sanity/default-login",
    "@sanity/dashboard",
    "@sanity/desk-tool",
    "dashboard-widget-structure-menu",
    "dashboard-widget-document-list",
    "dashboard-widget-netlify",
    "@sanity/code-input",
    "ajonp-studio-logo",
    "@ajonp/sanity-plugin-ajonp-gcp-cloud-build"
  ],
```

### Update Dashboard

Add similar to the following

`studio/dashBoardConfig.js`

```
{
    name: 'ajonp-gcp-cloud-build',
    layout: { width: 'medium' },
    options: {
    clientId: '535596779905-t1p17p88psrcat5ptvsovc6ktv4ovten.apps.googleusercontent.com',
    projectId: 'ajonp-ajonp-com',
    scope: `https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/cloud-platform`
    }
}
```
