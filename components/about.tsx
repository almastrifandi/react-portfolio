"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[55rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Saat ini saya masih bersekolah di{" "}
        <span className="font-medium">SMK Telkom 1 Medan</span> dengan jurusan{" "}
        <span className="font-medium">Rekayasa Perangkat Lunak</span>. Saya
        sangat menikmati dunia programming, terutama kebahagiaan melihat orang
        lain menggunakan hasil kerja saya. Saat ini, saya fokus mempelajari{" "}
        <span className="font-medium">Laravel dan React</span> untuk memperdalam
        keterampilan saya dalam pengembangan web.
      </p>

      <p>
        Saya selalu mengikuti perkembangan teknologi, terutama dengan kemajuan{" "}
        <span className="font-medium">AI</span> di zaman sekarang. Saya berani
        bilang kalau saya adalah seorang{" "}
        <span className="font-medium">tech enthusiast</span> yang selalu
        tertarik untuk belajar hal-hal baru di dunia teknologi.
      </p>

      <p>
        <span className="italic">Di luar coding</span>, saya hobi bermain{" "}
        <span className="font-medium">game</span>, membaca{" "}
        <span className="font-medium">manga</span>, menonton{" "}
        <span className="font-medium">series</span>,{" "}
        <span className="font-medium">film</span>, dan{" "}
        <span className="font-medium">anime</span>. Saya juga sudah menjajal
        banyak game yang menambah pengalaman dan keseruan di waktu luang.
      </p>
    </motion.section>
  );
}
