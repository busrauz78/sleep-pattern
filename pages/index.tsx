import Layout from '@/components/layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center gap-10">
        <div>
          <h1 className="font-bold">What is your chronotype?</h1>
        </div>
        <Image
          className="max-w-xl"
          src="/assets/about.png"
          alt="Chronotype"
          width={500}
          height={500}
        />
        <div className="max-w-3xl text-center">
          <p>
            We’re all familiar with the phrases “early bird” and “night owl.”
            Some of us are able to wake right up in the morning and start the
            day immediately, while some of us function much better at night.
            Everyone’s daily schedules work differently because our bodies all
            work differently.
          </p>
          <p>
            Our bodies function according to our own unique biological clock—
            part of this includes our chronotypes. I talk about chronotypes a
            lot because they’re a very important part of getting a good night’s
            sleep.
          </p>
          <p>
            In case you’re not familiar with chronotypes though, I hope this
            helpful guide can fill in some of the blanks you have on the
            subject. Sleeping according to your chronotype’s preferred schedule
            can make a huge difference in getting the quality sleep you need
            each night, even if you don’t follow what may be considered a
            “normal” sleep schedule.
          </p>
          <p>
            But before we get much further, let’s take a look at what
            chronotypes are, and why they’re important to our daily function.
          </p>
        </div>
      </div>
    </Layout>
  );
}
