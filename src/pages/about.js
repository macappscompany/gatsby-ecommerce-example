import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { toOptimizedImage } from '../helpers/general';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`Exist \n Modern fashion for everyone`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            History
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Values
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Sustainability
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              Exist is a new sustainable fashion brand launching in Portland, Oregon.
              We make timeless everyday luxury clothing with minimal environmental impact.
            </p>
            <br />
            <br />
            <p>
              Founded in 2025, we're committed to ethical manufacturing and sustainable
              materials. Every piece is designed in Portland and produced using
              eco-friendly practices and locally-sourced materials whenever possible.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={toOptimizedImage('/about1.png')}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Our Values</h3>
            <div ref={valuesRef}>
              <p>
                At Exist, we believe fashion shouldn't cost the earth. Our mission
                is to create beautiful, durable clothing that respects both people
                and the planet. We're building a new model for fashion - one that
                prioritizes sustainability, transparency, and quality over fast trends
                and mass production.
              </p>
              <ol>
                <li>Sustainable and eco-friendly materials</li>
                <li>Ethical manufacturing practices</li>
                <li>Transparent supply chain</li>
                <li>Quality over quantity</li>
              </ol>
              <img alt={'founder'} src={toOptimizedImage('/about2.png')}></img>
            </div>
            <h3>Sustainability</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                Launched from Portland, Oregon in 2025, Exist is committed to
                sustainable fashion from the ground up. We use organic cotton,
                recycled materials, and plant-based dyes. Our packaging is 100%
                recyclable, and we partner with local manufacturers to reduce
                our carbon footprint.
              </p>
              <p>
                Every Exist garment is designed to last. We believe in slow fashion -
                creating pieces you'll wear for years, not seasons. Our Portland
                design studio works closely with ethical manufacturers who share
                our commitment to fair wages and safe working conditions.
              </p>
              <p>
                We're transparent about our supply chain and continuously working
                to reduce our environmental impact. Join us in reimagining what
                fashion can be.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={toOptimizedImage('/about3.png')}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
