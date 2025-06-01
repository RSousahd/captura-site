<script>
  document.getElementById("form-contato").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const servico = document.getElementById("servico").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `*Novo Pedido de Serviço*%0A` +
                  `*Nome:* ${nome}%0A` +
                  `*Email:* ${email}%0A` +
                  `*Telefone:* ${telefone}%0A` +
                  `*Serviço:* ${servico}%0A` +
                  `*Mensagem:* ${mensagem}`;

    const numeroWhatsApp = "5562985558320";
    const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

    window.open(url, "_blank");

    document.getElementById("form-contato").reset();
  });
</script>
