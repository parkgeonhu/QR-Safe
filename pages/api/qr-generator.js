// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var QRCode = require('qrcode')

export default (req, res) => {

  if(req.method === 'POST'){

    //console.log(req.body);
    // let sample={
    //   "name" : "삼각김밥",
    //   "price" : 15000,
    //   "expiration_date" : "2020-07-03"
    // }
  
    let data=JSON.stringify(req.body);
  
  
    // QRCode.QRCodeDraw.color.dark = '#d4d4d4';
    QRCode.toDataURL(data, function (err, url) {
      if (err) console.log('error: ' + err)
      res.statusCode = 200
      res.end("<!DOCTYPE html/><html><head><title>node-qrcode</title></head><body><img src='" + url + "'/></body></html>")
    })
  

  }


  //res.json({ name: 'John Doe' })
}
