import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import TitikKomaImg from "@/public/titikkoma.jpg";
import AlpediaImg from "@/public/alpedia2.png";
import IotImg from "@/public/iot.jpg";
import mobileImg from "@/public/mobile.png";
import gameImg from "@/public/game.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "SDN Gondrong 7",
    location: "Tanggerang , Banten",
    description: "Saya Menamatkan Jenjang SD selama 6 Tahun.",
    icon: React.createElement(LuGraduationCap),
    date: "2013-2019",
  },
  {
    title: "SMPN 10",
    location: "Medan , Sumatera Utara",
    description: "Saya Menamatkan Jenjang SMP Selama 3 Tahun",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2022",
  },
  {
    title: "SMK Telkom 1",
    location: "Medan , Sumatera Utara",
    description:
      "Sedang Bersekolah di SMK Telkom 1 Medan dengan Jurusan Rekayasa Perangkat Lunak. Saya Terus memperdalam skill saya didunia teknologi.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
  {
    title: "Mengikuti Kursus Kelas Fullstack",
    location: "Medan , Sumatera Utara",
    description:
      "Saya Membeli Kursus Ngoding Online di CodePolitan dengan kelas Fullstack untuk memperdalam Skill Ngoding saya.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - lifetime",
  },
  {
    title: "Prakerin di Metromatika Teknologi Rekayasa",
    location: "Medan , Sumatera Utara",
    description:
      "Mengikuti Program Prakerin dengan dunia industri untuk mengasah kemampuan di dunia kerja.",
    icon: React.createElement(CgWorkAlt),
    date: "October 2024 - April 2025",
  },
] as const;

export const projectsData = [
  {
    title: "TitikKoma",
    description:
      "Sebuah Platfrom Kursus Ngoding Online dengan Mutiple User. Dan Memanfaatkan Keypoint Video Youtube Sebagai Video Pembelajaran.",
    tags: ["Laravel", "CSS", "MySQL", "Tailwind", "JavaScript"],
    imageUrl: TitikKomaImg,
  },
  {
    title: "Alpedia",
    description:
      "UI/UX membuat Website Layanan Topup Games beserta dengan prototyping.",
    tags: ["Figma"],
    imageUrl: AlpediaImg,
  },
  {
    title: "Foxy as Adventurer",
    description:
      "Sebuah Games 2D yang cukup kompleks beserta leveling, Collecting, Enemies, Boss, Health system, Damaging and more.",
    tags: ["Unity", "C#", "Modelling"],
    imageUrl: gameImg,
  },
  {
    title: "Membuat Mobil RC",
    description:
      "Membuat Perangkat IOT sebuah mobil RC 2 Roda menggunakan Wemos D1 with Module Wifi untuk Koneksi Bluetooth.",
    tags: ["IOT", "Prototyping"],
    imageUrl: IotImg,
  },
  {
    title: "NightReading",
    description:
      "Platfrom Mobile tempat Membaca Manga, Manhwa, Manhua, dan Novel",
    tags: ["Flutter"],
    imageUrl: mobileImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind CSS",
  "React",
  "Laravel",
  "Flutter",
  "Git",
  "MySql",
  "Unity",
  "Microsoft Word",
  "Figma",
  "PHP",
  "IOT",
] as const;
