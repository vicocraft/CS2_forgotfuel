/*
 *  Mod:					Forgot Fuel
 *  Tipo:					Gameplay
 *  Versão:					1.7_1.0
 *  Criado:					16:58 25/12/2014
 *  Última Modificação:		14:02 27/12/2014
 
 *	Descrição Básica:		Adiciona alguns items do minecraft vanilla para a lista de combustíveis para fornalhas.
*/

// TICKS POR SEGUNDO PADRÃO DO MINECRAFT
var tps = 20;

/* ================== Baseados em Madeira ================== */

// Porta, 21 segundos de duração
mod.addFuel("minecraft:wooden_door", 21*tps);

// Escada, 18 segundos de duração
mod.addFuel("minecraft:ladder", 18*tps);

// Placa, 15 segundos de duração
mod.addFuel("minecraft:sign", 15*tps);

// Pintura, 15 segundos de duração
mod.addFuel("minecraft:painting", 15*tps);

// Tocha, 30 segundos de duração
mod.addFuel("minecraft:torch", 13*tps);

// Tocha de Redstone, 40 segundos de duração
mod.addFuel("minecraft:redstone_torch", 16*tps);
mod.addFuel("minecraft:unlit_redstone_torch", 16*tps);

/* =================== Baseados em Papel =================== */

// Papel, 7.5 segundos de duração (pouco mais longo que uma muda ou graveto)
mod.addFuel("minecraft:paper", 8*tps);

// Mapa em branco, 8 segundos de duração (assim como Papel)
mod.addFuel("minecraft:map", 8*tps);

// Mapa desenhado, 8 segundos de duração (assim como Mapa em branco)
mod.addFuel("minecraft:filled_map", 8*tps);

/* ======================= Alimentos ======================= */

// Carne Podre, 15 segundos de duração (assim como um bloco de planks)
mod.addFuel("minecraft:rotten_flesh", 15*tps);

// Abóbora / Jack o lantern, 15 segundos de duração (assim como um bloco de planks)
mod.addFuel("minecraft:pumpkin", 15*tps);
mod.addFuel("minecraft:lit_pumpkin", 15*tps);

/* ========================== LÃS ========================== */

// 10 segundos, um pouco menos que um bloco de madeira. Todas as cores
mod.addFuel("minecraft:wool:0", 10*tps);
mod.addFuel("minecraft:wool:1", 10*tps);
mod.addFuel("minecraft:wool:2", 10*tps);
mod.addFuel("minecraft:wool:3", 10*tps);
mod.addFuel("minecraft:wool:4", 10*tps);
mod.addFuel("minecraft:wool:5", 10*tps);
mod.addFuel("minecraft:wool:6", 10*tps);
mod.addFuel("minecraft:wool:7", 10*tps);
mod.addFuel("minecraft:wool:8", 10*tps);
mod.addFuel("minecraft:wool:9", 10*tps);
mod.addFuel("minecraft:wool:10", 10*tps);
mod.addFuel("minecraft:wool:11", 10*tps);
mod.addFuel("minecraft:wool:12", 10*tps);
mod.addFuel("minecraft:wool:13", 10*tps);
mod.addFuel("minecraft:wool:14", 10*tps);
mod.addFuel("minecraft:wool:15", 10*tps);

