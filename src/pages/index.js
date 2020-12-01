import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
	{
		title: 'Project based',
		imageUrl: 'img/problems2.svg',
		description: (
			<p>
        Learn how to set state using <code>useState</code> and <code>useEffect</code> Hooks. Create different components and create a recipe app that will fetch new recipes from an API.
				<h4>
					You can view the finished{' '}
          <span><a href="https://react-tut-beginner.netlify.app/" target="_blank">
            application.
					</a></span>
				</h4>
			</p>
		),
	},
	{
		title: 'Real-life scenario',
		imageUrl: 'img/focus.svg',
		description: (
			<p>
			You will have the hands-on practical and real-life scenario of basic React Application using React Hooks.
			</p>
		),
	},
	{
		title: 'Beginner Friendly',
		imageUrl: 'img/undraw_docusaurus_react.svg',
		description: (
			<>
      To follow along with the tutorial, you need a basic familiarity with HTML&CSS, JavaScript ES6, and basic React knowledge.
			</>
		),
	},
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Getting started with React Hooks: useState and useEffect">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>
				{features && features.length > 0 && (
					<section className={styles.features}>
						<div className="container">
							<div className="row">
								{features.map((props, idx) => (
									<Feature key={idx} {...props} />
								))}
							</div>
						</div>
					</section>
				)}
			</main>

    </Layout>
  );
}

export default Home;
