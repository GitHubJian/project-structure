const appname = require('../package.json').name

module.exports = {
  name: appname,
  max_memory_restart: '256M',
  script: 'server/index.js',
  watch: false,
  ignore_watch: ['node_modules', '.idea', '.git'],
  merge_logs: true,
  instances: 1,
  node_args: '--max-semi-space-size=128',
  exec_mode: 'cluster',
  log_date_format: 'YYYY-MM-DD HH:mm:ss.SSS',
  vizion: false,
  deep_monitoring: true,
  wait_ready: true,
  listen_timeout: 10000,
  kill_timeout: 10000,
  env_development: {
    NODE_ENV: 'production',
    PORT: 8424
  },
  env_production: {
    NODE_ENV: 'production',
    PORT: 8424
  },
  min_uptime: 20000,
  max_restarts: 10
}
