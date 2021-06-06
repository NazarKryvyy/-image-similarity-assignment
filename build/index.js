"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var img1 = [
    {
        locations: [],
        properties: [],
        mid: "/m/0c9ph5",
        locale: "",
        description: "Flower",
        score: 0.9955990314483643,
        confidence: 0,
        topicality: 0.9955990314483643,
        boundingPoly: null,
    },
    {
        locations: [],
        properties: [],
        mid: "/m/04sjm",
        locale: "",
        description: "Flowering plant",
        score: 0.9854584336280823,
        confidence: 0,
        topicality: 0.9854584336280823,
        boundingPoly: null,
    },
    {
        locations: [],
        properties: [],
        mid: "/m/05s2s",
        locale: "",
        description: "Plant",
        score: 0.9635068774223328,
        confidence: 0,
        topicality: 0.9635068774223328,
        boundingPoly: null,
    },
    {
        locations: [],
        properties: [],
        mid: "/m/016q19",
        locale: "",
        description: "Petal",
        score: 0.9434597492218018,
        confidence: 0,
        topicality: 0.9434597492218018,
        boundingPoly: null,
    },
    {
        locations: [],
        properties: [],
        mid: "/m/01l6ls",
        locale: "",
        description: "Geraniaceae",
        score: 0.7377576231956482,
        confidence: 0,
        topicality: 0.7377576231956482,
        boundingPoly: null,
    },
    {
        locations: [],
        properties: [],
        mid: "/m/03f956",
        locale: "",
        description: "Melastome family",
        score: 0.6984411478042603,
        confidence: 0,
        topicality: 0.6984411478042603,
        boundingPoly: null,
    },
    {
        locations: [],
        properties: [],
        mid: "/m/0frtt",
        locale: "",
        description: "Geranium",
        score: 0.6628906726837158,
        confidence: 0,
        topicality: 0.6628906726837158,
        boundingPoly: null,
    },
    {
        locations: [],
        properties: [],
        mid: "/m/03f35r",
        locale: "",
        description: "Wildflower",
        score: 0.6627543568611145,
        confidence: 0,
        topicality: 0.6627543568611145,
        boundingPoly: null,
    },
    {
        locations: [],
        properties: [],
        mid: "/m/01l6kn",
        locale: "",
        description: "Geraniales",
        score: 0.6070078611373901,
        confidence: 0,
        topicality: 0.6070078611373901,
        boundingPoly: null,
    },
    {
        locations: [],
        properties: [],
        mid: "/m/036p57",
        locale: "",
        description: "Perennial plant",
        score: 0.5034953355789185,
        confidence: 0,
        topicality: 0.5034953355789185,
        boundingPoly: null,
    },
];
//Data preparation and normalization
var imageList = Object.keys(data_1.images);
var imagesWithTags = imageList.reduce(function (acc, key) {
    var _a;
    return __assign(__assign({}, acc), (_a = {}, _a[key] = data_1.images[key].map(function (image) { return image.description; }), _a));
}, {});
//@ts-ignore
var tagsList = Array.from(new Set(Object.values(imagesWithTags).flat()));
var imagesWithTagsEntries = Object.entries(imagesWithTags);
// const tagsWithImages = tagsList.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: imagesWithTagsEntries
//       .filter(([_, tagsList]) => tagsList.includes(tag))
//       .map(([image, _]) => image),
//   };
// }, {});
///
var getNormalizeData = function () {
    var imageEntriesList = Object.entries(data_1.images);
    var tags = {};
    for (var i = 0; i < imageEntriesList.length; i++) {
        var _a = imageEntriesList[i], image = _a[0], imageInfoList = _a[1];
        console.log(imageInfoList);
        for (var j = 0; j < imageInfoList.length; j++) {
            var imageInfo = imageInfoList[j];
            if (tags[imageInfo.description]) {
                tags[imageInfo.description].add(image);
            }
            else {
                tags[imageInfo.description[j]] = new Set([image]);
            }
        }
    }
    console.log({ tags: tags });
};
getNormalizeData();
// const findRelevantImg = (image) => {
//   const currentImageTagsList = image.map((image) => image.description);
//   const imagePoints = {};
//   for (let i = 0; i < imageList.length; i++) {
//     for (let j = 0; j < currentImageTagsList.length; j++) {
//       if (tagsWithImages[currentImageTagsList[j]].includes(imageList[i])) {
//         if (imagePoints[imageList[i]]) {
//           imagePoints[imageList[i]] += 1;
//         } else {
//           imagePoints[imageList[i]] = 1;
//         }
//       }
//     }
//   }
//   const imageListByRelevancy = Object.entries(imagePoints)
//     .sort((a, b) => (a[1] < b[1] ? 1 : -1))
//     .map(([image, _]) => image);
//   // console.log(imagePoints, imageListByRelevancy);
// };
// findRelevantImg(img1);
// console.log(tagsWithImages);
// console.log(imagesWithTags);
