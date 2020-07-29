<template>
	<div>
		<section class="columns is-centered">
			<div class="column is-half is-narrow">
				<label class="label">Search by name:</label>
				<input class="input" type="text" v-model="nameFilter" placeholder="Search by name.."/>
			</div>

			<div class="column is-quarter is-narrow">
				<label class="label">Search by status:</label>
				<div class="select">
					<select v-model="statusFilter">
						<option v-for="status in statusesList" :value="status">{{ status ? status : 'All' }}</option>
					</select>
				</div>
			</div>

			<div class="column is-quarter is-narrow">
				<label class="label">Search by season:</label>
				<div class="select">
					<select v-model="seasonFilter">
						<option :value="0">All seasons</option>
						<option v-for="season in seasonsNumber" :value="season">{{ season }}</option>
					</select>
				</div>
			</div>
		</section>

		<section class="columns is-multiline">
			<CharacterCard v-for="(character, index) in filteredCharacters" :key="index" :character="character"></CharacterCard>
		</section>
	</div>


</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios';
import { ECharacterStatus } from '~/models/character-status.enum';
import { ICharacter } from '~/models/character.interface';

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
	    seasonFilter: 0 as number,
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
