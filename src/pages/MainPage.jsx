import { 
    Outlet 
} from 'react-router-dom';
import {
    NavbarComponent,
    FooterComponent
} from '../components';

export default function MainPage() {
    return (
        <div className='bg-dark flex-column min-vh-100 text-white'>
            <NavbarComponent />
            <Outlet/>
            <FooterComponent />
        </div>
    )
}