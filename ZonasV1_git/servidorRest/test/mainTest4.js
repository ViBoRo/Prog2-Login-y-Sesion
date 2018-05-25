// --------------------------------------------------------
//
// --------------------------------------------------------

// --------------------------------------------------------
// --------------------------------------------------------
const assert = require ('assert')

const request = require ('request')

// --------------------------------------------------------
// --------------------------------------------------------
const IP_PUERTO="http://localhost:8080"

// --------------------------------------------------------
// main ()
// --------------------------------------------------------

//
//
//
describe( "Test 4 (GET vertices)", function() {

	// ....................................................
	//
	// ....................................................
	it( "pruebo que GET /zona/marjal/vertices ", function( hecho ){
		request.get ( // peticion: GET
			{
				url: IP_PUERTO+"/zona/marjal/vertices",
				headers: {
					'User-Agent': 'jordi',
				},
			},
			// callback para cuando llegue respuesta
			function (err, response, body) {

				assert.equal( err, null, "¿error no vale null? " + err )
				assert.equal( response.statusCode, 404,
							  "¿status code no es 404?" )

				console.log (" ----- respuesta a GET /zona/marjal/vertices ---- ")
				console.log ("       body = " + body)
				console.log (" -------------------------------- ")

				//
				//
				//
				hecho ()
			}) // post

	}) // it
}) // describe
