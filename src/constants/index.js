import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { hairBundle1, hairBundle2, hairBundle3, customer1, customer2, hairProduct1, hairProduct2, hairProduct3, hairProduct4, thumbnailHair1, thumbnailHair2, thumbnailHair3, footerLogo, offer } from "../assets/images";

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/About-Us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "/Contact-Us", label: "Contact Us" },
];

export const hairBundles = [
    {
        thumbnail: hairBundle1,
        bigHair: hairBundle1,
    },
    {
        thumbnail: hairBundle2,
        bigHair: hairBundle2,
    },
    {
        thumbnail: hairBundle3,
        bigHair: hairBundle3,
    },
];

export const statistics = [
    { value: '500+', label: 'Styles' },
    { value: '200+', label: 'Shops' },
    { value: '150k+', label: 'Happy Customers' },
];

export const products = [
    {id: 1,
        imgURL: hairProduct1,
        name: "Brazilian Straight Hair",
        description: 'Soft and silky hair bundle.',
        price: "$150.00",
    },
    {id: 2,
        imgURL: hairProduct2,
        name: "Peruvian Body Wave",
        description: 'Soft and silky hair bundle.',
        price: "$160.00",
    },
    {id: 3,
        imgURL: hairProduct3,
        name: "Malaysian Curly Hair",
        description: 'Soft and silky hair bundle.',
        price: "$170.00",
    },
    {id: 4,
        imgURL: hairProduct4,
        name: "Indian Deep Wave",
        description: 'Soft and silky hair bundle.',
        price: "$180.00",
    },
];

export const specialOffer = [
    {
        id: 1,
        name: 'Special Hair Bundle 1',
        price: 99.99,
        description: 'Premium quality hair bundle.',
        imgURL: offer,
    }
]

export const allProducts = [
  {
    id: 1,
    name: 'Luxe Hair Bundle 1',
    price: 99.99,
    description: 'Premium quality hair bundle.',
    imgURL: hairBundle2,
  },
  {id: 2,
    name: 'Luxe Hair Bundle 2',
    price: 89.99,
    description: 'Soft and silky hair bundle.',
    imgURL: hairBundle1,
  },
    {
      id: 3,
    name: 'Luxe Hair Bundle 3',
    price: 79.99,
    description: 'Natural look and feel.',
    imgURL: hairBundle3,
  },
  {id: 4,
    name: 'Luxe Hair Bundle 1',
    price: 99.99,
    description: 'Premium quality hair bundle.',
    imgURL: hairProduct1,
  },
    {
      id: 5,
    name: 'Luxe Hair Bundle 2',
    price: 89.99,
    description: 'Soft and silky hair bundle.',
    imgURL: hairProduct2,
  },
  {id: 6,
    name: 'Luxe Hair Bundle 3',
    price: 79.99,
    description: 'Natural look and feel.',
    imgURL: hairProduct3,
    },
  {id: 7,
    name: 'Luxe Hair Bundle 1',
    price: 99.99,
    description: 'Premium quality hair bundle.',
    imgURL: hairBundle2,
  },
  {id: 8,
    name: 'Luxe Hair Bundle 2',
    price: 89.99,
    description: 'Soft and silky hair bundle.',
    imgURL: hairBundle1,
  },
  {id: 9,
    name: 'Luxe Hair Bundle 3',
    price: 79.99,
    description: 'Natural look and feel.',
    imgURL: hairBundle3,
  },

];

export const services = [
    {
        imgURL: truckFast,
        label: "Free Delivery",
        subtext: "Enjoy seamless shopping with our complimentary Delivery service."
    },
    {
        imgURL: shieldTick,
        label: "Quality Guarantee",
        subtext: "Experience worry-free transactions with our top-quality products."
    },
    {
        imgURL: support,
        label: "Customer Support",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Jessica Smith',
        rating: 4.8,
        feedback: "The quality of the hair exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Emily Johnson',
        rating: 4.7,
        feedback: "Great customer service and fantastic products. I'll definitely shop here again!"
    }
];

export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Brazilian Straight", link: "/" },
            { name: "Peruvian Body Wave", link: "/" },
            { name: "Malaysian Curly", link: "/" },
            { name: "Indian Deep Wave", link: "/" },
            { name: "Clip-Ins", link: "/" },
            { name: "Wigs", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About Us", link: "#about-us" },
            { name: "FAQs", link: "/" },
            { name: "Delivery", link: "/" },
            { name: "Privacy Policy", link: "/" },
            { name: "Payment Options", link: "/" },
        ],
    },
    {
        title: "Get in Touch",
        links: [
            { name: "customer@FandishasBundles.com", link: "mailto:customer@hairshop.com" },
            { name: "+251909090900", link: "tel:+251909090900" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "Facebook logo" },
    { src: twitter, alt: "Twitter logo" },
    { src: instagram, alt: "Instagram logo" },
];
