interface EventInterface {
    _id?: string,
    name: string,
    date: Date,
    city: string,
    position: Point,
}

interface Point {
    type: 'Point',
    coordinates: [number, number],
    crs?: object,
}

export { EventInterface, Point };