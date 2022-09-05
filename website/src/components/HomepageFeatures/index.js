import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'GRNET eID-Proxy',
    Svg: require('@site/static/img/undraw_opened_tabs.svg').default,
    description: (
      <>
        Learn about GRNET eID Proxy.
      </>
    ),
  },
  {
    title: 'Services',
    Svg: require('@site/static/img/undraw_dropdown_menu.svg').default,
    description: (
      <>
        Connected services to the GRNET eID Proxy in order to enable authentication through the eIDAS-Node infrastructure.
      </>
    ),
  },
  {
    title: 'GRNET eID-Proxy Authentication',
    Svg: require('@site/static/img/undraw_bibliophile.svg').default,
    description: (
      <>
        Learn how to enable authentication via the GRNET eID Proxy.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
