Proyecto Final React: Escalab E-Commerce

Informacion del Proyecto:


API UTILIZADA: "https://fakestoreapi.com/". Consumo de data mediante "Axios".
ROUTING DE APP:  rutas y navegación (React Router Dom) con lazy loading para optimizar las cargas.
INFO DE PROYECTO:
Se base en el consumo de una API DE PRODUCTOS, utilizando React, Axios para consumo de datos y Redux para manejo de estados.
Toma datos de una API Publica, los muestra en Home Page y permite ver detalle de los productos en una nueva Page, asi mismo ubicar el producto como favorito para futuras compras, genera un simulacro de pago del producto con un modal y tiene un buscador de producto con filtro. Para los errores tiene un errorBoundary (que comienza en True para ver como funciona y redireccionar al Home) y un Not Found para paginas no encontradas que funciona al colocarse "false" al errorBoundary "state = { error: true};" dicho NotFound tiene la opcion de redireccionar al Home Page para continuar navegando.
Utiliza el Patron de Diseño de Render Props en algunos componentes especialmente relacionados con Redux, HOC, Flux, Statefull y Stateless para ciertos componentes. Provider, como ejemplo en el ruteo de la app con React Router Dom y tambien para Redux en su Provider de Store. Container, en tanto el componente Layout lo utiliza y Style Component para el Header y Footer. Utiliza el patron de Arquitectura Flux, donde tiene sus modelos, vista y controladores.
El proyecto aplica el concepto de Code Splitting en varios de sus componentes.
Se aplica el uso de hooks y ciclos de vida basado en componentes funcionales, asi como tambien tiene Custom-Hooks. Se utiliza un Loader para los tiempos de carga entre paginas.
Prop-Types se utilizo para documentar los componentes de: Search, Product y FavoriteList.
El desarrollo de UI se realizo con Boostrap y CSS. El despliegue se realizo en Vercel y el codigo se mantiene en GitHub; la url se modifico utilizando Freedom y configurando los DNS.

Alumno: Cristian Machuca
Ciudad: Buenos Aires, Argentina.

