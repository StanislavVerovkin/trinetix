import { Injectable } from '@angular/core';
import { HeaderModel, ContentModel, FooterModel } from '../models/global.model';

@Injectable({
    providedIn: 'root'
})
export class MockDataService {

    /*
    HEADER MOCK DATA
    */
    headerData: HeaderModel = {
        logo: '../../../assets/images/logo.png',
        headerMenu: [
            'CASE STUDIES',
            'SERVICES',
            'EXPERTISE',
            'ABOUT'
        ],
        headerTabs: [
            'ALL',
            'MOBILE APPS',
            'WEB SERVICES',
            'AUGMENTED REALITY',
            'UX/UI DESIGN',
            'DEVELOPMENT'
        ],
        headerShortTabs: [
            'ALL',
            'MOBILE',
            'WEB',
            'AR',
            'U'
        ],
        intro: 'We work with forward businesses to create new digital platforms, products and services.'
    };

    /*
    CONTENT MOCK DATA
    */
    contentData: ContentModel = {
        contentTitle: 'What We Do',
        contentText: ' We launch different types of platforms and operating systems using distinguishes of ' +
            'every platform or operating system as advantage and a powerful tool.',
        contentFooterText: '',
        content: [
            {
                image: '../../../assets/images/content-images/image-1.png',
                title: 'Mobile Apps',
                text: 'We are a nimble team of designers, developers, and strategists who are passionate about ' +
                    'helping our clients achieve their goals and grow their brands.'
            },
            {
                image: '../../../assets/images/content-images/image-2.png',
                title: 'Web Services',
                text: 'We are a nimble team of designers, developers, and strategists who are passionate about ' +
                    'helping our clients achieve their goals and grow their brands.'
            },
            {
                image: '../../../assets/images/content-images/image-3.png',
                title: 'Augmented Reality',
                text: 'We are a nimble team of designers, developers, and strategists who are passionate about ' +
                    'helping our clients achieve their goals and grow their brands.'
            },
            {
                image: '../../../assets/images/content-images/image-4.png',
                title: 'UX/UI Design',
                text: 'We are a nimble team of designers, developers, and strategists who are passionate about ' +
                    'helping our clients achieve their goals and grow their brands.'
            },
            {
                image: '../../../assets/images/content-images/image-5.png',
                title: 'Development',
                text: 'We are a nimble team of designers, developers, and strategists who are passionate about ' +
                    'helping our clients achieve their goals and grow their brands.'
            }
        ]
    };

    /*
    FOOTER MOCK DATA
    */
    footerData: FooterModel = {
        headquarters: {
            street: '11 E. Chavdar Street, Office 222.',
            location: 'Kiev, Ukraine 04335'
        },
        addresses: [
            { country: 'USA', email: 'usa.hr@trinetix.com', phone: '1 212 336 1440' },
            { country: 'Ukraine', email: 'ua.hr@trinetix.com', phone: '38 044 334 2341' }
        ],
        menu: ['Home', 'Case Studies', 'Services', 'Expertise', 'About', 'Contact Us'],
        social: [
            { name: 'facebook', logo: '../../../assets/images/social-icons/facebook.svg' },
            { name: 'linkedin', logo: '../../../assets/images/social-icons/linkedin.svg' },
            { name: 'google', logo: '../../../assets/images/social-icons/google.svg' },
            { name: 'twitter', logo: '../../../assets/images/social-icons/twitter.svg' }
        ]
    };
}
