document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const input = document.getElementById("cpf");
  const resultado = document.getElementById("resultado");
  const cpfSpan = document.getElementById("cpfLimpo");
  const btnCopiar = document.getElementById("copiar");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let cpf = input.value;
    let cpfLimpo = cpf.replace(/\D/g, "");

    cpfSpan.textContent = cpfLimpo;
    btnCopiar.style.display = "inline-block";
  });

  btnCopiar.addEventListener("click", () => {
    let cpfTexto = cpfSpan.textContent;
    if (cpfTexto) {
      navigator.clipboard.writeText(cpfTexto).then(() => {
        btnCopiar.textContent = "Copiado!";
        setTimeout(() => (btnCopiar.textContent = "Copiar"), 1500);
      });
    }
  });
});
