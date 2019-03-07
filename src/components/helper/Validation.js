export function validateContent(body) {
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
  }

  return validation;
}
