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
  return (
    <Layout
      title={`Docs`}
      description="Post 🚀 your article on multiple platforms in 1-click"
    >

        <HomepageHeader />
    </Layout>
  );
}
