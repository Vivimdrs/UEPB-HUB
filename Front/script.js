const campusData = [
    {
      nome: "Campus I - Campina Grande",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/UEPB_-_Campus_I.jpg/320px-UEPB_-_Campus_I.jpg"
    },
    {
      nome: "Campus V - João Pessoa",
      imagem: "https://www.uepb.edu.br/wp-content/uploads/2022/07/campus-v.jpg"
    },
    {
      nome: "Campus VII - Patos",
      imagem: "https://www.uepb.edu.br/wp-content/uploads/2022/07/campus-vii.jpg"
    }
  ];
  
  const campusList = document.getElementById("campusList");
  const searchInput = document.getElementById("searchInput");
  
  function renderCampi(filter = "") {
    campusList.innerHTML = "";
    campusData
      .filter(campus => campus.nome.toLowerCase().includes(filter.toLowerCase()))
      .forEach(campus => {
        const card = document.createElement("div");
        card.className = "campus-card";
        card.innerHTML = `
          <img src="${campus.imagem}" alt="${campus.nome}">
          <p>${campus.nome}</p>
        `;
        campusList.appendChild(card);
      });
  }
  
  searchInput.addEventListener("input", e => {
    renderCampi(e.target.value);
  });
  
  renderCampi(); // Inicializa
  