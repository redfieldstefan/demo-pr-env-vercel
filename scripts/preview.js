const { exec } = require("child_process");
const yaml = require('js-yaml');
const fs   = require('fs');

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

const execString = `yarn vercel  --build-env WHICH_ENV="${config.env}" --build-env MESSAGE="${config.message}"`;

exec(execString)