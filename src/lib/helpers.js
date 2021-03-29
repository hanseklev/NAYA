import { isFuture } from "date-fns"
import _ from "lodash"


export function cn(...args) {
  return args.filter(Boolean).join(" ")
}

export function parsePrice(price) {
  if (typeof price === "undefined" ) return 0
  return Number(price.replace(/[^0-9.-]+/g, ""))
}

export function mapEdgesToNodes(data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current
}

export function filterOutDocsPublishedInTheFuture({ publishedAt }) {
  return !isFuture(publishedAt)
}

export function getBlogUrl(slug) {
  return `/post/${slug}/`
}

export function getCategoryUrl(name){
  const url = _.kebabCase(name)
  return `/categories/${url}`
}

export function buildImageObj(source = { asset: {} }) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  }

  if (source.crop) imageObj.crop = source.crop
  if (source.hotspot) imageObj.hotspot = source.hotspot

  return imageObj
}

export function toPlainText(blocks) {
  if (!blocks) {
    return ""
  }
  return blocks
    .map(block => {
      if (block._type !== "block" || !block.children) {
        return ""
      }
      return block.children.map(child => child.text).join("")
    })
    .join("\n\n")
}

export function debounce(method, delay) {
  clearTimeout(method._tId);
  method._tId= setTimeout(function(){
      method();
  }, delay);
}
