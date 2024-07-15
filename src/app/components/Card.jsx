
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';





const Card = ({ imageSrc, title, content, integerValue}) => {


    return (
      <div>
        <div className="grid grid-cols-3 gap-10 relative mt-40 p-5">
      <div className="relative ">
      <Image
        src="/assets/card1.jpg"
        alt="Service Card 1"
        width={2400}
        height={100}
      />
      <div>
      <Link href={`/requestPage?v=${1}`}>
      </Link>
      </div>
    </div>
    <div className="relative ">
      <Image
        src="/assets/card2.jpg"
        alt="Service Card 1"
        width={2400}
        height={100}
      />
      <div>
      <Link href={`/requestPage?v=${2}`}>
      </Link>
      </div>
    </div>
    <div className="relative ">
      <Image
        src="/assets/card3.jpg"
        alt="Service Card 1"
        width={2400}
        height={100}
      />
      <div>
      <Link href={`/requestPage?v=${3}`}>
      </Link>
      </div>
    </div>
    </div>
    </div>
    );
  };

export default Card;
