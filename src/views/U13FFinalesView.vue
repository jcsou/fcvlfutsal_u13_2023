<template>
    <v-container id="SenFPhaseFinale" fluid tag="section">
    <v-row>
      <v-col class="col-md-8">
        <!-- {{ categorie }} Match Classement -->
        <base-material-card color="primary" class="px-0">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">{{ categorie }} - 1er Match Classement</div>
          </template>
          <v-card-text class="px-0" >
            <v-data-table :headers="headersMatch" :items="lesmatchsNiv1" hide-default-footer class="px-0" mobile-breakpoint="350">
              <template v-slot:[`item.id`]="{ item }">
                <h6 class="display-1 mb-1 black--text">{{ item.id}}</h6>
                <h6 class="display-1 mb-1 grey--text">{{ item.salle}}</h6>
                <h6 class="display-1 mb-1 grey--text">{{ item.heureDebut}}</h6>
              </template>
                <template v-slot:[`item.nom`]="{ item }">
                <h6 class="display-1 mb-1 black--text">{{ item.nom}}</h6>
                <h6 class="display-1 mb-1 grey--text">{{ item.code}}</h6>
              </template>
              <template v-slot:[`item.displayDom.fanion`]="{ item }">
                    <v-avatar>
                      <v-img v-bind:src="'img/fanion/'+item.displayDom.fanion" :alt="item.displayDom.nomCourt" max-height="25" max-width="25"/>
                    </v-avatar>
                    <h6 class="display-1 mb-1 grey--text">{{ item.displayDom.nomCourt }}</h6>
              </template>
              <template v-slot:[`item.score`]="{ item }">
                <v-chip color="grey" ><h6 class="display-1 mb-1 font-weight-bold">{{ item.score }}</h6></v-chip>
              </template>
              <template v-slot:[`item.displayExt.fanion`]="{ item }">
                    <v-avatar>
                      <v-img v-bind:src="'img/fanion/'+item.displayExt.fanion" :alt="item.displayExt.nomCourt" max-height="25" max-width="25"/>
                    </v-avatar>
                    <h6 class="display-1 mb-1 grey--text">{{ item.displayExt.nomCourt }}</h6>
              </template>
            </v-data-table>
          </v-card-text>
        </base-material-card>

        <!-- {{ categorie }} - 2ieme Match Classement -->
        <base-material-card color="primary" class="px-0">
            <template v-slot:heading>
                <div class="display-2 font-weight-light">{{ categorie }} - 2ieme Match Classement</div>
            </template>
            <v-card-text class="px-0" >
                <v-data-table :headers="headersMatch" :items="lesmatchsNiv2" hide-default-footer class="px-0" mobile-breakpoint="350">
                    <template v-slot:[`item.id`]="{ item }">
                        <h6 class="display-1 mb-1 black--text">{{ item.id}}</h6>
                        <h6 class="display-1 mb-1 grey--text">{{ item.salle}}</h6>
                        <h6 class="display-1 mb-1 grey--text">{{ item.heureDebut}}</h6>
                    </template>
                    <template v-slot:[`item.nom`]="{ item }">
                        <h6 class="display-1 mb-1 black--text">{{ item.nom}}</h6>
                        <h6 class="display-1 mb-1 grey--text">{{ item.code}}</h6>
                    </template>
                    <template v-slot:[`item.displayDom.fanion`]="{ item }">
                        <v-avatar>
                            <v-img v-bind:src="'img/fanion/'+item.displayDom.fanion" :alt="item.displayDom.nomCourt" max-height="25" max-width="25"/>
                        </v-avatar>
                        <h6 class="display-1 mb-1 grey--text">{{ item.displayDom.nomCourt }}</h6>
                    </template>
                    <template v-slot:[`item.score`]="{ item }">
                        <v-chip color="grey" ><h6 class="display-1 mb-1 font-weight-bold">{{ item.score }}</h6></v-chip>
                    </template>
                    <template v-slot:[`item.displayExt.fanion`]="{ item }">
                        <v-avatar>
                        <v-img v-bind:src="'img/fanion/'+item.displayExt.fanion" :alt="item.displayExt.nomCourt" max-height="25" max-width="25"/>
                        </v-avatar>
                        <h6 class="display-1 mb-1 grey--text">{{ item.displayExt.nomCourt }}</h6>
                    </template>
                </v-data-table>
            </v-card-text>
        </base-material-card>

      </v-col>
      <v-col class="col-md-4">
        <base-material-card color="primary" class="px-0"  >
          <template v-slot:heading>
              <div class="display-2 font-weight-light">{{ categorie }} - Classement Final</div>
          </template>
          <v-card-text class="px-0" >
              <v-data-table :headers="headersClassement" :items="leclassement" hide-default-footer class="px-0" mobile-breakpoint="350">
                  <template v-slot:[`item.displayEqui.nom`]="{ item }">
                      <v-chip class="ma-2" label>
                          <v-avatar left>
                              <v-img v-bind:src="'img/fanion/'+item.displayEqui.fanion" :alt="item.displayEqui.nomCourt"/>
                          </v-avatar>
                          <h6 class="display-1 mb-1 ">{{ item.displayEqui.nom }}</h6>
                      </v-chip>
                  </template>
              </v-data-table>
          </v-card-text>
        </base-material-card>

        <v-card max-width="400" class="mx-auto">
            <v-img class="mx-auto" max-height="200px" max-width="200px" src="img/pub/finales.png" alt="annonceur"/>
            <v-card-title>Annonceurs</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
    data() {
      return {
        categorie: "U13F",
        urlFinales: process.env.BASE_URL + "datas/U13F_finales.json",
        urlEquipe: process.env.BASE_URL + "datas/info_tournoi.json",
        lesmatchsNiv1: [],
        lesmatchsNiv2: [],
        leclassement: [],
        lesequipeskey: {},
        headersMatch: [
          {
            sortable: false,
            text: 'Salle/Heure',
            value: 'id',
            align: 'center',
            class: 'px-1',
            cellClass: 'px-1',
          },
          {
            sortable: false,
            text: 'Match',
            value: 'nom',
            align: 'center',
            class: 'px-1',
            cellClass: 'px-1',
          },
          {
            sortable: false,
            text: 'Equipe Domicile',
            value: 'displayDom.fanion',
            align: 'center',
            class: 'px-1',
            cellClass: 'px-1',
          },
          {
            sortable: false,
            text: 'Score',
            value: 'score',
            align: 'center',
            class: 'font-weight-bold px-0',
            cellClass: 'px-1',
          },
          {
            sortable: false,
            text: 'Equipe Exterieur',
            value: 'displayExt.fanion',
            align: 'center',
            class: 'px-1',
            cellClass: 'px-1',
          },
        ],
        headersClassement: [
          {
            sortable: false,
            text: 'Rang',
            value: 'rang',
            align: 'center',
            class: 'px-1',
            cellClass: 'px-1',
          },
          {
            sortable: false,
            text: 'Equipe',
            align: 'center',
            value: 'displayEqui.nom',
            class: 'px-1',
            cellClass: 'px-1 text-start',
            mobile: 'false',
          },
        ],
      };
    },
    created() {
      this.loadDataOds();
    },
    methods: {
        update(){
            this.loadDataOds();
        },
        loadDataOds() {
            var urlEquipe = this.urlEquipe;
            axios
                  .get(urlEquipe)
                  .then(response => {
                    var equipes = response.data.lesequipes
                    for (var n in equipes) {
                        this.lesequipeskey[equipes[n].id] = equipes[n]
                    }
                    //console.log(this.lesequipeskey)
                  }).catch(error => {
                     console.log(error)
                  });

            var urlFinales = this.urlFinales;
            axios
                .get(urlFinales)
                .then(response => {
                  this.lesmatchsNiv1 = response.data.lesmatchs.filter(function (entry){return entry.niveau==='1';})
                  this.lesmatchsNiv2 = response.data.lesmatchs.filter(function (entry){return entry.niveau==='2';})
                  this.leclassement = response.data.leclassement

                  var blancEquipe = {"categorie_id": "","id": "","nom": "","nomCourt": "","fanion": "px.png"}

                  for (var z in this.leclassement ) {
                    if (this.leclassement[z].equipe)
                        this.leclassement[z].displayEqui = this.lesequipeskey[this.leclassement[z].equipe]
                    else {
                        this.leclassement[z].displayEqui =  blancEquipe
                    }
                  }

                  for (var n in this.lesmatchsNiv1 ) {
                    this.lesmatchsNiv1[n].score = this.lesmatchsNiv1[n].equipeDom.but+" - "+this.lesmatchsNiv1[n].equipeExt.but
                    if (this.lesmatchsNiv1[n].equipeDom.id)
                        this.lesmatchsNiv1[n].displayDom = this.lesequipeskey[this.lesmatchsNiv1[n].equipeDom.id]
                    else {
                        this.lesmatchsNiv1[n].displayDom =  blancEquipe
                    }
                    if (this.lesmatchsNiv1[n].equipeExt.id)
                        this.lesmatchsNiv1[n].displayExt = this.lesequipeskey[this.lesmatchsNiv1[n].equipeExt.id]
                    else {
                        this.lesmatchsNiv1[n].displayExt =  blancEquipe
                    }
                  }

                  for (var x in this.lesmatchsNiv2 ) {
                    this.lesmatchsNiv2[x].score = this.lesmatchsNiv2[x].equipeDom.but+" - "+this.lesmatchsNiv2[x].equipeExt.but
                    if (this.lesmatchsNiv2[x].equipeDom.id)
                        this.lesmatchsNiv2[x].displayDom = this.lesequipeskey[this.lesmatchsNiv2[x].equipeDom.id]
                    else {
                        this.lesmatchsNiv2[x].displayDom =  blancEquipe
                    }
                    if (this.lesmatchsNiv2[x].equipeExt.id)
                        this.lesmatchsNiv2[x].displayExt = this.lesequipeskey[this.lesmatchsNiv2[x].equipeExt.id]
                    else {
                        this.lesmatchsNiv2[x].displayExt =  blancEquipe
                    }
                  }

                  // console.log(this.lesmatchsNiv1)
                }).catch(error => {
                   console.log(error)
                })
          },
    },
};
</script>

