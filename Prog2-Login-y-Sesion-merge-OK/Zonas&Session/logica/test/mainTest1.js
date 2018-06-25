
// --------------------------------------------------------
//
//
// --------------------------------------------------------

// --------------------------------------------------------
// --------------------------------------------------------
const Logica = require( "../Logica.js" )

var assert = require ('assert')

// --------------------------------------------------------
// main ()
// --------------------------------------------------------

//
//
//
describe( "Test 1 (probar a añadir zonas)", function() {

	// ....................................................
	//
	// ....................................................
	var laLogica = null
	before(  function( hecho ) {
		laLogica = new Logica(
			"../datos/Zonas.bd",
			function( err ) {
				assert.equal( null, err, " conexión a BD fallada: " + err)
				hecho()
			})
	}) // before

	// ....................................................
	//
	// ....................................................
	it( "borro datos ", function( hecho ){

		laLogica.borrarTodosLosDatos( function() {
			hecho()
		})

	}) // it

	// ....................................................
	//
	// ....................................................
	it( "inserto zona marjal", function( hecho ){

		var datos = {
			nombre: "marjal",
			descripcion: "marjal al lado del Grau de Gandia"
		}

		laLogica.nuevaZona( datos, function(err) {
			assert.ok( ! err, " ¿hay error? : " + err )
			hecho()
		})

	}) // it

	// ....................................................
	//
	// ....................................................
	it( "inserto un vertice para marjal", function( hecho ){

		var vertice = {
			longitud: 0, // X
			latitud: 1 // Y
		}

		laLogica.nuevoVerticeParaZona( "marjal", vertice, function( err ) {
			assert.ok( ! err, "" + err )

			hecho()
		})

	}) // it
	// ....................................................
	//
	// ....................................................
	it( "inserto otro vertice para marjal", function( hecho ){

		var vertice = {
			longitud: 3, // X
			latitud: 3 // Y
		}

		laLogica.nuevoVerticeParaZona( "marjal", vertice, function( err ) {
			assert.ok( ! err, "" + err )

			hecho()
		})

	}) // it
	// ....................................................
	//
	// ....................................................
	it( "pruebo getDescripcionDeZonaMal()", function( hecho ){

		// llamo a getZona() y compruebo que me devuelve
		// lo que antes he guardado
			laLogica.getDescripcionDeZonaMal("marjal",function (err,res){
				assert.equal( err, null )
				assert.equal(res,"ni puta idea")
				hecho()
			})


	}) // it

	// ....................................................
	//
	// ....................................................
it( "probar getDescripcionDeZona()", function( hecho ){

		// llamo a getDescripcionDeZona() y compruebo que me devuelve
		// lo que antes he guardado

		laLogica.getDescripcionDeZona("marjal",function(err,res){
		    assert.equal(err,null);
			//	assert.equal(res,"ni puta idea")
			console.log(res);
		assert.ok(res.descripcion.includes("Grau"))		 //assert.equal(res.descripcion.includes("Grau"),true)
		hecho()
	})

	}) // it*/
	// ....................................................
	//
	// ....................................................
it( "probar getVertices()", function( hecho ){

		// llamo a getVertices() y compruebo que me devuelve
		// lo que antes he guardado

			laLogica.getVertices("marjal",function(err,res){

					assert.ok(!err);
					assert.equal(res.length, 2);

			hecho()
		})



	}) // it*/

	// ....................................................
	//
	// ....................................................
	after( function() {
		laLogica.cerrar()
	})

}) // describe
