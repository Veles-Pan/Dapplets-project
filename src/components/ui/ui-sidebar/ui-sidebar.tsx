import React from 'react'
import './ui-sidebar.scss'
import {
    arrow,
    logo,
    cross,
    UsersIcon,
    HeartIcon,
    GridIcon,
    CodesandboxIcon,
    TrendingIcon,
    openMenuIcon,
} from './images'
import gsap from 'gsap'
import {useState} from 'react'

const tags = [
    'Twitter',
    'Social Media',
    'Top 10',
    'Finances',
    'Media',
    'Test',
    'ToDo',
]

const iconImages = [
    {img: CodesandboxIcon, id: 'dapplets', subtitle: 'Essential Dapplets'},
    {img: HeartIcon, id: 'dapplets2', subtitle: 'Editor’s Choice'},
    {img: GridIcon, id: 'dapplets3', subtitle: 'All Dapplets'},
    {img: UsersIcon, id: 'dapplets4', subtitle: 'Social Networks'},
    {img: TrendingIcon, id: 'dapplets5', subtitle: 'Financial Dapplets'},
]

const Sidebar: React.FC = () => {
    const [activeElement, setActiveElement] = useState<string>('dapplets')

    const closeSidebar = () => {
        gsap.to(
            '.sidebar__subtitle, .sidebar__title, .sidebar__arrow, .sidebar__list, .sidebar__tags',
            0.3,
            {
                display: 'none',
                opacity: 0,
                ease: 'power2.out',
            }
        )
        gsap.to('.sidebar', 0.6, {width: 98, delay: 0.2, ease: 'power2.out'})
        gsap.to('.sidebar__header', 0.6, {
            padding: '0 0 0 23px',
            delay: 0.2,
            ease: 'power2.out',
        })
        gsap.to('.list', {
            delay: 0.2,
            marginLeft: '8.6%',
            ease: 'power2.out',
        })
    }

    const openSidebar = () => {
        gsap.to('.sidebar', 0.6, {width: '18.7%', ease: 'power2.out'})
        gsap.to('.list', {
            marginLeft: '22.5%',
            ease: 'power2.out',
        })
        gsap.to('.sidebar__header', 0.6, {
            padding: '0 20px 0 36px',
            ease: 'power2.out',
        })
        gsap.to(
            '.sidebar__subtitle, .sidebar__title, .sidebar__arrow, .sidebar__list, .sidebar__tags',
            {
                display: 'block',
                opacity: 1,
                delay: 0.3,
                ease: 'power2.out',
            }
        )
    }

    return (
        <section className='sidebar'>
            <div className='sidebar__icons'>
                <div className='sidebar__header'>
                    <img src={logo} className='sidebar__logo'></img>
                    <p className='sidebar__title'>
                        Dapplets Project<span>.</span>
                    </p>
                    <div onClick={closeSidebar} className='sidebar__arrow'>
                        <img src={arrow} />
                    </div>
                </div>

                <nav className='sidebar__icons-panel'>
                    {iconImages.map((element, index) => {
                        const Icon = element.img
                        return (
                            <div
                                key={index}
                                className={
                                    activeElement === element.id
                                        ? 'sidebar__item sidebar__item_active'
                                        : 'sidebar__item'
                                }
                                onClick={
                                    activeElement === element.id
                                        ? () => {
                                              openSidebar()
                                          }
                                        : () => {
                                              {
                                                  setActiveElement(element.id)
                                              }
                                          }
                                }
                            >
                                <Icon className='sidebar__icon' />
                                <p className='sidebar__subtitle'>
                                    {element.subtitle}
                                </p>
                            </div>
                        )
                    })}
                </nav>
            </div>

            <div className='sidebar__list'>
                <p className='sidebar__list_title'>My lists</p>
                <ul>
                    <li className='sidebar__list_item'>
                        TOP-10 Twitter Dapplets (<a href='#'>Me</a>)
                    </li>
                    <li className='sidebar__list_item'>
                        Best Financial dapplets by Jack (<a href='#'>Jack</a>)
                    </li>
                    <li className='sidebar__list_item'>
                        TOP-10 Twitter Dapplets (<a href='#'>Me</a>)
                    </li>
                </ul>
            </div>

            <div className='sidebar__tags'>
                <p className='sidebar__tags_title'>My tags</p>
                <ul>
                    {tags.map((element: string) => (
                        <li className='sidebar__tags_item'>
                            {element}
                            <img
                                className='sidebar__tags_cross'
                                src={cross}
                                alt='del'
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Sidebar
