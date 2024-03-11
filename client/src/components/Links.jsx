import React from 'react'

const Links = () => {
  return (
    <>
      <div className = "links-text-container">
        <p>Find me on these online spaces too!</p>
        <div id="links-sec" class="links-section">
          <script
            src="https://kit.fontawesome.com/bfa8aba362.js"
            crossorigin="anonymous"
          ></script>
          <div class="vectors-space">
            <div class="vector v-linkedin">
              <a href="https://www.linkedin.com/in/carolina-sandoval-santiago/">
                <i
                  class="fa-brands fa-linkedin fa-xl"
                  style={{ color: "#fff" }}
                ></i>
              </a>
            </div>

            <div class="vector v-whatsapp">
              <a href="https://wa.me/523320553428">
                <i
                  class="fa-brands fa-whatsapp fa-xl"
                  style={{ color: "#fff" }}
                ></i>
              </a>
            </div>
            <div class="vector v-github">
              <a href="https://github.com/ambersanti1">
                <i
                  class="fa-brands fa-github fa-xl"
                  style={{ color: "#fff" }}
                ></i>
              </a>
            </div>
            <div class="vector v-gmail">
              <i
                class="fa-brands fa-instagram fa-xl"
                style={{ color: "#fff" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Links