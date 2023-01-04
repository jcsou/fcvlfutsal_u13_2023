<template>
      <v-card class="mx-auto">
        <v-tabs color="primary accent-4" left>
          <v-tab >{{ categorie }} Poule A</v-tab>
          <v-tab >{{ categorie }} Poule B</v-tab>
            <v-chip class="ma-2" label @click.stop="update()">
                <v-icon>mdi-reload</v-icon>Reload
            </v-chip>

          <v-tab-item>
            <v-container id="pouleA-match" fluid tag="section">
            <v-row>
              <v-col>
                <base-material-card color="colorPA" class="px-0"  >
                  <template v-slot:heading>
                  <div class="display-2 font-weight-light">{{ categorie }} - PouleA - Matchs</div>
                  </template>
                  <v-card-text class="px-0" >
                    <v-data-table :headers="headersMatch" :items="lesmatchsA" hide-default-footer class="px-0" mobile-breakpoint="350">
                      <template v-slot:[`item.id`]="{ item }">
                        <h6 class="display-1 mb-1 black--text">{{ item.id}}</h6>
                        <h6 class="display-1 mb-1 grey--text">{{ item.salle}}</h6>
                        <h6 class="display-1 mb-1 grey--text">{{ item.heureDebut}}</h6>
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
              <v-col>
                <base-material-card color="colorPA" class="px-0"  >
                  <template v-slot:heading>
                      <div class="display-2 font-weight-light">{{ categorie }} - PouleA - Classement</div>
                  </template>
                  <v-card-text class="px-0" >
                      <v-data-table :headers="headersClassement" :items="leclassementA" hide-default-footer class="px-0" mobile-breakpoint="350">
                          <template v-slot:[`item.displayEqui.nom`]="{ item }">
                              <v-chip class="ma-2" label>
                                  <v-avatar left>
                                      <v-img v-bind:src="'img/fanion/'+item.displayEqui.fanion" :alt="item.displayEqui.nomCourt"/>
                                  </v-avatar>
                                  <h6 class="display-1 mb-1 ">{{ item.displayEqui.nom }}</h6>
                              </v-chip>
                          </template>
                          <template v-slot:[`item.butsPour`]="{ item }">{{ item.butsPour }} / {{ item.butsContre }}</template>
                      </v-data-table>
                  </v-card-text>
                </base-material-card>

                <v-card max-width="400" class="mx-auto">
                    <v-img class="mx-auto" max-height="200px" max-width="200px" src="img/pub/mma.png" alt="mma"/>
                    <v-card-title>Annonceurs</v-card-title>
                </v-card>

              </v-col>
            </v-row>
          </v-container>
          </v-tab-item>

          <v-tab-item>
          <v-container id="pouleB-match" fluid tag="section">
              <v-row>
                  <v-col>
                      <base-material-card color="colorPB" class="px-0"  >
                          <template v-slot:heading>
                              <div class="display-2 font-weight-light">{{ categorie }} - PouleB - Matchs</div>
                          </template>
                          <v-card-text class="px-0" >
                              <v-data-table :headers="headersMatch" :items="lesmatchsB" hide-default-footer class="px-0" mobile-breakpoint="350">
                                  <template v-slot:[`item.id`]="{ item }">
                                  <h6 class="display-1 mb-1 black--text">{{ item.id}}</h6>
                                  <h6 class="display-1 mb-1 grey--text">{{ item.salle}}</h6>
                                  <h6 class="display-1 mb-1 grey--text">{{ item.heureDebut}}</h6>
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
                  <v-col>
                    <base-material-card color="colorPB" class="px-0"  >
                        <template v-slot:heading>
                            <div class="display-2 font-weight-light">{{ categorie }} - PouleB - Classement</div>
                        </template>
                        <v-card-text class="px-0" >
                            <v-data-table :headers="headersClassement" :items="leclassementB" hide-default-footer class="px-0" mobile-breakpoint="350">
                                <template v-slot:[`item.displayEqui.nom`]="{ item }">
                                <v-chip class="ma-2" label>
                                    <v-avatar left>
                                        <v-img v-bind:src="'img/fanion/'+item.displayEqui.fanion" :alt="item.displayEqui.nomCourt"/>
                                    </v-avatar>
                                    <h6 class="display-1 mb-1 ">{{ item.displayEqui.nom }}</h6>
                                </v-chip>
                            </template>
                            <template v-slot:[`item.butsPour`]="{ item }">{{ item.butsPour }} / {{ item.butsContre }}</template>
                    </v-data-table>
                    </v-card-text>
                    </base-material-card>

                    <v-card max-width="400" class="mx-auto">
                    <v-img class="mx-auto" max-height="200px" max-width="200px" src="img/pub/poules.png" alt="mma"/>
                    <v-card-title>Annonceurs</v-card-title>
                    </v-card>
                  </v-col>
              </v-row>
          </v-container>
          </v-tab-item>
      </v-tabs>
    </v-card>
