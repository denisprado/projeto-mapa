var appViewModel;

// array of locations in Hong Kong
var locations = [{
    title: "Rua Abolição",
    location: {
      lat: -22.9186944,
      lng: -47.0529595,
    },
    description: "<p>Atravessando os bairros Ponte Preta e Swift, a Rua Abolição é uma das vias mais extensas da cidade. Com cerca de 4 mil metros de comprimento, a via é constituída, basicamente, por estabelecimentos comerciais. Além de extensa, apresenta, também, um alto fluxo diário de veículos, chegando a, aproximadamente, 16 mil em horários de pico. Já em relação às linhas do Sistema InterCamp, 15 delas passam pela Abolição.</p><p>Números à parte, a sua denominação é um dos seus diferenciais. Junto com a Rua 13 de Maio, a Abolição é dedicada aos negros, mais especificamente, ao fim da escravidão no Brasil.</p><p>Denominada Rua Abolição em 1923, a via era conhecida antes como Rua da Ponte Preta, em referência à ponte instalada nas proximidades.</p>"
  },
  {
    title: "Largo Santa Cruz",
    location: {
      lat: -22.9068312,
      lng: -47.0618398
    },
    description: "Vindos para Campinas, contratados pelos fazendeiros, os escravos inicialmente permaneciam de quarentena no Largo Santa Cruz para depois serem comercializados nas chamadas “Casas de Comissão”, nas praças públicas. (...) Um ofício de Campinas, datado de 29 de dezembro de 1879, comunica o suicídio de quatro escravos por causa da crueldade de seus senhores. No entanto, era muito raro também o assassinato de senhores. Acusado de matar o seu senhor, o capitão Luis José de Oliveira, dono do engenho Romão, o escravo Elesbão foi condenado à forca no dia 9 de dezembro de 1835. A morte ocorreu no Largo Santa Cruz, que ficou conhecido como Largo da Forca. Dois outros crimes ocorreram redundando no assassinato de feitores e fazendeiros. Os assassinos foram condenados à pena de galés perpétuas ou por número de anos. Muitas vezes os juízes comutavam a pena pela de açoites."
  },
  {
    title: "Fazenda Roseira",
    location: {
      lat: -22.8212945,
      lng: -47.084158
    },
    description: "<p>(...) uma outra fazenda de Campinas, também mantida por trabalho escravo durante o século XIX, realiza desde 2007 uma simbólica ressignificação do espaço. A Casa de Cultura - Fazenda Roseira, hoje é ocupada pela Comunidade Jongo Dito Ribeiro, Patrimônio Cultural Imaterial, que realiza uma série de atividades culturais e educativas. A Fazenda se tornou um equipamento público comunitário da Prefeitura Municipal de Campinas, que em 2015 formalizou a permissão do uso do espaço pela comunidade.</p><p>Para a historiadora, urbanista, e coordenadora da Casa de Cultura, Alessandra Ribeiro, a importância do espaço está justamente na valorização da cultura afro-brasileira. 'Nossa missão não é apagar uma memória dos escravizados, mas sim reconhecer que foram inclusive os nossos ancestrais, que foram roubados e escravizados, que construíram essa Casa Grande, com técnicas e tecnologia africana. Queremos valorizar esses saberes para além da escravidão. Sentimos que o Brasil, em seu racismo assoberbado, ainda desconhece muito as contribuições africanas', apontou. A historiadora critica a existência de fazenda e hotéis fazenda que ainda fazem apologia à escravidão. 'Acho lamentável que ainda não tenham conseguido se descolonizar para fazer daquele repertório arquitetônico uma possibilidade de transformação social. Que ainda fazem uma apologia sem debaterem o débito da atrocidade que fizeram com seres humanos."
  },
  {
    title: "Estatua a Mãe Preta",
    location: {
      lat: -22.9070718,
      lng: -47.0557123
    },
    description: "Campinas vai ter o seu monumento em homenagem à Mãe Preta, aquela que, por não distinguir cot de pele, manifestou todo o seu amor, amamentando com um mesmo carinho a rico ou pobre, a preto ou branco, sendo que muitos deles, hoje, são homens ilustres e de bem na sociedade brasileira. O monumento que deverá ser instalado no Largo São Benedito, defronte à igreja, será uma réplica do existente no Largo Paissandu, em São Paulo, já tràdicional pelas romarias que o visitam, além de ser considerado um santuário onde se devota o respeito a toda boa Mãe Preta. Segundo o artista plástico Renato Ferreira Corte Real, que vem supervisionando os trabalhos, 'a obra que é uma determinação do prefeito José Nassif Mokarzel para homenagear a todas as Mães Pretas do Brasil, deverá estar concluída dentro de aproximadamente 4 meses'. Acrescentou que a fase mais difícil já está superada, que é a moldagem, exatamente onde se requer técnica aprimorada, experiência e domínio completo da arte. Concluído, o monumento mostrará uma Mãe Preta, majestosa e orgulhosa amamentando um robusto bebê, onde o detalhe importante é a sua cor em ouro, simbolizando uma criança branca ou preta. A arte é de Júlio Guerra, escultor consagrado nos meios artísticos nacionais, responsável por monumentos e· obras consideradas das mais expressivas. Amigo e companheiro de Brecherett - escultor de inúmeros trabalhos como o que se homenageia `As Bandeiras`, em São Paulo, Júlio Guerra, por si só já é uma certeza que Campinas terá mais uma obra de arte em suas praças, pois ele é autor de, entre outras peças, do famoso Monumento a Borba Gato que se encontra em Santo Amaro. Antonio Di Giorno, não menos famoso, é o responsável pela fundição da obra. Trata-se da execução de um trabalho puramente artesanal, cuja atividade se encontra em extinsão, no Brasil, tal a dificuldade e a maneira de ensinamentos dessa difícil arte, transmitido de pai para filho. Atualmente, Di Giorno é responsável pelas atividades da Fundi-Arte, em São Paulo."
  },
  {
    title: "Fazenda Santa Genebra",
    location: {
      lat: -22.828508,
      lng: -47.095002
    },
    description: "Uma das histórias mais conhecidas do distrito de Barão Geraldo e uma das mais faladas de Campinas é a Lenda do Boi Falô, que teria acontecido justamente na Fazenda Santa Genebra. Na Sexta-Feira Santa de 1888, um escravo teve que atrelar um boi para este fazer o transporte de cereais, porém, o rapaz era religioso, e em dia santo, segundo as tradições católicas, não se trabalha. Por sua vez, o capataz passou a usar violentamente sua chibata, punindo as costas do escravo para fazê-lo trabalhar. Ao ver a cena, o boi teria mugido de maneira ensurdecedora e dito: 'Hoje não é dia de trabalhar, é dia do Senhor!'. Logo em seguida, o capataz teria saído gritando: 'O boi falô! O boi falô!'. (...) Um relato interessante, ainda a respeito do assunto, é o de Amélia de Rezende Martins, filha do Barão Geraldo de Rezende, proprietário da fazenda Santa Genebra, quando um escravo era solto, havia comemorações festivas: 'No aniversário dos filhos pequeninos, e em alguma solenidade de maior vulto, meu pai ia dando, aos escravos de maior valor, a carta de alforria, sempre amarradinha com uma fita azul. Era uma festa... Basta dizer que no 13 de maio o Barão não tinha nenhum'"
  }
];

