# 🔄 Conversor Universal

Um **Conversor Universal** desenvolvido com **HTML, CSS e JavaScript puro**, capaz de converter diversas grandezas físicas de forma simples, rápida e responsiva, sem uso de bibliotecas externas.


<p align="center">
  <img src="img/demo.gif" alt="Demonstração do Conversor Universal" width="300">
</p>


---

## 📌 Funcionalidades

O projeto permite converter valores entre diferentes unidades das seguintes categorias:

* 📏 **Comprimento** (mm, cm, m, km)
* ⚖️ **Massa** (mg, g, kg, t)
* 🌡️ **Temperatura** (Celsius, Fahrenheit, Kelvin)
* 🧪 **Volume** (ml, l, m³)
* 📐 **Área** (cm², m², km², ha)
* ⚡ **Energia** (J, kJ, cal, kcal)
* 🔌 **Potência** (W, kW, cv)
* 🌬️ **Pressão** (Pa, kPa, bar, atm)
* 🚀 **Velocidade** (m/s, km/h, mph)
* 💾 **Dados** (B, KB, MB, GB, TB)
* 🧲 **Força** (N, kN, lbf)
* 📐 **Ângulo** (grau, radiano)

Extras:

* 🔁 Botão para inverter unidades
* ✨ Animação ao exibir o resultado
* 📱 Totalmente responsivo (desktop e mobile)
* 🚫 Sem uso de `alert()` — feedback direto na tela

---

## 🧱 Estrutura do Projeto

```
conversor-universal/
│
├── index.html   # Estrutura da aplicação
├── style.css    # Estilos, animações e responsividade
└── script.js    # Lógica de conversão e interação
```

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** — estrutura da interface
* **CSS3** — layout, animações e media queries
* **JavaScript (ES6)** — lógica de conversão e manipulação do DOM

Não utiliza frameworks ou bibliotecas externas.

---

## ⚙️ Como Funciona

1. O usuário seleciona uma **categoria**
2. As **unidades de origem e destino** são carregadas dinamicamente
3. O usuário informa o **valor a ser convertido**
4. Ao clicar em **Converter**, o JavaScript:

   * valida os campos
   * identifica a categoria
   * chama a função de conversão adequada
   * exibe o resultado na tela

Cada categoria possui sua própria função de conversão, utilizando uma **unidade base** (ex: metro, quilograma, joule), o que simplifica os cálculos e torna o código mais organizado.

---

## 🎨 Responsividade

O layout é totalmente responsivo graças ao uso de:

* `flexbox`
* `max-width`
* `media queries`

O aplicativo se adapta automaticamente a celulares, tablets e desktops.

---

## 🚀 Como Executar o Projeto

1. Faça o download ou clone este repositório
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Pronto! Nenhuma instalação adicional é necessária

---

## 📚 Boas Práticas Aplicadas

* Separação de responsabilidades (HTML, CSS e JS)
* Código modular e organizado
* Uso de funções específicas para cada conversão
* Feedback visual amigável ao usuário
* Facilidade para manutenção e expansão

---


## 👩‍💻 Autoria

Projeto desenvolvido para fins educacionais, com foco em aprendizado de **JavaScript, lógica de programação e front-end**.

---

✨ Sinta-se à vontade para usar, modificar e evoluir este projeto!
