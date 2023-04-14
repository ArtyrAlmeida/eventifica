interface EventInterface {
    id: number,
    name: string,
    city: string,
    position: {
        latitude: string,
        longitude: string
    }
}

export { EventInterface };