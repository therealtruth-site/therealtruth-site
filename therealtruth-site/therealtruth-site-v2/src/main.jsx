import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {
  const [timeLeft, setTimeLeft] = React.useState(3600)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(t => (t > 0 ? t - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const format = (s) => {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
  }

  return (
    <div className="text-center">
      <h1 className="text-4xl mb-4">The Real Truth Countdown</h1>
      <div className="text-6xl font-mono">{format(timeLeft)}</div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
