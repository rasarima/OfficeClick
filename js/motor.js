/**
 * Created by Rafael on 15/03/2015.
 */
var cmDinheiro = document.getElementById('nmDinheiro');
var dinheiro = cmDinheiro.value;
var btContrataFuncionario = document.getElementById('btContrata');
var nmFuncionario = document.getElementById('nmFuncionario');
var funcionario_matricula = 0;
var corpo_funcional = [];
var card_holder = document.getElementById('card-holder');
var cardList = [];
var areaFuncionario = document.getElementById('areaMenuFuncionario');
var areaCartaoMenu = document.getElementById("area-menu-cartao");
var menu = document.getElementById('areaMenu');
var modal = document.getElementsByClassName('modal')[0];
var cardAberto = [];
var btDemitit = document.getElementById('btDemitir');
var sqrs = [];
var valorBonificacao = 100;


function ambiente() {
    this.luz = 3;
    this.paz = 3;
    this.harmonia = 3;

}

function nome() {
    //var nomes = ["Belia ", "Mariela ", "Janell ", "Fae ", "Rochelle ", "Earlie ", "Boyce ", "Alexis ", "Thao ", "Leora ", "Nathan ", "Joanne ", "Gwenda ", "Joel ", "Marcy ", "Aurelia ", "Larissa ", "Tracee ", "Rhiannon ", "Lory ", "Amelia ", "Ethelyn ", "Brandie ", "Winford ", "Agueda ", "Randolph ", "Ariel ", "Benjamin ", "Liana ", "Qiana ", "Tony ", "Karyn ", "Pandora ", "Marci ", "Maribel ", "Warner ", "Delisa ", "Sadye ", "Willette ", "Germaine ", "Georgene ", "Winnifred ", "Dorotha ", "Kisha ", "Viola ", "Georgeanna ", "Anette ", "Odell ", "Alina ", "Kimberlie "];
    var nomes = ["Aar\u00e3o Mantas", "Abel Alcaide", "Abel Alves", "Abigail Granjeiro", "Ab\u00edlio Figueira", "Acacio Be\u00e7a", "Adalberto Campelo", "Adalberto Castelbranco", "Adelaide Mantas", "Adelina Carvalhosa", "Adelino Portela", "Adelino Sobral", "Adolfo Frois", "Adolfo Liberato", "Adolfo Maciel", "Adosindo Abrantes", "Adriano Camacho", "Adriano Lira", "Ad\u00e3o T\u00e9llez", "Ad\u00e9lia Figueiroa", "Ad\u00e9rito Batata", "Ad\u00e9rito Mu\u00f1iz", "Aida Bri\u00e3o", "Aires Bai\u00e3o", "Ajuricaba Colla\u00e7o", "Ajuricaba Foqui\u00e7o", "Ajuricaba P\u00eassego", "Alarico Dutra", "Alberta Guaraciaba", "Alberta \u00c1lvares", "Alberto Guar\u00e1", "Alberto Tabares", "Albino Mourinho", "Alceste Caetano", "Alceste N\u00f3brega", "Alceste Valerio", "Alcides Balsem\u00e3o", "Alcides Soto Mayor", "Alcides Valverde", "Aldo Aldea", "Aldo Malheiro", "Aldo Sim\u00f3n", "Alexandra Feij\u00f3", "Alicia Ver\u00edssimo", "Aline Cortez", "Almeno Ochoa", "Almeno Sant'Anna", "Almerinda Assis", "Almerinda Valverde", "Almor Beserra", "Alu\u00edsio Mara\u00f1\u00f3n", "Alzira Alancastre", "Al\u00edpio Mora", "Al\u00edpio Vasques", "Amanda Coello", "Amanda Franco", "Amanda Guimar\u00e3es", "Amandio Saloio", "Am\u00e1lia Guedes", "Am\u00e1lia Mendon\u00e7a", "Am\u00e9rico Assump\u00e7\u00e3o", "Am\u00e9rico Leiria", "Am\u00edlcar Padilha", "Ana Barretto", "Ana Mendes", "Anacleto Ruas", "Andreia Cachoeira", "Andreia Le\u00e3o", "Andr\u00e9 Fialho", "Andr\u00e9 Guaran\u00e1", "Angelina Freitas", "Ang\u00e9lico Mena", "Aniana Botica", "Anind Ilha", "Anind In\u00e1cio", "Anind Taveira", "Anind Torquato", "Anna Espartero", "Anna Pena", "Anselmo Zagallo", "Antero Barroqueiro", "Antonieta Braga", "Antonieta Freixo", "Antonieta L\u00f3io", "Ant\u00e3o Cust\u00f3dio", "Ant\u00e3o Fragoso", "Ant\u00f3nia Granjeia", "Ant\u00f3nia Sim\u00f3n", "Ant\u00f3nio Padilha", "Ant\u00f4nio Morgado", "An\u00edbal Cachoeira", "An\u00edbal Manso", "An\u00edbal Palha", "Apu\u00e3 Malheiros", "Arachane Estrada", "Araci Vilalobos", "Arcidres Lozada", "Arcidres Quintella", "Armanda Ces\u00e1rio", "Armanda Lessa", "Arnaldo Cirne", "Arnaldo Lous\u00e3", "Artur Neves", "Astolfo Granjeia", "Augusta J\u00e1come", "Augusta Salguero", "Augusto Guaran\u00e1", "Augusto Mart\u00ednez", "Baldu\u00edno In\u00e1cio", "Baltasar Ruela", "Baltasar Silvera", "Bartolomeu Cairu", "Bartolomeu Gonz\u00e1lez", "Bartolomeu Meireles", "Basilio Madeira", "Basilio Mariz", "Beatriz Jim\u00e9nez", "Belchior Horta", "Belchior Larangeira", "Belmifer Barra", "Belmifer Ruela", "Belmira Correa", "Belmira In\u00e1cio", "Belmira Rico", "Bento Figueiredo", "Bento Lameirinhas", "Bento Teles", "Bereng\u00e1rio Almeyda", "Bereng\u00e1rio Guerra", "Bernardete Pastana", "Bernardina Ferr\u00e3o", "Bernardino Aguiar", "Bernardino Monsanto", "Blasco Camargo", "Blasco Camillo", "Blasco Sacadura", "Boaventura Natal", "Borr\u00e1s Arruda", "Branca Galante", "Brenda Jord\u00e1n", "Brites Noguera", "Brites Sara\u00edba", "Brites Vergueiro", "Bruna Mascarenhas", "Br\u00e1s Lustosa", "Br\u00e1ulio Areosa", "Br\u00e1ulio Assump\u00e7\u00e3o", "Br\u00e1ulio Cardoso", "Br\u00e1ulio N\u00fa\u00f1ez", "Bukake Cezar", "Bukake Dur\u00e3o", "Burtira Villela", "Caetano Sousa de Arronches", "Caio Domingos", "Caio Peres", "Calisto Ferr\u00e3o", "Camila Magalh\u00e3es", "Camilo Vidal", "Capitolino Curado", "Carina Jardim", "Carlota G\u00f3mez", "Carlota Ornellas", "Carmem Cort\u00e9s", "Carmem Sant'Anna", "Carminda Castanheira", "Carminda Granjeiro", "Carminda Guerrero", "Carminda Perdig\u00f3n", "Carminda Vilalobos", "Casimiro Rebimbas", "Cassandra Ces\u00e1rio", "Cassandra Souza", "Catarino Carballo", "Catarino Colares", "Catarino Quintanilla", "Caubi Bettencourt", "Caubi Moniz", "Cau\u00e3 Mesquita", "Ca\u00edm Travassos", "Cec\u00edlia Salt\u00e3o", "Celeste Holanda", "Celestino Dam\u00e1sio", "Celestino Imperial", "Celestino Novalles", "Celina Rios", "Ces\u00e1rio Mafra", "Cid Escobar", "Cid Menna", "Cid Reyes", "Cid Vilhena", "Clara Amarante", "Clara Cust\u00f3dio", "Clara Neres", "Clara Vig\u00e1rio", "Clarisse Saraiva", "Claudemiro Meireles", "Cleiton Alancastro", "Cleiton Carvalhal", "Cleiton Cerqueira", "Cleiton Salt\u00e3o", "Clementina Esteves", "Clementina Galv\u00e3o", "Cl\u00e1udio Cabral", "Cl\u00f3vis Neves", "Cl\u00f3vis Quintella", "Cl\u00f3vis Silveira dos A\u00e7ores", "Collin Candeias", "Collin Coello", "Collin Pinhal", "Comecus Belo", "Comecus Imperial", "Comecus Portella", "Concei\u00e7\u00e3o Miranda", "Conrado Alvarenga", "Conrado Aranha", "Constantino Oleiro", "Constan\u00e7a Murtinho", "Cora Arouca", "Cora Castella", "Cora Cisneiros", "Cora Granjeiro", "Cora Vega", "Corina Mart\u00ednez", "Corina Sosa", "Cosme Cidreira", "Crispim Sua\u00e7una", "Cristiana Freire", "Cristiano Couto", "Cristiano Menezes", "Cristiano Zagallo", "Crist\u00f3v\u00e3o Fraga", "C\u00e1ssio Galv\u00e1n", "C\u00e1ssio Ignacio", "C\u00e1tia Ba\u00eda", "C\u00e2ndida Pino", "C\u00e2ndido Barreto", "C\u00e2ndido Fidalgo", "C\u00e2ndido Lousado", "C\u00e2ndido R\u00edos", "C\u00e9lia Ignacio", "C\u00e9sar Higuera", "C\u00e9sar Piteira", "Dalila Penteado", "Daniel Braga", "Daniel Severiano", "Daniela Alvim", "Daniela Colla\u00e7o", "Daniela Vasconcellos", "Danilo Aguiar", "David Saloio", "Davide Naves", "Deise Gonz\u00e1lez", "Deise Miera", "Delfina Chousa", "Delfina Fr\u00f3is", "Delfina Matos", "Denise Ipiranga", "Deolinda Campos", "Derli Oliveira", "Derli Puentes", "Derli Ramalho", "Diamantino Cola\u00e7o", "Diamantino Jes\u00fas", "Diamantino \u00c1gueda", "Diana Camarinho", "Dina Sousa", "Dinarte Rico", "Dino Guedes", "Dino Ruas", "Diodete Cirne", "Diogo Malheiros", "Dion\u00edsio Alvarenga", "Dion\u00edsio Pessanha", "Dirceu Leme", "Di\u00f3genes Themes", "Donata Po\u00e7as", "Dora Belchiorinho", "Dora Mafra", "Doroteia \u00c1lvares", "Duarte Leal", "D\u00e9lia Barcellos", "D\u00e9lia Paes", "D\u00e9lio Alves", "Edmundo Cipriano", "Edmundo Mendoza", "Eduardo Caminha", "Egas Nolasco", "Elia Belmonte", "Elia Coelho", "Elia Linares", "Elias Assump\u00e7\u00e3o", "Elisa Branco", "Elisabete Muniz", "Elisabete Pacheco", "Eliseu Bri\u00e3o", "Eliseu Monjardim", "Elvira Guimar\u00e3es", "Elvira Sanches", "El\u00e1dio Santiago", "Ema Castanho", "Ema Figueir\u00f3", "Ema Quintal", "Emanuel Bicalho", "Emanuel Santos", "Emanuela Quinta", "Em\u00edlia Gil", "Em\u00edlio Imperial", "Enilda Zambujal", "Epaminondas Sequera", "Epif\u00e2nia Abelho", "Ernesto Becerra", "Ernesto Melga\u00e7o", "Ernesto Pacheco", "Ernesto Severo", "Esmeralda Alburquerque", "Esmeralda Macieira", "Estef\u00e2nia Mort\u00e1gua", "Estef\u00e2nia Pasos", "Estef\u00e2nia Santos", "Ester Caneira", "Est\u00eav\u00e3o Queiroz", "Est\u00eav\u00e3o Severiano", "Eudes Fortunato", "Eudes Mainha", "Eug\u00e9nio Eir\u00f3", "Eug\u00e9nio Felgueiras", "Eul\u00e1lia Sampaio", "Eunice Pe\u00e7anha", "Eunice Pinheiro", "Eus\u00e9bio Jaguaribe", "Eus\u00e9bio Le\u00f3n", "Eva Couto", "Eva Couto", "Evandro Azeredo", "Evangelista Pontes", "Evangelista Proen\u00e7a", "Evaristo Bai\u00e3o", "Ezequiel In\u00e1cio", "Ezequiel Vilar", "Fabr\u00edcio Brasil", "Fabr\u00edcio C\u00e9sar", "Fabr\u00edcio Lira", "Fab\u00edola Sim\u00f5es", "Fausto Garc\u00e9s", "Feliciana Porci\u00fancula", "Felicidade Penha", "Felisbela Ipanema", "Fel\u00edcia Cirne", "Fel\u00edcia Pires", "Fel\u00edcia Vianna", "Fernando Telinhos", "Fern\u00e3o Lampreia", "Filena Br\u00e1s", "Filinto Carreira", "Filinto Lopes", "Filipa Braz", "Filipa Travassos", "Filipe Galindo", "Filomena Gra\u00e7a", "Fiona Coitinho", "Fiona Maciel", "Firmina Castilhos", "Flor Grangeia", "Flor Guti\u00e9rrez", "Flora Marroquim", "Florbela Coello", "Florbela Noguera", "Floriano Lamego", "Floriano Minho", "Florinda Gra\u00e7a", "Floripes Esp\u00edrito Santo", "Fl\u00e1via C\u00e2mara", "Francisca Macena", "Francisco Tabajara", "Frederica Ara\u00fajo", "Frederico Faustino", "Frederico Gago", "Fulvio Farinha", "F\u00e1bio Novais", "F\u00e1tima C\u00e2mara", "F\u00e9lix Machado", "Gabriel Be\u00e7a", "Gabriel Cortez", "Gabriel Os\u00f3rio", "Gabriel Sucupira", "Gabriela Grillo", "Galindo Barreiro", "Garibaldo Perdig\u00f3n", "Garibaldo Silva", "Garibaldo Trindade", "Gaspar Ata\u00edde", "Gaspar Grilo", "Gaspar Quirino", "Gaspar Tabosa", "Gast\u00e3o Magalh\u00e3es", "Gaud\u00eancio Goulart", "Gaud\u00eancio Granjeiro", "Gaud\u00eancio Sotomayor", "Gede\u00e3o Louzada", "Gede\u00e3o L\u00f3pez", "Gede\u00e3o Pontes", "Genoveva Figueiroa", "Genoveva Pozas", "Genoveva Valle", "Genoveva Vellozo", "Geraldo Albuquerque", "Gerardo Louzada", "Germano Duarte", "Germano Serralheiro", "Gerson Caldeira", "Gerson Espartero", "Gilberto Ant\u00fanez", "Gilberto Goulart", "Gin\u00e9culo Sousa", "Gir\u00e3o \u00c1lvares", "Gisela Bulhosa", "Gisela R\u00edos", "Gisela Villalobos", "Glauco Otero", "Glauco Tavares", "Gl\u00e1ucia Delgado", "Gl\u00e1ucia Naz\u00e1rio", "Gl\u00e1ucio Filipe", "Gl\u00f3ria Castelo Branco", "Godinho ou Godim Areosa", "Godinho ou Godim Rios", "Godo Monte", "Godo Murtinho", "Godo Pacheco", "Godofredo Cartaxo", "Gon\u00e7alo Jim\u00e9nez", "Gon\u00e7alo Peseiro", "Graciano Castella", "Graciano Vasques", "Gra\u00e7a Pontes", "Greg\u00f3rio Camilo", "Greice Ourique", "Guadalupe Marino", "Guadalupe Meneses", "Gueda Faia", "Gui Otero", "Guida Garc\u00e9s", "Guida Melo", "Guida Quiroga", "Guida Rivero", "Guida Silva", "Guido Cerqueira", "Guido Collares", "Guido Vicario", "Guilherme Peres", "Guilhermina Alcoforado", "Guilhermina Castilho", "Guilhermina Saloio", "Guiomar Campos", "Guterre Foga\u00e7a", "Gu\u00e1lter, Walter Chaves", "Gu\u00e1lter, Walter In\u00e1cio", "G\u00e1vio Butant\u00e3", "Hedviges Cabrera", "Hedviges Loureiro", "Helena Fuentes", "Helena Gonz\u00e1lez", "Helo\u00edsa Mascarenhas", "Helo\u00edsa Vilaverde", "Henrique Bahia", "Henrique Garcia", "Henrique Marcondes", "Henrique Uchoa", "Herberto Vilalobos", "Herculano Rego", "Herculano Sotomayor", "Heriberto Sobral", "Hermesinda Rivero", "Hermesinda Sim\u00e3o", "Herm\u00edgio Pessanha", "Herm\u00edgio Sim\u00f3n", "Higino Gir\u00e3o", "Higino Gonsalves", "Hip\u00f3lito Rebelo", "Honorina Galante", "Honorina Henriques", "Honorina Teixeira", "Hon\u00f3rio Telles", "Hor\u00e1cio Caneira", "Hor\u00e1cio Castelo", "H\u00e9lia Est\u00e9vez", "H\u00e9lia Pajares", "H\u00e9lio Chagas", "H\u00e9lio Rem\u00edgio", "Iara Affonso", "Iara Caf\u00e9", "Iber\u00ea Assun\u00e7\u00e3o", "Iber\u00ea Clementino", "Ibijara Frade", "Ildefonso Antas", "Ildefonso J\u00fadice", "Ildefonso R\u00faa", "Ilduara Junquera", "Ilduara Soeiro", "Ilma Silvera", "Ilma Sucupira", "Il\u00eddio Alvarenga", "Il\u00eddio Mederos", "Inai\u00e1 Grilo", "In\u00e1cio Antas", "In\u00e1cio Estrella", "In\u00eas Botica", "Iolanda Junquera", "Iraci Belmonte", "Iraci Cidreira", "Iraci Severiano", "Irani Buenaventura", "Irene Ant\u00fanez", "Isaac, Isaque Abranches", "Isadora Cantanhede", "Isilda Gir\u00f3n", "Itiber\u00ea Marrero", "Itiber\u00ea Ver\u00edssimo", "Iuri Barrocas", "Iuri Ba\u00eda", "Iuri M\u00e1rquez", "Ivete Novaes", "Ivo Cabral", "Jacinta Palmeira", "Jacinto Moura", "Jacir Casquero", "Jacira Luz", "Jaime Marins", "Jaime \u00c1lvaro", "Jana\u00edna Ipiranga", "Janda\u00edra Freire", "Jandira Camillo", "Jeremias Candeias", "Jer\u00f3nimo, Jer\u00f4nimo Telinhos", "Joana Abrantes", "Joana Guaran\u00e1", "Joana Neres", "Joaquim Castel-Branco", "Joaquim Pinho", "Joaquim Soares", "Joaquim Villena", "Joel Maior", "Joel Piteira", "Jordana Marinho", "Jord\u00e3o Caf\u00e9", "Jorge Albuquerque", "Jorge Bautista", "Jorgina Botica", "Jorgina Trinidad", "Josefa Cabeza de Vaca", "Josefa Grilo", "Josefa Lins", "Josefa Severo", "Josefina Valle", "Judite Galante", "Juliano Losada", "Juliano Mariz", "Jurema Garrau", "Jurema Isla", "Jurema Rebocho", "Jurema Sarmento", "Justino Neves", "Juta\u00ed Gim\u00e9nez", "Juta\u00ed Queiroga", "Juta\u00ed Raposo", "Juta\u00ed Torres", "Ju\u00e7ara L\u00f3pez", "J\u00e9ssica Severo", "J\u00f3natas Muniz", "J\u00falia N\u00fa\u00f1ez", "J\u00falio Bento", "J\u00falio Maciel", "Laura Loio", "Laurinda Colla\u00e7o", "Lav\u00ednia A\u00e7ores", "Lav\u00ednia Osorio", "La\u00eds \u00c1vila", "Leandro Cidreira", "Leandro Torcuato", "Leonardo Marino", "Leonel Butant\u00e3", "Leonel Campos", "Leonel Trist\u00e1n", "Leonilde Ramalho", "Leopoldina Mort\u00e1gua", "Leopoldina Quint\u00e3o", "Leopoldina Vieyra", "Let\u00edcia S\u00e1nchez", "Levi Ferro", "Levindo Tabares", "Le\u00f3nidas Trindade", "Le\u00f4nidas   Be\u00e7a", "Le\u00f4nidas   Goulart", "Liedson Vides", "Liliana Matos", "Lineu Barroso", "Lino Carvalho", "Lopo Francia", "Louren\u00e7o Lisboa", "Luana Siqueira", "Luciana Lima", "Luciana Roriz", "Luciano Ignacio", "Luc\u00edlia Mesquita", "Luc\u00edlio Gallindo", "Lurdes Verguero", "Luzia Medina", "Luzia Quir\u00f3s", "Lu\u00eds Cuaresma", "Lu\u00edsa Leal", "L\u00e9ia Martins", "L\u00e9nia D\u00edaz", "L\u00edgia Salles", "L\u00edvia Godinho", "L\u00facia Concei\u00e7\u00e3o", "L\u00facio Torcato", "Madalena Bezerra", "Mafalda Batista", "Mafalda Ferra\u00e7o", "Magali Passos", "Magali Sequera", "Magda Viana", "Maiara Ipiranga", "Maiara Trinidad", "Mamede Balladares", "Mamede Parracho", "Manuel Araripe", "Manuel Ventura", "Mara Leme", "Marcela Palha", "Marcelo Bogalho", "Margarida Castanho", "Maria Saldanha", "Maria Varella", "Mariana Parafita", "Mariano Pederneiras", "Marina Maia", "Marina Silveira dos A\u00e7ores", "Marisa Castelbranco", "Marisa Vergueiro", "Marlene Brum", "Marli Gra\u00e7a", "Marli Ribeiro", "Marli Rivero", "Marta Belmonte", "Martim Faria", "Martim Robalo", "Martinho Abrantes", "Martinho Javier", "Martinho Sintra", "Mar\u00edlia Puentes", "Mar\u00edlia Tavera", "Matias Pegado", "Matilde Arouca", "Matilde Gil", "Maura Barbosa", "Maura Carmona", "Maura Pinho", "Maur\u00edcio Bel\u00e9n", "Maur\u00edcio Ferreyra", "Maximiliano Bastos", "Mbicy Brasil", "Mbicy Tamoio", "Melinda Salvado", "Melinda Villa\u00e7a", "Mem Guedelha", "Mem Parreira", "Micael Brito", "Micaela Vila\u00e7a", "Miguelina Castello Branco", "Miguelina Chagas", "Mileide Noguera", "Milena Teles", "Miru Arag\u00f3n", "Miru Malta", "Miru Peseiro", "Miru Pessanha", "Miru Pe\u00e7anha", "Miru Souza", "Moaci Paiac\u00e3", "Moacir Landim", "Moacir Sampaio", "Moacir Taveira", "Moema Viera", "Mois\u00e9s Linhares", "Mois\u00e9s Valim", "Murici Fialho", "Murilo Alancastro", "M\u00e1rcio Castella", "M\u00e1rcio Cort\u00eas", "M\u00e1rio Figueir\u00f3", "M\u00e1rio Velasco", "M\u00e1xima Junquera", "M\u00e1xima Mieiro", "M\u00e1ximo Marcondes", "M\u00e1ximo Prada", "M\u00f3nica Brand\u00e3o", "M\u00f3nica Padilla", "M\u00f3nica Ribas", "Napole\u00e3o Tavera", "Natividade Alcaide", "Nazar\u00e9 Villela", "Nelson In\u00e1cio", "Nelson Lobato", "Nelson Villalobos", "Nestor Lencastre", "Neusa Curado", "Nicanor Lustosa", "Nicolas F\u00e9lix", "Nicolau Granjeia", "Nivaldo Guarabira", "Nivaldo Semedo", "Noel Ba\u00eda", "Noel Carreira", "Noel Negromonte", "Norberto Beserril", "No\u00e9 Maior", "No\u00eamia   Orri\u00e7a", "Nuno Saraiva", "N\u00eddia Lemos", "N\u00eddia Rem\u00edgio", "Of\u00e9lia Quaresma", "Olga Rego", "Ol\u00edvia Lopes", "Ol\u00edvia Mendon\u00e7a", "Ol\u00edvia Val\u00e9rio", "Ol\u00edvio Mainha", "Ondina In\u00e1cio", "Ondina Rivero", "Ordonho Raposo", "Oriana Benavides", "Oscar   Fernandes", "Oscar   Valim", "Osvaldo Parente", "Ot\u00e1vio Sousa", "Ov\u00eddio Bethecourt", "Palmiro Lemes", "Palo Pinheiro", "Pandora Moita", "Parcidio Aires", "Parcidio Botelho", "Parcidio Guedes", "Paula Azevedo", "Paula Cezimbra", "Paula Sacadura", "Paulina Corr\u00eaa", "Paulino Amorim", "Paulino Fernandes", "Paulino Rodrigues", "Paulo Siebra", "Pen\u00e9lope Le\u00f3n", "Pen\u00e9lope Viegas", "Pl\u00e1cido Britto", "Poliana Passos", "Pol\u00edbio Cascaes", "Porf\u00edrio Quintana", "Potira Sequeira", "Querubim Mart\u00ednez", "Querubina Colla\u00e7o", "Quintiliana Quinteiro", "Quintiliano Nolasco", "Quirina Bernardes", "Quirina Le\u00f3n", "Quirina Negreiros", "Quit\u00e9ria Neiva", "Quit\u00e9rio Marinho", "Quit\u00e9rio Miguel", "Qu\u00e9vin Vill\u00e9gas", "Rafael Severo", "Rafaela Maranh\u00e3o", "Rafaela Veleda", "Ramiro Carvalho", "Raquel Concei\u00e7\u00e3o", "Raul Otero", "Regina Barbosa", "Regina Vig\u00e1rio", "Remo Infante", "Remo Morais", "Remo Pequeno", "Remo Sanches", "Renata Lagoa", "Renato Rangel", "Rita Faria", "Roberta Guerreiro", "Roberto Vieyra", "Rodolfo Cambezes", "Rodolfo Montenegro", "Rodolfo Pegado", "Rodrigo Lemos", "Rodrigo Vilaverde", "Rom\u00e3o Neiva", "Rom\u00e3o P\u00e1ez", "Rom\u00e3o Temes", "Ronaldo Peseiro", "Roquita Dam\u00e1sio", "Roquita Guar\u00e1", "Roquita Torcuato", "Rosalina Castel\u00e3o", "Rosalina P\u00eassego", "Rosalinda Bettencourt", "Rosalinda Rabelo", "Rosalinda Veleda", "Rosaura Garcez", "Rosaura Severiano", "Ros\u00e1lia Rosmaninho", "Ros\u00e1lia Siebra", "Rubim Arruda", "Rubim Cola\u00e7o", "Rubim Rijo", "Ruca Magallanes", "Ruca Maior", "Rud\u00e1 Caballero", "Rufus Figueira", "Rui Lameiras", "Rui Velasco", "Rute Torcuato", "R\u00f3mulo Borba", "R\u00f3mulo Canedo", "R\u00f4mulo   Salgueiro", "R\u00faben Torquato", "Sabina Becerra", "Sabina Guaran\u00e1", "Sabrina P\u00f3voas", "Salom\u00e3o Sales", "Salvador Castello Branco", "Salvador Farias", "Salvador Goulart", "Salvador Trinidad", "Salvina Beiriz", "Salvina Milheiro", "Samuel Vig\u00e1rio", "Sancha Gois", "Sancho Beserra", "Sandra \u00c1lvez", "Sandro Barrocas", "Sandro Fidalgo", "Sandro Salvado", "Sara P\u00e1dua", "Sarita Naves", "Sarita Siqueira", "Saul Lameirinhas", "Sebastiana Rem\u00edgio", "Sebasti\u00e3o Maciel", "Sebasti\u00e3o Silveira", "Serafim Amarante", "Serafim Coelho", "Serafina C\u00e2mara", "Severino Brites", "Severino Casalinho", "Severino Correa", "Silvana Faustino", "Silvana Pais", "Silvano Olivares", "Silv\u00e9rio Cotegipe", "Simone Cachoeira", "Sim\u00e3o Miera", "Sim\u00e3o Nolasco", "Sim\u00e3o Paranhos", "Sim\u00e3o Quintela", "Siquenique Castel-Branco", "Siquenique J\u00fadice", "Siquenique Noite", "Socorro Dutra", "Soeiro Barreiro", "Sofia Carmona", "Sofia Ch\u00e1vez", "Sofia Tabalipa", "Solange Cola\u00e7o", "Solano Becerril", "Solano Morgado", "Son\u00e1s Malta", "Son\u00e1s Silveira dos A\u00e7ores", "Soraia T\u00e9llez", "Suni\u00e1rio Felipe", "Suni\u00e1rio Gon\u00e7alves", "Susana Benevides", "Susana Junquera", "S\u00edlvia Cabreira", "S\u00edlvia Cambezes", "S\u00edlvia Casado", "S\u00edlvia Gir\u00e3o", "S\u00edlvio Queiroga", "S\u00edlvio Salazar", "S\u00f4nia ou Sonia   Tigre", "Tain\u00e1 Cavadas", "Tairine Murici", "Talita Calheiros", "Tatiana Lameira", "Telma Infante", "Telma Ramallo", "Teodora Bettencourt", "Tiago Bahia", "Tib\u00farcio Rego", "Tim\u00f3teo Canto", "Tim\u00f3teo Paredes", "Tim\u00f3teo Rodr\u00edguez", "Tobias Salgado", "Tom\u00e1s Francia", "Tom\u00e1sia Bicudo", "Tom\u00e1sia Ulhoa", "Tom\u00e9 Baranda", "Trist\u00e3o Fiestas", "Trist\u00e3o Soares", "T\u00e1lia Borba", "T\u00e1lia Pequeno", "T\u00e2nia Neves", "Ubajara Melo", "Ubaldo Palma", "Ubirajara Sintra", "Udo Gusm\u00e3o", "Udo Nascimento", "Udo Viveiros", "Ulrico Osorio", "Umbelina Horta", "Urbano Rebocho", "Ur\u00e2nia Candal", "Ur\u00e2nia Godoi", "Ur\u00e2nia Vidigal", "Ur\u00e2nia Vieyra", "Valdeci Concei\u00e7\u00e3o", "Valentim Prudente", "Val\u00e9ria Lucena", "Val\u00e9ria Rebou\u00e7as", "Val\u00e9rio Batata", "Val\u00e9rio Madureira", "Val\u00e9rio Zagallo", "Vanderlei Cachoeira", "Vanderlei V\u00e1zquez", "Vanessa Fortunato", "Vanessa Pajares", "Vasco Caiap\u00f3", "Veridiana Figueiredo", "Veridiano Bri\u00f3n", "Ver\u00f3nica Toledo", "Ver\u00f4nica   Fialho", "Ver\u00f4nica   Neiva", "Vicente D\u00edaz", "Violeta Aquino", "Violeta Rua", "Violeta Sotomayor", "Violeta Torres", "Virg\u00edlio Viveiros", "Viriato Grangeia", "Viriato Monjardim", "Viridiana Caldas", "Viviana Aires", "Viviana Camarinho", "Viviana S\u00e1", "Vlademiro Infante", "V\u00edtor ou Victor Bezerra", "Xavier Cortes\u00e3o", "Xavier Mansilha", "Xerxes Coelho", "Xerxes Guerrero", "Xico Carrasco", "Ximena Aguiar", "Ximena Brum", "Ximena Correa", "Ximena Quintanilla", "Ximeno Lampreia", "Ximeno Morales", "Ximeno M\u00e9ndez", "X\u00eania   Paragua\u00e7u", "Zilda Coello", "Zilda Viana", "Zita Falc\u00e3o", "Zoe Braga", "Zoe M\u00e9ndez", "Zoraide Jaguaribe", "Zoraide Pican\u00e7o", "Zubaida Beltr\u00e1n", "Zubaida Castanheira", "Zuleica Mattozo", "Zuleica Pinheiro", "Zuleica V\u00e1zquez", "Zuleide Quintela", "Zulmira Bonilla", "Zulmira Quintella", "Zuriel Meneses", "Zuriel Sampaio", "Z\u00f3zimo Magalh\u00e3es", "Z\u00f3zimo Vasconcellos", "\u00c1lvaro Ba\u00eda", "\u00c1lvaro Neres", "\u00c1lvaro Veiga", "\u00c1tila Nolasco", "\u00c2ngela Guimar\u00e3es", "\u00c9lvio Benavides", "\u00c9lvio Bugallo", "\u00c9lvio Dam\u00e1sio", "\u00c9lvio Grilo", "\u00c9nia Quir\u00f3s", "\u00c9rica Faia", "\u00c9rica Rabello", "\u00cdris Fagundes", "\u00cdris Gouveia", "\u00cdtala Amarante", "\u00cdtala In\u00e1cio", "\u00d3scar Paiac\u00e3", "\u00darsula Pontes"]
    //////console.log(Math.ceil(Math.random()*1000))
    return nomes[Math.ceil(Math.random() * 1000)];
}

