const frontend = ["javascript", "html", "css", "typescript"];
const backend = ["python", "go", "nodejs", "php", ".net"];
const mobile = ["android", "ios", "kotlin", "java", "objective-c"];

const frontendSVG = "build/svg/programacion.svg";
const backendSVG = "build/svg/backend.svg";
const mobileSVG = "build/svg/mobile-app.svg";

export const projectTypeImage = (language) => {
  let imageType = "";
  if (language) {
    if (frontend.includes(language.toLowerCase())) {
      imageType = frontendSVG;
    } else if (backend.includes(language.toLowerCase())) {
      imageType = backendSVG;
    } else if (mobile.includes(language.toLowerCase())) {
      imageType = mobileSVG;
    }
  }

  if (!imageType) {
    imageType = frontendSVG;
  }

  return imageType;
};

export const projectTypeClass = (language) => {
  let classStyle = "";
  if (language) {
    if (frontend.includes(language.toLowerCase())) {
      classStyle = "isotope-item col-md-6 mb-5 frontend webapp";
    } else if (backend.includes(language.toLowerCase())) {
      classStyle = "isotope-item col-md-6 mb-5 backend webapp";
    } else if (mobile.includes(language.toLowerCase())) {
      classStyle = "isotope-item col-md-6 mb-5 mobileapp";
    }
  }

  if (!classStyle) {
    classStyle = "isotope-item col-md-6 mb-5 frontend";
  }
  return classStyle;
};
