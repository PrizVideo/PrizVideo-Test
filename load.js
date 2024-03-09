document.addEventListener("DOMContentLoaded", function () {
  function createElement(tag, attributes = {}) {
    const element = document.createElement(tag);
    for (const key in attributes) {
      element[key] = attributes[key];
    }
    return element;
  }

  let isDarkMode = true;

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;

    document.body.classList.toggle('dark-mode', isDarkMode);
    updateOptionsMenu();

    localStorage.setItem("darkMode", isDarkMode ? "on" : "off");
  }

  const savedDarkMode = localStorage.getItem("darkMode");
  if (savedDarkMode) {
    isDarkMode = savedDarkMode === "on";
    toggleDarkMode();
  }

  const topBar = createElement("div", { className: "top-bar" });

  const logo = createElement("div", { className: "logo" });
  const logoLink = createElement("a", {
    href: "https://prizvideo.github.io/PrizVideo-Main/",
    innerHTML: "<b>PrizVideo Beta</b>",
  });
  logo.appendChild(logoLink);

  const searchInput = createElement("input", {
    type: "search",
    placeholder: "Search",
  });

  const searchButton = createElement("button", {
    innerHTML: "Search",
    onclick: function () {
      searchresults();
    },
  });

  const liveTVButton = createElement("button", {
    innerHTML: "Live TV",
  });

  const optionsButton = createElement("button", {
    innerHTML: "Options",
    onclick: function () {
      showOptions();
    },
  });

  topBar.append(logo, searchInput, searchButton, liveTVButton, optionsButton);

  const infoArea = createElement("div", { className: "info-area" });

  const infoTextBox = createElement("div", {
    className: "info-text-box",
  });

  const infoText = createElement("p", {
    innerHTML:
      "Hello! This is still in a testing phase, and it is impossible to create an account, nor upload. However, you can enjoy the work we are putting into it by exploring the site. Goodbye!",
    style: "text-align: center;",
  });

  infoTextBox.appendChild(infoText);

  const footer = createElement("footer", {
    innerHTML: "<hr><p>© Copyright PrizVideo 2024</p>",
  });

  infoArea.append(footer, infoTextBox);

  document.body.append(topBar, infoArea);

  function showOptions() {
    let optionsMenu = document.querySelector(".options-menu");
    if (!optionsMenu) {
      optionsMenu = createElement("div", {
        className: "options-menu",
      });

      const optionsContent = createElement("div", {
        className: "options-content",
      });

      const optionsPanelText = createElement("h2", {
        innerHTML: "Options Panel",
        style: "margin-bottom: 20px;",
      });

      const darkModeToggleLabel = createElement("label", {
        innerHTML: "Dark Mode",
        style: "margin-bottom: 10px; display: block;",
      });

      const darkModeSwitch = createElement("input", {
        type: "checkbox",
        id: "darkModeSwitch",
        checked: isDarkMode,
        onchange: function () {
          toggleDarkMode();
        },
      });

      darkModeToggleLabel.appendChild(darkModeSwitch);

      const historyButton = createElement("button", {
        innerHTML: "History Page",
        onclick: function () {
          showHistory();
        },
      });

      const accountButton = createElement("button", {
        innerHTML: "Account Page",
        onclick: function () {
          // Navigate to account page
        },
      });

      const librariesButton = createElement("button", {
        innerHTML: "Libraries Page",
        onclick: function () {
          // Navigate to libraries page
        },
      });

      const exitButton = createElement("button", {
        innerHTML: "Exit",
        onclick: function () {
          document.body.removeChild(optionsMenu);
        },
      });

      optionsContent.append(optionsPanelText, darkModeToggleLabel, historyButton, accountButton, librariesButton, exitButton);
      optionsMenu.appendChild(optionsContent);
      document.body.appendChild(optionsMenu);
    }
  }

  function showHistory() {
    let historyPopup = document.querySelector(".history-popup");
    if (!historyPopup) {
      historyPopup = createElement("div", {
        className: "history-popup",
      });

      const historyContent = createElement("div", {
        className: "history-content",
        style: `
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90%;
          height: 90%;
          background: ${isDarkMode ? "#1a1a1a" : "white"};
          padding: 20px;
          border-radius: 10px;
          color: ${isDarkMode ? "#ffffff" : "#000000"};
          transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
          overflow-y: auto;
        `,
      });

      const watchedVideos = JSON.parse(localStorage.getItem("watchedVideos")) || [];

      if (watchedVideos.length === 0) {
        const noHistoryText = createElement("p", {
          innerHTML: "No videos watched yet.",
          style: "text-align: center;",
        });
        historyContent.appendChild(noHistoryText);
      } else {
        const historyList = createElement("ul");
        watchedVideos.forEach(video => {
          const listItem = createElement("li", { innerHTML: video });
          historyList.appendChild(listItem);
        });
        historyContent.appendChild(historyList);
      }

      const closeButton = createElement("button", {
        innerHTML: "Close",
        onclick: function () {
          document.body.removeChild(historyPopup);
        },
      });

      historyPopup.appendChild(historyContent);
      historyPopup.appendChild(closeButton);
      document.body.appendChild(historyPopup);
    }
  }

  function updateOptionsMenu() {
    const darkModeSwitch = document.querySelector("#darkModeSwitch");
    if (darkModeSwitch) {
      darkModeSwitch.checked = isDarkMode;
    }
  }
});
