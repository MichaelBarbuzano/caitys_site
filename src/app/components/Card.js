import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const useState = React.useState


const Card = ({ imageSrc, title, content, integerValue}) => {



    return (
      <div>
        <div className="grid grid-cols-3 gap-10 relative mt-40 p-5">
      <div className="relative ">
      <Image
        src="/assets/serviceCard.png"
        alt="Service Card 1"
        width={2400}
        height={100}
      />
      <div>
        <button>
      <Image
        src="/assets/buyButton2.png"
        alt="Buy Button 1"
        width={2400}
        height={100}
        className="-mt-0" // Add negative margin-top to move the button closer to the image
      />
      </button>
      </div>
    </div>
    <div className="relative ">
      <Image
        src="/assets/serviceCard.png"
        alt="Service Card 1"
        width={2400}
        height={100}
      />
      <div>
      <a href="/request">
      <Image
        src="/assets/buyButton2.png"
        alt="Buy Button 2"
        width={2400}
        height={100}
        className="-mt-0" // Add negative margin-top to move the button closer to the image
      />
      </a>
      </div>
    </div>
    <div className="relative ">
      <Image
        src="/assets/serviceCard.png"
        alt="Service Card 1"
        width={2400}
        height={100}
      />
      <div>
      <a href="/request">
      <Image
        src="/assets/buyButton2.png"
        alt="Buy Button 3"
        width={2400}
        height={100}
        className="-mt-0" // Add negative margin-top to move the button closer to the image
      />
      </a>
      </div>
    </div>
    </div>
    </div>
    );
  };

export default Card;
