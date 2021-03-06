const { exec } = require("child_process");
const yaml = require('js-yaml');
const fs   = require('fs');

require('dotenv').config();

const getConfig = () => {
  try {
    const doc = yaml.load(fs.readFileSync('./config/dev.yml', 'utf8'));
    return doc;
  } catch (e) {
    console.log("err", e)
  }
};

const config = getConfig()?.public;

if (!config) {
  return null
}

const VERCEL_CI_TOKEN = process.env.VERCEL_CI_TOKEN;

const execString = `vercel --debug --confirm --token ${VERCEL_CI_TOKEN} --build-env WHICH_ENV="${config.env}" --build-env MESSAGE="${config.message}"`;

exec(execString, (error, stdout, stderr) => {
  console.log("executed")

  if(error) {
    console.log({error})
    return error;
  } 
  if(stdout) {
    console.log({stdout})
    return stdout;
  }
  if(stderr) {
    console.log({stderr})
    return stderr;
  }
});