function funcionario(nmFunc) {
    this.matricula = nmFunc;
    this.nome = nome();
    this.salario = 10;
    this.contratacao = 50;
    this.esforco = 2000;
    this.situacao = "";

    this.medo = pegaValor(7, 0);
    this.desejo = pegaValor(7, 0);
    this.criacao = pegaValor();//Inclui familia e amigos
    this.Empatia = (pegaValor(7, 0) + this.criacao) * this.desejo;

    this.rosto = tiposRostos();
    this.carteira = 0;
    this.caracteristica = caracteristicas(this.medo, this.desejo, this.criacao);
    this.relacoes = [];
    this.rendimento = this.caracteristica.Motivacao;
    this.recebeSalario = function () {
        if (this.situacao === 'contratado') {
            if (dinheiro - this.salario <= 0) {
                ////console.log(this.nome+' se demitiu!');
                pedirDemicao(this.matricula);
            }
            else {
                //console.log(this.nome + ' recebeu salario');
                this.carteira += retiraFundos(this.salario);
            }
        }
        else {
            ////console.log(this.nome+' esta te roubando! ')
        }


    }.bind(this);

    this.areaproximidade = '';

}

function pegaValor(maximum, minimum) {
    if (typeof maximum === 'undefined') {
        maximum = 7;
    }
    if (typeof minimum === 'undefined') {
        minimum = -7;
    }

    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum

}

