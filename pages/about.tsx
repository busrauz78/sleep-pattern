import Layout from "@/components/layout";
import React from "react";

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center gap-5">
      <div className="max-w-3xl text-center">

      <h1 className="font-bold">What is a Chronotype?</h1>

      <p className="text-center">
        A chronotype is your body’s natural disposition to be awake or asleep at
        certain times. Your chronotype is closely related to your body’s
        circadian rhythm, which controls your body’s sleep-wake cycle and
        melatonin production. Our circadian rhythm is primarily influenced by
        light exposure, and tends to rise and set with the sun. This means less
        melatonin is produced in the morning to help you wake up, and more is
        produced during the evenings to help you fall asleep. Unlike our
        circadian rhythm, our specific chronotype isn’t influenced by any
        outside force, except for genetics. This is why it’s so important to
        work with your chronotype rather than against it if you want to be as
        rested and productive as possible.
      </p>
      </div>

      </div>
    </Layout>
  );
}
