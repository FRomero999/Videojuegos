const productosTienda = [
    {
        id: 1,
        imagen: "/images/supermarioworld.png",
        titulo: "The Legend of Zelda: Breath of the Wild (Switch)",
        descripcion: "Explora Hyrule en esta aventura de mundo abierto, multipremiada por su innovación y jugabilidad.",
        categoria: ["aventura", "nintendo", "zelda"],
        precio: 54.99
    },
    {
        id: 2,
        imagen: "/images/supermarioworld.png",
        titulo: "God of War Ragnarök (PS5)",
        descripcion: "Kratos y Atreus luchan contra los dioses nórdicos en una épica historia de acción.",
        categoria: ["acción", "playstation", "aventura"],
        precio: 64.99
    },
    {
        id: 3,
        imagen: "/images/supermarioworld.png",
        titulo: "Pokémon Escarlata (Switch)",
        descripcion: "Atrapa y entrena Pokémon en una nueva región abierta, con mecánicas renovadas.",
        categoria: ["rpg", "nintendo", "aventura"],
        precio: 49.99
    },
    {
        id: 4,
        imagen: "/images/supermarioworld.png",
        titulo: "Elden Ring (Xbox Series X)",
        descripcion: "Un mundo oscuro repleto de secretos, peligros y batallas inolvidables. Creado por FromSoftware.",
        categoria: ["rpg", "acción", "fantasía"],
        precio: 59.99
    },
    {
        id: 5,
        imagen: "/images/supermarioworld.png",
        titulo: "Mario Kart 8 Deluxe (Switch)",
        descripcion: "Corre con Mario y sus amigos en divertidas y frenéticas pistas llenas de acción.",
        categoria: ["carreras", "nintendo", "multijugador"],
        precio: 44.99
    },
    {
        id: 6,
        imagen: "/images/supermarioworld.png",
        titulo: "Horizon Forbidden West (PS5)",
        descripcion: "Acompaña a Aloy mientras explora tierras peligrosas y enfrenta máquinas colosales.",
        categoria: ["acción", "aventura", "playstation"],
        precio: 59.95
    },
    {
        id: 7,
        imagen: "/images/supermarioworld.png",
        titulo: "Metroid Dread (Switch)",
        descripcion: "Samus Aran regresa en una nueva misión repleta de desafíos y criaturas peligrosas.",
        categoria: ["aventura", "nintendo", "acción"],
        precio: 47.90
    },
    {
        id: 8,
        imagen: "/images/supermarioworld.png",
        titulo: "Red Dead Redemption 2 (PS4)",
        descripcion: "Vive el Salvaje Oeste en una historia profunda, gráficos increíbles y mundo abierto.",
        categoria: ["aventura", "acción", "western"],
        precio: 39.99
    },
    {
        id: 9,
        imagen: "/images/supermarioworld.png",
        titulo: "Animal Crossing: New Horizons (Switch)",
        descripcion: "Construye tu isla, haz amigos y crea el paraíso definitivo en este simulador social.",
        categoria: ["simulación", "nintendo", "casual"],
        precio: 42.99
    },
    {
        id: 10,
        imagen: "/images/supermarioworld.png",
        titulo: "The Last of Us Part II (PS4)",
        descripcion: "Una historia emotiva y cruda, ambientada en un mundo postapocalíptico devastado.",
        categoria: ["aventura", "acción", "playstation"],
        precio: 29.99
    }
];

function findAllProductos() {
    return productosTienda;
}

function findAllProductosLessThan(precio) {
    return productosTienda.filter((e) => { return (e.precio < precio) })
}

function findProductoById(id) {
    
    return productosTienda.filter((e) => { return (e.id == id) })[0]
}


module.exports = {
    findAllProductos,
    findAllProductosLessThan,
    findProductoById
}