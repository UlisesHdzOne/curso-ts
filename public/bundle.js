(()=>{"use strict";class t{constructor(t,e,s,o){this.title=t,this.duration=e,this.hasOscar=s,this.director=o}getInfo(){return`El título del film es "${this.title}" y dura ${this.duration} minutos. ¿Tiene un Oscar? ${this.hasOscar?"Sí":"No"}`}getDuration(){return this.duration}play(){console.log("Playing...")}}const e={name:"Peter Jackson",age:60,data:"He is Amazing"},s=new t("El Señor de los Anillos",300,!0,e),o=new t("Harry Potter",120,!0,e);console.log(s,o),s.play(),new class extends t{constructor(t,e,s,o,r){super(t,e,s,o),this.hasJumpScares=r}displayAlert(){console.log("¡Alerta! El horror es horrendo!")}getInfo(){return"some movie info"}}("Scream",90,!1,e,!0)})();