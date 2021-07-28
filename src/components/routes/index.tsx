import {Route, HashRouter} from 'react-router-dom'
import InitialPage from '../initial-page'
import DesktopPage from '../desktop-page'
import MobilePage from '../mobile-page'

const Routes = () => {
    return (
        <HashRouter>
            <Route exact path={'/'} component={InitialPage} />
            <Route exact path={'/desktop'} component={DesktopPage} />
            <Route exact path={'/mobile'} component={MobilePage} />
        </HashRouter>
    )
}

export default Routes
