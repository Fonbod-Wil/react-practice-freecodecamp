import './App.css'
import { useState } from 'react'
import { useTodos } from './hooks/useTodos'

function App() {
  const { items, loading, error, add, toggle, stats } = useTodos()
  const [title, setTitle] = useState('')

  return (
    <>
      <div style={{ display: 'grid', gap: 16, textAlign: 'left' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div>
            <h2 style={{ margin: 0 }}>Todos (Appwrite + PostgreSQL)</h2>
            <p style={{ margin: '6px 0 0', opacity: 0.8 }}>
              Done {stats.done}/{stats.total}
            </p>
          </div>
        </header>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            add(title)
            setTitle('')
          }}
          style={{ display: 'flex', gap: 8 }}
        >
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a todo..."
            style={{ flex: 1, padding: '10px 12px', borderRadius: 10, border: '1px solid #333' }}
          />
          <button type="submit" disabled={!title.trim()}>
            Add
          </button>
        </form>

        {error ? (
          <div style={{ padding: 12, borderRadius: 12, border: '1px solid #7f1d1d', background: '#2a1212' }}>
            <strong>App error:</strong> {error.message}
            <div style={{ marginTop: 8, opacity: 0.8 }}>
              Check your `.env` values (Project/Database/Collection IDs) and collection permissions.
            </div>
          </div>
        ) : null}

        {loading ? (
          <p style={{ opacity: 0.8 }}>Loading…</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
            {items.map((t) => (
              <li
                key={t.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 12,
                  borderRadius: 12,
                  border: '1px solid #333',
                }}
              >
                <label style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={t.completed}
                    onChange={() => toggle(t.id)}
                  />
                  <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
                    {t.title}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default App