function pagaSalarios() {

    for (var i = 0; i < corpo_funcional.length; i++) {
        if (corpo_funcional[i].situacao == 'contratado') {
            corpo_funcional[i].recebeSalario();
        }

    }
}

function pedirDemicao(mat) {
    clearInterval(corpo_funcional[mat].trabalho);
    clearInterval(corpo_funcional[mat].recebeSalario);
    console.log(mat);
    corpo_funcional[mat].situacao = "Demitido";
    for (var i = 0; i <= corpo_funcional[mat].relacoes.length; i++) {

        var aux = corpo_funcional[mat].relacoes[i];
        if (aux) {
            corpo_funcional[aux].medo++;
        }

    }
    removeCard(mat);
    nmFuncionario.value--;
}

function removeCard(FM) {
    cardList['crd' + FM].play(-3);
    document.getElementById('crd' + FM).style.fontSize = '0px';

}

function tarefa(rendimento) {
    rendimento = rendimento / 30;
    adicionaFundos(rendimento);
    ////////console.log(rendimento)
}

function contrataFuncionario() {
    /**
     * TODO O funcionário contratado tem que ser compatível com o salário oferecido;
     *
     *
     *
     * */
    var provacao = new funcionario(funcionario_matricula);
    if (dinheiro - provacao.contratacao <= 0) {
        alert('Melhor Pegar um emprestimo!');
    } else {
        corpo_funcional[funcionario_matricula] = provacao;
        corpo_funcional[funcionario_matricula].situacao = "contratado";
        retiraFundos(corpo_funcional[funcionario_matricula].contratacao);
        posicionaFuncionarios(funcionario_matricula);
        funcionario_matricula++;
        nmFuncionario.value++;
    }


}

