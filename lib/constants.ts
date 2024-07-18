export const DOCUMENT_TYPES = [
  ".pdf",
  ".xls",
  ".xlsx",
  ".doc",
  ".docs",
  ".ppt",
  ".pptx",
];

export const IMAGE_TYPES = [".jpeg", ".png"];

export const VIDEO_TYPES = [".3gp", ".mp4"];

export function getAcceptTypes(type: string):string {
  if (type === "document") {
    return DOCUMENT_TYPES.join(",");
  } else if (type === "image") {
    return IMAGE_TYPES.join(",");
  } else if (type === "video") {
    return VIDEO_TYPES.join(",");
  } else if (type === "all") {
    return [...DOCUMENT_TYPES, ...IMAGE_TYPES, ...VIDEO_TYPES].join(",");
  } else {
    return "";
  }
}
