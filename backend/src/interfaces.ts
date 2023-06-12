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

export { EventInterface, Point };