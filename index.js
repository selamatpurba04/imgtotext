// Imports the Google Cloud client library
const vision = require( '@google-cloud/vision' );

// Creates a client
const client = new vision.ImageAnnotatorClient();

// Performs label detection on the image file
const fileName = 'resources/unnamed.jpg';

// Performs processText function
const pr = require( './processText' )

// Performs Mongoose
var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

mongoose.connect( 'mongodb://localhost:27017/finaccel' )
var db = mongoose.connection
db.on( 'error', console.error.bind( console, 'connection error' ))
db.once("open", ( callback ) => {
  console.log( 'Connection Succeeded' )
})

var ktpSchema = new Schema({
  	propinsi : String,
	kabupaten : String,
	nik : String,
	nama : String,
	tempatLahir : String,
	tglLahir : Date,
	jenisKelamin : String,
	golDarah : String,
	alamat : String,
	rt : String,
	rw : String,
	kelurahanDesa : String,
	kecamatan : String,
	agama : String,
	perkawinan : String,
	pekerjaan : String,
	kewarganegaraan : String,
	tglBerlakuHingga : Date,
	tempatPeresmian : String,
	tglPeresmian : Date
});

var ktp = mongoose.model('ktp', ktpSchema);

// Read a local image as a text document
client.documentTextDetection( fileName ).then( results => {
    const fullTextAnnotation = results[0].fullTextAnnotation
    const data = pr.start(fullTextAnnotation.text)
    const new_ktp = new ktp(data)

  	new_ktp.save( ( error, res ) => {
    	if ( error ) {
    		console.log( error )
    	}else{
    		console.log( "Data saved successfully" )
    		console.log( res )
    	}
    })
})
.catch(err => {
	console.error('ERROR:', err)
})