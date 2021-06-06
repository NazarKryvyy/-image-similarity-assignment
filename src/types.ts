export type ImageInfo = {
    locations: Array<any>;
    properties: Array<any>;
    mid: string;
    locale: string;
    description: string;
    score: number;
    confidence: number;
    topicality: number;
    boundingPoly: null;
};

export type Image = Array<ImageInfo>;
export type ImageDataSet = { [key in string]: Image };