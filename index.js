// 🔽 Dropdown toggle
const accountBtn = document.querySelector(".account-btn");
const dropdown = document.querySelector(".dropdown");

accountBtn.addEventListener("click", () => {
  dropdown.style.display =
    dropdown.style.display === "flex" ? "none" : "flex";
});



// 📊 Sidebar tab switching logic
const sideButtons = document.querySelectorAll(".side-btn");
const dashboardMain = document.querySelector(".dashboard-main");

sideButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all
    sideButtons.forEach((b) => b.classList.remove("active"));
    // Add active to clicked
    btn.classList.add("active");

    // Change dashboard content
    const section = btn.textContent.trim();

    switch (section) {
      case "Asset":
        dashboardMain.innerHTML = `
          <div class="score-card">
            <h3>Asset Overview</h3>
            <p>Monitor and manage your assets effectively.</p>
            <div class="circle">
              <div class="inner">42<br /><span>Total Assets</span></div>
            </div>
          </div>
          <div class="chart-card">
            <h3>Asset Growth</h3>
            <div class="chart-placeholder">
              <div class="bar" style="height: 50%"></div>
              <div class="bar" style="height: 70%"></div>
              <div class="bar" style="height: 85%"></div>
              <div class="bar" style="height: 65%"></div>
              <div class="bar" style="height: 90%"></div>
            </div>
          </div>
        `;
        break;

      case "Budget":
        dashboardMain.innerHTML = `
          <div class="score-card">
            <h3>Budget Tracker</h3>
            <p>Stay on top of your financial planning.</p>
            <div class="circle">
              <div class="inner">$12K<br /><span>Current Budget</span></div>
            </div>
          </div>
          <div class="chart-card">
            <h3>Spending Overview</h3>
            <div class="chart-placeholder">
              <div class="bar" style="height: 60%"></div>
              <div class="bar" style="height: 40%"></div>
              <div class="bar" style="height: 80%"></div>
              <div class="bar" style="height: 55%"></div>
              <div class="bar" style="height: 75%"></div>
            </div>
          </div>
        `;
        break;

      case "Stock":
        dashboardMain.innerHTML = `
          <div class="score-card">
            <h3>Stock Insights</h3>
            <p>Analyze your stock performance.</p>
            <div class="circle">
              <div class="inner">+12%<br /><span>Growth</span></div>
            </div>
          </div>
          <div class="chart-card">
            <h3>Stock Comparison</h3>
            <div class="chart-placeholder">
              <div class="bar" style="height: 85%"></div>
              <div class="bar" style="height: 60%"></div>
              <div class="bar" style="height: 95%"></div>
              <div class="bar" style="height: 70%"></div>
              <div class="bar" style="height: 80%"></div>
            </div>
          </div>
        `;
        break;

      case "PageSpeed":
        dashboardMain.innerHTML = `
          <div class="top-row">
            <div class="score-card">
              <h3>Speed Score</h3>
              <p class="subtext">Best score based on PageSpeed Insights</p>
              <div class="circle">
                <div class="inner">100<br /><span>Out of 100</span></div>
              </div>
            </div>

            <div class="chart-card">
              <h3>120k</h3>
              <p>Page Views : 30 Days</p>
              <div class="chart-placeholder">
                <div class="bar" style="height: 60%"></div>
                <div class="bar" style="height: 75%"></div>
                <div class="bar" style="height: 55%"></div>
                <div class="bar" style="height: 85%"></div>
                <div class="bar" style="height: 65%"></div>
                <div class="bar" style="height: 95%"></div>
                <div class="bar" style="height: 70%"></div>
              </div>
            </div>
          </div>

          <div class="bottom-row">
            <div class="links-card">
              <h4>Google Performance Score</h4>
              <ul>
                <li><a href="#">rabbitloader.com/articles/</a></li>
                <li><a href="#">rabbitloader.com/kb/achieve-lowest-page-load-time/</a></li>
                <li><a href="#">rabbitloader.com/kb/purging-cache-wordpress-plugin/</a></li>
                <li><a href="#">rabbitloader.com/kb/setting-page-rules/</a></li>
              </ul>
              <button class="analyze-btn">Analyze now</button>
            </div>

            <div class="compare-card">
              <div class="compare-box">
                <p>Without RabbitLoader</p>
                <div class="compare-circle orange">55</div>
              </div>
              <div class="compare-box">
                <p>With RabbitLoader</p>
                <div class="compare-circle green">98</div>
              </div>
            </div>
          </div>
        `;
        break;
    }
  });
});


// Tab click event
sideButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    sideButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const tabName = btn.textContent.trim();
    dashboardMain.innerHTML = dashboardContent[tabName] || "<p>No data available</p>";

    // Small fade-in effect
    dashboardMain.style.opacity = 0;
    setTimeout(() => {
      dashboardMain.style.opacity = 1;
    }, 150);
  });
});
