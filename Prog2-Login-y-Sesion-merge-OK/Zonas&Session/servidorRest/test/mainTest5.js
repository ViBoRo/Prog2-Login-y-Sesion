
// --------------------------------------------------------
//
//
// --------------------------------------------------------

// --------------------------------------------------------
// --------------------------------------------------------
const assert = require ('assert')

const request = require ('request')

// --------------------------------------------------------
// --------------------------------------------------------
const IP_PUERTO="http://localhost:8081"

// --------------------------------------------------------
// main ()
// --------------------------------------------------------

//
//
//
describe( "Test 1 (hacer login para poder hacer GET /prueba )", function() {

	//
	// El login devuelve una cookie, luego hay
	// que guardarla para enviar en las siguientes
	// peticiones. (Esto los navegadores lo hace automáticamente)
	//
	var laCookie = null

	// ....................................................
	//
	// ....................................................
	it( "pruebo que GET /login responde OK", function( hecho ){
		request.get ( // peticion: GET
			{
				url: IP_PUERTO+"/login?user=pepe@example.org&password=1234",
				headers: {
					'User-Agent': 'jordi',
				},
			},
			// callback para cuando llegue respuesta
			function (err, response, body) {

				//
				//
				//
				assert.equal( err, null, "¿error no vale null? " + err )
				assert.equal( response.statusCode, 200,
							  "¿respuesta no es 200?" + response.statusCode )

				console.log (" ----- respuesta a GET /login ---- ")
				// console.log ("       response = " + JSON.stringify(response))
				// console.log ("       cookie = >" + response.headers["set-cookie"][0] + "<")
				console.log ("       body = " + body)
				console.log (" -------------------------------- ")

				//
				//
				//
				var datosUsuario = JSON.parse( body )

				assert.equal( datosUsuario.email, "pepe@example.org" )

				//
				// guardamos la cookie
				//
				laCookie = response.headers["set-cookie"][0]
				//
				//
				//
				hecho ()
			}
		) // get
	}) // it

	// ....................................................
	//
	// ....................................................
	it( "pruebo que GET /prueba responde OK", function( hecho ){
		request.get ( // peticion: GET
			{
				url: IP_PUERTO+"/prueba",
				headers: {
					'User-Agent': 'jordi',
					'Cookie': laCookie
				},
			},
			// callback para cuando llegue respuesta
			function (err, response, body) {

				assert.equal( err, null, "¿error no vale null? " + err )
				assert.equal( response.statusCode, 200,
							  "¿respuesta no es 200?" + response.statusCode )

				console.log (" ----- respuesta a GET /prueba ---- ")
				// console.log ("       response = " + JSON.stringify(response))
				// console.log ("       cookie = >" + response.headers["set-cookie"][0] + "<")
				console.log ("       body = " + body)
				console.log (" -------------------------------- ")

				hecho ()
			}
		) // get
	}) // it


}) // describe
