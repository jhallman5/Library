const loginCheck = (request, response, next) =>
  request.session.passport
    ? response.redirect(`user/${request.session.passport.user}`)
    : next()

const sessionChecker = (request, response, next) =>
  request.session.passport
    ? next()
    : response.redirect('/sign-in')

module.exports = {
  loginCheck,
  sessionChecker
}
