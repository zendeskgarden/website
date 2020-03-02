/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* eslint-disable no-console */

import path from 'path';
import NetlifyAPI from 'netlify';
import { Octokit } from '@octokit/rest';

type Environment = 'production' | 'preview';

/**
 * Ensure all required ENV variables are available
 */
function validateEnvironment() {
  const requiredVars = [
    'CIRCLE_PROJECT_USERNAME',
    'CIRCLE_PROJECT_REPONAME',
    'CIRCLE_SHA1',
    'NETLIFY_TOKEN',
    'NETLIFY_SITE_ID',
    'GITHUB_TOKEN'
  ];

  for (const envVariable of requiredVars) {
    if (!process.env[envVariable]) {
      throw new Error(`Invalid environment. Missing variable "${envVariable}"`);
    }
  }
}

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

const client = new NetlifyAPI(process.env.NETLIFY_TOKEN);

function createGithubDeployment(environment: Environment) {
  return octokit.repos.createDeployment({
    owner: process.env.CIRCLE_PROJECT_USERNAME!,
    repo: process.env.CIRCLE_PROJECT_REPONAME!,
    ref: process.env.CIRCLE_SHA1!,
    task: 'deploy:netlify',
    environment,
    description: 'Publishes a preview version of the Garden website.',
    required_contexts: [],
    transient_environment: environment !== 'production'
  });
}

function createGithubDeploymentStatus(
  deploymentId: number,
  state: 'success' | 'error',
  environment: any,
  previewUrl?: string
) {
  return octokit.repos.createDeploymentStatus({
    owner: process.env.CIRCLE_PROJECT_USERNAME!,
    repo: process.env.CIRCLE_PROJECT_REPONAME!,
    deployment_id: deploymentId,
    state,
    log_url: previewUrl,
    environment_url: previewUrl,
    environment
  });
}

function deployNetlifySite(buildDir: string, environment: Environment) {
  return client.deploy(process.env.NETLIFY_SITE_ID, buildDir, {
    draft: environment !== 'production',
    message: `Deploy of SHA "${process.env.CIRCLE_SHA1}"`
  });
}

async function createNetlifyPreview() {
  try {
    let environment: Environment = 'preview';

    if (process.env.CIRCLE_BRANCH === 'master') {
      environment = 'production';
    }

    const {
      data: { id: deploymentId }
    } = await createGithubDeployment(environment);

    console.log(`Deployment "${deploymentId}" created.`);

    let deployStatus: 'success' | 'error';
    let deployUrl;

    try {
      const {
        deploy: { deploy_ssl_url: deploySSLUrl }
      } = await deployNetlifySite(path.resolve(__dirname, '../public'), environment);

      console.log(`Netlify site deployed at "${deploySSLUrl}"`);

      deployUrl = deploySSLUrl as string;
      deployStatus = 'success';
    } catch (error) {
      console.error(error);
      deployStatus = 'error';
    }

    const {
      data: { id: deploymentStatusId }
    } = await createGithubDeploymentStatus(deploymentId, deployStatus, environment, deployUrl);

    console.log(`Deployment Status "${deploymentStatusId}" created.`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

validateEnvironment();
createNetlifyPreview();
