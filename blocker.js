document.addEventListener("DOMContentLoaded", function () {
    document.body.innerHTML = `
      <div style="
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-family: sans-serif;
        background-color: #111;
        color: #f00;
        text-align: center;
        padding: 20px;
      ">
        <div>
          <h1>Website Error</h1>
          <p>We're sorry, but the website is currently unavailable. Please try again later.</p>
        </div>
      </div>
    `;
  
    // // Stop all scripts
    // const scripts = document.querySelectorAll("script");
    // scripts.forEach(script => script.remove());
  });
  