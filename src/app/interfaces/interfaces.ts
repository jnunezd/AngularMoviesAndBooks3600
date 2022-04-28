export interface Movie {
    Title: string;
    Year: number;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface ApiResult {
    Search: Movie[];
    totalResults: number;
    Response: boolean;
}

export interface BookApiResult {
    kind: string;
    totalItems: number;
    items: Book[];
}

export interface Book {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    accessInfo: AccessInfo;
    searchInfo: SearchInfo;
}

export interface VolumeInfo {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    pageCount: number;
    printType: string;
    categories: string[];
    averageRating: number;
    ratingsCount: number;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    imageLinks: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
}

export interface AccessInfo {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: Epub;
    pdf: Pdf;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}

export interface SearchInfo {
    textSnippet: string;
}

export interface Epub {
    isAvailable: boolean;
    acsTokenLink: string
}

export interface Pdf {
    isAvailable: boolean;
    acsTokenLink: string
}

export interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}
