const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1', time: 1541571077 },
        { id: 2, title: 'this is news 2', url: '/news/2', time: 1541572077 }
      ]
    };
    await this.ctx.render('news/list.tpl', dataList);
  }

  async post() {
    this.ctx.body = `body: ${JSON.stringify(this.ctx.request.body)}`;
  }

  async add() {
  	const ctx = this.ctx;
  	let count = ctx.cookies.get('count');
  	count = count ? parseInt(count) : 0;
  	console.log(count, '******');
  	ctx.cookies.set('count', ++count);
/*    
    const count = ctx.cookies.get('count');
    // count = count ? parseInt(count) : 0;
    ctx.cookies.set('count', ++count);*/
    ctx.body = 'count';
  }

  async remove() {
    const ctx = this.ctx;
    ctx.logger.info('some request data: %j', ctx.session);
    const count = ctx.cookies.set('count', null);
    ctx.status = 204;
  }
}

module.exports = NewsController;
