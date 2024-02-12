<p align="center">
  <img src="https://camo.githubusercontent.com/a4e71a0942263821f4cb9213b2808af909e46967d9ed3ccee6e7e122f276efd6/68747470733a2f2f696d672e69636f6e73382e636f6d2f65787465726e616c2d74616c2d72657669766f2d726567756c61722d74616c2d72657669766f2f39362f65787465726e616c2d726561646d652d69732d612d656173792d746f2d6275696c642d612d646576656c6f7065722d6875622d746861742d6164617074732d746f2d7468652d757365722d6c6f676f2d726567756c61722d74616c2d72657669766f2e706e67" width="100" />
</p>
<p align="center">
    <h1 align="center">React Exercício 01</h1>
</p>
<p align="center">
    <em>Exercício para a disciplina de Programação Web com Node.js do curso de Desenvolvimento Web Front-End - PUC Minas</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/camilarozendo/react-ex01?style=default&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/camilarozendo/react-ex01?style=default&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/camilarozendo/react-ex01?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/camilarozendo/react-ex01?style=default&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<hr>

## 🔗 Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running react-ex01](#-running-react-ex01)
>   - [ Tests](#-tests)
> - [ Contributing](#-contributing)
> - [ License](#-license)

---

## 📍 Overview

O projeto consiste em uma aplicação web com uma estrutura básica de layout, incluindo uma barra de navegação (Navbar), um menu lateral (Sidebar), um menu de seções (Menu) e uma seção de conteúdo (ContainerSections). Cada seção do menu leva a diferentes partes da aplicação, enquanto o conteúdo da seção é exibido na área central.

---

## 🔮 Features

#### Navbar:

- Exibe um menu de navegação na parte superior da página.
- O menu é dinamicamente renderizado com base nos itens passados como propriedade (props).
- Cada item do menu contém um nome e um link.

#### Menu:

- Apresenta um menu de seções na lateral da página.
- Semelhante à Navbar, os itens do menu são renderizados com base nas props passadas.
- Cada seção do menu tem um nome e um link.

#### ContainerSections:

- Mostra uma série de seções de conteúdo no corpo principal da página.
- Cada seção contém um título e um texto, que são renderizados usando o componente Img.
- Usa o componente Img para renderizar as seções de conteúdo.

#### Sidebar:

- Apresenta um menu lateral na página.
- Semelhante à Navbar e ao Menu, os itens do menu são renderizados com base nas props passadas.
- Cada item do menu lateral possui um nome e um link.

#### Img:

- Componente para exibir imagens com um título e um texto associado.
- Utilizado pelo ContainerSections para renderizar cada seção de conteúdo.

---

## 🧩 Repository Structure

```sh

└── react-ex01/
   ├── package-lock.json
   ├── package.json
   ├── public/
   │   ├── index.html
   │   ├── logo.png
   │   └── manifest.json
   └── src/
       ├── components
       │   ├── Header.js
       │   ├── Img.js
       │   ├── Menu.js
       │   ├── Sections.js
       │   └── Sidebar.js
       ├── App.css
       ├── App.js
       ├── App.test.js
       ├── index.css
       ├── index.js
       ├── logo.svg
       ├── reportWebVitals.js
       └── setupTests.js
```


---

## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* Node.js

### ⚙️ Installation

1. Clone the pucminas.exercicio2.node repository:

```sh
git clone https://github.com/camilarozendo/react-ex01
```

2. Change to the project directory:

```sh
cd react-ex01
```

3. Install the dependencies:

```sh
npm install
```

### 👩‍💻 Running react-ex01

Use the following command to run react-ex01:

```sh
npm start
```

---

###  🧪 Tests

To execute tests, run:

```sh
npm test
```

---


## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github/camilarozendo/react-ex01/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github/camilarozendo/react-ex01/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github/camilarozendo/react-ex01/issues)**: Submit bugs found or log feature requests for Pucminas.exercicio2.node.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/camilarozendo/react-ex01
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

MIT License

Copyright (c) [2023] [Camila Rozendo]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[**Return**](#-quick-links)

---
