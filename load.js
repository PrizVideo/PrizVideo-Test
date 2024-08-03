'use strict';

document.addEventListener("DOMContentLoaded", function () {
  const state = {
    isDarkMode: localStorage.getItem("darkMode") === "on",
    currentUser: null,
    videos: []
  };

  function createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);
    for (const key in attributes) {
      if (key.startsWith('on') && typeof attributes[key] === 'function') {
        element.addEventListener(key.slice(2).toLowerCase(), attributes[key]);
      } else {
        element[key] = attributes[key];
      }
    }
    children.forEach(child => element.appendChild(child));
    return element;
  }

  function toggleDarkMode() {
    state.isDarkMode = !state.isDarkMode;
    updateTheme();
    localStorage.setItem("darkMode", state.isDarkMode ? "on" : "off");
  }

  function updateTheme() {
    document.body.style.backgroundColor = state.isDarkMode ? "#1a1a1a" : "#ffffff";
    document.body.style.color = state.isDarkMode ? "#ffffff" : "#000000";
  }

  function createTopBar() {
    const searchInput = createElement("input", { type: "search", placeholder: "Search videos" });
    const searchButton = createElement("button", { innerHTML: "Search", onclick: searchVideos });
    const uploadButton = createElement("button", { innerHTML: "Upload", onclick: showUploadModal });
    const optionsButton = createElement("button", { innerHTML: "Options", onclick: showOptions });

    return createElement("div", { className: "top-bar" }, [
      createElement("div", { className: "logo" }, [
        createElement("a", { href: "#", innerHTML: "<b>PrizVideo Beta</b>" })
      ]),
      searchInput,
      searchButton,
      uploadButton,
      optionsButton
    ]);
  }

  function createMainContent() {
    return createElement("main", { id: "main-content" }, [
      createElement("h2", { innerHTML: "Featured Videos" }),
      createElement("div", { id: "video-grid", className: "video-grid" })
    ]);
  }

  function createFooter() {
    return createElement("footer", {}, [
      createElement("p", { innerHTML: "© Copyright PrizVideo 2024" })
    ]);
  }

  function showOptions() {
    const optionsMenu = createElement("div", { className: "modal" }, [
      createElement("div", { className: "modal-content" }, [
        createElement("h2", { innerHTML: "Options" }),
        createElement("label", {}, [
          createElement("input", { type: "checkbox", checked: state.isDarkMode, onchange: toggleDarkMode }),
          document.createTextNode(" Dark Mode")
        ]),
        createElement("button", { innerHTML: "Close", onclick: () => optionsMenu.remove() })
      ])
    ]);
    document.body.appendChild(optionsMenu);
  }

  function showUploadModal() {
    const uploadModal = createElement("div", { className: "modal" }, [
      createElement("div", { className: "modal-content" }, [
        createElement("h2", { innerHTML: "Upload Video" }),
        createElement("input", { type: "file", accept: "video/*" }),
        createElement("input", { type: "text", placeholder: "Video Title" }),
        createElement("textarea", { placeholder: "Video Description" }),
        createElement("button", { innerHTML: "Upload", onclick: uploadVideo }),
        createElement("button", { innerHTML: "Cancel", onclick: () => uploadModal.remove() })
      ])
    ]);
    document.body.appendChild(uploadModal);
  }

  function uploadVideo() {
    console.log("Upload Complete. Updating PrizVideo and video grid...");
    updateVideoGrid();
  }

  function searchVideos() {
    console.log("Searching query...");
    updateVideoGrid();
  }

  function updateVideoGrid() {
    const videoGrid = document.getElementById("video-grid");
    videoGrid.innerHTML = "";

    const mockVideos = [
      { id: 1, title: "First Person to Crush Their Balls With a Rock Gets 1B Dollars!!1!11!", thumbnail: "content/testthumb.png" },
      { id: 2, title: "The Journey to Making PrizVideo", thumbnail: "content/testthumb2.png" },
    ];

    mockVideos.forEach(video => {
      const videoElement = createElement("div", { className: "video-item" }, [
        createElement("img", { src: video.thumbnail, alt: video.title }),
        createElement("h3", { innerHTML: video.title }),
        createElement("button", { innerHTML: "Play", onclick: () => playVideo(video.id) })
      ]);
      videoGrid.appendChild(videoElement);
    });
  }

  function playVideo(videoId) {
    console.log(`Playing video with ID: ${videoId}`);
  }

  function initApp() {
    document.body.appendChild(createTopBar());
    document.body.appendChild(createMainContent());
    document.body.appendChild(createFooter());
    updateTheme();
    updateVideoGrid();
  }

  initApp();
});
