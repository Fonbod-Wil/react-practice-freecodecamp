import { useCallback, useEffect, useMemo, useState } from 'react'
import { createTodo, listTodos, updateTodo } from '../api/todos'

export function useTodos() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const refresh = useCallback(async () => {
    setError(null)
    setLoading(true)
    try {
      const data = await listTodos()
      setItems(data)
    } catch (e) {
      setError(e instanceof Error ? e : new Error('Failed to load todos'))
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void refresh()
  }, [refresh])

  const add = useCallback(async (title) => {
    setError(null)
    const t = title.trim()
    if (!t) return

    try {
      const created = await createTodo({ title: t })
      setItems((prev) => [created, ...prev])
    } catch (e) {
      setError(e instanceof Error ? e : new Error('Failed to create todo'))
    }
  }, [])

  const toggle = useCallback(async (id) => {
    setError(null)
    const current = items.find((x) => x.id === id)
    if (!current) return

    // Optimistic update (fast UI), rollback if request fails
    setItems((prev) =>
      prev.map((x) => (x.id === id ? { ...x, completed: !x.completed } : x)),
    )

    try {
      const updated = await updateTodo(id, { completed: !current.completed })
      setItems((prev) => prev.map((x) => (x.id === id ? updated : x)))
    } catch (e) {
      setItems((prev) => prev.map((x) => (x.id === id ? current : x)))
      setError(e instanceof Error ? e : new Error('Failed to update todo'))
    }
  }, [items])

  const stats = useMemo(() => {
    const total = items.length
    const done = items.filter((t) => t.completed).length
    return { total, done }
  }, [items])

  return { items, loading, error, refresh, add, toggle, stats }
}

