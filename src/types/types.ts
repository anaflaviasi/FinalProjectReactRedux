
// interface  priceRanges {
//     map(arg0: (price: any, index: any) => JSX.Element | undefined): import("react").ReactNode;
//     currency: string;
//     max: number;
//     min: number; 
//     type: string;
// }

export interface Event {
    id: string;
    name: string;
    dates: any;
    images: any;
    // priceRanges:  priceRanges;
    info: string;
    pleaseNote: string;
    url: string;
}


export interface Cart {
    cart: Event[];
    total: number;
}

export interface Data {
    _links: any;
    _embedded: any;
    page: any;
}
