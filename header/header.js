function headertComponet(el) {
  const headerEl = document.createElement("div");
  headerEl.innerHTML = `  <div class="container container--flex">

  <!--Menu principal-->
  <div class="main-header__container">
      <a href="#" class="img_title"><img class="title-img" src="imagenes/IMG-20210315-WA0010.jpg" alt="bermudez-amoblamientos"></a>
      
      <div class="btn-menu">
        <div class="menu-btn_burger"></div>
      </div>
      <nav class="main-nav" id="main-nav">
          <ul class="menu">
              <li class="menu__items"><a href="Index.html" class="menu-link active">Inicio</a></li>
              <li class="menu__items container-menu__items"><a href="#productos" class="menu-link">Productos</a>
                  <ul class="sub-menu" id="sub_menu">
                      <li class="sub-items" id="sub_items"><a class="sub-link" href="indoor.html">Indoor</a></li>
                      <li class="sub-items"><a class="sub-link" href="oudoor.html">Oudoor</a></li>
                      <li class="sub-items"><a class="sub-link" href="#">Accesorios</a></li>
                  </ul>
              </li>
              <li class="menu__items"><a href="#sobre-nosotros" class="menu-link">Sobre</a></li>
              <li class="menu__items"><a href="Contacto.html" class="menu-link">Contacto</a></li>
          </ul>
      </nav>
      <div  class="main-header__container-redes">
        <a href="" class="redes-sociales"><i class="fab fa-facebook-square"></i></a>
        <a href="" class="redes-sociales"><i class="fab fa-instagram"></i></a>
        <a href="" class="redes-sociales"><i class="fab fa-whatsapp"></i></a>
      </div>
    
  </div>
  
</div>
  
           `;

  el.appendChild(headerEl);
  console.log("sadasdasd", headerEl);
}

// Animacion del menu

function menu() {
  let btnMenu = document.querySelector(".btn-menu");
  console.log(btnMenu);
  let mainNav = document.getElementById("main-nav");

  let containerMenu = document.querySelector(".container");
  let btnOpen = false;

  btnMenu.addEventListener("click", () => {
    mainNav.classList.toggle("mostrar");
    console.log(btnOpen);
    if (!btnOpen) {
      btnMenu.classList.add("open");
      btnOpen = true;
    } else {
      btnMenu.classList.remove("open");
      btnOpen = false;
    }
  });
  const menuLinks = document.querySelectorAll(".menu .menu__items .menu-link");
  console.log("menu links", menuLinks);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");

        const menuLink = document.querySelector(`.menu a[href="#${id}"]`);
        console.log("menu link", menuLink);
        if (entry.isIntersecting) {
          document
            .querySelector(".menu .menu-link.active")
            .classList.remove("active");
          console.log("soy la entry", entry);
          menuLink.classList.add("active");
        }
      });
    },
    { rootMargin: "-30% 0px -70% 0px" }
  );

  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", () => {
      if (activador) {
        menu.style.left = "0";
        menu.style.transition = "0.6s";
        activador = false;
      } else {
        activador = false;
        menu.style.left = "-100%";
        menu.style.transition = "0.6s";
        activador = true;
      }

      //listMenu.classList.remove("menu_opened");
    });

    const hash = menuLink.getAttribute("href");
    console.log("soy el hash", hash);
    const target = document.querySelector(hash);
    if (target) {
      observer.observe(target);
    }
  });

  // Intercalar la clase Active

  /*let enlaces = document.querySelectorAll(".menu li a");

  enlaces.forEach((element) => {
    element.addEventListener("click", (event) => {
      enlaces.forEach((link) => {
        link.classList.remove("active");
      });
      event.target.classList.add("active");
    });
  });*/
}
