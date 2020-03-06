export interface ContentModel {
    contentTitle: string;
    contentText: string;
    contentFooterText: string;
    content: ContentItem[];
}

export interface ContentItem {
    image: string;
    title: string;
    text: string;
}

export interface HeaderModel {
    logo: string;
    headerMenu: string[];
    headerTabs: string[];
    headerShortTabs: string[];
    intro: string;
}

export interface FooterModel {
    headquarters: {
        street: string;
        location: string;
    };
    addresses: AddressItem[];
    social: SocialItem[];
    menu: string[];
}

export interface AddressItem {
    country: string;
    email: string;
    phone: string;
}

export interface SocialItem {
    name: string;
    logo: string;
}
