# Image to Text
- Backend : <a href="https://nodejs.org/en/">NodeJS</a>
- Database : <a href="https://www.mongodb.com/">MongoDB</a>
- MongoDB driver : <a href="http://mongoosejs.com/">Mongoose</a>
- Google Cloud Vision : <a href="https://www.npmjs.com/package/@google-cloud/vision">@google-cloud/vision</a>

## Getting Started

### Installing
- Clone the repository
```
git clone https://github.com/selamatpurba04/imgtotext.git imgtotext
```

- Install NPM packages
```
cd imgtotext
npm install
```

- Set Google Application Credentials
```
export GOOGLE_APPLICATION_CREDENTIALS="resources/service-account-file.json"
```

- Run mongod with a local data directory
```
mongod --dbpath data
```

- Run
```
node index.js
```
