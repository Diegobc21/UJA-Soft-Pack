export interface DB {
    software: Software[];
}

export interface Category {
    id:   number;
    name: string;
}

export interface Software {
    id:         number;
    name:        string;
    description: string;
    categories:  string[];
    os:          Os[];
    resources?:  Resources[];
}

export interface Os {
    type:     string;
    arch?:    string;
    download: string;
}

export interface Resources {
    name:    string;
    website: string;
}
