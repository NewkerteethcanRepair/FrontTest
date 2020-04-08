const router = require('koa-router')()
const { login } = require('../dao/usersDao')

router.prefix('/users')

router.post('/login', async function (ctx, next) {
  ctx.body = await login(ctx.request.body)
})



module.exports = router
