import { FaDumbbell, FaClipboardCheck, FaClock } from "react-icons/fa6";
import { PiVirtualRealityFill } from "react-icons/pi";
import { GrLounge, GrYoga } from "react-icons/gr";
import { FaLocationArrow } from "react-icons/fa6";
import { IoMdQuote } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineAutoGraph } from "react-icons/md";
import { RiCommunityLine } from "react-icons/ri";
import { GiStairsGoal } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";

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

export const SUBPAGE_ABOUT = {
  journey:
    "PulseFit began as a vision to create a fitness community that's more than just a gym.\
     Founded in 2023 by a group of passionate fitness enthusiasts, we wanted to break away \
     from the typical gym experience and offer something fresh, modern, and dynamic. With\
      a focus on innovation, community, and results, PulseFit quickly became the go-to spot\
       for people looking to push their limits in a supportive environment. Our journey started\
        with a small studio, and today, PulseFit is a thriving fitness hub, offering state-of-the-art\
         facilities and a wide range of classes for every fitness level",
  mission:
    "At PulseFit, our mission is to empower individuals to unlock their full potential through fitness.\
     We believe that every pulse counts, and we’re dedicated to providing the tools, guidance, and\
      inspiration needed to achieve personal health and wellness goals. Our vision is to create a world\
       where fitness is a cornerstone of everyday life, where people come together to challenge themselves\
        and grow, both physically and mentally. We strive to be a leader in the fitness industry,\
         setting the standard for what a modern gym should be—innovative, inclusive, and community-driven.",
};

export const SUBPAGE_ABOUT_VALUES = [
  {
    title: "Community",
    paragraph:
      "We believe in the power of community. PulseFit is a place where everyone is welcome, and everyone supports each other. We grow stronger together.",
    icon: RiCommunityLine,
  },
  {
    title: "Innovation",
    paragraph:
      "We're always evolving. Whether it's the latest fitness technology or the newest training techniques, PulseFit stays ahead of the curve to offer our members the best.",
    icon: MdOutlineAutoGraph,
  },
  {
    title: "Inclusion",
    paragraph:
      "Fitness is for everyone. We're committed to creating a space where all individuals, regardless of age, ability, or background, feel valued and motivated.",
    icon: IoIosPeople,
  },
  {
    title: "Commitment",
    paragraph:
      "We're dedicated to helping our members reach their goals. Our team is passionate, professional, and ready to support you every step of the way.",
    icon: GiStairsGoal,
  },
  {
    title: "Wellness",
    paragraph:
      "True fitness is about more than just working out; it's about overall well-being. PulseFit promotes a balanced approach to health, combining physical fitness with mental and emotional wellness.",
    icon: IoFitnessOutline,
  },
];

export const SUBPAGE_ABOUT_LEADERSHIP = [
  {
    key: "Jordan",
    name: "Jordan Matthews",
    title: "Founder & CEO",
    paragraph:
      "Jordan founded PulseFit to blend innovation with community in fitness.\
     He directs overall strategy, ensuring growth while staying true to PulseFit's mission.",
  },
  {
    key: "samantha",
    name: "Samantha Rivera",
    title: "Chief Operating Officer (COO)",
    paragraph:
      "Samantha oversees daily operations, ensuring member satisfaction and seamless facility\
     management. Her business management expertise keeps PulseFit running smoothly and efficiently.",
  },
  {
    key: "tyler",
    name: "Tyler Harris",
    title: "Chief Marketing Officer CMO",
    paragraph:
      "Tyler drives PulseFit's brand strategy, managing marketing, social media,\
     and outreach to attract new members and keep the community engaged and inspired.",
  },
  {
    key: "rachel",
    name: "Rachel Wong",
    title: "Chief Wellness Officer CWO",
    paragraph:
      "Rachel designs holistic wellness programs, integrating fitness, nutrition, and mental health.\
       Her initiatives support members' overall well-being, promoting a balanced, healthy lifestyle at PulseFit.",
  },
];

export const SUBPAGE_ABOUT_TRAINERS = [
  {
    key: "liam",
    name: "Liam Foster",
    title: "Strength and Conditioning Coach",
    paragraph:
      "Liam's tailored strength training programs build serious endurance and power. His competitive sports background\
     drives members to achieve maximum results through intense workouts.",
  },
  {
    key: "maya",
    name: "Maya Elena",
    title: "Cardio Specialist",
    paragraph:
      "Maya's high-energy cardio sessions, from HIIT to spinning, are designed to boost heart health and burn\
       calories. Her enthusiasm makes every workout motivating and effective.",
  },
  {
    key: "ava",
    name: "Ava Chen",
    title: "Yoga and Pilates Instructor",
    paragraph:
      "Ava specializes in yoga and Pilates, helping members enhance flexibility, balance, and mental clarity through\
       mindful movement and challenging yet calming routines.",
  },
  {
    key: "ethan",
    name: "Ethan Roberts",
    title: "Functional Training Expert",
    paragraph:
      "Ethan's dynamic workouts improve everyday strength and mobility. Focused on core stability and injury\
       prevention, his sessions enhance daily performance and overall fitness.",
  },
  {
    key: "sophia",
    name: "Sophia Martinez",
    title: "Spinning Instructor",
    pararaph:
      "Sophia's high-intensity spinning classes, inspired by her competitive cycling background,\
    challenge endurance and push limits with motivating playlists and heart-pumping workouts.",
  },
  {
    key: "jackson",
    name: "Jackson Lee",
    title: "Boxin Coach",
    paragraph:
      "Jackson's boxing classes emphasize technique, power, and endurance. His martial\
       arts expertise delivers intense workouts, building strength while teaching self-defense and relieving stress.",
  },
];
