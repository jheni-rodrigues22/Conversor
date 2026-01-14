const unidades = {
  comprimento: ["mm", "cm", "m", "km"],
  massa: ["mg", "g", "kg", "t"],
  temperatura: ["C", "F", "K"],
  volume: ["ml", "l", "m3"],
  area: ["cm2", "m2", "km2", "ha"],
  energia: ["J", "kJ", "cal", "kcal"],
  potencia: ["W", "kW", "cv"],
  pressao: ["Pa", "kPa", "bar", "atm"],
  velocidade: ["m/s", "km/h", "mph"],
  dados: ["B", "KB", "MB", "GB", "TB"],
  força: ["N", "kN", "lbf"],
  angulo: ["grau", "rad"]
};

function carregarUnidades() {
  const categoria = document.getElementById("categoria").value;
  const origem = document.getElementById("origem");
  const destino = document.getElementById("destino");

  origem.innerHTML = "";
  destino.innerHTML = "";

  if (!categoria) return;

  unidades[categoria].forEach(unidade => {
    origem.innerHTML += `<option value="${unidade}">${unidade}</option>`;
    destino.innerHTML += `<option value="${unidade}">${unidade}</option>`;
  });
}

function converter() {
  const valor = Number(document.getElementById("valor").value);
  const origem = document.getElementById("origem").value;
  const destino = document.getElementById("destino").value;
  const categoria = document.getElementById("categoria").value;

  if (!categoria || isNaN(valor)) {
    document.getElementById("resultado").innerText =
      "Preencha todos os campos.";
    return;
  }

  if (origem === destino) {
    document.getElementById("resultado").innerText =
      `Resultado: ${valor}`;
    return;
  }

    let resultado;

  switch (categoria) {
    case "comprimento":
      resultado = converterComprimento(valor, origem, destino);
      break;
    case "massa":
      resultado = converterMassa(valor, origem, destino);
      break;
    case "temperatura":
      resultado = converterTemperatura(valor, origem, destino);
      break;
    case "volume":
      resultado = converterVolume(valor, origem, destino);
      break;
    case "area":
      resultado = converterArea(valor, origem, destino);
      break;
    case "energia":
      resultado = converterEnergia(valor, origem, destino);
      break;
    case "potencia":
      resultado = converterPotencia(valor, origem, destino);
      break;
    case "pressao":
      resultado = converterPressao(valor, origem, destino);
      break;
    case "velocidade":
      resultado = converterVelocidade(valor, origem, destino);
      break;
    case "dados":
      resultado = converterDados(valor, origem, destino);
      break;
    case "força":
      resultado = converterForca(valor, origem, destino);
      break;
    case "angulo":
      resultado = converterAngulo(valor, origem, destino);
      break;
  }

  const r = document.getElementById("resultado");
  r.classList.remove("result-anim");
  void r.offsetWidth;
  r.textContent = `Resultado: ${resultado}`;
  r.classList.add("result-anim");
}



function converterComprimento(valor, origem, destino) {
  let m;
  switch (origem) {
    case "mm": m = valor / 1000; break;
    case "cm": m = valor / 100; break;
    case "m": m = valor; break;
    case "km": m = valor * 1000; break;
  }

  switch (destino) {
    case "mm": return m * 1000;
    case "cm": return m * 100;
    case "m": return m;
    case "km": return m / 1000;
  }
}

function converterMassa(valor, origem, destino) {
  let kg;
  switch (origem) {
    case "mg": kg = valor / 1e6; break;
    case "g": kg = valor / 1000; break;
    case "kg": kg = valor; break;
    case "t": kg = valor * 1000; break;
  }

  switch (destino) {
    case "mg": return kg * 1e6;
    case "g": return kg * 1000;
    case "kg": return kg;
    case "t": return kg / 1000;
  }
}

function converterTemperatura(valor, origem, destino) {
  let c;
  switch (origem) {
    case "C": c = valor; break;
    case "F": c = (valor - 32) * 5/9; break;
    case "K": c = valor - 273.15; break;
  }

  switch (destino) {
    case "C": return c;
    case "F": return (c * 9/5) + 32;
    case "K": return c + 273.15;
  }
}

