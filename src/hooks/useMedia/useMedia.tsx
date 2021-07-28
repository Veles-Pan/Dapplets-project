import {useEffect, useState} from 'react'

export default function useMedia(query: string) {
    const mediaMatch = window.matchMedia(query)
    const [matches, setMatches] = useState(mediaMatch.matches)

    useEffect(() => {
        //@ts-ignore
        const handler = e => setMatches(e.matches)
        mediaMatch.addListener(handler)
        return () => mediaMatch.removeListener(handler)
    })
    return matches
}
