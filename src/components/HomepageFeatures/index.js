import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '虚拟树【VTree】',
    image: './img/虚拟树.png',
    description: (
      <>
        基于UI的高性能自建虚拟树【VTree】，构建出层级化的埋点结构，稳定的SPM（Super Position Model） & SCM（Super Content Model）
      </>
    ),
  },
  {
    title: '链路追踪',
    image: './img/链路追踪.png',
    description: (
      <>
        全链路级别的链路追踪能力，助力绘制用户画像，满足你漏斗分析、个性化推荐、实时分析、离线分析
      </>
    ),
  },
  {
    title: '埋点平台',
    image: './img/埋点平台.png',
    description: (
      <>
        埋点虚拟树、埋点对象的可视化管理，涵盖着多版本并行开发管理，告别埋点管理混乱
      </>
    ),
  },
  {
    title: '数据校验',
    image: './img/数据校验.png',
    description: (
      <>
        多种可视化校验，保障埋点正确性；告别QA手动埋点测试，开发自主完成校验
      </>
    ),
  },
  {
    title: '全平台覆盖',
    image: './img/全平台覆盖.png',
    description: (
      <>
        多端SDK覆盖，iOS、Android、站内/站外H5，以及极简的RN、Flutter等扩展方案
      </>
    ),
  },
  {
    title: '完善的配套开发工具',
    image: './img/完善的配套开发工具.png',
    description: (
      <>
        一体化开发、可视化Debug、埋点测试、埋点上线工具，助力开发迭代速度
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureImg}>
        <img style={{ maxWidth: '100%', maxHeight: '100%' }} src={image} />
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
