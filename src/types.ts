export interface BlogDocument {
  $id: string;
  title: string;
  overview: string;
  created: string;
  Pagesections: string[]; // Array of section IDs
}

export interface SectionDocument {
  $id: string;
  pageSections: string[]; // Array of item IDs
}

export interface ItemDocument {
  $id: string;
  type: string;
  content?: string;
  imageURL?: string[];
  src?: string[];
}
