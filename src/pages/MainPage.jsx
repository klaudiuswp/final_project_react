import { 
    Outlet 
} from 'react-router-dom';
import {
    NavbarComponent,
} from '../components';

export default function MainPage() {
    return (
        <>
            <NavbarComponent />
            <Outlet/>
        </>
    )
}