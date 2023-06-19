import pomodoro from '../imagenes/proyectos/pomodoro.png'
import paises from '../imagenes/proyectos/paises.png'
import tareas from '../imagenes/proyectos/review-tareas.png'
import encriptador from '../imagenes/proyectos/Portada.png'

const proyectos = [
    {
        tl:'Enfocate Pomodoro',
        tc:'Pomodoro',
        imagen:pomodoro,
        linkRepo:'https://github.com/JeassonSuarez/pomodoro',
        linkVivo:'https://jeassonsuarez.github.io/pomodoro/',
        descripcion:"Esta aplicación cuenta con una funcionalidad única que te permite configurar el tiempo del pomodoro, así como los intervalos de descanso corto y descanso largo. El método de pomodoro es una técnica de gestión del tiempo muy efectiva, y mi aplicación te ayuda a implementarla de manera personalizada y conveniente. Con una interfaz intuitiva y fácil de usar, puedes establecer tus propios tiempos y mantener un enfoque óptimo en tus tareas. Ya sea que estés estudiando, trabajando en un proyecto o simplemente necesites aumentar tu productividad, esta aplicación de pomodoro se convertirá en tu aliado confiable."
    },{
        tl:'Uso de REST API COUNTRIES',
        tc:'Countries',
        imagen:paises,
        linkRepo:'https://github.com/JeassonSuarez/UsoApiRESTCOUNTRIES',
        linkVivo:'https://jeassonsuarez.github.io/UsoApiRESTCOUNTRIES/',
        descripcion:"En este proyecto se busca desarrollar una aplicación en ReactJS que te permite explorar información detallada de países de todo el mundo. Conectada al API REST Countries, podrás descubrir datos geográficos, demográficos y culturales de forma interactiva y visualmente atractiva. Explora diferentes regiones, busca países por nombre y sumérgete en su diversidad cultural con esta herramienta fácil de usar."
    },{
        tl:'Aplicación cliente-servidor de tareas',
        tc:'Tareas',
        imagen:tareas,
        linkRepo:'https://github.com/JeassonSuarez/app-tareas-front-react',
        linkVivo:'https://jeassonsuarez.github.io/app-tareas-front-react/',
        descripcion:"Este proyecto se realizo debido a una necesidad propia, pues al ser estudiante constantemente tengo que realizar actividades, alguna veces son muchas y tener esto en la mente es complicado, por lo cual decidi realizar una app tipo cliente servidor que me permitiera tener mas facil el acceso a todas las actividades que debo realizar, el aplicativo se desarrollo en ReactJS, NodeJs, ExpressJS, y Postgres SQL, el frontend se encuentra desplegado en GitHun Pages, mientras que el backend esta desplegado en un servicio gratuito llamado Railway."
    },{
        tl:'Encriptador de textos',
        tc:'Encriptador',
        imagen:encriptador,
        linkRepo:'https://github.com/JeassonSuarez/encriptador-textos',
        linkVivo:'https://jeassonsuarez.github.io/encriptador-textos/',
        descripcion:"Con este proyecto, he aprendido un poco más de métodos de JavaScript, específicamente métodos de Arreglos, String, y Objetos JSON, con dichos métodos se ha podido realizar de una manera más sencilla la aplicación, pues al recorrer las llaves de un objeto usando un forof por ejemplo, se evita realizarlo de una manera más manual, convirtiendo el algoritmo de cifrado y descifrado en pocas líneas de código."
    },
]

export default proyectos;