function retiraFundos(valor) {
    dinheiro = dinheiro - valor;
    cmDinheiro.value = dinheiro;
    return valor;
}

function adicionaFundos(valor) {
    dinheiro = dinheiro + valor;
    cmDinheiro.value = dinheiro;
}

function tiposRostos() {
    /*var normal = '<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M133.915,145.646H31.967'+
     'c-1.26,0-1.895,0-2.341-0.473c-0.445-0.467-0.41-1.114-0.347-2.288c0.335-6.335,2.178-11.326,5.636-15.342'+
     'c3.042-3.535,7.135-6.397,12.513-8.751c2.371-1.037,4.76-2.031,7.149-3.025c2.017-0.838,4.033-1.678,6.039-2.542'+
     'c2.135-0.92,3.872-2.063,5.306-3.491c0.79-0.786,1.159-1.646,1.195-2.79c0.021-0.714,0.054-1.428,0.086-2.142'+
     'c0.067-1.505,0.136-3.063,0.11-4.587c-0.01-0.581-0.12-0.937-0.392-1.269c-2.381-2.914-4.087-6.414-5.214-10.701'+
     'c-0.182-0.689-0.471-1.131-0.997-1.524c-2.448-1.826-3.34-4.542-3.888-6.958c-0.581-2.553-0.972-5.874,1.172-8.904'+
     'c0.136-0.194,0.11-0.369,0.001-0.818l-0.033-0.136c-1.332-5.628-1.844-10.754-1.567-15.67c0.43-7.638,2.924-13.368,7.627-17.519'+
     'c3.463-3.056,7.856-4.941,13.43-5.766c5.717-0.845,10.01-0.608,14.068,0.717c2.203,0.719,3.99,1.789,5.467,3.271'+
     'c0.377,0.379,0.699,0.577,1.107,0.681c7.014,1.799,11.139,6.522,12.615,14.438c1.295,6.946-0.013,13.732-1.464,19.455'+
     'c-0.235,0.93-0.176,1.5,0.224,2.18c1.657,2.826,1.257,5.795,0.575,8.583c-0.497,2.046-1.489,4.985-4.319,6.854'+
     'c-0.166,0.11-0.217,0.269-0.311,0.662l-0.044,0.181c-1.186,4.599-2.86,8.126-5.27,11.103c-0.193,0.238-0.276,0.505-0.291,0.926'+
     'c-0.068,1.89,0.042,3.822,0.148,5.689c0.039,0.686,0.078,1.372,0.108,2.059c0.039,0.845,0.612,1.474,1.247,2.096'+
     'c2.274,2.233,5.215,3.479,8.059,4.684c1.331,0.564,2.674,1.103,4.017,1.64c3.566,1.428,7.254,2.903,10.674,4.883'+
     'c8.517,4.929,12.939,11.665,13.523,20.591l0.009,0.14c0.115,1.761,0.174,2.645-0.395,3.252'+
     'C136.626,145.646,135.72,145.646,133.915,145.646z"/>';*/


    var mulher1 = '<circle fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="83" cy="72.335" r="32"/>' +
        '<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M83.797,110.998C56.294,110.998,34,109.5,34,145.5' +
        'h99.594C133.594,109.5,111.299,110.998,83.797,110.998z"/>' +
        '<circle fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="72" cy="70.335" r="3.208"/>' +
        '<circle fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="93" cy="70.335" r="3.208"/>' +
        '<ellipse fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="83.583" cy="89.669" rx="5.917" ry="3.333"/>' +
        '<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M62,98.668c0,0-24,0.667-23.333,9.333' +
        's-14.667-84.667,44-82s39.333,70,44,76s-26.667-2-26.667-2"/>';

    var mulher2 = '<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M83.797,110.998C56.294,110.998,34,109.5,34,145.5' +
        'h99.594C133.594,109.5,111.299,110.998,83.797,110.998z"/>' +
        '<circle fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="72" cy="70.336" r="3.208"/>' +
        '<circle fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="93" cy="70.336" r="3.208"/>' +
        '<line fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" x1="71" y1="89.5" x2="95" y2="89.5"/>' +
        '<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M31.723,80.657"/>' +
        '<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M117.226,85.5' +
        'c1.785-3.448,2.776-7.221,2.776-11.178c0-16.302-16.7-29.518-37.3-29.518c-20.6,0-37.3,13.216-37.3,29.518' +
        'c0,0.746,0.035,1.486,0.104,2.219c0.185,1.962,0.611,3.871,1.256,5.707c0.347,0.988,0.757,1.955,1.227,2.897' +
        'c0.401,0.805,0.858,1.586,1.344,2.354 M59.5,97.427c6.369,4.011,14.429,6.413,23.201,6.413c11.047,0,20.969-3.804,27.799-9.843' +
        'M86.465,55.791l-8.05,9.303L75.91,54.717l-4.651,5.725l-6.798-5.009l-6.083,11.092l-7.514-7.514l7.514,7.514l6.083-11.092' +
        'l6.798,5.009l4.651-5.725l2.505,10.376L86.465,55.791l14.848,7.335l12.702-4.294l-12.702,4.294L86.465,55.791z"/>' +
        '<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M49.332,87.5H39.5v17h20v-7.073' +
        'C55.26,94.757,51.778,91.371,49.332,87.5z"/>' +
        '<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M49.332,87.5' +
        'c2.446,3.871,5.928,7.257,10.168,9.927"/>' +
        '<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M117.226,85.5' +
        'c-1.625,3.14-3.911,6.009-6.726,8.498V104.5h20v-19H117.226z"/>' +
        '<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M110.5,93.998' +
        'c2.814-2.489,5.101-5.358,6.726-8.498"/>';


    var cara2 = '<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M83.797,110.998C56.294,110.998,34,109.5,34,145.5' +
        'h99.595C133.594,109.5,111.299,110.998,83.797,110.998z"/>' +
        '<circle fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="72" cy="70.336" r="3.208"/>' +
        '<circle fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="93" cy="70.336" r="3.208"/>' +
        '<line fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" x1="71" y1="89.5" x2="95" y2="89.5"/>' +
        '<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M42.25,42.125l3.255,30.416L61.335,56.71H99.25' +
        'l19.895,17.895L99.25,56.71H61.335L45.505,72.541c0.01,0.101,0.645,7.965,1.257,9.707c0.347,0.988,0.757,1.955,1.227,2.897' +
        'c1.123,2.254,2.587,4.373,4.342,6.316c6.766,7.493,17.848,12.378,30.371,12.378c20.602,0,37.3-18.216,37.3-34.518l3.749-28.196' +
        'L42.25,42.125z"/>';


    var cara1 = '<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M83.797,110.998C56.294,110.998,34,109.5,34,145.5' +
        'h99.594C133.594,109.5,111.299,110.998,83.797,110.998z"/>' +
        '<circle fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="72" cy="70.336" r="3.208"/>' +
        '<circle fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="93" cy="70.336" r="3.208"/>' +
        '<line fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" x1="71" y1="89.5" x2="95" y2="89.5"/>' +
        '<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M102.136,50.304l7.334-16.501l-24.447,6.111' +
        'l-3.667-6.723l-12.834,8.556l-8.557-10.39l-3.667,9.167l-27.503-4.889L53,65c0,17.674,12.327,39.335,30,39.335S110,82.674,110,65' +
        'l-8.793,1.705l-3.993-5.034l-10.243-2.604l-6.597,3.646l-0.868-4.514l-6.944,4.34L64.75,59.24l-11.11,6.076l11.11-6.076' +
        'l7.813,3.298l6.944-4.34l0.868,4.514l6.597-3.646l10.243,2.604l3.993,5.034L110,65l17.083-0.426l4.889-11.001L102.136,50.304z"/>';

    var rostos = [mulher1, cara1, mulher2, cara2];


    return rostos[Math.floor(Math.random() * (3 - 0 + 1)) + 0];


}

