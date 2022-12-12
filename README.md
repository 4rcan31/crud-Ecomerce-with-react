# Crud Ecomerce with React

Hice un crud chico para aprender React, se trata de un Ecomerce, donde puedes logearte, registrarte, obtener toda la lista de productos, agregar productos
eliminar productos y editar productos


# Instalacion

## Depencias
### Paso 1 - Clona el repositorio

Clona el repositorio haciendo:


```shell

git clone https://github.com/4rcan31/crud-Ecomerce-with-react.git

```
Claramente tienes que tener git en tu path para usar este comando, si no lo tienes, puedes descargar el codigo como .zip

luego de haber descargado el proyecto, entra a la ruta de este haciendo:

```shel
cd crud-Ecomerce-with-react
```

### Paso 2 - descarga las dependecias composer (backend - Api)

Ahora hay que instalar todas las dependencias que laravel necesita para funcionar, para eso tenemos que dirigirnos a nuestra carpeta de API, haciendo

 ```shell
 cd api
```
Una vez ahi, tenemos que instalar las depencias con Composer, ejecutando
```shell
composer install
```


### Paso 3 - descargar dependicas npm (frotend - React)
Ahora hay que instalar todas las dependecias que React necesita para funcionar, para eso tenemos que dirigirnos a la carpeta `lerne` haciendo
```shel
cd ../lerne
```

Una vez ahi, tenemos que instalar todas las dependencias con npm, ejecutando
```shell
npm install
```

## Configuracion Backend

### Base de datos

hay que crear el archivo `api/.env` y poner las credenciales de nuestra base de datos de la siguiente forma: 

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```
Obviamente con los datos correctos de tu base de datos

Luego hay que ejecutar las migraciones, dentro de la consola en el directorio `api` ejecuta

```shell
php artisan migration
```
Tienes que tener php en tu path, este comando lo que hara es crear todas las tablas que el sistema requiere, en la base de datos que especificaste en `DB_DATABASE`, si
quieres ver toda la configuracion puedes irte a: `api/database/migrations`

### Iniciar servidor api
Luego de tener todo listo, puedes iniciar el servidor api en la ruta `api/` ejecutando:
```shell
php artisan serve
```

## Configuracion frotend

Inicial el servidor en la ruta: `lerne/` ejecutando:

```shell
npm start
```

