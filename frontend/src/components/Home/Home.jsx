import { EventList } from "../Events/EventList"
import  Map  from '../Map/Map'

const Home = () => {
    return (
        <div className="main">
            <EventList/>
            <Map/>
        </div>
    )
}

export { Home }