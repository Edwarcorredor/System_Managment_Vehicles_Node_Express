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
   ```
   npm i -E -D express class-transformer class-validator dotenv jose mysql2 nodemon reflect-metadata typescript
   ```

   - express: https://github.com/expressjs/express
   
   - class-transformer: https://github.com/typestack/class-transformer

   - class-validator: https://github.com/typestack/class-validator

   - dotenv: https://github.com/motdotla/dotenv

   - jose: https://github.com/panva/jose

   - mysql2: https://github.com/sidorares/node-mysql2

   - nodemon: https://github.com/remy/nodemon

   - reflect-metadata: https://github.com/typestack/class-transformer

     

   Ahora para crear el archivo tsconfig.json debe ejecutar el siguiente comando
  ```bash
    npx tsc --init
  ```
   Y lo configura de la siguiente manera
   
   ```bash
    {
     "compilerOptions": {
    "target": "es6",
    "module": "ES6",
   "moduleResolution": "node",
    "outDir": "./controller",
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
     }
     }
   ```
  
  
```

5. En el archivo .env del proyecto configurar las variables de entorno de acuerdo a su usuario y acceso a base de datos.

   ```bash
   MY_CONFIG = {"hostname":"127.0.0.5", "port":3000}
   
   MY_DATABASE = { "host": "localhost", "user": "root", "password": "", "database": "vehiculos_autonomos", "port": 3306}
   
   JWT_PRIVATE_KEY = "Edwar"
