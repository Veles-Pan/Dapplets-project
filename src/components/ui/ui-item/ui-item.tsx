import './ui-item.scss'

import {useSortable} from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities'
import cross from '../../../assets/global/cross.svg'
import {IItem} from '../ui-itemList/types'
import {useEffect} from 'react'
import {useState} from 'react'
import install from '../../../assets/global/download.svg'
import uninstall from '../../../assets/global/x-circle.svg'

interface IProps {
    item: IItem
    index: number
    image: string
    tags: {[id: string]: string}
}

export const Item = (props: IProps) => {
    const [isExtraOpened, changeOpening] = useState<boolean>(false)

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({id: props.item.id})

    useEffect(() => {
        if (isDragging) {
            changeOpening(false)
        }
    }, [isDragging])

    const extraInfos: Array<string>[] = [
        ['Aliquam sit', props.item.text_1],
        ['Semper neque', props.item.text_2],
        ['Leo ipsum.', props.item.text_3],
        ['Elit sagittis et.', props.item.text_4],
        ['Aliquam.', props.item.text_5],
        ['In euismod.', props.item.text_6],
        ['Justo amet.', props.item.text_7],
        ['Urna.', props.item.text_8],
        ['Nam diam.', props.item.text_9],
    ]

    const style = {
        transform: transform ? CSS.Translate.toString(transform) : '',
        transition: transition ?? '',
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={`item`}
            onClick={() => changeOpening(prev => !prev)}
        >
            <div
                className='item__draggable'
                onClick={e => e.stopPropagation()}
                {...attributes}
                {...listeners}
            />
            <img alt='icon' className='item__icon' src={props.image}></img>
            <p className='item__author'>{props.item.title}</p>
            <p className='item__id'>
                {props.item.id.slice(0, 5)}...
                {props.item.id.slice(-5)}
            </p>
            <div className='item__description'>
                {' '}
                <p className='item__description_text'>
                    {props.item.description}
                </p>
            </div>

            <p className='item__link'>{props.item.author}</p>
            <ul className='item__tags'>
                {props.item.tags.map((tag: string, index: number) => (
                    <li key={index} className='item__tag'>
                        {props.tags[tag] ? props.tags[tag] : undefined}
                        <img alt='×' className='item__cross' src={cross} />
                    </li>
                ))}
            </ul>
            <div className='item__install'>
                <p className='install'>Install</p>
                <img alt='install' src={install} className='install_icon' />
                <p className='uninstall'>Uninstall</p>
                <img
                    alt='uninstall'
                    src={uninstall}
                    className='uninstall_icon'
                />
            </div>

            <div
                className={`item__extra ${
                    isExtraOpened ? 'item__extra_opened' : ''
                }`}
                onClick={e => e.stopPropagation()}
            >
                {extraInfos.map((element, index: number) => (
                    <div
                        key={index}
                        className={`item__extra_container item__extra_container${
                            index + 1
                        }`}
                    >
                        <h3 className='item__extra_subtitle'>{element[0]}</h3>
                        <p className={`item__extra_text`}>{element[1]}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
