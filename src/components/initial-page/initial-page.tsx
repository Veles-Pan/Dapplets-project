import React from 'react'
import './initial-page.scss'
import {NavLink} from 'react-router-dom'

const InitialPage: React.FC = () => {
    return (
        <div className='initial-page'>
            <section className='frame'>
                <p className='frame__logo'>
                    Dapplets<span>.</span>
                </p>
                <h1 className='frame__title'>Добро Пожаловать</h1>

                <div className='frame__texts'>
                    <p className='frame__text'>
                        в&nbsp;тестовое задание на&nbsp;должность Frontend
                        Developer
                    </p>
                    <p className='frame__text'>
                        Мы&nbsp;строим платформу Аугментированного веба,
                        состоящую из&nbsp;браузерного плагина&nbsp;и
                        децентрализованных приложений (дапплетов), основанных
                        на&nbsp;крипто-технологиях.
                    </p>
                    <p className='frame__text'>
                        Наша платформа создается по&nbsp;принципу open-source
                        и&nbsp;доступна для разработчиков&nbsp;со всего мира.
                    </p>
                </div>

                <div className='frame__buttons'>
                    <NavLink
                        to={'/desktop'}
                        className='frame__button frame__button_desktop'
                    >
                        Desktop
                    </NavLink>
                    <NavLink
                        to={'/mobile'}
                        className='frame__button frame__button_mobile'
                    >
                        Mobile
                    </NavLink>
                </div>
            </section>
        </div>
    )
}

export default InitialPage
