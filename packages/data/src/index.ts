import corpusData from "./corpus.json";

export interface Topic {
  id: string;
  title: string;
  description: string;
}

export interface Corpus {
  name: string;
  version: string;
  topics: Topic[];
}

export const corpus: Corpus = corpusData as Corpus;

export * from "./types";

