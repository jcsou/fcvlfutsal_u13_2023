import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@/sass/overrides.sass'

Vue.use(Vuetify);

const theme = {
  primary: '#F1948A',
  secondary: '#00CAE3',
  accent: '#9C27b0',
  info: '#00CAE3',

  colorPA: '#A9CCE3',
  colorPB: '#A2D9CE',
  colorPC: '#D2B4DE',
  colorPD: '#FAD7A0',
  colorPE: '#F1948A',
  colorPF: '#CACFD2',
}

export default new Vuetify({
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
});
