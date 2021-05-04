//@ts-ignore
import phlippy from "../../../../public/assets/phlippy_icon.png";
import {
  typescriptIcon,
  reactIcon,
  nodeIcon,
  electronIcon,
  webpackIcon,
} from "../AboutMePage/iconIndex";

const stack = [
  {
    name: "Typescript",
    logo: typescriptIcon,
  },
  {
    name: "Electron",
    logo: electronIcon,
  },
  {
    name: "React",
    logo: reactIcon,
  },
  {
    name: "Node",
    logo: nodeIcon,
  },
  {
    name: "Webpack",
    logo: webpackIcon,
  },
];

const desc = `DockerLocal was an open source product developed by myself
and a team of hardworking developers. Inspired by a problem from
an engineer working at Riot Games, this experimental dev tool was
designed to save development time by creating an efficient way to clone
multiple repositories simultaneously while generating a yaml file for docker
compose and having “Leave-One-Out” functionality in which a developer 
would be able to choose which repositories to be in the yaml file. This makes 
unit testing individual microservices much more efficient.The “Local” in 
DockerLocal is referring to the ability to have all of your cloned, local 
repositories be containerized simulatenously without hassle.`;

const contributors = [
  "Louis Sheid (Myself)",
  "Katy Polyak",
  "Tom Lutz",
  "Vivian Cermeno",
  "Kate Chanthakaew",
];

export const dlData = {
  title: "DockerLocal",
  subTitle: "Containerized Microservice Testing GUI",
  logo: phlippy,
  description: desc,
  stack: stack,
  contributors: contributors,
  repoLink: "https://github.com/oslabs-beta/DockerLocal",
};
