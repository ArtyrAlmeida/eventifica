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
    name: string,
    email: string,
    password: string,
    role: 'ADMIN' | 'REGULAR'
}

export { EventInterface, UserInterface, Point };