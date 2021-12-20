# ManageBlue-Microservice-Projects
Backend microservice for images of projects of the ManageBlue App.

## Models

**ProjectImage:**
- imageUrl (String 1024)*
- projectId (Project)*
- auto: createdAt(Date)
- auto: updatedAt(Date)


## API (`/api/version`)

### `/projectImage`
- `/:id` (GET) - Return project image by project ID


## CONFIG ENV variables
- `PORT` - server port
- `URL` - url to server
- `MONGODB_CLOUD_URI` - url to mongodb
- `BING_API_KEY` - api key for bing image search
- `JWT_SECRET` - jwt secret


