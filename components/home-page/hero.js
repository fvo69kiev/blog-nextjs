import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/ann.png'
          alt='An image showing Ann'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Ann</h1>
      <p>
        I blog about fitness - how to become healthy and successful
      </p>
    </section>
  );
}

export default Hero;
