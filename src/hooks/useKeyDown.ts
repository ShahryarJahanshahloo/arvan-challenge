import { useEffect } from 'react'

const useKeyDown = (key: string, handler: (event: KeyboardEvent) => void) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === key) {
      event.preventDefault()
      handler(event)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handler])
}

export default useKeyDown
