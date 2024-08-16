import { FaDumbbell, FaClipboardCheck, FaClock } from "react-icons/fa6";
import { PiVirtualRealityFill } from "react-icons/pi";
import { GrLounge, GrYoga } from "react-icons/gr";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

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
    icon: BsArrowUpRightCircleFill,
    alt:'Hiit Training'
  },
  {
    title: "Power Yoga",
    paragraph:
      "Strengthen your body and calm your mind with this dynamic flow yoga class designed for all levels.",
    key: "Yoga",
    image: "/images/yogaclass.jpg",
    icon: BsArrowUpRightCircleFill,
    alt:'Yoga'
  },
  {
    title: "Spin Surge",
    paragraph:
      "Ride to the rhythm in this high-energy cycling class that will leave you drenched in sweat and full of energy.",
    key: "Spinning",
    image: "/images/spinningclass.jpg",
    icon: BsArrowUpRightCircleFill,
    alt:'Spinning Training'
  },
  {
    title: "Boxing Burn",
    paragraph:
      "Channel your inner fighter with this intense boxing-inspired workout that builds strength and agility.",
    key: "Boxing",
    image: "/images/boxingclass.jpg",
    icon: BsArrowUpRightCircleFill,
    alt: 'Boxing'
  },
];
