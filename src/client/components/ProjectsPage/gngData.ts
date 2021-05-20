//@ts-ignore
import giveNGo from "../../../../public/assets/givengo.png";
import {
  typescriptIcon,
  reactIcon,
  nodeIcon,
  mongoIcon,
  reduxIcon,
} from "../AboutMePage/iconIndex";

const stack = [
  {
    name: "Typescript",
    logo: typescriptIcon,
  },
  {
    name: "React-Native",
    logo: reactIcon,
  },
  {
    name: "MongoDB",
    logo: mongoIcon,
  },
  {
    name: "Node",
    logo: nodeIcon,
  },
  {
    name: "Redux",
    logo: reduxIcon,
  },
];

const desc = `Concieved during the lockdown from the pandemic, GiveNGO was a "React Native app to connect people who need toiletries/groceries/other goods with those who live nearby and are willing to donate and drop off those goods to them. Includes a chat app to allow users to coordinate."`;

const contributors = [
  "Louis Sheid (Myself)",
  "Stephanie Wood",
  "Gabriela Aquino",
  "Katty Polyak",
  "Gregory Palasciano",
];

export const gngData = {
  title: "Give N' Go",
  subTitle: "React-Native Charity Application",
  logo: giveNGo,
  description: desc,
  stack: stack,
  contributors: contributors,
  repoLink: "https://github.com/givengo/givengo",
};

