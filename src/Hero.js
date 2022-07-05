import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the interenet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et
            malesuada fames ac. Pretium fusce id velit ut tortor pretium viverra
            suspendisse potenti. Pulvinar mattis nunc sed blandit libero
            volutpat sed cras.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
