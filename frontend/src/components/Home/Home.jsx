import { Fragment } from "react"
import { EventList } from "../Events/EventList"
import  Map  from '../Map/Map'

const Home = () => {
    return (
        <Fragment>
            <EventList/>
            <Map/>
        </Fragment>
    )
}

export { Home }