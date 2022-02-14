<template>
  <div id="app" class="pattern-bg">

    <div id="header">
      <div id="header-wrapper">
        <router-link to="/" id="headertext">
          <span class="bookend" v-html="'>>'"></span>
          <span class="center">SYD STRZEMPKO</span>
          <span class="bookend" v-html="'<<'"></span>
        </router-link>
      </div>
    </div>

    <div id="main">
      <div id="nav">
          <router-link to="/">home</router-link>
          <router-link to="/work">work</router-link>
          <router-link to="/art">art</router-link>
      </div>
      <Route :name="this.$route.name" />
    </div>

    <div id="footer">
      <a href="https://github.com/syd-strzempko">©2022 Syd Strzempko</a>
    </div>

  </div>
</template>

<script>
import Route from '@/components/Route.vue'

export default {
  name: 'App',
  components: {
    Route
  }
}
</script>

<style>
/*****************************
    CUSTOM FONTS & COLORS 
*****************************/
@font-face {
  font-family: "computo-monospace-font";
  src: local("computo-monospace-font"),
   url(./fonts/computo-monospace-font/ComputoMonospace-p73xO.ttf);
}

@font-face {
  font-family: "digital-7-font";
  src: local("digital-7-font"),
   url(./fonts/digital-7-font/Digital7-1e1Z.ttf);
}

:root {
  --gr1: #5FFF02; /* neon gr */
  --gr2: #21E817; /* darker gr */

  --pink1: #EF1397; /* dangerous rose by nancy83224 */
  --pink2: #DA06BA; /* hacker berry pieby rollzone */
  --pipr: #FF0AFA; /* similar to, transitional pi-pu */
  --pr1: #9D00FF; /* electric purp - obeispo but deleted */
  --pr2: #7D13EF; /* darker purple */

  --ind1: #5800F2; /* rich indigo */
  --ind2: #54028E; /* midnight indigo */

  --light: #eeeeee; /* pale grey */
  --Txlight: rgb(238, 238, 238, .9); /* light with adjusted opacity */
  --dark: #000000; /* black */
}

html, body, #app { 
  height: 100%;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--dark);
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  font-family: 'Courier New', monospace;
}

#header {
  background-color: var(--ind1);
  border: .25rem solid var(--pipr);
  line-height: 3rem;
  font-family: "digital-7-font";
}
#header-wrapper {
  border: 0.25rem dashed var(--pink1);
  padding: .05rem;
}
#headertext {
  text-decoration: none;
  font-weight: normal;
}
#header:hover, #header:focus { 
  opacity: .75;
}
#header .center {
  font-size: 2.5rem;
  color: white;
  padding: 0.25rem 0.5rem;
  vertical-align: bottom;
}

#footer {
  background-color: var(--dark);
}
#footer a {
  font-weight: normal;
  color: white;
}

#main {
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: center;
}

/* Nav Bar */
#nav {
  display: flex;
  flex-flow: row;
  padding: .5rem 0 0 .5rem;
}
#nav a {
  padding: .25rem;
  font-weight: bold;
  color: #2c3e50;
  color: white;
  text-decoration: none;
  background-color: var(--ind1);
  border: .25rem solid var(--pipr);
  border-radius: 5px;
  margin-bottom: -0.3rem;
}
#nav a.router-link-exact-active {
  color: var(--gr1);
  background-color: var(--pipr);
  border: .25rem solid var(--pipr);
  border-bottom: none;
}

.content {
  border: .25rem solid var(--pipr);
  background-color: var(--Txlight);
  padding: .25rem 1rem .5rem;
}

/* Misc. */
.viewDesktop {
  display: none !important;
}

.bookend, .iconlink {
  vertical-align: top;
  color: var(--gr1);
  font-size: 1.25rem;
  font-family: "computo-monospace-font"
}
.iconlink:hover, .iconlink:focus {
  color: var(--gr1);
}

ul {
  text-align: justify;
  list-style-type: square;
}
a {
  text-decoration: none;
  font-weight: bold;
  color: var(--dark);
}
a:hover, a:focus, a:hover *, a:focus * {
  color: var(--gr1);
}
h1, h2 {
  margin: .5rem;
  color: var(--gr1);
  font-family: "digital-7-font";
}
h2 {
  color: var(--gr2);
}

ResumeDL {
  margin: 5px; 
}

/* DESKTOP VIEW */
@media screen and (min-width: 600px) {
  #main {
    align-items: center;
  }
  #header-wrapper {
    padding: .25rem;
  }
  #header .center {
    font-size: 5rem;
  }
  #header .bookend {
    font-size: 3rem;
  }
  .content, #nav {
    width: 80%;
  }
  #nav a {
    flex: 1;
  }
  .p-wrapper {
    margin-bottom: .5rem;
  }
  p, ul {
    text-align: center;
  }
  .viewDesktop {
    display: unset !important;
  }
}

/*****************
  NEW DESIGN
******************/
/**********************

TODO:
- tile view of work on larger browsers?
- change tile view on mobile for art?

*******************/

.pattern-bg {
  background: repeating-linear-gradient(90deg, #5FFF02 0, #5FFF02 2%, transparent 0, transparent 50%), repeating-linear-gradient(180deg, #5FFF02 0, #5FFF02 2%, transparent 0, transparent 50%);
  background-size: 3em 3em;
  background-color: #000000;
} /* Courtesy https://superdesigner.co/tools/css-backgrounds */

</style>


