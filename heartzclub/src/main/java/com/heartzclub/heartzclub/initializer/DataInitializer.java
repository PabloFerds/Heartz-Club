package com.heartzclub.heartzclub.initializer;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.heartzclub.heartzclub.Model.Jogo;
import com.heartzclub.heartzclub.Repository.JogoRepository;

@Component
public class DataInitializer implements CommandLineRunner {

    private final JogoRepository jogoRepository;

    public DataInitializer(JogoRepository jogoRepository) {
        this.jogoRepository = jogoRepository;
    }

    @Override
    public void run(String... args) {

        if (jogoRepository.count() > 0) {
            return;
        }

        salvar(
                "Red Dead Redemption 2",
                "Ação e Aventura",
                "Um épico de faroeste em mundo aberto da Rockstar Games, acompanhando Arthur Morgan em uma jornada marcada por assaltos, sobrevivência e conflitos dentro da gangue Van der Linde.",
                9.8,
                "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg"
        );

        salvar(
                "The Witcher 3: Wild Hunt",
                "RPG",
                "Geralt de Rívia embarca em uma jornada para encontrar Ciri em um vasto mundo repleto de monstros, escolhas morais e histórias memoráveis.",
                9.7,
                "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg"
        );

        salvar(
                "Grand Theft Auto V",
                "Ação e Mundo Aberto",
                "Três protagonistas vivem histórias interligadas em Los Santos, em um dos jogos mais vendidos e jogados da última década.",
                9.6,
                "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png"
        );

        salvar(
                "Minecraft",
                "Sandbox e Sobrevivência",
                "Um jogo de construção e exploração em blocos que se tornou um fenômeno global, permitindo criatividade ilimitada.",
                9.5,
                "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png"
        );

        salvar(
                "The Legend of Zelda: Breath of the Wild",
                "Aventura",
                "Link desperta em Hyrule e deve derrotar Calamity Ganon em um mundo aberto revolucionário.",
                9.8,
                "https://upload.wikimedia.org/wikipedia/pt/0/0f/Legend_of_Zelda_Breath_of_the_Wild_capa.png"
        );

        salvar(
                "Elden Ring",
                "RPG de Ação",
                "Uma aventura desafiadora em um mundo criado pela FromSoftware em parceria com George R. R. Martin.",
                9.7,
                "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg"
        );

        salvar(
                "God of War",
                "Ação e Aventura",
                "Kratos e seu filho Atreus embarcam em uma jornada emocionante pela mitologia nórdica.",
                9.6,
                "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg"
        );

        salvar(
                "Cyberpunk 2077",
                "RPG e Ficção Científica",
                "Explore Night City em um RPG futurista repleto de escolhas, implantes cibernéticos e missões intensas.",
                8.9,
                "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg"
        );

        salvar(
                "Fortnite",
                "Battle Royale",
                "Um dos jogos online mais populares do mundo, conhecido por suas temporadas, eventos e colaborações.",
                8.8,
                "https://static.wikia.nocookie.net/fortnite_ptbr_gamepedia_ptbr/images/a/ae/Fortnite_%28Update_v28.00%29_-_Cover_Art_-_Fortnite.jpg/revision/latest?cb=20240503123646"
        );

        salvar(
                "Counter-Strike 2",
                "FPS Tático",
                "Evolução do clássico Counter-Strike, mantendo a jogabilidade competitiva que conquistou milhões de jogadores.",
                9.1,
                "https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg"
        );

        salvar(
                "Valorant",
                "FPS Tático",
                "Shooter competitivo da Riot Games que combina precisão e habilidades únicas dos agentes.",
                8.9,
                "https://upload.wikimedia.org/wikipedia/en/b/ba/Valorant_cover.jpg"
        );
        salvar(
        "League of Legends",
        "MOBA",
        "Jogo competitivo da Riot Games onde duas equipes batalham para destruir a base inimiga usando campeões com habilidades únicas.",
        8.7,
        "https://upload.wikimedia.org/wikipedia/en/7/77/League_of_Legends_logo.png"
);

salvar(
        "Resident Evil 4 Remake",
        "Terror e Ação",
        "Leon Kennedy enfrenta uma vila infestada em uma reimaginação moderna do clássico survival horror.",
        9.4,
        "https://upload.wikimedia.org/wikipedia/en/d/df/Resident_Evil_4_remake_cover.jpg"
);

salvar(
        "Hollow Knight",
        "Metroidvania",
        "Explore o reino subterrâneo de Hallownest em uma aventura desafiadora e atmosférica.",
        9.3,
        "https://upload.wikimedia.org/wikipedia/en/0/04/Hollow_Knight_first_cover_art.webp"
);

salvar(
        "Dark Souls III",
        "RPG de Ação",
        "Um RPG desafiador da FromSoftware conhecido por seus chefes épicos e combate intenso.",
        9.4,
        "https://upload.wikimedia.org/wikipedia/en/b/bb/Dark_souls_3_cover_art.jpg"
);

salvar(
        "Bloodborne",
        "RPG de Ação",
        "Enfrente criaturas aterrorizantes em Yharnam em um dos jogos mais aclamados da FromSoftware.",
        9.5,
        "https://upload.wikimedia.org/wikipedia/en/6/68/Bloodborne_Cover_Wallpaper.jpg"
);

salvar(
        "Sekiro: Shadows Die Twice",
        "Ação",
        "Um guerreiro shinobi busca vingança em um Japão feudal brutal e desafiador.",
        9.4,
        "https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg"
);

salvar(
        "Ghost of Tsushima",
        "Ação e Aventura",
        "Samurai luta para proteger a ilha de Tsushima durante a invasão mongol.",
        9.3,
        "https://upload.wikimedia.org/wikipedia/en/b/b6/Ghost_of_Tsushima.jpg"
);

salvar(
        "Spider-Man 2",
        "Ação e Super-herói",
        "Peter Parker e Miles Morales enfrentam novas ameaças em Nova York.",
        9.2,
        "https://upload.wikimedia.org/wikipedia/en/e/ef/Marvel%27s_Spider-Man_2_cover_art.jpg"
);

salvar(
        "The Last of Us Part II",
        "Ação e Drama",
        "Uma jornada emocional de vingança e sobrevivência em um mundo pós-apocalíptico.",
        9.1,
        "https://upload.wikimedia.org/wikipedia/en/4/4f/The_Last_of_Us_Part_II_cover_art.jpg"
);

salvar(
        "FIFA 24",
        "Esporte",
        "Simulador de futebol com licenças oficiais e modos competitivos online.",
        8.4,
        "https://upload.wikimedia.org/wikipedia/en/e/e7/EA_Sports_FC_24_cover.jpg"
);

salvar(
        "EA Sports FC 25",
        "Esporte",
        "Nova geração do simulador de futebol da EA Sports com gráficos aprimorados.",
        8.5,
        "https://upload.wikimedia.org/wikipedia/en/e/e7/EA_Sports_FC_24_cover.jpg"
);

salvar(
        "Rocket League",
        "Esporte e Corrida",
        "Carros impulsionados jogando futebol em partidas rápidas e competitivas.",
        8.8,
        "https://upload.wikimedia.org/wikipedia/en/e/e0/Rocket_League_coverart.jpg"
);

salvar(
        "Overwatch 2",
        "FPS Hero Shooter",
        "Shooter competitivo da Blizzard focado em trabalho em equipe e heróis únicos.",
        8.3,
        "https://upload.wikimedia.org/wikipedia/en/8/80/Overwatch_2_Steam_artwork.jpg"
);

salvar(
        "Apex Legends",
        "Battle Royale",
        "Battle Royale dinâmico com personagens que possuem habilidades especiais.",
        8.7,
        "https://upload.wikimedia.org/wikipedia/en/d/db/Apex_legends_cover.jpg"
);

salvar(
        "Call of Duty: Warzone",
        "Battle Royale",
        "Modo battle royale da franquia Call of Duty com combate intenso e frenético.",
        8.6,
        "https://upload.wikimedia.org/wikipedia/en/5/5e/COD_Warzone_cover.jpg"
);

salvar(
        "Call of Duty: Modern Warfare III",
        "FPS",
        "Nova entrada da franquia Call of Duty focada em ação cinematográfica.",
        8.1,
        "https://upload.wikimedia.org/wikipedia/en/5/57/Call_of_Duty_Modern_Warfare_III_cover_art.jpg"
);

salvar(
        "Battlefield 1",
        "FPS de Guerra",
        "Experiência intensa da Primeira Guerra Mundial com batalhas épicas.",
        9.0,
        "https://upload.wikimedia.org/wikipedia/en/2/26/Battlefield_1_cover_art.jpg"
);

salvar(
        "Battlefield V",
        "FPS de Guerra",
        "Shooter ambientado na Segunda Guerra Mundial com grandes mapas multiplayer.",
        8.5,
        "https://upload.wikimedia.org/wikipedia/en/3/3f/Battlefield_V_Cover_Art.jpg"
);

salvar(
        "Stardew Valley",
        "Simulação",
        "Construa sua fazenda, faça amizades e explore minas em um RPG relaxante.",
        9.4,
        "https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png"
);

salvar(
        "Terraria",
        "Sandbox",
        "Mistura de exploração, construção e combate em um vasto mundo 2D.",
        9.2,
        "https://upload.wikimedia.org/wikipedia/en/1/1b/Terraria_Steam_artwork.jpg"
);

salvar(
        "Among Us",
        "Party Game",
        "Tripulantes tentam descobrir impostores infiltrados em partidas online.",
        8.0,
        "https://upload.wikimedia.org/wikipedia/en/9/9a/Among_Us_cover_art.jpg"
);

salvar(
        "Fall Guys",
        "Party Game",
        "Competições caóticas e divertidas inspiradas em programas de TV.",
        7.9,
        "https://upload.wikimedia.org/wikipedia/en/5/5c/Fall_Guys_cover.jpg"
);

salvar(
        "Dying Light 2",
        "Ação e Survival Horror",
        "Sobreviva em uma cidade dominada por infectados utilizando parkour.",
        8.2,
        "https://upload.wikimedia.org/wikipedia/en/2/2f/Dying_Light_2_cover_art.jpg"
);

salvar(
        "Far Cry 6",
        "FPS e Mundo Aberto",
        "Lidere uma revolução contra um ditador em uma ilha inspirada em Cuba.",
        8.0,
        "https://upload.wikimedia.org/wikipedia/en/3/35/Far_Cry_6_cover.jpg"
);

salvar(
        "Assassin's Creed Valhalla",
        "RPG de Ação",
        "Viva como um guerreiro viking explorando a Inglaterra medieval.",
        8.7,
        "https://upload.wikimedia.org/wikipedia/en/f/f8/ACValhalla.jpg"
);

salvar(
        "Assassin's Creed Mirage",
        "Ação e Stealth",
        "Retorno às raízes da franquia com foco em furtividade e parkour.",
        8.4,
        "https://upload.wikimedia.org/wikipedia/en/a/a5/Assassin%27s_Creed_Mirage_cover.jpg"
);

salvar(
        "Hades",
        "Roguelike",
        "Escape do submundo grego em combates rápidos e viciantes.",
        9.5,
        "https://upload.wikimedia.org/wikipedia/en/c/cc/Hades_cover_art.jpg"
);

salvar(
        "Celeste",
        "Plataforma",
        "Uma emocionante jornada sobre superação e ansiedade escalando uma montanha.",
        9.3,
        "https://upload.wikimedia.org/wikipedia/en/9/9d/Celeste_box_art_final.png"
);

salvar(
        "Dead by Daylight",
        "Terror Multiplayer",
        "Sobreviventes tentam escapar de assassinos em partidas online tensas.",
        8.1,
        "https://upload.wikimedia.org/wikipedia/en/b/b7/Dead_by_Daylight_Steam_header.jpg"
);

salvar(
        "Baldur's Gate 3",
        "RPG",
        "RPG baseado em Dungeons & Dragons com escolhas profundas e narrativa incrível.",
        9.8,
        "https://upload.wikimedia.org/wikipedia/en/1/12/Baldur%27s_Gate_3_cover_art.jpg"
);
    }

    private void salvar(String nome,
                        String genero,
                        String descricao,
                        Double nota,
                        String imagemUrl) {

        Jogo jogo = new Jogo(nome, genero, descricao, nota, imagemUrl);
        jogo.setMediaNotas(nota);

        jogoRepository.save(jogo);
    }
}