export class HttpError extends Error {
  constructor(message, { status, body } = {}) {
    super(message)
    this.name = 'HttpError'
    this.status = status
    this.body = body
  }
}

async function readBodySafely(res) {
  const contentType = res.headers.get('content-type') || ''
  if (contentType.includes('application/json')) return await res.json()
  return await res.text()
}

export async function http(path, { method = 'GET', body, headers, signal } = {}) {
  const res = await fetch(path, {
    method,
    headers: {
      ...(body ? { 'content-type': 'application/json' } : null),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    signal,
  })

  const data = await readBodySafely(res)
  if (!res.ok) {
    throw new HttpError('Request failed', { status: res.status, body: data })
  }
  return data
}

