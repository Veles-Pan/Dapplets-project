import {useCallback, useRef} from 'react'

export default function useDebounce(callback: () => void, delay: number) {
    const timer = useRef<NodeJS.Timeout>()

    const debouncedCallback = useCallback(() => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            callback()
        }, delay)
    }, [callback, delay])

    return debouncedCallback
}
