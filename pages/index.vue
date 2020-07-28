<template>
	<section class="columns is-multiline">
		<div class="">
			<label>Search by name:</label>
			<input type="text" v-model="nameFilter" placeholder="Search by name.."/>

			<label>Search by status:</label>
			<select v-model="statusFilter">
				<option v-for="status in statusesList" :value="status">{{ status ? status : 'All' }}</option>
			</select>

			<label>Search by season:</label>
			<select v-model="seasonFilter">
				<option :value="0">All seasons</option>
				<option v-for="season in seasonsNumber" :value="season">{{ season }}</option>
			</select>
		</div>
		<div class="card column is-one-third" v-for="(character, index) in filteredCharacters" :key="index">
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
	status: ECharacterStatus;
	nickname: string;
	appearance: number[];
	portrayed: string;
	category: string;
	better_call_saul_appearance: number[];
}

enum ECharacterStatus {
	Alive = 'Alive',
	Deceased = 'Deceased',
	PresumeDead = 'Presumed dead',
	Unknow = '?',
	All = '',
}

export default Vue.extend({
  asyncData (): Promise<{ characters: ICharacter[] }> {
  	return axios.get('https://www.breakingbadapi.com/api/characters')
		  .then((res) => {
			  return { characters: res.data.slice(0, 24) }
		  })
  },
  data () {
    return {
      characters: [] as ICharacter[],
	    nameFilter: '' as string,
			statusesList: ECharacterStatus,
			statusFilter: ECharacterStatus.All as ECharacterStatus,
			seasonsNumber: 5 as number,
	    seasonFilter: 0,
    }
  },
	mounted() {
		axios.get('https://www.breakingbadapi.com/api/characters')
			.then((res) => {
				this.characters = res.data.concat(res.data);
			})
	},
	computed: {
  	filteredCharacters(): ICharacter[] {
  		return this.characters.filter(character => {
  			return character.name.toLowerCase().includes(this.nameFilter.toLowerCase())
					&& character.status.includes(this.statusFilter)
					&& (character.appearance.includes(this.seasonFilter) || !this.seasonFilter);
			})
		}
	}
})
</script>

<style scoped>

</style>