function posicionaFuncionarios(FM, temp) {
    var temporario = temp || false;
    var newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.id = "crd" + FM;
    var crtSVG = '<svg id="crd-svg' + FM + '" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 481 292" enable-background="new 0 0 481 292" xml:space="preserve">' +
        '    <path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M479.5,278.5c0,6.627-5.373,12-12,12h-454'
        + 'c-6.627,0-12-5.373-12-12v-265c0-6.627,5.373-12,12-12h454c6.627,0,12,5.373,12,12V278.5z"/>' +
        '<path fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" d="M146.5,134.5c0,6.627-5.373,12-12,12h-102' +
        'c-6.627,0-12-5.373-12-12v-102c0-6.627,5.373-12,12-12h102c6.627,0,12,5.373,12,12V134.5z"/>' +
        '<g>' + corpo_funcional[FM].rosto + '</g>' +
        '<text transform="matrix(1 0 0 1 163.0117 48.0498)">' + corpo_funcional[FM].nome + '</text>' +
        '<text class="crd-matricula" transform="matrix(1 0 0 1 20.5 260.6758)">Matricula: ' + corpo_funcional[FM].matricula + '</text>' +
        '<text class="crd-matricula" transform="matrix(1 0 0 1 203.0117 260.6758)">Rendimento:</text>' +
        '<text id="rdm' + FM + '" class="crd-matricula" transform="matrix(1 0 0 1 380 258.501)">' + corpo_funcional[FM].rendimento + '</text>' +
        '</svg>';
    newCard.innerHTML = crtSVG;


    if (temporario == false) {
        newCard.innerHTML = crtSVG + '<div class="hitest" id="sqr' + FM + '"></div>';
        card_holder.appendChild(newCard);

        document.getElementById('crd' + FM).addEventListener('click', function () {
            abreControleFuncionario(FM);
        })
        sqrs[FM] = document.getElementById('sqr' + FM);
        corpo_funcional[FM].areaproximidade = sqrs[FM];
        corpo_funcional[FM].elementoRDM = document.getElementById('rdm' + FM);
    }
    cardList['crd' + FM] = new Vivus("crd-svg" + FM, {type: 'delayed', duration: 100}, function () {
        if (corpo_funcional[FM].situacao == 'Demitido') {
            var tempCard = document.getElementById('crd' + FM);
            card_holder.removeChild(tempCard);
        }
    }.bind(FM));

    if (temporario == true) {
        newCard.id = 'cartaoTemp';
    }
    return newCard;

}

