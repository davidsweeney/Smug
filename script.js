const config = window.PORTFOLIO_CONFIG || {};

if (config.name) {
  document.title = document.title.replace("Your Name", config.name);
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.content = description.content.replace("Your Name", config.name);
  }
}

document.querySelectorAll("[data-bind]").forEach((element) => {
  const key = element.dataset.bind;
  if (config[key]) element.textContent = config[key];
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("[data-nav]").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});

const galleryDialog = document.querySelector("#gallery-dialog");
if (galleryDialog) {
  const dialogImage = galleryDialog.querySelector("img");
  const dialogTitle = galleryDialog.querySelector("[data-dialog-title]");

  document.querySelectorAll("[data-gallery-item]").forEach((button) => {
    button.addEventListener("click", () => {
      dialogImage.src = button.dataset.image;
      dialogImage.alt = button.dataset.alt;
      dialogTitle.textContent = button.dataset.title;
      galleryDialog.showModal();
    });
  });

  galleryDialog.querySelector("[data-close]").addEventListener("click", () => {
    galleryDialog.close();
  });

  galleryDialog.addEventListener("click", (event) => {
    if (event.target === galleryDialog) galleryDialog.close();
  });
}

function toEmbedUrl(value) {
  if (!value) return "";
  try {
    const url = new URL(value);
    if (url.hostname.includes("youtu.be")) {
      return `https://www.youtube-nocookie.com/embed/${url.pathname.slice(1)}`;
    }
    if (url.hostname.includes("youtube.com")) {
      const id = url.searchParams.get("v");
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : value;
    }
    if (url.hostname.includes("vimeo.com") && /^\/\d+/.test(url.pathname)) {
      return `https://player.vimeo.com/video/${url.pathname.split("/")[1]}`;
    }
    return url.protocol === "https:" ? value : "";
  } catch {
    return "";
  }
}

const videoMount = document.querySelector("[data-video-mount]");
if (videoMount) {
  const embedUrl = toEmbedUrl(config.videoUrl);
  if (embedUrl) {
    const frame = document.createElement("iframe");
    frame.src = embedUrl;
    frame.title = `${config.name || "Portfolio"} video`;
    frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.allowFullscreen = true;
    videoMount.replaceChildren(frame);
    videoMount.classList.add("has-media");
  }
}

const audioMount = document.querySelector("[data-audio-mount]");
if (audioMount && config.audioSrc) {
  const audio = document.createElement("audio");
  audio.controls = true;
  audio.preload = "metadata";
  audio.src = config.audioSrc;
  audioMount.replaceChildren(audio);
  audioMount.classList.add("has-media");
}

const menuButton = document.querySelector("[data-menu-button]");
const navigation = document.querySelector("[data-navigation]");
if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.dataset.open = String(!isOpen);
  });
}
