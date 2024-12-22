let hero = createKnight('Augusto')
let monster = createMonster()

stage.start(
    hero,
    monster,
    document.getElementById('hero'),
    document.getElementById('monster')
)