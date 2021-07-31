import React from 'react'
import './ui-mobile-sidebar.scss'
import {
    logo,
    UsersIcon,
    HeartIcon,
    GridIcon,
    CodesandboxIcon,
    TrendingIcon,
    openMenuIcon,
} from './images'
import gsap from 'gsap'
import {useState} from 'react'

const iconImages = [
    {img: CodesandboxIcon, id: 'dapplets', subtitle: 'Essential Dapplets'},
    {img: HeartIcon, id: 'dapplets2', subtitle: 'Editor’s Choice'},
    {img: GridIcon, id: 'dapplets3', subtitle: 'All Dapplets'},
    {img: UsersIcon, id: 'dapplets4', subtitle: 'Social Networks'},
    {img: TrendingIcon, id: 'dapplets5', subtitle: 'Financial Dapplets'},
]

const MobileSidebar: React.FC = () => {
    const [activeElement, setActiveElement] = useState<string>('dapplets')
    const [isMenuOpened, changeMenuOpened] = useState<boolean>(false)

    const openMenu = () => {
        changeMenuOpened(true)
        gsap.to('.mobile-sidebar', {
            height: '100%',
            background:
                'linear-gradient(180deg, rgba(213, 252, 255, 0.7) 0%, rgba(241, 238, 252, 0.7) 100%)',
        })
        gsap.to('.mobile-sidebar__header', 0.3, {
            display: 'none',
            opacity: 0,
            delay: 0.2,
        })
        gsap.to('.mobile-sidebar__icons-panel', {
            display: 'flex',
            opacity: 1,
            delay: 0.5,
        })
    }

    const closeMenu = () => {
        changeMenuOpened(false)
        gsap.to('.mobile-sidebar', {
            height: 70,
            background:
                'linear-gradient(180deg,rgba(185, 251, 255, 0.2) 0%,rgba(227, 220, 255, 0.2) 100%)',
            delay: 0.4,
        })
        gsap.to('.mobile-sidebar__header', {
            display: 'grid',
            opacity: 1,
            delay: 0.4,
        })
        gsap.to('.mobile-sidebar__icons-panel', 0.3, {
            display: 'none',
            opacity: 0,
        })
    }

    return (
        <section className='mobile-sidebar'>
            <div className='mobile-sidebar__icons'>
                <div className='mobile-sidebar__header'>
                    <img
                        alt='logo'
                        src={logo}
                        className='mobile-sidebar__logo'
                    ></img>
                    <p className='mobile-sidebar__title'>
                        Dapplets Project<span>.</span>
                    </p>

                    <div
                        onClick={openMenu}
                        className='mobile-sidebar__open-menu'
                    >
                        <img alt='open menu' src={openMenuIcon} />
                    </div>
                </div>

                <nav className='mobile-sidebar__icons-panel'>
                    {iconImages.map((element, index) => {
                        const Icon = element.img
                        return (
                            <div
                                key={index}
                                className={
                                    activeElement === element.id
                                        ? 'mobile-sidebar__item mobile-sidebar__item_active'
                                        : 'mobile-sidebar__item'
                                }
                                onClick={
                                    activeElement === element.id
                                        ? isMenuOpened
                                            ? () => {
                                                  closeMenu()
                                              }
                                            : undefined
                                        : () => {
                                              {
                                                  setActiveElement(element.id)
                                              }
                                          }
                                }
                            >
                                <Icon className='mobile-sidebar__icon' />
                                <p className='mobile-sidebar__subtitle'>
                                    {element.subtitle}
                                </p>
                            </div>
                        )
                    })}
                </nav>
            </div>
        </section>
    )
}

export default MobileSidebar
