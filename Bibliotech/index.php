<?php

require './classes/Libro.php';
require './classes/Biblioteca.php';

session_start();

// Verifica si la sesión 'biblioteca' existe, si no, la crea como un array vacío.
if (!isset($_SESSION['biblioteca'])) {
    $_SESSION['biblioteca'] = new Biblioteca();
}

$biblioteca = $_SESSION['biblioteca'];

/**
 * Agregar Libro.
 * Descripción: Verifica si los datos necesarios para crear un libro han sido enviados por el formulario.
 * Si los datos están presentes, crea una instancia de 'Libro' y la agrega al arreglo 'libros'.
 */
if (isset($_POST['agregar_libro'])) {
    if (isset($_POST['titulo'], $_POST['autor'], $_POST['categoria'])) {
        $biblioteca->addLibro($_POST['titulo'], $_POST['autor'], $_POST['categoria']);
        $_SESSION['biblioteca'] = $biblioteca;

        header('Location: /Bibliotech/');
    }
}

/**
 * Actualizar Libro.
 * Descripción: Busca el libro en la lista y actualiza sus atributos con los datos enviados desde el formulario.
 */
if (isset($_POST['actualizar_libro'])) {
    if (isset($_POST['id'], $_POST['titulo'], $_POST['autor'], $_POST['categoria'])) {
        $biblioteca->editLibro($_POST['id'], $_POST['titulo'], $_POST['autor'], $_POST['categoria']);
        $_SESSION['biblioteca'] = $biblioteca;

        header('Location: /Bibliotech/');
    }
}

$libros = $biblioteca->getLibros();

if (isset($_GET['buscar']) && !empty($_GET['keyword'])) {
    // Filtra los libros según la palabra clave proporcionada.
    $libros = $biblioteca->searchLibros($_GET['keyword']);
}

if (isset($_GET['delete'])) {
    $id = $_GET['delete'];
    $biblioteca->deleteLibro($id);

    header('Location: /Bibliotech/');
}

if (isset($_GET['prestar'])) {
    $id = $_GET['prestar'];

    // Si se solicita prestar un libro, realiza la llamada al método para prestar el libro.
    $biblioteca->prestarLibro($id);

    header('Location: /Bibliotech/');
} elseif (isset($_GET['regresar'])) {
    $id = $_GET['regresar'];

    // Si se solicita regresar un libro, realiza la llama al método para devolver el libro.
    $biblioteca->regresarLibro($id);

    header('Location: /Bibliotech/');
}

function getLibroPorId($id, $libros)
{
    foreach ($libros as $libro) {
        if ($libro->getId() == $id) {
            return $libro;
        }
    }
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bibliotech</title>

</head>

<body>
    <h1>Bibliotech</h1>

    <?php if (isset($_GET['edit'])) {
        $editarLibro = getLibroPorId($_GET['edit'], $libros); ?>

        <h2>Editar Libro</h2>
        <form method="POST">
            <input type="hidden" name="id" value="<?php echo $editarLibro->getId(); ?>">

            <label>Título</label>
            <input type="text" name="titulo" value="<?php echo $editarLibro->getTitulo(); ?>">
            <input type="text" name="autor" value="<?php echo $editarLibro->getAutor(); ?>">
            <input type="text" name="categoria" value="<?php echo $editarLibro->getCategoria(); ?>">
            <button type="submit" name="actualizar_libro">Editar Libro</button>
        </form>

    <?php
    } else {
         ?>

        <!-- Añadir un nuevo libro -->

        <h2>Agregar Libro</h2>
        <form method="POST">
            <input type="text" name="titulo" placeholder="Título" required>
            <input type="text" name="autor" placeholder="Autor" required>
            <input type="text" name="categoria" placeholder="Categoría" required>
            <button type="submit" name="agregar_libro">Agregar Libro</button>
        </form>
    <?php
    } ?>

    <h2>Buscar Libros</h2>
    <form method="GET">
        <input type="text" name="keyword" placeholder="Buscar por título, autor o categoría">
        <button type="submit" name="buscar">Buscar</button>
    </form>

    <main>
        <table>
            <thead>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Categoría</th>
                    <th>Estado</th>
                    <th>Acciones</th>
            </thead>
            <tbody>
                <?php foreach ($libros as $libro) {
                    $estado = $libro->isDisponible() ? "Disponible" : "No disponible";

                    echo "<tr>
                        <td>{$libro->getId()}</td>
                        <td>{$libro->getTitulo()}</td>
                        <td>{$libro->getAutor()}</td>
                        <td>{$libro->getCategoria()}</td>
                        <td>{$estado}</td>
                        <td>";

                    echo "<a href='?edit={$libro->getId()}'>Editar</a>";
                    echo "<a href='?delete={$libro->getId()}'>Eliminar</a>";

                    if ($libro->isDisponible()) {
                        echo "<a href='?prestar={$libro->getId()}'>Prestar</a>";
                    } else {
                        echo "<a href='?regresar={$libro->getId()}'>Regresar</a>";
                    }
                    echo "</td></tr>";
                } ?>
            </tbody>
        </table>
    </main>
</body>

</html>