import React, { useState, useEffect } from "react";
import "../styles/LandingPage.css";
import front from '../images/front.png';
import back from '../images/back.png';
import right from '../images/right.png';
import left from '../images/left.png';
import top from '../images/top.png';
import bottom from '../images/bottom.png';
import logo from "../images/logo.png";
import { Navigate, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Work");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    // Apply theme to <body> or root wrapper
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);


  const handleredirect = () => {
    navigate('/login')
  }
  const dashboardContent = {
    Asset: (
      <div className="score-card">
        <h3>Asset Overview</h3>
        <p>Track and manage your assets efficiently.</p>
        <div className="circle">
          <div className="inner">
            42<br />
            <span>Total Assets</span>
          </div>
        </div>
      </div>
    ),
    Budget: (
      <div className="score-card">
        <h3>Budget Summary</h3>
        <p>Stay on top of your financial goals.</p>
        <div className="circle">
          <div className="inner">
            $12K<br />
            <span>Current Budget</span>
          </div>
        </div>
      </div>
    ),
    Inventory: (
      <div className="score-card">
        <h3>Inventory Overview</h3>
        <p>Monitor your stock and supply efficiently.</p>
        <div className="circle">
          <div className="inner">
            320<br />
            <span>Items Available</span>
          </div>
        </div>
      </div>
    ),
    Work: (
      <>
        <div className="top-row">
          <div className="score-card">
            <h3>Speed Score</h3>
            <p className="subtext">Best score based on PageSpeed Insights</p>
            <div className="circle">
              <div className="inner">
                100<br />
                <span>Out of 100</span>
              </div>
            </div>
          </div>

          <div className="chart-card">
            <h3>120k</h3>
            <p>Page Views : 30 Days</p>
            <div className="chart-placeholder">
              {["60%", "75%", "55%", "85%", "65%", "95%", "70%"].map((h, i) => (
                <div key={i} className="bar" style={{ height: h }}></div>
              ))}
            </div>
          </div>
        </div>

        <div className="bottom-row">
          <div className="links-card">
            <h4>Google Performance Score</h4>
            <ul>
              <li><a href="#">rabbitloader.com/articles/</a></li>
              <li><a href="#">rabbitloader.com/kb/achieve-lowest-page-load-time/</a></li>
              <li><a href="#">rabbitloader.com/kb/purging-cache-wordpress-plugin/</a></li>
              <li><a href="#">rabbitloader.com/kb/setting-page-rules/</a></li>
            </ul>
            <button className="analyze-btn">Analyze now</button>
          </div>

          <div className="compare-card">
            <div className="compare-box">
              <p>Without RabbitLoader</p>
              <div className="compare-circle orange">55</div>
            </div>
            <div className="compare-box">
              <p>With RabbitLoader</p>
              <div className="compare-circle green">98</div>
            </div>
          </div>
        </div>
      </>
    ),
  };

  return (
    <div className={`landing-page ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      {/* 🔝 Navbar */}
      <header>
        <div className="company_container">
          <div className="logo">
            <img src={logo} alt="Vaultify" />
          </div>
        </div>

        <div className="account-menu">
          <button className="account-btn" onClick={toggleDropdown}>
            My Account ▼
          </button>

          {dropdownOpen && (
            <div className="dropdown">
              <button onClick={handleredirect} >
                Sign Up
              </button>

              {/* 🌗 Theme Toggle Switch */}
              <label className="plane-switch">
                <input type="checkbox" checked={!isDarkMode} onChange={toggleTheme} />
                <div>
                  <div>
                    <svg viewBox="0 0 13 13">
                      <path
                        d="M1.55989957,5.41666667 L5.51582215,5.41666667 L4.47015462,0.108333333 L4.47015462,0.108333333 C4.47015462,0.0634601974 4.49708054,0.0249592654 4.5354546,0.00851337035 L4.57707145,0 L5.36229752,0 C5.43359776,0 5.50087375,0.028779451 5.55026392,0.0782711996 L5.59317877,0.134368264 L7.13659662,2.81558333 L8.29565964,2.81666667 C8.53185377,2.81666667 8.72332694,3.01067661 8.72332694,3.25 C8.72332694,3.48932339 8.53185377,3.68333333 8.29565964,3.68333333 L7.63589819,3.68225 L8.63450135,5.41666667 L11.9308317,5.41666667 C12.5213171,5.41666667 13,5.90169152 13,6.5 C13,7.09830848 12.5213171,7.58333333 11.9308317,7.58333333 L8.63450135,7.58333333 L7.63589819,9.31666667 L8.29565964,9.31666667 C8.53185377,9.31666667 8.72332694,9.51067661 8.72332694,9.75 C8.72332694,9.98932339 8.53185377,10.1833333 8.29565964,10.1833333 L7.13659662,10.1833333 L5.59317877,12.8656317 C5.55725264,12.9280353 5.49882018,12.9724157 5.43174295,12.9907056 L5.36229752,13 L4.57707145,13 L4.55610333,12.9978962 C4.51267695,12.9890959 4.48069792,12.9547924 4.47230803,12.9134397 L4.47223088,12.8704208 L5.51582215,7.58333333 L1.55989957,7.58333333 Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <span className="street-middle"></span>
                  <span className="cloud"></span>
                  <span className="cloud two"></span>
                </div>
              </label>
            </div>
          )}
        </div>
      </header>

      {/* 🌄 Hero Section */}
      <section className="hero">
        <div className="hero_left">
          <h1>Welcome to Your Next Experience</h1>
          <p>
            Explore seamless solutions, manage your data with ease, and grow your
            business efficiently — all in one platform.
          </p>
        </div>

        <div className="hero_right">
          <div className="scene">
            <div className="cube">
              <div className="face front" style={{ backgroundImage: `url(${front})` }}></div>
              <div className="face back" style={{ backgroundImage: `url(${back})` }}></div>
              <div className="face right" style={{ backgroundImage: `url(${right})` }}></div>
              <div className="face left" style={{ backgroundImage: `url(${left})` }}></div>
              <div className="face top" style={{ backgroundImage: `url(${top})` }}></div>
              <div className="face bottom" style={{ backgroundImage: `url(${bottom})` }}></div>
            </div>
            <div className="glow"></div>
          </div>
        </div>
      </section>

      {/* 💻 Dashboard Section */}
      <section className="dashboard-section">
        <div className="dashboard-container">
          <aside className="sidebar">
            <h2 className="logo">VAULTIFLY</h2>
            {["Asset", "Budget", "Inventory", "Work"].map((tab) => (
              <button
                key={tab}
                className={`side-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
            <button className={`signup-btn ${isDarkMode ? "dark-mode" : "light-mode"}`}>Signup Now</button>
          </aside>

          <main className="dashboard-main">{dashboardContent[activeTab]}</main>
        </div>
      </section>

      {/* 💎 Plans Section */}
      <section className={`plans ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <h2>Choose Your Plan</h2>
        <div className="plan-container">
          {[
            { name: "Silver", price: "$9/month", features: ["Basic Dashboard", "Email Support", "Limited Access"] },
            { name: "Platinum", price: "$29/month", features: ["Advanced Dashboard", "Priority Support", "Full Access"] },
            { name: "Diamond", price: "$59/month", features: ["All Features", "24/7 Support", "Exclusive Updates"] },
          ].map((plan) => (
            <div className="plan" key={plan.name}>
              <div className="plan_tag"><h3>{plan.name}</h3></div>
              <p className={`slogan ${isDarkMode ? "dark-mode" : "light-mode"}`}>
                {plan.name === "Silver"
                  ? "Everything you need to get started"
                  : plan.name === "Platinum"
                  ? "More tools and power for growth"
                  : "Enjoy optimised performance & guaranteed"}
              </p>
              <h2 className={`price ${isDarkMode ? "dark-mode" : "light-mode"}`}>{plan.price}</h2>
              <ul>
                {plan.features.map((f, i) => (
                  <li key={i}><span className="verify_icon">&#9745;</span> {f}</li>
                ))}
              </ul>
              <button
  onClick={() => navigate("/order-summary", { state: { plan } })}
>
  Subscribe
</button>


            </div>
          ))}
        </div>
      </section>

      <footer className={`footer ${isDarkMode ? "dark-mode" : "light-mode"}`}>© 2025 Vaultify. All rights reserved.</footer>
    </div>
  );
};

export default LandingPage;
