import {MutableRefObject, useEffect} from 'react'
import {useRef, useState} from 'react'

export default function useScroll(
    parentRef: MutableRefObject<Element | null>,
    ref: MutableRefObject<Element | null>,
    callback: () => void
) {
    const [element, setElement] = useState<Element | null>(null)
    const observer = useRef<null | IntersectionObserver>(null)

    const cleanOb = () => {
        if (observer.current) {
            observer.current.disconnect()
        }
    }

    const options = {
        root: parentRef.current,
        rootMargin: '0px',
        threshold: 0,
    }

    useEffect(() => {
        setElement(ref.current)
    }, [ref])

    useEffect(() => {
        if (!element) return
        cleanOb()
        const ob = (observer.current = new IntersectionObserver(([entry]) => {
            const isElementIntersecting = entry.isIntersecting
            if (isElementIntersecting) {
                callback()
            }
        }, options))
        ob.observe(element)
        return () => {
            cleanOb()
        }
    }, [callback, element])
}
