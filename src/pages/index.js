import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import {useColorMode} from '@docusaurus/theme-common';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const {colorMode} = useColorMode();
  const bgColor = colorMode === 'dark' ? '#826D6C' : '#D83812';
  const buttonColor = colorMode === 'dark' ? '#4F4A4A' : '#D83812';
  const buttonBgColor = colorMode === 'dark' ? '#F2EBF0' : '#fff';
  const textColor = buttonBgColor;

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ backgroundColor: bgColor }}>
      <div className="container">
        <h1 className="hero__title" style={{ color: textColor }}>{siteConfig.title}</h1>
        <p className="hero__subtitle" style={{ color: textColor }}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            style={{ backgroundColor: buttonBgColor }}
            to="/docs/intro">
            <span style={{ color: buttonColor }}>开始使用</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome To ${siteConfig.title}`}
      description="This is home-page-website for eventtracing/dawn on github.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