</template>

<script>
import axios from 'axios'

export default {
    data() {
      return {
        categorie: "U11",
        urlPouleA: process.env.BASE_URL + "datas/U11_pouleA.json",
        urlPouleB: process.env.BASE_URL + "datas/U11_pouleB.json",
        urlEquipe: process.env.BASE_URL + "datas/info_tournoi.json",
        lesmatchsA: [],
        leclassementA: [],
        lesmatchsB: [],
        leclassementB: [],
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
            text: 'Points',
            value: 'points',
            align: 'center',
            class: 'font-weight-bold px-1',
            cellClass: 'font-weight-bold px-1',
          },
          {
            sortable: false,
            text: 'Diff Buts',
            value: 'diffbuts',
            align: 'center',
            class: 'font-weight-bold px-1',
            cellClass: 'font-weight-bold px-1',
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
          {
            sortable: false,
            text: 'Buts Pour/Contre',
            align: 'center',
            value: 'butsPour',
            class: 'px-1',
            cellClass: 'px-1 text-left',
            mobile: 'false',
          },
        ],
      };
    },
    created() {
      this.loadDataOds();
      // reload automatic
      setInterval(this.update(), 20000);
    },
    methods: {
        update(){
            this.loadDataOds();
            //console.log("update called");
        },
        loadDataOds() {

            // Load Equipes
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

            // Load PoulesA
            var urlPouleA = this.urlPouleA;
            axios
                .get(urlPouleA)
                .then(response => {
                  this.lesmatchsA = response.data.lesmatchs
                  this.leclassementA = response.data.leclassement

                  for (var n in this.lesmatchsA ) {
                    this.lesmatchsA[n].score = this.lesmatchsA[n].equipeDom.but+" - "+this.lesmatchsA[n].equipeExt.but
                    this.lesmatchsA[n].displayDom = this.lesequipeskey[this.lesmatchsA[n].equipeDom.id]
                    this.lesmatchsA[n].displayExt = this.lesequipeskey[this.lesmatchsA[n].equipeExt.id]
                  }

                  for (var z in this.leclassementA ) {
                    this.leclassementA[z].displayEqui = this.lesequipeskey[this.leclassementA[z].id]
                  }
                  var sortedclassementA = this.leclassementA.sort((p1, p2) => (p1.rang > p2.rang) ? 1 : (p1.rang < p2.rang) ? -1 : 0)
                  this.leclassementA = sortedclassementA

                  //console.log(this.lesmatchsA)
                }).catch(error => {
                   console.log(error)
                })

            // Load PoulesB
            var urlPouleB = this.urlPouleB;
            axios
                .get(urlPouleB)
                .then(response => {
                  this.lesmatchsB = response.data.lesmatchs
                  this.leclassementB = response.data.leclassement

                  for (var n in this.lesmatchsB ) {
                    this.lesmatchsB[n].score = this.lesmatchsB[n].equipeDom.but+" - "+this.lesmatchsB[n].equipeExt.but
                    this.lesmatchsB[n].displayDom = this.lesequipeskey[this.lesmatchsB[n].equipeDom.id]
                    this.lesmatchsB[n].displayExt = this.lesequipeskey[this.lesmatchsB[n].equipeExt.id]
                  }

                  for (var z in this.leclassementB ) {
                    this.leclassementB[z].displayEqui = this.lesequipeskey[this.leclassementB[z].id]
                  }
                  var sortedclassementB = this.leclassementB.sort((p1, p2) => (p1.rang > p2.rang) ? 1 : (p1.rang < p2.rang) ? -1 : 0)
                  this.leclassementB = sortedclassementB

                  //console.log(this.lesmatchsB)
                }).catch(error => {
                   console.log(error)
                })
          },
    },
};
</script>

