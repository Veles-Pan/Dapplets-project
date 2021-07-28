import './desktop-page.scss'
import Sidebar from '../ui/ui-sidebar'
import ItemList from '../ui/ui-itemList'
import SettingsBar from '../ui/ui-settings-bar'
import useMedia from '../../hooks/useMedia'
import MobileSidebar from '../ui/ui-mobile-sidebar'
import cloud from '../../assets/global/cloud.svg'
import settings from '../../assets/global/settings.svg'

function DesktopPage() {
    const isRowBased = useMedia('(max-width: 900px)')
    return (
        <div className='desktop-page'>
            <header className='header'>
                <div className='header__info'>
                    <img alt='cloud' src={cloud} className='header__cloud' />
                    <p className='header__state'>
                        Extension state: <span>Active</span>
                    </p>
                </div>

                <div className='header__settings'>
                    <img
                        alt='settings'
                        src={settings}
                        className='header__settings-icon'
                    />
                    <p className='header__settings-title'>Settings</p>
                </div>
            </header>
            <div className='list'>
                <ItemList />
            </div>
            {isRowBased ? <MobileSidebar /> : <Sidebar />}
            <SettingsBar />
        </div>
    )
}

export default DesktopPage
