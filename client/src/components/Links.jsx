import React from 'react'

const Links = () => {
  return (
    <div id="links-sec" class="links-section">
      <script
        src="https://kit.fontawesome.com/bfa8aba362.js"
        crossorigin="anonymous"
      ></script>
      <div class="vectors-space">
        <div class="vector v-linkedin">
          <a href='https://www.linkedin.com/in/carolina-sandoval-santiago/'>
            <i class="fa-brands fa-linkedin fa-2xl" style={{ color: "#fff" }}></i>
          </a>
        </div>

        <div class="vector v-whatsapp">
          <a href="https://wa.me/523320553428">
            <i class="fa-brands fa-whatsapp fa-2xl" style={{ color: "#fff" }}></i>
          </a>
        </div>
        <div class="vector v-github">
          <a href= 'https://github.com/ambersanti1'>
            <i class="fa-brands fa-github fa-2xl" style={{ color: "#fff" }}></i>
          </a>
        </div>
        {/* <div class="vector v-gmail">
            <i
              class="fa-regular fa-envelope fa-2xl"
              style={{ color: "#fff" }}
            ></i>
        </div> */}
      </div>
    </div>
  );
}

export default Links