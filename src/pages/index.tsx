import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HeroAnimation from '../components/HeroAnimation';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx("container", styles.Hero_Container)}>
        <div className={clsx('hero__leftcontainer', styles.Hero_TextContainer)}>
          <h1 className={clsx('hero__title', styles.Hero_Title)}>{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}> <Link
            className="button button--primary button--lg"
            to="/docs/getting-started">
            Get Started
          </Link>
          </div>
        </div>
        <div className={clsx(styles.Hero_AnimationContainer)}>
          <HeroAnimation />
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