function abreControleFuncionario(FM) {
    menu.classList.add('aberto');
    cardAberto[0] = posicionaFuncionarios(FM, true);
    cardAberto['FM'] = FM;
    ////console.log(cardAberto[0]);
    areaCartaoMenu.appendChild(cardAberto[0]);


}

function calcularRendimento(func) {
    var resultado = Math.floor(((func.caracteristica.FelicidadeTristeza + (func.relacoes.length - func.caracteristica.DepressaoAnsiedade) * func.caracteristica.Motivacao)));
    return resultado
}

function caracteristicas(medo, desejo, criacao) {
    var carc = new Object()
    carc.Paz = pegaValor() + criacao;//inclui tranquilidade
    carc.EuforiaErotismo = pegaValor() * desejo;//inclui auto estima
    carc.AmorOdio = (pegaValor() + desejo) - medo;
    carc.InvejaAutruismo = (pegaValor()) + criacao;
    carc.NervosismoTranquilidade = (pegaValor() + medo) + desejo;
    carc.Motivacao = (pegaValor() + desejo) - medo;
    carc.DepressaoAnsiedade = pegaValor();//distração
    carc.FelicidadeTristeza = (criacao + carc.Paz) / carc.Depressao;


    return carc
}

function fecharMenu() {
    menu.classList.remove('aberto');
    areaCartaoMenu.removeChild(document.getElementById('cartaoTemp'));
}

