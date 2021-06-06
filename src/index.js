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
var data_ts_1 = require("./data.json");
var img1 = [
    {
        "locations": [],
        "properties": [],
        "mid": "/m/0c9ph5",
        "locale": "",
        "description": "Flower",
        "score": 0.9955990314483643,
        "confidence": 0,
        "topicality": 0.9955990314483643,
        "boundingPoly": null
    },
    {
        "locations": [],
        "properties": [],
        "mid": "/m/04sjm",
        "locale": "",
        "description": "Flowering plant",
        "score": 0.9854584336280823,
        "confidence": 0,
        "topicality": 0.9854584336280823,
        "boundingPoly": null
    },
    {
        "locations": [],
        "properties": [],
        "mid": "/m/05s2s",
        "locale": "",
        "description": "Plant",
        "score": 0.9635068774223328,
        "confidence": 0,
        "topicality": 0.9635068774223328,
        "boundingPoly": null
    },
    {
        "locations": [],
        "properties": [],
        "mid": "/m/016q19",
        "locale": "",
        "description": "Petal",
        "score": 0.9434597492218018,
        "confidence": 0,
        "topicality": 0.9434597492218018,
        "boundingPoly": null
    },
    {
        "locations": [],
        "properties": [],
        "mid": "/m/01l6ls",
        "locale": "",
        "description": "Geraniaceae",
        "score": 0.7377576231956482,
        "confidence": 0,
        "topicality": 0.7377576231956482,
        "boundingPoly": null
    },
    {
        "locations": [],
        "properties": [],
        "mid": "/m/03f956",
        "locale": "",
        "description": "Melastome family",
        "score": 0.6984411478042603,
        "confidence": 0,
        "topicality": 0.6984411478042603,
        "boundingPoly": null
    },
    {
        "locations": [],
        "properties": [],
        "mid": "/m/0frtt",
        "locale": "",
        "description": "Geranium",
        "score": 0.6628906726837158,
        "confidence": 0,
        "topicality": 0.6628906726837158,
        "boundingPoly": null
    },
    {
        "locations": [],
        "properties": [],
        "mid": "/m/03f35r",
        "locale": "",
        "description": "Wildflower",
        "score": 0.6627543568611145,
        "confidence": 0,
        "topicality": 0.6627543568611145,
        "boundingPoly": null
    },
    {
        "locations": [],
        "properties": [],
        "mid": "/m/01l6kn",
        "locale": "",
        "description": "Geraniales",
        "score": 0.6070078611373901,
        "confidence": 0,
        "topicality": 0.6070078611373901,
        "boundingPoly": null
    },
    {
        "locations": [],
        "properties": [],
        "mid": "/m/036p57",
        "locale": "",
        "description": "Perennial plant",
        "score": 0.5034953355789185,
        "confidence": 0,
        "topicality": 0.5034953355789185,
        "boundingPoly": null
    }
];
//Data preparation and normalization
var imageList = Object.keys(data_ts_1.imagesJSON);
var imagesWithTags = imageList.reduce(function (acc, key) {
    var _a;
    return __assign(__assign({}, acc), (_a = {}, _a[key] = data_ts_1.imagesJSON[key].map(function (image) { return image.description; }), _a));
}, {});
var tagsList = Array.from(new Set(Object.values(imagesWithTags).flat()));
var imagesWithTagsEntries = Object.entries(imagesWithTags);
var tagsWithImages = tagsList.reduce(function (acc, tag) {
    var _a;
    return __assign(__assign({}, acc), (_a = {}, _a[tag] = imagesWithTagsEntries.filter(function (_a) {
        var _ = _a[0], tagsList = _a[1];
        return tagsList.includes(tag);
    }).map(function (_a) {
        var image = _a[0], _ = _a[1];
        return image;
    }), _a));
}, {});
///
var getNormalizeData = function () {
    var imageEntriesList = Object.entries(data_ts_1.imagesJSON);
    var tags = {};
    for (var i = 0; i < imageEntriesList.length; i++) {
        var _a = imageEntriesList[i], image = _a[0], imageInfo = _a[1];
        console.log(imageInfo);
        for (var j = 0; j < imageInfo; j++) {
            if (tags[imageInfo[j]]) {
                tags[imageInfo[j]].add(image);
            }
            else {
                tags[imageInfo.description[j]] = new Set([image]);
            }
        }
    }
    console.log({ tags: tags });
};
getNormalizeData();
var findRelevantImg = function (image) {
    var currentImageTagsList = image.map(function (image) { return image.description; });
    var imagePoints = {};
    for (var i = 0; i < imageList.length; i++) {
        for (var j = 0; j < currentImageTagsList.length; j++) {
            if (tagsWithImages[currentImageTagsList[j]].includes(imageList[i])) {
                if (imagePoints[imageList[i]]) {
                    imagePoints[imageList[i]] += 1;
                }
                else {
                    imagePoints[imageList[i]] = 1;
                }
            }
        }
    }
    var imageListByRelevancy = Object.entries(imagePoints).sort(function (a, b) { return a[1] < b[1] ? 1 : -1; }).map(function (_a) {
        var image = _a[0], _ = _a[1];
        return image;
    });
    // console.log(imagePoints, imageListByRelevancy);
};
findRelevantImg(img1);
// console.log(tagsWithImages);
// console.log(imagesWithTags);
