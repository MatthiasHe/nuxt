<template>
	<section class="columns is-multiline">
		<div class="">
			<input type="text" v-model="nameFilter" placeholder="Search by name.."/>
			<label>Search by name :</label>
		</div>
		<div class="card column is-one-third" v-for="character in filteredCharacters" :key="character.char_id">
			<div class="card-image">
				<figure class="image is-4by3">
					<img :src="character.img" :alt="character.name">
				</figure>
			</div>
			<div class="card-content">
				<div class="media">
					<div class="media-content">
						<p class="title is-4">{{ character.name }}</p>
						<p class="subtitle is-6">{{ character.status}}</p>
					</div>
				</div>
			</div>
		</div>
	</section>

</template>

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
	    nameFilter: '' as string,
    }
  },
	computed: {
  	filteredCharacters(): ICharacter[] {
  		return this.characters.filter(character => {
  			return character.name.toLowerCase().includes(this.nameFilter.toLowerCase());
			})
		}
	}
})
</script>

<style scoped>

</style>
