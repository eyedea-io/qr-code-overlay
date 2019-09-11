const { createCanvas, loadImage } = require('canvas')
export function generateOverlay(qrCodeURL: string,label:string,logoURL?:string ) {
  let canvas: any;
  let ctx: any;
  loadImage(qrCodeURL).then((image: any) => {
   canvas = createCanvas(image.width +120, image.height+ 120) // TODO: parameter : padding
   ctx = canvas.getContext('2d')
   ctx.drawImage(image,60,60) // padding/2
   ctx.font='18px Arial' // TODO: parameter
   ctx.textAlign = "center";
   ctx.fillText(label, canvas.width/2, 100+image.height)
  logoURL && loadImage(logoURL).then((img:any)=>{
     ctx.drawImage(img,10,image.height + 65,45,45) // TODO: parameter
   })
  })
  const stream = canvas.createPDFStream({
    title: {label}
  })
  return stream
}