```

​		MY_CONFIG: Corresponde al servidor que se creará con Express

​		MY_DATABASE: La información para la conexión con la base de datos

​		JWT_PRIVATE_KEY: Llave privada para la creación del token



## *Funcionamiento*



### Creación base de datos

Asegúrate de tener un servidor de base de datos MySQL en funcionamiento y con las credenciales adecuadas. En el archivo `dataBase.sql` se ejecutan los comandos SQL uno por uno en el orden en que aparecen. Esto creará la estructura de la base de datos y llenará las tablas con datos ficticios.



### Ejecución

Para poner en marcha el proyecto, sigue estos pasos:

1. Abre dos terminales.
2. En la primera terminal, ejecuta el siguiente comando para iniciar el servidor:

```bash
npm run dev
```

3. En la segunda terminal, utiliza el siguiente comando para compilar el código TypeScript:

```bash
npm run tsc
```

Con estos pasos, el proyecto se encontrará en funcionamiento y estará listo para recibir peticiones y brindar las funcionalidades definidas. Asegúrate de que todas las dependencias estén instaladas correctamente antes de ejecutar los comandos.



### Token acceso

Para obtener el token de acceso a las tablas, es necesario realizar una petición GET al siguiente endpoint:

```bash
http://127.0.0.5:3000/token?tabla=nombre_tabla
```

En el query "nombre_tabla", deberás ingresar el nombre de la tabla de la cual deseas obtener los datos. Las tablas a las cuales puedes acceder son las siguientes:

- alarmas
- clases_alarmas
- empresas
- mantenimientos
- marcas
- modelos
- proveedores
- registros_mantenimientos
- sucursales_proveedores
- vehiculos

Por ejemplo, si deseas obtener acceso a los datos de la tabla "alarmas", la solicitud sería:

```bash
http://127.0.0.5:3000/token?tabla=alarmas
```



### Acceso a las Tablas

Si deseas interactuar con las tablas, es necesario generar un token de acceso para la tabla específica y enviarlo como encabezados (headers) en tus peticiones. Para lograr esto, hemos establecido una conexión utilizando ThunderClient, una extensión de Visual Studio Code.

A continuación, te mostramos cómo configurar los headers para acceder a cualquier tabla:

```bash
Content-Type: application/json
Authorization: [Token de Acceso Generado]
```

<img width="371" alt="Captura de pantalla 2023-07-26 223503" src="https://github.com/Edwarcorredor/Sistema-de-control-y-monitoreo-de-vehiculos-autonomos/assets/104398132/bc375210-ecf0-44af-abae-9e7284fb4709">

El token de acceso se genera al realizar una autenticación exitosa y es indispensable para acceder a los recursos protegidos.



### Endpoints Comunes

#### Obtener datos

Para obtener todos los datos de una tabla específica, realiza una petición GET al siguiente endpoint:

```bash
http://127.0.0.5:3000/nombre_tabla
```

Reemplaza "nombre_tabla" con el nombre de la tabla a la que deseas acceder (por ejemplo: alarmas, empresas, mantenimientos, etc.). Esta solicitud te proporcionará una respuesta con todos los registros almacenados en la tabla especificada.



#### Eliminar datos

Para eliminar registros de una tabla específica, envía una petición DELETE al siguiente endpoint:

```bash
http://127.0.0.5:3000/nombre_tabla/id
```

Reemplaza "nombre_tabla" con el nombre de la tabla a la que deseas acceder (por ejemplo: alarmas, empresas, mantenimientos, etc.) y "id" con el identificador de la fila que deseas eliminar de la tabla especificada. Esta acción eliminará permanentemente el registro seleccionado.



### Operaciones Específicas por Tabla

A continuación, se detallan las operaciones específicas para cada tabla:

Mis disculpas por la omisión. A continuación, te presento la sección "Agregar datos" y "Editar datos" para cada tabla:



#### Tabla "alarma"

##### Agregar datos

Si deseas agregar nuevos datos a la tabla "alarma", debes hacer una petición POST al siguiente endpoint:

```
http://127.0.0.5:3000/alarmas
```

En el cuerpo (body) de la solicitud, asegúrate de enviar los siguientes datos en formato JSON:

```
{
  "VEHICULO_ID": (obligatorio),
  "CLASE_ALARMA_ID": (obligatorio)
}
```

- VEHICULO_ID: Solo recibe valores numéricos enteros y mayor a cero. Es obligatorio.
- CLASE_ALARMA_ID: Solo recibe valores numéricos enteros y mayor a cero. Es obligatorio.

##### Editar datos

Si necesitas realizar modificaciones en la tabla "alarma", utiliza una petición PUT al siguiente endpoint:

```
http://127.0.0.5:3000/alarmas/id
```

Reemplaza "id" con el identificador de la fila que deseas editar. Además, en el cuerpo (body) de la solicitud, incluye los siguientes datos en formato JSON:

```
{
  "VEHICULO_ID": (obligatorio),
  "CLASE_ALARMA_ID": (obligatorio)
}
```

- VEHICULO_ID: Solo recibe valores numéricos enteros y mayor a cero. Es obligatorio.
- CLASE_ALARMA_ID: Solo recibe valores numéricos enteros y mayor a cero. Es obligatorio.





#### Tabla "empresa"

##### Agregar datos

Si deseas agregar nuevos datos a la tabla "empresa", debes hacer una petición POST al siguiente endpoint:

```
http://127.0.0.5:3000/empresas
```

En el cuerpo (body) de la solicitud, asegúrate de enviar los siguientes datos en formato JSON:

```
{
  "NAME": (obligatorio),
  "ADDRESS": (obligatorio),
  "PHONE": (opcional),
  "EMAIL": (opcional),
  "SITE_WEB": (opcional)
}
```

- NAME: Debe ser una cadena de texto, puede incluir letras y números. Es obligatorio.

- ADDRESS: Debe ser una cadena de texto, puede incluir letras, números y caracteres especiales. Es obligatorio.

- PHONE: Debe ser una cadena de texto que represente un número de teléfono válido. Es opcional.

- EMAIL: Debe ser una cadena de texto que represente una dirección de correo electrónico válida. Es opcional.

- SITE_WEB: Debe ser una cadena de texto que represente una URL válida. Es opcional.

##### Editar datos

Si necesitas realizar modificaciones en la tabla "empresa", utiliza una petición PUT al siguiente endpoint:

```
http://127.0.0.5:3000/empresas/id
```

Reemplaza "id" con el identificador de la fila que deseas editar. Además, en el cuerpo (body) de la solicitud, incluye los siguientes datos en formato JSON:

```
{
  "NAME": (obligatorio),
  "ADDRESS": (obligatorio),
  "PHONE": (opcional),
  "EMAIL": (opcional),
  "SITE_WEB": (opcional)
}
```

- NAME: Debe ser una cadena de texto, puede incluir letras y números. Es obligatorio.

- ADDRESS: Debe ser una cadena de texto, puede incluir letras, números y caracteres especiales. Es obligatorio.

- PHONE: Debe ser una cadena de texto que represente un número de teléfono válido. Es opcional.

- EMAIL: Debe ser una cadena de texto que represente una dirección de correo electrónico válida. Es opcional.

- SITE_WEB: Debe ser una cadena de texto que represente una URL válida. Es opcional.





#### Tabla "marca"

##### Agregar datos

Si deseas agregar nuevos datos a la tabla "marca", debes hacer una petición POST al siguiente endpoint:

```
http://127.0.0.5:3000/marcas
```

En el cuerpo (body) de la solicitud, asegúrate de enviar los siguientes datos en formato JSON:

```
{
  "NAME": (obligatorio),
  "ORIGEN_PAIS": (opcional),
  "SITE_WEB": (opcional)
}
```

- NAME: Debe ser una cadena de texto, puede incluir letras y números. Es obligatorio.

- ORIGEN_PAIS: Debe ser una cadena de texto, solo puede incluir letras. Es opcional.

- SITE_WEB: Debe ser una cadena de texto que represente una URL válida. Es opcional.

##### Editar datos

Si necesitas realizar modificaciones en la tabla "marca", utiliza una petición PUT al siguiente endpoint:

```
http://127.0.0.5:3000/marcas/id
```

Reemplaza "id" con el identificador de la fila que deseas editar. Además, en el cuerpo (body) de la solicitud, incluye los siguientes datos en formato JSON:

```
{
  "NAME": (obligatorio),
  "ORIGEN_PAIS": (opcional),
  "SITE_WEB": (opcional)
}
```

- NAME: Debe ser una cadena de texto, puede incluir letras y números. Es obligatorio.

- ORIGEN_PAIS: Debe ser una cadena de texto, solo puede incluir letras. Es opcional.

- SITE_WEB: Debe ser una cadena de texto que represente una URL válida. Es opcional.





#### Tabla "clase_alarma"

##### Agregar datos

Si deseas agregar nuevos datos a la tabla "clase_alarma", debes hacer una petición POST al siguiente endpoint:

```
http://127.0.0.5:3000/clases_alarmas
```

En el cuerpo (body) de la solicitud, asegúrate de enviar los siguientes datos en formato JSON:

```
{
  "NAME": (obligatorio),
  "DESCRIPTION": (obligatorio),
  "MANTENIMIENTO_ID": (obligatorio)
}
```

- NAME: Debe ser una cadena de texto, puede incluir letras y números. Es obligatorio.

- DESCRIPTION: Debe ser una cadena de texto, puede incluir letras y números. Es obligatorio.

- MANTENIMIENTO_ID: Debe ser un valor numérico entero y mayor a cero. Es obligatorio.

##### Editar datos

Si necesitas realizar modificaciones en la tabla "clase_alarma", utiliza una petición PUT al siguiente endpoint:

```
http://127.0.0.5:3000/clases_alarmas/id


