

export async function useSvgToImage (svg:SVGSVGElement){
  const img = new Image();
  return new Promise((resolve,reject)=>{
    img.src = 'data:image/svg+xml,' + decodeURI(encodeURIComponent(svg.outerHTML))
    img.onload = function (){
      resolve(img)
    }
  })
}
