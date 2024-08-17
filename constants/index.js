import { FaDumbbell, FaClipboardCheck, FaClock } from "react-icons/fa6";
import { PiVirtualRealityFill } from "react-icons/pi";
import { GrLounge, GrYoga } from "react-icons/gr";
import { FaLocationArrow } from "react-icons/fa6";
import { IoMdQuote } from "react-icons/io";

export const NAVLINKS = [
  {
    href: "/",
    key: "home",
    label: "Home",
  },
  {
    href: "/about",
    key: "about",
    label: "About Us",
  },
  {
    href: "/classes",
    key: "classes",
    label: "Classes",
  },
  {
    href: "/membership",
    key: "membership",
    label: "Membership",
  },
  {
    href: "/contact",
    key: "contact",
    label: "Contact",
  },
];

export const HERO = {
  header: "Where Every Pulse Powers Your Potential",
  paragraph:
    "At PulseFit, we believe that every heartbeat is an opportunity to push your limits and unlock new strengths. Let every pulse bring you closer to the best version of yourself.",
};

export const ABOUT = {
  header: "Empowering Every Pulse, Every Day",
  subheading: "More Than a Gym: A Hub for Health, Wellness, and Growth.",
  paragraph:
    "At PulseFit, we're more than just a gym—we're a community driven by the belief that every individual has the potential to achieve greatness. Founded with a passion for fitness and a commitment to innovation, PulseFit was created to redefine the workout experience. Our mission is to empower you with the tools, support, and environment you need to elevate your health and well-being. Whether you're a fitness enthusiast or just beginning your journey, PulseFit is here to inspire and challenge you every step of the way.",
};

export const FEATURES = [
  {
    title: "State-of-the-Art Equipment",
    paragraph:
      "PulseFit is equipped with the latest fitness technology, from smart cardio machines that adjust to your performance to cutting-edge strength training gear designed to maximize results.",
    key: "Equipment",
    icon: FaDumbbell,
  },
  {
    title: "Dynamic Class Offerings",
    paragraph:
      "We offer a wide variety of classes including high-energy HIIT, relaxing yoga sessions, and innovative cycling experiences. All designed to cater to various fitness levels and goals.",
    key: "Dynamic Classes",
    icon: GrYoga,
  },
  {
    title: "Personalized Training Programs",
    paragraph:
      "Customized fitness plans tailored to your individual goals and needs are included when signing  up. Supported by expert trainers who provide guidance and motivation to help you succeed.",
    key: "Training Programs",
    icon: FaClipboardCheck,
  },
  {
    title: "Exceptional Member Comfort",
    paragraph:
      "Experience our top-tier wellness areas, including revitalizing recovery lounges, soothing sauna rooms and a wellness cafe with healthy refreshments. All crafted to enhance your gym experience and promote well-being.",
    key: "Comfort areas",
    icon: GrLounge,
  },
  {
    title: "24/7 Gym Access",
    paragraph:
      "Life is busy, but your fitness shouldn't have to wait. With 24/7 access to our state-of-the-art facility, you can work out whenever it suits you. Early morning, late night, or anything in between—PulseFit is here for you.",
    key: "24/7 access",
    icon: FaClock,
  },
  {
    title: "Virtual Fitness Class",
    paragraph:
      "Stay on track with your fitness goals, no matter where you are, with our virtual fitness classes. Access a variety of workouts online, led by our expert trainers, and exercise from the comfort of your home or while traveling.",
    key: "vr",
    icon: PiVirtualRealityFill,
  },
];

export const CLASSES = [
  {
    title: "HIIT Blast",
    paragraph:
      "Push your limits with high-intensity interval training that maximizes calorie burn and boosts endurance.",
    key: "HIIT",
    image: "/images/crossfitclass.jpg",
    icon: FaLocationArrow,
    alt: "Hiit Training",
  },
  {
    title: "Power Yoga",
    paragraph:
      "Strengthen your body and calm your mind with this dynamic flow yoga class designed for all levels.",
    key: "Yoga",
    image: "/images/cta3.jpg",
    icon: FaLocationArrow,
    alt: "Yoga",
  },
  {
    title: "Spin Surge",
    paragraph:
      "Ride to the rhythm in this high-energy cycling class that will leave you drenched in sweat and full of energy.",
    key: "Spinning",
    image: "/images/spinningclass.jpg",
    icon: FaLocationArrow,
    alt: "Spinning Training",
  },
  {
    title: "Boxing Burn",
    paragraph:
      "Channel your inner fighter with this intense boxing-inspired workout that builds strength and agility.",
    key: "Boxing",
    image: "/images/boxingclass.jpg",
    icon: FaLocationArrow,
    alt: "Boxing",
  },
];

