
// ---------------------------------------------------------------------
// logica.js
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
const ConexionBD = require( "./ConexionBD.js" )

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
class Logica {

	// .................................................................
	//
	// nombreBD: Texto
	// -->
	//    f ()
	// -->
	// Terminado // via callback()
	//
	// .................................................................
	constructor( nombreBD, callback ) {
		this.laConexion = new ConexionBD( nombreBD, callback )
	}

	// .................................................................
	// .................................................................
	cerrar() {
		this.laConexion.cerrar()
	}

	// .................................................................
	//
	// datosZona: JSON {nombre: Texto, descripcion: Texto}
	// -->
	//    f ()
	// -->
	// void / Error // via callback( err )
	//
	// .................................................................
	nuevaZona( datosZona, callback ) {

		var textoSQL = 'insert into Zona values ( $nombre, $descripcion );'
		var datos = {
			$nombre: datosZona.nombre,
			$descripcion: datosZona.descripcion
		}

		this.laConexion.modificarConPrepared( textoSQL, datos, callback )

	} // ()

	// .................................................................
	//
	//    f()
	// -->
	// Terminado // via callbak()
	//
	// .................................................................
	borrarTodosLosDatos( callback ) {
		var self = this

		//
		// borrar primero los que dependen de otros (foreign key)
		//
		this.laConexion.modificar( "delete from Vertice;", function () {
			self.laConexion.modificar( "delete from Zona;", function () {
				callback()
			})
		})
	} // ()

	// .................................................................
	//
	// nombreZona: texto
	// vertice: JSON {latitud: R, longitud: R}
	// -->
	//    f ()
	// -->
	// void / Error // via callback( err )
	//
	// .................................................................
	nuevoVerticeParaZona( nombreZona, vertice, callback ) {

		var textoSQL = 'insert into Vertice values ( $nombre, $longitud, $latitud );'
		var datos = {
			$nombre: nombreZona,
			$longitud: vertice.longitud,
			$latitud: vertice.latitud
		}

		this.laConexion.modificarConPrepared( textoSQL, datos, callback )

	} // ()
	// .................................................................
	//nombreZona
	//-->
	//  F()
	//-->
	//Descripción: Texto //via callback (err,res)
	//
	// .................................................................
	getDescripcionDeZonaMal( nombreZona, callback ) {

			console.log("getDescripcionDeZona: me han lamado");
			callback(null,"ni puta idea");




	} // ()

// class
	// .................................................................


	// .................................................................
	getDescripcionDeZona( nombreZona, callback ) {
		console.log("hola soy getZona y me han lamado");

				var pregunta= "select * from Zona where nombre ='"+ nombreZona+"'";
				this.laConexion.consultar(pregunta,function (err,res){

				if(err){    //si nia error
					callback(err,null);  //tornes error
					return
				}

				if(res.length==0){ // si esta buit
					callback(null,null);
					return
				}

				callback(err,res[0]);
	})
}




		// en el test comprobar que nian dos vertices getVertices.
// ---------------------------------------------------------------------
//
//nombreZona
//-->
//  F()
//-->
//llista <Vertice: Coordenada> //via callback (err,res)
//
// ---------------------------------------------------------------------
		getVertices(nombreZona, callback){
			console.log("hola soy getVertices y me han lamado");
			var pregunta= "select latitud, longitud from Vertice where nombreZona ='"+ nombreZona+"'";
			this.laConexion.consultar(pregunta,function (err,res){


				//console.log( "******** " + res + " *** err " + err);

			if(err){    //si nia error
				callback(err,null);  //tornes error
				return
			}

			if(res.length==0){ // si esta buit
				callback(null,null);
				return
			}
			//console.log( "******** " + res[0].latitud);
			callback(err,res);
})

}//getVertices
// ---------------------------------------------------------------------
//
//nombreZona
//-->
//  F()
//-->
//Zona:JSON {nombre:nombreZona, descripcion: Texto}  //via callback (err,res)
//
// ---------------------------------------------------------------------

getZona(nombreZona, callback){
	console.log("hola soy getZona y me han lamado");
	var self=this;
	this.getDescripcionDeZona(nombreZona,function(err,res){
		self.getVertices(nombreZona,function(err,res){
			callback(res);
		})//getVertices
	})//getDescripcion
}//getZona


}// class
// ---------------------------------------------------------------------
module.exports = Logica

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
