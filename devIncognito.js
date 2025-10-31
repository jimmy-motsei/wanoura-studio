#!/usr/bin/env node
const { spawn } = require('child_process');
const http = require('http');
const os = require('os');

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const url = `http://localhost:${port}`;

function waitForServer(retries = 120, intervalMs = 500) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    const timer = setInterval(() => {
      attempts += 1;
      const req = http.get(url, (res) => {
        clearInterval(timer);
        res.resume();
        resolve();
      });
      req.on('error', () => {
        if (attempts >= retries) {
          clearInterval(timer);
          reject(new Error('Timed out waiting for dev server'));
        }
      });
    }, intervalMs);
  });
}

function openChromeIncognito(targetUrl) {
  const platform = os.platform();
  if (platform === 'darwin') {
    return spawn('open', ['-a', 'Google Chrome', '--args', '--incognito', targetUrl], { stdio: 'ignore', detached: true });
  }
  if (platform === 'win32') {
    return spawn('cmd', ['/c', 'start', '', 'chrome', '-incognito', targetUrl], { stdio: 'ignore', detached: true });
  }
  const trySpawn = (cmd, args) => spawn(cmd, args, { stdio: 'ignore', detached: true });
  let p = trySpawn('google-chrome', ['--incognito', targetUrl]);
  p.on('error', () => {
    p = trySpawn('chromium', ['--incognito', targetUrl]);
    p.on('error', () => {
      trySpawn('xdg-open', [targetUrl]);
    });
  });
  return p;
}

async function main() {
  const child = spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'dev'], {
    env: { ...process.env, PORT: String(port) },
    stdio: 'inherit',
  });

  try {
    await waitForServer();
    openChromeIncognito(url);
    console.log(`Opened Chrome Incognito at ${url}`);
  } catch (err) {
    console.error(String(err));
  }

  child.on('exit', (code) => process.exit(code ?? 0));
}

main();

