import { createSlice, createSelector } from '@reduxjs/toolkit';
import { importFiles } from '../../utility/utils';

export const slice = createSlice({
  name: 'work',
  initialState: {
    jobs: [
        {
            url: 'sunpower',
            org: 'SunPower Corp.',
            title: 'Full Stack Software Engineer',
            project: null,
            link: 'https://us.sunpower.com/products/software/mysunpower',
            span: '2022-2024',
            details: [
                'Built out new feature API and UI framework, communicated with PM and cross-team developers to establish new data entity expectations',
                'Integrated AWS Chat Client into app to improve and track customer intermediary feedback/troubleshooting',
                'Leveraged Google Analytics GA4 custom dimensions and created explorations to garner insight into customer activity'
            ],
            // images: [ 'sunpower_main.png', 'sunpower_mobile.png' ]
        },
        {
            url: 'fulcrum',
            org: 'Fulcrumpro Inc.',
            title: 'Software Engineer',
            project: null,
            link: 'https://fulcrumpro.com/',
            span: '2020-2021',
            details: [
                'Aggregated, transformed, and projected RxJS observables from numerous endpoints into component-specific response streams',
                'Implemented asynchronous DB LINQ queries on endpoints to efficiently fetch multiple data sources for response',
                'Integrated PM feedback to create polished, flexible UI components'
            ],
            // images: [ 'fulcrum_main.png', 'fulcrum_scheduler.png', 'fulcrum_2.png' ]
        },
        {
            url: 'auntbertha',
            org: 'Aunt Bertha',
            title: 'Full Stack Developer',
            project: null,
            link: 'https://www.findhelp.org/',
            span: '2020-2020',
            details: [
                'Utilized custom time-bounded digest decorator on API endpoint to aggregate requests into a standardized response behavior',
                'Architecture reviewed, gathered feedback on, and implemented new relational DB architecture to expand business logic insight',
                'Debugged crucial email-embedded CSRF token workflow for single-use update links provided for clients'
            ],
            // images: [ 'findhelp_main.png', 'findhelp_listing.png' ]
        },
        {
            url: 'yonder',
            org: 'Yonder',
            title: 'Full Stack Developer',
            project: null,
            link: 'https://www.yonder-ai.com/',
            span: '2019-2020',
            details: [
                'Wrote and standardized CRUD API operations across services',
                'Wrote complex SQL queries and upsertions to aggregate analytics data and move their output between databases',
                'Performed Alembic database migrations to modify existing tables, create new tables, and define foreignkey/backref relationships',
                'Constructed frontend dashboards and charts to display data',
                'Implemented parameterized testing; populated local databases, mocked M2M request responses and authorization decorators'
            ],
            // images: [ 'yonder_main.png', 'yonder_chart.png', 'yonder_graph.png' ]
        },
        {
            url: 'lobbyview',
            org: 'MIT Dept Political Science',
            project: 'LobbyView Database',
            title: 'Full Stack Developer',
            // stack: 'Elasticsearch, python, Angular, D3.js package',
            link: 'https://www.lobbyview.org/',
            span: '2017-2018',
            details: [
                'Spearheaded the design of a new website with new query filters',
                'Overhauled dependency management, Gulp build process, and Angular component architecture',
                'Upgraded ElasticSearch version; Rebuilt custom query functions',
                'Created new word-parsing n-gram cloud visualization & backend'
            ],
            // images: [ 'lobbyview_main.png', 'lobbyview_chart.png', 'lobbyview_industrylevel.png', 'lobbyview_ngram.png' ]
        },
        {
            url: 'napa',
            org: 'New American Public Art',
            project: 'Color Commons',
            title: 'Open Sourceror',
            // stack: 'Tornado (python), HTML, D3.js package',
            link: 'http://www.newamericanpublicart.com/color-commons-2017',
            span: '2017-2017',
            details: [
                'Built and managed RESTful API architecture for a public art installation on the Boston Greenway',
                'Developed filtered visualization of frequency of user SMS requests using D3 sunburst visualization'
            ],
            // images: [ 'colorcommons_main.png', 'colorcommons_chart.png' ]
        },
        {
            url: 'crafts',
            org: 'Tufts Crafts Center',
            project: 'Glass/Electronics Dept',
            title: 'Volunteer Coordinator',
            link: 'https://tufts.makernetwork.org/spaces/crafts-center',
            span: '2014-2018',
            details: [
                'Aided students and community members at a public arts & crafts resource center'
            ],
            // images: [ 'crafts_main.png', 'crafts_grass.jpg' ]
        }
    ],
    projects: [
        {
            url: 'digit',
            org: 'Self-Directed',
            project: 'Digit Predictor',
            title: '',
            link: 'https://tfjs-on-mnist.onrender.com',
            span: '2019',
            details: [
                'Built a web app to support an interactive tensorflow-framework neural network classifier',
                'Used a trained model against canvas input to predict digits drawn by the user'
            ],
            // images: []
        },
        {
            url: 'neural-network',
            org: 'Intro to Machine Learning',
            project: 'Neural Network',
            title: '',
            link: 'https://github.com/syd-strzempko/archived-projects/tree/master/neural-network',
            span: '2018',
            details: [
                'Built a neural network from scratch to run with multi-depth/width settings on nonbinary features',
                'Graphed test set classifier accuracy to portray best depth and width combinations for learning'
            ],
            // images: []
        },
        {
            url: 'universal-machine',
            org: 'Machine Structure & Assembly Programming',
            project: 'Universal Machine',
            title: '',
            link: 'https://github.com/syd-strzempko/archived-projects/tree/master/universal-machine',
            span: '2018',
            details: [
                'Coded a fully functional (13-command) UM with segmented memory in C as part of a paired team',
                'Tested refactored code against progressively better benchmarks with GDB/DDB debugging'
            ],
            // images: []
        },
        {
            url: 'ibk-j48',
            org: 'Intro to Machine Learning',
            project: 'IBK v J48 Classification',
            title: '',
            link: 'https://github.com/syd-strzempko/archived-projects/tree/master/IBK-v-J48',
            span: '2018',
            details: [
                'Demonstrated iterable kNN and decision tree learning on multi-feature classification sets',
                'Graphed best test set accuracy as a product of variation in features vs train set size'
            ],
            // images: []
        }
    ],
    images: importFiles(require.context('../../assets/work/', true, /\.(png|gif)$/))
  },
  reducers: {},
});

// List selectors
export const selectCombined = (state) => {
    return [ ...state.work.jobs, ...state.work.projects ];
};

export const selectImages = (state) => {
    return state.work.images;
}

export const selectCombinedComplete = createSelector([selectCombined, selectImages], (jobs, allImages) => {
    return jobs.map(job => {
        let images = allImages?.filter((image) => image.pathShort.includes(job.url));
        return { ...job, images };
    });
})

// Element selectors
export const selectSingle = (state, url) => {
    const combined = selectCombined(state);
    return combined.find((single) => single.url === url);
}

export const selectSingleComplete = createSelector([selectSingle, selectImages], (job, allImages) => {
    let images = allImages?.filter((image) => image.pathShort.includes(job.url));
    return { ...job, images };
})

export default slice.reducer;
