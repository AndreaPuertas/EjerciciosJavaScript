class Conductor {
    constructor(nombre, licencia) {
    this.nombre = nombre;
    this.licencia = licencia;
    }
    getNombre(){
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getLicencia(){
        return this.licencia;
    }
    setLicencia(licencia) {
        this.licencia = licencia;
    }
    
    mostrarDatosConductor() {
    console.log("Nombre:" +this.nombre+" Licencia: "+this.licencia);
    }
    }
class Autobus{
    constructor(capacidad, pasajeros, matricula, listadoConductores){
        this.capacidad = capacidad;
        this.pasajeros = pasajeros;
        this.matricula = this.matricula
        this.listadoConductores = listadoConductores;
    }
    getCapacidad(){
        return this.capacidad;
    }
    setCapacidad(capacidad) {
        this.capacidad = capacidad;
    }
    getPasajeros(){
        return this.pasajeros;
    }
    setPasajeros(pasajeros) {
        this.pasajeros = pasajeros;
    }
    getMatricula(){
        return this.matricula;
    }
    setPasajeros(matricula) {
        this.matricula = matricula;
    }
    getListadoConductores(){
        return this.listadoConductores;
    }
    setListadoCondictores(listadoConductores) {
        this.listadoConductores = listadoConductores;
    }
    mostrarDatosAutobus(){
       console.log("Matricula "+this.matricula+" Capacidad "+this.capacidad+" Pasajeros "+this.pasajeros+" Listado de Conductores"+this.ListadoConductores(c.mostrarDatosConductor())); 
    }
    subir(numPasajeros){
        if(this.capacidad< this.pasajeros+numPasajeros){
            console.log ("Error los pasajeros superan la capacidad del bus \n solo pueden subirse"+(this.capacidad-this.pasajeros))
        }else{
            this.pasajeros+=numPasajeros;
            console.log ("La cantidad de pasajeros en el bus es de: "+this.pasajeros);
        }
    }bajar(numPasajeros){
        if(this.pasajeros< numPasajeros){
            console.log ("Error no hay esa cantidad de pasajeros para bajarse")
            this.pasajeros = 0;
        }else{
            this.pasajeros-=numPasajeros
        }

    }buscarConductor(licencia){
        for (let i =0 ; i< ListadoConductores.length; i++){
            if(licencia === i.licencia){
                return true
            }
        }return false
        
    }
}
let cond1 = new Conductor("Jose Perez", 123456);
let cond2 = new Conductor("Juan Marin", 456789);
let listadoConductores =[cond1, cond2];
let bus1 = new Autobus(45,10, "ASD123",listadoConductores);
let bus2 = new Autobus(30,0,"QWE123",listadoConductores);