export const PRICING = [
  {
    title: "Essential Pulse",
    paragraph:
      "Kickstart your fitness journey with Essential Pulse, offering the basics you need to get moving and stay motivated in a supportive environment.",
    key: "essential",
    price: 35,
    benefits: [
      { benefitname: "Access to gym facilities during standard hours" },
      { benefitname: "Unlimited access to virtual fitness classes" },
      { benefitname: "Two group fitness classes per week" },
    ],
  },
  {
    title: "Enhanced Pulse",
    paragraph:
      "Take your routine to the next level with Enhanced Pulse, offering extended access and enhanced features to help you achieve your fitness goals faster.",
    key: "essential",
    price: 55,
    benefits: [
      { benefitname: "24/7 access to all gym facilities" },
      { benefitname: "Five group fitness classes per week" },
      { benefitname: "One personal training session per month" },
    ],
  },
  {
    title: "Ultimate Pulse",
    paragraph:
      "Experience the ultimate in fitness with Ultimate Pulse, where personalized services and exclusive access meet to elevate your performance and results.",
    key: "ultimate",
    price: 85,

    benefits: [
      { benefitname: "Unlimited group fitness classes" },
      { benefitname: "Five personal training sessions a month" },
      { benefitname: "Nutrition coaching and personalized meal plans" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Megan O'Connor",
    key: "Megan",
    text: "PulseFits state-of-the-art equipment has revolutionized my workouts. The variety of machines and free weights keeps every session fresh and challenging.\
     Plus, the unlimited group classes with my Premium Membership keep me motivated and engaged!",
    image: "/images/woman1.jpg",
    icon: IoMdQuote,
    alt: "image of megan",
  },
  {
    name: "Carlos Ramirez",
    key: "Carlos",
    text: "The diverse range of classes at PulseFit ensures I never get bored. From high-energy HIIT to relaxing yoga, there's something for every mood and fitness level. The Elite Membership's \
    unlimited personal training sessions have been a game-changer for my progress.",
    image: "/images/man1.jpg",
    icon: IoMdQuote,
    alt: "image of carlos",
  },
  {
    name: "Jasmine Xian",
    key: "Jasmine",
    text: "As someone new to fitness, PulseFit's personalized training plans and supportive trainers made all the difference. The Basic Membership's\
     inclusion of a weekly free class was the perfect way to start my journey.",
    image: "/images/woman2.jpg",
    icon: IoMdQuote,
    alt: "image of jasmine",
  },
  {
    name: "Ramesh Patel",
    key: "Ethan",
    text: "PulseFit's premium amenities, like the sauna and recovery lounge, are incredible. The Enhanced Access of my Premium \
    Membership makes every visit feel like a treat. The priority booking for classes is also a huge plus!",
    image: "/images/man2.jpg",
    icon: IoMdQuote,
    alt: "image of ramesh",
  },
  {
    name: "Chloe Edwards",
    key: "Chloe",
    text: "The holistic approach at PulseFit, from the advanced recovery tools to the exclusive wellness workshops, is what sets it apart. My Elite Membership allows me access to all these benefits, making every workout session more effective and enjoyable.",
    image: "/images/woman3.jpg",
    icon: IoMdQuote,
    alt: "image of chloe",
  },
  {
    name: "Noah Sullivan",
    key: "Noah",
    text: "PulseFit's community vibe and high-energy classes have completely transformed my fitness routine. The diverse class offerings and premium facilities available with my membership keep me motivated and excited to come back every day.",
    image: "/images/man3.jpg",
    icon: IoMdQuote,
    alt: "image of noah",
  },
  {
    name: "Sofia Martinez",
    key: "Sofiaa",
    text: "The variety of classes at PulseFit is amazing. Whether I'm doing a high-intensity workout or a relaxing yoga session, the facilities and expert trainers make each experience unique. The unlimited classes and personalized plan from my Premium Membership are invaluable.",
    image: "/images/woman4.jpg",
    icon: IoMdQuote,
    alt: "image of sofia",
  },
  {
    name: "Jack Lee",
    key: "Jack",
    text: "I'm blown away by the quality of service at PulseFit. The Elite Membership's benefits, including unlimited personal training sessions and exclusive workshops, have elevated my fitness journey to new heights. The amenities are top-notch.",
    image: "/images/man4.jpg",
    icon: IoMdQuote,
    alt: "image of jack",
  },
  {
    name: "Emily Boss",
    key: "Emily",
    text: "PulseFit's CoreBlast Bootcamp is my favorite! The focused core workouts have strengthened my abs and back, and the Basic Membership's inclusion of a weekly class is perfect for staying on track with my goals.",
    image: "/images/woman5.jpg",
    icon: IoMdQuote,
    alt: "image of emily",
  },
  {
    name: "Liam Roberts",
    key: "Liam",
    text: "The variety of classes at PulseFit ensures I stay engaged and challenged. From Boxing Burn to Pilates Fusion, the Premium Membership's unlimited access is worth every penny. Plus, the 10% discount on merchandise is a nice bonus!",
    image: "/images/man5.jpg",
    icon: IoMdQuote,
    alt: "image of liam",
  },
  {
    name: "Olivia Wilson",
    key: "Olivia",
    text: "PulseFit's commitment to wellness is evident in its exceptional recovery amenities. The advanced recovery tools and personalized nutrition plans included with my Elite Membership have made a huge difference in my overall well-being.",
    image: "/images/woman6.jpg",
    icon: IoMdQuote,
    alt: "image of olivia",
  },
  {
    name: "Ryan Mitchell",
    key: "Ryan",
    text: "The community at PulseFit is incredibly supportive. With my Basic Membership, I've enjoyed trying different classes and meeting new people. The friendly atmosphere and high-quality equipment make it a fantastic place to work out.",
    image: "/images/man6.jpg",
    icon: IoMdQuote,
    alt: "image of ryan",
  },
];
