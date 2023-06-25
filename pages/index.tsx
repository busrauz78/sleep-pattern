import Layout from '@/components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="mb-3">
        <h1 className="font-bold">What is your chronotype?</h1>
      </div>
      <div className="max-w-3xl">
        <p style={{ textAlign: 'center', marginBottom: '10px' }}>
          We’re all familiar with the phrases “early bird” and “night owl.” Some
          of us are able to wake right up in the morning and start the day
          immediately, while some of us function much better at night.
          Everyone’s daily schedules work differently because our bodies all
          work differently.
        </p>

        <p style={{ textAlign: 'center', marginBottom: '10px' }}>
          Our bodies function according to our own unique biological clock— part
          of this includes our chronotypes. I talk about chronotypes a lot
          because they’re a very important part of getting a good night’s sleep.
        </p>
        <p style={{ textAlign: 'center', marginBottom: '10px' }}>
          In case you’re not familiar with chronotypes though, I hope this
          helpful guide can fill in some of the blanks you have on the subject.
          Sleeping according to your chronotype’s preferred schedule can make a
          huge difference in getting the quality sleep you need each night, even
          if you don’t follow what may be considered a “normal” sleep schedule.
        </p>
        <p style={{ textAlign: 'center' }}>
          But before we get much further, let’s take a look at what chronotypes
          are, and why they’re important to our daily function.
        </p>
      </div>
      <div className="flex flex-row space-x-4 mt-20 ">
        <Link
          href="/about"
          className="container w-auto p-3 border border-white rounded-md"
        >
          <h3>
            About <span>-&gt;</span>
          </h3>
          <p>What is Chronotype?</p>
        </Link>
        <Link
          href="/chronotypes"
          className="container w-auto p-3 border border-white rounded-md"
        >
          <h3>
            Chronotypes <span>-&gt;</span>
          </h3>
          <p>Learn all chronotypes!</p>
        </Link>
        <Link
          href="/quiz"
          className="container w-auto p-3 border border-white rounded-md"
        >
          <h3>
            ChronoQuiz<span>-&gt;</span>
          </h3>
          <p>Learn your chronotype!</p>
        </Link>
      </div>
    </Layout>
  );
}
