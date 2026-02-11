# Instagram Auto Unfollow Tool
==========================

A powerful and efficient tool designed to automatically unfollow users on Instagram who do not follow you back.

## Table of Contents
-----------------

1. [Introduction](#introduction)
2. [Features](#features)
3. [Getting Started](#getting-started)
4. [Configuration](#configuration)
5. [Usage](#usage)
6. [Troubleshooting](#troubleshooting)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction
---------------

Are you tired of manually checking your Instagram followers and unfollowing those who don't follow you back? Do you want to maintain a healthy follower-to-following ratio and increase your online presence? Look no further! Our Instagram Auto Unfollow Tool is here to help.

## Features
------------

* **Automatic Unfollowing**: Automatically unfollow users who do not follow you back
* **Customizable Settings**: Set your own criteria for unfollowing, including minimum follower count, maximum follow count, and more
* **Safe and Efficient**: Our tool uses Instagram's official API to ensure safe and efficient unfollowing
* **User-Friendly Interface**: Easy-to-use interface for configuring and monitoring your unfollowing activity
* **Multi-Account Support**: Manage multiple Instagram accounts with ease

## Getting Started
-----------------

1. Clone this repository: `git clone https://github.com/your-username/instagram-auto-unfollow.git`
2. Install the required dependencies: `pip install -r requirements.txt`
3. Create an Instagram Developer account and obtain an access token: [https://developers.facebook.com/docs/instagram-api/getting-started](https://developers.facebook.com/docs/instagram-api/getting-started)
4. Configure your tool by editing the `config.json` file

## Configuration
----------------

The `config.json` file contains the following settings:

* `username`: Your Instagram username
* `password`: Your Instagram password
* `access_token`: Your Instagram access token
* `min_followers`: Minimum number of followers required to not unfollow
* `max_following`: Maximum number of users to follow
* `unfollow_delay`: Delay between unfollowing users (in seconds)

Example `config.json` file:
```json
{
  "username": "your-username",
  "password": "your-password",
  "access_token": "your-access-token",
  "min_followers": 100,
  "max_following": 1000,
  "unfollow_delay": 300
}
```
## Usage
-----

1. Run the tool: `python main.py`
2. The tool will automatically start unfollowing users who do not follow you back

## Troubleshooting
-----------------

* **Error: Invalid access token**: Check that your access token is correct and has not expired
* **Error: Rate limit exceeded**: Check that your unfollow delay is set to a suitable value to avoid exceeding Instagram's rate limits
* **Error: User not found**: Check that your username and password are correct and that the user exists on Instagram

## Contributing
------------

We welcome contributions to this project! If you have any ideas or bug fixes, please submit a pull request.

## License
-------

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Badges

[![Build Status](https://travis-ci.org/your-username/instagram-auto-unfollow.svg?branch=master)](https://travis-ci.org/your-username/instagram-auto-unfollow)
[![Code Coverage](https://codecov.io/gh/your-username/instagram-auto-unfollow/branch/master/graph/badge.svg)](https://codecov.io/gh/your-username/instagram-auto-unfollow)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
