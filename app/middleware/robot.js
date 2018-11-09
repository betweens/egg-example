module.exports = (options, app) => { 
  return async function robotMiddleware(ctx, next) {
    // console.log(ctx.helper.relativeTime(545511210000));
    const source = ctx.get('user-agent') || '';
    const match = options.ua.some(ua => ua.test(source));
    if (match) {
      ctx.status = 403;
      ctx.message = 'Go away, robot.';
    } else {
      await next();
    }
  }
};