function converterVolume(valor, origem, destino) {
  let l;
  switch (origem) {
    case "ml": l = valor / 1000; break;
    case "l": l = valor; break;
    case "m3": l = valor * 1000; break;
  }

  switch (destino) {
    case "ml": return l * 1000;
    case "l": return l;
    case "m3": return l / 1000;
  }
}

function converterArea(valor, origem, destino) {
  let m2;
  switch (origem) {
    case "cm2": m2 = valor / 10000; break;
    case "m2": m2 = valor; break;
    case "km2": m2 = valor * 1e6; break;
    case "ha": m2 = valor * 10000; break;
  }

  switch (destino) {
    case "cm2": return m2 * 10000;
    case "m2": return m2;
    case "km2": return m2 / 1e6;
    case "ha": return m2 / 10000;
  }
}

function converterEnergia(valor, origem, destino) {
  let j;
  switch (origem) {
    case "J": j = valor; break;
    case "kJ": j = valor * 1000; break;
    case "cal": j = valor * 4.184; break;
    case "kcal": j = valor * 4184; break;
  }

  switch (destino) {
    case "J": return j;
    case "kJ": return j / 1000;
    case "cal": return j / 4.184;
    case "kcal": return j / 4184;
  }
}

function converterPotencia(valor, origem, destino) {
  let w;
  switch (origem) {
    case "W": w = valor; break;
    case "kW": w = valor * 1000; break;
    case "cv": w = valor * 735.5; break;
  }

  switch (destino) {
    case "W": return w;
    case "kW": return w / 1000;
    case "cv": return w / 735.5;
  }
}

function converterPressao(valor, origem, destino) {
  let pa;
  switch (origem) {
    case "Pa": pa = valor; break;
    case "kPa": pa = valor * 1000; break;
    case "bar": pa = valor * 100000; break;
    case "atm": pa = valor * 101325; break;
  }

  switch (destino) {
    case "Pa": return pa;
    case "kPa": return pa / 1000;
    case "bar": return pa / 100000;
    case "atm": return pa / 101325;
  }
}

function converterVelocidade(valor, origem, destino) {
  let ms;
  switch (origem) {
    case "m/s": ms = valor; break;
    case "km/h": ms = valor / 3.6; break;
    case "mph": ms = valor * 0.44704; break;
  }

  switch (destino) {
    case "m/s": return ms;
    case "km/h": return ms * 3.6;
    case "mph": return ms / 0.44704;
  }
}

function converterDados(valor, origem, destino) {
  let b;
  switch (origem) {
    case "B": b = valor; break;
    case "KB": b = valor * 1024; break;
    case "MB": b = valor * 1024 ** 2; break;
    case "GB": b = valor * 1024 ** 3; break;
    case "TB": b = valor * 1024 ** 4; break;
  }

  switch (destino) {
    case "B": return b;
    case "KB": return b / 1024;
    case "MB": return b / (1024 ** 2);
    case "GB": return b / (1024 ** 3);
    case "TB": return b / (1024 ** 4);
  }
}

function converterForca(valor, origem, destino) {
  let n;
  switch (origem) {
    case "N": n = valor; break;
    case "kN": n = valor * 1000; break;
    case "lbf": n = valor * 4.44822; break;
  }

  switch (destino) {
    case "N": return n;
    case "kN": return n / 1000;
    case "lbf": return n / 4.44822;
  }
}

function converterAngulo(valor, origem, destino) {
  let g;
  switch (origem) {
    case "grau": g = valor; break;
    case "rad": g = valor * (180 / Math.PI); break;
  }

  switch (destino) {
    case "grau": return g;
    case "rad": return g * (Math.PI / 180);
  }
}

function trocarUnidades() {
  const origem = document.getElementById("origem");
  const destino = document.getElementById("destino");

  const temp = origem.value;
  origem.value = destino.value;
  destino.value = temp;

  const valor = document.getElementById("valor").value;
  if (valor !== "") {
    converter();
  }
}

