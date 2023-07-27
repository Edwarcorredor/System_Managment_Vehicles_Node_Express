# Sistema de control y monitoreo de vehículos autónomos

## *Resumen*

El proyecto consiste en desarrollar un sistema de control y monitoreo de vehículos autónomos utilizando una base de datos. El objetivo principal es optimizar la gestión del vehiculo al registrar información detallada de los vehículos, monitorear en tiempo real datos de sensores y mantener un registro de actividades de mantenimiento. Esto permitirá mejorar la eficiencia operativa, tomar decisiones informadas basadas en datos y garantizar un funcionamiento seguro y confiable de los vehículos autónomos. La base de datos proporcionará una plataforma centralizada para el control y seguimiento del vehiculo, facilitando la toma de decisiones proactivas y la planificación efectiva de tareas de mantenimiento.

## *Objetivos*

### *General:*

El objetivo general de este proyecto es desarrollar un sistema de control y monitoreo de vehículos autónomos que permita gestionar eficientemente la operación, seguridad y mantenimiento de los vehículos, garantizando un desempeño óptimo y confiable del vehiculo. El sistema se enfocará en recopilar y analizar datos en tiempo real de los vehículos, sensores y actividades de mantenimiento, con el fin de brindar información precisa y actualizada sobre el estado del vehiculo, identificar incidencias, y optimizar las actividades de mantenimiento. 

### Especifico:

1. Registro de información de vehículos autónomos:
   - Almacenar datos relevantes de los vehículos, como número de serie, estado y ubicación actual.
   - Mantener un registro actualizado del vehiculo para conocer el estado de los vehículos en todo momento.

2. Monitoreo en tiempo real mediante sensores:
   - Capturar y almacenar alarmas producidas por el vehiculo.

3. Registro de actividades de mantenimiento:
   - Registrar las actividades de mantenimiento realizadas en los vehículos.
   - Mantener un historial de mantenimiento para programar tareas futuras y garantizar el buen funcionamiento de los vehículos.



#### Diagrama

<img width="727" alt="Captura de pantalla 2023-07-23 130151" src="https://github.com/Edwarcorredor/Sistema-de-control-y-monitoreo-de-vehiculos-autonomos/assets/104398132/a746e2c2-e911-4f3f-afa2-ad741e266bcc">



## *Instalación*

Para instalar y utilizar este proyecto, siga los siguientes pasos:

1. Asegúrese de tener [Node.js](https://nodejs.org/) instalado en su sistema.

2. Clone este repositorio en su máquina local utilizando el siguiente comando.

   ```bash
   git clone https://github.com/Edwarcorredor/Sistema-de-control-y-monitoreo-de-vehiculos-autonomos.git
   ```

3. Abra el terminal en la carpeta raiz del repositorio e instale las siguientes dependencias.

   ```bash
   npm i -E -D express class-transformer class-validator dotenv jose mysql2 nodemon reflect-metadata
   ```

   - express: https://github.com/expressjs/express
   - class-transformer: https://github.com/typestack/class-transformer
   - class-validator: https://github.com/typestack/class-validator
   - dotenv: https://github.com/motdotla/dotenv
   - jose: https://github.com/panva/jose
   - mysql2: https://github.com/sidorares/node-mysql2
   - nodemon: https://github.com/remy/nodemon
   - reflect-metadata: https://github.com/typestack/class-transformer

   4.En el archivo .env del proyecto configurar las variables de entorno de acuerdo a su usuario y acceso a base de datos.

   `MY_CONFIG = {"hostname":"127.0.0.5", "port":3000}

   MY_DATABASE = { "host": "localhost", "user": "root", "password": "", "database": "vehiculos_autonomos", "port": 3306}

   JWT_PRIVATE_KEY = "Edwar"`
