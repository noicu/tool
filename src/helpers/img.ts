/**
 * This function converts an SVG element to an image using a Promise in TypeScript.
 * @param {SVGSVGElement} svg - The parameter `svg` is of type `SVGSVGElement`, which is a DOM element
 * representing an SVG (Scalable Vector Graphics) image. It contains the markup and attributes that
 * define the image.
 * @returns A promise that resolves with an image object.
 */
export async function useSvgToImage (svg:SVGSVGElement){
  const img = new Image();
  return new Promise((resolve,reject)=>{
    img.src = 'data:image/svg+xml,' + decodeURI(encodeURIComponent(svg.outerHTML))
    img.onload = function (){
      resolve(img)
    }
  })
}
