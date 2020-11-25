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
        Throughout this tutorial, you will learn how to set state using `useState` and `useEffect` Hooks. We will create different components and for the last component, we will combine these two hooks and create a recipe app that will fetch new recipes from an API.
				<h4>
					You can view the finished{' '}
          <span><a href="'https://react-tut-beginner.netlify.app/" target="_blank">
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
			By the end of the tutorial, you will have the hands-on practical and real-life scenario of basic React Application using React Hooks.
      You will manage state in a functional component using Hooks, and you’ll have a foundation for more advanced Hooks such as <code>useCallback</code>, <code>useMemo</code>, and <code>useContext</code>.
			</p>
		),
	},
	{
		title: 'Beginner Friendly',
		imageUrl: 'img/undraw_docusaurus_react.svg',
		description: (
			<>
      To follow along with the tutorial, you need a basic familiarity with HTML&CSS, basic knowledge of JavaScript ES6, and some basic React knowledge like props, components, one way-data-flow.
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
