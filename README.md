
<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [Kanban Board](#kanban-board)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 CURRENCY FOR YOU <a name="about-project"></a>

CURRENCY FOR YOU is a React Native app for currency tracking and conversion, using exchange rates data from the CurrencyLayer API. The app allows currency selection, amount input, and viewing exchange rates, with locally stored rates refreshed every 30 minutes. Built with React Native, it follows Clean Architecture principles 

### Tech Stack <a name="tech-stack"></a>


<details>
  <summary>REACT</summary>
  <ul>
    <li><a href="https://reactnative.dev/">React</a></li>
    <li><a href="https://redux.js.org/">Redux</a></li>
  </ul>
</details>

<details>
  <summary>API</summary>
  <ul>
      <li><a href="https://www.currencylayer.com/">currencylayer.com</a></li>

  </ul>
</details>


### Key Features <a name="key-features"></a>

- A user can see the currencies
- A user can convert the currencies
- Currencies update every 30 mins
- You can see specific currencies

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

You can see the packages in the releases section. (You might need to buy api to deploy on certain android as they do not allow `http` requests( the api free plan is `http`)) 
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

```sh
 node
 java
```

### Setup

Clone this repository to your desired folder:

```sh
 git clone https://github.com/heintayzar-hm/currency-for-you.git
```

### Install

Install Project with:

```sh
  cd currency-for-you
```
make .env file, key is just a free key and you can create yourselves one at [https://currencylayer.com/](https://currencylayer.com/)
```sh
   API_URL = http://apilayer.net/api/
   API_KEY = 05e8c1c4278b72a5bcdd91ee2fb36ea8
```

- Run the following.(The command can be difference according to the systems)

```
   npm install
   npx react-native start
```

### Run tests

Work In Progress

## 👥 Authors <a name="authors"></a>

👤 **Hein Tay Zar**

- GitHub: [@Hein Tay](https://github.com/heintayzar-hm)
- Twitter: [@Hein Tay](https://twitter.com/heintayzarhm)
- LinkedIn: [Hein Tay](https://www.linkedin.com/in/hein-tay-zar)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Deployment

User can deploy yourself using:

```sh
npx react-native run-android --variant=release
```

You will get a file at <b>currency-for-you/android/app/build/outputs/apk/release/app-release.apk</b>

You can run on your android

<!-- FUTURE FEATURES -->

 ## 🔭 Future Features <a name="future-features"></a>

- Deployed full version (currently api keys have problems) on Play Store
- Style more
- Add test cases

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

 ## ⭐️ Show your support <a name="support"></a>

If you like this project, Please give it a ⭐️

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

 ## 🙏 Acknowledgments <a name="acknowledgements"></a>

 Thanks [myansis](https://myansis.com/) for request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
