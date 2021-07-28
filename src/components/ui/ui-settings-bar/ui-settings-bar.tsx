import React from 'react'
import './ui-settings-bar.scss'
import arrow from '../../../assets/global/arrow-right.svg'
import gsap from 'gsap'
import {useState} from 'react'
import cross from '../../../assets/global/cross.svg'

const myTags = ['Twitter', 'Social Media', 'Top 10', 'Finances']

const comunityTags = ['Social', 'Top 100', 'Testing', 'Favourites']

const workingOn = [
    'twitter.com',
    'twitter.com/randomusername',
    'facebook.com',
    'facebook.com/randomusername',
]

const SettingsBar: React.FC = () => {
    const [isBarOpened, changeOpening] = useState<boolean>(true)

    const handleSettingsBar = () => {
        if (isBarOpened) {
            gsap.to('.settings-bar__extra', 0.3, {
                display: 'none',
                opacity: 0,
                ease: 'power2.out',
            })
            gsap.to('.settings-bar', 0.6, {
                width: 98,
                delay: 0.1,
                ease: 'power2.out',
            })
            gsap.to('.settings-bar__arrow', 0.6, {
                padding: '10px 10px 10px 40px',
                transform: 'scale(-1, 1)',
                delay: 0.2,
                ease: 'slow(0.7, 0.7, false)',
            })
            gsap.to('.list', {
                marginRight: '8.5%',
                delay: 0.1,
                ease: 'power2.out',
            })
        } else {
            gsap.to('.settings-bar__extra', 0.3, {
                display: 'block',
                opacity: 1,
                delay: 0.2,
                ease: 'power2.out',
            })
            gsap.to('.settings-bar', 0.6, {
                width: '16.6%',
                ease: 'power2.out',
            })
            gsap.to('.settings-bar__arrow', 0.6, {
                padding: '10px 10px 10px 0',
                transform: 'scale(1, 1)',
                delay: 0.2,
                ease: 'slow(0.7, 0.7, false)',
            })
            gsap.to('.list', {
                marginRight: '19.5%',
                ease: 'power2.out',
            })
        }
    }

    return (
        <section className='settings-bar'>
            <div
                onClick={() => {
                    changeOpening(prevState => !prevState)
                    handleSettingsBar()
                }}
                className='settings-bar__arrow'
            >
                <img src={arrow} />
            </div>

            <div className='settings-bar__extra'>
                <div className='settings'>
                    <p className='title settings__title'>Dapplet Settings</p>

                    <div className='settings__create-container'>
                        <p className='settings__create-container_title'>
                            Create new list
                        </p>
                        <div>
                            <input
                                type='text'
                                className='settings__create-container_input'
                                placeholder='List Name'
                            />
                            <button className='settings__create-container_button'>
                                Create
                            </button>
                        </div>
                    </div>

                    <div className='settings__create-container'>
                        <p className='settings__create-container_title'>
                            New tag
                        </p>
                        <div>
                            <input
                                type='text'
                                className='settings__create-container_input'
                                placeholder='Tags Name'
                            />
                            <button className='settings__create-container_button'>
                                Create
                            </button>
                        </div>
                    </div>
                </div>

                <div className='tags'>
                    <p className='title tags__title'>My tags</p>
                    <ul>
                        {myTags.map((element: string) => (
                            <li className='tags__item'>
                                {element}
                                <img
                                    className='tags__cross'
                                    src={cross}
                                    alt='del'
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='comunity'>
                    <p className='title comunity__title'>Community tags</p>
                    <ul>
                        {comunityTags.map((element: string) => (
                            <li className='comunity__item'>
                                {element}
                                <img
                                    className='comunity__cross'
                                    src={cross}
                                    alt='del'
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='working-on'>
                    <p className='title working-on__title'>Working on</p>
                    <ul>
                        {workingOn.map((element: string) => (
                            <li className='working-on__item'>{element}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SettingsBar
