
import {
    CardsComponent,
    // PaginationComponent
} from '../components';

export default function MoviesPage() {
    return (
        <>
            <div className="container mt-5 mx-auto">
                <CardsComponent />
                {/* <PaginationComponent /> */}
            </div>
        </>
    )
}