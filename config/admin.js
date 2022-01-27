module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '38975f0ec2ccab8f629df4283c7def0a'),
  },
});