// create a map variable that will be used in initMap()
var map;

// create array for listing markers in map
var markers = [];

// initialize map
function initMap() {

  //inicia o google maps
  var myLatLng = locations[0].location;
  map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 21
  });

  // cria as janelas de informação
  var infoWindow = new google.maps.InfoWindow();
  var bounds = new google.maps.LatLngBounds();

  // adiciona os marcadores para cada localização em locations
  for (var j = 0; j < locations.length; j++) {
    (function () {

      var title = locations[j].title;
      var location = locations[j].location;
      var description = locations[j].description;

      // amplia os limites para as coordenadas de cada marcador
      bounds.extend(locations[j].location);

      // cria os marcadores 
      var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: title,
        animation: google.maps.Animation.DROP,
        address: address
      });

      // coloca cada localização na array de marcadores
      markers.push(marker);

      // encaixa o mapa nas coordenadas limitrofes das localizações
      map.fitBounds(bounds);
      appViewModel.initialLocations()[j].marker = marker;

      // adiciona um listener para clicks nos marcadores abrirem os infowindows
      marker.addListener("click", function () {
        populateInfoWindow(this, infoWindow);
        infoWindow.setContent(contentString);
      });

      // Insere as informações do local na janela
      function populateInfoWindow(marker, infoWindow) {
        // Verifica se a janela já não está aberta neste marcador
        if (infoWindow.marker != marker) {
          infoWindow.marker = marker;
          // Define o conteúdo da janela
          infoWindow.setContent(
            marker.title +
            marker.contentString
          );
          // animação para quando clicamos no item da localização no menu
          marker.setAnimation(google.maps.Animation.BOUNCE);
          setTimeout(function () {
            marker.setAnimation(null);
          }, 500);
          // Abre a janela quando o item for clicado no menu
          infoWindow.open(map, marker);
          // fecha a janela e retira o conteúdo definido anteriormente;
          infoWindow.addListener("closeclick", function () {
            infoWindow.setMarker = null;
          });
        }
      }

      // Foursquare

      // chaves e clientes do FoursQuare
      var client_id = "5SQGJOK32WX23RO3OPX5KPN4TY4GPUMB1LYKQXDC2YSI5NLN";
      var client_secret = "QIQODYY2P4CC24EPNP3GWVRZD11X5H2WUC1VMFRPYWSCEBOA";
      var foursquareUrl = "https://api.foursquare.com/v2/venues/search"; // + marker.position.lat() + "," + marker.position.lng();
      var venue, address, category, foursquareId, contentString;

      // requisição assíncrona para o Foursquare
      $.ajax({
        //	type: 'GET',
        url: foursquareUrl,
        dataType: "json",
        data: {
          client_id: client_id,
          client_secret: client_secret,
          query: marker.title,
          near: "Campinas",
          v: 20181022
        },
        success: function (data) {
          venue = data.response.venues[0];
          address = venue.location.formattedAddress[0];
          category = venue.categories[0].name;
          foursquareId = "https://foursquare.com/v/" + venue.id;
          contentString =
            "<div class='container'><h3>" + title +
            " <small class='badge badge-info'>" + category + "</small>" + "</h3>" +
            "<div class='row'>" +
            "<div class='col-12'><p>" + description +
            "</p></div>" +
            "</div>" +
            "<p class='lead'>" + "Endereço: <mark>" + address + "</mark></p>" +
            "<a role='button' class='btn btn-outline-primary btn-sm' href='" +
            foursquareId + "'> " +
            "Veja este lugar no FourSquare" +
            "</a></div>  ";
        },
        error: function () {
          contentString =
            "<div class='alert alert-danger'>Não há informações disponíveis no Foursquare para esta localização.</div>";
        }
      });
    })(j);
  }
}

