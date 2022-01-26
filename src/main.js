import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Fragment from 'vue-fragment'
import progressive from 'progressive-image/dist/vue'

Vue.use(Fragment.Plugin).use(progressive, {
  removePreview: true,
  scale: true
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  methods: {
    importAll(r) {
      let reCompressed = /.\/c/; // Regex to determine c-prefix of compressed image
      let images = [];
      r.keys().forEach((key, i) => {
        if (reCompressed.test(key)) { // Finds & matches compressed image (c-prefix) with corresponding original
          let compressedMatch = key.replace('c', '');
          images.find(img => img.pathShort == compressedMatch).compressed = { pathLong: r(key), pathShort: key};
        } else {
          images.push({ pathLong: r(key), pathShort: key, id: i })
        }
      });
      return images;
    },
    mounted() {
      return this.importAll(require.context('./assets/art/', true, /\.jpg$/));
    },
  },
  data() {
    let images = [];
    images = this.mounted();
    return {
      work: {
        jobs: [
          {
            id: 0,
            url: 'fulcrum',
            org: 'Fulcrumpro Inc.',
            title: 'Software Engineer',
            project: null,
            link: 'https://fulcrumpro.com/',
            span: '2020-2021',
            details: [
              "Aggregated, transformed, and projected RxJS observables from numerous endpoints into component-specific response streams",
              "Implemented asynchronous DB LINQ queries on endpoints to efficiently fetch multiple data sources for response",
              "Integrated PM feedback to create polished, flexible UI components"
            ]
          },
          {
            id: 1,
            url: 'bertha',
            org: 'Aunt Bertha',
            title: 'Full Stack Developer',
            project: null,
            link: 'https://www.findhelp.org/',
            span: '2020-2020',
            details: [
              "Utilized custom time-bounded digest decorator on API endpoint to aggregate requests into a standardized response behavior",
              "Architecture reviewed, gathered feedback on, and implemented new relational DB architecture to expand business logic insight",
              "Debugged crucial email-embedded CSRF token workflow for single-use update links provided for clients"
            ]
          },
          {
            id: 2,
            url: 'yonder',
            org: 'Yonder',
            title: 'Full Stack Developer',
            project: null,
            link: 'https://www.yonder-ai.com/',
            span: '2019-2020',
            details: [
              "Wrote and standardized CRUD API operations across services",
              "Wrote complex SQL queries and upsertions to aggregate analytics data and move their output between databases",
              "Performed Alembic database migrations to modify existing tables, create new tables, and define foreignkey/backref relationships",
              "Constructed frontend dashboards and charts to display data",
              "Implemented parameterized testing; populated local databases, mocked M2M request responses and authorization decorators"
            ]
          },
          {
            id: 3,
            url: 'lobbyview',
            org: 'MIT Dept Political Science',
            project: 'LobbyView Database',
            title: 'Full Stack Developer',
            link: 'https://www.lobbyview.org/',
            span: '2017-2018',
            details: [
              "Spearheaded the design of a new website with new query filters",
              "Overhauled dependency management, Gulp build process, and Angular component architecture",
              "Upgraded ElasticSearch version; Rebuilt custom query functions",
              "Created new word-parsing n-gram cloud visualization & backend"
            ]
          },
          {
            id: 4,
            url: 'napa',
            org: 'New American Public Art',
            project: 'Color Commons',
            title: 'Open Sourceror',
            link: 'http://www.newamericanpublicart.com/color-commons-2017',
            span: '2017-2017',
            details: [
              "Built and managed RESTful API architecture for a public art installation on the Boston Greenway",
              "Developed filtered visualization of frequency of user SMS requests using D3 sunburst visualization"
            ]
          },
          {
            id: 5,
            url: 'crafts',
            org: 'Tufts University Crafts Center',
            project: 'Glass/Electronics Dept',
            title: 'Volunteer Coordinator',
            link: 'https://tufts.makernetwork.org/spaces/crafts-center',
            span: '2014-2018',
            details: [
              "Aided students and community members at a public arts & crafts resource center"
            ]
          }
        ],
        projects: [
          {
            id: 1,
            url: 'self-nn',
            org: 'Self-Directed',
            project: 'Neural Network Digit Predictor',
            title: '',
            link: 'https://tfjs-mnist-predictor.herokuapp.com/',
            span: '2019',
            details: [
            'Built a web app to support an interactive tensorflow-framework neural network classifier',
            'Used a trained model against canvas input to predict digits drawn by the user'
            ]
          },
          {
            id: 2,
            url: 'ml-nn',
            org: 'Intro to Machine Learning (Tufts)',
            project: 'Neural Network',
            title: '',
            link: 'https://github.com/syd-strzempko/archived-projects/tree/master/neural-network',
            span: '2018',
            details: [
              'Built a neural network from scratch to run with multi-depth/width settings on nonbinary features',
              'Graphed test set classifier accuracy to portray best depth and width combinations for learning'
            ]
          },
          {
            id: 3,
            url: 'um',
            org: 'Machine Structure & Assembly Programming (Tufts)',
            project: 'Universal Machine',
            title: '',
            link: 'https://github.com/syd-strzempko/archived-projects/tree/master/universal-machine',
            span: '2018',
            details: [
            'Coded a fully functional (13-command) UM with segmented memory in C as part of a paired team',
            'Tested refactored code against progressively better benchmarks with GDB/DDB debugging'
            ]
          },
          {
            id: 4,
            url: 'ml-classify',
            org: 'Intro to Machine Learning (Tufts)',
            project: 'IBK v J48 Classification',
            title: '',
            link: 'https://github.com/syd-strzempko/archived-projects/tree/master/IBK-v-J48',
            span: '2018',
            details: [
              'Demonstrated iterable kNN and decision tree learning on multi-feature classification sets',
              'Graphed best test set accuracy as a product of variation in features vs train set size'
            ]
          }
        ]
      },
      art: images,
      home: {
        photo: 'profile.jpg',
        title: 'Syd Strzempko',
        byline: 'Software Engineer & Artist',
        details: [
          'Engineer with an eye towards technologies which seek to understand data at the core of the human experience.',
          'My preferred projects are those with an emphasis on open-source, clean code, and a streamlined workflow.',
          'I\'m always eager to learn new skills to further our objectives as a team, and approach every challenge with creativity and passion!'
        ]
      }
    };
  }
}).$mount('#app')
