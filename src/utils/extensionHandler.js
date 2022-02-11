const imgExts = ["jpg", "png", "jpeg", "gif"];
const docExts = ["doc", "docx", "pdf", "txt", "ppt", "xls", "xlsx"];
const videoExts = ["mp4", "mov", "avi", "webm"];
const musicExts = ["mp3", "wma"];

export default function extensionHandler(name) {
  const charsArr = name.split(".");
  const ext = charsArr[charsArr.length - 1];
  if (imgExts.includes(ext)) {
    return "img";
  } else if (docExts.includes(ext)) {
    return "doc";
  } else if (videoExts.includes(ext)) {
    return "vid";
  } else if (musicExts.includes(ext)) {
    return "msc";
  }
}
