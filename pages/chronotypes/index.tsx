import Layout from '@/components/layout';
import { CHRONOTYPES } from '@/constants';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Chronotypes() {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="text-center max-w-3xl">
          <h1>What are the Chronotypes?</h1>
          <p>
            We already know about the early birds and the night owls, but I’ve
            actually broken it down further into four chronotypes that indicate
            a person’s ideal schedule according to their unique internal clock.
            These chronotypes are dolphin, lion, bear, and wolf.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center flex-wrap gap-2 mt-5 max-w-8xl">
          {CHRONOTYPES.map((c) => (
            <Link className="lg:w-4/12 flex justify-center items-center" key={c.id} href={`/chronotypes/${c.id}`}>
              <Image className="rounded" src={c.image} alt="Chronotype" width={500} height={500} />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
