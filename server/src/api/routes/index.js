import vehiclesRoutes from './Vehicles'

const setupRoutes = (app) => {
    app.use('/vehicles',vehiclesRoutes)
}

export default setupRoutes;