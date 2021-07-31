import React, {useRef, useEffect, useState, createRef, useCallback} from 'react'
import './ui-itemList.scss'

import axios from 'axios'
import useScroll from '../../../hooks/useScroll'
import {IItem} from './types'
import {SearchPanel} from '../ui-search-panel'
import Item from '../ui-item'
import {DndContext, DragEndEvent} from '@dnd-kit/core'
import gsap from 'gsap'
import useTags from '../../../hooks/useTags'

import {SortableContext, arrayMove} from '@dnd-kit/sortable'
import fetchApi from '../../api'

const API_URL = ' https://dapplets-hiring-api.herokuapp.com/api/v1'
const FILES = '/files'
const LIMIT = 10

function useDebouncedEffect(callback: any, delay: number, deps: any[] = []) {
    const data = useRef<{firstTime: boolean; clearFunc?: () => void}>({
        firstTime: true,
    })
    useEffect(() => {
        const {firstTime, clearFunc} = data.current

        if (firstTime) {
            data.current.firstTime = false
            return
        }

        const handler = setTimeout(() => {
            if (clearFunc && typeof clearFunc === 'function') {
                clearFunc()
            }
            data.current.clearFunc = callback()
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [delay, ...deps])
}

export const ItemList: React.FC = () => {
    const [items, setItems] = useState<IItem[]>([])
    const [images, setImages] = useState<{[id: string]: string}>({})
    const [start, setStart] = useState<number>(0)
    const [search, setSearch] = useState('')
    const [theme, setTheme] = useState('')
    const [order, setOrder] = useState('')
    const [isScrolled, setIsScrolled] = useState(false)
    const [isLoading, changeLoading] = useState<boolean>(true)
    const [isResultLoading, changeResultLoading] = useState<boolean>(true)

    const parentRef = createRef<HTMLDivElement>()
    const childRef = createRef<HTMLDivElement>()

    useEffect(() => {
        if (!isLoading) return
        const loadingTimeline = gsap.timeline({
            repeat: -1,
            ease: 'slow(0.7, 0.7, false)',
            paused: true,
        })

        loadingTimeline.fromTo('.loader_active', 3, {x: -150}, {x: 600})

        loadingTimeline.play(0)

        return () => {
            loadingTimeline.kill()
            gsap.to('.loader_inactive', {x: 0})
        }
    }, [isLoading])

    const handleScroll = useCallback(() => {
        if (!isResultLoading) {
            setIsScrolled(true)
            setStart(prevStart => prevStart + LIMIT)
        }
    }, [isResultLoading])

    useScroll(parentRef, childRef, handleScroll)

    const tags = useTags()

    const getImage = (filename: string, id: string) => {
        axios
            .get(`${API_URL}${FILES}/${filename}`)
            .then(() => {
                setImages(prevImages => ({
                    ...prevImages,
                    [id]: `${API_URL}${FILES}/${filename}`,
                }))
            })
            .catch(() => {
                setImages(prevImages => ({
                    ...prevImages,
                    [id]: `https://i.imgur.com/VhlKzb1.png`,
                }))
            })
    }

    useEffect(() => {
        if (search) {
            changeResultLoading(true)
            setItems([])
            setStart(0)
        }
    }, [search])

    useEffect(() => {
        if (order && theme) {
            changeResultLoading(true)
            setItems([])
            setStart(0)
        }
    }, [order, theme])

    const filterSearchResult = (result: IItem[], totalItems: number) => {
        let filteredResult = result.filter(function (element) {
            return element.title.toLowerCase().includes(search.toLowerCase())
        })

        if (filteredResult !== []) {
            if (!stopLoader(start, totalItems)) {
                setIsScrolled(true)
                setStart(prevStart => prevStart + LIMIT)
            }

            return filteredResult
        } else {
            if (!stopLoader(start, totalItems)) {
                setIsScrolled(true)
                setStart(prevStart => prevStart + LIMIT)
            }
            return []
        }
    }

    const stopLoader = (results: number, totalItems: number) => {
        if (results >= totalItems || totalItems === 0) {
            changeLoading(false)
            return true
        } else return false
    }

    const createListItems = (result: IItem[], isUpdated: boolean) => {
        if (isUpdated) {
            setItems([...result])
        } else {
            setItems(prevItems => [...prevItems, ...result])
        }

        result.forEach((element: IItem) => {
            getImage(element.icon, element.id)
        })
    }

    useEffect(() => {
        fetchApi({
            search,
            start,
            theme,
            order,
            isScrolled,
            changeResultLoading,
            filterSearchResult,
            createListItems,
            setIsScrolled,
            stopLoader,
            items,
        })
    }, [])

    useDebouncedEffect(
        () => {
            changeResultLoading(true)

            if (!isLoading) {
                changeLoading(true)
            }

            fetchApi({
                search,
                start,
                theme,
                order,
                isScrolled,
                changeResultLoading,
                filterSearchResult,
                createListItems,
                setIsScrolled,
                stopLoader,
                items,
            })
        },
        1000,
        [start, search]
    )

    function handleOnDragEnd(event: DragEndEvent) {
        const {active, over} = event

        if (over?.id && active.id !== over?.id) {
            setItems(items => {
                const itemIds = items.map(i => i.id)
                const oldIndex = itemIds.indexOf(active.id)
                const newIndex = itemIds.indexOf(over.id)

                return arrayMove(items, oldIndex, newIndex)
            })
        }
    }

    return (
        <DndContext onDragEnd={handleOnDragEnd}>
            <SortableContext items={items.map(i => i.id)}>
                <SearchPanel
                    setValue={setSearch}
                    value={search}
                    theme={theme}
                    setTheme={setTheme}
                    order={order}
                    setOrder={setOrder}
                />
                <div className='items-list' ref={parentRef}>
                    {items.map((item: IItem, index: number) => (
                        <Item
                            key={item.id}
                            item={item}
                            index={index}
                            tags={tags}
                            image={
                                images[item.id] ||
                                'https://i.imgur.com/VhlKzb1.png'
                            }
                        />
                    ))}

                    <div ref={childRef} className='loading-bar'>
                        <p className='loading-title'>Loading more Dapplets</p>
                        <div className='loading-line'>
                            <div
                                className={
                                    isLoading
                                        ? 'loader loader_active'
                                        : 'loader loader_inactive'
                                }
                            ></div>
                        </div>
                    </div>
                </div>
            </SortableContext>
        </DndContext>
    )
}
