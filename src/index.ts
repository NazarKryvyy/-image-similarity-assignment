import imagesJSON from "./data.json";
import { Image, ImageDataSet } from "./types";

const getTagsMap = (imageDataSet: ImageDataSet) => {
  const imagesEntriesList = imageDataSet && Object.entries(imageDataSet);
  const tagsMap: { [key in string]: Set<string> } = {};
  if (imagesEntriesList) {
    let imageIndex = 0;
    for (; imageIndex < imagesEntriesList.length; imageIndex++) {
      const [imageName, imageInfoList] = imagesEntriesList[imageIndex];
      let imageInfoIndex = 0;
      for (; imageInfoIndex < imageInfoList.length!; imageInfoIndex++) {
        const tagName = imageInfoList[imageInfoIndex]?.description;

        if (tagsMap[tagName]) {
          tagsMap[tagName].add(imageName);
        } else {
          tagsMap[tagName] = new Set();
          tagsMap[tagName].add(imageName);
        }
      }
    }
  }
  return tagsMap;
};

const tagsMap = getTagsMap(imagesJSON);

const getRelevantImagesFor = (image: Image, currentImageName: string) => {
  const currentImageTagsList = image?.map((imageInfo) => imageInfo.description);
  if (currentImageTagsList) {
    const imagesScores: { [key in string]: number } = {};
    let tagIndex = 0;
    for (; tagIndex < currentImageTagsList.length; tagIndex++) {
      const tagName = currentImageTagsList[tagIndex];
      const imagesListWithCurrentTag = tagsMap[tagName];

      imagesListWithCurrentTag.forEach((imageName) => {
        if (currentImageName !== imageName) {
          if (imagesScores[imageName]) {
            imagesScores[imageName] += 1;
          } else {
            imagesScores[imageName] = 1;
          }
        }
      });
    }
    return Object.entries(imagesScores)
      .sort((a, b) => (a[1] < b[1] ? 1 : -1))
      .map(([image, _]) => image);
  }
  return [];
};

console.log(getRelevantImagesFor(imagesJSON["1.jpg"], "1.jpg"));
console.log(getRelevantImagesFor(imagesJSON["2.jpg"], "2.jpg"));
console.log(getRelevantImagesFor(imagesJSON["3.jpg"], "3.jpg"));
