import {
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
  Icon10,
  AddName,
  AddLogo,
  AddSecondLogo,
  AddColor,
  AddTarget,
  AddAction,
  AddVoice,
} from "../assets";

export const Icons = [
  { name: "Home", icon: Icon3, path: "/" },
  { name: "Menegment", icon: Icon4, path: "/brand-menegment" },
  { name: "Analytics", icon: Icon5, path: "/brand-views" },
  { name: "Tasks", icon: Icon6, path: "/brand-list" },
  { name: "Files", icon: Icon7, path: "/files" },
  { name: "Users", icon: Icon8, path: "/users" },
];

export const bottomNav = [
  { name: "Settings", icon: Icon9, path: "/settings" },
  { name: "Profile", icon: Icon10, path: "/profile" },
];

export const cardsData = [
  {
    title: "Click-Through Rate",
    value: "5,000",
    trend: "+5%",
    icon: "iconamoon:trend-up-light",
  },
  {
    title: "New Users",
    value: "1,200",
    trend: "+3%",
    icon: "iconamoon:trend-down-light",
  },
  {
    title: "Revenue",
    value: "$12,000",
    trend: "+8%",
    icon: "iconamoon:trend-up-light",
  },
  {
    title: "Applications",
    value: "350",
    trend: "+2%",
    icon: "iconamoon:trend-down-light",
  },
];

export const progressData = [
  { label: "Inspiration", value: 100000, percentage: 70 },
  { label: "Followers", value: 80000, percentage: 55 },
  { label: "Clients", value: 20000, percentage: 30 },
];

export const brandData = [
  { logo: AddName, title: "Add Brand Name with Description" },
  { logo: AddLogo, title: "Add a Logo to Represent Your Brand" },
  { logo: AddSecondLogo, title: "Add Secondary Brand Logo" },
  { logo: AddColor, title: "Add Color Represents Your Brand" },
  { logo: AddVoice, title: "Add Brand Tone & Voice" },
  { logo: AddTarget, title: "Add Target Audience" },
  { logo: AddAction, title: "Add Call-to-Actions (optional)" },
];
