export interface DB {
    software: Software[];
}

export interface Software {
    id:         number;
    name:        string;
    description: string;
    category:    string;
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
