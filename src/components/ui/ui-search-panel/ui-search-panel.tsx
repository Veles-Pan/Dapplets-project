import React from 'react'
import './ui-search-panel.scss'

interface IProps {
    value: string
    setValue: (newValue: string) => void
    theme: string
    setTheme: (newTheme: string) => void
    order: string
    setOrder: (newOrder: string) => void
}

export const SearchPanel = ({
    value,
    setValue,
    theme,
    setTheme,
    order,
    setOrder,
}: IProps) => {
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(
            e.target.value === 'Title'
                ? 'title'
                : e.target.value === 'Release Date'
                ? 'released'
                : ''
        )
    }

    const onOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOrder(
            e.target.value === 'Descending'
                ? 'DESC'
                : e.target.value === 'Ascending'
                ? 'ASC'
                : ''
        )
    }

    return (
        <div className='navbar'>
            <input
                onChange={onInputChange}
                type='text'
                placeholder='Search...'
                value={value}
            ></input>

            <select onChange={onThemeChange}>
                <option></option>
                <option>Title</option>
                <option>Release Date</option>
            </select>

            <select onChange={onOrderChange}>
                <option></option>
                <option>Descending</option>
                <option>Ascending</option>
            </select>
        </div>
    )
}