```

Reemplaza "id" con el identificador de la fila que deseas editar. Además, en el cuerpo (body) de la solicitud, incluye los siguientes datos en formato JSON:

```
{
  "NAME": (obligatorio),
  "DESCRIPTION": (obligatorio),
  "MANTENIMIENTO_ID": (obligatorio)
}
```

- NAME: Debe ser una cadena de texto, puede incluir letras y números. Es obligatorio.

- DESCRIPTION: Debe ser una cadena de texto, puede incluir letras y números. Es obligatorio.

- MANTENIMIENTO_ID: Debe ser un valor numérico entero y mayor a cero. Es obligatorio.





#### Tabla "mantenimiento"

##### Agregar datos

Si deseas agregar nuevos datos a la tabla "mantenimiento", debes hacer una petición POST al siguiente endpoint:

```
http://127.0.0.5:3000/mantenimientos
```

En el cuerpo (body) de la solicitud, asegúrate de enviar los siguientes datos en formato JSON:

```
{
  "SUCURSAL_ID": (obligatorio),
  "DESCRIPTION": (obligatorio)
}
```

- SUCURSAL_ID: Debe ser un valor numérico entero y mayor a cero. Es obligatorio.

- DESCRIPTION: Debe ser una cadena de texto, puede incluir letras y números. Es obligatorio.

##### Editar datos

Si necesitas realizar modificaciones en la tabla "mantenimiento", utiliza una petición PUT al siguiente endpoint:

```
http://127.0.0.5:3000/mantenimientos/id
```

Reemplaza "id" con el identificador de la fila que deseas editar. Además, en el cuerpo (body) de la solicitud, incluye los siguientes datos en formato JSON:

```
{
  "SUCURSAL_ID": (obligatorio),
  "DESCRIPTION": (obligatorio)
}
```

- SUCURSAL_ID: Debe ser un valor numérico entero y mayor a cero. Es obligatorio.

- DESCRIPTION: Debe ser una cadena de texto, puede incluir letras y números. Es obligatorio.



#### Tabla "modelo"

##### Agregar datos

Si deseas agregar nuevos datos a la tabla "modelo", debes hacer una petición POST al siguiente endpoint:

```
http://127.0.0.5:3000/modelos
```

En el cuerpo (body) de la solicitud, asegúrate de enviar los siguientes datos en formato JSON:

```
{
  "MARCA_ID": (obligatorio),
  "NAME": (obligatorio),
  "LANZAMIENTO_ANIO": (opcional)
}
```

- MARCA_ID: Debe ser un valor numérico entero y mayor a cero. Es obligatorio.

- NAME: Debe ser una cadena de texto, puede incluir letras y números. Es obligatorio.

- LANZAMIENTO_ANIO: Debe ser un valor numérico entero que representa el año de lanzamiento del modelo. Es opcional.

##### Editar datos

Si necesitas realizar modificaciones en la tabla "modelo", utiliza una petición PUT al siguiente endpoint:

```
http://127.0.0.5:3000/modelos/id
```

Reemplaza "id" con el identificador de la fila que deseas editar. Además, en el cuerpo (body) de la solicitud, incluye los siguientes datos en formato JSON:

```
{
  "MARCA_ID": (obligatorio),
  "NAME": (obligatorio),
  "LANZAMIENTO_ANIO": (opcional)
}
```

- MARCA_ID: Debe ser un valor numérico entero y mayor a cero. Es obligatorio.

- NAME: Debe ser una cadena de texto, puede incluir letras y números. Es obligatorio.

- LANZAMIENTO_ANIO: Debe ser un valor numérico entero que representa el año de lanzamiento del modelo. Es opcional.






#### Tabla "proveedor"

##### Agregar datos

Si deseas agregar nuevos datos a la tabla "proveedor", debes hacer una petición POST al siguiente endpoint:

```
http://127.0.0.5:3000/proveedores
```

En el cuerpo (body) de la solicitud, asegúrate de enviar los siguientes datos en formato JSON:

```
{
  "NAME": (obligatorio),
  "ADDRESS": (obligatorio),
  "PHONE": (opcional),
  "EMAIL": (opcional),
  "SITE_WEB": (opcional)
}
```

- NAME: Debe ser una cadena de texto, puede incluir letras y números. Es obligatorio.

- ADDRESS: Debe ser una cadena de texto, puede incluir letras, números y caracteres especiales. Es obligatorio.

- PHONE: Debe ser una cadena de texto que represente un número de teléfono válido. Es opcional.

- EMAIL: Debe ser una cadena de texto que represente una dirección de correo electrónico válida. Es opcional.

- SITE_WEB: Debe ser una cadena de texto que represente una URL válida. Es opcional.

##### Editar datos

Si necesitas realizar modificaciones en la tabla "proveedor", utiliza una petición PUT al siguiente endpoint:

```
http://127.0.0.5:3000/proveedores/id
```

Reemplaza "id" con el identificador de la fila que deseas editar. Además, en el cuerpo (body) de la solicitud, incluye los siguientes datos en formato JSON:

```
{
  "NAME": (obligatorio),
  "ADDRESS": (obligatorio),
  "PHONE": (opcional),
  "EMAIL": (opcional),
  "SITE_WEB": (opcional)
}
```

- NAME: Debe ser una cadena de texto, puede incluir letras y números. Es obligatorio.
- ADDRESS: Debe ser una cadena de texto, puede incluir letras, números y caracteres especiales. Es obligatorio.
- PHONE: Debe ser una cadena de texto que represente un número de teléfono válido. Es opcional.
- EMAIL: Debe ser una cadena de texto que represente una dirección de correo electrónico válida. Es opcional.
- SITE_WEB: Debe ser una cadena de texto que represente una URL válida. Es opcional.





### Tabla "registro_mantenimiento"

#### Agregar datos

Para agregar nuevos datos a la tabla "registro_mantenimiento", realiza una petición POST al siguiente endpoint:

```
http://127.0.0.5:3000/registros_mantenimientos
```

En el cuerpo de la solicitud, envía los siguientes datos en formato JSON:

```
{
  "ALARMA_ID": (obligatorio),
  "COST": (obligatorio)
}
```

ALARMA_ID:  Debe ser un valor numérico entero y mayor a cero. Es obligatorio.

COST: Valor decimal que representa el costo del mantenimiento. Obligatorio.

#### Editar datos

Para editar datos en la tabla "registro_mantenimiento", realiza una petición PUT al siguiente endpoint:

```
http://127.0.0.5:3000/registros_mantenimientos/id
```

Reemplaza "id" con el identificador de la fila que deseas editar. En el cuerpo de la solicitud, incluye los siguientes datos en formato JSON:

```
{
  "ALARMA_ID": (obligatorio),
  "COST": (obligatorio)
}
```

ALARMA_ID:  Debe ser un valor numérico entero y mayor a cero. Es obligatorio.

COST: Valor decimal que representa el costo del mantenimiento. Obligatorio.



### Tabla "sucursal_proveedor"

#### Agregar datos

Para agregar nuevos datos a la tabla "sucursal_proveedor", realiza una petición POST al siguiente endpoint:

```
http://127.0.0.5:3000/sucursales_proveedores
```

En el cuerpo de la solicitud, envía los siguientes datos en formato JSON:

```
{
  "PROVEEDOR_ID": (obligatorio),
  "NAME": (obligatorio),
  "ADDRESS": (obligatorio),
  "PHONE": (opcional),
  "EMAIL": (opcional)
}
```

PROVEEDOR_ID: Debe ser un valor numérico entero y mayor a cero. Es obligatorio.

NAME: Debe ser una cadena de texto, puede incluir letras y números. Es obligatorio

ADDRESS: Debe ser una cadena de texto, puede incluir letras, números y caracteres especiales. Es obligatorio.

PHONE: Debe ser una cadena de texto que represente un número de teléfono válido. Es opcional.

EMAIL: Debe ser una cadena de texto que represente una dirección de correo electrónico válida. Es opcional.



#### Editar datos

Para editar datos en la tabla "sucursal_proveedor", realiza una petición PUT al siguiente endpoint:

```
http://127.0.0.5:3000/sucursales_proveedores/id
```

Reemplaza "id" con el identificador de la fila que deseas editar. En el cuerpo de la solicitud, incluye los siguientes datos en formato JSON:

```
{
  "PROVEEDOR_ID": (obligatorio),
  "NAME": (obligatorio),
  "ADDRESS": (obligatorio),
  "PHONE": (opcional),
  "EMAIL": (opcional)
}
```

PROVEEDOR_ID: Debe ser un valor numérico entero y mayor a cero. Es obligatorio.

NAME: Debe ser una cadena de texto, puede incluir letras y números. Es obligatorio

ADDRESS: Debe ser una cadena de texto, puede incluir letras, números y caracteres especiales. Es obligatorio.

PHONE: Debe ser una cadena de texto que represente un número de teléfono válido. Es opcional.

EMAIL: Debe ser una cadena de texto que represente una dirección de correo electrónico válida. Es opcional.




### Tabla "vehiculo"

#### Agregar datos

Para agregar nuevos datos a la tabla "vehiculo", realiza una petición POST al siguiente endpoint:

```
http://127.0.0.5:3000/vehiculos
```

En el cuerpo de la solicitud, envía los siguientes datos en formato JSON:

```
{
  "EMPRESA_ID": (obligatorio),
  "MODELO_ID": (obligatorio),
  "SERIE_NUMERO": (obligatorio),
  "PLATE": (obligatorio),
  "STATE": (obligatorio)
}
```

EMPRESA_ID: Debe ser un valor numérico entero y mayor a cero. Es obligatorio.

MODELO_ID: Debe ser un valor numérico entero y mayor a cero. Es obligatorio.

SERIE_NUMERO:  Debe ser una cadena de texto que represente un número de serie válido. Es opcional.

PLATE: Cadena de texto que representa la placa del vehículo. Obligatorio.

STATE: Debe ser una cadena de texto,  que solo puede incluir letras. Es obligatorio

#### Editar datos

Para editar datos en la tabla "vehiculo", realiza una petición PUT al siguiente endpoint:

```
http://127.0.0.5:3000/vehiculos/id
```

Reemplaza "id" con el identificador de la fila que deseas editar. En el cuerpo de la solicitud, incluye los siguientes datos en formato JSON:

```
{
  "EMPRESA_ID": (obligatorio),
  "MODELO_ID": (obligatorio),
  "SERIE_NUMERO": (obligatorio),
  "PLATE": (obligatorio),
  "STATE": (obligatorio)
}}
```

EMPRESA_ID: Debe ser un valor numérico entero y mayor a cero. Es obligatorio.

MODELO_ID: Debe ser un valor numérico entero y mayor a cero. Es obligatorio.

SERIE_NUMERO:  Debe ser una cadena de texto que represente un número de serie válido. Es opcional.

PLATE: Cadena de texto que representa la placa del vehículo. Obligatorio.

STATE: Debe ser una cadena de texto,  que solo puede incluir letras. Es obligatorio

