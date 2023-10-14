# 🌐 GetYoutubeSubscribers
<p align="center">
  <a title="license" href="./LICENSE"><img src="https://img.shields.io/github/license/Priyanshunegi5/get-youtube-subscribers1" alt="license"></a>
  <a title="nodejs" href="https://nodejs.org"><img src="https://img.shields.io/badge/logo-nodedotjs-blue?logo=nodedotjs" alt="nodejs"></a>
  <a title="expressjs" href="https://expressjs.com"><img src="https://img.shields.io/badge/logo-expressjs-blue?logo=expressjs" alt="expressjs"></a>
  <a title="mongodb" href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/logo-mongodb-blue?logo=mongodb" alt="mongodb"></a>
  <a title="mongoosejs" href="https:/mongoosejs.com/"><img src="https://img.shields.io/badge/logo-vite-blue?logo=mongoosejs" alt="mongoosejs"></a>
</p>

<p align="center">
  <img width="200" height="200" src="./public/logo512.png?raw=true" alt="logo" />
</p>

## 🦸‍♂️ About
The YouTube Subscribers is a straightforward backend project that offers a RESTful API for getting information on YouTube channel subscribers. 
The project is created with Node.js and Express, and the database used to hold the subscriber information is MongoDB.

The API has a number of endpoints that let users get data in JSON format, such as an endpoint that supports all crud operation like create, read, update and delete. 
The project also deals with error situations, as when a user reaches an unidentified endpoint or when the payload is entered incorrectly sended.

###### 👊This project's primary goal is to serve as a foundation for developing a more extensive application.

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./public/logo192.png?raw=true">
      <img alt="GetYoutubeSubscribers" src="./public/logo192.png?raw=true">
  </picture>
</p>

## Table of Contents
- [Major Technologies](#Major-Technologies)
- [Structure](#Structure)
- [Getting Started](#Getting-Started)
- [Repository Branches](#Repository-Branches)
- [Top Contributors](#Top-Contributors)
- [Contributions](#Contributions)
- [Code of Conduct](#Code-of-Conduct)
- [Security Vulnerabilities](#Security-Vulnerabilities)
- [License](#License)

## Major Technologies
- NodeJs
- ExpressJs
- MongoDB
- Mongoose

## Structure
```sh
├───public
└───src
    ├───api
    │   └───v1
    │       ├───channels
    │       ├───subscribed
    │       └───subscribers
    ├───models
    ├───routes
    └───schemas
```
## Getting Started 🎉
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

> **Warning**
> Make sure that you follow each step carefully!.

###### Hardware requirements
Minimal (dependent on Npm, NodeJs)

###### System Requirements
Ensure your system meets the following requirements:

PACKAGE    | WHY REQUIRED?                        | SITE
-----------|--------------------------------------|-----------------------------
NPM        | Installing npm packages              | [LINK](https://nodejs.org/en/)
NODE       | Running Nodejs                       | [LINK](https://nodejs.org/en/)
ExpressJs  | Web application framework            | [LINK](https://expressjs.com/)
MongoDB    | Storing databases                    | [LINK](https://www.mongodb.com/)
Mongoose   | schema-based solution to model       | [LINK](https://mongoosejs.com/)

#### 💡Prerequisites
We recommend that you have a basic understanding of Node.js

###### Installation
```bash
# Clone the repository
$ git clone https://github.com/Priyanshunegi5/get-youtube-subscribers1.git
$ cd get-youtube-subscribers1
```

> **Warning**
> Make sure that you update env file before running dev server!.

```bash
# Update env file
$ copy .env.example .env
# Update env file
$ nvim .env
```

###### Development
```bash
# Run the development server
$ npm install
$ npm run dev-start
```

## Api Endpoints
```sh
# Subscribers
GET     /api/v1/subscribers/all
POST    /api/v1/subscribers/create
GET     /api/v1/subscribers/read/:id
PATCH   /api/v1/subscribers/update/:id
DELETE  /api/v1/subscribers/delete/:id

# Channels
GET     /api/v1/channels
GET     /api/v1/channels/all
POST    /api/v1/channels/create
GET     /api/v1/channels/read/:id
PATCH   /api/v1/channels/update/:id
DELETE  /api/v1/channels/delete/:id

# Subscribed
GET     /api/v1/subscribed
GET     /api/v1/subscribed/all
POST    /api/v1/subscribed/create
GET     /api/v1/subscribed/read/:id
PATCH   /api/v1/subscribed/update/:id
DELETE  /api/v1/subscribed/delete/:id
```

## Repository Branches
- **master** -> any pull request of changes this branch
- **main** -> don´t modify, this is what is running in production

## Top Contributors
[![GitHub Contributors Image](https://contrib.rocks/image?repo=Priyanshunegi5/get-youtube-subscribers1)](https://github.com/Priyanshunegi5/get-youtube-subscribers1/graphs/contributors)

## Contributions

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.
###### Pull Requests
1. Fork the repo and create your branch:
   `#[type]/PR description`
1. Ensure to describe your pull request:
   Edit the PR title by adding a semantic prefix like `Added`, `Updated:`, `Fixed:` etc.
   **Title:**
   `#[issue] PR title -> #90 Fixed styles the button`

## Code of Conduct
In order to ensure that the GetYoutubeSubscribers community is welcoming to all, please review and abide by the [Code of Conduct](./CODE_OF_CONDUCT.md).

## Security Vulnerabilities
If you discover a security vulnerability within GetYoutubeSubscribers, please send an e-mail to Raman Verma via [e-mail](mailto:devramanverma@gmail.com).
All security vulnerabilities will be promptly addressed.

## License
The GetYoutubeSubscribers is open-sourced software licensed under the [MIT License](./LICENSE)