function verProximidade(ele1, ele2) {
    var a = ele1.areaproximidade.getBoundingClientRect();
    var b = ele2.areaproximidade.getBoundingClientRect();
    if (((a.left <= b.left) && (b.left <= a.right)) && ((a.top <= b.top) && (b.top <= a.bottom))) {
        return true
    } else {
        if (((a.left <= b.right) && (b.right <= a.right)) && ((a.top <= b.top) && (b.top <= a.bottom))) {
            return true
        }
        else {
            if (((a.left <= b.left) && (b.left <= a.right)) && ((a.top <= b.bottom) && (b.bottom <= a.bottom))) {
                return true
            } else {
                if (((a.left <= b.right) && (b.right <= a.right)) && ((a.top <= b.bottom) && (b.bottom <= a.bottom))) {
                    return true
                }
            }

        }
    }

    return false;
}

function trabalhar() {

    for (var i = 0; i < corpo_funcional.length; i++) {
        if (corpo_funcional[i].situacao == 'contratado') {
            console.log('trabalhou');
            tarefa(corpo_funcional[i].rendimento);
        }
    }

}

function montaVizinhos() {
    for (var i = 0; i < corpo_funcional.length; i++) {
        for (var j = 0; j < corpo_funcional.length; j++) {
            if (verProximidade(corpo_funcional[i], corpo_funcional[j])) {
                if (checaVizinho(j, corpo_funcional[i].relacoes) == false && corpo_funcional[i].matricula != j) {
                    corpo_funcional[i].relacoes.push(j);
                }
            }
        }
    }
}

