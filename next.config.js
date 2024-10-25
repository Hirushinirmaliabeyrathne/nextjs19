const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'hirushiabeyrathne',
        mongodb_password: 'codezela12345',
        mongodb_clustername: 'Cluster0',
        mongodb_database: 'Nextjs-course19-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'hirushiabeyrathne',
      mongodb_password: 'codezela12345',
      mongodb_clustername: 'Cluster0',
      mongodb_database: 'Nextjs-course19',
    },
  };
};
