// Renders the app to static HTML and writes it into dist/index.html, so the
// page is readable before (and without) JavaScript.
import { readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const ssrDir = resolve(root, '.ssr')
const indexPath = resolve(root, 'dist/index.html')

const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)
const template = await readFile(indexPath, 'utf8')
if (!template.includes('<!--app-->')) throw new Error('dist/index.html has no <!--app--> marker')
await writeFile(indexPath, template.replace('<!--app-->', render()))
await rm(ssrDir, { recursive: true, force: true })
console.log('prerendered dist/index.html')
