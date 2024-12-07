<?php

class Biblioteca
{
    private $libros = [];

    public function addLibro($titulo, $autor, $categoria)
    {
        $id = count($this->libros) + 1;
        $libro = new Libro($id, $titulo, $autor, $categoria);
        $this->libros[] = $libro;
        return $libro;
    }

    public function searchLibros($keyword)
    {
        $res = [];
        foreach ($this->libros as $libro) {
            if (stripos($libro->getTitulo(), $keyword) !== false || stripos($libro->getAutor(), $keyword) !== false || stripos($libro->getCategoria(), $keyword) !== false) {
                $res[] = $libro;
            }
        }
        return $res;
    }

    public function editLibro($id, $titulo, $autor, $categoria)
    {
        foreach ($this->libros as $libro) {
            if ($libro->getId() == $id) {
                $libro->setTitulo($titulo);
                $libro->setAutor($autor);
                $libro->setCategoria($categoria);
                return true;
            }
        }
        return false;
    }

    public function deleteLibro($id)
    {
        foreach ($this->libros as $key => $libro) {
            if ($libro->getId() == $id) {
                unset($this->libros[$key]);
                break;
            }
        }
    }

    public function prestarLibro($id)
    {
        foreach ($this->libros as $libro) {
            if ($libro->getId() == $id && $libro->isDisponible()) {
                $libro->setDisponible(false);
                return true;
            }
        }
        return false;
    }

    public function regresarLibro($id)
    {
        foreach ($this->libros as $libro) {
            if ($libro->getId() == $id) {
                $libro->setDisponible(true);
                return true;
            }
        }
        return false;
    }

    public function getLibros()
    {
        return $this->libros;
    }
}