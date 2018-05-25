// ------------------------------------------------------
//
// ReglasREST.js
//
// ------------------------------------------------------

// ------------------------------------------------------
// ------------------------------------------------------
// reglas de peticiones REST
// ------------------------------------------------------
// ------------------------------------------------------
module.exports.cargar = function( servidorExpress, laLogica ) {

	// .......................................................
	// .......................................................
	//
	// GET /zona/<nombreZona>
	//
	// Ej.: GET /zona/marjal
	//
	// .......................................................
	// .......................................................
	servidorExpress.get('/zona/:nombreZona', function( req, response ){

		//
		//
		//
		console.log( " ------------------------------- " )
		console.log( " * GET /zona :   " + req.url )
		console.log( " ------------------------------- " )

		const nombreZona =  req.params.nombreZona
		console.log( "\t nombreZona = " + nombreZona )

		//
		// pregunto a la lógica
		//
		laLogica.getZona( nombreZona, function( err, res ) {

			if ( err ) {
				response.writeHead( 404, // not found
									{'Content-Type': 'text/plain'})
				response.write ( err )
				response.end()

				return
			}

			//
			// respuesta correcta
			//
			response.writeHead(200, {'Content-Type': 'text/json'})
			response.write ( JSON.stringify( res ) )

			//
			//
			//
			response.end()
		}) // getZona ()

	}) //
	// .......................................................
	// .......................................................
	//
	// GET /zona/<nombreZona>/descripcion
	//
	// Ej.: GET /zona/marjal/descripcion
	//
	// .......................................................
	// .......................................................
	servidorExpress.get('/zona/:nombreZona/descripcion', function( req, response ){
		console.log( " ------------------------------- " )
		console.log( " * GET /zona :   " + req.url )
		console.log( " ------------------------------- " )

		const nombreZona =  req.params.nombreZona
		console.log( "\t nombreZona = " + nombreZona )

		//
		// pregunto a la lógica
		//
		laLogica.getDescripcionDeZona( nombreZona, function( err, res ) {
         //si nia error
			if ( err ) {
				response.writeHead( 404, // not found
									{'Content-Type': 'text/plain'})
				response.write ( err )
				response.end()
				return
			}

			//resposta correcta
			console.log("me han llamado get descripcion de zona");
			response.writeHead(200, {'Content-Type': 'text/json'})
			response.write ( JSON.stringify( res[0] ) )
	}) //getDescripcionDeZona()
})







servidorExpress.get('/zona/:nombreZona/vertices', function( req, response ){
	console.log( " ------------------------------- " )
	console.log( " * GET /zona :   " + req.url )
	console.log( " ------------------------------- " )

	const nombreZona =  req.params.nombreZona
	console.log( "\t nombreZona = " + nombreZona )

	//
	// pregunto a la lógica
	//
	laLogica.getVertices( nombreZona, function( err, res ) {
			 //si nia error
		if ( err ) {
			response.writeHead( 404, // not found
								{'Content-Type': 'text/plain'})
			response.write ( err )
			response.end()
			return
		}

		//resposta correcta
		console.log("me han llamado get vertices de zona");
		response.writeHead(200, {'Content-Type': 'text/json'})
		response.write ( JSON.stringify( res[0] ) )
}) //getDescripcionDeZona()
})
	/*	console.log("me han llamado get descripcion de zona");
		response.writeHead(200,{'Content-Type': 'text/json'});
		response.write('hasta luego lucas')
		response.end(); */





		/*console.log( " ------------------------------- " )
		console.log( " * GET /zona :   " + req.url )
		console.log( " ------------------------------- " )

		const nombreZona =  req.params.nombreZona
		console.log( "\t nombreZona = " + nombreZona )

		//
		// pregunto a la lógica
		//
		laLogica.getZona( nombreZona, function( err, res ) {

			if ( err ) {
				response.writeHead( 404, // not found
									{'Content-Type': 'text/plain'})
				response.write ( err )
				response.end()

				return
			}

			//
			// respuesta correcta
			//
			response.writeHead(200, {'Content-Type': 'text/json'})
			response.write ( JSON.stringify( res ) )

			//
			//
			//
			response.end()
		}) // getZona ()

	}) //
*/
	// ------------------------------------------------------
	// ------------------------------------------------------
} // module.exports

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
