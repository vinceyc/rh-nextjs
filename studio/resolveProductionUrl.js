// ./resolveProductionUrl.js
export default function resolveProductionUrl(document) {
    return `https://rh-nextjs-web.netlify.app/${document.slug.current}`
}