function mapError() {
  alert("Map could not be loaded at this moment. Please try again");
}

// Início da organização por KNOCKOUT

// Modelo para Location
var Location = function (data) {
  this.title = data.title;
  this.location = data.location;
  this.description = data.description;

  this.display = ko.observable(true);
};

// View model knockout 
var AppViewModel = function () {
  var self = this;

  this.initialLocations = ko.observableArray();

  // Filtro
  this.filteredInput = ko.observable("");

  // Exibe o marcador quando clicado
  this.showLocation = function (locations) {
    google.maps.event.trigger(locations.marker, "click");
  };

  // adiciona cada um dos marcadores  
  for (var i = 0; i < locations.length; i++) {
    var place = new Location(locations[i]);
    self.initialLocations.push(place);
  }


  this.search = ko.computed(function () {

    var textToFilter = self.filteredInput().toLowerCase();

    for (var y = 0; y < self.initialLocations().length; y++) {
      if (self.initialLocations()[y].title.toLowerCase().indexOf(textToFilter) > -1) { // a função indexOf verifica se o que é digitado na caixa de texto é encontrado na array de localizações
        self.initialLocations()[y].display(true); // mostra os itens no menu caso a localização seja encontrada
        if (self.initialLocations()[y].marker) {
          self.initialLocations()[y].marker.setVisible(true); // mostra os marcadores caso a localização seja encontrada
        }
      } else { // esconde itens e amrcadores que não sejam encontrados no filtro
        self.initialLocations()[y].display(false);
        if (self.initialLocations()[y].marker) {
          self.initialLocations()[y].marker.setVisible(false);
        }
      }
    }
  });

};

// Ativa e ViewModem do Knockout
appViewModel = new AppViewModel();
ko.applyBindings(appViewModel);