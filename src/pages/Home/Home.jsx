import Idioma from '../../Components/Idioma/Idioma';
import Menu from '../../Components/Menu/Menu';
import './Home.css';

export default function Home() {
    return (
        <>
            <section>
                <div>
                    <Idioma />
                    <Menu />
                </div>

            </section>

            <div className="body">
                <h1 className="letra">GAMES OF THRONES</h1>
            </div>
        </>
    )
}
