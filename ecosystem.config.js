module.exports = {
  apps: [{
    name: 'pm2Node',
    script: 'app.js',
    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'root',
      host: '119.23.50.196',
      ref: 'origin/master',
      repo: 'git@github.com:lijianhu1/pm2NodeTest.git',
      path: '/root/pm2NodeTest',
      'post-deploy': 'pm2 reload ecosystem.config.js --env production'
    }
  }
};
