import {useState} from 'react'
import React from 'react'

export default function useInput(initialValue: string) {
    const [value, setValue] = useState(initialValue)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange,
    }
}
