import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import  '../css/custom.css';
import Landing from "../components/Landing";

function HomepageHeader() {
  return (
 <Landing />

  );
}





export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Scattr | ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
        <HomepageHeader />
    </Layout>
  );
}