function influenciaRelacoes() {

    recalculaRendimentos();

}

function recalculaRendimentos() {
    //console.log('===rendimento===');
    for (var i = 0; i < corpo_funcional.length; i++) {
        //console.log('-Verificando rendimento');
        for (var j = 0; j <= corpo_funcional[i].relacoes.length; j++) {
            if (corpo_funcional[corpo_funcional[i].relacoes[j]]) {
                //console.log(corpo_funcional[corpo_funcional[i].relacoes[j]]);
                //console.log('--Verificando relação');
                if (corpo_funcional[i].situacao == "contratado" && corpo_funcional[corpo_funcional[i].relacoes[j]].situacao == 'contratado') {
                    //console.log('---Relação Encontrada');
                    if (corpo_funcional[i].Empatia < corpo_funcional[corpo_funcional[i].relacoes[j]].Empatia) {
                        console.log('---Relação A>B');
                        if (corpo_funcional[i].rendimento <= corpo_funcional[corpo_funcional[i].relacoes[j]].rendimento) {
                            console.log('---- A->B');
                            corpo_funcional[i].rendimento++;
                        } else {
                            console.log('---- B->A');
                            corpo_funcional[i].rendimento--;
                        }

                    }
                    if (corpo_funcional[i].Empatia > corpo_funcional[corpo_funcional[i].relacoes[j]].Empatia) {
                        if (corpo_funcional[i].rendimento <= corpo_funcional[corpo_funcional[i].relacoes[j]].rendimento) {
                            corpo_funcional[corpo_funcional[i].relacoes[j]].rendimento--;
                            console.log('---- A->B');
                        } else {
                            console.log('---- B->A');
                            corpo_funcional[corpo_funcional[i].relacoes[j]].rendimento++;
                        }

                    }

                }
            }
            ;

        }
    }
    atualizaRendimento();
}

function calibraAmbiente() {
    for (var i = 0; i < corpo_funcional.length; i++) {

    }
}

function loop() {
    trabalhar();
    montaVizinhos();
    influenciaRelacoes();
    atualizaUi()

}
var auxui = 0;
function atualizaUi() {

    myLineChart.update();
    myLineChart.addData([dinheiro], ' ');
    if (auxui % 2 == 0) {
        myLineChart.removeData();
    }

    auxui++;

}

//setInterval(function(){myLineChart.removeData()},'2500');

function checaVizinho(value, array) {
    return array.indexOf(value) > -1;
}

function atualizaRendimento() {
    for (var i = 0; i < corpo_funcional.length; i++) {
        if (corpo_funcional[i].situacao == "contratado") {
            corpo_funcional[i].elementoRDM.textContent = corpo_funcional[i].rendimento;
        }
    }
}

function bonificarFuncionario(FM) {
    corpo_funcional[FM].carteira = valorBonificacao;
    corpo_funcional[FM].rendimento = corpo_funcional[FM].rendimento + retiraFundos(10);//valor pra teste
    ;
}


var gameloop = setInterval(loop, 2000);
var diaPagamento = setInterval(pagaSalarios, 30000);
btContrataFuncionario.addEventListener('click', contrataFuncionario);
modal.addEventListener('click', function (e) {
    e.preventDefault();
    fecharMenu();
    return false
});

btDemitir.addEventListener('click', function (e) {
    pedirDemicao(cardAberto['FM']);
    fecharMenu();
});
btBonificar.addEventListener('click', function () {
    bonificarFuncionario(cardAberto['FM']);
    fecharMenu();
})
//vivus
// Dynamic load


var ctx = document.getElementById("myChart").getContext("2d");
var options = {

    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: true,

    //String - Colour of the grid lines
    scaleGridLineColor: "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth: 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points
    bezierCurve: true,

    //Number - Tension of the bezier curve between points
    bezierCurveTension: 0.4,

    //Boolean - Whether to show a dot for each point
    pointDot: true,

    //Number - Radius of each point dot in pixels
    pointDotRadius: 4,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: 20,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke: true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill: true,

    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};
var data = {
    labels: ["Tempo"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [0, 100, 500, 1000]
        }
    ]
};
var myLineChart = new Chart(ctx).Line(data, options);