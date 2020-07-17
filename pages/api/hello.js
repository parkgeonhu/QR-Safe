// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  //res.end(new Buffer(qr.toDataURL(), 'base64'));
  res.json({ name: 'John Doe' })
}
