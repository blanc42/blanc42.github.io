const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

function normalize(pathname: string): string {
  let path = decodeURI(pathname)
  if (BASE && (path === BASE || path.startsWith(`${BASE}/`))) {
    path = path.slice(BASE.length)
  }
  return path.replace(/^\/+|\/+$/g, '')
}

let route = $state(normalize(window.location.pathname))

window.addEventListener('popstate', () => {
  route = normalize(window.location.pathname)
})

export const router = {
  get route() {
    return route
  },
}

export function href(path: string): string {
  const clean = path.replace(/^\/+/, '')
  return clean ? `${BASE}/${clean}` : `${BASE}/`
}

export function navigate(path: string): void {
  const target = href(path)
  if (target === window.location.pathname) return
  window.history.pushState(null, '', target)
  route = normalize(window.location.pathname)
  window.scrollTo({ top: 0 })
}
