<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        y
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
			<ul id="example-1">
				<li v-for="item in characters" :key="item.char_id">
					{{ item }}
				</li>
			</ul>
    </div>
  </div>
</template>
s
<script lang="ts">
import Vue from 'vue'
import axios from 'axios';

interface ICharacter {
	char_id: number;
	name: string;
	birthday: string;
	occupation: string[];
	img: string;
	status: string;
	nickname: string;
	appaerance: number[];
	portrayed: string;
	category: string;
	better_call_saul_appearance: number[];
}

export default Vue.extend({
  asyncData (): Promise<{ characters: ICharacter[] }> {
  	return axios.get('https://www.breakingbadapi.com/api/characters')
		  .then((res) => {
			  return { characters: res.data }
		  })
  },
  data () {
    return {
      characters: [] as ICharacter[],
    }
  },
	mounted() {
  	console.log(this.characters);
	}
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
