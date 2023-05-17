
export const cuestionario = [
  {
    id: 1,
    pregunta: 'Un científico del refugio se dirige a ti histérico y grita "¡Voy a poner el harmonizador de Quántum en tu cámara de resonancia fotónica!" ¿Tú qué respondes?',
    opciones: [
      { textoRespuesta: 'Pero doctor, ¿eso no provocaría una desestabilización parabólica de la singularidad de la fisión?', skill: 'Ciencia'},
      { textoRespuesta: '¿Sí? ¡Pues tú mismo con tu mecanismo!', skill: 'Conversación'},
      { textoRespuesta: 'No digas nada, en lugar de eso, coge un tubo que tengas a mano y golpea al científico en la cabeza para dejarlo fuera de combate. Por lo que sabes, planeaba hacer estallar el refugio.', skill: 'Cuerpo a cuerpo'},
      { textoRespuesta: 'En lugar de contestarle, escabúllete antes de que el científico continúe con su discurso', skill: 'Sigilo'},
    ]
  },
  {
    id: 2,
    pregunta: 'Estando de práctica en la clínica, un paciente entra a trompicones con una extraña infección en el pie. La infección se está extendiendo a un ritmo alarmante, pero el doctor ha salido un momento. ¿Qué haces?',
    opciones: [
      { textoRespuesta: 'Amputarle el pie antes de que la infección se extienda', skill: 'Cuerpo a cuerpo'},
      { textoRespuesta: 'Pedir ayuda a gritos', skill: 'Conversación'},
      { textoRespuesta: 'Tratar la zona infectada lo mejor que sepas', skill: 'Medicina'},
      { textoRespuesta: 'Retener al paciente y limitarte a observar cómo la infección se extiende', skill: 'Ciencia'},
    ]
  },
  {
    id: 3,
    pregunta: 'Encuentras a un joven perdido en los niveles más bajos del refugio. Está hambriento y asustado, pero también parece estar en posesión de objetos robados. ¿Qué haces?',
    opciones: [
      { textoRespuesta: 'Abrazarlo y decirle que no va a pasarle nada', skill: 'Conversación'},
      { textoRespuesta: 'Confiscar el objeto robado por la fuerza y dejarlo allí castigado', skill: 'Desarmado'},
      { textoRespuesta: 'Meterle la mano en el bolsillo para recuperar el objeto robado y abandonarlo a su suerte', skill: 'Sigilo'},
      { textoRespuesta: 'Llevar al muchacho a un lugar seguro y luego presentarlo ante el supervisor', skill: 'Nada'},
    ]
  },
  {
    id: 4,
    pregunta: '¡Enhorabuena! Has entrado en uno de los equipos de béisbol del Refugio 101. ¿Qué posición prefieres?',
    opciones: [
      { textoRespuesta: 'Lanzador', skill: 'Explosivos'},
      { textoRespuesta: 'Receptor', skill: 'Armas grandes'},
      { textoRespuesta: 'Bateador designado', skill: 'Cuerpo a cuerpo'},
      { textoRespuesta: 'Ninguna. En realidad te gustaría que el refugio tuviera un equipo de fútbol', skill: 'Desarmado'},
    ]
  },
  {
    id: 5,
    pregunta: 'Tu abuela te invita a tomar el té, pero para tu sorpresa te da una pistola y te ordena que mates a otro residente del refugio. ¿Qué haces?',
    opciones: [
      { textoRespuesta: 'Obedece a tu abuela y matar al residente con la pistola', skill: 'Armas Pequeñas'},
      { textoRespuesta: 'Ofrecerle tu posesión más preciada por la vida del residente', skill: 'Trueque'},
      { textoRespuesta: 'Pedirle a tu abuela una metralleta. Al fin y al cabo, no quieres fallar', skill: 'Armas Grandes'},
      { textoRespuesta: 'Tirarle el té a la cara a tu abuela', skill: 'Explosivos'},
    ]
  },
  {
    id: 6,
    pregunta: 'El viejo señor Abernathy ha vuelto a encerrarse en las dependencias y se te ordena que lo saques. ¿Cómo procedes?',
    opciones: [
      { textoRespuesta: 'Utilizas una horquilla para abrir la cerradura de la puerta', skill: 'Ganzúas'},
      { textoRespuesta: 'Consigues una bomba cereza a través de un matón del refugio y revientas la puerta', skill: 'Explosivos Y Trueque'},
      { textoRespuesta: 'Vas al arsenal, coges una pistola láser y vuelas la cerradura', skill: 'Armas de energía'},
      { textoRespuesta: 'Te vas y dejas que el abuelo se pudra', skill: 'Reparación'},
    ]
  },
  {
    id: 7,
    pregunta: '¡Oh no! ¡Has estado expuesto a radiación y te ha salido del estómago una mano mutante! ¿Cuál es el mejor tratamiento?',
    opciones: [
      { textoRespuesta: 'Una bala en el cerebro', skill: 'Armas pequeñas'},
      { textoRespuesta: 'Grandes dosis de agente antimutágeno', skill: 'Medicina'},
      { textoRespuesta: 'Rezar. Con suerte, Dios se apiadará de ti y te recompensará por tu fe', skill: 'Conversación'},
      { textoRespuesta: 'La eliminación del tejido mutante mediante un láser de precisión', skill: 'Armas de energía'},
    ]
  },
  {
    id: 8,
    pregunta: 'Un compañero residente del Refugio 101 está en posesión del número 1 del cómic de Grognak el Bárbaro. Tú lo quieres. ¿Cuál es la mejor manera de conseguirlo?',
    opciones: [
      { textoRespuesta: 'Intercambiar alguna de tus valiosas posesiones por el cómic', skill: 'Trueque'},
      { textoRespuesta: 'Robar el cómic a punta de pistola', skill: 'Armas pequeñas'},
      { textoRespuesta: 'Entrar en el cuarto del residente y robarle el cómic de su escritorio', skill: 'Sigilo'},
      { textoRespuesta: 'Echarle una gotas de somnífero en la Nuka Cola y llevarte el cómic cuando esté inconsciente', skill: 'Medicina'},
    ]
  },
  {
    id: 9,
    pregunta: 'Decides divertirte gastándole una broma a tu padre. Aprovechas que nadie te ve, te metes en su cuarto de baño y...',
    opciones: [
      { textoRespuesta: 'Aflojas los tornillos de una cuantas tuberías. Cuando se le ocurra abrir los grifos, se inundará la habitación', skill: 'Reparación'},
      { textoRespuesta: 'Pones un petardo en el baño. Eso seguro que montará un buen lío', skill: 'Explosivos'},
      { textoRespuesta: 'Fuerzas la cerradura de su botiquín y le cambias las pastillas para la hipertensión por sacarina', skill: 'Sigilo'},
      { textoRespuesta: 'Manipular la máquina de afeitar para que le dé una descarga la próxima vez que se afeite', skill: 'Ganzúas'},
    ]
  },
  {
    id: 10,
    pregunta: '¿Quién es indudablemente la persona más importante del Refugio 101, el que nos protege de la dureza del Yermo atómico, y a quien debemos todo lo que tenemos, incluidas nuestras vidas?',
    opciones: [
      { textoRespuesta: 'El supervisor'},
      { textoRespuesta: 'El supervisor'},
      { textoRespuesta: 'El supervisor'},
      { textoRespuesta: 'El supervisor'},
    ]
  },
]