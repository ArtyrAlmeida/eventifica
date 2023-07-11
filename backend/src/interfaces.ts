interface EventInterface {
    _id?: string,
    name: string,
    initialDate: Date,
    finalDate: Date,
    description: string,
    position: Point,
}

interface Point {
    type: 'Point',
    coordinates: [number, number],
    crs?: object,
}

interface UserInterface {
    _id?: string,
    email: string,
    password: string,
    role: 'ADMIN' | 'REGULAR',
    events?: string[],
}

interface LoginInfo {
    email: string,
    password: string,
}

interface SubscribeOptions {
    userId: string,
    eventId: string,
}

export { EventInterface, UserInterface, LoginInfo, Point, SubscribeOptions };