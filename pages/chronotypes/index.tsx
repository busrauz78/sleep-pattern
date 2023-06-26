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
        <div className="flex flex-row justify-center flex-wrap gap-4 mt-5">
          {CHRONOTYPES.map((c) => (
            <Link className="w-4/12" key={c.id} href={`/chronotypes/${c.id}`}>
              <Image className="rounded" src={c.image} alt="Chronotype" />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
