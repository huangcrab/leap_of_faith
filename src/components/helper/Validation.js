export function validateContent(data) {
  const body = data.body_en;
  const overlay_id = data.overlay_id;

  const validation = {
    hasImage: false,
    hasIntegration: false,
    hasOverlay: false,
    hasLink: false
  };
  if (body) {
    if (body.search(/{{.*}}/g) !== -1) {
      validation.hasIntegration = true;
    }

    if (body.indexOf("http") !== -1) {
      validation.hasLink = true;
    }

    if (body.indexOf(".jpg") !== -1 || body.indexOf(".png") !== -1) {
      validation.hasImage = true;
    }

    if (overlay_id !== "") {
      validation.hasOverlay = true;
    }
  }

  return validation;
}
