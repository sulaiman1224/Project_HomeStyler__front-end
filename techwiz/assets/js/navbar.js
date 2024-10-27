document.getElementById('navbar').innerHTML+=`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="z-index:100;">
  <div class="container d-flex main_nav">
    <a class="navbar-brand me-5" href="#"><img src="assets/img/logo.png" alt="" height="50px" width="50px"style="border-radius: 10px;"></a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >Design Style</a
          >
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="living_room.html">Living room</a>
            </li>
            <li><a class="dropdown-item" href="kitchen.html">Kitchen</a></li>
            <li><a class="dropdown-item" href="bedroom.html">Bedroom</a></li>
            <li><a class="dropdown-item" href="elegant.html">Elegant</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="gallery.html">Gallery</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >Products</a
          >
          <ul class="dropdown-menu">
            <li class="nav-item dropend">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Furniture</a
              >
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="sofa.html"
                    >Sofas and Couches</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="chairs.html"
                    >Chairs and Recliners</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="tables.html"
                    >Tables (Dining, Coffee, Side)</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="storage.html"
                    >Storage (Cabinets, Shelves, Dressers)</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item dropend">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Lighting</a
              >
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="cellinglight.html"
                    >Ceiling Lights</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="lamps.html">Floor Lamps</a>
                </li>
                <li>
                  <a class="dropdown-item" href="outdoorlighting.html"
                    >Outdoor Lighting</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item dropend">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Kitchen</a
              >
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="cabinets.html"
                    >Cabinets and Pantries</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="countertop.html"
                    >Countertops</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="backsplashes.html"
                    >Backsplashes</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="feedback.html">Feedback</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about.html">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="all_products.html">All products</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


`