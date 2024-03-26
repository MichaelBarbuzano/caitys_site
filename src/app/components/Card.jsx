
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';





const Card = ({ imageSrc, title, content, integerValue}) => {


    return (
      <div>
        <div className="grid grid-cols-3 gap-10 relative mt-40 p-5">
      <div className="relative ">
      <Image
        src="/assets/card1.png"
        alt="Service Card 1"
        width={2400}
        height={100}
      />
      <div>
      <Link href={`/requestPage?v=${1}`}>
      <Image
        src="/assets/buyButton2.png"
        alt="Buy Button 1"
        width={2400}
        height={100}
        className="-mt-0" // Add negative margin-top to move the button closer to the image
      />
      </Link>
      </div>
    </div>
    <div className="relative ">
      <Image
        src="/assets/card2.png"
        alt="Service Card 1"
        width={2400}
        height={100}
      />
      <div>
      <Link href={`/requestPage?v=${2}`}>
      <Image
        src="/assets/buyButton2.png"
        alt="Buy Button 1"
        width={2400}
        height={100}
        className="-mt-0" // Add negative margin-top to move the button closer to the image
      />
      </Link>
      </div>
    </div>
    <div className="relative ">
      <Image
        src="/assets/card3.png"
        alt="Service Card 1"
        width={2400}
        height={100}
      />
      <div>
      <Link href={`/requestPage?v=${3}`}>
      <Image
        src="/assets/buyButton2.png"
        alt="Buy Button 1"
        width={2400}
        height={100}
        className="-mt-0" // Add negative margin-top to move the button closer to the image
      />
      </Link>
      </div>
    </div>
    </div>
    </div>
    );
  };

export default Card;
